import Home from '../home/Home';
import About from '../about/About'
import Contact from '../contact/Contact';
import Location from "../about/Location";
import AboutUs from "../about/AboutUs";

const routes = [
  {
    path     : '/home',
    component: Home
  },
  {
    path     : '/about',
    component: About,
    routes   : [
      {
        label    : 'About Us',
        path     : '/about/aboutus',
        component: AboutUs
      },
      {
        label    : 'Location',
        path     : '/about/location',
        component: Location
      }
    ]
  },
  {
    path     : '/contact',
    component: Contact
  },
];


export default routes;