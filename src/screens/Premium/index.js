import React from "react";

import { FlatList } from "react-native";

import PremiumCardsComparation from "../../components/PremiumCardsComparation";
import PremiumCards from "../../components/PremiumCards";

import {
  Container,
  ContainerGradient,
  TitlePromotion,
  TextPlansPremium,
  ContainerCurrentPlan,
  TextCurrentPlan
} from "./styles";

const PlansComparation = [
  {
    id: 1,
    DescriptionPlanFree: "Ads between songs",
    DescriptionPlanPremium: "Music without advertising"
  },
  {
    id: 2,
    DescriptionPlanFree: "listen in random order",
    DescriptionPlanPremium: "Listen to any song"
  },
  {
    id: 3,
    DescriptionPlanFree: "Skips 6 tracks per hour",
    DescriptionPlanPremium: "Skip as many tracks as you like"
  },
  {
    id: 4,
    DescriptionPlanFree: "Streaming music only",
    DescriptionPlanPremium: "Offline playback"
  },
  {
    id: 5,
    DescriptionPlanFree: "Basic audio quality",
    DescriptionPlanPremium: "High quality audio"
  }
];

const Plans = [
  {
    id: 1,
    namePlan: "Spotify Premium",
    description:
      "Try Premium for 30 days • Ad-free music • Offline listening • Cancel anytime",
    colorGradientStart: "#06624D",
    colorGradientEnd: "#14A96B"
  },
  {
    id: 2,
    namePlan: "Premium for Students",
    description:
      "Low student price • Ad-Free music • Offline listening • Cancel anytime",
    colorGradientStart: "#E38D38",
    colorGradientEnd: "#DD8C3D"
  },
  {
    id: 3,
    namePlan: "Premium Duo",
    description:
      "2 Premium accounts • Duo Mix: shared playlist for two • Ad-Free music • Offline listening • enjoy the sound on demand • Cancel anytime",
    colorGradientStart: "#434C83",
    colorGradientEnd: "#578BBB"
  },
  {
    id: 4,
    namePlan: "Premium Family",
    description:
      "Up to 6 Premium accounts • Block music from playing with explained content • enjoy the sound on demand • Ad-Free music • Offline listening • Cancel anytime",
    colorGradientStart: "#2C3169",
    colorGradientEnd: "#812A88"
  }
];

export default function Premium() {
  return (
    <Container>
      <ContainerGradient>
        <TitlePromotion>
          Enjoy your music to the fullest with Premium
        </TitlePromotion>
        <FlatList
          data={PlansComparation}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <PremiumCardsComparation
              key={item.id}
              DescriptionPlanFree={item.DescriptionPlanFree}
              DescriptionPlanPremium={item.DescriptionPlanPremium}
            />
          )}
        />
        <TextPlansPremium>
          You can't upgrade to Premium in the app. We know, it's not ideal.
        </TextPlansPremium>
        <ContainerCurrentPlan>
          <TextCurrentPlan>Spotify Free</TextCurrentPlan>
          <TextCurrentPlan currentPlan>Current Plan</TextCurrentPlan>
        </ContainerCurrentPlan>
        {Plans.map(item => (
          <PremiumCards
            key={item.id}
            Plan={item.namePlan}
            Description={item.description}
            colorGradientStart={item.colorGradientStart}
            colorGradientEnd={item.colorGradientEnd}
          />
        ))}
      </ContainerGradient>
    </Container>
  );
}
