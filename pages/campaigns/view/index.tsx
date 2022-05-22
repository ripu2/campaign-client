import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../../src/components/Layout'
import CampaignDetail from '../../../src/modules/campaign/screens/CampaignDetail'

const CreateCampaign: NextPage = () => {
  return (
    <div>
       <Head>
        <title>Web3.0 | Keto Campaign</title>
        <meta name="description" content="Generated by create web3.0 powered next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <CampaignDetail />
      </Layout>
    </div>
  )
}

export default CreateCampaign
