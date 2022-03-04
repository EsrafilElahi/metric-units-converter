import React, { ReactNode, ReactElement } from "react";

interface Unit {
  id: number;
  name: string;
  factor: number;
}

interface Props {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  units: Unit[];
}

function Select({ onChange, label, units }: Props): ReactElement {
  return (
    <div className={`${label}-select`}>
      <label>{label}</label>
      <select name="select-units" id={`${label}-select`} onChange={onChange}>
        {units.map((unit) => (
          <option value={unit.factor} key={unit.id}>
            {unit.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
