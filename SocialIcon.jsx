
import Link from "next/link"

export default function SocialIcon({ link}) {
  return (
    <Link key={link} href={link.href} className=" p-[18px] rounded-[8px] bg-black-shade-10 border-2 border-black-shade-15">
      {link.icon}
    </Link>
  )
}
