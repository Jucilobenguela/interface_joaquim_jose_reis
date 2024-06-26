import ContainerImgProduto from "./second_componentes/ContainerImgProduto"
import Radio from "./Radio"
import Label from "./Label"
import Navigation from "./Navigation"
import { initializeSlider } from "../JavaScript"
import { useEffect } from "react"

function Slides() {
    useEffect(() => {
     initializeSlider()
    }, [])
    
    return (
        <div className="slider">
            <div className="slides">
                <Radio id="radio1" />
                <Radio id="radio2" />
                <Radio id="radio3" />
                <Radio id="radio4" />

                < ContainerImgProduto className="img-produto first" img="trussP4.png" descrition="O Truss Deluxe Prime Champagne Blond é um tratamento ideal para cabelos loiros, com madeixas ou grisalhos. A sua fórmula com Pigmentos Violetas neutraliza os tons amarelados, enquanto hidrata e repara o cabelo danificado." />
                < ContainerImgProduto img="/trussP1.png" descrition="O Truss Blond Condicionador é ideal para cabelos loiros, grisalhos e descoloridos. A sua fórmula com Blend de Pigmentos Violeta neutraliza os tons alaranjados causados pela oxidação provocada por agressões externas do dia-a-dia, enquanto hidrata a fibra capilar." />
                < ContainerImgProduto img="/trussP2.png" descrition="O Truss Curly Shampoo é perfeito para cabelos ondulados e encaracolados. A sua fórmula com Óleo de Abacate e Queratina limpa e hidrata profundamente o cabelo." />
                < ContainerImgProduto img="/trussP5.png" descrition="O Truss Finalizadores Amino Spray é um finalizador que se adequa a todos os tipos de cabelo. A sua fórmula protege o cabelo contra os danos das ferramentas de calor e ajuda a desembaraçar os fios. " />
                <div className="navigation">
                    <Navigation className="auto-btn1" />
                    <Navigation className="auto-btn2" />
                    <Navigation className="auto-btn3" />
                    <Navigation className="auto-btn4" />
                </div>

            </div>

            <div className="container-label">
                <Label name="radio1" />
                <Label name="radio2" />
                <Label name="radio3" />
                <Label name="radio4" />
            </div>
        </div>


    )
}
export default Slides