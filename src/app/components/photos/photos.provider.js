import React, { createContext, useContext } from 'react'

const defaultValue = {
    photos: [],
    selected: null
}

const Context = createContext(defaultValue)

export const PhotosProvider = (props) => {
    return (
        <Context.Provider value={defaultValue}>
            {props.children}
        </Context.Provider>
    )
}

export const usePhotos = () => {
    return useContext(Context)
}
