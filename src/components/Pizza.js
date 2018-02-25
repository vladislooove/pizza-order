import React from 'react';

import Paper from 'material-ui/Paper';


const LeftHalfToppings = (props) => {
    if(props.LeftHalf) {
        if(!props.LeftHalf.Topping.length) {
            return <img alt="topping"
                        key={props.LeftHalf.Topping.Id}
                        src={`${process.env.PUBLIC_URL}/images/toppings/left-half/${props.LeftHalf.Topping.Name.toLowerCase()}/${props.LeftHalf.Topping.Attribute.toLowerCase()}.png`} />                

        } else {
            const result = props.LeftHalf.Topping.map((topping) => {
                return (
                    <img alt="topping" 
                        key={topping.Id}
                        src={`${process.env.PUBLIC_URL}/images/toppings/left-half/${topping.Name.toLowerCase()}/${topping.Attribute.toLowerCase()}.png`} />                
                )
            });
            return result;
        }
    } else {
        return null;
    }
}

const RightHalfToppings = (props) => {
    if(props.RightHalf) {
        if(!props.RightHalf.Topping.length) {
            return <img alt="topping"
                        key={props.RightHalf.Topping.Id}
                        src={`${process.env.PUBLIC_URL}/images/toppings/right-half/${props.RightHalf.Topping.Name.toLowerCase()}/${props.RightHalf.Topping.Attribute.toLowerCase()}.png`} />                

        } else {
            const result = props.RightHalf.Topping.map((topping) => {
                return (
                    <img alt="topping" 
                         key={topping.Id}
                         src={`${process.env.PUBLIC_URL}/images/toppings/right-half/${topping.Name.toLowerCase()}/${topping.Attribute.toLowerCase()}.png`} />                
                )
            });
            return result;
        }
    } else {
        return null;
    }
}

const WholeToppings = (props) => {
    if(props.Whole) {
        if(props.Whole.Topping) {
            if(!props.Whole.Topping.length) {
                return <img alt="topping"
                            key={props.Whole.Topping.Id}
                            src={`${process.env.PUBLIC_URL}/images/toppings/whole/${props.Whole.Topping.Name.toLowerCase()}/${props.Whole.Topping.Attribute.toLowerCase()}.png`} />                

            } else {
                const result = props.Whole.Topping.map((topping) => {
                    return (
                        <img alt="topping" 
                            key={topping.Id}
                            src={`${process.env.PUBLIC_URL}/images/toppings/whole/${topping.Name.toLowerCase()}/${topping.Attribute.toLowerCase()}.png`} />                
                    )
                });
                return result;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export const Pizza = (props) => {
    if(!props.data) {
        return null;
    } else {
        if(!props.data.Size) {
            props.data.Size = 'Medium';
            console.log(props)
        }
        return (
            <div className="pizza">
                <Paper className="pizza__wrapper">
                    <div className="pizza__media">
                        <img alt="crust" src={`${process.env.PUBLIC_URL}/images/crust/${props.data.Crust.toLowerCase()}.png`} />
                        <LeftHalfToppings LeftHalf={props.data.Toppings.LeftHalf} />
                        <RightHalfToppings RightHalf={props.data.Toppings.RightHalf} />
                        <WholeToppings Whole={props.data.Toppings.Whole} />
                    </div>
                </Paper>
            </div>
        )
    }
}