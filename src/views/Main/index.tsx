import React, { useEffect } from "react"
import { Layout } from "antd"
import { Outlet, useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from '../../router'
import './index.scss'
import logo from '../../assets/icons/首页logo.svg'

import HomePageSidebar from '../../components/HomePageSidebar'
import HomePageHeader from '../../components/HomePageHeader'

const { Header, Sider, Content } = Layout

const Index: React.FC = () => {
    const outlet = useRoutes(router)

	return (
        <Layout>
            <Sider style={{height: '100vh'}} width='256'>
                <div className="main-sider-container">
                    <div className="main-sider-container-logo">
                        <img src={logo} alt="" />
                        <span className="main-sider-container-logo-title">LINGHUALUAN</span>
                    </div>
                    <HomePageSidebar></HomePageSidebar>
                </div>
            </Sider>
            <Layout>
                <Header className='main-header'>
                    <div className="main-header-container">
                        <HomePageHeader></HomePageHeader>
                    </div>
                </Header>
                <Content className='main-content'>
                    <div className="main-content-container">
                        {/* <Outlet></Outlet> */}
                        { outlet }
                    </div>
                </Content>
            </Layout>
        </Layout>
	)
}

export default Index
