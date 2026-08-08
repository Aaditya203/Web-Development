import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import './App.css';
import Home from './pages/Home';
import FetchOld from './pages/FetchOld';
import FetchRq from './pages/FetchRq';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Create a Layout component that contains NavBar, Footer, and Outlet
function RootLayout() {
  return (
    <>
      <NavBar />
      <div id="center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

// 2. Configure routes with RootLayout as the parent
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "old",
        element: <FetchOld />
      },
      {
        path: "rq",
        element: <FetchRq />
      }
    ]
  }
]);

function App() {
  const queryClient = new QueryClient();
  return(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  ) 
}

export default App;


