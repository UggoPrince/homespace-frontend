import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default (props) => {
  const {
    name, label, error = null, onchange, type, required,
  } = props;
  return (
    <TextField
      variant="outlined"
      className="w-full"
      label={label}
      name={name}
      onChange={onchange}
      type={type}
      required={required}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export const PasswordTextField = (props) => {
  const {
    name, label, error = null, onchange, required,
  } = props;
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <TextField
      variant="outlined"
      className="w-full"
      label={label}
      name={name}
      onChange={onchange}
      type={values.showPassword ? 'text' : 'password'}
      {...(error && { error: true, helperText: error })}
      required={required}
      InputProps={{
        endAdornment:
  <InputAdornment position="end">
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      edge="end"
    >
      {values.showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment>,
      }}
    />
  );
};
