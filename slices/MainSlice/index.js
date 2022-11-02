import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import styles from './index.module.css'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.MainSliceSlice} MainSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainSliceSlice>} MainSliceProps
 * @param { MainSliceProps }
 */
const MainSlice = ({ slice }) => (
  <section className={styles.container}>
    <img src={slice.primary.overviewimage.url} alt={slice.primary.overviewimage.alt} className={styles.planetImg} />
    <PrismicRichText  field={slice.primary.title} className={styles.title} />
    <PrismicRichText field={slice.primary.overview} />
    <Link href={slice.primary.wikilink}>
    <span>source : { slice.primary.wikilink }</span>
    </Link>
    <PrismicLink  field={slice.primary.seeoverview}>My Link</PrismicLink>
    <div className={styles.statisticsContainer}>
{
  slice?.items?.map((item, i) =>
    <div className={styles.statisticsBox} key={item.statistics_uid}>
    <PrismicRichText field={item.statistics_title} />
    <PrismicRichText field={item.statistics_numbers} />
    </div>
  )
}
</div>
  </section>
)

export default MainSlice