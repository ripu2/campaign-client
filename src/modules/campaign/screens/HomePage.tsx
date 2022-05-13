import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import factory from "../../../etherum/factory";
import CampaignCard from "../components/CampaignCard";
import CreateCampagin from "../components/CreateCampaignButton";
import { ParentCotainer } from "./styles";

const Home = () => {
  const [contract, setContract] = useState([]);

  const getDeployedCampaigns = useCallback(async () => {
    const campaigns = await factory.methods.getDeployedCampigns().call();
    console.log("campaignss=====>", campaigns);
    setContract(campaigns);
  }, [factory]);

  useEffect(() => {
    getDeployedCampaigns();
  }, []);

  const getAvailableCampaign = () => {
    return (
      <React.Fragment>
        <h3>
          Open Campaigns
        </h3>
        <ParentCotainer>
        {contract.map((address: string) => {
          return <CampaignCard contractAddress={address} />;
        })}
        </ParentCotainer>
      </React.Fragment>
    );
  };

  return (
    <div>
      <CreateCampagin />
      {getAvailableCampaign()}
    </div>
  );
};

export default React.memo(Home);