import Head from 'next/head';
import Overview from '../../components/organisms/Overview'
import Sidebar from '../../components/organisms/Sidebar'

export default function Member() {
    return (
        <>
            <Head>
                <title>Store GG - Member</title>
            </Head>
            <section className="overview overflow-auto">
                <Sidebar activeMenu='overview'/>
                <Overview />
            </section>
        </>
    )
}

interface GetServerSideProps {
    req: {
        cookies: {
            token: string
        },
    }
}

export async function getServerSideProps({req}: GetServerSideProps) {
    const {token} = req.cookies;
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false,
            }
        }
    } 
    return {
        props: { }
    }
}