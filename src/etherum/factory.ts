import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa32e0d57E7C76950B61d0f5939810E174706dB51'
)

export default instance