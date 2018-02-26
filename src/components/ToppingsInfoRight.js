import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export const ToppingsInfoRight = (props) => {
    if(props.RightHalf) {
        if(!props.RightHalf.Topping.length) {
            return (
                <List>
                    <Subheader>Right half</Subheader>
                    <ListItem primaryText={props.RightHalf.Topping.Name.toLowerCase()}>
                    </ListItem>
                </List>
            );
        } else {
            const result = props.RightHalf.Topping.map((topping) => {
                return (
                    <ListItem primaryText={topping.Name.toLowerCase()}
                              key={topping.Id}>
                    </ListItem>            
                )
            });
            return (
                <List>
                    <Subheader>Right half</Subheader>
                    {result}
                </List>
            );
        }
    } else {
        return null;
    }
}
