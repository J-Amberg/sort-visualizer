import useGetWindowWidth from './custom_hooks/useGetWindowWidth';
import Navigation from './components/Navigation';
import BubbleSort from './sorting/quadratic/BubbleSort';
import BogoSort from './sorting/random/BogoSort';
import BozoSort from './sorting/random/BozoSort';
import SelectionSort from './sorting/quadratic/SelectionSort';
import DoubleSelectionSort from './sorting/quadratic/DoubleSelectionSort';
import BucketSort from './sorting/speedy/BucketSort';
import QuickSort from './sorting/speedy/QuickSort';
import InsertionSort from './sorting/quadratic/InsertionSort';
import RadixSort from './sorting/speedy/RadixSort';
import ShakerSort from './sorting/quadratic/ShakerSort';
import OddEvenSort from './sorting/quadratic/OddEvenSort';
import PancakeSort from './sorting/quadratic/PancakeSort';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <></>,
    },
    {
        path: 'bogo',
        element: <BogoSort />,
    },
    {
        path: 'bozo',
        element: <BozoSort />
    },
    {
        path: 'selection',
        element: <SelectionSort />
    },
    {
        path: '2selection',
        element: <DoubleSelectionSort/>
    },
    {
        path: 'bubble',
        element: <BubbleSort />
    },
    {
        path: 'bucket',
        element: <BucketSort />
    },
    {
        path: 'quick',
        element: <QuickSort />
    },
    {
        path: 'insertion',
        element: <InsertionSort />
    },
    {
        path: 'radix',
        element: <RadixSort />
    },
    {
        path: 'shaker',
        element: <ShakerSort />
    },
    {
        path: 'oddeven',
        element: <OddEvenSort />
    },
    {
        path: 'pancake',
        element: <PancakeSort/>
    }
]);

export default function Home() {
    const [windowWidth] = useGetWindowWidth();

    return <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ width: '310px' }}>
            <Navigation />
        </div>
        <div style={{ width: `${windowWidth - 310}px`, margin: '0 15px 0 15px' }}>
            <RouterProvider router={router} />
        </div>
    </div>
}