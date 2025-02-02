import type { PropsWithChildren } from "react"

export const NavItem = ({ children }: PropsWithChildren) => {
    return <div className="border-gray-400 bg-white p-2 rounded-md">{children}</div>
}