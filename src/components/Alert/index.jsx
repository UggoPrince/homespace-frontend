import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Alert = (props) => {
  const {
    value, id, textDivId, bgColor, custom,
  } = props;
  return (
    <div>
      {!custom && <Toaster />}
      {custom && <Toaster containerStyle={{ position: 'absolute', top: '80px' }} />}
    </div>
  );
};

export const CustomAlert = (props) => {
  const {
    value, id, textDivId, bgColor,
  } = props;
  return (
    <div>
      <Toaster containerStyle={{ position: 'absolute', top: '80px' }} />
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
