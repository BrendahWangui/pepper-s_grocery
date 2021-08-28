if(process.env.NODE_ENV !== 'production'){

    require('dotenv')
}
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

console.log(stripePublicKey)
var port = process.env.PORT || 3000;

const express = require('express');
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/homepage', function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        } else{
            res.render('homepage.ejs', {
                stripePublicKey: stripePublicKey,
                items:JSON.parse(data)
            })
        }
    })
})

app.post('/purchase', function(req, res){
    fs.read('items.json', function(error, data){
        if(error){
            res.status(500).end()
        } else{
            console.log('Purchased Successfully')
        }
    })
})


app.listen(port)