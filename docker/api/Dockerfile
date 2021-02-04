# 必須 - 基になるイメージ
FROM node:lts-alpine

# 環境変数の設定
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# 作業ディレクトリ
WORKDIR /server/src

# 実行コマンド
RUN apk update

# パッケージのインストール
# RUN yarn install

# コンテナが接続用にリッスンするポートの指定
EXPOSE 8080
