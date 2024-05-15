import styled from 'styled-components'

const Box = styled.div`
    width: 15rem;
    height: 20rem;
    border-radius: .3rem;
    overflow: hidden;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px #00000030;
    
    img{
        width: 90%;
        height: 85%;
        border-radius: .3rem;
        overflow: hidden;
        margin-top: .5rem;
    }
    `

const Details = styled.div`
    height: 10%;
    width: 100%;
    background-color: #CF0A0A;
    color: #EEEEEE;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Card = ({ img, name }) => {
    return (
        <Box>
            <img src={img} alt={img} />
            <Details>
                <h4>{name}</h4>
            </Details>
        </Box>

    )
}

export default Card