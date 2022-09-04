import ChangePassword from "../pages/Auth/ChangePassword";
import Dashboard from "../pages/Dashboard";
import GroupPage from "../pages/Group";
import Profile from "../pages/Profile";
import UserPage from "../pages/User";

export const privateRoutes = [
    {
        path: 'dashboard',
        element: <Dashboard />,
        key: "dashboard"
    },
    {
        path: 'change_password',
        element: <ChangePassword />,
        key: "change_password"
    },
    {
        path: 'profile',
        element: <Profile />,
        key: "profile"
    },
    {
        path: 'group',
        element: <GroupPage />,
        key: "group"
    },
    {
        path: 'user',
        element: <UserPage />,
        key: "user"
    },
];