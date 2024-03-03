import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(RouteConfig).filter((route) => {
        if (route.authOnly && !isAuth) { return false; }
        return true;
    }), [isAuth]);

    return (
        <Routes>
            {
                routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="pageWrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))
            }
        </Routes>
    );
};

export default memo(AppRouter);
