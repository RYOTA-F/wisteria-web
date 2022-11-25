const ITEMS = [
  {
    YEAR: 2010,
    YEAR_ITEMS: [
      {
        MONTH: '3月',
        TITLE: '神奈川県立横須賀工業高等学校 卒業',
        DESCRIPTIONS: [],
        ICONS: [],
      },
      {
        MONTH: '4月',
        TITLE: '株式会社IHI 入社',
        DESCRIPTIONS: [
          '超大型加工NC加工機械のプログラマー/オペレーター',
          '制御装置は主にFANUCを用いてプログラミング',
          'マクロを使った自動化や共通関数の作成等も実施',
        ],
        ICONS: [],
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
        ICONS: [],
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
        ICONS: ['ruby'],
      },
      {
        MONTH: '8月',
        TITLE: '初のオリジナルアプリを作成',
        DESCRIPTIONS: [
          'Ruby on Railsを用いてオリジナルのSNSアプリを完成させる',
          '8ページ×40テーブル程のアプリケーションをリリース',
        ],
        ICONS: ['ruby', 'rails', 'javascript', 'ec2'],
      },
    ],
  },
  {
    YEAR: 2020,
    YEAR_ITEMS: [
      {
        MONTH: '2月',
        TITLE: '都内SNSマーケティング企業 入社 (Webエンジニア転向)',
        DESCRIPTIONS: [
          'WebエンジニアとしてSNSマーケティング企業に入社',
          'フロントエンド/バックエンド/インフラまで一貫して担当',
          'Twitter/Facebook APIを用いてSNSのマーケティングツールを開発',
        ],
        ICONS: ['typescript', 'vue', 'nodejs', 'tsnode', 'express', 'aws'],
      },
      {
        MONTH: '5月',
        TITLE: '契約管理プロダクトを新規開発',
        DESCRIPTIONS: [
          '新規プロダクトの詳細設計から実装/工程管理を一貫して担う',
          'フロントエンド/バックエンドの実装を行いながら、オフショアへのタスク作成も実施',
        ],
        ICONS: ['typescript', 'vue', 'nodejs', 'tsnode', 'express', 'aws'],
      },
      {
        MONTH: '8月',
        TITLE: 'SNSキャンペーンツールのLPを新規作成',
        DESCRIPTIONS: [
          'キャンペーン用のLPをCMSを用いて作成',
          'ハードコーディングをしつつビジネスサイドが可変できるよう一部コンポーネント化を実施',
        ],
        ICONS: ['hubspot', 'jquery'],
      },
      {
        MONTH: '9月',
        TITLE: 'SNS運用レポートツールの新規開発',
        DESCRIPTIONS: [
          'Webスクレイピングを用いた自動レポートツールを開発',
          '最小構成で実行できるようLambdaを用いたサーバーレス環境を構築',
        ],
        ICONS: [
          'typescript',
          'nodejs',
          'tsnode',
          'lambda',
          'serverless',
          'chromium',
          'twitter',
        ],
      },
      {
        MONTH: '11月',
        TITLE: 'SNS自動投稿機能の新規開発',
        DESCRIPTIONS: [
          'Instagram APIを用いた自動投稿機能を新規開発',
          'React Nativeでスマホアプリのモックを作成',
        ],
        ICONS: [
          'typescript',
          'vue',
          'nodejs',
          'tsnode',
          'express',
          'aws',
          'instagram',
        ],
      },
    ],
  },
  {
    YEAR: 2021,
    YEAR_ITEMS: [
      {
        MONTH: '1月',
        TITLE: 'SNS・口コミ分析機能の新規開発',
        DESCRIPTIONS: [
          '事前に設定したワードを元にSNSから投稿を自動取得して傾向分析を行う機能を新規開発',
          '公式APIの連携や取得Batch実装まで一貫して担当',
        ],
        ICONS: [
          'typescript',
          'vue',
          'nodejs',
          'tsnode',
          'express',
          'aws',
          'elasticsearch',
          'twitter',
          'instagram',
        ],
      },
      {
        MONTH: '5月',
        TITLE: 'SNS・統合分析機能の新規開発',
        DESCRIPTIONS: [
          '各SNSで独立していた分析機能を統合して分析できる機能を新規開発',
          'パフォーマンスの観点からデータを事前計算しておくBatchの設計/実装まで一貫して担当',
        ],
        ICONS: ['typescript', 'vue', 'nodejs', 'tsnode', 'express', 'aws'],
      },
      {
        MONTH: '8月',
        TITLE: '都内プログラミングスクール 入社',
        DESCRIPTIONS: [
          'オンライン特化型のプログラミングスクールにプロダクト開発エンジニアとして入社',
          '新規プロダクト開発/新規機能開発を一人称で担当',
        ],
        ICONS: [
          'typescript',
          'react',
          'nextjs',
          'ruby',
          'rails',
          'docker',
          'aws',
        ],
      },
      {
        MONTH: '9月',
        TITLE: 'アセスメント用プロダクトの新規開発',
        DESCRIPTIONS: [
          'BtoB向けのアセスメントプロダクトを新規開発',
          '仕様策定からリリースまでをほぼ一人で担当し、1ヶ月半ほどでリリースを実現',
        ],
        ICONS: [
          'typescript',
          'react',
          'nextjs',
          'ruby',
          'rails',
          'docker',
          'aws',
        ],
      },
      {
        MONTH: '10月',
        TITLE: 'CMS機能付き自社メディアのアップデート',
        DESCRIPTIONS: [
          'Rails製のCMS機能付きメディアのライブラリをアップデート',
          '破壊的変更で動かなくなるライブラリが多かったため差し替え対応を行う',
          'ReactのClass ComponentをFunctional Componentにリファクタリング',
        ],
        ICONS: ['typescript', 'react', 'ruby', 'rails', 'aws'],
      },
      {
        MONTH: '12月',
        TITLE: 'MAツールとプロダクトの連携用バッジの作成',
        DESCRIPTIONS: [
          'プロダクトと外部のMAツールを連携するためのデータ出力Batchを開発',
          'パフォーマンスの高いGolangを導入し高速な処理を実現',
          '社内初となるサーバーレスを導入し低コストでの運用を実現',
        ],
        ICONS: ['golang', 'rds', 'eventbridge', 'lambda', 'serverless'],
      },
    ],
  },
  {
    YEAR: 2022,
    YEAR_ITEMS: [
      {
        MONTH: '1月',
        TITLE: 'ブロックチェーンを用いたスキル証明機能の新規開発',
        DESCRIPTIONS: [
          'カリキュラム修了者に対して発行する「Openbadge」の発行機能を新規開発',
          '「Blockchain」への登録/検証が可能な「Blockcerts」を導入',
        ],
        ICONS: [
          'typescript',
          'react',
          'python',
          'flask',
          'ruby',
          'rails',
          'lambda',
          'serverless',
        ],
      },
      {
        MONTH: '6月',
        TITLE: 'Swagger/Storybookの導入しAPI/Componentをカタログ化',
        DESCRIPTIONS: [
          '社内の開発用ドキュメントが存在しなかったためSwaggerとStorybookを導入',
          'APIとコンポーネントをカタログ化することにより円滑なデザイナー連携を実現',
        ],
        ICONS: ['swagger', 'storybook'],
      },
      {
        MONTH: '7月',
        TITLE: '自社メディアのSEO対策と新規機能開発',
        DESCRIPTIONS: [
          'マーケターと連携し自社メディアのSEO対策を実施',
          'パフォーマンス改善や構造変更等を実施',
        ],
        ICONS: ['typescript', 'react', 'ruby', 'rails', 'googleAnalytics'],
      },
      {
        MONTH: '10月',
        TITLE: 'フリーランスエンジニアとして独立',
        DESCRIPTIONS: [
          'フロントエンドエンジニアとして独立',
          '現在は某企業でデスクトップアプリを開発中',
        ],
        ICONS: ['typescript', 'react', 'electron'],
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
      'Webアプリケーション開発やHP制作等を中心に行なっています。',
    ],
    [
      'アプリケーション開発領域ではフロントエンド/バックエンド/インフラ構築まで幅広く手がけております。',
      '制作領域ではWordPressを使ったLP作成/Shopifyを使ったネットショップ開設も行っております。',
    ],
  ],
  ITEMS,
  SCROLL_IN_CLASS_NAME: 'scrollInItem_',
} as const

export default CAREER
