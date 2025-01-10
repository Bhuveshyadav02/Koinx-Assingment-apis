require('dotenv').config()
const fetch=require('node-fetch')
const Crypto=require('../modal/cryptoModal')
const apikey=process.env.API_KEY
//method to fetch the cryptodata
const fetchCryptoData = async (crypto) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=1&precision=0`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': `${apikey}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        const latestPrice = json.prices[json.prices.length - 1][1];
        const firstPrice = json.prices[0][1];
        const marketCap = json.market_caps[json.market_caps.length - 1][1];
        const priceChange24h = ((latestPrice - firstPrice) / firstPrice) * 100;

        return {
            price: latestPrice,
            marketCap: marketCap,
            "24hChange": priceChange24h.toFixed(2),
        };
    } catch (err) {
        console.error(`Error fetching data for ${crypto}:`, err.message);
        return null;
    }
};
//storing the data into the database 
const storeCryptoData = async () => {
    const Cryptos = ['bitcoin', 'ethereum', 'matic-network'];

    for (const crypto of Cryptos) {
        const cryptoData = await fetchCryptoData(crypto);

        //if (!cryptoData) continue; // Skip if data fetch failed
        if (!cryptoData || isNaN(cryptoData["24hChange"])) {
            console.error(`Skipping storage for ${crypto} due to invalid data`);
            continue;
        }
        const existingRecord = await Crypto.findOne({ name: crypto });
        if (existingRecord) {
            existingRecord.prices.unshift(cryptoData.price);
            if (existingRecord.prices.length > 100) {
                existingRecord.prices.pop();
            }
            existingRecord.marketCap = cryptoData.marketCap;
            existingRecord.change24h = cryptoData["24hChange"];
            await existingRecord.save();
        } else {
            const newCrypto = new Crypto({
                name: crypto,
                prices: [cryptoData.price],
                marketCap: cryptoData.marketCap,
                change24h: cryptoData["24hChange"],
            });
            await newCrypto.save();
        }
    }

    console.log("Crypto data stored successfully");
};
//method to return the crypto data
const getCryptoData=async(req,res)=>{
    const {crypto}=req.params
    console.log(crypto)
    try {
        const data=await Crypto.findOne({name:crypto})
        console.log(data)
    return    res.status(200).json({
            name:data.name,
            price:data.prices[0],
            "24hChange":data.change24h

        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
///helper function
const calculateStandardDeviation = (prices) => {
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    const variance = prices.reduce((acc, price) => acc + (price - mean) ** 2, 0) / prices.length;
    return Math.sqrt(variance).toFixed(2);
  };
///method to calculate the deviation
  const getStandardDeviation = async (req, res) => {
    const { crypto } = req.params;
  
    try {
      const record = await Crypto.findOne({ name: crypto });
      if (!record || record.prices.length < 2) {
        return res.status(404).json({ error: 'Not enough data to calculate deviation' });
      }
  
      const stdDeviation = calculateStandardDeviation(record.prices);
      res.status(200).json({ Deviation: stdDeviation });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
module.exports={storeCryptoData,getCryptoData,getStandardDeviation}