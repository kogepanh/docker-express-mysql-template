# docker/api

[README](/README.md) 通りに Docker コンテナに入った場合、 `/app/src` にいると思います。  
そのディレクトリに `app.js` / `package.json` / `package-lock.json` / `.env` が存在すると思いますので、下記のコマンドを実行することで必要なパッケージをインストールし、コードが動きます。

```zsh
npm install
node app.js
```

## パッケージをインストールしたいとき

基本的に、最初に入ったディレクトリ（ `/app/src` ）で下記のコマンドでパッケージをインストールしてください。  
`package.json` / `package-lock.json` に依存関係が記録されるため、チーム開発の際に便利です。

```zsh
npm install --save [PACKAGE]
```
