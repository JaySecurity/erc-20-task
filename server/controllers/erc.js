const axios = require('axios');
const Web3 = require('web3');
const web3 = new Web3(
  'https://mainnet.infura.io/v3/59ab074c808946a48eb6bc5b6b2aafcd'
);
const abi = require('erc-20-abi');
async function getHolderTokens(req, res) {
  let contractAddress = req.params.contract;
  let holderAddress = req.params.holder;

  if (!contractAddress || !holderAddress)
    return res
      .status(400)
      .json({ error: 'Please provide contract and holder addresses' });

  try {
    let contract = new web3.eth.Contract(abi, contractAddress);
    let tokens = await contract.methods.balanceOf(holderAddress).call();
    tokens = web3.utils.fromWei(tokens, 'Gwei');
    res.status(200).json({ tokens });
  } catch (err) {
    console.log(err);
    res.status(500).send('Something Went Wrong');
  }
}

module.exports = { getHolderTokens };
