import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import {useBudget} from "../../context/BudgetContext.jsx";
import {useState} from "react";

const Expenses = () => {
    const { expenses, deleteExpense } = useBudget();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredExpenses = expenses.filter(expense =>
        expense.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box mb={'50px'} mt={'50px'}>
            <Typography variant="h4" mb={'10px'}>Expenses</Typography>

            <TextField
                fullWidth
                label="Type to search ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredExpenses.length === 0 ? (
                <Typography variant="h6" align="center" sx={{ marginTop: '20px', color: 'gray' }}>
                    No Expenses Found
                </Typography>
            ) : (
                <List sx={{ width: '100%', border: '1px solid #E2E3E5', marginTop: '20px' }}>
                    {filteredExpenses.map((expense, index) => (
                        <ListItem
                            key={expense.id}
                            sx={{
                                borderBottom: index !== filteredExpenses.length - 1 ? '1px solid #E2E3E5' : 'none',
                            }}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteExpense(expense.id)}>
                                    <CancelRoundedIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={expense.name} />
                            <Stack>
                                <ListItemButton
                                    sx={{
                                        backgroundColor: '#1876D1',
                                        color: '#fff',
                                        borderRadius: '20px',
                                        height: '23px',
                                    }}
                                >
                                    {`${expense.amount}$`}
                                </ListItemButton>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default Expenses;