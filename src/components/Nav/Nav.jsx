import styled from 'styled-components'
import Img from './icons8-marvel-240.png'

const Container = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CF0A0A;
    color: #fff;
    font-size: .9rem;
    position: fixed;
    z-index: 2;
    padding: 1rem;
    margin-bottom: 1rem;
    `
    
const Nav = () => {
    return (
        <Container>
            <img src={Img} width="140px" />
        </Container>
    )
}

export default Nav