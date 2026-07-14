import { useUserStore } from '../stores/userStore';
import { Navigate, Outlet } from 'react-router';

function ProtectRouters() {
  const token = useUserStore((state) => state.token);

  if (!token) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  } else {
    return <Outlet />;
  }

  return <div>ProtectRouters</div>;
}

export default ProtectRouters;
