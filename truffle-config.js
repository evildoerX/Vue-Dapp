
var HDWalletProvider = require('truffle-hdwallet-provider')
require('dotenv').config()
var mnemonic = process.env.HDWALLET_MNEMONIC
console.log(mnemonic)
console.log(process.env.INFURA_API_KEY)
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6700000,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 7000000,
      gasPrice: 28921116127
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 6000000,
      gasPrice: 28921116127
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 4612388,
      gasPrice: 28921116127
    }
  }
};
