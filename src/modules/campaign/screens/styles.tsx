import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    flexWrap: 'wrap'
}));

export const TableParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    padding: 50
}))