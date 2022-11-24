const ITEMS = [
  {
    YEAR: 2010,
    YEAR_ITEMS: [
      {
        MONTH: '3月',
        TITLE: '神奈川県立横須賀工業高等学校 卒業',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '4月',
        TITLE: '株式会社IHI 入社',
        DESCRIPTIONS: [
          '超大型加工NC加工機械のプログラマー/オペレーター',
          '制御装置は主にFANUCを用いてプログラミング',
          'マクロを使った自動化や共通関数の作成等も実施',
        ],
      },
    ],
  },
  {
    YEAR: 2016,
    YEAR_ITEMS: [
      {
        MONTH: '2月',
        TITLE: '株式会社リクルートキャリア(現:リクルート) 入社',
        DESCRIPTIONS: [
          '新規開拓・法人営業として3年間活動',
          '年間200社、累計600社ほどを担当',
          '表彰経験も複数回あり',
        ],
      },
    ],
  },
  {
    YEAR: 2019,
    YEAR_ITEMS: [
      {
        MONTH: '6月',
        TITLE: 'プログラミングとの出会い',
        DESCRIPTIONS: [
          'Rubyを用いて「Webスクレイピング」を行い営業リスト作成を自動化',
          'Rubyでアプリケーションが作成できることを知り本格的に学習開始',
        ],
      },
      {
        MONTH: '8月',
        TITLE: '初のオリジナルアプリを作成',
        DESCRIPTIONS: [
          'Ruby on Railsを用いてオリジナルのSNSアプリを完成させる',
          '8ページ×40テーブル程のアプリケーションをリリース',
        ],
      },
    ],
  },
  {
    YEAR: 2020,
    YEAR_ITEMS: [
      {
        MONTH: '2月',
        TITLE: '株式会社コムニコ 入社 (エンジニア転向)',
        DESCRIPTIONS: [
          'WebエンジニアとしてSNSマーケティング企業に入社',
          'フロントエンド/バックエンド/インフラまで一貫して担当',
          'Twitter/Facebook APIを用いてSNSのマーケティングツールを開発',
        ],
      },
      {
        MONTH: '5月',
        TITLE: '契約管理プロダクトを新規開発',
        DESCRIPTIONS: [
          '新規プロダクトの詳細設計から実装/工程管理を一貫して担う',
          'フロントエンド/バックエンドの実装を行いながら、オフショアへのタスク作成も実施',
        ],
      },
      {
        MONTH: '8月',
        TITLE: 'SNSキャンペーンツールのLPを新規作成',
        DESCRIPTIONS: [
          'キャンペーン用のLPをCMSを用いて作成',
          'ハードコーディングをしつつビジネスサイドが可変できるよう一部コンポーネント化を実施',
        ],
      },
      {
        MONTH: '9月',
        TITLE: 'SNS運用レポートツールの新規開発',
        DESCRIPTIONS: [
          'Webスクレイピングを用いた自動レポートツールを開発',
          '最小構成で実行できるようLambdaを用いたサーバーレス環境を構築',
        ],
      },
      {
        MONTH: '11月',
        TITLE: 'SNS自動投稿機能の新規開発',
        DESCRIPTIONS: [],
      },
    ],
  },
  {
    YEAR: 2021,
    YEAR_ITEMS: [
      {
        MONTH: '1月',
        TITLE: 'SNS・口コミ分析機能の新規開発',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '5月',
        TITLE: 'SNS・統合分析機能の新規開発',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '8月',
        TITLE: '都内・プログラミングスクールに入社',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '9月',
        TITLE: 'アセスメント用プロダクトの新規開発',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '10月',
        TITLE: 'CMS機能付き自社メディアのアップデート',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '12月',
        TITLE: 'MAツールとプロダクトの連携用バッジの作成',
        DESCRIPTIONS: [],
      },
    ],
  },
  {
    YEAR: 2022,
    YEAR_ITEMS: [
      {
        MONTH: '1月',
        TITLE: 'ブロックチェーンを用いたスキル証明機能の新規開発',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '6月',
        TITLE: 'Swagger & Storybookの導入',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '7月',
        TITLE: '自社メディアのSEO対策と新規機能開発',
        DESCRIPTIONS: [],
      },
      {
        MONTH: '10月',
        TITLE: 'フリーランスエンジニアとして独立',
        DESCRIPTIONS: [],
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
