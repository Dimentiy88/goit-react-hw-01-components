import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead className={css.hederRow}>
        <tr className={css.valuesRow}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.valuesRow}>
            <td className={css.transactionData}>{item.type}</td>
            <td className={css.transactionData}>{item.amount}</td>
            <td className={css.transactionData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
