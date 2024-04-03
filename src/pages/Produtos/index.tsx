import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"
import axios from "axios"


interface IDataProdutos {
  id: number;
  nome: string;
  valor: number;
  promo: number;
  imagemg: string;
  imagemp: string;
id_categoria: number;
promoNumber: string
}



export const Produtos = () => {

  const [dataProdutos, setDataProdutos] = useState<IDataProdutos>()
  const { id } = useParams()

  useEffect(() => {

    axios.get(`http://localhost:3000/produtos/${id}`)
      .then((res) => {
        setDataProdutos(res.data)
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
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <>
          <h1>Produto</h1>
          <Row>
            <Col4>
              <img
                style={{
                  width: '100%'
                }}
                src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + dataProdutos?.imagemg}
              />
            </Col4>
            <Col6>
              <h3>{dataProdutos?.nome}</h3>
              <p
                style={{
                  textDecoration: 'line-through'
                }}
              >{dataProdutos?.promo}</p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
              >{dataProdutos?.valor}</p>

              <form>
                <Input
                  type="number"
                  name="quantidade"
                  defaultValue={1}
                  min="1"
                  required
                />

                <Button>
                  <TextButton>
                    Adicionar ao Carrinho
                  </TextButton>
                </Button>
              </form>
            </Col6>
          </Row>
        </>

      </div>
    </>
  )
}