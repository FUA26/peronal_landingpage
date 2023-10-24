import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type BackButtonProps = {
  url?: string;
  to?: string;
};

export default function BackButton({ url, to }: BackButtonProps) {
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      router.back();
    }
  };

  return (
    <div className="w-fit">
      {url ? (
        <Link href={url} passHref>
          <Button className="group" variant="outline">
            <div className="flex gap-2 group-hover:gap-3 transition-all duration-300">
              <span>←</span>
              <span>Back to {to}</span>
            </div>
          </Button>
        </Link>
      ) : (
        <Button className="group" variant="outline" onClick={handleOnClick}>
          <div className="flex gap-2 group-hover:gap-3 transition-all duration-300">
            <span>←</span>
            <span>Back</span>
          </div>
        </Button>
      )}
    </div>
  );
}
