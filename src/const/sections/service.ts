const SERVICE = {
  TITLE_MAIN: '提供サービス',
  TITLE_SUB: 'Service',
  DESCRIPTION: `Webアプリケーション開発はもちろん、
HP制作やネットショップ開設も承っております。`,
  CONTENTS: [
    {
      TITLE: 'フロントエンド開発',
      DESCRIPTION: ``,
      ICONS: ['react', 'vue', 'svelte'],
    },
    {
      TITLE: 'バックエンドエンド開発',
      DESCRIPTION: ``,
      ICONS: ['tsnode', 'ruby', 'golang'],
    },
    {
      TITLE: 'HP制作',
      DESCRIPTION: ``,
      ICONS: ['wordpress'],
    },
    {
      TITLE: 'ネットショップ開設',
      DESCRIPTION: ``,
      ICONS: ['shopify'],
    },
  ],
} as const

export default SERVICE
