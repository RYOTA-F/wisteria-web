const BLOG = {
  TITLE_MAIN: 'ブログ',
  TITLE_SUB: 'Blog',
  CONTENTS: [
    {
      TITLE: '参加者30名！【11月12日@新宿】LT＆交流会・イベントレポート',
      IMAGE_SRC: 'dev_guil_event.webp',
      URL: 'https://kosotudev.com/devguil-2022-1112/',
    },
    {
      TITLE: `【Lambda × RDS Proxy】LambdaからProxy経由でRDSに接続してみる`,
      IMAGE_SRC: 'rds.webp',
      URL: 'https://kosotudev.com/rds-proxy/',
    },
    {
      TITLE: `【Route53 × WordPress】EC2からXserverへ移管するためのドメイン設定`,
      IMAGE_SRC: 'route53.webp',
      URL: 'https://kosotudev.com/route53-xserver/',
    },
    {
      TITLE: `【EC2】EC2にWordPressブログを構築してみた`,
      IMAGE_SRC: 'ec2.webp',
      URL: 'https://kosotudev.com/ec2-server/',
    },
    {
      TITLE: `【file-saver】Reactでサーバーを介さずS3のオブジェクトをダウンロードしてみた`,
      IMAGE_SRC: 'react_file_server.webp',
      URL: 'https://kosotudev.com/react-file-saver/',
    },
    {
      TITLE: `【Golang + GORM + MySQL】Go言語のORM「GORM」を使ってみた`,
      IMAGE_SRC: 'golang.webp',
      URL: 'https://kosotudev.com/go-gorm/',
    },
  ],
} as const

export const BUTTON = {
  TEXT: 'ブログトップはこちらから',
  HREF: 'https://kosotudev.com/',
  // TODO: :GA
  ON_CLICK: () => {},
} as const

export default BLOG
