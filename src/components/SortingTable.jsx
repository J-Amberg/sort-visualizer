import { useState, useEffect } from 'react';
import useGetWindowWidth from '../custom_hooks/useGetWindowWidth';

export default function SortingTable({ elements }) {
    const [windowWidth, setWindowWidth] = useGetWindowWidth();
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='sortingTable' style={{width: `${windowWidth - 320}px`}}>
            {elements.map(({ active, solved, selected, val }, idx) => (
                <div
                    key={idx}
                    className='dataBar'
                    style={{
                        width: `calc(100% / ${elements.length})`,
                        height: `${val * ((windowHeight - 110) / elements.length)}px`,
                    }}
                    data-status={active ? 'active' : solved ? 'solved' : selected ? 'selected' : ''}
                ></div>
            ))}
        </div>
    );
}
