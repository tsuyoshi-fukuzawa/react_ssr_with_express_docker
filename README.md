## 動作の概要

server.jsにパスを記載することでSSRにするか、しないかを決める。
SSRにする場合は、serverRoutes.jsを間に入れて、server側でhtmlをrenderする。
SSRにしない場合は、distのindex.htmlを返す。(通常のSPA)

## 起動方法

$ docker-compose build
$ docker-compose up

## SSRにする手順

server.jsにSSRにしたいパスを追加する
例:
```
app.get('/help/*', serverRoutes);
```

## 運用上の注意

- クライアントサイドレンダリングするものは普通に作って良い。

## npmの補足
```
{
  "devDependencies": {
    "@babel/cli": "^7.7.7",           // サーバサイドでjavascriptをレンダリングするために必要
    "@babel/core": "^7.7.7",
    "@babel/node": "^7.7.7",          // --exec babel-nodeをするために必要
    "@babel/preset-env": "^7.7.7",  
    "@babel/preset-react": "^7.7.4",
    "babel-loader": "^8.0.6",
    "concurrently": "^5.0.2",         // script devで、npmコマンドをパラレル実行するために必要
    "html-webpack-plugin": "^3.2.0",
    "nodemon": "^2.0.2",              // サーバサイドレンダリングで、ファイルが更新されたら検知できるようにする
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-merge": "^4.2.2"         // devのwebpack.configは転送設定が必要なので、環境ごとにconfigが分けられるようにする
  },
  "dependencies": {
    "express": "^4.17.1",             // WEBサーバ
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-helmet": "^5.2.1",         // metaタグ
    "react-router-dom": "^5.1.2"
  }
}
```




