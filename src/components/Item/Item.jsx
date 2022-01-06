import * as C from './Item.elements'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'
import { useItemsContext } from '../../context/Context'
import { GET_ITEMS } from '../../graphql/graphql';


export const Item = ({ item }) => {

    const { contato } = useItemsContext()

    return (
        <C.Container>
            <C.ContainerTop color={categories[item.category].color}>
                <p>{item.title}</p>
                <button
                    onClick={() =>
                        contato.dropItem({
                            variables: { id: item.id },
                            refetchQueries: [{ query: GET_ITEMS }],
                        })
                    }
                >
                    X
                </button>
            </C.ContainerTop>
            <C.ContainerInfo color={categories[item.category].color}>
                <C.Date>Data: {formatDate(item.date)}</C.Date>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    Valor: <span>R$ {item.value.toFixed(2)}</span>
                </C.Value>
            </C.ContainerInfo>
        </C.Container>
    )
}