import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Props } from "./types";

export function Popover({ left = 0, mask_button, children }: Props) {
  const [show, setShow] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={togglePopover}>
        {mask_button}
      </button>

      {show && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          style={left ? { left: `${-left}%` } : undefined}
          className={clsx(
            `bg-white absolute p-3 rounded-md shadow-2xl mt-1 z-[999] border`
          )}
        >
          <div className="w-48">{children}</div>
        </motion.div>
      )}
    </div>
  );
}
