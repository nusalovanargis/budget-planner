import BudgetPlanner from "./components/budget-planner/BudgetPlanner";
import Expenses from "./components/expenses/Expenses";
import AddExpense from "./components/add-expense/AddExpense";
import {Box} from "@mui/material";
import {BudgetContextProvider} from "./context/BudgetContext";

const App = () => {
    return (
        <BudgetContextProvider>
            <Box>
                <BudgetPlanner />
                <Expenses />
                <AddExpense />
            </Box>
        </BudgetContextProvider>
    );
};

export default App;