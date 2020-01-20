import express from 'express';
import log4js from 'log4js';
import path from 'path';
import { serverRoutes } from './routes/serverRoutes';

const app = express();
const logger = log4js.getLogger();

// json出力にする
log4js.addLayout('json',(config) => {
  return (logEvent) => { 
    return JSON.stringify(logEvent) + config.separator;
  }
});
log4js.configure({
  appenders: {
    out: { type: 'stdout', layout: { type: 'json', separator: ',' } }
  },
  categories: {
    default: { appenders: ['out'], level: 'info' }
  }
});


// Expressのログ出力はlog4jsを使用する
app.use(log4js.connectLogger(logger));

// distを紐付ける
app.use(express.static(path.join('./', 'dist')));

// SSRに振りたいパスを記述していく
// https://expressjs.com/ja/guide/routing.html
app.get('/contact', serverRoutes);

// それ以外はクライアントサイドレンダリング用のファイルを返す
// distにファイルがあればそれを返す。なかったらdist/index.htmlが返り、そこからmain.jsによってroutesが実行される
app.get('*', function (req, res) {
  res.sendFile(path.resolve('dist', 'index.html'));
})
app.listen(3000, ()=> {
  console.log('server has been loaded');
})