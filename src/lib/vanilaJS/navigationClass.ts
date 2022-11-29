import type { HANBURGER_MENU } from '../../const/hamburgerMenu'
import type { SLIDE_IN_NAVIGATION } from '../../const/slideInNavigation'

type IChangeActiveClassTarget =
  | typeof HANBURGER_MENU
  | typeof SLIDE_IN_NAVIGATION

/**
 * Activeクラスを付け外しする関数
 */
export const changeActiveClass = (
  isOpen: boolean,
  target: IChangeActiveClassTarget
) => {
  const element = document.getElementById(target.ID)

  if (isOpen) return element?.classList.remove(target.CLASS)
  if (!isOpen) return element?.classList.add(target.CLASS)
}
