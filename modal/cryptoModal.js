const { timeStamp } = require('console')
const moongose=require('mongoose')
const { type } = require('os')
 
const cryptoSchema=new moongose.Schema({
    name:{
        type:String,
        required:true
    },
    prices:[
        {
            type:Number,
            required:true
        }
    ],
    marketCap:{
       type:Number,
       require:true
    },
    change24h:{
        type:Number,
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
})
module.exports=moongose.model('Crypto',cryptoSchema)
