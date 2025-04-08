import Container from '../../sections/clientes/styles';

export default function Cards() {
  const images = [
    { src: 'Rb.jpg', alt: 'Barbeiro', id: 'img1' },
    { src: 'GEL TOUR LOGO.png', alt: 'Logo Gel Tour', id: 'img3' },
    { src: 'moove.jpg', alt: 'Logo Moove', id: 'img4' },
    { src: 'Quantico.jpg', alt: 'Sinalização Quântico', id: 'img2' },
  ];

  return (
    <Container>
      <div className="image-container">
        {images.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} id={image.id} />
        ))}
      </div>
    </Container>
  );
}
