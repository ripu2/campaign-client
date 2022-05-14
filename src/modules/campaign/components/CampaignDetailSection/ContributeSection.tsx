import React, { useState } from "react";
import InputFields from "../InputFields";
import { ColumnFlex, FlexEnd, ButtonContainerContainer } from "./styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useContributeInCampaign } from "../../hooks/campaign";
import { useRouter } from "next/router";
import { useCampaigContext } from "../../context/campaign";
import { CircularLoader } from "../InputFields/styles";
import RighChildComponent from "./RighChildComponent";

export default function ContributeSection() {
  const router = useRouter();

  const [amount, setAmount] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [transferLoading, setTransferLoading] = useState(false);

  const { dispatch } = useCampaigContext();
  const { contributeInCampaign } = useContributeInCampaign(dispatch);

  const contribute = async () => {
    setLoading(true);
    const res = await contributeInCampaign(
      Number(amount),
      router.query.address as string
    );
    if (res) setLoading(false);
  };

  const createTransferRequest = async () => {
    console.log("accc =====>", destination);
  };

  return (
    <ColumnFlex>
      <RighChildComponent
        inputLabel="Contribution Amount"
        header="Contribute in campaign"
        onChange={(val) => setAmount(val)}
        loading={loading}
        onClick={contribute}
				buttonText="Contribute"
				disabled={amount.length === 0}
      />

      <RighChildComponent
        inputLabel="Destination Account address"
        header="Create a fund transfer request"
        onChange={(val) => setDestination(val)}
        loading={transferLoading}
        onClick={createTransferRequest}
				buttonText="Create request"
				disabled={destination.length === 0}
      />

      {/* <div>
        <h1>Contribute in campaign</h1>
        <InputFields fieldName={"Contribution Amount"}
          onChange={(e: any) => {
            setAmount(e)
          }} />
        <FlexEnd>
            <ButtonContainerContainer onClick={contribute} endIcon={<AddCircleOutlineOutlinedIcon style={{ color: '#112B3C'}}/>}>
               {loading? <CircularLoader /> : 'Contribute'}
            </ButtonContainerContainer>
        </FlexEnd>
        </div>
        <div>
        <h1>Contribute in campaign</h1>
        <InputFields fieldName={"Contribution Amount"}
          onChange={(e: any) => {
            setAmount(e)
          }} />
        <FlexEnd>
            <ButtonContainerContainer onClick={contribute} endIcon={<AddCircleOutlineOutlinedIcon style={{ color: '#112B3C'}}/>}>
               {loading? <CircularLoader /> : 'Contribute'}
            </ButtonContainerContainer>
        </FlexEnd>
        </div> */}
    </ColumnFlex>
  );
}
