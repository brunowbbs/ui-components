import "react-responsive-modal/styles.css";
import { Modal as ModalResponsive } from "react-responsive-modal";
import { PropsWithChildren } from "react";
import { MdClose } from "react-icons/md";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: number;
} & PropsWithChildren;

export function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 400,
}: ModalProps) {
  return (
    <ModalResponsive
      center
      closeIcon={<MdClose size={18} />}
      open={isOpen}
      onClose={onClose}
      styles={{
        modal: {
          width: "90%",
          maxWidth,
          borderRadius: 8,
          maxHeight: "90%",
        },
      }}
    >
      <div className="p-8 min-w-14">{children}</div>
    </ModalResponsive>
  );
}
