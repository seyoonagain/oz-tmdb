import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <section className='flex flex-col h-screen sm:items-center '>
      <NavBar />
      <section className='mt-16 h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:movieId' element={<Detail />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    </section>
  );
};

export default App;
