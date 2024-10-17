import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Header } from './components';
import { Galery, Favorites, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div className="w-full h-screen lg:max-w-7xl md:max-w-3xl relative max-h-screen mx:auto p-2">
        <Header />

        <div className='w-full h-full min-h-[85vh] max-h-[85vh] md:max-h-[90vh] overflow-y-auto no-scrollbar'>
          <Routes>
            <Route path="/" exact element={<Galery />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
