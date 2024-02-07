export default function TimeDisplay({ timeString }) {
    return <div className='card flexCenter smallHeading' style={{width: '200px'}}>
        <div style={{margin: '0 18px 0 18px'}}>{timeString}</div>
    </div>
}