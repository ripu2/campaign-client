import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3D572197c116FEEbc49aFc5Fe4b32d0446c0b991'
)

export default instance