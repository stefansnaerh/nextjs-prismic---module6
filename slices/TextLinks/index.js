import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

import styles from './index.module.css'

/**
 * @typedef {import("@prismicio/client").Content.TextLinksSlice} TextLinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextLinksSlice>} TextLinksProps
 * @param { TextLinksProps }
 */
const TextLinks = ({ slice}) => (
  <section className={styles.linkContainer}>
      <Link href={'/'}>
        <PrismicRichText field={slice.primary.homelink} />
      </Link>
      <Link href={'/structure'}>
      <PrismicRichText field={slice.primary.structurelink} />
      </Link>
      <Link href={'/geology'}>
      <PrismicRichText field={slice.primary.geologylink} />
      </Link>
      <style jsx>{`
   .homeButton {
    width : 20px;
    height : 3px;
    color: #FFFFFFF;
   }
`}</style>
  </section>
)

export default TextLinks