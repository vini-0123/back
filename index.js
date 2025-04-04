const a = require('express')
const b = require('cors')

const copyExpress = a()
copyExpress.use(b())

copyExpress.get('/meuendpoint',(req,res)=>{
    res.send([
        {nome:"teste", rgm:"123", curso:"ADS"},
        {nome:"testeDOIS", rgm:"321", curso:"ADM"}
        {nome:"Jao", rgm:"231", curso:"ADS"}
        {nome:"Plinio", rgm:"312", curso:"MKT"}
    ])
})

copyExpress.listen(3078, ()=>{
    console.log('porta aberta, server ligado')
})