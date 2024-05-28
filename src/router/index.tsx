import { Navigate } from 'react-router-dom'
// import Home from '../pages/home'
import Diary from '../pages/diary'
import Mine from '../pages/mine'
import Moment from '../pages/moment'
// import Treasure from '../pages/treasure'
import Layout from '../layout'
import Login from '../pages/login'
import NotFound from '../pages/notFound'

const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/diary',
    element: (
      <Layout>
        <Diary />
      </Layout>
    ),
  },
  {
    path: '/moment',
    element: (
      <Layout>
        <Moment />
      </Layout>
    ),
  },
  {
    path: '/mine',
    element: (
      <Layout>
        <Mine />
      </Layout>
    ),
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
]

export default routes
