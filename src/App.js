import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function CreateButton(props) {
  return <button onClick={props.onClick}>{props.name}</button>
}
function FormatedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div>
      <UserGreeting />
    </div>;
  }
  return <GuestGreeting />;
}

class Krug extends Component {
  render() {
    return (
      <div>Kruglov</div>
    );
  }
}

class Img extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="" />
      </div>
    );
  }
}
class Button extends Component {
  isShowImg(i){
    return <Img src={i} />
      }
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>      
       {this.state.isToggleOn ? this.isShowImg("https://www.istockphoto.com/resources/images/PhotoFTLP/img_63351521.jpg") : this.isShowImg("https://www.istockphoto.com/resources/images/PhotoFTLP/img_82250973.jpg")}
        <CreateButton name={this.state.isToggleOn ? "On" : "Off"} onClick={this.handleClick} />
        <Greeting isLoggedIn={this.state.isToggleOn} />
        </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <CreateButton name="Ok" />
        <FormatedDate date={this.state.date} />
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Krug />
        <Button />
      </div>

    );
  }

}

export default App;
