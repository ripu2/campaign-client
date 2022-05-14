import React from 'react'
import InputFields from "../InputFields";
import { FlexEnd, ButtonContainerContainer } from "./styles";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { CircularLoader } from "../InputFields/styles";

interface formInterface {
    inputLabel: string;
    onClick: any;
    loading: boolean;
    onChange: Function;
    buttonText: string;
    disabled: boolean;
    onAmountChange: Function;
  }

export default function Forms(props: formInterface) {
  return (
    <div>
        <InputFields
        fieldName={props.inputLabel}
        onChange={(e: any) => {
          props.onChange(e);
        }}
      />
      {
          props.buttonText === "Create request" && <InputFields
          fieldName={"Transfer amount"}
          onChange={(e: any) => {
            props.onAmountChange(e);
          }}
        />
      }
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
  )
}
