import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    display: 'flex',
}));

export const FlexContainer = styled(Box)(({}) => ({
    display: 'flex',
    width: '100%'
}));

export const LeftChild= styled(Box)(({}) => ({
    display: 'flex',
    // width: '70%',
    flexWrap: 'wrap'
}));

export const RightChild= styled(Box)(({}) => ({
    display: 'flex',
    width: '30%'
}));

export const ButtonContainerContainer = styled(Button)(({}) => ({
    border: '2px solid #272121',
    marginTop: 20
}));

export const CellContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexWrap: 'wrap'
}));

export const HeaderTypo= styled(Typography)(({}) => ({
   fontSize: 20,
   fontWeight: 600,
   margin: '0 auto'
}));

export const SubHeaderTypo= styled(Typography)(({}) => ({
    fontSize: 15,
    fontWeight: 400,
    margin: '0 auto',
    marginTop: 40
 }));

export const DetailBox = styled(Box)(({}) => ({
    border: '2px solid #FF884B',
    borderRadius: 10,
    height: 200,
    minWidth: 200,
    diplay: 'flex',
    flexDirection: 'column',
    marginRight: 40,
    marginBottom: 20,
    padding: 20
}));

export const ColumnFlex = styled(Box)(({}) => ({
    diplay: 'flex',
    flexDirection: 'column',
}));

export const FlexEnd = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

export const ViewRequests = styled(Button)(({}) => ({
    backgroundColor: '#5463FF',
    marginTop: 20,
    width: 250,
    height: 40,
    textTransform: 'none'
}));