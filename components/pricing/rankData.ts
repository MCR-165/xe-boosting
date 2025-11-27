export interface Rank {
  id: string;
  name: string;
  tier: string;
  division: number;
  price: number | null;
}

export const ranks: Rank[] = [
  { id: 'iron1', name: 'Iron 1', tier: 'Iron', division: 1, price: 30 },
  { id: 'iron2', name: 'Iron 2', tier: 'Iron', division: 2, price: 30 },
  { id: 'iron3', name: 'Iron 3', tier: 'Iron', division: 3, price: 30 },
  { id: 'bronze1', name: 'Bronze 1', tier: 'Bronze', division: 1, price: 30 },
  { id: 'bronze2', name: 'Bronze 2', tier: 'Bronze', division: 2, price: 50 },
  { id: 'bronze3', name: 'Bronze 3', tier: 'Bronze', division: 3, price: 50 },
  { id: 'silver1', name: 'Silver 1', tier: 'Silver', division: 1, price: 65 },
  { id: 'silver2', name: 'Silver 2', tier: 'Silver', division: 2, price: 70 },
  { id: 'silver3', name: 'Silver 3', tier: 'Silver', division: 3, price: 70 },
  { id: 'gold1', name: 'Gold 1', tier: 'Gold', division: 1, price: 80 },
  { id: 'gold2', name: 'Gold 2', tier: 'Gold', division: 2, price: 100 },
  { id: 'gold3', name: 'Gold 3', tier: 'Gold', division: 3, price: 110 },
  { id: 'plat1', name: 'Platinum 1', tier: 'Platinum', division: 1, price: 120 },
  { id: 'plat2', name: 'Platinum 2', tier: 'Platinum', division: 2, price: 150 },
  { id: 'plat3', name: 'Platinum 3', tier: 'Platinum', division: 3, price: 170 },
  { id: 'dia1', name: 'Diamond 1', tier: 'Diamond', division: 1, price: 190 },
  { id: 'dia2', name: 'Diamond 2', tier: 'Diamond', division: 2, price: 240 },
  { id: 'dia3', name: 'Diamond 3', tier: 'Diamond', division: 3, price: 280 },
  { id: 'asc1', name: 'Ascendant 1', tier: 'Ascendant', division: 1, price: 330 },
  { id: 'asc2', name: 'Ascendant 2', tier: 'Ascendant', division: 2, price: 350 },
  { id: 'asc3', name: 'Ascendant 3', tier: 'Ascendant', division: 3, price: 450 },
  { id: 'imm1', name: 'Immortal 1', tier: 'Immortal', division: 1, price: 600 },
  { id: 'imm2', name: 'Immortal 2', tier: 'Immortal', division: 2, price: 750 },
  { id: 'imm3', name: 'Immortal 3', tier: 'Immortal', division: 3, price: 1100 },
  { id: 'radiant', name: 'Radiant', tier: 'Radiant', division: 1, price: null }
];

export const tierColors = {
  Iron: 'from-gray-600 to-gray-700',
  Bronze: 'from-amber-700 to-amber-800',
  Silver: 'from-gray-400 to-gray-500',
  Gold: 'from-yellow-500 to-yellow-600',
  Platinum: 'from-cyan-500 to-cyan-600',
  Diamond: 'from-purple-500 to-purple-600',
  Ascendant: 'from-green-500 to-green-600',
  Immortal: 'from-red-600 to-red-700',
  Radiant: 'from-yellow-300 to-yellow-400'
};

export const priceCardData = [
  {
    tier: 'Iron',
    nextTier: 'Bronze',
    tierColor: 'from-gray-600 to-gray-700',
    boosts: [
      { fromRank: 'Iron 1', toRank: 'Iron 2', price: 30 },
      { fromRank: 'Iron 2', toRank: 'Iron 3', price: 30 },
      { fromRank: 'Iron 3', toRank: 'Bronze 1', price: 30 }
    ]
  },
  {
    tier: 'Bronze',
    nextTier: 'Silver',
    tierColor: 'from-amber-700 to-amber-800',
    boosts: [
      { fromRank: 'Bronze 1', toRank: 'Bronze 2', price: 50 },
      { fromRank: 'Bronze 2', toRank: 'Bronze 3', price: 50 },
      { fromRank: 'Bronze 3', toRank: 'Silver 1', price: 65 }
    ]
  },
  {
    tier: 'Silver',
    nextTier: 'Gold',
    tierColor: 'from-gray-400 to-gray-500',
    boosts: [
      { fromRank: 'Silver 1', toRank: 'Silver 2', price: 70 },
      { fromRank: 'Silver 2', toRank: 'Silver 3', price: 70 },
      { fromRank: 'Silver 3', toRank: 'Gold 1', price: 80 }
    ]
  },
  {
    tier: 'Gold',
    nextTier: 'Platinum',
    tierColor: 'from-yellow-500 to-yellow-600',
    boosts: [
      { fromRank: 'Gold 1', toRank: 'Gold 2', price: 100 },
      { fromRank: 'Gold 2', toRank: 'Gold 3', price: 110 },
      { fromRank: 'Gold 3', toRank: 'Platinum 1', price: 120 }
    ]
  },
  {
    tier: 'Platinum',
    nextTier: 'Diamond',
    tierColor: 'from-cyan-500 to-cyan-600',
    boosts: [
      { fromRank: 'Platinum 1', toRank: 'Platinum 2', price: 150 },
      { fromRank: 'Platinum 2', toRank: 'Platinum 3', price: 170 },
      { fromRank: 'Platinum 3', toRank: 'Diamond 1', price: 190 }
    ]
  },
  {
    tier: 'Diamond',
    nextTier: 'Ascendant',
    tierColor: 'from-purple-500 to-purple-600',
    boosts: [
      { fromRank: 'Diamond 1', toRank: 'Diamond 2', price: 240 },
      { fromRank: 'Diamond 2', toRank: 'Diamond 3', price: 280 },
      { fromRank: 'Diamond 3', toRank: 'Ascendant 1', price: 330 }
    ]
  },
  {
    tier: 'Ascendant',
    nextTier: 'Immortal',
    tierColor: 'from-green-500 to-green-600',
    boosts: [
      { fromRank: 'Ascendant 1', toRank: 'Ascendant 2', price: 350 },
      { fromRank: 'Ascendant 2', toRank: 'Ascendant 3', price: 450 },
      { fromRank: 'Ascendant 3', toRank: 'Immortal 1', price: 600 }
    ]
  },
  {
    tier: 'Immortal 1',
    nextTier: 'Immortal 3',
    tierColor: 'from-red-600 to-red-700',
    boosts: [
      { fromRank: 'Immortal 1', toRank: 'Immortal 2', price: 750 },
      { fromRank: 'Immortal 2', toRank: 'Immortal 3', price: 1100 }
    ]
  },
  {
    tier: 'Immortal 3',
    nextTier: 'Radiant',
    tierColor: 'from-yellow-300 to-yellow-400',
    boosts: [
      { fromRank: 'Immortal 3', toRank: 'Radiant', price: null }
    ]
  }
];