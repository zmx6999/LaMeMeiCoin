const path = require('path')
const fs = require('fs')
const source = fs.readFileSync(path.join(__dirname,'contracts','LaMeMeiCoin.sol'),'utf-8')
const solc = require('solc')
module.exports = solc.compile(source,1)['contracts'][':LaMeMeiCoin']
