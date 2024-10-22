import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <NavigationBar />
                <div className="container">
                    <h1 className="my-4">CRUD App with React and MySQL</h1>
                    <Routes>
                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;