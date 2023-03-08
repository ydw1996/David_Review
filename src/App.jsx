import { useState, useRef, useCallback } from "react";
import "./App.css";
import MainBoard from "./pages/MainBoard";

const App = () => {
  const [selectedClassName, setSelectedClassName] = useState('');
  const handleChangeSkin = (className) => {
    setSelectedClassName(className);
  };

  return (
    <div className={`todoApp ${selectedClassName}`}>
      <MainBoard 
        todoValue={(todoValue)}
        handleChangeSkin={handleChangeSkin}>
      </MainBoard>
    </div>
  );
};

export default App;
