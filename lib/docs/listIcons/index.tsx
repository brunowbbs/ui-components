import { Fragment } from 'react';
import { toast } from 'react-toastify';
import { Svg } from '../../components';
import { IconsListProps } from './types';

export const Icons = ({ width, icons, isCurrentColor }: IconsListProps) => {
  function copyNameIcon(name: string) {
    navigator.clipboard.writeText(name);

    toast('Ícone ' + name + ' copiado!');
  }

  return (
    <>
      <div
        className="
        grid
        gap-6
        items-center
        grid-cols-[auto,1fr]
        md:grid-cols-[auto,1fr,auto,1fr]
        lg:grid-cols-[auto,1fr,auto,1fr,auto,1fr,auto,1fr]
      "
      >
        {Object.keys(icons).map((icon: string) => (
          <Fragment key={icon}>
            <div
              tabIndex={0}
              className="
                p-2
                rounded
                border-1
                border-base-grey-light-100
                bg-base-white
                text-font-default
              "
            >
              <Svg
                src={icons[icon]}
                isCurrentColor={isCurrentColor}
                alt={`${icon} icon`}
                height="30"
                width={width || '30'}
              />
            </div>
            <button
              role="button"
              className="truncate cursor-pointer"
              onClick={() => copyNameIcon(icon)}
            >
              {icon}
            </button>
          </Fragment>
        ))}
      </div>
    </>
  );
};
