import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/logo.svg"}
      alt="Logo"
      width={0}
      height={0}
      className="h-auto w-full"
      sizes="100vw"
    />
  );
};

export default Logo;
