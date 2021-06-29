import styled from "styled-components";
import { CgScreenWide } from "react-icons/cg"

export const Container = styled.div`
    display: flex;
    flex-layout: row;
    padding: 0.5rem;
    background: var(--darkBg);
    color: var(--darkBgText);
    justify-context: center;
    align-items: flex-start;
`

export const Logo = styled(CgScreenWide)`
    font-size: var(--largeFont);
    margin-right: 1rem;
`

export const Brand = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--largeFont);
    font-family: monospace;
`;