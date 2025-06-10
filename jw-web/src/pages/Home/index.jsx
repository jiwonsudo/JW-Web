import { Background } from "../../shared/styles/Background";

import { Hero } from "./ui/Hero";
import { InfoPreview } from './ui/InfoPreview';

export const Home = () => {
  return (
      <Background>
        <Hero/>
        <InfoPreview/>
      </Background>
    );
}