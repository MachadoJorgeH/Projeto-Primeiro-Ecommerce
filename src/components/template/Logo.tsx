import Link from 'next/link'
import { IconBrandReact } from '@tabler/icons-react'

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-col items-center mt-2">
                <div className="text-xl leading-4"></div>
                <IconBrandReact size={40} stroke={1} className="-mt-2" />
            </div>
        </Link>
    )
}
