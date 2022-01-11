import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import React from 'react'
import Sidebar from '../../../components/organisms/Sidebar'
import TransactionsDetailContent from '../../../components/organisms/TransactionsDetail'
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import { getHistoryDetail } from '../../../services/member';

interface TransactionDetailProps {
    transactionDetail: HistoryTransactionTypes
}

export default function TransactionsDetail(props: TransactionDetailProps) {
    const { transactionDetail } = props;
    return (
        <>
            <Head>
                <title>Store GG - Member</title>
            </Head>
            <Sidebar activeMenu='transactions'/>
            <section className="transactions-detail overflow-auto">
                <TransactionsDetailContent data={transactionDetail} />
            </section>
        </>
    )
}

interface GetServerSideProps {
    req: {
        cookies: {
            token: string
        },
    },
    params: {
        idTrx: string
    }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
    const {token} = req.cookies;
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false,
            }
        }
    }

    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload: JWTPayloadTypes = jwtDecode(jwtToken);
    const userPayload: UserTypes = payload.player;
    const API_IMG = process.env.NEXT_PUBLIC_IMG;
    userPayload.avatar = `${API_IMG}/${userPayload.avatar}`

    const { idTrx } = params
    const res = await getHistoryDetail(idTrx, jwtToken)

    return {
        props: {
            transactionDetail: res.data
        }
    }
}