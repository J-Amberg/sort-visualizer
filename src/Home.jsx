export default function Home() {

    const goToPage = (page) => {
        window.location.href = `/${page}`;
    }
    
    return <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
        <div className='sortCard' onClick={() => goToPage('bogo')}>
            <div className='heading'>BOGO Sort</div>
        </div>
        <div className='sortCard' onClick={() => goToPage('selection')}>
            <div className='heading'>Selection Sort</div>
        </div>
        <div className='sortCard' onClick={() => goToPage('bubble')}>
            <div className='heading'>Bubble Sort</div>
        </div>
        <div className='sortCard' onClick={() => goToPage('bucket')}>
            <div className='heading'>Bucket Sort</div>
        </div>
        <div className='sortCard' onClick={() => goToPage('quick')}>
            <div className='heading'>Quick Sort</div>
        </div>
    </div>
}