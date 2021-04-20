import Link from 'next/link'
import { CMS_URL, HOST } from '@/lib/constants'

export default function CoverImage({ mdAndUp, title, url, slug }) {
  const imageUrl = (url.startsWith('/') ? CMS_URL : HOST) + url


// maxHeight: "193.062px"

  return (
    <div style={{maxWidth: mdAndUp ? "280px" : "150px",maxHeight: mdAndUp ? "193.062px" : "150px",  overflow: "hidden"}}>     
        <Link as={"/Blog/" + slug} href={"/Blog/" + slug}>
          <a aria-label={title}>
            <img style={{maxWidth: mdAndUp ? "280px" : "150px"}} src={imageUrl} alt={title} />
          </a>
       </Link>
    </div>
  )
}
