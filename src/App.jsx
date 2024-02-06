import Home from './Home';
import './App.css';
import BogoSort from './sorting/BogoSort';
import QuickSort from './sorting/QuickSort';
import House from './assets/house.png';
import SelectionSort from './sorting/SelectionSort';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "bogo",
    element: <BogoSort />,
  },
  {
    path: "selection",
    element: <SelectionSort />
  },
  {
    path: 'quick',
    element: <QuickSort/>
  }
]);

function App() {

  const goToPage = (page) => {
    window.location.href = `/${page}`;
  }

    return <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <div className='container'>
        <div className='navbar'>
          <div className='homeBackground flexCenter' onClick={() => goToPage('')} >
            <img src={House} alt='home' id='home' className='translateCenter' />
          </div>
          <div className='title'>Sort Visualizer</div>
          </div>
        <RouterProvider router={router}/>
      </div>
    </div>
}

export default App;
