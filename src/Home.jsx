import useGetWindowWidth from './custom_hooks/useGetWindowWidth';
import Navigation from './components/Navigation';
import BubbleSort from './sorting/BubbleSort';
import BogoSort from './sorting/BogoSort';
import SelectionSort from './sorting/SelectionSort';
import BucketSort from './sorting/BucketSort';
import QuickSort from './sorting/QuickSort';
import InsertionSort from './sorting/InsertionSort';
import RadixSort from './sorting/RadixSort';
import ShakerSort from './sorting/ShakerSort';
import OddEvenSort from './sorting/OddEvenSort';

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
        path: 'selection',
        element: <SelectionSort />
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
    }
]);

export default function Home() {
    const [windowWidth, setWindowWidth] = useGetWindowWidth();

    return <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ width: '290px' }}>
            <Navigation />
        </div>
        <div style={{ width: `${windowWidth - 320}px`, margin: '0 15px 0 15px' }}>
            <RouterProvider router={router} />
        </div>
    </div>
}