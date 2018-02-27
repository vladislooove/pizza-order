import React from 'react';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export const ToppingsInfoWhole = (props) => {
    if(props.Whole) {
        if(props.Whole.Topping) {
            if(!props.Whole.Topping.length) {
                return(
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                <TableRowColumn>
                                    Whole
                                </TableRowColumn>
                                <TableRowColumn style={{textAlign: 'right'}}>
                                    Attribute
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>
                                    {props.Whole.Topping.Name.toLowerCase()}
                                </TableRowColumn>
                                <TableRowColumn style={{textAlign: 'right'}}>
                                    {props.Whole.Topping.Attribute.toLowerCase()}
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>            
                )
            } else {
                const result = props.Whole.Topping.map((topping) => {
                    return (
                        <TableRow key={topping.Id}>
                            <TableRowColumn>
                                {topping.Name.toLowerCase()}
                            </TableRowColumn>
                            <TableRowColumn style={{textAlign: 'right'}}>
                                {topping.Attribute.toLowerCase()}
                            </TableRowColumn>
                        </TableRow>
                    )
                });
                return (
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                <TableRowColumn>
                                    Whole
                                </TableRowColumn>
                                <TableRowColumn style={{textAlign: 'right'}}>
                                    Attribute
                                </TableRowColumn>
                            </TableRow>
                            {result}
                        </TableBody>
                    </Table>
                );
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}