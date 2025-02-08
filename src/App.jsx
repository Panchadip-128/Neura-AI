import './App.css';
import Landing from './Landing';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
