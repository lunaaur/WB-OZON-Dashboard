import React, {useState} from 'react';
import {SalesTab, OrderTab, LogisticTab, RefTab} from './TablesAll';
import {Watch} from "react-loader-spinner";


export const Index = () => {

  const [isLoadSal, setLoadsal] = useState(false)
  const [isLoadOrd, setLoadOrd] = useState(false)

  return (
    <>
    <div className="container">
      <div className="row justify-content-around text-center">
        <div className="col-6">
          {(isLoadSal) ?
          (<Watch/>) :
          (<SalesTab/>)
          }
        </div>

        <div className="col-6">
        {(isLoadOrd) ?
          (<Watch/>) :
          (<OrderTab/>)
          }
        </div>
      </div>

      <div className="row justify-content-around text-center">
          <div className="col-6">
              <LogisticTab/>
          </div>
          <div className="col-6">
            <RefTab/>
          </div>
      </div>
    </div>
    </>
  )
}

