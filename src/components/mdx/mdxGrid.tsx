import React from "react";

export default function GridMdx({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 items-start gap-4">{children}</div>;
}

export function GridItemMdx({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
