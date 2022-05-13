import { Typography } from "@mui/material";
import React, { useCallback } from "react"
import { ButtonContainerContainer, ParentCotainer } from "./styles";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useRouter } from "next/router";
import { RoutesEnum } from "../../../../types";

const CreateCampaign = () => {
  const router = useRouter()

  const createCampaign = useCallback(() => {
    router.push(RoutesEnum.CreateCampaign)
  }, [])

  return (
    <ParentCotainer>
     <ButtonContainerContainer onClick={createCampaign} endIcon={<AddCircleOutlineOutlinedIcon style={{ color: '#112B3C'}}/>}>
         <Typography>Create Campaign</Typography>
     </ButtonContainerContainer>
    </ParentCotainer>
  );
}

export default React.memo(CreateCampaign)
