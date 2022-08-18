import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Projects,
  PPosts,
  PPost,
  Ventures,
  Posts,
  Post,
} from "./components";
import {createContext, useState} from "react";
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

export function App() {
    const [theme, SetTheme] = useState("light");

    const toggleTheme = () => {
        SetTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className="App" id={theme}>
                <Router>
                    <Navigation />
                    
                        <div class='switchcontainer'>
                            <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === 'dark'}/>
                        </div>
                        <div class='textcontainer'>
                            <p class='mode-text'>{theme === 'light'? 'Light Mode' : 'Dark Mode'}</p>
                        
                    </div>          
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />}>
                            <Route path="" element={<PPosts />} />
                            <Route path=":postSlug" element={<PPost />} />
                        </Route>
                        <Route path="/ventures" element={<Ventures />}>
                            <Route path="" element={<Posts />} />
                            <Route path=":postSlug" element={<Post />} />
                        </Route>
                    </Routes>
                </Router>,
            </div>
        </ThemeContext.Provider>
    )
}
