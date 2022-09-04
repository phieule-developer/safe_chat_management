import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgetPassword from '../pages/Auth/ForgetPassword';
export const authRoutes = [
    {
        path: '/',
        element: <Login />,
        key: "loginn"
    },
    {
        path: '/auth/login',
        element: <Login />,
        key: "login"
    },
    {
        path: '/auth/forget-password',
        element: <ForgetPassword />,
        key: "register"
    },
    {
        path: '/auth/signup',
        element: <Register />,
        key: "signup"
    },
];