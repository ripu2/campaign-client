import { useRouter } from "next/router";
import React, { useEffect, useCallback } from "react";
import { RequestContext } from "../context/requestContext";
import { TableParentCotainer } from "./styles"

import {
  useGetTransferRequest,
  useReducerRequest,
} from "../hooks/requests";
import RequestTable from "../components/requestTable";
function RequestList() {
  const router = useRouter();
  const [state, dispatch] = useReducerRequest();

  const { getTransferRequests } = useGetTransferRequest(dispatch);

  const getRequests = useCallback(async () => {
    console.log("call");
    const res = await getTransferRequests(router.query.address);
    console.log("res=====>", res);
  }, []);

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <RequestContext.Provider value={{ state, dispatch }}>
      {
        console.log('i callll')
      }
      <TableParentCotainer>
        <h1>Available transfer Requests</h1>
        <RequestTable></RequestTable>
      </TableParentCotainer>
    </RequestContext.Provider>
  );
}

export default React.memo(RequestList);
