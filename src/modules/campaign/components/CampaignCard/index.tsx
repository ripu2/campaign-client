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
interface cardProps {
  contractAddress: string;
}

export default function CampaignCard(props: cardProps) {

  const [contractData, setContractData] = useState<contractType | undefined>(undefined)

  const router = useRouter()
  const { getCampaignData } = useGetCampaignData()

  const setContractDetails = async () => {
    const data: contractType = await getCampaignData(props.contractAddress)
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
