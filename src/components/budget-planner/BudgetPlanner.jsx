import {Box, Button, Stack, Typography} from "@mui/material";
import {useState} from "react";
import Popup from "../ui/popup/Popup";
import {useBudget} from "../../context/BudgetContext";

const BudgetPlanner = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const { budget, remaining, spent } = useBudget();

    const data = [
        { label: 'Budget', value: `$${budget}`, backgroundColor: '#E2E3E5', color: '#6C6D6E', hasButton: true },
        { label: 'Remaining', value: `$${remaining}`, backgroundColor: '#D4EEDA', color: '#3E5D48', hasButton: false },
        { label: 'Spent so far', value: `$${spent}`, backgroundColor: '#CBE5FE', color: '#39577F', hasButton: false }
    ];

    return (
        <Box>
            <Typography variant="h3">My Budget Planner</Typography>
            <Stack direction="row" justifyContent='space-between' spacing={2} mt={2} mb={2}>
                {data.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '30%',
                            height: '80px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: item.backgroundColor,
                            padding: '20px',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography variant="body2" sx={{color: item.color}}>
                            {item.label}: <span>{item.value}</span>
                        </Typography>
                        {item.hasButton && (
                            <Button
                                variant='contained'
                                color='primary'
                                sx={{textTransform: 'none'}}
                                onClick={handleOpen}
                            >
                                Edit
                            </Button>
                        )}
                    </Box>
                ))}
            </Stack>
            <Popup open={open} onClose={handleClose} onOpen={handleOpen} />
        </Box>
    );
};

export default BudgetPlanner;