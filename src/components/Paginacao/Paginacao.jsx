import { useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components'
import DataContext from '../../context/DataContext'
import axios from 'axios'

const Pagination = styled.section`
    margin-top: .5rem;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`
const Voltar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    background-color: white;
    padding: .5rem 1rem;
    box-shadow: 0 0 10px #00000013;
`
const Seguinte = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px #00000013;
    border-radius: .3rem;
    background-color: white;
    padding: .5rem 1rem;
    text-align: center;
    cursor: pointer;
`

const Paginacao = () => {
    const { current, setCurrent, setData, url, setIsLoading } = useContext(DataContext)

    async function chamarAPI() {
        setIsLoading(true)
        const res = await axios.get(url)
        setData(res.data.data.results)
        setIsLoading(false)
    }

    function voltar() {
        setData([])
        current === 0 ? setCurrent(current) : setCurrent(current - 20)
        chamarAPI()
    }

    function seguinte() {
        setData([])
        setCurrent(current + 20)
        chamarAPI()
    }

    return (
        <Pagination>
            <Voltar>
                <IoIosArrowBack size="30" color={'red'} onClick={() => voltar()} />
            </Voltar>

            <Seguinte>
                <IoIosArrowForward size="30" color={'red'} onClick={() => seguinte()} />
            </Seguinte>
        </Pagination>
    )
}

export default Paginacao

