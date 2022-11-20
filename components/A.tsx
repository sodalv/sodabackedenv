import Link from 'next/link'
import { MyA } from '../interfaces/MyA'

export default function A({ text, href }: MyA) {
  return <Link href={href}>{text}</Link>
}
