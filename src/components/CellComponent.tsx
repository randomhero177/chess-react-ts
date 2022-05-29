import React, {FC} from 'react';
import {Cell} from '../models/Cell'

interface CellProps {
    cell: Cell
}

const CellComponent:FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            I'm cell
        </div>
    )
}

export default CellComponent;
