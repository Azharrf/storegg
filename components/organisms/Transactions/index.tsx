import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Slide, toast } from "react-toastify";
import { getHistoryTransaction } from "../../../services/member";
import LatestTransactions from "../../molecules/LatestTransactions";
import ButtonTab from "./ButtonTab";

interface TransactionsContentProps {
    action: boolean;
}


export default function TransactionsContent(props: TransactionsContentProps) {
    const [total, setTotal] = useState(0);
    const [tab, setTab] = useState('all');
    const [data, setData] = useState<any>([]);

    const getDataLatestTransaction = useCallback(async (value) => {
        const res = await getHistoryTransaction(value);
        if (res.error) {
            toast.error(res.message, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
            })
        } else {
            setTotal(res.data.total);
            setData(res.data.history);
        }
    }, [])

    useEffect(() => {
        getDataLatestTransaction('all')
    }, [])

    const onTabClick = (value: string) => {
        setTab(value);
        getDataLatestTransaction(value)
    }

    return (
        <section className="transactions overflow-auto">
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
                    <div className="mb-30">
                        <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
                        <h3 className="text-5xl fw-medium color-palette-1">
                            <NumberFormat
                                value={total}
                                prefix="Rp. "
                                thousandSeparator="."
                                decimalSeparator=","
                                displayType="text"
                            />
                        </h3>
                    </div>
                    <div className="row mt-30 mb-20">
                        <div className="col-lg-12 col-12 main-content">
                            <div id="list_status_title">
                                <ButtonTab title="All Trx" active={tab === 'all'} onClick={() => onTabClick('all')}/>
                                <ButtonTab title="Success" active={tab === 'success'} onClick={() => onTabClick('success')}/>
                                <ButtonTab title="Pending" active={tab === 'pending'} onClick={() => onTabClick('pending')}/>
                                <ButtonTab title="Failed" active={tab === 'failed'} onClick={() => onTabClick('failed')}/>
                            </div>
                        </div>
                    </div>
                    <LatestTransactions action={true} data={data} />
                </div>
            </main>
        </section>
    )
}
