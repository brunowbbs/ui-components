import { BiChevronDown } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import SelectReact from "react-select";
import { COLORS } from "../../../utils";
import { SelectProps } from "./types";

export function Select({
  label,
  options,
  placeholder,
  disabled,
  isMulti = false,
  width,
  value,
  onChangeValue,
  error,
  onInputChange,
}: SelectProps) {
  return (
    <div className={`w-${width ?? "full"}`}>
      <p className="text-sm font-medium">{label}</p>

      <SelectReact
        value={options.find((option) => String(option.value) === String(value))}
        isMulti={isMulti}
        isDisabled={disabled}
        placeholder={placeholder}
        options={options}
        onInputChange={(value) => onInputChange && onInputChange(value)}
        onChange={(event) =>
          onChangeValue(
            event as {
              label: string;
              value: string;
            }
          )
        }
        className="text-sm rounded cursor-pointer"
        noOptionsMessage={() => "Nenhum item encontrado"}
        components={{
          ClearIndicator: (props) => (
            <div
              {...props}
              onMouseDown={(e) => {
                props.clearValue();
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <IoClose size={15} color="#444" />
            </div>
          ),
          DropdownIndicator: () => <BiChevronDown size={18} color="#777" />,
        }}
        styles={{
          placeholder: (base) => ({
            ...base,
            color: "#9BA3AF",
          }),
          control: (_, state) => ({
            borderRadius: 4,
            display: "flex",
            width: "100%",
            paddingTop: 1.7,
            paddingBottom: 1.6,
            borderColor: error
              ? COLORS.danger
              : state.isFocused
                ? COLORS.primary
                : "#94a3b8",
            borderWidth: "1px",
            borderStyle: "solid",
            paddingLeft: 8,
            paddingRight: 8,
            fontWeight: 500,
          }),

          input: (base) => ({
            ...base,
            margin: 0,
          }),

          multiValue: (base) => ({
            ...base,
            // marginRight: 2,
            padding: 0,
            // background: "blue",
          }),

          multiValueLabel: (base) => ({
            ...base,
            margin: 0,
            // background: "red",
          }),

          multiValueRemove: (base) => ({
            ...base,
            padding: 0,
            margin: 0,
            display: "flex",
            "&:hover": {
              backgroundColor: "#ecf0f1",
            },
            // height: 10,
            // background: "yellow",
          }),

          indicatorsContainer: (base) => ({
            ...base,
            // background: "#491",
            padding: 0,
            height: 26,
          }),

          container: (base) => ({
            ...base,
            // background: "pink",
            margin: 0,
            padding: 0,
          }),

          group: (base) => ({
            ...base,
            // background: "purple",
            margin: 0,
            padding: 0,
          }),

          valueContainer: (base) => ({
            ...base,
            // background: "#888",
            padding: 0,
            margin: 0,
            height: "auto",
          }),

          menu: (baseStyles) => ({
            ...baseStyles,
            overflowY: "auto",
          }),

          option: (base, state) => ({
            ...base,
            padding: 0,
            paddingLeft: 10,
            paddingTop: 3,
            paddingBottom: 3,
            cursor: "pointer",
            // background: "blue",
            backgroundColor: state.isFocused ? "#ecf0f1" : "transparent",
            color: "#000",
            "&:hover": {
              backgroundColor: "#ecf0f1",
            },
          }),

          indicatorSeparator: (base) => ({
            ...base,
            padding: 0,
            marginRight: 5,
            marginLeft: 5,
          }),

          dropdownIndicator: (base) => ({
            ...base,
          }),

          clearIndicator: (base) => ({
            ...base,
            marginRight: 10,
            // background: "#727",
            // height: 20,
            fontSize: 10,
            // width: 10,
            // display: "flex",
            // justifyContent:""
          }),

          menuList: (base) => ({
            ...base,
            // background: "red",
          }),

          singleValue: (base) => ({
            ...base,
            fontSize: "12px",
          }),
        }}
      />
      {error && <p className="text-[10px] text-red-600">{error}</p>}
    </div>
  );
}
