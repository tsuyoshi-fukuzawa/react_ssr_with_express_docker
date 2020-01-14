## scripts

基本は`npm run dev`と`npm run start`の2つのみ使用する。

`npm run dev`
clientとserverを起動する。
- ベースはclient。なのでdevをブラウザで確認する場合は、localhost:8080でアクセスする
- SSRのパスへURL直打ちでアクセスした場合、webpack.config.dev.jsのproxy設定に従い、localhost:3000に内部的に転送される。
- SSRされているかどうかは、curl等で試すとわかりやすい。

`npm run start`
envをproductionにセットして、ビルドを実行した後、サーバを起動する。
- ベースはserver。SSR以外のパスにアクセスした場合、distのindex.htmlが返される。
- アクセスの度にserver.jsが走ってrouteをチェックするので、少し負荷が上がるはず

* 他はdevとstartからコールされるprivateなscriptなので説明省略

## SSRを構成するnpm
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
    "webpack-dev-server": "^3.10.1",
    "webpack-merge": "^4.2.2"         // devのwebpack.configは転送設定が必要なので、環境ごとにconfigが分けられるようにする
  },
  "dependencies": {
    "express": "^4.17.1",             // WEBサーバ
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router-config": "^5.1.1",  // <Route .../>を設定ファイルから自動生成してくれる
    "react-router-dom": "^5.1.2"
  }
}
```

## 運用上の注意

- クライアントサイドレンダリングするものは普通に作って良い。
- routes.rbが少しだけ独特なjsonフォーマットになっている。(Todo:解除したい)

## ページをSSRに切り替える手順

### 1. src/server.js
対応させたいパスを追加する

### 2. config/webpack.config.dev.js
対応させたいパスを追加する






