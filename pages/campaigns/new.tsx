import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../src/components/Layout'
import CreateCampaignPage from '../../src/modules/campaign/screens/CreateCampaignPage'
import styles from '../styles/Home.module.css'

const CreateCampaign: NextPage = () => {
  return (
    <div>
       <Head>
        <title>Web3.0 | Keto Campaign</title>
        <meta name="description" content="Generated by create web3.0 powered next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CreateCampaignPage/>
      </Layout>
    </div>
  )
}

export default CreateCampaign
