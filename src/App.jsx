import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

const App = () => {
  return (
    <section className='flex flex-col h-screen sm:items-center justify-center'>
      <Header />
      <section className='mt-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:movieId' element={<Detail />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </section>
    </section>
  );
};

export default App;
