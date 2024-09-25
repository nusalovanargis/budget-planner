import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useBudget} from "../../context/BudgetContext.jsx";

export const AddExpense = () => {
    const { addExpense } = useBudget();
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleAddExpense = () => {
        if (name.trim() && cost.trim()) {
            const newExpense = {
                name,
                amount: parseFloat(cost),
            };
            addExpense(newExpense);
            setName('');
            setCost('');
        }
    };

    return (
        <Box>
            <Typography variant="h4">Add Expense</Typography>
            <Stack direction='column' display={'flex'} gap={'20px'} mt={'20px'}>
                <Stack direction='row' display={'flex'} gap={'20px'} align={'center'}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        sx={{width: '400px'}}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Cost"
                        variant="outlined"
                        sx={{width: '400px'}}
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </Stack>
                <Button
                    variant='contained'
                    color='primary'
                    sx={{width: '20px', height: '50px', textTransform: 'none'}}
                    onClick={handleAddExpense}
                >
                    Save
                </Button>
            </Stack>
        </Box>
    );
};

export default AddExpense;