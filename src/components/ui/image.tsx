import NextImage, { ImageProps } from "next/image";

const Image = ({ src, alt, className, ...rest }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={className}
      priority
      {...rest}
    />
  );
};

export default Image;
