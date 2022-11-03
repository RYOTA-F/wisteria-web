import SECTION_ID from './section'

export const MENU_LIST = {
  MAIN: { TITLE: 'トップ', ID: `${SECTION_ID.MAIN}` },
  CAREER: { TITLE: '経歴', ID: `${SECTION_ID.CAREER}` },
  SKILL: { TITLE: 'スキル', ID: `${SECTION_ID.SKILL}` },
  BLOG: { TITLE: 'ブログ', ID: `${SECTION_ID.BLOG}` },
  CONTACT: { TITLE: 'お問合せ', ID: `${SECTION_ID.CONTACT}` },
} as const