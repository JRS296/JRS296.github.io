import React from 'react';
import Header from '../Header/Header';
import Searchbox from '../Searchbox/Searchbox';
import './App.css'
//Class BAsed Component
class App extends React.Component {

    //Understanding States
    //Props - Data for communication between parent and child
    constructor() {
        super();
        this.state = {
            headerText: "Name It!",
        };
    }
    
    handleInputChange = (inputText) => {
        console.log("Input Text: ", inputText);
    }

    render () {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <Searchbox onInputChange={this.handleInputChange}/>
            </div>
        );
    }
}

//Functional Based Component
/*function App() {
    return <h1>This is my Functional Component</h1>
}*/

export default App