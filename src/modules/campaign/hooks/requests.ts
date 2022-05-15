import { RequestState, RequestType } from "../types";
import factory from "../../../etherum/factory"
import campaign from "../../../etherum/campaign"
import web3 from "../../../etherum/web3"
import _ from "lodash";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch, useReducer } from "react";
import { initialState } from "../context/requestContext";

const reducer = {
  setRequests: function (
    state: RequestState,
    payload: PayloadAction<RequestType[] | undefined>
  ) {
    state.request = payload.payload
  }
};

const slice = createSlice({
  initialState,
  name: "requests",
  reducers: reducer
});

export const requestAction = slice.actions;

export function useReducerRequest() {
  const reducerInfo = useReducer(slice.reducer, initialState);
  return reducerInfo;
}


// hooks

export function useGetTransferRequest(dispatch: Dispatch<any>) {
    const getTransferRequests = async (address: any) => {
      try {
        let count = 0
        let arr = []
        const campaignInstance = campaign(address)
        const res = await campaignInstance.methods.getRequestCount().call()
        console.log('res ====>', res)
        while(count < res) {
          const req = await campaignInstance.methods.requests(count).call()
          delete req["0"]
          delete req["1"]
          delete req["2"]
          delete req["3"]
          delete req["4"]

          const requestObj: RequestType = {
            description: req["description"],
            value: req["value"],
            recipient: req["recipient"],
            approvalCount: req["approvalCount"],
            complete: req["complete"]
          }
          arr.push(requestObj)
          console.log('arrr ====>', arr)
          if(dispatch) dispatch(requestAction.setRequests(arr))
          count++;
        }
        return arr
      } catch (error) {
        alert(error.message)
      }
    }
  
    return { getTransferRequests }
  }