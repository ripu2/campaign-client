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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tesla.com%2Fmodels&psig=AOvVaw0kXfTdreKjYjw4PmPYpYGy&ust=1652544446174000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDalPjt3PcCFQAAAAAdAAAAABAD"
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
    return Fields.map((field: fields) => {
      return <InputFields fieldName={field.name} onChange={field.onClick} />;
    });
  };

  const submitResponse = async () => {
    console.log("called");
    setLoading(true);
    try {
      const params: createCampaignInterface = {
        name: campaignname,
        description: campaignDes,
        imageUrl: campaignImage,
        minCon: minimumContribution,
        minFund: minFun,
      };
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCampaign(
          params.name,
          params.description,
          params.imageUrl,
          params.minCon,
          params.minFund
        )
        .send({
          from: accounts[0],
        });
      router.back();
    } catch (error) {
      setSnackBar(true);
      seterrMessage(error.message);
    } finally {
      setLoading(false);
    }
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
