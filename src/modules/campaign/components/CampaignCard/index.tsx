import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ParentCotainer,
  CardInsideContainer,
  CardTypo,
  CardHeader,
  IconContainer,
  CardTypoContainer
} from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";
import { useGetCampaignData } from "../../hooks/campaign";
import { contractType } from "../../types";
import { useCampaigContext } from "../../context/campaignContext";
interface cardProps {
  contractAddress: string;
}

export default function CampaignCard(props: cardProps) {

  const [contractData, setContractData] = useState<contractType | undefined>(undefined)
  const { state, dispatch } = useCampaigContext()

  const router = useRouter()
  const { getCampaignData } = useGetCampaignData(dispatch)

  const setContractDetails = async () => {
    const data: contractType | undefined = await getCampaignData(props.contractAddress)
    setContractData(data)
  }

  useEffect(() => {
    setContractDetails()
  })

  const navigator = () => {
    router.push(`/campaigns/view/${props.contractAddress}`)
  }
  
  return (
    <ParentCotainer>
      <CardInsideContainer>
        <CardHeader>
          <CardTypoContainer>
          <CardTypo>{contractData?.name}
          </CardTypo>
          </CardTypoContainer>
          <IconContainer onClick={navigator}>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </IconContainer>
        </CardHeader>
      </CardInsideContainer>
    </ParentCotainer>
  );
}
