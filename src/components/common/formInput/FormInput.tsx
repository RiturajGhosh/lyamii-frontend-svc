import React, { FC } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

type FormInputType = {
  direction?: any;
  label?: string;
  floatingLabel?: string;
  type: string;
  placeHolder?: string;
  controlId: string;
  className?: string;
  onchange?: Function;
  value: any;
  labelStyling?: string;
  inputStyling?: string;
};
const FormInput: FC<FormInputType> = ({
  direction,
  label,
  type,
  placeHolder,
  controlId,
  floatingLabel,
  value,
  className,
  onchange,
  labelStyling,
  inputStyling,
}) => {
  return (
    <Form.Group
      as={direction}
      className={`${floatingLabel && "input-group"} ${className}`}
      controlId={controlId}
    >
      {floatingLabel && floatingLabel.length > 0 && (
        <span
          className={`input-group-text fit-content p-1 ${labelStyling}`}
          id="addon-wrapping"
        >
          {floatingLabel}
        </span>
      )}

      {label && label.length > 0 && <Form.Label>{label}</Form.Label>}
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        className={inputStyling}
        onChange={(e) => onchange && onchange(e)}
      />
    </Form.Group>
  );
};

export default FormInput;
