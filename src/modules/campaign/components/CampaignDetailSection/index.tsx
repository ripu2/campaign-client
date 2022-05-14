import { Typography } from "@mui/material";
import React, { useCallback } from "react";
import {
  ButtonContainerContainer,
  CellContainer,
  DetailBox,
  FlexContainer,
  HeaderTypo,
  LeftChild,
  ParentCotainer,
  RightChild,
  SubHeaderTypo,
} from "./styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useRouter } from "next/router";
import { RoutesEnum } from "../../../../types";
import { useCampaigContext } from "../../context/campaign";
import ContributeSection from "./ContributeSection";

const CampaignDetailSection = () => {
  const router = useRouter();

  const createCampaign = useCallback(() => {
    router.push(RoutesEnum.CreateCampaign);
  }, []);

  const { state, dispatch } = useCampaigContext();

  const getContractDataCells = useCallback(() => {
    if (state.selectedContract) {
      // return Object.keys(state.selectedContract).map((cell: string) => {
      //     return (
      //       <DetailBox>
      //         <HeaderTypo>{cell.toLocaleUpperCase()}</HeaderTypo>
      //         <SubHeaderTypo>{state.selectedContract[cell]}</SubHeaderTypo>
      //       </DetailBox>
      //     );
      //   });
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
              {state.selectedContract.amountCollected}/{state.selectedContract.minimumFund}
            </SubHeaderTypo>
          </DetailBox>
          <DetailBox>
            <HeaderTypo>No of donors</HeaderTypo>
            <SubHeaderTypo>
              {state.selectedContract.donorsCount}
            </SubHeaderTypo>
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
        <LeftChild>
          {/* <CellContainer>{() => getContractDataCells()}</CellContainer> */}
          {getContractDataCells()}
        </LeftChild>
        <RightChild>
          <ContributeSection />
        </RightChild>
      </FlexContainer>
    </ParentCotainer>
  );
};

export default React.memo(CampaignDetailSection);
