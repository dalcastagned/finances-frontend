import { useState } from 'react';
import * as C from './InputArea.elements';
import { categories } from '../../data/categories';
import { useItemsContext } from '../../context/Context'
import { GET_ITEMS } from '../../graphql/graphql';

export const InputArea = ({ onAdd }) => {

  const { contato } = useItemsContext()

  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys = Object.keys(categories);

  const handleAddEvent = () => {
    let errors = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd(contato.addItem({
        variables: {
          date: dateField,
          category: categoryField,
          title: titleField,
          value: valueField
        },
        refetchQueries: [{ query: GET_ITEMS }]
      }));
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
}