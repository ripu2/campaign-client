import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ColumnFlex, InputFlex } from "./styles";
import { Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';


interface InputFieldProps {
  fieldName: string;
  onChange: Function
}

const InputFields = (props: InputFieldProps) => {
  return (
    <InputFlex
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <ColumnFlex>
        <Typography>{props.fieldName}</Typography>
      </ColumnFlex>
      <OutlinedInput
        id="outlined-basic"
        // label={props.fieldName}
        onChange={(e) => props.onChange(e.target.value)}
        endAdornment={(props.fieldName==="Minimum Contribution" || props.fieldName==="Fund Goal amount" || props.fieldName === "Contribution Amount") && <InputAdornment position="end">Wei</InputAdornment>}
        inputProps={{
          'aria-label': 'weight',
        }}
      />
    </InputFlex>
  );
};

export default React.memo(InputFields);
