const express = require('express')
const app = express()


app.use(express.static('public'))


app.get('/',(req,res)=> {
    res.send(tresc)
})

app.get('/hello', (req, res) => {
  res.send('world')
})

app.listen(8085, () => {
	console.log('Listening at localhost:8085')
})

const tresc ='<html><head><title>blog</title><link rel="stylesheet" href="/css/framework.css"/><link rel="stylesheet" href="/css/global.css"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head><body><div class="container"><h1>blog</h1><ul class="posts"><li><a href="/post/yiplyaml">YIPL: (YAML Aint Markup Language) Is a Programming Language</a></li><li><a href="/post/about">Co to za miejsce?</a></li><li><a href="/post/me">Kim jestem?</a></li><li><a href="/post/technologies">Jak zrobiłem ten brzydki blog?</a></li></ul></div></body></html>'
