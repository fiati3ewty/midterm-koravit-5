import { RouterProvider } from 'react-router';
import router from './router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
