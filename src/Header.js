import React, {Component} from "react"

class Header extends Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <header> 
                    <img 
                        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                        alt="LOL" 
                    />
                <p> Meme Generator </p>
                </header>
            </div>
        )
    }
}
export default Header