import React, { Component } from 'react'

export default class Meditation extends Component {
    state = {
        tips: false
    }

    toggleTips = () => {
        this.setState(prevState => ({tips: !prevState.tips}))
    }

    render() {
        return (
            <div class="card" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white'}}>
                <h1>Meditation</h1>
                <br></br> 
               <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVS1recTqXhf" title="guided meditation" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
               <br></br>
               {this.state.tips? 
                <button class="btn btn-primary btn-lg" onClick={this.toggleTips}> Close Helpful Tips </button>
               :
                <button class="btn btn-primary btn-lg" onClick={this.toggleTips}> Helpful Tips Before You Start </button>
               }
               <br></br>
               {this.state.tips?
               <ol class="card tips" style={{backgroundColor: 'rgba(0,0,0,0.2)', color:'white', fontSize: '25px', textAlign: 'left', margin: '0px'}}>
                   <h1 style={{ textAlign: "center"}}>😊Helpful Tips Before You Start😊</h1>
                   <br></br> 
                    <li>
                        Take a seat: Find a place to sit that feels calm and quiet to you.
                    </li>
                    <br></br>
                    <li>
                        Set a time limit: If you’re just beginning, it can help to choose a short time, such as five or 10 minutes.
                    </li>
                    <br></br>
                    <li>
                        Notice your body: You can sit in a chair with your feet on the floor, you can sit loosely cross-legged, you can kneel—all are fine. Just make sure you are stable and in a position you can stay in for a while.
                    </li>
                    <br></br>
                    <li>
                        Feel your breath: Follow the sensation of your breath as it goes in and as it goes out.
                    </li>
                    <br></br>
                    <li>
                        Notice when your mind has wandered: Inevitably, your attention will leave the breath and wander to other places. When you get around to noticing that your mind has wandered—in a few seconds, a minute, five minutes—simply return your attention to the breath.
                    </li>
                    <br></br>
                    <li>
                        Be kind to your wandering mind: Don’t judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back.
                    </li>
                    <br></br>
                    <li>
                     Close with kindness: When you’re ready, gently lift your gaze (if your eyes are closed, open them). Take a moment and notice any sounds in the environment. Notice how your body feels right now. Notice your thoughts and emotions.
                    </li>
                     
                    <br></br>
                    That’s it! That’s the practice. You go away, you come back, and you try to do it as kindly as possible.
               </ol>
               
                :
                null}
            </div>
        )
    }
}
