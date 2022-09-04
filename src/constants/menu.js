// export interface MenuItemTypes {
//     key: string;
//     label: string;
//     isTitle?: boolean;
//     icon?: string;
//     url?: string;
//     badge?: {
//         variant: string;
//         text: string;
//     };
//     parentKey?: string;
//     target?: string;
//     children?: MenuItemTypes[];
// }

const MENU_ITEMS = [
    // { key: 'custom', label: 'Custom', isTitle: true },

    {
        key: 'app-dashboard',
        label: 'Trang chủ',
        isTitle: false,
        icon: 'home',
        url: '/app/dashboard',
    },
    {
        key: 'support',
        label: 'Quản lý người dùng',
        isTitle: false,
        icon: 'user',
        url: '/app/user'
    },
    {
        key: 'group',
        label: 'Quản lý nhóm quyền',
        isTitle: false,
        icon: 'grid',
        url: '/app/group',
    },
];



export { MENU_ITEMS };
