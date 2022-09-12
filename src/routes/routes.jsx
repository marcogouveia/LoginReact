import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home"
import { Signin } from "../pages/Signin"
import { Signup } from "../pages/Signup"

import { useAuth } from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />
}

export const RoutesApp = () => {
    return (

        <BrowserRouter>
            <Routes>
                <>
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                </>
            </Routes>
        </BrowserRouter>

    )
}