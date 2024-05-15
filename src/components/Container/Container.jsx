import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'

const Box = styled.section`
    width: 66%;
    height: 68vh;
    background-color: white;
    box-shadow: 0 0 10px #00000013;
    margin: auto;
    margin-top: 7rem;
    padding: 2rem 1rem;
    border-radius: .7rem;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;

    &::-webkit-scrollbar{
        width: 0;
    }
`


const Container = ({ children }) => {
    return (
        <>
            <Box>
                <Fade cascade damping={0.1}>
                    {children}
                </Fade>

            </Box>
        </>
    )
}

export default Container