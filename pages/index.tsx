import type { NextPage } from 'next'
import Head from 'next/head'
import AOS from 'aos'
import { useEffect } from 'react'
import Navbar from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/Section1'
import TransactionStep from '../components/organisms/Section2'
import FeaturedGame from '../components/organisms/Section3'
import Reached from '../components/organisms/Section4'
import Story from '../components/organisms/Section5'
import Footer from '../components/organisms/Footer'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <link rel="shortcut icon" href="/icon/logo.svg" type="image/x-icon" />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="https://imageurlkalian" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home
