import { Outlet } from 'react-router';
import NavBar from '../compnents/NavBar';

function MainLayout() {
  return (
    <div>
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
