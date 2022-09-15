import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Brief from './Brief';
import BriefWe from './BriefWe';
import BriefOz from './BriefOz';

const Index = () => {
  return (
    <>
    <Routes>
        <Route path='/wildberries' element={<BriefWe/>}/>
        <Route path='/ozon' element={<BriefOz/>}/>
        <Route path='/allbrief' element={<Brief/>}/>
    </Routes>
    </>
  )
}

export default Index;