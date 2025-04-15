import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <main className="p-4" style={{ flex: 1, overflowY: 'auto' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
