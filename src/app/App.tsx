import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/ui/Button';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true }, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
export default App;
