import { gsap } from 'gsap'

/**
 * ウェルカムメッセージのムーブインアクション
 */
export const moveInWelcomeMessage = () => {
  gsap.to('.background-color', {
    duration: 2, //アニメーションの時間の設定
    opacity: 1, //表示状態の指定
  })

  //.textを1.5秒かけ出現させ1.5秒かけ逆再生させ初期状態に戻す
  gsap.to('.text', {
    delay: 1, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
    duration: 1, //アニメーションの時間の設定
    opacity: 1, //表示状態の指定
    y: '0px', //cssでY軸-20pxから完了時0pxへの指定
    yoyo: true, //trueにすることで上記で指定したY軸の動きの逆再生
    repeat: 1, //yoyoのリピート回数
    //同じclass名のバリデーションの設定
    stagger: {
      each: 0.5, //ディレイ時間
    },
  })

  //初期遅延3.5秒かけてから.titleを表示
  gsap.to('.title span', {
    delay: 4.2, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
    duration: 1.5, //アニメーションの時間の設定
    opacity: 1, //表示状態の指定
    //同じclass名のバリデーションの設定
    stagger: {
      each: 0.2, //ディレイ時間
      from: 'start', //出現方法の指定
    },
  })
}
