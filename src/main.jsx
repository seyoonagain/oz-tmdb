import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import DarkModeContextProvider from './contexts/DarkModeContext.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Search from './pages/Search.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import MyList from './pages/MyList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/details/:movieId', element: <Detail /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/search/:keyword', element: <Search /> },
      {
        path: '/my-list',
        element: (
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

{
  /* <Routes>
<Route path='/' element={<Home />} />
<Route path='/details/:movieId' element={<Detail />} />
<Route path='/sign-up' element={<SignUp />} />
<Route path='/sign-in' element={<SignIn />} />
<Route path='/search/:keyword' element={<Search />} />
<Route path='/my-list' element={<MyList />} />
<Route path='*' element={<NotFound />} />
</Routes> */
}
createRoot(document.getElementById('root')).render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </DarkModeContextProvider>
);
