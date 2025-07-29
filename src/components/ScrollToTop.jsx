import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Automatically scrolls to top on route change.
 * Wrap this around your <Routes> component in App.jsx.
 */
const ScrollToTop = ({ children = null }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page smoothly (optional: use 'auto' for instant)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return children;
};

export default ScrollToTop;
