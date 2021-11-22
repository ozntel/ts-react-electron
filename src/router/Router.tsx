import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import HomePage from '../components/HomePage/HomePage';

export const Paths = {
    MainPage: '/',
};

export default function Router() {
    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={Paths.MainPage} element={<HomePage />} />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}
