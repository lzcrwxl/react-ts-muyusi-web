import React, { Component } from 'react';
import { Button } from 'antd';
import Header from './components/header/header'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>  
        <Button type="primary">Button</Button>
        <Footer></Footer>  
      </div>
    );
  }
}

export default App;
