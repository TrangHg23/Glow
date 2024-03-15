import { Link, useNavigate } from 'react-router-dom';
import { CloseOutlined, MenuOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
// submenu keys of first level
const rootSubmenuKeys = ['/collection', '/blog', '/contact', 'about', '/wishlist', '/faqs'];

const items: MenuItem[] = [
    getItem('Collection', '/collection', '', [
        getItem('Skincare', '/skincare'),
        getItem('Fragrances', '/fragrances'),
        getItem('Make Up', 'makeup'),
    ]),
    { type: 'divider' },
    getItem('blog', '/blog'),
    { type: 'divider' },
    getItem('contact', '/contact'),
    { type: 'divider' },
    getItem('about Us', '/about'),
    { type: 'divider' },
    getItem('wishlist', '/wishlist'),
    { type: 'divider' },
    getItem('fAQs', '/faqs'),
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(['/collection']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <header className={clsx(styles.header, 'w-full fontPoppins h-[94px] lg:px-[9%]')}>
            <div
                className={
                    'overflow-hidden h-full py-8 max-w-screen-2xl mx-auto my-0 flex items-center justify-between relative z-50'
                }
            >
                <MenuOutlined className="cursor-pointer lg:hidden text-xl" onClick={() => setMenuOpen(true)} />
                <div>
                    <Link to="/">
                        <img src="src/assets/images/logo.png" alt="logo" />
                    </Link>
                </div>

                {/* sidebar menu header */}
                <div
                    className={clsx(
                        'fixed h-full w-screen lg:hidden bg-black/50 top-0 right-0 backdrop-blur-sm -translate-x-full transition-all duration-[150ms] ease-linear bg-fixed',
                        menuOpen && 'translate-x-0'
                    )}
                >
                    <section className="text-black bg-white w-10/12 md:w-1/3 top-0 left-0 h-screen">
                        <CloseOutlined
                            className="block mt-0 mb-6 text-2xl cursor-pointer text-slate-600 pt-8 pl-[80%]"
                            onClick={() => setMenuOpen(false)}
                        />
                        <Menu
                            className="text-base fontPoppins capitalize"
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            items={items}
                            onClick={({ key }) => {
                                navigate(key);
                            }}
                        />
                    </section>
                </div>

                <nav className={clsx(styles.header__content__nav, 'hidden lg:!flex justify-center space-x-10')}>
                    <li>
                        <Link to="/collection">collection</Link>
                    </li>
                    <li>
                        <Link to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>
                        <Link to="/about">about us</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">wishlist</Link>
                    </li>
                    <li>
                        <Link to="/fAQs">fAQs</Link>
                    </li>
                </nav>
                <div className={clsx(styles.header__content__icons, 'flex text-2xl cursor-pointer')}>
                    <li>
                        <SearchOutlined />
                    </li>
                    <li>
                        <UserOutlined />
                    </li>
                    <li>
                        <ShoppingOutlined />
                    </li>
                </div>
            </div>
        </header>
    );
};

export default Header;
