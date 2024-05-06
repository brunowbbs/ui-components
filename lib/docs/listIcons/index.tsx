import { ToastContainer, toast } from "react-toastify";
import { ButtonV2, Svg } from "../../components";
import { IconsListProps } from "./types";

import "../../index";

export const Icons = ({ width, icons, isCurrentColor }: IconsListProps) => {
  function copyNameIcon(name: string) {
    navigator.clipboard.writeText(name);

    toast("Ícone " + name + " copiado!");
  }

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-6">
        {Object.keys(icons).map((icon: string) => (
            <div key={icon}
              tabIndex={0}
              className="flex flex-col items-center p-2 rounded border-1"
            >
                <Svg
                  src={icons[icon]}
                  isCurrentColor={isCurrentColor}
                  alt={`${icon} icon`}
                  height="30"
                  width={width || "30"}
                />
              <ButtonV2
                size="xs"
                onPress={() => copyNameIcon(icon)}
                variant="primary"
                >
                {icon}
              </ButtonV2>
            </div>
        ))}
      </div>
      </>
  );
};
