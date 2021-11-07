import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
   
    return (
        <div className={`container-fluid text-center  active py-3 bg-${props.mode}`}>
            <div className="container">
            <p> © 2021 Copyright:
            <Link className="footer" to="/">Text Analyzer</Link></p>
            </div>
        </div>
    )
}
