import React from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Clear from "@mui/icons-material/Clear";
import Check from "@mui/icons-material/Check";
import { styled } from '@mui/material/styles';
import { primaryColor, dangerColor, successColor, defaultFont } from "-assets/jss/material-dashboard-react.js";

const StyledFormControl = styled(FormControl)(({ theme, ownerState }) => {
  const { error, success, labelText } = ownerState;
  return {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    verticalAlign: "unset",
    '.MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
    },
    '.MuiInput-underline:after': {
      borderColor: primaryColor,
    },
    ...(error && {
      '.MuiInput-underline:after': {
        borderColor: dangerColor,
      },
    }),
    ...(success && {
      '.MuiInput-underline:after': {
        borderColor: successColor,
      },
    }),
    '.MuiInputLabel-root': {
      ...defaultFont,
      color: "#AAAAAA !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      top: "10px",
      '&.Mui-focused': {
        color: primaryColor,
      },
      ...(error && {
        color: `${dangerColor} !important`,
      }),
      ...(success && {
        color: `${successColor} !important`,
      }),
    },
    '.MuiInput-root': {
      marginTop: labelText === undefined ? "16px" : '0px',
    },
    '.MuiInput-root.Mui-disabled': {
      '&:before': {
        backgroundColor: "transparent !important",
      },
    },
    '.feedback': {
      position: "absolute",
      bottom: "4px",
      right: "0",
      zIndex: "2",
      display: "block",
      width: "24px",
      height: "24px",
      textAlign: "center",
      pointerEvents: "none",
    },
  };
});

function CustomInput({ ...props }) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success
  } = props;

  return (
    <StyledFormControl
      {...formControlProps}
      ownerState={{ error, success, labelText }}
    >
      {labelText !== undefined ? (
        <InputLabel
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={'feedback'} sx={{ color: dangerColor }} />
      ) : success ? (
        <Check className={'feedback'} sx={{ color: successColor }} />
      ) : null}
    </StyledFormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default CustomInput;

