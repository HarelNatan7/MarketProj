import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
import { SignUp } from './pages/sign-up'

export function RootCmp() {

    return <div>
        <AppHeader />
        <main>
            <Routes>
                <Route element={<SignUp />} path="/" />
            </Routes>
        </main>
    </div>
}
