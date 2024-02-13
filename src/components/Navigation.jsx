import '../styles/components/Navigation.css';
import { useState } from 'react';

const pathName = window.location.pathname.split('/')[1];
const goToPage = (page) => {
    window.location.href = `/${page}`;
}

export default function Navigation() {
    return <div className='navigation' style={{}}>
        <CategoryPages title={'speedy'} pages={['bucket', 'radix', 'quick']}/>
        <CategoryPages title={'Quadratic'} pages={['bubble', 'shaker', 'selection', '2Selection', 'insertion', 'odd even', 'pancake']}/>
        <CategoryPages title={'Random'} pages={['BOGO', 'BOZO']}/>
    </div>
}

function CategoryPages({ title, pages }) {
    return <div className='categoryContainer'>
        <div className='smallHeading category'>
            {title}
        </div>
        {pages.map((page, idx) => <div key={idx} className='smallHeading textContainer' 
        onClick={() => goToPage(page.toLowerCase())} data-status={pathName === page.toLowerCase() && 'selected'}>
            <span className='underline'>{page}</span><span className='hiddenUnderline'>&nbsp;Sort</span>
        </div>)}
    </div>
}