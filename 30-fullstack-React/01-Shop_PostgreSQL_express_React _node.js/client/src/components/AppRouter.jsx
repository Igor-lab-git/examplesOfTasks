import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from '../constants/routes';
import { useContext } from "react";
import { Context } from "../context/Context";


const AppRouter = () => {
    // const isAuth = false; // пока false для теста
    const { user } = useContext(Context);
    console.log(user);
    
    console.log('publicRoutes:', publicRoutes); // проверяем, что маршруты загружаются
    
    return (
        <Routes>
            {/* Публичные маршруты */}
            {publicRoutes.map((route) => {
                const Component = route.component;
                console.log('Рендерим публичный маршрут:', route.path);
                return (
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<Component />} 
                    />
                );
            })}
            
            {/* Приватные маршруты */}
            {user.isAuth && authRoutes.map((route) => {
                const Component = route.component;
                console.log('Рендерим приватный маршрут:', route.path);
                return (
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<Component />} 
                    />
                );
            })}
            
            {/* Редирект на главную */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;