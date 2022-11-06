const ABOUT = {
  TITLE_MAIN: 'Wisteria Webとは',
  TITLE_SUB: 'About',
  DESCRIPTION: `フリーランスエンジニアとしてWebエンジニアリング事業を行なっております。
Webアプリケーション開発はもちろん、HP制作やオンラインショップ開設のご要望にもお応えいたします。
私の経歴やスキルを下記のページに記載しておりますので、気になる方は是非ご覧くださいませ。
`,
  CONTENTS: [
    {
      TITLE: '経歴',
      DESCRIPTION: '\\ 経歴を見てみる /',
      ICON_TYPE: 'career',
      BUTTON_LINK: '/career',
      BUTTON_TEXT: '経歴一覧はこちらから',
    },
    {
      TITLE: 'スキル',
      DESCRIPTION: '\\ 保有スキルを見てみる /',
      ICON_TYPE: 'skill',
      BUTTON_LINK: '/skill',
      BUTTON_TEXT: 'スキル一覧はこちらから',
    },
  ],
} as const

export default ABOUT
