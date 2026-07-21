import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import Home from './pages/Home.jsx';
import PostDetail from './pages/PostDetail.jsx';
import Layout from './components/Layout/Layout.jsx';
import './App.css';

function App() {
  return (
    <RouterProvider router = {router} />
  );
};

export default App;
