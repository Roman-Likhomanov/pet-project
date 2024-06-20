import { Route, Routes } from 'react-router-dom';
import { memo, Suspense } from 'react';
import { AppRoutesProps, RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequiareAuth } from 'app/providers/router/ui/RequaireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            {route.element}
        </Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequiareAuth>{element}</RequiareAuth> : element}
        />
    );
};

const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map(renderWithWrapper)}
    </Routes>
);

export default memo(AppRouter);
