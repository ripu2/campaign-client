import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end'
}));

export const ButtonContainerContainer = styled(Button)(({}) => ({
    border: '2px solid #FF8D29'
}));
