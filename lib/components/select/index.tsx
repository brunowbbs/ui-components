import { BiChevronDown } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import SelectReact from "react-select";
import { SelectProps } from "./types";

export function Select({
  label,
  options,
  placeholder,
  disabled,
  isMulti = false,
}: SelectProps) {
  return (
    <div className="w-full">
      <p className="text-sm">{label}</p>

      <SelectReact
        isMulti={isMulti}
        isDisabled={disabled}
        placeholder={placeholder}
        options={options}
        className="text-sm border rounded-sm"
        noOptionsMessage={() => "Nenhuma opção encontrada"}
        components={{
          DropdownIndicator: () => <BiChevronDown size={18} color="#777" />, // Use o novo ícone
          ClearIndicator: () => <IoCloseSharp color="#777" />,
        }}
        styles={{
          control: () => ({
            paddingRight: 5,
            display: "flex",
            width: "100%",
            height: "28px",
          }),

          menu: (baseStyles) => ({
            ...baseStyles,
            overflowY: "auto",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#e2e8f0" : "transparent",
            color: "#4a5568",
            "&:hover": {
              backgroundColor: "#cbd5e0",
            },
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            marginRight: 5,
            marginLeft: 5,
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
          }),
          clearIndicator: (provided) => ({
            ...provided,
            marginRight: 10,
          }),
          singleValue: (provided) => ({
            ...provided,
            fontSize: "12px",
          }),
        }}
      />
    </div>
  );
}
