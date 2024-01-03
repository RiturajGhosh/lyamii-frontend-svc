import { ErrorMessage, Field } from "formik";
import React, { CSSProperties, FC } from "react";

type InputFormProps = {
  name: string;
  label: string;
  type: string;
  required: string;
  values: any;
  touched: any;
  errors: any;
  className: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  style: CSSProperties;
  onclick?: Function;
};

const InputForm: FC<InputFormProps> = ({
  className,
  label,
  name,
  required,
  values,
  touched,
  errors,
  type,
  placeholder,
  minLength,
  maxLength,
  onclick,
  style,
}) => {
  return (
    <>
      <Field
        autoComplete="on"
        label={label}
        className={className}
        type={type}
        placeholder={placeholder}
        values={values}
        minLength={minLength}
        maxLength={maxLength}
        style={style}
        touched={touched}
        onClick={()=>onclick && onclick()}
        errors={errors}
        required={required}
        name={name}
      />
      <div className="text-danger">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default InputForm;
