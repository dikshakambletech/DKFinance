// COMPONENTS
import { Link } from 'react-router-dom';
// IMAGES
import Icons from 'assets/icons';

const { ProfileImg, AddImg, NewsImg, AboutImg, BrowseImg } = Icons;

export const navMenuList = [
  {
    title: 'Profile',
    icon: ProfileImg,
    authentication: true,
    path: '/profile',
  },
  {
    title: 'Add',
    icon: AddImg,
    authentication: true,
    path: '/add',
  },
  {
    title: 'News',
    icon: NewsImg,
    authentication: false,
    path: '/news',
  },
  {
    title: 'Browse Stock',
    icon: BrowseImg,
    authentication: false,
    path: '/browse/stock',
  },
  // {
  //   title: 'About',
  //   icon: AboutImg,
  //   authentication: false,
  // },
];
