export const mockRegions = Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => ({
      id: `${x}_${y}`,
      x, // Adiciona coordenadas
      y, // Adiciona coordenadas
      food: Math.floor(Math.random() * 100),
      iron: Math.floor(Math.random() * 100),
      wood: Math.floor(Math.random() * 100),
      stone: Math.floor(Math.random() * 100),
      owner: null,
    }))
  ).flat();
  
  export const mockCityDetails = Array.from({ length: 4 }, (_, y) =>
    Array.from({ length: 4 }, (_, x) => ({
      id: `${x}_${y}`,
      building: null, // Inicialmente, nenhuma construção
      resourceBonus: Math.floor(Math.random() * 50),
      x,
      y,
    }))
  ).flat();
  