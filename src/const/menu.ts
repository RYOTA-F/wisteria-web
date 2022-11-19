import SECTION from './section'
import PAGE from './page'

export const MENU_LIST = {
  MAIN: { TITLE: SECTION.MAIN.TITLE, ID: `/${SECTION.MAIN.ID}` },
  ABOUT: { TITLE: SECTION.ABOUT.TITLE, ID: `/${SECTION.ABOUT.ID}` },
  // SERVICE: { TITLE: SECTION.SERVICE.TITLE, ID: `/${SECTION.SERVICE.ID}` },
  CAREER: { TITLE: PAGE.CAREER.TITLE, ID: PAGE.CAREER.PATH },
  SKILL: { TITLE: PAGE.SKILL.TITLE, ID: PAGE.SKILL.PATH },
  BLOG: { TITLE: SECTION.BLOG.TITLE, ID: `/${SECTION.BLOG.ID}` },
  CONTACT: { TITLE: SECTION.CONTACT.TITLE, ID: `/${SECTION.CONTACT.ID}` },
} as const

export const MENU = Object.values(MENU_LIST)
