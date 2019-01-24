const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('This is backend service for moneyme. I named this project as moneyme. sounds cute. Happy code'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))