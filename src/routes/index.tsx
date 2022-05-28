import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Signin from '../pages/SignIn/Signin';
import Signup from '../pages/Signup/Signup';

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
