import React,{createContext,useReducer} from 'react'
import uuid from 'uuid'
import fileReducer from '../reducer/fileReducer'


export const FileContext = createContext()

    const initialState = {
        musics:[
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
                // {id:uuid(),title:'More-Than-Gold.mp3',size:'4.64MB'},
        ]
    }
const FileContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(fileReducer, initialState)    
    
    return (
        <FileContext.Provider value ={{
            musics:state.musics

        }}>
            {children}
        </FileContext.Provider>
    )
}

export default FileContextProvider
