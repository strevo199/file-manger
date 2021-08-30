import React from 'react';
import {BrowserRouter} from "react-router-dom"
import NavBar from './component/screen/NavBar'
import Body from './component/screen/Body'
import FileContextProvider from './component/context/FileContext';
import MusicList from './component/screen/MusicList';
import Footer from './component/screen/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <FileContextProvider>
        <div className ="app">
          <NavBar/>
          <Body/>
          {/* <Switch>
            <Route path ="/categories/allmusic" component ={MusicList}/>
          </Switch> */}
          <Footer/>
        </div>
      </FileContextProvider>
    </BrowserRouter>
    
  )
} 

export default App
