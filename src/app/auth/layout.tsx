import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-row h-screen items-center">
        <div className="bg-black w-1/2 h-full">
          {/* <Image
            src="https://megasupply.com.ec/wp-content/uploads/2023/10/thumb_portrait-smiling-happy-man-with-laptop-casuals-isolated-white-concept-communication.png"
            objectFit="cover"
            alt="Auth background"
            height={2000}
            width={2000}
            className="h-full"
          /> */}
        </div>
        <div className="w-1/2 h-full flex items-center justify-center  bg-gradient-to-b from-tertiary to-fourth">
          {children}
        </div>
      </div>
    </div>
  );
}
