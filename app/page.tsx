import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from './_components/Spacing';

export default function Home() {
  return (
    <main>
      { /* Contenu de la page ici */}
      <Header />
      <Spacing size="md"/>
      <Hero />
    </main>
  );
}
