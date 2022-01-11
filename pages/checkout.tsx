import React from 'react'
import CheckOutItem from '../components/organisms/CheckOutItem'
import CheckOutDetail from '../components/organisms/CheckOutDetail'
import CheckOutConfirm from '../components/organisms/CheckOutConfirm'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Checkout() {
    return (
        <>
            <Head>
                <title>Checkout Detail</title>
            </Head>
            <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
                <div className="container-fluid">
                    <div className="logo text-md-center text-start pb-50">
                        <Link href="/">
                            <a>
                                <Image src="/icon/logo.svg" height={60} width={60} alt='Logo' />
                            </a>
                        </Link>
                    </div>
                    <div className="title-text pt-md-50 pt-0">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                        <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
                    </div>
                    <CheckOutItem />
                    <hr/>
                    <CheckOutDetail />
                    <CheckOutConfirm />
                </div>
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