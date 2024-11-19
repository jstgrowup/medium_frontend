import AuthHeader from "@/components/auth/Auth-header";
import Quote from "@/components/auth/Quote-auth";
import Socials from "@/components/auth/Socials";
import { AUTH_TYPE } from "@/utils/enums/Global-enums";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen flex justify-center flex-col items-center ">
        <AuthHeader type={AUTH_TYPE.SIGNIN} />
        {children}
        <div className="min-w-10 mt-1">
          <Socials />
        </div>
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
