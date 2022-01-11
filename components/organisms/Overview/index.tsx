import { useCallback, useEffect, useState } from "react"
import { Slide, toast } from "react-toastify"
import { CountTypes } from "../../../services/data-types"
import { getMemberOverview } from "../../../services/member"
import LatestTransactions from "../../molecules/LatestTransactions"
import Categories from "./Categories"

export default function Overview() {
    const [count, setCount] = useState([]);
    const [data, setData] = useState<any>([]);

    const getMemberOverviewAPI = useCallback(async () => {
        const res = await getMemberOverview();
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
            setCount(res.data.count);
            setData(res.data.history);
        }
    }, [])

    useEffect(() => {
        getMemberOverviewAPI()
    }, []);

    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            {count.map((c: CountTypes) => (
                                <Categories key={c._id} icon={c.name} price={c.value}>Game<br/>{c.name}</Categories>
                            ))}
                        </div>
                    </div>
                </div>
                <LatestTransactions action={false} data={data} />
            </div>
        </main>
    )
}
