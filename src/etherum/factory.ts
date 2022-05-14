import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x45Dd4FF08d78E82B09edb6b4546E15db50745718'
)

export default instance