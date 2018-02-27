import React from 'react';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export const ToppingsInfoRight = (props) => {
    if(props.RightHalf) {
        if(!props.RightHalf.Topping.length) {
            return (
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                            <TableRowColumn>
                                Right Half
                            </TableRowColumn>
                            <TableRowColumn style={{textAlign: 'right'}}>
                                Attribute
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                {props.RightHalf.Topping.Name.toLowerCase()}
                            </TableRowColumn>
                            <TableRowColumn style={{textAlign: 'right'}}>
                                {props.RightHalf.Topping.Attribute.toLowerCase()}
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            );
        } else {
            const result = props.RightHalf.Topping.map((topping) => {
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
                                Right Half
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
