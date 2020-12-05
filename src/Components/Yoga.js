import React, { Component } from 'react'
import ReactPlayer from "react-player"

export default class Yoga extends Component {
    render() {
        return (
            <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
                <h1>Daily Yoga</h1>
                <br></br>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=937x6M1-_p4" width='100%' height='600px'
                />

            </div>
        )
    }
}
