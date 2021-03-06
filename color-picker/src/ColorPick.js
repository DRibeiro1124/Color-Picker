import React, { Component } from 'react';

class ColorPick extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            hue: 180,
            saturation: 50,
            lightness: 50
        }
    }

    hueUpdate = (event) => {
        const newHue = event.target.value;
        this.setState({hue: newHue})
    }

    saturationUpdate = (event) => {
        const newSaturation = event.target.value;
        this.setState({saturation: newSaturation})
    }

    lightnessUpdate = (event) => {
        const newLightness = event.target.value;
        this.setState({lightness: newLightness})
    }

    colorUpdated = (event) => {
        const newColor = event.target.value;
        console.log('Color is being updated', newColor)
    }

    render() {
        return (
            <div className="main-container">
                <header>
                    <h2>My color picker!</h2>
                </header>
                <section className="pixel-box">
                <div className="colorBox" style= {
                    {
                    // border: 'solid, black, 1px',    
                    height: '100px',
                    width: '100px',
                    backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`}}>
                </div>
                </section>
                <section className="sliders">
                    <input type= "range" min= "0" max= "360" onInput={this.colorUpdated} onChange={this.hueUpdate} value={this.state.Hue} /><span>Hue</span>
                    <input type= "range" min= "0" max= "100" onInput={this.colorUpdated} onChange={this.saturationUpdate} value={this.state.Saturation}/><span>Saturation</span>
                    <input type= "range" min= "0" max= "100" onInput={this.colorUpdated} onChange={this.lightnessUpdate} value={this.state.Lightness}/><span>Lightness</span>
                </section>
            </div>
        );
    }
}

export default ColorPick;
