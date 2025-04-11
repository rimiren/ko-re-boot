import React from 'react';
import Head from 'next/head';

export default function FavoritesPage() {
    return (
        <>
            <Head>
                <title>즐겨찾기 - V!spoDex</title>
            </Head>
            <div className="container mt-4">
                <h2>즐겨찾기한 영상</h2>
                <p className="text-muted">즐겨찾기한 영상이 여기에 표시됩니다. (추후 구현)</p>
            </div>
        </>
    );
}
