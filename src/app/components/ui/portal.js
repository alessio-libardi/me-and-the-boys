import React, { createPortal } from "react-dom"

export const Portal = (props) => {
    const children = props.children
    const container = document.getElementById('portal')

    return createPortal(children, container)
}