import React,{useContext} from 'react'
import { FileContext } from '../context/FileContext'
import NoFIleHere from './NoFIleHere'

const MusicList = () => {
    const {musics} = useContext(FileContext)
    console.log(musics[0]);
    return (
        <div className="musicList flex flex-1">
            <ul className="flex-1 overflow-y-scroll flex flex-col">
                {
                    musics.length ? (
                            musics.map((song) =>{
                                return (
                                    <li className="flex  gap-x-4  py-1 border-b-2 border-gray-300" key = {song.id}>
                                        <i className="fa fa-headphones-alt flex bg-red-500 text-xl w-10 rounded-lg text-white justify-center items-center" aria-hidden="true"></i>
                                        <div className ="flex-1">
                                            <h1>{song.title}</h1>
                                            <h1 className="text-xs">size:{song.size}</h1>
                                        </div>
                                    </li>
                                )
                            })
                    ) :(
                        <NoFIleHere/>
                    )
                }
            </ul>
        </div>
    )
}

export default MusicList
