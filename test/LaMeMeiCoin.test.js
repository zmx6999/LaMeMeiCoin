const Web3 = require('web3')
const ganache = require('ganache-cli')
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
const abi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "from", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "getAllowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "value", "type": "uint256" } ], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "manager", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "value", "type": "uint256" } ], "name": "unfreeze", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "freezeOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "value", "type": "uint256" } ], "name": "freeze", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "initialSupply", "type": "uint256" }, { "name": "_decimals", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approve", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Freeze", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Unfreeze", "type": "event" } ]
const assert = require('assert')
const bytecode = '60806040523480156200001157600080fd5b506040516200138e3803806200138e8339810180604052810190808051820192919060200180518201929190602001805190602001909291908051906020019092919050505083600090805190602001906200006f9291906200012f565b508260019080519060200190620000889291906200012f565b5080600281905550600254600a0a8202600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620001de565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017257805160ff1916838001178555620001a3565b82800160010185558215620001a3579182015b82811115620001a257825182559160200191906001019062000185565b5b509050620001b29190620001b6565b5090565b620001db91905b80821115620001d7576000816000905550600101620001bd565b5090565b90565b6111a080620001ee6000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063095ea7b3146101655780630af4187d146101b257806318160ddd1461022957806323b872dd14610254578063313ce567146102c157806342966c68146102ec578063481c6a75146103195780636623fc461461037057806370a082311461039d57806395d89b41146103f4578063a9059cbb14610484578063cd4217c1146104d1578063d7a78db814610528575b600080fd5b3480156100e157600080fd5b506100ea610555565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012a57808201518184015260208101905061010f565b50505050905090810190601f1680156101575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017157600080fd5b506101b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105f3565b005b3480156101be57600080fd5b50610213600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610712565b6040518082815260200191505060405180910390f35b34801561023557600080fd5b5061023e610799565b6040518082815260200191505060405180910390f35b34801561026057600080fd5b506102bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061079f565b005b3480156102cd57600080fd5b506102d6610940565b6040518082815260200191505060405180910390f35b3480156102f857600080fd5b5061031760048036038101908080359060200190929190505050610946565b005b34801561032557600080fd5b5061032e610a92565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561037c57600080fd5b5061039b60048036038101908080359060200190929190505050610ab8565b005b3480156103a957600080fd5b506103de600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c7e565b6040518082815260200191505060405180910390f35b34801561040057600080fd5b50610409610c96565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561044957808201518184015260208101905061042e565b50505050905090810190601f1680156104765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049057600080fd5b506104cf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d34565b005b3480156104dd57600080fd5b50610512600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d43565b6040518082815260200191505060405180910390f35b34801561053457600080fd5b5061055360048036038101908080359060200190929190505050610d5b565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505081565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561061957600080fd5b60008111151561062857600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6e11fb1b7f119e3f2fa29896ef5fdf8b8a2d0d4df6fe90ba8668e7d8b2ffa25e836040518082815260200191505060405180910390a35050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60035481565b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561082a57600080fd5b6108b0600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482610f21565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061093b838383610f42565b505050565b60025481565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561099457600080fd5b6000811115156109a357600080fd5b6109af60035482610f21565b6003819055506109fe600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482610f21565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5826040518082815260200191505060405180910390a250565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b0657600080fd5b600081111515610b1557600080fd5b610b5e600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482611147565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bea600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482610f21565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167f2cfce4af01bcb9d6cf6c84ee1b7c491100b8695368264146a94d71e10a63083f826040518082815260200191505060405180910390a250565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d2c5780601f10610d0157610100808354040283529160200191610d2c565b820191906000526020600020905b815481529060010190602001808311610d0f57829003601f168201915b505050505081565b610d3f338383610f42565b5050565b60066020528060005260406000206000915090505481565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610da957600080fd5b600081111515610db857600080fd5b610e01600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482610f21565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e8d600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482611147565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167ff97a274face0b5517365ad396b1fdba6f68bd3135ef603e44272adba3af5a1e0826040518082815260200191505060405180910390a250565b600080828410151515610f3357600080fd5b82840390508091505092915050565b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610f9057600080fd5b60008273ffffffffffffffffffffffffffffffffffffffff1614151515610fb657600080fd5b600081111515610fc557600080fd5b61100e600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482611147565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061109a600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482610f21565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600080828401905083811015801561115f5750828110155b151561116a57600080fd5b80915050929150505600a165627a7a72305820c8a170561b59f1d04fe4f48c5b520bde8c0aae1ac5b6eec296dc2e8f393380ca0029'
let instance
let accounts
beforeEach(async () => {
    accounts = await web3.eth.getAccounts()
    instance = await new web3.eth.Contract(abi).deploy({data:bytecode,arguments:['LaMeMeiCoin','LMM',100,18]}).send({from:accounts[0],gas:3000000})
})
describe('LaMeMeiCoin',() => {
    it('transfer from',async () => {
        await instance.methods.transfer(accounts[1],100000000).send({from:accounts[0],gas:3000000})
    })

    it('transfer value',async () => {
        await instance.methods.transfer(accounts[1],0).send({from:accounts[0],gas:3000000})
    })

    it('transfer to',async () => {
        await instance.methods.transfer('0x0',10000000).send({from:accounts[0],gas:3000000})
    })

    it('approve spender',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve('0x0',1000000).send({from:accounts[1],gas:3000000})
    })

    it('approve value',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],0).send({from:accounts[1],gas:3000000})
    })

    it('transferFrom allowance',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],2000000).send({from:accounts[2],gas:3000000})
    })

    it('transferFrom from',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],100000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],20000000).send({from:accounts[2],gas:3000000})
    })

    it('transferFrom value',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],0).send({from:accounts[2],gas:3000000})
    })

    it('transferFrom to',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],'0x0',10).send({from:accounts[2],gas:3000000})
    })

    it('burn value',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        await instance.methods.burn(0).send({from:accounts[3],gas:3000000})
    })

    it('burn from',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        await instance.methods.burn(200800).send({from:accounts[3],gas:3000000})
    })

    it('freeze value',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        await instance.methods.freeze(0).send({from:accounts[3],gas:3000000})
    })

    it('freeze from',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        await instance.methods.freeze(200000).send({from:accounts[3],gas:3000000})
    })

    it('unfreeze value',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        await instance.methods.freeze(2010).send({from:accounts[3],gas:3000000})
        await instance.methods.unfreeze(0).send({from:accounts[3],gas:3000000})
    })

    it('unfreeze from',async () => {
        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        await instance.methods.freeze(2010).send({from:accounts[3],gas:3000000})
        await instance.methods.unfreeze(2012).send({from:accounts[3],gas:3000000})
    })

    it('transfer',async () => {
        let t = await instance.methods.totalSupply().call()

        let b = {}
        let f = {}
        for (let i=0;i<4;i++) {
            b[i] = await instance.methods.balanceOf(accounts[i]).call()
            f[i] = await instance.methods.freezeOf(accounts[i]).call()
        }

        await instance.methods.transfer(accounts[1],10000000).send({from:accounts[0],gas:3000000})
        let r = await instance.methods.balanceOf(accounts[0]).call()
        assert(r,parseInt(b[0])-10000000,'')
        r = await instance.methods.balanceOf(accounts[1]).call()
        assert(r,parseInt(b[1])+10000000,'')

        await instance.methods.approve(accounts[2],1000000).send({from:accounts[1],gas:3000000})
        r = await instance.methods.getAllowance(accounts[1],accounts[2]).call()
        assert(r,1000000,'')

        await instance.methods.transferFrom(accounts[1],accounts[3],100000).send({from:accounts[2],gas:3000000})
        r = await instance.methods.balanceOf(accounts[1]).call()
        assert(r,parseInt(b[1])+10000000-100000,'')
        r = await instance.methods.balanceOf(accounts[3]).call()
        assert(r,parseInt(b[3])+100000,'')

        await instance.methods.burn(2008).send({from:accounts[3],gas:3000000})
        r = await instance.methods.totalSupply().call()
        assert(r,t-2008,'')
        r = await instance.methods.balanceOf(accounts[3]).call()
        assert(r,parseInt(b[3])+100000-2008,'')

        await instance.methods.freeze(2010).send({from:accounts[3],gas:3000000})
        r = await instance.methods.balanceOf(accounts[3]).call()
        assert(r,parseInt(b[3])+100000-2008-2010,'')
        r = await instance.methods.freezeOf(accounts[3]).call()
        assert(r,parseInt(f[3])+2010,'')

        await instance.methods.unfreeze(2007).send({from:accounts[3],gas:3000000})
        r = await instance.methods.balanceOf(accounts[3]).call()
        assert(r,parseInt(b[3])+100000-2008-2010+2007,'')
        r = await instance.methods.freezeOf(accounts[3]).call()
        assert(r,parseInt(f[3])+2010-2007,'')
    })
})
