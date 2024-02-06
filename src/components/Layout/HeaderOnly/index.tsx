import Header from '~/components/Layout/DefaultLayout/Header';
import { ReactNode } from 'react';

interface HeaderOnlyProps {
    children: ReactNode;
}

function HeaderOnly({ children }: HeaderOnlyProps) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
