import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "./context"

const useScrollTop = () => {
  const location = useLocation();
  const { scrollToSection } = useGlobalContext()

  useEffect(() => {
    console.log('Pathname changed to:', location.pathname);
    window.scrollTo({top: 0, behavior: "smooth" })
  }, [location, scrollToSection])
  
  
  
}

export default useScrollTop;
