import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
        <NavBar/>
      <div className="flex-grow">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
