import { useState, useRef } from 'react';

export default () => {
  const [errors, setErrors] = useState({});
  return { errors, setErrors };
};

export const useRefForm = () => {
  const errors = useRef({});
  return errors;
};
