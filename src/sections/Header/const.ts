import SECTION_ID from "../../const/section";

export const LOGO_URL = "/" as const;

export const LOGO_SRC = "/favicon.svg" as const;

export const MENU_LIST = [
  { MENU_TITLE: "トップ", ID: `${SECTION_ID.MAIN}` },
  { MENU_TITLE: "経歴", ID: `${SECTION_ID.CAREER}` },
  { MENU_TITLE: "スキル", ID: `${SECTION_ID.SKILL}` },
  { MENU_TITLE: "ブログ", ID: `${SECTION_ID.BLOG}` },
  { MENU_TITLE: "ソースコード", ID: `${SECTION_ID.SRC}` },
  { MENU_TITLE: "お問合せ", ID: "#contact" },
] as const;

export const MENU_LIST_IDS = MENU_LIST.map((v) => v.ID);
