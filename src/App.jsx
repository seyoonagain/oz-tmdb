import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NavBar from './components/NavBar';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Search from './pages/Search.jsx';

const App = () => {
  const { ref, inView } = useInView();
  const [headerBackground, setHeaderBackground] = useState(true);
  useEffect(() => {
    setHeaderBackground(inView);
  }, [inView]);
  return (
    <section className='relative flex flex-col sm:items-center h-screen overflow-auto'>
      <NavBar isHeaderBackgroundTransparent={headerBackground} />
      <div className='absolute top-0' ref={ref}></div>
      <section className='h-full w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:movieId' element={<Detail />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/search/:keyword' element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    </section>
  );
};

export default App;
