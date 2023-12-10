import * as React from "react";
import clsx from "clsx";

export interface IUploadTabsDocumentsProps {
  active?: string;
  items?: {
    id: string;
    name: string;
  }[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function UploadTabsDocuments({
  active = "",
  items = [],
  onClick,
}: IUploadTabsDocumentsProps) {
  return (
    <div
      className={clsx(
        "grid place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
      style={{ gridTemplateColumns: `repeat(${items.length},1fr)` }}
    >
      {items.map((item, itemIndex) => (
        <button
          key={itemIndex}
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center",
            "w-full",
            "py-[0.875rem]",
            "rounded-[0.25rem]",
            item.id === active
              ? "border border-[#232931] font-semibold"
              : "border border-[#697584] font-medium",
            "text-[0.75rem]",
            item.id === active ? "text-[#232931]" : "text-[#697584]"
          )}
          value={item.id}
          onClick={onClick}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
