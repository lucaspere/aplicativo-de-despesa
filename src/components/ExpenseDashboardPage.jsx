import React, { useState } from 'react';


const ExpenseDashboardPage = () => {
   const [expenseValue, setExpenseValue] = useState()
   const [expenses, setExpense] = useState([])
   const handleSubmit = (e) => {
      e.preventDefault();
      setExpense([...expenses, expenseValue])
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={expenseValue}
               onChange={(e) => setExpenseValue(e.target.value)} />
            <button type="submit">Adicionar</button>
         </form>

         <ul>
            {expenses.map(value => <li key={value}>{value}</li>)}
         </ul>
      </div>
   )
}

export default ExpenseDashboardPage