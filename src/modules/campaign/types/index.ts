export interface createCampaignInterface {
    name: string,
    description: string,
    imageUrl: string,
    minCon: number,
    minFund: number
}

export interface contractType {
    name: string,
    description: string,
    imageUrl: string,
    minimumFund: number,
    minimumContribution: number,
    donorsCount: number,
    approveCount: number,
    amountCollected: number
}

export interface State {
    selectedContract?: contractType 
}