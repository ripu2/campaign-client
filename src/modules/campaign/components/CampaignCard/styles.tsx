import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    border: '3px solid #9772FB',
    display: 'flex',
    width: '40%',
    height: 200,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20
}));

export const CardInsideContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10
}));

export const CardTypo = styled(Typography)(({}) => ({
   fontSize: 15,
   fontWeight: 500
}));
