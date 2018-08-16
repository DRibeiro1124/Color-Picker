import React, { Component } from 'react';

class ColorPick extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            Hue: 50,
            Saturation: 50,
            Lightness: 50
        }
    }

    hueUpdate = (event) => {
        const newHue = event.target.value;
        this.setState({Hue: newHue})
    }

    saturationUpdate = (event) => {
        const newSaturation = event.target.value;
        this.setState({Saturation: newSaturation})
    }

    lightnessUpdate = (event) => {
        const newLightness = event.target.value;
        this.setState({Lightness: newLightness})
    }

    colorUpdated = (event) => {
        const newColor = event.target.value;
        console.log('Color is being updated')
    }

    render() {
        return (
            <div className="main-container">
                <header>
                    <h2>My color picker!</h2>
                </header>
                <section className="sliders">
                    <input type= "range" min= "0" max= "360" onInput={this.colorUpdated} onChange={this.hueUpdate} value={this.state.Hue}/>
                    <input type= "range" min= "0" max= "100" onInput={this.colorUpdated} onChange={this.saturationUpdate} value={this.state.Saturation}/>
                    <input type= "range" min= "0" max= "100" onInput={this.colorUpdated} onChange={this.lightnessUpdate} value={this.state.Lightness}/>
                </section>
            </div>
        );
    }
}

export default ColorPick;
