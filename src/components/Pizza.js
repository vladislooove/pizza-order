import React from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Clear from 'material-ui/svg-icons/content/clear';

import { LeftHalfToppings } from './LeftHalfToppings';
import { RightHalfToppings } from './RightHalfToppings';
import { WholeToppings } from './WholeToppings';
import { Pizzainfo } from './Pizzainfo';
import { ToppingsInfo } from './ToppingsInfo';

export const Pizza = (props) => {
    if(!props.data) {
        return null;
    } else {

        if(!props.data.Size) {
            props.data.Size = 'Medium';
        }
        return (
            <div className="pizza">
                <FloatingActionButton secondary={true}
                                      className="pizza__remove-btn"
                                      onClick={props.resetClick}>
                    <Clear />
                </FloatingActionButton>

                <div className="pizza__wrapper">
                    <div className="pizza__media">
                        <img alt="crust" src={`${process.env.PUBLIC_URL}/images/crust/${props.data.Crust.toLowerCase()}.png`} />
                        <LeftHalfToppings LeftHalf={props.data.Toppings.LeftHalf} />
                        <RightHalfToppings RightHalf={props.data.Toppings.RightHalf} />
                        <WholeToppings Whole={props.data.Toppings.Whole} />
                    </div>
                </div>
                <hr />
                <Pizzainfo data={props.data} />
                <ToppingsInfo Toppings={props.data.Toppings}/>
            </div>
        )
    }
}