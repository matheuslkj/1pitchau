import { useEffect, useState } from "react"
import { Cards } from "../../components/Card"
import { Menu } from "../../components/Menu"
import { Title, TitlePreco, TextPromo, Button, TextButton, CardBody } from "./styles"
import axios from "axios"
interface IProdutos {
  id: number;
  nome: string;
  valor: number;
  promo: number;
  imagemg: string;
  imagemp: string;
  id_categoria: number;
  promoNumber: string
}


export const Home = () => {

  const [dataCard, setDataCard] = useState<Array<IProdutos>>([])


  useEffect(() => {

    axios.get('http://localhost:3000/produtos')
      .then((res) => {
        setDataCard(res.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])
  return (
    <>

      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',

        }}
      >
        <h2>Produtos em Destaque</h2>
        <div
          style={{
            display: 'flex',
            flexWrap:'wrap',
            justifyContent: 'center'
          }}
        >
          {
            dataCard.map((card) => {
              return (
                <Cards id={card.id} nome={card.nome} valor={card.valor} promo={card.promo} imagemp={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + card.imagemp}/>

              )
            })
          }
        </div>
      </div>
    </>
  )
}
