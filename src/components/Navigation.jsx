export default function Navigation(){
    const goToPage = (page) => {
        window.location.href = `/${page}`;
    }

    return <div style={{height: '100vh', width: '290px', borderRight: '1px solid #565656', marginTop: '-18px'}}>
        <div className='categoryContainer'>
            <div className='smallHeading category'>
                Speedy
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('bucket')}>
                    <span className='underline'>Bucket</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('radix')}>
                <span className='underline'>Radix</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('quick')}>
                <span className='underline'>Quick</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
        </div>
        <div className='categoryContainer'>
            <div className='smallHeading category'>
                Quadratic
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('bubble')}>
                    <span className='underline'>Bubble</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('shaker')}>
                <span className='underline'>Shaker</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('selection')}>
                <span className='underline'>Selection</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('insertion')}>
                    <span className='underline'>Insertion</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('oddeven')}>
                <span className='underline'>Odd Even</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
        </div>
        <div className='categoryContainer'>
            <div className='smallHeading category'>
                Random
            </div>
            <div className='smallHeading textContainer' onClick={() => goToPage('bogo')}>
                <span className='underline'>BOGO</span><span className='hiddenUnderline'>&nbsp;Sort</span> 
            </div>
        </div>
    </div>
}