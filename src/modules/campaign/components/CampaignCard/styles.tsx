import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    border: '3px solid #9772FB',
    display: 'flex',
    width: '40%',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20
}));

export const CardInsideContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: '100%'
}));

export const CardHeader = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export const CardTypoContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

export const CardTypo = styled(Typography)(({}) => ({
   fontSize: 15,
   fontWeight: 500,
   marginLeft: 50
}));

export const IconContainer = styled(Box)(({}) => ({
    borderRadius: 50,
    backgroundColor: "#E8F9FD",
    marginRight: 30
}));

