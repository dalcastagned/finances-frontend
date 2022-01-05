import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GET_ITEMS } from "../graphql/graphql";

const MyContext = React.createContext();

export default function ContextProvider({ children }) {
  const { data, loading } = useQuery(GET_ITEMS);
  return (
    <MyContext.Provider
      value={{
        contato: {
          data: data ? data.items : [],
          loading,
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
