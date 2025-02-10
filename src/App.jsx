import './App.css';
import Landing from './Landing';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen'; // ✅ Correct path



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced loading time to 1000 milliseconds (1 second)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoading ? <LoadingScreen /> : <Landing />} />
      </Routes>
    </Router>
  );
}

export default App;