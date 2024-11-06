import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <section className='flex flex-col h-screen sm:items-center justify-center'>
      <Header />
      <section className='mt-16'>
        <Outlet />
      </section>
    </section>
  );
};

export default App;
