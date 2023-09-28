import React from "react";
import Header from "./Header"




class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: 0,
      };
    }
  
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1,
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          <h1>Timer: {this.state.seconds} seconds</h1>
        </div>
      );
    }
  }
  
    




export default App