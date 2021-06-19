const axios = require('axios');

async function getHolderTokens(req, res) {
  let { contract, holder } = req.params;

  if (!contract || !holder) return res.send('Please enter both fields');

  const url = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contract}&address=${holder}&tag=latest&apikey=${process.env.ETHERSCAN_KEY}/`;

  try {
    let response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Something Went Wrong');
  }
}

module.exports = { getHolderTokens };
