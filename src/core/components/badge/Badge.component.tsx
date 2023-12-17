"use client";
import * as React from "react";
import clsx from "clsx";

export interface BadgeComponentProps {
  variant?: "danger" | "success" | "warning";
  message?: string;
  isOpen?: boolean;
}

export const BadgeComponent = ({
  variant = "danger",
  message = "",
  isOpen = false,
}: BadgeComponentProps) => {
  return (
    <div
      className={clsx(
        isOpen ? "grid" : "hidden",
        "grid-cols-1 place-content-start place-items-start",
        "w-full",
        "px-[1rem] py-[1rem]",
        variant === "danger"
          ? "border border-[#FC5959]"
          : "border border-[#FC5959]",
        variant === "danger" ? "bg-[#FFF0F0]" : "bg-[#FFF0F0]",
        "rounded-[0.25rem]"
      )}
    >
      <p
        className={clsx(
          variant === "danger" ? "text-[#662424]" : "text-[#662424]",
          "text-[0.875rem] font-normal font-plusJakartaSans"
        )}
      >
        {message}
      </p>
    </div>
  );
};
