import { Background } from "../../shared/styles/Background";

import { Hero } from "./ui/Hero";
import { InfoCards } from './ui/InfoCards';

export const Main = () => {
  return (
      <Background>
        <Hero/>
        <InfoCards/>
      </Background>
    );
}