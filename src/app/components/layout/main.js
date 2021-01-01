import React from 'react'

export const Main = (props) => {
    return <main className="container mx-auto px-4 py-12">
        {props.children}
    </main>
}