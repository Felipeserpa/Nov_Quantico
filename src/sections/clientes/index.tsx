import Cards from '../../components/Cards/Cards';
import Container from './styles';

export default function cliente() {
  return (
    <Container>
      <section className="section-grey " id="cliente">
        <div className="container">
          <h1 className="section-title text-blue">Clientes</h1>
          <div className="section-container">
            <Cards />
          </div>
        </div>
      </section>
    </Container>
  );
}
