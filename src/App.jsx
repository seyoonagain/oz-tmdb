import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MenuBar from './components/MenuBar.jsx';
import Search from './pages/Search.jsx';
import TitleBar from './components/TitleBar.jsx';
import ToolBar from './components/ToolBar.jsx';
import MyList from './pages/MyList.jsx';

const App = () => {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen w-screen'>
      <MenuBar />
      <section className='relative mt-10 mb-3 h-5/6 w-5/6 sm:w-4/5 sm:h-4/5 bg-zinc-100 border border-zinc-950 flex flex-col overflow-auto'>
        <TitleBar />
        <ToolBar />
        <section className='flex-grow bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 overflow-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:movieId' element={<Detail />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/search/:keyword' element={<Search />} />
            <Route path='/my-list' element={<MyList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
      </section>
    </section>
  );
};

export default App;
