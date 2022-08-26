import Buttons from 'views/components/Buttons.js';
import Calendar from 'views/Calendar.js';
import Charts from 'views/Charts.js';
import Dashboard from 'views/Dashboard.js';
import ExtendedForms from 'views/forms/ExtendedForms.js';
import ExtendedTables from 'views/tables/ExtendedTables.js';
import FullScreenMap from 'views/maps/FullScreenMap.js';
import GoogleMaps from 'views/maps/GoogleMaps.js';
import GridSystem from 'views/components/GridSystem.js';
import Icons from 'views/components/Icons.js';
import LockScreen from 'views/pages/LockScreen.js';
import Login from 'views/pages/Login.js';
import Notifications from 'views/components/Notifications.js';
import Panels from 'views/components/Panels.js';
import ReactTables from 'views/tables/ReactTables.js';
import Register from 'views/pages/Register.js';
import RegularForms from 'views/forms/RegularForms.js';
import RegularTables from 'views/tables/RegularTables.js';
import SweetAlert from 'views/components/SweetAlert.js';
import Timeline from 'views/pages/Timeline.js';
import Typography from 'views/components/Typography.js';
import UserProfile from 'views/pages/UserProfile.js';
import ValidationForms from 'views/forms/ValidationForms.js';
import VectorMap from 'views/maps/VectorMap.js';
import Widgets from 'views/Widgets.js';
import Wizard from 'views/forms/Wizard.js';
import Cases from 'Pages/Cases';
import Evidence from 'Pages/Evidence';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: Dashboard,
    layout: '/',
  },
  {
    collapse: true,
    name: 'Cases',
    icon: 'nc-icon nc-book-bookmark',
    state: 'casesCollapse',
    views: [
      {
        path: '/view-cases',
        name: 'View Cases',
        mini: 'VC',
        component: Cases,
        layout: '/',
      },
    ],
  },
  {
    collapse: true,
    name: 'Evidence',
    icon: 'nc-icon nc-book-bookmark',
    state: 'evidenceCollapse',
    views: [
      {
        path: '/view-evidence',
        name: 'View Evidence',
        mini: 'VC',
        component: Evidence,
        layout: '/',
      },
    ],
  },
  {
    path: '/calendar',
    name: 'Calendar',
    icon: 'nc-icon nc-calendar-60',
    component: Calendar,
    layout: '/',
  },
  {
    path: '/user-profile',
    name: 'Profile',
    mini: 'P',
    icon: 'nc-icon nc-single-02',
    component: UserProfile,
    layout: '/',
  },
];

export default routes;
