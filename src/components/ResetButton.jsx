import Reset from '../assets/reset.png';

export default function ResetButton({setReset}) {
    return <div className='card flexCenter smallHeading selectableCard' style={{width: '78px', marginRight: '15px', cursor: 'pointer'}} onClick={() => setReset(r => !r)}>
        <img src={Reset} alt='reset' className='selectableIcon'  />
    </div>
}