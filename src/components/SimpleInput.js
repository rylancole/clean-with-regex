import { useRef } from "react";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const capitalize = (s) => s.replace(/^\w/, (c) => c.toUpperCase());

const SimpleInput = ({ value, onChange, onClear, name }) => {
  const inputRef = useRef(null);

  const inputId = `${name}-input`;
  const label = capitalize(name);

  const handleClear = () => {
    onClear();
    inputRef.current.focus();
  };
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <OutlinedInput
        id={inputId}
        label={label}
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClear} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SimpleInput;
