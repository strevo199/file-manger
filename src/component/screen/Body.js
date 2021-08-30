import React from 'react'
import {Link,withRouter,Switch,Route} from 'react-router-dom'
import Categories from './Categories'
import Allfiles from './Allfiles'
import MusicList from './MusicList'
import VideosList from './VideosList'
import AppList from './AppList'
import TextsList from './TextsList'
import ImagesList from './ImagesList'
import BluetoothList from './BluetoothList'




const Body = (props) => {
    const currentLink = props.location.pathname

   const  chechUrl =()=>{
        switch (currentLink) {
            case '/home':
                return <Allfiles/>

            case '/categories/music':
                return <MusicList/>
            
            case '/categories/videos':
                return <VideosList/>
            
            case '/categories/apps':
                return <AppList/>
            
            case '/categories/bluetooth':
                return <BluetoothList/>
        
            case '/categories/texts':
                return <TextsList/>
            
            case '/categories/images':
                return <ImagesList/>
            
            default:
                return <Categories/>
        }
    }



    return (
        <div className ="appbody w-11/12 mx-auto flex">
            {
                    chechUrl()
            }

        </div>
    )
}

export default withRouter(Body)
