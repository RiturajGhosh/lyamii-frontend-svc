import Form from "react-bootstrap/Form";
import React, { FC } from "react";

type FormCheckInputType = "checkbox" | "radio";

export type CheckboxType = {
  option?: checkLabelDto;
  type: FormCheckInputType;
  onClick: Function;
  label?: boolean;
};
export type checkLabelDto = {
  label: string;
  checked: boolean;
  value?: string;
};
const Checkbox: FC<CheckboxType> = ({
  option,
  onClick,
  type,
  label = true,
}) => {
  return (
    <>
      <Form.Check type={type} id={`check-api-${type}`}>
        <Form.Check.Input
          checked={option && option.checked}
          onChange={() => option && onClick(option.label)}
          type={type}
          isValid
        />
        {label && <Form.Check.Label>{option && option.label}</Form.Check.Label>}
      </Form.Check>
    </>
  );
};

export default Checkbox;
