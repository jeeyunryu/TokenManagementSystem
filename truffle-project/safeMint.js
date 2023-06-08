const Web3 = require('web3');
const contract = require('truffle-contract');
const sbtArtifact = require('./build/contracts/SBT.json');

const web3 = new Web3('http://127.0.0.1:8545'); // Replace with your RPC endpoint
const sbtContract = contract(sbtArtifact);
sbtContract.setProvider(web3.currentProvider);

const defaultAccount = '0xC5A28FdA1069a565a27Be712E167d23a0eE3628d';

// Get the deployed contract instance
sbtContract.deployed().then((instance) => {
  // Call the safeMint() method with the `from` option
  instance.safeMint( defaultAccount, 'ipfs://bafkreic6ov4qo4ucd4g4uuyve4h72nc4y2lg7ugtq3n3vxnfp3lojvtmdu', { from: defaultAccount, gas: 3000000 })
  .then((receipt) => {
    console.log("Transaction receipt:", receipt);
  })
  .catch((error) => {
    console.error("Error sending transaction:", error);
  });
});

