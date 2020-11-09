import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer'

// Create the initial state
const initialState = {
  transactions: [
    { id: 1, description: 'Project 1 Income', transactionAmount: 10000 },
    { id: 2, description: 'Project 2 Income', transactionAmount: 10000 },
    { id: 3, description: 'Project 1 Expense', transactionAmount: -5000 },
    { id: 4, description: 'Project 2 Expense', transactionAmount: -10000 },
  ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={
      {
        transaction: state.transactions
      }
    }>
      {children}
    </GlobalContext.Provider>
  );

}