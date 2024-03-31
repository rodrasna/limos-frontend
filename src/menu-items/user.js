// assets
import { HomeOutlined, CalendarOutlined, TeamOutlined, RocketOutlined, BookOutlined } from '@ant-design/icons';

// icons
const icons = {
    HomeOutlined, CalendarOutlined, TeamOutlined, RocketOutlined, BookOutlined
};

// ==============================|| MENU ITEMS - HOME ||============================== //

const user = {
  id: 'group-dashboard',
  title: 'User',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'agenda',
      title: 'Agenda',
      type: 'item',
      url: '/agenda',
      icon: icons.CalendarOutlined,
      breadcrumbs: false
    },
    {
      id: 'team',
      title: 'Team',
      type: 'item',
      url: '/team',
      icon: icons.RocketOutlined,
      breadcrumbs: false
    },
    {
      id: 'clients',
      title: 'Clients',
      type: 'item',
      url: '/clients',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    },
    {
      id: 'library',
      title: 'Library',
      type: 'item',
      url: '/library',
      icon: icons.BookOutlined,
      breadcrumbs: false
    }
  ]
};

export default user;
