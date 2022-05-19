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
          count++;
        }
        if(dispatch) dispatch(requestAction.setRequests(arr))
        return arr
      } catch (error) {
        alert(error.message)
      }
    }
  
    return { getTransferRequests }
  }

  export function useApproveTransferRequest(dispatch: Dispatch<any>){
    const approveRequest = async (address: string, index: number) => {
      try {
        const campaignInstance = campaign(address)
        const accounts = await web3.eth.getAccounts()
        const { getTransferRequests } = useGetTransferRequest(dispatch)

        const res = await campaignInstance.methods.approveRequest(index).send({
          from: accounts[0],
          gas: "10000000"
        })
        await getTransferRequests(address)
        console.log('res======>', res)
      } catch (error) {
        console.log('err', error)
      }
    }

    return { approveRequest }
  }

  export function useFinalizeTransferRequest(dispatch: Dispatch<any>){
    const finalizeTransaction = async (address: string, index: number) => {
      try {
        const campaignInstance = campaign(address)
        const accounts = await web3.eth.getAccounts()
        const { getTransferRequests } = useGetTransferRequest(dispatch)

        await campaignInstance.methods.finalizeTransaction(index).send({
          from: accounts[0],
          gas: "10000000"
        })
        await getTransferRequests(address)
      } catch (error) {
        console.log('err', error)
      }
    }

    return { finalizeTransaction }
  }