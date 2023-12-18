import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { MonitorPage } from './pages/Monitor.page';
import { BlockListPage } from './pages/BlockList.page';
import { NavBar } from "./components/NavBar/NavBar"


const Layout = ({ activePage, children }:any) => {
  return (
    <div style={{display: "flex",height: "100vh"}}>
      <div style={{flex: "0 0 200px"}}>
        <NavBar active_page={activePage} />
      </div>
      <div style={{flex: 1,overflowY: "auto"}}>
        {children}
      </div>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout activePage="Home">
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/monitor',
    element: (
      <Layout activePage="Monitor">
        <MonitorPage />
      </Layout>
    ),
  },
  {
    path: '/blocklist',
    element: (
      <Layout activePage="Block List">
        <BlockListPage />
      </Layout>
    ),
  },
]);

export function Router() {
  return <>
    <RouterProvider router={router} />
  </>;
}
