import SsrHtml from '../components/pages/layouts/ssrHtml'
import Home from "../components/pages/home";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";

// 'react-router-config'を使用するため、以下のフォーマットでroutesを作る。
const routes = [
  {
    // SSRの時はここのcomponentが使用される
    component: SsrHtml,
    // 以下は通常通り
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contact',
        component: Contact
      },
    ]
  }
];

export default routes;
