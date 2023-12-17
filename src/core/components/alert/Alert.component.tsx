import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/20/solid";

export interface AlertComponentProps {
  isOpen?: boolean;
  message?: string;
  variant?: "success" | "danger" | "info";
  onClose?: () => void;
}

export const AlertComponent = ({
  isOpen = false,
  message = "",
  variant = "info",
  onClose,
}: AlertComponentProps) => {
  const handleClickClose = () => {
    
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        variant === "danger"
          ? "border border-[#FC5959]"
          : "border border-[#FC5959]",
        variant === "danger" ? "bg-[#FFF0F0]" : "bg-[#FFF0F0]",
        "rounded-[0.5rem]",
        isOpen
          ? "grid grid-flow-col items-center content-center justify-between justify-items-start"
          : "hidden",
        "fixed top-[2.25rem] left-[50%]",
        "translate-x-[-50%]",
        "py-[0.5rem] px-[1rem] gap-x-[0.5rem]",
        "max-w-[432px] w-full",
        "z-[60]"
      )}
    >
      <p
        className={clsx(
          variant === "danger" ? "text-[#662424]" : "text-[#662424]",
          "text-[1rem] font-normal"
        )}
        dangerouslySetInnerHTML={{ __html: message }}
      />

      {/* <button
        className={clsx(
          "flex items-center justify-end",
          "rounded-[0.375rem]",
          "cursor-pointer"
        )}
        onClick={handleClickClose}
      >
        <XMarkIcon
          className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#662424]")}
        />
      </button> */}
    </div>
  );
};
