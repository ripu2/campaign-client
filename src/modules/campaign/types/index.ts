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
    selectedContract?: contractType,
    isManager?: boolean
}

export interface RequestType {
    approvalCount: string
    complete: boolean
    description: string
    recipient: string
    value: string
}

export interface RequestState {
    request?: Array<RequestType>
}
export interface createRequestInterface {
    requsetAmount: number,
    description: string,
    recipient: string
}
