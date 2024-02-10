"use client"
import { AgencySidebarOption, SubAccount, SubAccountSidebarOption } from '@prisma/client'
import React from 'react'

type Props = {
    defaultOpen?:boolean
    subAccounts: SubAccount[]
    sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[]
    sidebarLogo: string
    details: any
    user: any
    id: string
}

const MenuOptions = ({details, id, sidebarLogo, sidebarOpt, defaultOpen, subAccounts, user}: Props) => {
  return (
    <div>MenuOptions</div>
  )
}

export default MenuOptions