const express = require('express');
const app = express();
const projects = [{
    id:1,
    title:'Фитнес-бот',
    image:'./img/blog-1.jpg',
    date:'08.06.2023',
    description:'Поможет вам записаться к фитнес-тренеру',
    url:'https://t.me/FitnessTrainer123_bot',
    type:'bot'
},{
    id:2,
    title:'Космос-бот',
    image:'img/blog-2.jpg',
    date:'01.06.2023',
    description:'Расскажет вам о Солнечной системе.',
    url:'https://t.me/spaceProgram_bot',
    type:'bot'
},{
    id:3,
    title:'Медик-бот',
    image:'img/blog-3.jpg',
    date:'25.05.2023',
    description:'Расскажет вам о необходимых прививках во всех странах.',
    url:'https://t.me/vaccine123_bot',
    type:'bot'
},{
    id:4,
    title:'Фитнес-сайт',
    image:'img/blog-1.jpg',
    date:'08.06.2023',
    description:'Сайт для записи к фитнес-тренеру.',
    url:'#',
    type:'site'
},{
    id:5,
    title:'Космос-сайт',
    image:'img/blog-2.jpg',
    date:'1.06.2023',
    description:'Расскажет вам о Солнечной системе.',
    url:'#',
    type:'site'
},{
    id:6,
    title:'Калькулятор',
    image:'img/blog-4.jpg',
    date:'26.01.2023',
    description:'Калькулятор.',
    url:'#',
    type:'site'
}]

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.render('index', {projects});
});

// app.get('/home', (req, res)=>{
//     res.render('home', { name: 'Pavel' });
// })

app.get('/about', (req, res)=>{
    res.render('about'); 
})

app.get('/blog', (req, res)=>{
    res.render('blog'); 
})

app.get('/contact', (req, res)=>{
    res.render('contact'); 
})

app.get('/index', (req, res)=>{
    res.render('index'); 
})

app.get('/single', (req, res)=>{
    res.render('single'); 
})

app.get('/site/:id', (req, res)=>{
    const id = req.params.id
    const project = projects.find(project=> project.id === +id)
    res.render('site', {project});
})

app.use(express.static('public'))
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});

