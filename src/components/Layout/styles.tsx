import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "space-between",
  height: '100vh',
  padding: 100
}));

export const HeaderComponent = styled(Box)(({}) => ({
    display: 'flex',
    backgroundColor: "#112B3C",
    height: '5em',
}));

export const FooterComponent = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  height: "15em",
  backgroundColor: "#112B3C"
}));
