import './App.css';

import RegistrationPage from './components/RegistrationPage';
import CategoriesPage from './components/CategoriesPage';
import WeatherandNews from './components/WeatherandNews';
import BrowseCategories from './components/BrowseCategories';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const categories=['Action', 'Drama','Romance','Thriller','Western','Horror','Fantasy', 'Music','Fiction',];
  const colors=['#FF5209', '#D7A4FF','#148A08','#84C2FF','#902500','#7358FF','#FF4ADE','#E61E32','#6CD061',];
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<RegistrationPage />}/>
          <Route path='/categories' element={<CategoriesPage categories={categories} backgroundcolor={colors} />}/>
          <Route path='/weather' element={<WeatherandNews/>}/>
          <Route path='/browse' element={<BrowseCategories/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
