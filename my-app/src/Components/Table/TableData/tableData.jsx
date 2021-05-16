import React, { useEffect, useState } from 'react';
import style from './tableData.module.css';


const TableData = (props) => {
    const { value, id, changeValue, changeOption, winId } = props;
    const [winnerColor, setWinnerColor] = useState('');

    useEffect(
        () => {
            if (winId.includes(id - 1)) {
                setWinnerColor(style.winner)
            }else{
                setWinnerColor('')
            }
        }, [winId, id]
    )
    const showOption = () => {
        if (value === '' && winId.length === 0) {
            changeValue(id);
            changeOption()
        }
    }
    return <td className={winnerColor} onClick={showOption}>{value}</td>
}

export default TableData;