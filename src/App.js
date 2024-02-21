import Navbars from './Navbars';
import Home from './Home.js';


function App() {
    return (
        <div className="App">
            <Navbars />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;