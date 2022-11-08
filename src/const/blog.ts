const BLOG = {
  TITLE_MAIN: 'ブログ',
  TITLE_SUB: 'Blog',
  CONTENTS: [
    {
      TITLE: `【参加者50人Over！】オフライン勉強会・イベントレポート`,
      IMAGE_SRC: 'dev_guil_event.png',
      URL: 'https://kosotudev.com/devguil-2022-0625/',
    },
    {
      TITLE: `【Lambda × RDS Proxy】LambdaからProxy経由でRDSに接続してみる`,
      IMAGE_SRC: 'rds.jpeg',
      URL: 'https://kosotudev.com/rds-proxy/',
    },
    {
      TITLE: `【Route53 × WordPress】EC2からXserverへ移管するためのドメイン設定`,
      IMAGE_SRC: 'route53.jpeg',
      URL: 'https://kosotudev.com/route53-xserver/',
    },
    {
      TITLE: `【EC2】EC2にWordPressブログを構築してみた`,
      IMAGE_SRC: 'ec2.jpeg',
      URL: 'https://kosotudev.com/ec2-server/',
    },
    {
      TITLE: `【file-saver】Reactでサーバーを介さずS3のオブジェクトをダウンロードしてみた`,
      IMAGE_SRC: 'react_file_server.jpeg',
      URL: 'https://kosotudev.com/react-file-saver/',
    },
    {
      TITLE: `【Golang + GORM + MySQL】Go言語のORM「GORM」を使ってみた`,
      IMAGE_SRC: 'golang.jpeg',
      URL: 'https://kosotudev.com/go-gorm/',
    },
  ],
} as const

export default BLOG
