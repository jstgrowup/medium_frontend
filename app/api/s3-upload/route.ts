import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const fileExtension = file.name.split(".").pop() || "jpeg";
    const client = new S3Client({
      region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_SECRET ?? "",
      },
    });
    const fileKey = `${nanoid()}.${fileExtension}`;
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME || "",
      Key: fileKey,
    });

    const formDataS3 = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formDataS3.append(key, value);
    });
    formDataS3.append("file", formData.get("file") as string);
    const uploadResponse = await fetch(url, {
      method: "POST",
      body: formDataS3,
    });
    if (uploadResponse.ok) {
      const uploadedFileUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${fileKey}`;

      return new Response(
        JSON.stringify({
          message: "File uploaded successfully",
          url: uploadedFileUrl,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return NextResponse.json(
        { message: "Something went wrong while uplaoding" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong while uplaoding" },
      { status: 400 }
    );
  }
}
