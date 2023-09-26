import Link from 'next/link'

export function NavLink({ href, label }) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}
