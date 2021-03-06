// custom hooks

import { contractType, createCampaignInterface, State } from "../types";
import factory from "../../../etherum/factory"
import campaign from "../../../etherum/campaign"
import web3 from "../../../etherum/web3"
import _ from "lodash";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch, useReducer } from "react";
import { initialState } from "../context/campaignContext";

const reducer = {
  setCampaign: function (
    state: State,
    payload: PayloadAction<contractType | undefined>
  ) {
    state.selectedContract = payload.payload
  },
  setManagerStatus: function (
    state: State,
    payload: PayloadAction<boolean>
  ) {
    state.isManager = payload.payload
  }
};

const slice = createSlice({
  initialState,
  name: "campaign",
  reducers: reducer
});

export const campaignAction = slice.actions;

export function useReducerCampaign() {
  const reducerInfo = useReducer(slice.reducer, initialState);
  return reducerInfo;
}

export function useCreateCampaign() {
  const createNewCampaign = async (params: createCampaignInterface) => {
    try {
      const accounts = await web3.eth.getAccounts()

      await factory.methods.createCampaign(
        params.name,
        params.description,
        params.imageUrl,
        params.minCon,
        params.minFund
      ).send({
        from: accounts[0]
      })
      return "success"
    } catch (error) {
      alert(error.message)
      return (error.message)
    }
  }

  return { createNewCampaign }
}

export function useGetCampaignData(dispatch: Dispatch<any> | null) {
  const getCampaignData = async (campaignAddress: string) => {

    try {
      const campaignInstance = campaign(campaignAddress)
      const res = await campaignInstance.methods.campaign().call()

      if (!_.isEmpty(res)) {
        delete res["0"]
        delete res["1"]
        delete res["2"]
        delete res["3"]
        delete res["4"]
        delete res["5"]
        delete res["6"]
        delete res["7"]

        const responseObj: contractType = {
          name: res["name"],
          description: res["description"],
          imageUrl: res["imageUrl"],
          minimumFund: Number(res["minimumFund"]),
          minimumContribution: Number(res["minimumContribution"]),
          donorsCount: Number(res["donorsCount"]),
          approveCount: Number(res["approveCount"]),
          amountCollected: Number(res["amountCollected"])
        }
        if(dispatch) dispatch(campaignAction.setCampaign(responseObj))
        return responseObj
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return { getCampaignData }
}

export function useContributeInCampaign(dispatch: Dispatch<any>) {
  const contributeInCampaign = async (amount: number, address: string) => {
    const { getCampaignData } = useGetCampaignData(dispatch);
    try {
      const accounts = await web3.eth.getAccounts()

      const campaignInstance = campaign(address)
      await campaignInstance.methods.contribute().send({
        from: accounts[0],
        value: amount,
        gas: '1000000'
      })

      getCampaignData(address)
      return "success"
    } catch (error) {
        alert(error.message)        
    }
  }

  return { contributeInCampaign }
}

export function useGetManagerStatus(dispatch: Dispatch<any>) {
  const getManagerStatus = async (address: any) => {
    try {
      const campaignInstance = campaign(address)
      const res = await campaignInstance.methods.isManager().call()
      console.log('res ====>', res)
      if(dispatch) dispatch(campaignAction.setManagerStatus(res))
    } catch (error) {
      alert(error.message)
    }
  }

  return { getManagerStatus }
}

export function useCreateTransferRequest() {
  const createTransferRequest = async (requsetAmount: number, description: string, recipient: string, address: string) => {
    try {
      const campaignInstance = campaign(address)
      const accounts = await web3.eth.getAccounts()

      const res = await campaignInstance.methods.createRequest(Number(requsetAmount), description, recipient).send({
        from: accounts[0],
        gas: '1000000'
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return { createTransferRequest }
}
