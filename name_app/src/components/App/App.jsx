import React from 'react';
import Header from '../Header/Header';
import Searchbox from '../Searchbox/Searchbox';
import ResultsContainer from '../Results/Results';
import './App.css'

const name = require("@rstacruz/startup-name-generator");

//Class BAsed Component
class App extends React.Component {

    //Understanding States
    //Props - Data for communication between parent and child
    constructor() {
        super();
        this.state = {
            headerText: "Name It!",
            headerExpanded: true,
            suggestedNames: [],
        };
    }
    
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: inputText.length > 0 ? false : true,
            suggestedNames: inputText? name(inputText) : [],
        }); // CAn also use !(inputText.length > 0) or !input
    };

    render () {

        return (
            <div>
                <Header 
                    headTitle={this.state.headerText} 
                    headerExpanded={this.state.headerExpanded}
                />
                <Searchbox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}

//Functional Based Component
/*function App() {
    return <h1>This is my Functional Component</h1>
}*/

export default App