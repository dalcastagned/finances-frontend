import React from 'react'
import * as C from './TableArea.elements'
import { TableItem } from '../TableItem/TableItem'

export const TableArea = ({ list }) => {

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </C.Table>
    )
}

