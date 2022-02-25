import { Container } from './styles';

interface SectionHeaderProps {
  sectionName: string;
}

export function SectionHeader({ sectionName }: SectionHeaderProps) {
  const nameArr = sectionName.split(' ');

  return (
    <Container>
      <h1>{nameArr[0]} {nameArr[1] ? <span>{nameArr[1]}</span> : ''}</h1>
    </Container>
  )
}