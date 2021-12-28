require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_URL,
        blockNumber: 4501735
      }
    }
  }
};
