import { useBreakText } from '../../../../features/language/useBreakText';

import { InfoCard, InfoCardArrow, InfoCardFooter, InfoCardOverLay,
  InfoCardSubtitle, InfoCardTextBox, InfoCardTitle, InfoCardWrapper } from './ui/InfoCard';

export const InfoCards = () => {

  return (
    <InfoCardWrapper>
      <InfoCard $delay='.3s' $url='/images/info-cards/about.webp'>
        <InfoCardOverLay />
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_about')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardFooter>
          <InfoCardSubtitle>{useBreakText('info_cards_about_sub')}</InfoCardSubtitle>
          <InfoCardArrow src="/images/info-cards/arrow-top-right.svg" />
        </InfoCardFooter>
      </InfoCard>
      <InfoCard $delay='.4s' $url='/images/info-cards/skills.webp'>
        <InfoCardOverLay />
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_skillsets')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardFooter>
          <InfoCardSubtitle>{useBreakText('info_cards_skillsets_sub')}</InfoCardSubtitle>
          <InfoCardArrow src="/images/info-cards/arrow-top-right.svg" />
        </InfoCardFooter>
      </InfoCard>
      <InfoCard $delay='.5s' $url='/images/info-cards/projects.webp'>
        <InfoCardOverLay />
        <InfoCardTextBox>
          <InfoCardTitle>{useBreakText('info_cards_showcase')}</InfoCardTitle>
        </InfoCardTextBox>
        <InfoCardFooter>
          <InfoCardSubtitle>{useBreakText('info_cards_showcase_sub')}</InfoCardSubtitle>
          <InfoCardArrow src="/images/info-cards/arrow-top-right.svg" />
        </InfoCardFooter>
      </InfoCard>
    </InfoCardWrapper>
  );
}