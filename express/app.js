import express from 'express';

const app = express();

const tecnologias = ['html', 'css', 'javascript', 'git', 'c++', 'aws', 'docker', 'postgresql'];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { tecnologias });
});
 
app.use((req, res) => {
  res.render('404');
});

app.listen(9000);