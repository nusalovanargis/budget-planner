import {Box} from "@mui/material";
import classes from './Popup.module.css'
import {useBudget} from "../../../context/BudgetContext.jsx";
import {useState} from "react";

function Popup({ open, onClose}) {
    const { budget, updateBudget } = useBudget()
    const [newBudget, setNewBudget] = useState(budget);

    const handleSave = () => {
        updateBudget(newBudget);
        onClose();
    };

    if (!open) return null;

    return (
        <Box
            className={classes['modal-overlay']}>
            <Box
                className={classes['modal-container']}>
                <Box
                    className={classes['modal-header']}>
                    <h2 className={classes['modal-title']}>Updating the budget</h2>
                    <button className={classes['close-btn']} onClick={onClose}>&times;</button>
                </Box
                >
                <Box
                    className={classes['modal-content']}>
                    <Box>
                        <label className={classes['modal-label']}>Budget</label>
                        <input
                            name="description"
                            type="number"
                            className={classes['modal-input']}
                            value={newBudget}
                            onChange={(e) => setNewBudget(Number(e.target.value))}
                        />
                    </Box>
                </Box
                >
                <Box
                    className={classes['modal-actions']}>
                    <button className={classes['cancel-btn']} onClick={onClose}>Cancel</button>
                    <button className={classes['save-btn']}  onClick={handleSave}>Save</button>
                </Box>
            </Box
            >
        </Box
        >
    );
}

export default Popup;