'use client';

import React, { useMemo } from 'react';
import Card from '@/components/Card';
import styles from '../styles/lists.module.css';

// apenas ordena, o select esta na ProtectedList
const OrderList = ({ items, sortOrder, itemTypeName = "itens" }) => {
  // useMemo é usado para otimizar a performance 
  const displayedItems = useMemo(() => {

    let sortedItems = [...items];  // armazena cópia dos itens p/ nao mudar original

    if (sortOrder === 'ASC') {
      sortedItems.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (sortOrder === 'DESC') {
      sortedItems.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
    }

    return sortedItems;
  }, [items, sortOrder]);

  return (
    <> 
      {displayedItems.length === 0 ? (
        <p className={styles.emptyListMessage}>Nenhum(a) {itemTypeName} encontrado(a).</p>
      ) : (
        <div className={styles.listCards}>
          {displayedItems.map((item) => ( 
            <Card key={item.id} item={item} /> 
          ))}
        </div>
      )}
    </>
  );
};

export default OrderList;