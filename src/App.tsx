import { Routes, Route } from 'react-router-dom';
import AuthLayout from './_auth/AuthLayout';
import { RootLayout } from './_root/RootLayout';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <main>
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout />}>
                    {publicRoutes.map((route, index) => {
                        let Layout;
                        if (route.layout === null) Layout = Fragment;
                        else if (route.layout) Layout = route.layout;
                        else Layout = DefaultLayout;

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>

                {/* private routes */}
                <Route element={<RootLayout />}></Route>
            </Routes>
        </main>
    );
}
export default App;
