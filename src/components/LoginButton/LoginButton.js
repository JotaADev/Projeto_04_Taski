import styled from "styled-components";

export const LoginButton = styled.a`
    color: #114B5F;
    font-weight: bold;
    margin-right: 1.5rem;

    &:hover {
        cursor: pointer;
        transition: 200ms ease-in-out;
        color: #1C1C1C;
    }

    @media screen and (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }
`