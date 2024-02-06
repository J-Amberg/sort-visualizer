import MinusSign from '../assets/minus-sign.png';
import PlusSign from '../assets/plus-button.png';

export default function IncreaserDecreaser({increaseCallback, decreaseCallback, value}) {
    return <div className='card flexCenter smallHeading' style={{ marginRight: '15px', padding: '0 15px 0 15px' }}>
        <img src={MinusSign} alt='minus symbol' className='selectableIcon'
            onClick={decreaseCallback} />
        <span style={{margin: '0 15px 0 15px'}}>{value}</span>
        <img src={PlusSign} alt='plus sign' className='selectableIcon'
            onClick={increaseCallback} />
    </div>
}