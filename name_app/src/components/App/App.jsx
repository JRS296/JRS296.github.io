import React from 'react';
import Header from '../Header/Header';
import './App.css'
//Class BAsed Component
class App extends React.Component {

    //Understanding States
    state = {
        headerText: "This is a cool app!",
    };

    render () {
        return (
            <div>
                <Header/>
                <h3>{this.state.headerText}</h3>
                <button 
                    onClick={() => {
                        this.setstate({
                            headerText: "It worked!"
                        });
                }}>Click Me for State Change
                </button>
            </div>
        );
    }
}

//Functional Based Component
/*function App() {
    return <h1>This is my Functional Component</h1>
}*/

export default App