import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'



const Structure = ({ page, navigation, settings }) => {
    console.log(page)
    return (
     <div>
         <SliceZone slices={page.data.slices} components={components} />
     </div>
    )
  }
  
  export default Structure

  export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData })
  
    const page = await client.getByUID('page', 'geology')
  
    return {
      props: { page },
    }
  }
  
 