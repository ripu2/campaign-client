import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useEffect } from "react";
import CampaignDetailSection from "../components/CampaignDetailSection";
import { CampaignContex } from "../context/campaignContext";
import {
  campaignAction,
  useGetCampaignData,
  useGetManagerStatus,
  useReducerCampaign,
} from "../hooks/campaign";
import PercentageCircle from "../components/PercentageCircle";

const CampaignDetail = () => {
  const router = useRouter();
  const [state, dispatch] = useReducerCampaign();
  const address = router.query.address as string

  const { getCampaignData } = useGetCampaignData(dispatch);
  const { getManagerStatus } = useGetManagerStatus(dispatch)

  const getResponse = async () => {
    await getCampaignData(address);
    await getManagerStatus(address)
    // dispatch(campaignAction.setCampaign(data))
  };

  useEffect(() => {
    getResponse();
  }, []);

  const getValue = useCallback(() => {
    if (state.selectedContract?.amountCollected)
      return (
        (state.selectedContract.amountCollected /
          state.selectedContract.minimumFund) *
        100
      );
    return 1;
  }, [state.selectedContract]);

  return (
    <CampaignContex.Provider value={{ state, dispatch }}>
      <div style={{ display: "flex" }}>
        <h1>Campaign status</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <PercentageCircle value={getValue()} />
        </div>
      </div>
      <CampaignDetailSection />
    </CampaignContex.Provider>
  );
};

export default React.memo(CampaignDetail);
