import React from "react";
import { ParentCotainer, CardInsideContainer, CardTypo } from "./styles";

interface cardProps {
  contractAddress: string;
}

export default function CampaignCard(props: cardProps) {
  return (
    <ParentCotainer>
      <CardInsideContainer>
        <CardTypo>{props.contractAddress}</CardTypo>
      </CardInsideContainer>
    </ParentCotainer>
  );
}
