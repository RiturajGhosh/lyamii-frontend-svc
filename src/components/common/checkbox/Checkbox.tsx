import Form from "react-bootstrap/Form";
import React, { FC } from "react";

type FormCheckInputType = "checkbox" | "radio";

export type CheckboxType = {
  option: checkLabelDto;
  type: FormCheckInputType;
  onClick: Function;
  label?: boolean;
};
export type checkLabelDto = {
  label: string;
  checked: boolean;
};
const Checkbox: FC<CheckboxType> = ({ option, onClick, type,label=true }) => {
  return (
    <>
     {/* <Form className="p-0 m-b-3 ps-2" key={type}> */}
      {/* <div key={type} className="mb-3 ps-2"> */}
        <Form.Check type={type} id={`check-api-${type}`}>
          <Form.Check.Input
            checked={option.checked}
            onChange={() => onClick(option.label)}
            type={type}
            isValid
          />
         {label &&  <Form.Check.Label>{option.label}</Form.Check.Label>}
        </Form.Check>
      {/* </div> */}
     {/* </Form> */}
    </>
  );
};

export default Checkbox;
