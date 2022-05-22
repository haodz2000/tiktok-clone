import React from 'react'
import classNames from 'classnames/bind'
import styles from "./DefaultLayout.module.scss"
import Header from '~/components/layout/components/Header'
import SideBar from './Sidebar'

const cx = classNames.bind(styles)
const DefaultLayout = ({children}) => {
  return (
      <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('container')}>
            <SideBar/>
            <div className={cx('content')}>
                {children}    
            </div>
        </div> 
      </div>
  )
}

export default DefaultLayout