import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export const ToppingsInfoWhole = (props) => {
    if(props.Whole) {
        if(props.Whole.Topping) {
            if(!props.Whole.Topping.length) {
                return(
                    <List>
                        <Subheader>Whole</Subheader>
                        <ListItem primaryText={props.Whole.Topping.Name.toLowerCase()}>
                        </ListItem>
                    </List>
                )
            } else {
                const result = props.Whole.Topping.map((topping) => {
                    return (
                        <ListItem primaryText={topping.Name.toLowerCase()}
                                  key={topping.Id}>
                        </ListItem>            
                    )
                });
                return (
                    <List>
                        <Subheader>Whole</Subheader>
                        {result}
                    </List>
                );
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}