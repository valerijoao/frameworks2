import { Container, Table} from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes() {
    return <>
        <Menu />
        <Container>
            <Container className="border border-success rounded-pill text-center col-sm-6 m-2">
                Lista de Produtos de Esportes
            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                       {/* laço for  */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </Table>
            </Container>
        </Container>
        <Footer />
    </>
}