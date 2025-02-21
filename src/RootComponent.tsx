import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import ArticlesPage from './pages/Articles'
import AboutPage from './pages/About'

import DashboardPage from './pages/Dashboard'

import UsersPage from './pages/Users'
import UserPage from './pages/User'

import TransPage from './pages/Trans'
import TranPage from './pages/Tran'

import NotFoundPage from './pages/NotFound'

import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import Header from "./Header";
import Footer from "./Footer";

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Header />         
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.DASHBOARDPAGE_ROUTE} element={<DashboardPage />} />
                <Route path={ROUTES.TRANSPAGE_ROUTE} element={<TransPage />} />
                <Route path={ROUTES.ARTICLEPAGE_ROUTE} element={<ArticlesPage />} />
                <Route path={ROUTES.ABOUTPAGE_ROUTE} element={<AboutPage />} />

                <Route path={ROUTES.TRANPAGE_ROUTE} element={<TranPage />} />
                <Route path={ROUTES.USERSPAGE_ROUTE} element={<UsersPage />} />
                <Route path={ROUTES.USERPAGE_ROUTE} element={<UserPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RootComponent
