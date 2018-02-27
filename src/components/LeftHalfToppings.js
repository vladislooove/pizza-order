import React from 'react';

export const LeftHalfToppings = (props) => {
    if(props.LeftHalf) {
        if(!props.LeftHalf.Topping.length) {
            return <img alt="topping"
                        className={props.LeftHalf.Topping.Name.toLowerCase()}                                                            
                        key={props.LeftHalf.Topping.Id}
                        src={`${process.env.PUBLIC_URL}/images/toppings/left-half/${props.LeftHalf.Topping.Name.toLowerCase()}/${props.LeftHalf.Topping.Attribute.toLowerCase()}.png`} />                

        } else {
            const result = props.LeftHalf.Topping.map((topping) => {
                return (
                    <img alt="topping" 
                        key={topping.Id}
                        className={topping.Name.toLowerCase()}                                                
                        src={`${process.env.PUBLIC_URL}/images/toppings/left-half/${topping.Name.toLowerCase()}/${topping.Attribute.toLowerCase()}.png`} />                
                )
            });
            return result;
        }
    } else {
        return null;
    }
}
