import './App.css';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Mainpage/>

    <Routes>
      <Route path="/" element={<Food />} />
      <Route path="/:mealid" element={<Recipe />} />
    </Routes>
  );
}

export default App;
