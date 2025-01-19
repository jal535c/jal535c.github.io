const PATTERNS = [
  {
    id: 925,
    pattern: [
      ['yellow', 'yellow', 'blue', 'pink', 'white'],
      ['yellow', 'pink', 'pink', 'blue', 'pink'],
      ['blue', 'white', 'white', 'pink', 'pink'],
      ['pink', 'pink', 'yellow', 'white', 'blue'],
      ['blue', 'blue', 'pink', 'white', 'white']
    ],
    attempts: 9
  },
  {
    id: 11,
    pattern: [
      ['pink', 'pink', 'white', 'pink', 'white'],
      ['blue', 'blue', 'blue', 'pink', 'blue'],
      ['blue', 'blue', 'white', 'blue', 'pink'],
      ['pink', 'pink', 'blue', 'pink', 'yellow'],
      ['blue', 'pink', 'blue', 'blue', 'blue']
    ],
    attempts: 8
  },
  {
    id: 922,
    pattern: [
      ['yellow', 'pink', 'yellow', 'pink', 'pink'],
      ['blue', 'blue', 'white', 'blue', 'pink'],
      ['blue', 'yellow', 'pink', 'yellow', 'blue'],
      ['blue', 'white', 'pink', 'yellow', 'yellow'],
      ['pink', 'blue', 'pink', 'white', 'blue']
    ],
    attempts: 8
  },
  {
    id: 923,
    pattern: [
      ['white', 'blue', 'blue', 'white', 'blue'],
      ['blue', 'blue', 'pink', 'blue', 'blue'],
      ['blue', 'white', 'blue', 'yellow', 'blue'],
      ['blue', 'pink', 'white', 'blue', 'pink'],
      ['blue', 'yellow', 'pink', 'yellow', 'pink']
    ],
    attempts: 8
  },
  {
    id: 924,
    pattern: [
      ['white', 'pink', 'pink', 'yellow', 'white'],
      ['white', 'blue', 'pink', 'blue', 'white'],
      ['white', 'white', 'blue', 'blue', 'white'],
      ['pink', 'pink', 'white', 'pink', 'yellow'],
      ['blue', 'yellow', 'blue', 'blue', 'pink']
    ],
    attempts: 9
  },
  {
    id: 929,
    pattern: [
      ['pink', 'pink', 'blue', 'white', 'blue'],
      ['white', 'yellow', 'yellow', 'blue', 'white'],
      ['pink', 'white', 'white', 'yellow', 'white'],
      ['blue', 'yellow', 'yellow', 'pink', 'white'],
      ['white', 'white', 'white', 'yellow', 'pink']
    ],
    attempts: 9
  },
  {
    id: 930,
    pattern: [
      ['pink', 'yellow', 'blue', 'blue', 'pink'],
      ['yellow', 'pink', 'yellow', 'white', 'blue'],
      ['white', 'pink', 'white', 'white', 'pink'],
      ['pink', 'yellow', 'pink', 'yellow', 'pink'],
      ['pink', 'white', 'pink', 'white', 'white']
    ],
    attempts: 8
  },
  {
    id: 12,
    pattern: [
      ['blue', 'pink', 'pink', 'pink', 'blue'],
      ['white', 'yellow', 'blue', 'blue', 'white'],
      ['white', 'yellow', 'pink', 'blue', 'white'],
      ['blue', 'blue', 'white', 'white', 'white'],
      ['yellow', 'white', 'yellow', 'white', 'yellow']
    ],
    attempts: 9
  },
  {
    id: 41,
    pattern: [
      ['white', 'white', 'pink', 'white', 'yellow'],
      ['yellow', 'blue', 'blue', 'yellow', 'pink'],
      ['yellow', 'blue', 'blue', 'blue', 'blue'],
      ['blue', 'pink', 'pink', 'white', 'blue'],
      ['white', 'white', 'pink', 'blue', 'white']
    ],
    attempts: 11
  },
  {
    id: 42,
    pattern: [
      ['yellow', 'blue', 'blue', 'pink', 'blue'],
      ['blue', 'blue', 'blue', 'blue', 'yellow'],
      ['pink', 'yellow', 'yellow', 'yellow', 'yellow'],
      ['yellow', 'blue', 'pink', 'blue', 'pink'],
      ['pink', 'yellow', 'pink', 'pink', 'blue']
    ],
    attempts: 9
  },
  {
    id: 43,
    pattern: [
      ['blue', 'white', 'yellow', 'yellow', 'yellow'],
      ['blue', 'yellow', 'white', 'blue', 'yellow'],
      ['blue', 'blue', 'yellow', 'white', 'white'],
      ['blue', 'white', 'blue', 'pink', 'yellow'],
      ['yellow', 'pink', 'yellow', 'blue', 'yellow']
    ],
    attempts: 9
  },
  {
    id: 931,
    pattern: [
      ['pink', 'yellow', 'pink', 'yellow', 'pink'],
      ['white', 'pink', 'yellow', 'pink', 'pink'],
      ['yellow', 'pink', 'pink', 'white', 'blue'],
      ['white', 'yellow', 'white', 'pink', 'pink'],
      ['white', 'white', 'blue', 'pink', 'pink']
    ],
    attempts: 8
  },
  {
    id: 932,
    pattern: [
      ['blue', 'blue', 'blue', 'pink', 'white'],
      ['pink', 'pink', 'blue', 'white', 'blue'],
      ['pink', 'blue', 'pink', 'pink', 'yellow'],
      ['pink', 'yellow', 'yellow', 'blue', 'white'],
      ['blue', 'pink', 'white', 'white', 'white']
    ],
    attempts: 9
  },
  {
    id: 53,
    pattern: [
      ["pink", "pink", "white", "white", "pink"],
      ["pink", "white", "white", "blue", "white"],
      ["pink", "blue", "blue", "yellow", "blue"],
      ["blue", "yellow", "blue", "yellow", "white"],
      ["pink", "pink", "pink", "blue", "white"]
    ],
    attempts: 9
  },
  {
    id: 57,
    pattern: [
      ["white", "blue", "blue", "blue", "pink"],
      ["white", "yellow", "white", "blue", "pink"],
      ["yellow", "blue", "pink", "blue", "pink"],
      ["pink", "pink", "pink", "white", "white"],
      ["white", "yellow", "blue", "yellow", "yellow"]
    ],
    attempts: 10
  },
  {
    id: 59,
    pattern: [
      ["pink", "yellow", "pink", "yellow", "yellow"],
      ["blue", "yellow", "yellow", "white", "white"],
      ["blue", "yellow", "white", "blue", "blue"],
      ["white", "blue", "blue", "white", "white"],
      ["white", "yellow", "white", "pink", "white"]  
    ],
    attempts: 8
  },
  {
    id: 60,
    pattern: [
      ["pink", "white", "blue", "yellow", "blue"],
      ["pink", "blue", "blue", "white", "blue"],
      ["blue", "white", "yellow", "yellow", "pink"],
      ["pink", "blue", "blue", "yellow", "pink"],
      ["pink", "yellow", "white", "pink", "white"]    
    ],
    attempts: 11
  },
  {
    id: 61,
    pattern: [
      ["white", "blue", "white", "pink", "pink"],
      ["pink", "yellow", "blue", "yellow", "pink"],
      ["pink", "pink", "yellow", "yellow", "white"],
      ["pink", "white", "yellow", "white", "blue"],
      ["pink", "yellow", "blue", "yellow", "white"]      
    ],
    attempts: 10
  },
  {
    id: 62,
    pattern: [
      ["pink", "yellow", "blue", "yellow", "yellow"],
      ["pink", "blue", "yellow", "white", "blue"],
      ["white", "white", "white", "yellow", "white"],
      ["white", "blue", "pink", "white", "blue"],
      ["white", "pink", "yellow", "pink", "pink"]     
    ],
    attempts: 9
  },
  {
    id: 63,
    pattern: [
      ["yellow", "blue", "pink", "blue", "blue"],
      ["white", "blue", "blue", "yellow", "yellow"],
      ["pink", "white", "white", "white", "yellow"],
      ["white", "blue", "yellow", "pink", "white"],
      ["yellow", "pink", "pink", "yellow", "pink"]     
    ],
    attempts: 11
  },
  {
    id: 933,
    pattern: [
      ["pink", "yellow", "blue", "pink", "yellow"],
      ["blue", "blue", "yellow", "yellow", "blue"],
      ["pink", "white", "yellow", "pink", "blue"],
      ["yellow", "pink", "pink", "blue", "yellow"],
      ["pink", "white", "white", "blue", "white"]     
    ],
    attempts: 9
  },
  {
    id: 937,
    pattern: [
      ["pink", "white", "blue", "blue", "blue"],
      ["pink", "yellow", "blue", "white", "yellow"],
      ["blue", "yellow", "blue", "yellow", "yellow"],
      ["blue", "blue", "white", "white", "pink"],
      ["pink", "pink", "blue", "yellow", "white"]     
    ],
    attempts: 9
  },
  {
    id: 64,
    pattern: [
      ["pink", "pink", "white", "white", "yellow"],
      ["pink", "yellow", "blue", "pink", "pink"],
      ["white", "pink", "pink", "yellow", "yellow"],
      ["white", "white", "yellow", "blue", "blue"],
      ["blue", "yellow", "white", "white", "pink"]     
    ],
    attempts: 10
  },
  {
    id: 65,
    pattern: [
      ["blue", "pink", "blue", "yellow", "pink"],
      ["blue", "blue", "yellow", "yellow", "blue"],
      ["yellow", "pink", "blue", "white", "pink"],
      ["white", "yellow", "yellow", "blue", "white"],
      ["blue", "yellow", "white", "blue", "pink"]     
    ],
    attempts: 11
  },
  {
    id: 66,
    pattern: [
      ["pink", "yellow", "blue", "yellow", "pink"],
      ["pink", "blue", "white", "yellow", "white"],
      ["white", "pink", "pink", "blue", "yellow"],
      ["blue", "white", "pink", "yellow", "yellow"],
      ["white", "yellow", "blue", "pink", "yellow"]     
    ],
    attempts: 11
  },
  {
    id: 938,
    pattern: [
      ["pink", "blue", "white", "white", "pink"],
      ["pink", "yellow", "blue", "pink", "pink"],
      ["blue", "pink", "yellow", "blue", "white"],
      ["white", "pink", "blue", "white", "white"],
      ["blue", "blue", "white", "pink", "blue"]     
    ],
    attempts: 9
  },
  {
    id: 69,
    pattern: [
      ["blue", "blue", "blue", "yellow", "white"],
      ["blue", "white", "yellow", "pink", "yellow"],
      ["pink", "yellow", "white", "pink", "white"],
      ["white", "white", "pink", "blue", "blue"],
      ["pink", "white", "white", "blue", "white"]     
    ],
    attempts: 9
  },
  {
    id: 70,
    pattern: [
      ["white", "white", "white", "white", "pink"],
      ["white", "yellow", "yellow", "pink", "white"],
      ["pink", "pink", "blue", "blue", "white"],
      ["white", "white", "blue", "blue", "white"],
      ["yellow", "white", "white", "yellow", "blue"]     
    ],
    attempts: 8
  },
  {
    id: 71,
    pattern: [
      ["blue", "blue", "white", "white", "yellow"],
      ["pink", "blue", "white", "pink", "blue"],
      ["blue", "pink", "blue", "blue", "pink"],
      ["white", "white", "white", "pink", "white"],
      ["pink", "blue", "yellow", "yellow", "white"]   
    ],
    attempts: 11
  },
  {
    id: 72,
    pattern: [
      ["blue", "blue", "white", "white", "blue"],
      ["yellow", "blue", "blue", "yellow", "pink"],
      ["pink", "pink", "white", "blue", "pink"],
      ["pink", "blue", "yellow", "pink", "blue"],
      ["blue", "yellow", "blue", "yellow", "yellow"]     
    ],
    attempts: 10
  },
  {
    id: 73,
    pattern: [
      ["blue", "yellow", "pink", "yellow", "white"],
      ["yellow", "blue", "blue", "pink", "yellow"],
      ["blue", "pink", "yellow", "pink", "pink"],
      ["yellow", "blue", "pink", "blue", "pink"],
      ["blue", "yellow", "pink", "pink", "yellow"]     
    ],
    attempts: 9
  }
  
];