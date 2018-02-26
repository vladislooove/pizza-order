import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  

export const Pizzainfo = (props) => {
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