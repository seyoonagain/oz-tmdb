import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <section className='flex justify-center'>
      <Header />
      <section className='mt-16 pt-5 max-w-screen-xl '>
        <Outlet />
      </section>
    </section>
  );
};

export default App;
