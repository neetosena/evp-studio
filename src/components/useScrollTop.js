import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Pathname changed to:', location.pathname);
    window.scrollTo({top: 0, behavior: "smooth" })
  }, [pathname])
  
  
  
}

export default useScrollTop;
