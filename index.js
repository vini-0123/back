const a = require('express')
const b = require('cors')

const copyExpress = a()
copyExpress.use(b())

copyExpress.get('/meuendpoint',(req,res)=>{
    res.send('Olá Mundo')
})

copyExpress.listen(3078, ()=>{
    console.log('porta aberta, server ligado')
})