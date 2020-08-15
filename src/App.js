import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ganti Yuk !!! <code>src/App.js</code> diganti ya React !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//Kelemahan membuat component pakai function yaitu tidak bisa membuat state, jika dipaksakan membuat state harus menggunakan React Hook 

export default App;

/*
  componentDidMount() {  } artinya setelah terpasang mau diapakan (saat membuat Tag lalu ditempelkan dalam HTML)
  componentWillUnmount() {  } artinya ketika componentnya mau dilepaskan dari HTML (saat Pindah Halaman)
  setInterval artinya fungsi bawaan javascript yang behaviournya dia bisa mengeksekusi fungsi berdasarkan waktu berulang-ulang
*/
