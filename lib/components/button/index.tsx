import { useState } from "react";
import clsx from "clsx";
import { Spinner } from "../spinner";
import { ButtonProps } from "./types";
import { COLORS } from "../../../utils";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    link,
    outline,
    isLoading,
    disabled,
    text,
    iconRight,
    iconLeft,
    width = undefined,
    type = "button",
    onClick,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    width,
    backgroundColor: isHovered ? COLORS[`${variant}-darker`] : COLORS[variant],
    color: "white",
    transition: "all 0.5s ease",
    borderWidth: 1,
    borderColor: isHovered ? COLORS[`${variant}-darker`] : COLORS[variant],
  };

  if (outline) {
    buttonStyles.backgroundColor = "transparent";
    buttonStyles.color = isHovered
      ? COLORS[`${variant}-darker`]
      : COLORS[variant];
  }

  if (link) {
    buttonStyles.backgroundColor = "transparent";
    buttonStyles.borderColor = "transparent";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-3 flex items-center justify-center rounded-md py-[5.75px]"
    >
      {isLoading ? (
        <span>
          <Spinner color={outline ? "green" : "white"} />
        </span>
      ) : (
        <p
          className={clsx({
            "text-primary hover:text-primary-darker hover:transition font-medium":
              link,
          })}
        >
          <span className="flex flex-row items-center gap-1 text-sm">
            <span> {iconLeft}</span>
            <span> {text}</span>
            <span> {iconRight}</span>
          </span>
        </p>
      )}
    </button>
  );
}
