export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list, date) => {
    let newList = []
    let [year, month] = date?.split('-')

    for (let i in list) {
        let newDate = new Date(list[i].date) 
        if (
            newDate.getFullYear() === parseInt(year) &&
            (newDate.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date) => {
    let newDate = new Date(date)  
    let year = newDate.getFullYear()
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n) => n < 10 ? `0${n}` : `${n}`

export const formatCurrentMonth = (currentMonth) => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month)-1]} / ${year}`
}