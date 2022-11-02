import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Home = ({ page, navigation, settings }) => {
  console.log(page)
  return (
   <div>
       <SliceZone slices={page.data.slices} components={components}/>
   </div>
  )
}

export default Home

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page','home')
  console.log(page)
  return {
    props: {
      page,
    },
  }
}
