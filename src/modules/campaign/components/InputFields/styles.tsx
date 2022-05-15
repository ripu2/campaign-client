import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CircularProgress } from "@mui/material";

export const ParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    padding: 10
}));

export const ButtonContainerContainer = styled(Button)(({}) => ({
    backgroundColor: '#9772FB',
    marginTop: 30,
    width: 200,
    height: 50,
    textTransform: 'none'
}));

export const InputFlex = styled(Box)(({}) => ({
   display: 'flex'
}));

export const ColumnFlex = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
 }));

 export const ButtonTypo = styled(Typography)(({}) => ({
    fontSize: 15,
    color: "#E8F9FD"
 }));

 export const CircularLoader = styled(CircularProgress)(({}) => ({
    fontSize: 15,
    color: "#E8F9FD"
 }));