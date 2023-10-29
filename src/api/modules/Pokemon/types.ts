export interface AncientTrait {
  name: string;
  text: string;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface SetImage {
  symbol: string;
  logo: string;
}

export interface CardImage {
  small: string;
  large: string;
}

export enum Legality {
  LEGAL = 'Legal',
  BANNED = 'Banned',
}

export interface ILegality {
  expanded: Legality | undefined;
  standard: Legality | undefined;
  unlimited: Legality | undefined;
}

export interface Set {
  id: string;
  images: SetImage;
  legalities: Legality;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}

export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal: Price | undefined;
    holofoil: Price | undefined;
    reverseHolofoil: Price | undefined;
    '1stEditionNormal': Price | undefined;
    '1stEditionHolofoil': Price | undefined;
  };
}

export interface Price {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number | null;
    lowPrice: number | null;
    trendPrice: number | null;
    germanProLow: number | null;
    suggestedPrice: number | null;
    reverseHoloSell: number | null;
    reverseHoloLow: number | null;
    reverseHoloTrend: number | null;
    lowPriceExPlus: number | null;
    avg1: number | null;
    avg7: number | null;
    avg30: number | null;
    reverseHoloAvg1: number | null;
    reverseHoloAvg7: number | null;
    reverseHoloAvg30: number | null;
  };
}

export interface PokeCard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: AncientTrait;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: Set;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  regulationMark?: string;
  images: CardImage;
  tcgplayer?: TCGPlayer;
  cardmarket?: Cardmarket;
}

export interface FetchPokemonResponse {
  data: PokeCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
