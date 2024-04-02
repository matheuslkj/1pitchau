import React, { useEffect, useState } from "react"
import { Title, TitlePreco, TextPromo,Button, TextButton, CardBody  } from "./styles"
import axios from "axios";

interface IDataCard {
    id: number;
    nome: string;
    valor: number;
    promo: number;
    imagemg: string;
    imagemp: string;
  id_categoria: number;
  promoNumber: string
}


export const Cards:React.FC<IDataCard>= ({id, promo,valor,nome,imagemp}) => {
    
    return(
        <>
        <CardBody>
            
            <img src={imagemp} alt="" />
              <Title>{nome}</Title>
              <TitlePreco>{valor}</TitlePreco>
              <TextPromo>{promo}</TextPromo>
                        
              <Button>
                <TextButton>Detalhes</TextButton>
              </Button>
          </CardBody>
        </>
    )

}