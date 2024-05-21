import './App.css'
import Nav from './components/Nav/Nav'
import Container from './components/Container/Container'
import Card from './components/Card/Card'
import md5 from 'md5'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DataContext from './context/DataContext'
import Paginacao from './components/Paginacao/Paginacao'
import { motion } from 'framer-motion'
import { AiOutlineLoading } from 'react-icons/ai'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const publicKey = '82b6db523bbb3a53d69407b1446418c6'
  const privateKey = '1e55101072ec2535e7792d9a0680210b7bbdf06f'
  const time = Number(new Date())
  const hash = md5(time + privateKey + publicKey)
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=${current}`

  async function chamarAPI() {
    const res = await axios.get(url)
    setData(res.data.data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    chamarAPI()
  }, [])

  return (
    <DataContext.Provider value={{ data, setData, current, setCurrent, url, setIsLoading }}>
      <Nav />
      <Container>
        {
          (isLoading)
            ?
            <motion.div
              animate={{ transition: { duration: 1, repeat: Infinity, ease: "linear" }, rotateZ: 360 }}
            >
              <AiOutlineLoading size={'2.5em'} color={'red'} />
            </motion.div>
            :
            data.map((personagem) => {
              return (
                <Card key={personagem.id} img={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} name={personagem.name} />
              )
            })
        }
      </Container>
      <Paginacao />
    </DataContext.Provider>
  )
}

export default App
