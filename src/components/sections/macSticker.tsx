import { fav } from "@/const/fav";
import Image from "../common/NextImage";
import Sticker from "../ui/sticker";

const MacSticker = () => {
  return (
    <div className="relative w-[659px] h-[454px] m-auto hidden md:block">
      <Image
        className="rounded-2xl m-auto"
        src="/images/macbook.webp"
        alt="Profile Image"
        priority={true}
        height={454}
        width={659}
      />
      {fav.map((items) => (
        <Sticker
          key={items.id}
          imageClass={items.class}
          width={items.width}
          height={items.height}
          imageUrl={items.image}
          name={items.name}
        />
      ))}
    </div>
  );
};

export default MacSticker;
