import { CLASS_NAME } from '../../const/slideInNavigation'

/**
 * Activeクラスを付け外しする関数
 */
export const changeActiveClass = (isOpen: boolean) => {
  const element = document.getElementById(CLASS_NAME.TARGET)

  if (isOpen) return element?.classList.remove(CLASS_NAME.ACTIVE)
  if (!isOpen) return element?.classList.add(CLASS_NAME.ACTIVE)
}
