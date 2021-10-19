const { ethers } = require("ethers");
const { ganacheUrlEndPoint, fungibleTokenAddress, fungibleTokenAbi, supplyChainContractAddress, supplyChainSmartContractAbi, wareHousePrivateKey, deliveryManAddress, deliveryManPrivateKey } = require("./vars");

const provider = new ethers.providers.JsonRpcProvider(`${ganacheUrlEndPoint}`)
const signerWareHouse = new ethers.Wallet(wareHousePrivateKey, provider)
const signerDeliveryMan = new ethers.Wallet(deliveryManPrivateKey, provider)
const erc20WareHouse = new ethers.Contract(fungibleTokenAddress, fungibleTokenAbi, signerWareHouse)
const supplyChainWareHouse = new ethers.Contract(supplyChainContractAddress, supplyChainSmartContractAbi, signerWareHouse)
const erc20DeliveryMan = new ethers.Contract(fungibleTokenAddress, fungibleTokenAbi, signerDeliveryMan)
const supplyChainDeliveryMan = new ethers.Contract(supplyChainContractAddress, supplyChainSmartContractAbi, signerDeliveryMan)
module.exports = {erc20DeliveryMan, erc20WareHouse, supplyChainDeliveryMan, supplyChainWareHouse}
