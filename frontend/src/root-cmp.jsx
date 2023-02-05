import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
import { UserMsg } from './cmps/user-msg'
import { SignUp } from './pages/sign-up'

export function RootCmp() {

    return <div>
        <AppHeader />
        <main>
            <Routes>
                <Route element={<SignUp />} path="/" />
            </Routes>
            <UserMsg />
        </main>
    </div>
}
