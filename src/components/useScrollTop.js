import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "./context"

const useScrollTop = () => {
  const location = useLocation();
  const { scrollToSection } = useGlobalContext()

  useEffect(() => {
    console.log('Pathname changed to:', location.pathname);
    scrollToSection(location);
  }, [location]);
  
  
  
}

export default useScrollTop;
