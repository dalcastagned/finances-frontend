import React, { useState, useEffect } from 'react';
import GlobalStyle from "./styles/globalStyles";
import * as C from './App.elements'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea/TableArea'
import { InfoArea } from './components/InfoArea/InfoArea'
import { InputArea } from './components/InputArea/InputArea';

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))

  }, [list, currentMonth])

  useEffect(() => {
    let income = 0;
    let expense = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expense += filteredList[i].value
      } else {
        income += filteredList[i].value
      }
    }

    setIncome(income)
    setExpense(expense)

  }, [filteredList])

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <>
      <GlobalStyle />
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <InputArea onAdd={handleAddItem} />
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </>
  );
}

export default App;
