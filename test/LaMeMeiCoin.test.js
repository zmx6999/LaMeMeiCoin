const Web3=require("web3")
const ganache=require("ganache-cli")
const web3=new Web3(ganache.provider())
const {interface,bytecode}=require("../compile")
const assert=require("assert")
let accounts
let instance
let b00
let b10
beforeEach(async () => {
    accounts=await web3.eth.getAccounts()
    instance=await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data:bytecode,
        arguments:["LaMeMeiCoin","LMM",18,1000000]
    }).send({
        from:accounts[0],
        gas:1000000
    })
    b00=await instance.methods.balanceOf(accounts[0]).call({
        from:accounts[0]
    })
    b10=await instance.methods.balanceOf(accounts[1]).call({
        from:accounts[1]
    })
})
describe("deploy LMM",() => {
    it('transfer',async () => {
        let amount=1000000000000000000000
        await instance.methods.transfer(accounts[1],amount)
        let b01=await instance.methods.balanceOf(accounts[0]).call({
            from:accounts[0]
        })
        let b11=await instance.methods.balanceOf(accounts[1]).call({
            from:accounts[1]
        })
        assert(b01,b00-amount,"transfer error")
        assert(b11,b10+amount,"transfer error")
    })
})