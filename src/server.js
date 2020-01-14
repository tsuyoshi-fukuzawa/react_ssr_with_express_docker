import express from 'express';
import path from 'path';
import { serverRoutes } from './routes/serverRoutes';
const app = express();
app.use(express.static(path.join('./', 'dist')));

// SSRに振りたいパスを記述していく
app.get('/contact', serverRoutes);

// それ以外はクライアントサイドレンダリング用のファイルを返す
app.get('*', function (req, res) {
  res.sendFile(path.join('./', 'dist', 'index.html'))
})
app.listen(3000, ()=> {
  console.log('server running');
})