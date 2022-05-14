import React from "react";
import InputFields from "../InputFields";
import { FlexEnd, ButtonContainerContainer } from "./styles";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { CircularLoader } from "../InputFields/styles";
import Forms from "./Forms";


interface RighChildProps {
  header: string;
  inputLabel: string;
  onClick: any;
  loading: boolean;
  onChange: Function;
  buttonText: string;
  disabled: boolean;
  onAmountChange?: Function
}

export default function RighChildComponent(props: RighChildProps) {
  return (
    <div style={{marginBottom: 100}}>
      <h1>{props.header}</h1>
      <Forms inputLabel={props.inputLabel}
        onChange={(val) => props.onChange(val)}
        loading={props.loading}
        onClick={props.onClick}
				buttonText={props.buttonText}
				disabled={props.disabled}
        onAmountChange={(val) => props?.onAmountChange(val)}
        />
    </div>
  );
}
