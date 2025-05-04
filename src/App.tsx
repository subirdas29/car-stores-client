import { useState, useEffect } from "react";
import CarLoader from "./components/CarLoader/CarLoader";
import Home from "./pages/Home/Home";


const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return loading ? <CarLoader /> : <Home />;
};

export default App;
