import React from 'react';

import { ToppingsInfoLeft } from './ToppingsInfoLeft';
import { ToppingsInfoRight } from './ToppingsInfoRight';
import { ToppingsInfoWhole } from './ToppingsInfoWhole';

export const ToppingsInfo = (props) => {
    return (
        <div>
            <ToppingsInfoWhole Whole={props.Toppings.Whole} />
            <ToppingsInfoLeft LeftHalf={props.Toppings.LeftHalf} />
            <ToppingsInfoRight RightHalf={props.Toppings.RightHalf} />
        </div>
    )
}