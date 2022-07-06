
export enum CARD_FACE {
    FRONT,
    BACK
};

export enum CARD_STATE {
    EDITABLE, USABLE
}

export type CardData = {
  id: number;
  title: string;
  frontText: string;
  backText: string;
};