require("@nomicfoundation/hardhat-toolbox");
const PRIVATE_KEY =
  "7b122d4c4c7fa84d81101c6118d41cf7fb5f8eabac003b550fd3379d1d2437ee";
// 0xbbd70e509752d78a0d963ad8b975d6103739ed95cefd16073ab9247c1c8bd458
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  networks: {
    // hardhat: {
    //   chainId: 1337,
    // },
    localhost: {
      url: "http://localhost:7545",
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
// hardhat: {
//   chainId: 1337,
// },0x5FbDB2315678afecb367f032d93F642f64180aa3
