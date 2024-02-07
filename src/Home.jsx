export default function Home() {

    const goToPage = (page) => {
        window.location.href = `/${page}`;
    }
    
    return <div style={{display: 'flex', gap: '30px'}}>
        <div className='sortCard' style={{ width: '351px', height: '165px'}}
            onClick={() => goToPage('bogo')}>
            <div className='heading'>BOGO Sort</div>
            <div className='paragraph' style={{ marginTop: '24px' }}>
                The world's most efficient sorting algorithm.</div>
        </div>
        <div className='sortCard' style={{ width: '242px', height: '300px'}} onClick={() => goToPage('selection')}>
            <div className='heading'>Selection Sort</div>
            <div className='paragraph' style={{marginTop:'24px', width: '197px'}}>
                Finds the smallest element in the array and swaps it with the first element.
            </div>
        </div>
        <div className='sortCard' style={{width: '268px', paddingBottom: '33px'}} onClick={() => goToPage('bubble')}>
            <div className='heading'>Bubble Sort</div>
            <div className='paragraph' style={{width: '213px', marginTop: '28px'}}>
                A shitty algorithm
            </div>
        </div>
    </div>
}