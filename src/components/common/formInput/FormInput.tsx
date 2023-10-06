import React, { FC } from "react";
import { Form } from "react-bootstrap";

type FormInputType = {
  direction?: any;
  label: string;
  type: string;
  placeHolder?: string;
  controlId: string;
  className?: string;
  onchange?: Function;
  value: any;
};
const FormInput: FC<FormInputType> = ({
  direction,
  label,
  type,
  placeHolder,
  controlId,
  value,
  className,
  onchange,
}) => {
  return (
    <Form.Group as={direction} className={className} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onchange && onchange(e)}
      />
    </Form.Group>
  );
};

export default FormInput;
