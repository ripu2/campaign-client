import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/Layout'
import HomePage from '../src/modules/campaign/screens/HomePage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
       <Head>
        <title>Web3.0 | Keto Campaign</title>
        <meta name="description" content="Generated by create web3.0 powered next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  )
}

export default Home
