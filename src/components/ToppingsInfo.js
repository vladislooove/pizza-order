import React from 'react';

import { ToppingsInfoLeft } from './ToppingsInfoLeft';
import { ToppingsInfoRight } from './ToppingsInfoRight';
import { ToppingsInfoWhole } from './ToppingsInfoWhole';

export const ToppingsInfo = (props) => {
    return (
        <div>
            {props.Toppings.Whole ? <hr /> : null}
            <ToppingsInfoWhole Whole={props.Toppings.Whole} />
            {props.Toppings.LeftHalf ? <hr /> : null}
            <ToppingsInfoLeft LeftHalf={props.Toppings.LeftHalf} />
            {props.Toppings.RightHalf ? <hr /> : null}
            <ToppingsInfoRight RightHalf={props.Toppings.RightHalf} />
        </div>
    )
}