import React from 'react';
import RootLayout from './layouts/RootLayout';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import NotFound from './pages/NotFound';

const menuItems = [
    {
        id: 1,
        label: 'Home',
        url: '/',
        urlPattern: '/',
        element: <Home />,
    },
    {
        id: 2,
        label: 'Laboratorium 1',
        url: '/lab1',
        urlPattern: '/lab1',
        element: <Lab1 />,
    },
    {
        id: 3,
        label: 'Laboratorium 2',
        url: '/lab2/1', 
        urlPattern: '/lab2/:id',
        element: <Lab2 />,
    },
    {
        id: 4,
        label: 'Laboratorium 3',
        url: '/lab3/1', 
        urlPattern: '/lab3',
        element: <Lab3 />,
    }
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/lab1',
        element: <Lab1 />,
    },
    {
        path: '/lab2/:id',
        element: <Lab2 />,
    },
    {
        path: '/lab3/:id',
        element: <Lab3 />,
    },
    {
        path: '/not-found',
        element: <NotFound />,
    },
]);

const App = () => {
    return (
        <>
        <RootLayout items={menuItems}>
            <RouterProvider router={router} />
          
      </RootLayout>
        </>
    );
};

export default App;