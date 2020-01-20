import express from 'express';
import path from 'path';
import { serverRoutes } from './routes/serverRoutes';
const app = express();
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
  console.log('server running');
})