import React, { useState } from 'react'

const Demo = ({ title }) => {
    return (
        <span>hello world -- { title }</span>
    )
}

// 高阶组件
const withSubscription = (DemoCom) => {
    const demo = () => {
        return (
            <DemoCom title='linghuluan'/>
        )
    }
    return demo
}

const DemoHOC = withSubscription(Demo)

// main
const Index = () => {
    return (
        <DemoHOC></DemoHOC>
    )
}

export default Index