const SCROOL_TOP_HEIGHT = 500;

const getIsScrollTop = (): boolean => {
  return (
    Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    ) >= SCROOL_TOP_HEIGHT
  );
};

export default getIsScrollTop;
