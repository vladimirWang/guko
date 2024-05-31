import { Navigate } from 'react-router-dom'
// import Home from '../pages/home'
import Diary from '../pages/diary'
import Mine from '../pages/mine'
import Moment from '../pages/moment'
// import Treasure from '../pages/treasure'
import Layout from '../layout'
import Login from '../pages/login'
import NotFound from '../pages/notFound'
import Private from './private'

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
    path: '/',
    element: (
      <Private>
        <Layout />
      </Private>
    ),
    children: [
      {
        path: '/diary',
        element: <Diary />,
      },
      {
        path: '/moment',
        element: <Moment />,
      },
      {
        path: '/mine',
        element: <Mine />,
      },
    ],
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
