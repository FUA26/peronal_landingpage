import React, { FC } from "react";
import Image from "../common/NextImage";

interface StickerProps {
  height: number;
  width: number;
  imageClass?: string;
  name: string;
  imageUrl: string;
}

const Sticker: FC<StickerProps> = ({
  height,
  width,
  imageClass,
  name,
  imageUrl,
}) => {
  return (
    <div
      className={`group/tooltip absolute  group/tooltip hover:z-50 ${imageClass}`}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt={name}
          height={height}
          width={width}
          priority
          className={` transition w-[${width}px] h-[${height}px] `}
        />
      </div>
      <div
        className={`absolute flex w-max pointer-events-none opacity-0 group-hover/tooltip:opacity-100 mt-3 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 shadow-lg transition left-1/2 -translate-x-1/2`}
      >
        <p className="p-0 text-gray-700 dark:text-gray-300">{name}</p>
      </div>
    </div>
  );
};

export default Sticker;
