import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom'
import {MyExamInformationProvider} from "./context/FinalExamContext";
import { ProjectInfoProvider } from './context/ProjectInfoContext';
import { EcommerceProvider } from './context/EcommerceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MyExamInformationProvider>
                <ProjectInfoProvider>
                    < EcommerceProvider>
                        <App/>
                     </EcommerceProvider>
                </ProjectInfoProvider>
            </MyExamInformationProvider>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
