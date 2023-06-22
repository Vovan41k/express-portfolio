const express = require('express');
const app = express();
app.use(express.static('public'))


app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send(`
<html>
<body>
<h1>
hello
</h1>
</body>
</html>   
    `)
})

app.get('/home', (req, res)=>{
    res.render('home', { name: 'Pavel' });
})

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});