import * as C from './ResumeItem.elements'
import React from 'react'

export const ResumeItem = ({ title, value, color }) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$ {value.toFixed(2)}</C.Info>
        </C.Container>
    )
}
