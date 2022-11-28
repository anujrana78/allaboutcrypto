import {Typography,Row,Col,Statistic} from 'antd'
import millify from 'millify'
import React from 'react'


const Homepage = () => {
  return (
    <>
      <Typography.Title level={2} classname='heading'>
        Global Crypto Status
      </Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies"value={2}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={2}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap " value={1}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={1}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets"value={2}></Statistic></Col>
      </Row>
    </>
  )
}

export default Homepage
