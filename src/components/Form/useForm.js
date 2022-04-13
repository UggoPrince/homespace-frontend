import React, { useState } from 'react';

export default () => {
  const [errors, setErrors] = useState({});
  return { errors, setErrors };
};
