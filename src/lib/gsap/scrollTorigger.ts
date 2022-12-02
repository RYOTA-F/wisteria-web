import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const scrollIntoItem = (className: string) => {
  gsap.to(`.${className}`, {
    x: '0px',
    duration: 1,

    scrollTrigger: {
      trigger: `.${className}`,
      start: 'center bottom',
    },
  })
}
