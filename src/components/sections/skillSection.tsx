import Marquee from "react-fast-marquee";

import { STACKS } from "@/const/skill";

function SkillSection() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS);
  const totalRows = 3;
  const itemsPerRow = Math.ceil(stacksInArray.length / totalRows);

  return (
    <div className="flex flex-col space-y-1 overflow-x-hidden">
      {Array.from({ length: totalRows }, (_, rowIndex) => {
        const startIndex = rowIndex * itemsPerRow;
        const endIndex = startIndex + itemsPerRow;
        const rowItems = stacksInArray.slice(startIndex, endIndex);

        return (
          <Marquee
            speed={25}
            className="py-3"
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
          >
            {rowItems.map(([name, icon], index) => (
              <div className="px-2" key={index}>
                <div className="w-full flex space-x-2 px-4 py-2 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-neutral-800">
                  <div className="h-6 w-6">{icon}</div>
                  <div className="whitespace-nowrap">{name}</div>
                </div>
              </div>
            ))}
          </Marquee>
        );
      })}
    </div>
  );
}

export default SkillSection;
