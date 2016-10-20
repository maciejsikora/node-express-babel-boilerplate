import {app} from './consts';


app.get('/', (req, res) => {
  res.send('Hello world node.js es6 app.');
});
