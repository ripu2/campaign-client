import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x34fD1946554D94ECB020c5ef5d9Ea317Ca6461D6'
)

export default instance