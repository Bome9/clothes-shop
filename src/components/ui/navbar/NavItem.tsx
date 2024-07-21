'use client'

import { FC } from "react"
import { IMenuItem } from "./menu.interface"
import Link from "next/link"
import cn from 'clsx'
import { usePathname } from "next/navigation"

interface INavItem {
    item: IMenuItem
}

const NavItem: FC<INavItem> = ({item}) => {
    const pathname = usePathname()

    const IsActive = pathname === item.link
    return <div>
        <Link href={item.link} className={cn('text-sm font-medium transition duration-200 hover:text-orange-600 ease-in-out', IsActive ? 'text-orange-600' : '')} >{item.name}</Link>
    </div>
}

export default NavItem
