import logo from './logo.svg';
import './App.css';
import Birthday from './Birthday';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterBirthday from './RouterBirthday';
import Generate from './Generate';

function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Birthday />} />
        <Route
          exact
          path='/birthday/:name?/:day?/:month?'
          element={<RouterBirthday />}
        />
        <Route exact path='/generate' element={<Generate />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
