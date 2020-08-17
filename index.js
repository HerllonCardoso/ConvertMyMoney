const express = require('express')
const app = express()
const path = require('path')

const convert = require('./lib/convert')
const api = require('./lib/api')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req,res) => {
  const cotacao =  api.getCotacao()
    console.log('cotacao', cotacao)
    res.render('home')
})

app.get('/cotacao', (req, res) => {
    const { cotacao, quantidade} = req.query
    if(cotacao && quantidade){
    const conversao = convert.convert(cotacao, quantidade)
    res.render('cotacao', {
        error: false,
        cotacao: convert.toMoney(cotacao), 
        quantidade: convert.toMoney(quantidade), 
        conversao: convert.toMoney(conversao)
         })
    }else{
        res.render('cotacao', {
            error: 'Valores inválidos'
        })
    }
})

app.listen(port, err =>{
    if(err){
        console.log('The serve is unavailable')
    } else {
        console.log("The server is running")
    }
})
