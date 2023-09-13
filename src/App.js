import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Nobleprize from './Components/Nobleprize';
import LoadingBar from 'react-top-loading-bar';
import Home from './Components/Home';
import LaureateDetail from './Components/LaureateDetail';
import Manually from './Components/Manually';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';


function App() {
  const [progress, setProgress] = useState(0);
  const [mode, setmode] = useState('light');
  const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#181B1F'
    }
    else{(setmode('light')
    )
    document.body.style.backgroundColor = '#F5F5F5'}
  }
  

  return (
    <div className='wrapper'>
        <Router>
        <NavBar togglemode={togglemode} mode={mode}/>
        <div className='content'>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route path='/'><Home mode={mode} setProgress={setProgress}/></Route>
          <Route exact path="/economics"><Nobleprize mode={mode} setProgress={setProgress} subjectname={'Economics'}  key={'economics'} subject={'eco'}/></Route>
          <Route exact path="/chemistry"><Nobleprize mode={mode} setProgress={setProgress} subjectname={'Chemistry'} key={'chemistry'} subject={'che'}/></Route>
          <Route exact path="/physics"><Nobleprize mode={mode} setProgress={setProgress} subjectname={'Physics'} key={'physic'} subject={'phy'}/></Route>
          <Route exact path="/literature"><Nobleprize mode={mode} setProgress={setProgress} subjectname={'Literature'} key={'literature'} subject={'lit'}/></Route>
          <Route path="/laureate/:link"><LaureateDetail mode={mode} setProgress={setProgress}/></Route>
          <Route path="/search manually" ><Manually mode={mode} setProgress={setProgress}/></Route>
        </Switch>
        </div>
        <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
