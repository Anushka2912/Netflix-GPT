import React from 'react';
import SignIn from './SignIn';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import SignUp from './SignUp';

const Body = () => {
    const appRouter = createBrowserRouter ([
        {
            path: "/",
            element: <SignIn />,
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path:"/signup",
            element: <SignUp />
        },
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} />   
    </div>
  )
}

export default Body;