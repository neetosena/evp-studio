import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Pathname changed to:', pathname);
    window.scrollTo({top: 0, behavior: "smooth" })
  }, [pathname])
  
  
  
}

export default useScrollTop;
