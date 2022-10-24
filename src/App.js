import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharacterList from './pages/CharacterList';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<CharacterList />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
