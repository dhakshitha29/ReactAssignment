import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './components/root/Root';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Tech from './components/tech/Tech';
import Java from './components/techchild/Java'
import Node from './components/techchild/Node'
import Python from './components/techchild/Python'
import Reactjs from './components/techchild/Reactjs'
import Errorroute from './components/Errorroute';
import UserDashboard from './components/user-dashboard/UserDashboard';


function App() {
  let route=createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      errorElement:<Errorroute/>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'userdashboard/:username',
          element:<UserDashboard></UserDashboard>
        },
        {
          path:'technologies',
          element:<Tech></Tech>,
          children:[
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'nodejs',
              element:<Node/>
            },
            {
              path:'python',
              element:<Python/>
            },
            {
              path:'reactjs',
              element:<Reactjs/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
