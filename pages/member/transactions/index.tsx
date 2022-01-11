import Head from 'next/head'
import React from 'react'
import Sidebar from '../../../components/organisms/Sidebar'
import TransactionsContent from '../../../components/organisms/Transactions'

export default function Transactions() {
    return (
        <> 
            <Head>
                <title>Store GG - Member</title>
            </Head>
            <Sidebar activeMenu='transactions' />
            <TransactionsContent action />
        </>
    )
}
