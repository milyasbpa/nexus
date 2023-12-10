import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import clsx from "clsx";

export interface ModalComponentProps {
  isOpen?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const ModalComponent = ({
  isOpen = false,
  children,
  onClose,
}: ModalComponentProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={clsx("relative z-9999")} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={clsx("ease-out duration-300")}
          enterFrom={clsx("opacity-0")}
          enterTo={clsx("opacity-100")}
          leave={clsx("ease-in duration-200")}
          leaveFrom={clsx("opacity-100")}
          leaveTo={clsx("opacity-0")}
        >
          <div className={clsx("fixed inset-0 bg-black bg-opacity-25")} />
        </Transition.Child>

        <div className={clsx("fixed inset-0 overflow-y-auto")}>
          <div
            className={clsx(
              "flex min-h-full items-center justify-center p-4 text-center"
            )}
          >
            <Transition.Child
              as={Fragment}
              enter={clsx("ease-out duration-300")}
              enterFrom={clsx("opacity-0 scale-95")}
              enterTo={clsx("opacity-100 scale-100")}
              leave={clsx("ease-in duration-200")}
              leaveFrom={clsx("opacity-100 scale-100")}
              leaveTo={clsx("opacity-0 scale-95")}
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
