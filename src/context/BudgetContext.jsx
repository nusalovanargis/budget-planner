import { createContext, useContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {
    const [budget, setBudget] = useState(2000);
    const [spent, setSpent] = useState(960);
    const [expenses, setExpenses] = useState([
        { id: 1, name: 'Shopping', amount: 50 },
        { id: 2, name: 'Holiday', amount: 300 },
        { id: 3, name: 'Transportation', amount: 70 },
        { id: 4, name: 'Fuel', amount: 40 },
        { id: 5, name: 'Child Care', amount: 500 },
    ]);

    const remaining = budget - spent;

    const updateBudget = (newBudget) => {
        setBudget(newBudget);
    };

    const addExpense = (newExpense) => {
        setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: prevExpenses.length + 1 }]);
        setSpent((prevSpent) => prevSpent + newExpense.amount);
    };

    const deleteExpense = (id) => {
        const expenseToDelete = expenses.find((expense) => expense.id === id);
        if (expenseToDelete) {
            setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
            setSpent((prevSpent) => prevSpent - expenseToDelete.amount);
        }
    };

    return (
        <BudgetContext.Provider value={{ budget, remaining, spent, expenses, setSpent, updateBudget, addExpense, deleteExpense }}>
            {children}
        </BudgetContext.Provider>
    );
};

export const useBudget = () => useContext(BudgetContext);
