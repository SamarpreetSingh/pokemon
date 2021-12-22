import './Pagination.css';

function Pagination(props) {
    return (
        <div>
            { props.changePrev && <button onClick={props.changePrev} className="btn prev-btn">Previous</button> }
            { props.changeNext && <button onClick={props.changeNext} className="btn next-btn">Next</button> }
        </div>
    )
}

export default Pagination;