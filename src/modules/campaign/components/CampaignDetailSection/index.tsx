import { Typography } from "@mui/material";
import React, { useCallback } from "react";
import {
  DetailBox,
  FlexContainer,
  HeaderTypo,
  LeftChild,
  ParentCotainer,
  RightChild,
  SubHeaderTypo,
  ViewRequests,
} from "./styles";
import { useRouter } from "next/router";
import { RoutesEnum } from "../../../../types";
import { useCampaigContext } from "../../context/campaignContext";
import ContributeSection from "./ContributeSection";
import { ColumnFlex } from "../InputFields/styles";

const CampaignDetailSection = () => {
  const router = useRouter();
  const { state } = useCampaigContext();

  const navigateToRequestPage = () => {
    router.push(`/campaigns/view/transferRequests/${router.query.address}`);
  };

  const getContractDataCells = useCallback(() => {
    if (state.selectedContract) {
      return (
        <React.Fragment>
          <DetailBox>
            <HeaderTypo>Name</HeaderTypo>
            <SubHeaderTypo>{state.selectedContract.name}</SubHeaderTypo>
          </DetailBox>
          <DetailBox>
            <HeaderTypo>Description</HeaderTypo>
            <SubHeaderTypo>{state.selectedContract.description}</SubHeaderTypo>
          </DetailBox>
          <DetailBox>
            <HeaderTypo>Approvals</HeaderTypo>
            <SubHeaderTypo>{state.selectedContract.approveCount}</SubHeaderTypo>
          </DetailBox>
          <DetailBox>
            <HeaderTypo>Fund Raised</HeaderTypo>
            <SubHeaderTypo>
              {state.selectedContract.amountCollected}/
              {state.selectedContract.minimumFund}
            </SubHeaderTypo>
          </DetailBox>
          <DetailBox>
            <HeaderTypo>No of donors</HeaderTypo>
            <SubHeaderTypo>{state.selectedContract.donorsCount}</SubHeaderTypo>
          </DetailBox>
          <DetailBox>
            <HeaderTypo>Minimum donation</HeaderTypo>
            <SubHeaderTypo>
              {state.selectedContract.minimumContribution}
            </SubHeaderTypo>
          </DetailBox>
        </React.Fragment>
      );
    }
    return <h1>unable to fetch</h1>;
  }, [state.selectedContract]);

  return (
    <ParentCotainer>
      <FlexContainer>
        <ColumnFlex>
          <LeftChild>
            {/* <CellContainer>{() => getContractDataCells()}</CellContainer> */}
            {getContractDataCells()}
          </LeftChild>
          <ViewRequests onClick={navigateToRequestPage}>
            <Typography style={{ color: "#F7F7F7", fontSize: 16 }}>
              View transfer requests
            </Typography>
          </ViewRequests>
        </ColumnFlex>
        <RightChild>
          <ContributeSection />
        </RightChild>
      </FlexContainer>
    </ParentCotainer>
  );
};

export default React.memo(CampaignDetailSection);
