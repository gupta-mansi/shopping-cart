import { useSelector } from 'react-redux';
import '../App.css';

function Count() {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <div className="App">
            <p> {JSON.stringify(state)} </p>
        </div>
    );
    }

export default Count;