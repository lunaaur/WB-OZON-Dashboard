import React from 'react'
import Header from '../../components/Header/Header.jsx';
import Index from '../../components/Brief';
import Table from '../../components/Tables/Tables'
import s from './main.module.css'
import api from '../../api/globalApi'

const Main = () => {
  return (
    <div>
      <Header/>
      <Index/>
    </div>
  )
}

export default Main;
