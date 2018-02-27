import React from 'react';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export const ToppingsInfoLeft = (props) => {
    if(props.LeftHalf) {
        if(!props.LeftHalf.Topping.length) {
            return (
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                            <TableRowColumn>
                                Left Half
                            </TableRowColumn>
                            <TableRowColumn style={{textAlign: 'right'}}>
                                Attribute
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                {props.LeftHalf.Topping.Name.toLowerCase()}
                            </TableRowColumn>
                            <TableRowColumn style={{textAlign: 'right'}}>
                                {props.LeftHalf.Topping.Attribute.toLowerCase()}
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            );
        } else {
            const result = props.LeftHalf.Topping.map((topping) => {
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
                                Left Half
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
}
