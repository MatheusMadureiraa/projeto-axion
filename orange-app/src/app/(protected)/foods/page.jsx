'use client';

import React from 'react';
import ProtectedListPage from '@/components/ProtectedList.Page';

function FoodsPage() {
  return(
    <ProtectedListPage 
      endpoint="foods" 
      pageTitle="LIST OF FOODS"
      itemTypeName="comidas" 
    />
  );
}

export default FoodsPage;