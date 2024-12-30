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
  
  export const constructionMocks = {
    infra: [
      {
        name: 'Residência',
        description: 'A residência protege sua aldeia e permite criar novas aldeias.',
        costs: { food: 180, wood: 580, stone: 350, iron: 460 },
        buildTime: '31:00',
        prerequisites: 'Edifício Principal Nível 5',
        image: 'assets/buildings/residence.png',
      },
      {
        name: 'Armazém',
        description: 'Aumenta a capacidade de armazenamento de recursos.',
        costs: { food: 100, wood: 300, stone: 250, iron: 200 },
        buildTime: '15:00',
        prerequisites: 'Edifício Principal Nível 3',
        image: 'assets/buildings/warehouse.png',
      },
      {
        name: 'Armazém',
        description: 'Aumenta a capacidade de armazenamento de recursos.',
        costs: { food: 100, wood: 300, stone: 250, iron: 200 },
        buildTime: '15:00',
        prerequisites: 'Edifício Principal Nível 3',
        image: 'assets/buildings/warehouse.png',
      },
      {
        name: 'Armazém',
        description: 'Aumenta a capacidade de armazenamento de recursos.',
        costs: { food: 100, wood: 300, stone: 250, iron: 200 },
        buildTime: '15:00',
        prerequisites: 'Edifício Principal Nível 3',
        image: 'assets/buildings/warehouse.png',
      },
      {
        name: 'Armazém',
        description: 'Aumenta a capacidade de armazenamento de recursos.',
        costs: { food: 100, wood: 300, stone: 250, iron: 200 },
        buildTime: '15:00',
        prerequisites: 'Edifício Principal Nível 3',
        image: 'assets/buildings/warehouse.png',
      },
    ],
    militar: [
      {
        name: 'Quartel',
        description: 'Treine tropas para proteger sua aldeia.',
        costs: { food: 100, wood: 210, stone: 260, iron: 140 },
        buildTime: '20:00',
        prerequisites: 'Academia Nível 1',
        image: 'assets/buildings/barracks.png',
      },
      {
        name: 'Estábulo',
        description: 'Treine cavalaria para ataques rápidos.',
        costs: { food: 120, wood: 290, stone: 380, iron: 320 },
        buildTime: '40:00',
        prerequisites: 'Quartel Nível 5',
        image: 'assets/buildings/stable.png',
      },
    ],
    recursos: [
      {
        name: 'Fazenda',
        description: 'Produz trigo para sua aldeia.',
        costs: { food: 120, wood: 80, stone: 60, iron: 40 },
        buildTime: '10:00',
        prerequisites: 'Nenhum',
        image: 'assets/buildings/farm.png',
      },
      {
        name: 'Serraria',
        description: 'Produz madeira para construção.',
        costs: { food: 100, wood: 70, stone: 50, iron: 30 },
        buildTime: '08:00',
        prerequisites: 'Nenhum',
        image: 'assets/buildings/lumbermill.png',
      },
    ],
  };
  