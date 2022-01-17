import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
   JSON.parse(CampaignFactory.interface),
   '0x10B590e5328e0e04105Dee512f507176A1521A0A'
);

export default instance;