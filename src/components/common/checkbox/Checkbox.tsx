import Form from "react-bootstrap/Form";
import React, { FC } from "react";
import { style } from "d3";

type FormCheckInputType = "checkbox" | "radio";

export type CheckboxType = {
  option?: checkLabelDto;
  type: FormCheckInputType;
  onClick: Function;
  label?: boolean;
  // background?: string;
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
  // background,
  label = true,
}) => {
  return (
    <>
      {/* <Form className="p-0 m-b-3 ps-2" key={type}> */}
      {/* <div key={type} className="mb-3 ps-2"> */}
      <Form.Check type={type} id={`check-api-${type}`}>
        <Form.Check.Input
          checked={option && option.checked}
          // style={{ background: `${background}` }}
          onChange={() => option && onClick(option.label)}
          type={type}
          isValid
        />
        {label && <Form.Check.Label>{option && option.label}</Form.Check.Label>}
      </Form.Check>
      {/* </div> */}
      {/* </Form> */}
    </>
  );
};

export default Checkbox;
