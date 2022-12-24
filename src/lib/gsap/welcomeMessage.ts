import { gsap } from 'gsap'

/**
 * ウェルカムメッセージのムーブインアクション
 */
export const moveInWelcomeMessage = () => {
  gsap.to('.text', {
    delay: 1,
    duration: 1,
    opacity: 1,
    y: '0px',
    yoyo: true,
    repeat: 1,
    stagger: {
      each: 0.5,
    },
  })

  gsap.to('.title span', {
    delay: 3.6,
    duration: 1.5,
    opacity: 1,
    stagger: {
      each: 0.2,
      from: 'start',
    },
  })

  gsap.to('.scroll', {
    delay: 7,
    duration: 2,
    opacity: 1,
  })
}
