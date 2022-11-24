const ITEMS = [
  {
    YEAR: 2010,
    YEAR_ITEMS: [
      {
        MONTH: '3月',
        TITLE: '神奈川県立横須賀工業高等学校 卒業',
        DESCRIPTION: '',
      },
    ],
  },
] as const

const CAREER = {
  TITLE_MAIN: '経歴',
  TITLE_SUB: 'Career',
  NAME: 'RYOTA',
  SUMMARY: [
    [
      '神奈川県在住のWeb系フリーランスエンジニア。',
      'Webアプリケーションの開発やHPの制作等を中心に行なっています。',
    ],
    [
      'フロントエンド開発/バックエンド開発からインフラの構築まで、幅広く手がけております。',
      'Shopifyを使ったネットショップ開設も行っております。',
    ],
  ],
  ITEMS,
  SCROLL_IN_CLASS_NAME: 'scrollInItem_',
} as const

export default CAREER
