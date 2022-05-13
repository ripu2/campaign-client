import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ColumnFlex, InputFlex } from "./styles";
import { Typography } from "@mui/material";

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
      <TextField
        id="outlined-basic"
        label={props.fieldName}
        variant="outlined"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </InputFlex>
  );
};

export default React.memo(InputFields);
