import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query {
    items{
      id 
      date 
      category 
      title 
      value
    }
}
`;

export const ADD_ITEM = gql`
  mutation addItem($date: Date, $category: String, $title: String, $value: Float) {
    addItem(
      data: {
        date: $date
        category: $category
        title: $title
        value: $value
      }
    ) {
        id 
        date 
        category 
        title 
        value
    }
  }
`;

export const DROP_ITEM = gql`
  mutation dropItem($id: Int) {
    dropItem (
      filter: {
        id: $id
      }
    )
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($id: Int!, $date: Date, $category: String, $title: String, $value: Float){
    updateItem (
      id: $id
      data: {
        date: $date
        category: $category
        title: $title
        value: $value
      }
    ){
      id 
      date 
      category 
      title 
      value
    }
    }
`; 
