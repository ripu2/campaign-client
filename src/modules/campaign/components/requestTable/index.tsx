import { Divider, Table, TableBody, TableHead, TableRow } from "@mui/material";
import React, { useCallback } from "react";
import { useRequesrContext } from "../../context/requestContext";
import { RequestType } from "../../types";
import TableCell from "../tableCell";
import TableContainer from "@mui/material/TableContainer";
import { useApproveTransferRequest, useFinalizeTransferRequest } from "../../hooks/requests"
import {
  ApproveButtonContainer,
  TransferButtonContainer,
  StyledTableCell,
  StyledTableRow,
} from "./style";
import { useRouter } from "next/router";

export default function RequestTable() {
  const { state, dispatch } = useRequesrContext();
  const { approveRequest } = useApproveTransferRequest(dispatch)
  const { finalizeTransaction } = useFinalizeTransferRequest(dispatch)

  const router = useRouter()
  const address = router.query.address as string


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

  const onApproveClick = async (id: number) => {
    console.log('call')
    await approveRequest(address, id)
  }

  const finalizeTransactionHandler = async (id: number) => {
    await finalizeTransaction(address, id)
  }

  const getTableBody = useCallback(() => {
    return (
      <TableBody>
        {state.request &&
          state.request.map((request: RequestType, index: number) => {
            return (
              <StyledTableRow key={index}>
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
                <StyledTableCell align="left">
                  <ApproveButtonContainer onClick={() => onApproveClick(index)}>
                    {"Approve"}
                  </ApproveButtonContainer>
                  </StyledTableCell>
                <StyledTableCell align="left">
                  <TransferButtonContainer onClick={() => finalizeTransactionHandler(index)}>
                    Transfer
                  </TransferButtonContainer>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
      </TableBody>
    );
  }, [state.request]);

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          {getTableHeader()}
          {getTableBody()}
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
