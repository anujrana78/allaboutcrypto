import React from 'react'
import { Avatar, Button, Menu, Typography, } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,FundOutlined,BulbOutlined,MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrencies.png'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon}></Avatar>
            <Typography.Title level={2} className="logo">
                <Link to='/'>All About Crypto</Link>
            </Typography.Title>
        </div>
      
      <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
              <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
              <Link to='/news'>News</Link>
            </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar