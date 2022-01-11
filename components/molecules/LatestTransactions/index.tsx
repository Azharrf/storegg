import { HistoryTransactionTypes } from '../../../services/data-types';
import Item from '../../organisms/Overview/Item';

interface LatestTransactionsProps {
    action: boolean;
    data: HistoryTransactionTypes[];
}

export default function LatestTransactions(props: LatestTransactionsProps) {
    const { action, data } = props;
    const API_IMG = process.env.NEXT_PUBLIC_IMG

    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="text-start" scope="col">Game</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            {action ? (<th scope="col">Actions</th>) : ('')}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: HistoryTransactionTypes) => (
                            <Item
                                key={item._id}
                                id={item._id}
                                image={`${API_IMG}/${item.historyVoucherTopup.thumbnail}`}
                                title={item.historyVoucherTopup.gameName}
                                category={item.historyVoucherTopup.category}
                                item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                                price={item.value}
                                status={item.status}
                                action={action}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
