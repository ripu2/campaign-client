import React from "react";
import InputFields from "../InputFields";
import { FlexEnd, ButtonContainerContainer } from "./styles";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { CircularLoader } from "../InputFields/styles";


interface RighChildProps {
  header: string;
  inputLabel: string;
  onClick: any;
  loading: boolean;
  onChange: Function;
  buttonText: string;
  disabled: boolean
}

export default function RighChildComponent(props: RighChildProps) {
  return (
    <div style={{marginBottom: 100}}>
      <h1>{props.header}</h1>
      <InputFields
        fieldName={props.inputLabel}
        onChange={(e: any) => {
          props.onChange(e);
        }}
      />
      <FlexEnd>
        <ButtonContainerContainer
          onClick={props.onClick}
          endIcon={
            <AddCircleOutlineOutlinedIcon style={{ color: "#112B3C" }} />
          }
          disabled={props.disabled}
        >
          {props.loading ? <CircularLoader /> : props.buttonText}
        </ButtonContainerContainer>
      </FlexEnd>
    </div>
  );
}
