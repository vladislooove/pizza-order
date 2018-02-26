import React from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Clear from 'material-ui/svg-icons/content/clear';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  

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

const ToppingsInfo = (props) => {
    return (
        <div>
            <ToppingsInfoWhole Whole={props.Toppings.Whole} />
            <ToppingsInfoLeft LeftHalf={props.Toppings.LeftHalf} />
            <ToppingsInfoRight RightHalf={props.Toppings.RightHalf} />
        </div>
    )
}

const ToppingsInfoLeft = (props) => {
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

const ToppingsInfoRight = (props) => {
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

const ToppingsInfoWhole = (props) => {
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

const Pizzainfo = (props) => {
    return (
        <Table>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>
                        Crust
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right'}}>
                        {props.data.Crust}
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        Size
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right'}}>
                        {props.data.Size}
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        Doness
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right'}}>
                        {props.data.Doness}
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        Sauce
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign: 'right'}}>
                        {props.data.Sauce}
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    )
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