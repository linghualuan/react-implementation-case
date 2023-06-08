import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

import {
	MailOutlined,
    FileTextOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Menu } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}

const items: MenuProps["items"] = [
    getItem("文件上传", "/uploadfiles", <FileTextOutlined />),
    getItem("demo", "/demo", <FileTextOutlined />)
]

const Index: React.FC = () => {
    const navigate = useNavigate()

    const location = useLocation()

	const onClick: MenuProps["onClick"] = e => {
        navigate(e.key)
	}

	return (
		<Menu
			onClick={onClick}
			style={{ width: 256, borderInlineEnd: 'none', userSelect: 'none' }}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode='inline'
			items={items}
		/>
	)
}

export default Index
