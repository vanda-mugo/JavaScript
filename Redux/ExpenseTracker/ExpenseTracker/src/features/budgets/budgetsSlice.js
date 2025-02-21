import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const budgetSlice = createSlice({
  name:'budgets',
  initialState: initialState,
  reducers:{
    editBudget:(state, action) => {
      const budgetSeek = state.find(budget => {
        return budget.category === action.payload.category;
      });

      if(budgetSeek) {
        budgetSeek.amount = action.payload.amount;
      }
    }
  }
}
)
export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
