import { forwardRef } from "react";

import "./Select.styles.css";

const Select = forwardRef((props, ref) => {
  const { selectId, defaultOption, selectOptions, labelText, isRequired } =
    props;
  return (
    <div className="custom-select">
      <label htmlFor={selectId}>{labelText}</label>
      <select id={selectId} ref={ref} required={isRequired}>
        <option value={defaultOption.value}>{defaultOption.label}</option>
        {selectOptions.map((elem, idx) => (
          <option key={idx} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
