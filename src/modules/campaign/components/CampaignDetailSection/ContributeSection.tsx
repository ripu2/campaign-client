import React, { useState } from "react";
import InputFields from "../InputFields";
import { ColumnFlex, FlexEnd, ButtonContainerContainer } from "./styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useContributeInCampaign, useCreateTransferRequest } from "../../hooks/campaign";
import { useRouter } from "next/router";
import { useCampaigContext } from "../../context/campaignContext";
import { CircularLoader } from "../InputFields/styles";
import RighChildComponent from "./RighChildComponent";

export default function ContributeSection() {
  const router = useRouter();

  const [amount, setAmount] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [transferLoading, setTransferLoading] = useState(false);
  const [transferAmount, setTransferAmount] = useState("")
  const [purpose, setPurpose] = useState("")

  const { dispatch } = useCampaigContext();
  const { contributeInCampaign } = useContributeInCampaign(dispatch);
  const { createTransferRequest } = useCreateTransferRequest()


  const contribute = async () => {
    setLoading(true);
    const res = await contributeInCampaign(
      Number(amount),
      router.query.address as string
    );
    if (res) {
      setAmount("")
    } 
    setLoading(false);
  };

  const createTransferRequestHandler = async () => {
    await createTransferRequest(Number(transferAmount), purpose, destination, router.query.address as string)
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
        onClick={createTransferRequestHandler}
				buttonText="Create request"
				disabled={destination.length === 0 || transferAmount.length ===0 || purpose.length === 0}
        onAmountChange={(val) => setTransferAmount(val)}
        onPurposeChange = {(e) => setPurpose(e)}
      />
    </ColumnFlex>
  );
}
