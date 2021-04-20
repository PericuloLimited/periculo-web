import Link from 'next/link'
import { CMS_URL, HOST } from '@/lib/constants'

export default function contentPiece(content) {

  return (
    <span dangerouslySetInnerHTML={{ __html: content }}/>
  )
}
