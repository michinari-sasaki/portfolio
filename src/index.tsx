import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

class App extends React.Component{
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'hoge',
      color: 'yellow'
    }
  }
  render() {
    type BirthYear = boolean | string;
    const hogehoge: BirthYear = false;
    console.log(hogehoge);
    return (
      <div>
        あほかー
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
