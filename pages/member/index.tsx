import Head from 'next/head';
import { useCallback, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import LatestTransactions from '../../components/molecules/LatestTransactions';
import Categories from '../../components/organisms/Overview/Categories';
import LoaderCategories from '../../components/organisms/Overview/LoaderCategires';
import Sidebar from '../../components/organisms/Sidebar';
import { CountTypes } from '../../services/data-types';
import { getMemberOverview } from '../../services/member';

export default function Member() {
    const [data, setData] = useState<any>({});

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
            setData(res.data);
        }
    }, [])

    useEffect(() => {
        getMemberOverviewAPI()
    }, []);

    return (
        <>
            <Head>
                <title>Store GG - Member</title>
            </Head>
            <section className="overview overflow-auto">
                <Sidebar activeMenu='overview'/>
                <main className="main-wrapper">
                    <div className="ps-lg-0">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                        <div className="top-up-categories mb-30">
                            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                            <div className="main-content">
                                <div className="row">
                                    {data.count ? (
                                        <>
                                            {data.count.length > 0 && data.count.map((c: CountTypes) => (
                                                <Categories key={c._id} icon={c.name} price={c.value}>
                                                    Game<br/>{c.name}
                                                </Categories>
                                            ))}
                                            {data.count.length < 1 && 
                                                <>
                                                    <Categories icon={'Pc'} price={0}>
                                                        Game<br/>{'Pc'}
                                                    </Categories>
                                                    <Categories icon={'Mobile'} price={0}>
                                                        Game<br/>{'Mobile'}
                                                    </Categories>
                                                    <Categories icon={'Pc'} price={0}>
                                                        Game<br/>{'Console'}
                                                    </Categories>
                                                </>
                                            }
                                        </>
                                    ) : (
                                        <>
                                            <LoaderCategories />
                                            <LoaderCategories />
                                            <LoaderCategories />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <LatestTransactions action={false} data={data.history} />
                    </div>
                </main>
            </section>
        </>
    )
}