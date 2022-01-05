import * as C from './TableItem.elements'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'


export const TableItem = ({ item }) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value.toFixed(2)}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}