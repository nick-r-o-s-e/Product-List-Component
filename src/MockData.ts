export type Variety = {
  code: string;
  description: string;
  options: {
    code: string;
    description: string;
  }[];
};

export type Item = {
  code: string;
  description: string;
  varieties: string[];
};

export const MOCK_DATA: {
  varieties: Variety[];
  items: Item[];
} = {
  varieties: [
    {
      code: "SIZE",
      description: "Size",
      options: [
        { code: "S", description: "Small" },
        { code: "M", description: "Medium" },
        { code: "L", description: "Large" },
      ],
    },
    {
      code: "COLOR",
      description: "Color",
      options: [
        { code: "RED", description: "Red" },
        { code: "BLU", description: "Blue" },
        { code: "WHI", description: "White" },
      ],
    },
    {
      code: "SHOE-SIZE",
      description: "Shoe size",
      options: [
        { code: "37", description: "37" },
        { code: "38", description: "38" },
        { code: "39", description: "39" },
        { code: "40", description: "40" },
        { code: "41", description: "41" },
        { code: "42", description: "42" },
        { code: "43", description: "43" },
        { code: "44", description: "44" },
      ],
    },
  ],
  items: [
    {
      code: "0001",
      description: "T-Shirt Riga",
      varieties: ["COLOR", "SIZE"],
    },
    {
      code: "0002",
      description: "T-Shirt with sun",
      varieties: ["SIZE"],
    },
    {
      code: "1001",
      description: "Boots 'Great Stuff'",
      varieties: ["SHOE-SIZE"],
    },
    {
      code: "1002",
      description: "Sliders with flowers",
      varieties: ["COLOR", "SHOE-SIZE"],
    },
    {
      code: "2001",
      description: "Black pen",
      varieties: [],
    },
  ],
};
