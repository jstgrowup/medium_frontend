import { Input } from "@/components/ui/input";
import { FileUploadProps } from "@/utils/types.ts/blogs.types";
import Image from "next/image";
import { useState } from "react";
const BlogFileUpload = ({
  onUpload,
  existingImageUrl,
  uploadBlogImageAction,
}: FileUploadProps) => {
  const [localImageUrl, setLocalImageUrl] = useState(existingImageUrl || "");
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await uploadBlogImageAction(formData);
      const imageUrl = response?.data.url;
      setLocalImageUrl(imageUrl);
      onUpload(imageUrl);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  return (
    <div className="w-full flex items-center gap-4 lg:h-36 sm:h-16 md:h-24 justify-between">
      <Input
        id="picture"
        type="file"
        onChange={handleFileChange}
        className="lg:w-1/4 sm:w-1/2 md:w-1/2  border border-gray-300 rounded-md p-2"
      />
      {localImageUrl && (
        <div className="flex items-center justify-center lg:w-32 lg:h-32 sm:h-2 sm:w-2 md:h-20 md:w-20  rounded-md overflow-hidden">
          <Image
            src={localImageUrl}
            alt="Uploaded Image"
            className="object-cover w-full h-full"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default BlogFileUpload;
