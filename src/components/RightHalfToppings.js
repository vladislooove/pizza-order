import React from 'react';

export const RightHalfToppings = (props) => {
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
