import { Typography } from '@mui/material'
import React from 'react'
import { RequestType } from '../../types'
import { Cell } from './styles'


interface CellProps extends RequestType {
    onApprove: Function
    onFinalize: Function
    index: number
}

export default function TableCell(props: CellProps) {
  return (
    <Cell>
        <Typography>
            {props.index+1}
        </Typography>
        <Typography>
            {props.description}
        </Typography>
        <Typography>
            {props.value}
        </Typography>
        <Typography>
            {props.recipient.slice(0,5)}
        </Typography>
        <Typography>
            {props.approvalCount}
        </Typography>
        <Typography>
            Approve
        </Typography>
        <Typography>
            Finalize
        </Typography>
    </Cell>
  )
}
