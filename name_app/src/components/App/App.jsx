import React from 'react';
import Header from '../Header/Header';
import './App.css'
//Class BAsed Component
class App extends React.Component {

    render () {
        return (
            <div>
                <Header></Header>
            </div>
        );
    }
}

//Functional Based Component
/*function App() {
    return <h1>This is my Functional Component</h1>
}*/

export default App