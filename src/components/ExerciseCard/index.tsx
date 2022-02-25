import { Container } from "./styles";

interface ExerciseCardProps {
  cardData: {
    src: string;
    alt: string;
    name: string;
    type: string;
  }
}

export function ExerciseCard({ cardData }: ExerciseCardProps) {
  return (
    <Container>
      <img src={cardData.src} alt={cardData.alt} />
      <h1>{cardData.name}</h1>
      <p className="type">{cardData.type}</p>
    </Container>
  )
}