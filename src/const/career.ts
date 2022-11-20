const ITEMS = [
  { name: 'test1' },
  { name: 'test2' },
  { name: 'test3' },
  { name: 'test4' },
  { name: 'test5' },
  { name: 'test6' },
] as const

const CAREER = {
  TITLE_MAIN: '経歴',
  TITLE_SUB: 'Career',
  SUMMARY: [`fdsafdsafdsa`, `fdsafdsafdsa`, `fdsafdsafdsa`],
  ITEMS,
  SCROLL_IN_CLASS_NAME: 'scrollInItem_',
} as const

export default CAREER
