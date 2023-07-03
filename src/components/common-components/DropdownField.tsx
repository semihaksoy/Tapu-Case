import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface DropDownFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string, label: string }>;
}

const DropDownField: React.FC<DropDownFieldProps> = ({ value, onChange, options }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ width: '100%', maxWidth: '400px' }}>
      <InputLabel htmlFor="locale-select">Locale</InputLabel>
      <Select
        label="Locale"
        id="locale-select"
        value={value}
        onChange={handleChange}
        sx={{ minHeight: '56px' }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownField;
