'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/cards.module.css';
import { getStrapiMedia } from '../lib/strapiAux';

const Card = ({ item }) => {
    // retorna um card de "Indisponível" se não houver 
    if (!item || !item.link || !item.link.url) {
        return (
            <div className={styles.card}>
                <div className={styles.cardImageWrapper}>
                    <Image
                        src="https://placehold.co/300x300/cccccc/ffffff?text=Indisponível"
                        alt="Imagem Indisponível"
                        layout="fill"
                        objectFit="cover"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardNameOverlay}>
                        <h3 className={styles.cardName}>Indisponível</h3>
                    </div>
                </div>
            </div>
        );
    }

    // se houver item, renderiza normalmente
    const itemName = item.name;
    const imageUrlPath = item.link.url; 
    const fullImageUrl = getStrapiMedia(imageUrlPath);
    const placeholderImg = `https://placehold.co/300x300/EFEFEF/AAAAAA?text=${encodeURIComponent(itemName || 'Imagem')}`;

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <Image
                    src={fullImageUrl || placeholderImg}
                    alt={itemName || "Item da lista"}
                    layout="fill"
                    objectFit="cover"
                    className={styles.cardImage} 
                    // unoptimized={true} // Descomente se tiver problemas de domínio em dev
                />
                <div className={styles.cardNameContainer}>
                    <h3 className={styles.cardName}>{itemName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;