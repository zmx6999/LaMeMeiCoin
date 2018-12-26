const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')
const assert = require('assert')
const {interface,bytecode} = require('../compile')
const web3 = new Web3(new HDWalletProvider('laugh combine urge type harvest story enemy drip real word agree basic','https://ropsten.infura.io/v3/91a0fbe4407c4b7c97b3f4e29423d8a9'))
let accounts
let instance
let r00
let r10
let a1 = '0xF6F5524142C8f06081E10281EEa716F1083F5297'
beforeEach(async () => {
    accounts = await web3.eth.getAccounts()
    instance = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode,
        arguments: ['LaMeMeiCoin','LMM',18,1000000]
    }).send({from:accounts[0],gas:3000000})
    r00 = await instance.methods.balanceOf(accounts[0]).call()
    r10 = await instance.methods.balanceOf(a1).call()
})
describe('deploy LMM', () => {
    it('transfer', async () => {
        let amount = 1000000
        await instance.methods.transfer(a1,amount).send({from:accounts[0],gas:3000000})
        let r01 = await instance.methods.balanceOf(accounts[0]).call()
        let r11 = await instance.methods.balanceOf(a1).call()
        assert(r01,parseInt(r00)-amount,'transfer failed')
        assert(r11,parseInt(r10)+amount,'transfer failed')
    })
})
