import React from 'react'
import * as C from './ItemsArea.elements'
import { Item } from '../Item/Item'

export const TableArea = ({ list }) => {

    return (
        <C.Container>
            {list.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </C.Container>
    )
}

