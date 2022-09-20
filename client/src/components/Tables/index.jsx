import React, {useState} from 'react';
// import {useSelector} from 'react-redux';
import {SalesTab, OrderTab, LogisticTab, RefTab} from './TablesAll';
import {Watch} from "react-loader-spinner";


export const Index = ({isLoadSal, isLoadOrd, isLoadRef, isLoadLog}) => {

  return (
    <>
    <div className="container">
      <div className="row justify-content-around text-center">
        <div className="col-6">
          {isLoadSal ?
          <Watch/> :
           <SalesTab/>}
        </div>

        <div className="col-6">
        {isLoadOrd ?
          <Watch/> :
          <OrderTab/>}
        </div>
      </div>

      <div className="row justify-content-around text-center">
          <div className="col-6">
          {isLoadRef ?
          <Watch/> :
          <LogisticTab/>}
          </div>
          <div className="col-6">
          {isLoadLog ?
          <Watch/> :
          <RefTab/>}
          </div>
      </div>
    </div>
    </>
  )
};