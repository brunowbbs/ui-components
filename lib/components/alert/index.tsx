import clsx from 'clsx';
import { toast } from 'react-toastify';
import { AlertOptions } from './types';

export const showAlert = ({
  type,
  message,
  title,
  onAction,
  textButton,
}: AlertOptions) => {
  let color = '';

  if (type === 'success') {
    color = '#F0FDF4';
  } else if (type === 'error') {
    color = '#FEF2F2';
  } else if (type === 'warning') {
    color = '#FFF7ED';
  }

  let toastId: string | null | number = null;

  const CustomToast = () => (
    <div className="px-2">
      <div>
        <p
          style={{ fontFamily: 'Plus Jakarta Sans' }}
          className={clsx(
            `font-bold text-[0.85rem] ${
              type === 'success'
                ? 'text-success-lighter'
                : type === 'warning'
                  ? 'text-warning'
                  : 'text-danger'
            }`,
          )}
        >
          {title}
        </p>
        <p className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          {message}
        </p>
        {textButton && (
          <button
            onClick={() => {
              if (onAction) onAction();
              if (toastId !== null) {
                toast.dismiss(toastId);
              }
            }}
            className={`text-sm px-4 rounded-md py-0.5 mt-2 text-white ${
              type === 'success'
                ? 'bg-success-lighter'
                : type === 'warning'
                  ? 'bg-warning'
                  : 'bg-danger'
            }  transition`}
          >
            {textButton}
          </button>
        )}
      </div>
    </div>
  );

  toastId = toast(<CustomToast />, {
    autoClose: false,
    hideProgressBar: true,
    style: {
      background: color,
    },
    closeOnClick: false,
  });
};
