require("@nomicfoundation/hardhat-toolbox");

// https://eth-goerli.g.alchemy.com/v2/7xiigEMyNF-ouM3JmQO_9tU3kvannVDg
const ALCHEMY_API_KEY = "7xiigEMyNF-ouM3JmQO_9tU3kvannVDg";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY =
  "e98777b1e32019d058d5c2ead624d9b095c49c20879dbf3968cf7d1338c7b260";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
