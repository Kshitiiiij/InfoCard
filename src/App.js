import React from "react"
import Info from "./components/info"
import About from "./components/about"
import Footer from "./components/footer"



export default function App() {
        return(
            <div className = "container">
                <Info />
                <About />
                <Footer />
            </div>
        )
    
}