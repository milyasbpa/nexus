"use client";
import * as React from "react";
import clsx from "clsx";
import { plusJakartaSans } from "@/core/fonts";

export interface CheckboxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
  name?: string;
  id?: string;
  value?: string;
  defaultChecked?: boolean;
}

export const Checkbox = ({
  checked = false,
  label = "",
  defaultChecked = false,
  name = "",
  id = "",
  value = "",
  onChange,
}: CheckboxProps) => {
  return (
    <label
      className={clsx("flex items-center justify-start", "gap-x-[0.625rem]")}
    >
      <input
        id={id}
        className={clsx("sr-only")}
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span
        className={clsx(
          "flex items-center justify-start",
          "h-[1.25rem] w-[1.25rem] rounded-[0.25rem] border",
          "cursor-pointer",
          checked ? "bg-[#232931]" : "bg-white",
          checked ? "border-[#232931]" : "border-auro-metal-saurus"
        )}
        aria-hidden="true"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.29987 11.7001C6.2332 11.7001 6.17209 11.6889 6.11654 11.6667C6.06098 11.6445 6.00543 11.6056 5.94987 11.5501L2.9332 8.53339C2.8332 8.43339 2.7832 8.31117 2.7832 8.16672C2.7832 8.02228 2.8332 7.90006 2.9332 7.80006C3.0332 7.70006 3.14987 7.65006 3.2832 7.65006C3.41654 7.65006 3.5332 7.70006 3.6332 7.80006L6.29987 10.4667L12.3499 4.41672C12.4499 4.31672 12.5693 4.26672 12.7082 4.26672C12.8471 4.26672 12.9665 4.31672 13.0665 4.41672C13.1665 4.51672 13.2165 4.63617 13.2165 4.77506C13.2165 4.91395 13.1665 5.03339 13.0665 5.13339L6.64987 11.5501C6.59431 11.6056 6.53876 11.6445 6.4832 11.6667C6.42765 11.6889 6.36654 11.7001 6.29987 11.7001Z"
            fill="white"
          />
        </svg>
      </span>

      {label.length > 0 && (
        <p
          className={clsx(
            "font-light text-[0.875rem] text-[#232931] sm:text-[0.875rem]",
            "font-plusJakartaSans"
          )}
        >
          {label}
        </p>
      )}
    </label>
  );
};
