import { formatCurrentMonth } from '../../helpers/dateFilter'
import * as C from './InfoArea.elements'
import { ResumeItem } from '../ResumeItem/ResumeItem'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
        <C.Container>
            <C.MountArea>
                <C.MonthArrow onClick={handlePrevMonth}><MdArrowBackIos/></C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}><MdArrowForwardIos/></C.MonthArrow>
            </C.MountArea>
            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income} />
                <ResumeItem title='Despesas' value={expense} />
                <ResumeItem title='Balanço' value={income - expense} color={(income - expense) < 0 ? 'red': (income - expense) === 0 ? 'black' : 'green'} />
            </C.ResumeArea>
        </C.Container>
    )
}
