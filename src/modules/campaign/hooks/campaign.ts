// custom hooks

import { createCampaignInterface } from "../types";
import factory from "../../../etherum/factory"
import web3 from "../../../etherum/web3"

export default function useCreateCampaign() {
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
      return (error.message)
    }
  }

  return { createNewCampaign }
}