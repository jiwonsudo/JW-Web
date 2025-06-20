import { Background } from "../../shared/styles/Background";

import { Hero } from "./ui/Hero";
import { InfoCards } from './ui/InfoCards';
import { About } from './ui/About';

export const Main = () => {
  return (
      <Background>
        <Hero/>
        <InfoCards/>
        <About/>
      </Background>
    );
}