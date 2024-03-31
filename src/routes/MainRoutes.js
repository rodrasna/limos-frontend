import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const Home = Loadable(lazy(() => import('pages/home')));
const Agenda = Loadable(lazy(() => import('pages/agenda')));
const Team = Loadable(lazy(() => import('pages/team')));
const Clients = Loadable(lazy(() => import('pages/clients')));
const Library = Loadable(lazy(() => import('pages/library')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'agenda',
      element: <Agenda />
    },
    {
      path: 'team',
      element: <Team />
    },
    {
      path: 'clients',
      element: <Clients />
      /*children: [
        {
          path: 'default',
          element: <Clients />
        }
      ]*/
    },
    {
      path: 'library',
      element: <Library />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
