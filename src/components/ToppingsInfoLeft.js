import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export const ToppingsInfoLeft = (props) => {
    if(props.LeftHalf) {
        if(!props.LeftHalf.Topping.length) {
            return (
                <List>
                    <Subheader>Left half</Subheader>
                    <ListItem primaryText={props.LeftHalf.Topping.Name.toLowerCase()}>
                    </ListItem>
                </List>
            );
        } else {
            const result = props.LeftHalf.Topping.map((topping) => {
                return (
                    <ListItem primaryText={topping.Name.toLowerCase()}
                              key={topping.Id}>
                    </ListItem>            
                )
            });
            return (
                <List>
                    <Subheader>Left half</Subheader>
                    {result}
                </List>
            );
        }
    } else {
        return null;
    }
}
