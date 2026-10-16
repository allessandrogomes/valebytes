import { City } from "@/types/City";
import { cities } from "./cities";

const STATE_NAMES: Record<string, string> = {
  AL: "Alagoas",
  BA: "Bahia",
  CE: "Ceará",
  MA: "Maranhão",
  PB: "Paraíba",
  PE: "Pernambuco",
  PI: "Piauí",
  RN: "Rio Grande do Norte",
  SE: "Sergipe",
};

export type StateGroup = {
  stateCode: string;
  stateName: string;
  cities: City[];
};

export function getCitiesByState(): StateGroup[] {
  const stateCodes = [...new Set(cities.map((city) => city.state))].sort();

  return stateCodes.map((stateCode) => ({
    stateCode,
    stateName: STATE_NAMES[stateCode] ?? stateCode,
    cities: cities.filter((city) => city.state === stateCode),
  }));
}
