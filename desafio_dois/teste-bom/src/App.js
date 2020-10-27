// import logo from './logo.svg';
import InputBlock from './components/entrada/inputBlock'
import OutputBlock from './components/saida/outputBlock'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet"></link>
      <h1></h1>
      <InputBlock/>
      <div id = "output-block"></div>>
    </div>
  );
}

export default App;
