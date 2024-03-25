import SigninForm from '~/_auth/forms/SigninForm';
import SignupForm from '~/_auth/forms/SignupForm';
import { Home } from '~/_root/pages/Home';
import { About, HeaderOnly } from '~/components/Layout';

interface RouteType {
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any> | null;
}
export const publicRoutes: RouteType[] = [
    { path: '/', component: Home },
    { path: '/sign-in', component: SigninForm, layout: null },
    { path: '/sign-up', component: SignupForm, layout: HeaderOnly },
    { path: '/about', component: About}
];

//export const privateRoutes = [];
