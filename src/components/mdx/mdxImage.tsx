import Image from "../common/NextImage";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

export default function MdxImage({ src, alt, priority }: Props) {
  const prty = priority ? true : false;

  return (
    <div className="w-full h-full">
      <Image
        className="rounded-lg mx-auto"
        src={src}
        alt={alt}
        width={650}
        height={650}
        priority={prty}
      />
    </div>
  );
}
