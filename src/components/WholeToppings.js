import React from 'react';

export const WholeToppings = (props) => {
    if(props.Whole) {
        if(props.Whole.Topping) {
            if(!props.Whole.Topping.length) {
                return <img alt="topping"
                            className={props.Whole.Topping.Name.toLowerCase()}
                            key={props.Whole.Topping.Id}
                            src={`${process.env.PUBLIC_URL}/images/toppings/whole/${props.Whole.Topping.Name.toLowerCase()}/${props.Whole.Topping.Attribute.toLowerCase()}.png`} />                

            } else {
                const result = props.Whole.Topping.map((topping) => {
                    return (
                        <img alt="topping" 
                            key={topping.Id}
                            className={topping.Name.toLowerCase()}
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