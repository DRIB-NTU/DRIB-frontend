import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const values: ReadonlyArray<{
  title:string;
  url:string
}>=[]

export default function App() {
  return (
    <div>
      <Header title="DRIB" sections={values}/>
      <RouterProvider router={router} />
      <Footer description = "0800-000-000" title="Contacts"/>
    </div>
  );
}