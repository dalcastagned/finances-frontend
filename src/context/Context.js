import { useQuery, useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { GET_ITEMS, ADD_ITEM, DROP_ITEM } from "../graphql/graphql";

const MyContext = React.createContext();

export default function ContextProvider({ children }) {
  const { data, loading } = useQuery(GET_ITEMS);
  const [addItem] = useMutation(ADD_ITEM);
  const [dropItem] = useMutation(DROP_ITEM);

  return (
    <MyContext.Provider
      value={{
        contato: {
          data: data ? data.items : [],
          loading,
          addItem,
          dropItem
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useItemsContext() {
  return useContext(MyContext);
}
