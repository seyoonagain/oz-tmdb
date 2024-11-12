import { Outlet } from 'react-router-dom';
import MenuBar from './components/MenuBar.jsx';
import TitleBar from './components/TitleBar.jsx';
import ToolBar from './components/ToolBar.jsx';

const App = () => {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen w-screen'>
      <MenuBar />
      <section className='relative mt-10 mb-3 h-5/6 w-5/6 sm:w-4/5 sm:h-4/5 bg-zinc-100 border border-zinc-950 flex flex-col overflow-auto'>
        <TitleBar />
        <ToolBar />
        <section className='flex-grow bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 overflow-auto'>
          <Outlet />
        </section>
      </section>
    </section>
  );
};

export default App;
