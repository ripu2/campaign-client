import { Divider, Table, TableBody, TableHead, TableRow } from "@mui/material";
import React, { useCallback } from "react";
import { useRequesrContext } from "../../context/requestContext";
import { RequestType } from "../../types";
import TableCell from "../tableCell";
import TableContainer from "@mui/material/TableContainer";

import {
  TableHeader,
  TableHeaderContainer,
  StyledTableCell,
  StyledTableRow,
} from "./style";

export default function RequestTable() {
  const { state, dispatch } = useRequesrContext();

  console.log("state", state);

  const getTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Amount</StyledTableCell>
          <StyledTableCell>Reciepent</StyledTableCell>
          <StyledTableCell>Approval count</StyledTableCell>
          <StyledTableCell>Approve</StyledTableCell>
          <StyledTableCell>Finalize</StyledTableCell>
        </TableRow>
      </TableHead>
    );
  };

  const getTableBody = useCallback(() => {
    return (
      <TableBody>
        {state.request &&
          state.request.map((request: RequestType, index: number) => {
            return (
              // <TableCell
              //   {...request}
              //   index={index}
              //   onApprove={() => {}}
              //   onFinalize={() => {}}
              // />
              <StyledTableRow>
                <StyledTableCell align="left">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {request.description}
                </StyledTableCell>
                <StyledTableCell align="left">{request.value}</StyledTableCell>
                <StyledTableCell align="left">
                  {request.recipient.slice(0, 5)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {request.approvalCount}
                </StyledTableCell>
                <StyledTableCell align="left">{"Approve"}</StyledTableCell>
                <StyledTableCell align="left">{"Transfer"}</StyledTableCell>
              </StyledTableRow>
            );
          })}
      </TableBody>
    );
  }, [state.request]);

  return (
    <React.Fragment>
      {/* <TableContainer>
        <TableHeader>{getTableHeader()}</TableHeader>
        {state.request && getTableBody()}
      </TableContainer> */}
      <TableContainer>
        <Table>
          {getTableHeader()}
          {getTableBody()}
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
