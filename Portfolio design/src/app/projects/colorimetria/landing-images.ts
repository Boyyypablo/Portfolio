const u = (id: string, w: number, h?: number) => {
  const size = h ? `w=${w}&h=${h}&fit=crop` : `w=${w}&fit=crop`;
  return `https://images.unsplash.com/${id}?${size}&auto=format&q=70`;
};

export const LANDING_IMAGES = {
  hero: u("photo-1563170446-9c3c0622d8a9", 720, 900),
  serviceColor: u("photo-1596704017254-9b121068fb31", 480, 320),
  serviceMakeup: u("photo-1762745176875-b448ee7b8942", 480, 320),
  serviceVisual: u("photo-1618244965061-1d27b208d6e8", 480, 320),
  serviceFashion: u("photo-1567401893414-76b7b1e5a7a5", 480, 320),
  about: u("photo-1525845859779-54d477ff291f", 520, 650),
  stripMakeup: u("photo-1709477542149-f4e0e21d590b", 560, 400),
  stripFashion: u("photo-1662532577856-e8ee8b138a8b", 560, 400),
  stripColor: u("photo-1542833807-ad5af0977050", 560, 400),
} as const;

export const LANDING_SEASON_SWATCHES = [
  "#C4704A",
  "#E8C4A0",
  "#8FA0B0",
  "#7A9180",
  "#B8A0C8",
  "#D4B060",
  "#9A6878",
  "#A0B890",
] as const;
