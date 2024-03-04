import styled from "styled-components";

export const SignUpButton = styled.button`
    height: 3rem;
    padding: 1rem;
    border: 1px solid #114B5F;
    border-radius: 0.5rem;
    background-color: #114B5F;
    color: #FFFFFF;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        transition: 200ms ease-in-out;
        background-color: #D8F5FF;
        color: #1C1C1C;
        border: 1px solid #1C1C1C;
    }

    @media screen and (max-width: 499px) {
        margin-bottom: 1rem;
    }
`