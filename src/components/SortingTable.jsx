export default function SortingTable({ elements }) {
    const barStyle = {
        height: `calc(${(500 / elements.length)}px - 2px)`,
        width: `calc(100% / ${elements.length})`
    };

    return (
        <div className='card sortingTable'>
            {elements.map(({ active, solved, selected, val }, idx) => (
                <div key={idx} className='dataBar' style={{ ...barStyle, height: `${val * (526 / elements.length)}px` }} data-status={active ? 'active' : (solved ? 'solved' : (selected ? 'selected' : ''))}></div>
            ))}
        </div>
    );
}