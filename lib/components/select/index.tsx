import { BiChevronDown } from "react-icons/bi";
import SelectReact from "react-select";
import { SelectProps } from "./types";

export function Select({
  label,
  options,
  placeholder,
  disabled,
  isMulti = false,
  width,
}: SelectProps) {
  return (
    <div className={`w-${width ?? "full"}`}>
      <p className="text-sm">{label}</p>

      <SelectReact
        isMulti={isMulti}
        isDisabled={disabled}
        placeholder={placeholder}
        options={options}
        className="text-sm border rounded-sm cursor-pointer"
        noOptionsMessage={() => "Nenhuma opção encontrada"}
        components={{
          DropdownIndicator: () => <BiChevronDown size={18} color="#777" />, // Use o novo ícone
        }}
        styles={{
          control: (_, state) => ({
            paddingRight: 5,
            display: "flex",
            width: "100%",
            // height: state.isFocused ? "auto" : "28px", // altura automática se estiver focado, caso contrário, 20px
            borderColor: state.isFocused ? "#4299e1" : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
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
