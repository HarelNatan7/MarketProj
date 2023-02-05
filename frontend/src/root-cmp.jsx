import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
import { UserMsg } from './cmps/user-msg'
import { SignUp } from './pages/sign-up'
import { Thanks } from './pages/thanks'

export function RootCmp() {

    return <div>
        <AppHeader />
        <main>
            <Routes>
                <Route element={<SignUp />} path="/" />
                <Route element={<Thanks />} path="/thanks" />
            </Routes>
            <UserMsg />
        </main>
    </div>
}
