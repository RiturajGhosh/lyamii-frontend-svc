import React, { ChangeEventHandler, FC } from "react";

type TogglerType = {
  name: string;
  checked: boolean;
  labels: string[];
  inline: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};
const Toggler: FC<TogglerType> = ({
  name,
  checked,
  labels,
  inline,
  handleChange,
}) => {
  return (
    <div className={"toggle round-edges p-0 m-0 w-100 bg-white " + name}>
      {!inline && <span className="">{labels[0]}</span>}
      <input
        onChange={handleChange}
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
      />
      <label className="w-100 round-edges" htmlFor={name}>
        {labels.map((item, key) => {
          return <div className="toggleLabel w-100"> {inline && item}</div>;
        })}
        <div className="toggler" />
      </label>
      {!inline && <span className="">{labels[1]}</span>}
    </div>
  );
};

export default Toggler;
