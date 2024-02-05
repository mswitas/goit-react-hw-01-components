import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    const tableBody = items.map(value => {
        return (
            <tr>
                <td>{value.type}</td>
                <td>{value.amount}</td>
                <td>{value.currency}</td>
            </tr>
        );
    });
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>{tableBody}</tbody>
        </table>
    );
}