import React, { useCallback, useState } from "react";
import InputFields from ".";
import {
  ButtonContainerContainer,
  ParentCotainer,
  ButtonTypo,
  CircularLoader,
} from "./styles";
import factory from "../../../../etherum/factory";
import { createCampaignInterface } from "../../types/index";
import web3 from "../../../../etherum/web3";
import { useRouter } from "next/router";
import SnackBar from "../SnackBar";
import { useCreateCampaign } from "../../hooks/campaign";

interface fields {
  name: string;
  onClick: Function;
}
const InputForm = () => {
  const [campaignname, setCampaignname] = useState("");
  const [campaignDes, setCampaignDes] = useState("");
  const [campaignImage, setCampaignImage] = useState("");
  const [minimumContribution, setMinimumContribution] = useState(0);
  const [minFun, setMinimumFund] = useState(0);
  const [creator, setCreator] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [errMessage, seterrMessage] = useState("");

  const router = useRouter();

  const { createNewCampaign } = useCreateCampaign();

  const Fields: Array<fields> = [
    {
      name: "Campaign name",
      onClick: (name: string) => setCampaignname(name),
    },
    {
      name: "Campaign Description",
      onClick: (des: string) => setCampaignDes(des),
    },
    {
      name: "Campaign Image",
      onClick: () =>
        setCampaignImage(
          "https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
        ),
    },
    {
      name: "Minimum Contribution",
      onClick: (min: number) => setMinimumContribution(min),
    },
    {
      name: "Fund Goal amount",
      onClick: (min: number) => setMinimumFund(min),
    },
  ];

  const getInputColumns = () => {
    return Fields.map((field: fields, index: number) => {
      return (
        <InputFields
          key={index}
          fieldName={field.name}
          onChange={field.onClick}
        />
      );
    });
  };

  const submitResponse = async () => {
    setLoading(true);
    const params: createCampaignInterface = {
      name: campaignname,
      description: campaignDes,
      imageUrl: campaignImage,
      minCon: minimumContribution,
      minFund: minFun,
    };

    const res = await createNewCampaign(params);
    if (res === "success") router.back();
    else {
      setSnackBar(true);
      seterrMessage(res);
    }
    setLoading(false);
  };

  const getDisableStatus = useCallback(() => {
    if (
      campaignname.length !== 0 &&
      campaignDes.length !== 0 &&
      minFun !== 0 &&
      minimumContribution !== 0
    )
      return false;
    return true;
  }, [campaignname, campaignDes, minFun, minimumContribution]);

  return (
    <ParentCotainer>
      {getInputColumns()}
      <ButtonContainerContainer onClick={submitResponse}>
        {loading ? (
          <CircularLoader />
        ) : (
          <ButtonTypo>Create Campaign</ButtonTypo>
        )}
      </ButtonContainerContainer>
      <SnackBar
        message={errMessage}
        open={snackBar}
        onClose={() => {
          router.back();
          setSnackBar(false);
        }}
      />
    </ParentCotainer>
  );
};

export default React.memo(InputForm);
