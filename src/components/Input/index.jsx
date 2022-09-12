import * as Styled from "./styles";

export const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <Styled.Input value={value} onChange={onChange} type={type} placeholder={placeholder} />
    )
}