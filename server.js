const express = require('express');
const hbs = require('hbs');

var app = express();

const port = process.env.PORT || 3000;

hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
})
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
/*app.get('/', (req, res) => {
    res.send({
        name:'joy',
        age:20
    });
});*/

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle : 'Home Page',
        msg : 'welcome to home page'
    })
});

app.get('/about', (req, res)=> {
    res.render('about.hbs', {
        pageTitle : 'About Page',
        msg: 'welcome to about page'
    });
});

app.get('/projects', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'Projects Page',
        msg: 'Hey this is my portfolio page'
    });
});

app.listen(port, ()=> {
    console.log('server started at', port);
});