import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Header  />
            <main style={{backgroundColor:"purple"}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

/*
imports the nav component which it then renders on the  root component which is returned as a route in the home page
*/