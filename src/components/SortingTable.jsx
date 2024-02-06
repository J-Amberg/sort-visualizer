export default function SortingTable({ elements }) {
    return <div className='card sortingTable'>
        {elements.map((element, idx) => element.active ? <div key={idx} className='dataBar' style={{ height: `${element.val * (500/elements.length)}px`, width: `calc(100%/${elements.length})` }} data-status='active'>
        </div> : element.solved ? <div key={idx} className='dataBar' style={{ height: `${element.val * (500/elements.length)}px`, width: `calc(100%/${elements.length})` }} data-status='solved'></div> 
        : <div key={idx} className='dataBar' style={{ height: `${element.val * (500/elements.length)}px`, width: `calc(100%/${elements.length})` }}></div> )}
    </div>
}