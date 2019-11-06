import Mock,{Random} from "mockjs"

let data= Mock.mock({
    "data|100":[
        {
            "shopId|+1":1,//生成商品id,自增1
            "shopMsg":"@ctitle(10)",//生成商品长度为10个汉字
            "shopName":"@cname",//生成商品名,都是中国人的名字
            "shopVolume|30-1000":30,//随机生成商品价格在30-1000之间
            "shouimg":Random.image("200x100")
        }
    ],
    "data1|100":[
        {
            "shopId|+1":101,//生成商品id,自增1
            "shopMsg":"@ctitle(10)",//生成商品长度为10个汉字
            "shopName":"@cname",//生成商品名,都是中国人的名字
            "shopVolume|30-1000":30,//随机生成商品价格在30-1000之间
            "shouimg":Random.image("200x100")
        }
    ],
    "data2:100":[
        {
            "shopId|+1":201,//生成商品id,自增1
            "shopMsg":"@ctitle(10)",//生成商品长度为10个汉字
            "shopName":"@cname",//生成商品名,都是中国人的名字
            "shopVolume|30-1000":30,//随机生成商品价格在30-1000之间
            "shouimg":Random.image("200x100")
        }
    ]
})
Mock.mock(/api\/list/,'get',(data)=>{
   console.log("data",data)
})