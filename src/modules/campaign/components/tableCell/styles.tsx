import { Box } from "@mui/material";
import { styled } from "@mui/system";


export const Cell = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: 'space-between',
  padding: 20,
}));
