import { Box, Button, Typography } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { styled } from "@mui/system";


// export const TableHeader = styled(Box)(({}) => ({
//   display: "flex",
//   justifyContent: 'space-between'
// }));

// export const TableHeaderContainer = styled(Box)(({}) => ({
//     padding: 20,
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: "#203239",
//     width: '100%'
// }));

// export const Typos = styled(Typography)(({}) => ({
//   color: "#ECECEC"
// }));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#203239",
    color: "#F7F7F7",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#ECECEC",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const ApproveButtonContainer = styled(Button)(({}) => ({
  border: '2px solid #B8F1B0',
  textTransform: 'none'
}));

export const TransferButtonContainer = styled(Button)(({}) => ({
  border: '2px solid #205375',
  textTransform: 'none'
}));