import * as styled from "./styles";

export const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <styled.Button type={Type} onClick={onClick}>
            {Text}
        </styled.Button>
    )
}