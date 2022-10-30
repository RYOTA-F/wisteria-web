import type { RefObject } from "react";

const smoothScroll = (
  ref: RefObject<HTMLDivElement>,
  position: ScrollLogicalPosition
) => {
  if (ref && ref.current)
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: position,
    });
};

export default smoothScroll;
