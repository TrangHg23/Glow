import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';

// const textHoverStyle = 'hover:text-primaryColor';
const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <img className="h-[36px]" src="src/assets/images/logo.png" alt="logo" />
                <nav className="flex space-x-12 ml-[20%] mr-[20%]">
                    <Link to="/product" className="hover:text-primaryColor">
                        Product
                    </Link>
                    <Link to="/blog" className="">
                        Blog
                    </Link>
                    <Link to="/contact" className="">
                        Contact
                    </Link>
                    <Link to="/about" className="">
                        About us
                    </Link>
                    <Link to="/wishlist" className="">
                        Wishlist
                    </Link>
                </nav>
                <div className="flex space-x-4">
                    <SearchOutlined />
                    <UserOutlined />
                    <ShoppingOutlined />
                </div>
            </div>
        </header>
    );
};

export default Header;
