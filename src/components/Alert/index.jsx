import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Alert = (props) => {
  const {
    value, id, textDivId, bgColor,
  } = props;
  return (
    <div>
      <Toaster />
    </div>
  );
};

export const notify = (message, i) => {
  let toastId;
  if (i === 1) {
    toastId = toast.loading(message);
  }
  if (i === 2) toastId = toast.error(message);
  if (i === 3) toastId = toast.success(message);
  return toastId;
};

export default Alert;
