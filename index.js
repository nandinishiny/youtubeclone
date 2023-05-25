import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./src/App";
import './index.css';
import { AppRouter } from "./src/App";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<RouterProvider router={AppRouter}/>)