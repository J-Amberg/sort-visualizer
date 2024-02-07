import MinusSign from '../assets/minus-sign.png';
import PlusSign from '../assets/plus-button.png';

export default function IncreaserDecreaser({value, callback, increment, min, max}) {
    const increaseValue = () => {
        if(value < max){
            callback(num => num + increment);
        }
    }

    const decreaseValue = () => {
        if(value > min){
            callback(num => num - increment);
        }
    }

    return <div className='card flexCenter smallHeading' style={{ width: '222px' }}>
        <img src={MinusSign} alt='minus symbol' className='selectableIcon'
            onClick={decreaseValue} />
        <span style={{margin: '0 15px 0 15px'}}>{value}</span>
        <img src={PlusSign} alt='plus sign' className='selectableIcon'
            onClick={increaseValue} />
    </div>
}