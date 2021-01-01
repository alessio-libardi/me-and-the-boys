import React from 'react'

export const Header = (props) => {
    return <header className="w-full px-4 py-8 text-center">
        {props.children}
    </header>
}