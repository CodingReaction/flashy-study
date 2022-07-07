
// Is the card flipped to check the answer?
export enum CARD_FACE {
    FRONT,
    BACK
};

// Could we edit the card or is in preview mode?
export enum CARD_STATE {
    EDITABLE, USABLE
}

// Basic fields that any card should contain
export type CardData = {
  id: number;
  title: string;
  frontText: string;
  backText: string;
};

// Card***Pack is used to have a generic way of restrict which fields of a Card models could be edited by a general updateCard function
export type CardTitlePack = {
  propName: "title";
  value: string;
};

export type CardTextPack = {
  propName: "frontText" | "backText";
  value: string;
};

export type CardDataUpdatable = CardTitlePack | CardTextPack;
