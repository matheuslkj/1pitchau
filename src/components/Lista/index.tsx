import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"
import axios from "axios"


interface IContatos {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  obs: string;
}



export const Lista = () => {

  const [dataContatos, setDataProdutos] = useState<IContatos>()
  const { id } = useParams()

  useEffect(() => {

    axios.get(`http://localhost:3000/contatos/${id}`)
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
            <Col6>
              <h3>{dataContatos?.nome}</h3>
              <p
                style={{
                  textDecoration: 'line-through'
                }}
              >{dataContatos?.telefone}</p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
              >{dataContatos?.email}</p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
              >{dataContatos?.cidade}</p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
              >{dataContatos?.obs}</p>

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