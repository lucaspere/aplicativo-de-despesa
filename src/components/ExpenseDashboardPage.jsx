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
            <label for="category">Categoria</label>
            <select id="category">
               <option value="restaurants">Restaurantes</option>
               <option value="shopping">Compras</option>
               <option value="habitation">Habitação</option>
               <option value="transport">Transporte</option>
               <option value="vehicle">Veiculo</option>
               <option value="entertainment">Entreterimento</option>
               <option value="comunication">Comunicação</option>
               <option value="financial expenses">Despesas Financeiras</option>
               <option value="investiment">Investimento</option>
               <option value="income">Renda</option>
            </select>
            <button type="submit">Adicionar</button>
         </form>

         <ul>
            {expenses.map(value => <li key={value}>{value}</li>)}
         </ul>
      </div>
   )
}

export default ExpenseDashboardPage