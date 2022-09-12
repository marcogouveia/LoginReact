import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as styled from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Signin = () => {

    const { Signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = () => {
        if(!email || !password){
            setError("Preencha todos os dados");
            return;
        }

        const resposta = Signin(email, password);

        if(resposta){
            setError(resposta)
            return;
        }
       
        navigate("/home");
        
    }

    return (
        <styled.Container>
            <styled.Label>Login System</styled.Label>
            <styled.Content>
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]} />
                <Input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]} />
                <styled.labelError>{error}</styled.labelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <styled.LabelSignup>
                    Não tem uma conta?
                    <styled.Strong>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </styled.Strong>
                </styled.LabelSignup>
            </styled.Content>
        </styled.Container>
    )
}

