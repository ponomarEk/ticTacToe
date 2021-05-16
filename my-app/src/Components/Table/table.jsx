import React, { useEffect, useState } from 'react';
import TableData from './TableData/tableData';

import style from './table.module.css';


const Table = (props) => {
    const { data, changeValue, changeOption, option, setWinner, winId, clearField } = props;
    const [winner, setWinnerMessage] = useState('')

    useEffect(
        () => {
            const notEmpty = (curr) => curr.value !== '';
            if (data[0].value === data[1].value && data[1].value === data[2].value && data[0].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([0, 1, 2])
            }
            else if (data[3].value === data[4].value && data[4].value === data[5].value && data[3].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([3, 4, 5])
            }
            else if (data[6].value === data[7].value && data[7].value === data[8].value && data[6].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([6, 7, 8])
            }
            else if (data[0].value === data[3].value && data[3].value === data[6].value && data[0].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([0, 3, 6])
            }
            else if (data[1].value === data[4].value && data[4].value === data[7].value && data[1].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([1, 4, 7])
            }
            else if (data[2].value === data[5].value && data[5].value === data[8].value && data[2].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([2, 5, 8])
            }
            else if (data[0].value === data[4].value && data[4].value === data[8].value && data[0].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([0, 4, 8])
            }
            else if (data[2].value === data[4].value && data[4].value === data[6].value && data[2].value !== '') {
                (option === 'circle') ? setWinnerMessage('Cross won!') : setWinnerMessage('Circle won!');
                setWinner([2, 4, 6])
            }
            else if (data.every(notEmpty)) {
                setWinnerMessage('Draw!')
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [data, option]
    )

    const showWinner = () => <p className={style.winnerMessage}>{winner}</p>
    const showButton = () => {
        if (winner !== '') {
            return <button className={style.button} onClick={playAgain}>Play again</button>
        }
    }
    const playAgain = () => {
        setWinner([]);
        setWinnerMessage('');
        clearField();
    }
    const showFirstRow = () => {
        const res = data.filter(curr => curr.id >= 1 && curr.id <= 3)
            .map(curr =>
                <TableData key={curr.id}
                    value={curr.value}
                    id={curr.id}
                    changeValue={changeValue}
                    changeOption={changeOption}
                    winId={winId}
                />)
        return res;
    }
    const showSecondRow = () => {
        const res = data.filter(curr => curr.id >= 4 && curr.id <= 6)
            .map(curr =>
                <TableData key={curr.id}
                    value={curr.value}
                    id={curr.id}
                    changeValue={changeValue}
                    changeOption={changeOption}
                    winId={winId}
                />)
        return res;
    }
    const showThirdRow = () => {
        const res = data.filter(curr => curr.id >= 7 && curr.id <= 9)
            .map(curr =>
                <TableData key={curr.id}
                    value={curr.value}
                    id={curr.id}
                    changeValue={changeValue}
                    changeOption={changeOption}
                    winId={winId}
                />)
        return res;
    }

    return (
        <div className={style.container}>
            {showWinner()}
            <table className={style.table}>
                <tbody>
                    <tr>
                        {showFirstRow()}
                    </tr>
                    <tr>
                        {showSecondRow()}
                    </tr>
                    <tr>
                        {showThirdRow()}
                    </tr>
                </tbody>
            </table>
            <div>
                {showButton()}
            </div>
        </div>
    )
}

export default Table;