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

    render() {
        return (
            <div>
                <section>
                    <input type= "range" min= "0" max= "0"></input>
                    <input type= "range" min= "0" max= "0"></input>
                    <input type= "range" min= "0" max= "0"></input>
                </section>

            </div>
        );
    }
}

export default ColorPick;
