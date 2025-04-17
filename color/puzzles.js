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
  },
  {
    id: 939,
    pattern: [
      [ "blue", "blue", "yellow", "yellow", "pink" ],
      [ "blue", "yellow", "white", "blue", "yellow" ],
      [ "yellow", "white", "blue", "yellow", "blue" ],
      [ "yellow", "pink", "white", "white", "pink" ],
      [ "blue", "blue", "blue", "pink", "yellow" ]
           
    ],
    attempts: 10
  },
  {
    id: 943,
    pattern: [
      [ "yellow", "yellow", "pink", "pink", "white" ],
      [ "blue", "blue", "yellow", "yellow", "white" ],
      [ "pink", "white", "pink", "pink", "pink" ],
      [ "white", "yellow", "blue", "yellow", "yellow" ],
      [ "white", "pink", "white", "blue", "pink" ]
    ],
    attempts: 10
  },
  {
    id: 944,
    pattern: [
      [ "yellow", "yellow", "blue", "pink", "pink" ],
      [ "blue", "white", "blue", "yellow", "yellow" ],
      [ "white", "white", "pink", "pink", "yellow" ],
      [ "white", "blue", "pink", "pink", "yellow" ],
      [ "blue", "white", "yellow", "yellow", "white" ]     
    ],
    attempts: 8
  },
  {
    id: 75,
    pattern: [
      [ "pink", "pink", "pink", "white", "white" ],
      [ "blue", "white", "white", "blue", "pink" ],
      [ "white", "yellow", "white", "yellow", "blue" ],
      [ "pink", "yellow", "yellow", "pink", "pink" ],
      [ "pink", "yellow", "blue", "blue", "yellow" ]     
    ],
    attempts: 10
  },
  {
    id: 957,
    pattern: [
      ["pink", "yellow", "blue", "white", "yellow"],
      ["yellow", "blue", "blue", "white", "yellow"],
      ["yellow", "pink", "yellow", "blue", "yellow"],
      ["yellow", "white", "white", "blue", "pink"],
      ["white", "yellow", "blue", "blue", "white"]   
    ],
    attempts: 8
  },
  {
    id: 958,
    pattern: [
      ["blue", "yellow", "yellow", "yellow", "pink"],
      ["blue", "white", "white", "pink", "white"],
      ["pink", "yellow", "blue", "pink", "yellow"],
      ["white", "blue", "white", "white", "yellow"],
      ["white", "white", "pink", "blue", "blue"]
    ],
    attempts: 9
  },
  {
    id: 963,
    pattern: [
      ["pink", "blue", "pink", "pink", "white"],
      ["pink", "white", "blue", "yellow", "yellow"],
      ["white", "pink", "blue", "white", "yellow"],
      ["white", "blue", "white", "yellow", "yellow"],
      ["white", "blue", "pink", "blue", "blue"]
    ],
    attempts: 7
  },
  {
    id: 964,
    pattern: [
      ["pink", "pink", "yellow", "blue", "pink"],
      ["pink", "white", "blue", "yellow", "blue"],
      ["pink", "yellow", "pink", "pink", "yellow"],
      ["blue", "pink", "white", "blue", "blue"],
      ["pink", "yellow", "white", "blue", "yellow"]
    ],
    attempts: 9
  },
  {
    id: 965,
    pattern: [
      ["white", "blue", "pink", "yellow", "white"],
      ["pink", "pink", "blue", "yellow", "white"],
      ["yellow", "white", "yellow", "blue", "blue"],
      ["yellow", "yellow", "blue", "pink", "blue"],
      ["white", "yellow", "white", "white", "blue"]
    ],
    attempts: 7
  },
  {
    id: 966,
    pattern: [
      ["pink", "pink", "pink", "white", "blue"],
      ["white", "white", "white", "white", "white"],
      ["pink", "blue", "pink", "blue", "yellow"],
      ["yellow", "blue", "white", "blue", "yellow"],
      ["yellow", "pink", "blue", "white", "white"]
    ],
    attempts: 8
  },
  {
    id: 967,
    pattern: [
      ["yellow", "pink", "yellow", "blue", "blue"],
      ["pink", "blue", "white", "blue", "blue"],
      ["yellow", "white", "blue", "blue", "yellow"],
      ["white", "white", "white", "white", "pink"],
      ["yellow", "yellow", "white", "yellow", "white"]
    ],
    attempts: 9
  },
  {
    id: 78,
    pattern: [
      ["blue", "yellow", "white", "blue", "yellow"],
      ["yellow", "white", "white", "blue", "yellow"],
      ["white", "blue", "blue", "white", "white"],
      ["white", "blue", "yellow", "blue", "pink"],
      ["white", "white", "blue", "pink", "blue"]
    ],
    attempts: 9
  },
  {
    id: 79,
    pattern: [
      ["yellow", "white", "blue", "blue", "pink"],
      ["yellow", "pink", "pink", "blue", "blue"],
      ["blue", "yellow", "blue", "white", "white"],
      ["white", "blue", "blue", "white", "blue"],
      ["white", "blue", "white", "pink", "white"]
    ],
    attempts: 10
  },
  {
    id: 951,
    pattern: [
      ["yellow", "yellow", "white", "yellow", "white"],
      ["pink", "pink", "white", "pink", "pink"],
      ["pink", "blue", "blue", "white", "blue"],
      ["blue", "pink", "white", "blue", "blue"],
      ["white", "pink", "yellow", "pink", "blue"]
    ],
    attempts: 9
  },
  {
    id: 972,
    pattern: [
      ["pink", "pink", "pink", "blue", "white"],
      ["yellow", "blue", "white", "pink", "blue"],
      ["yellow", "white", "white", "blue", "blue"],
      ["blue", "blue", "blue", "yellow", "pink"],
      ["yellow", "pink", "yellow", "white", "white"]
    ],
    attempts: 10
  },
  {
    id: 978,
    pattern: [
      ["yellow", "pink", "pink", "yellow", "pink"],
      ["pink", "pink", "pink", "pink", "blue"],
      ["yellow", "blue", "blue", "white", "yellow"],
      ["yellow", "white", "blue", "blue", "blue"],
      ["yellow", "yellow", "pink", "blue", "yellow"]
    ],
    attempts: 7
  },
  {
    id: 979,
    pattern: [
      ["blue", "yellow", "white", "white", "white"],
      ["blue", "pink", "blue", "pink", "yellow"],
      ["blue", "white", "pink", "yellow", "yellow"],
      ["white", "yellow", "blue", "pink", "blue"],
      ["yellow", "blue", "yellow", "yellow", "blue"]
    ],
    attempts: 9
  },
  {
    id: 980,
    pattern: [
      ["pink", "yellow", "blue", "yellow", "yellow"],
      ["pink", "pink", "pink", "white", "yellow"],
      ["yellow", "yellow", "yellow", "pink", "white"],
      ["yellow", "blue", "white", "pink", "blue"],
      ["yellow", "blue", "yellow", "pink", "pink"]
    ],
    attempts: 7
  },
  {
    id: 82,
    pattern: [
      ["yellow", "pink", "blue", "white", "yellow"],
      ["pink", "blue", "pink", "blue", "pink"],
      ["pink", "white", "white", "blue", "blue"],
      ["blue", "white", "blue", "blue", "yellow"],
      ["blue", "blue", "yellow", "white", "yellow"]
    ],
    attempts: 10
  },
  {
    id: 984,
    pattern: [
      ["pink", "pink", "blue", "blue", "pink"],
      ["yellow", "white", "pink", "white", "yellow"],
      ["blue", "blue", "yellow", "pink", "pink"],
      ["blue", "yellow", "white", "yellow", "white"],
      ["white", "blue", "white", "white", "white"]
    ],
    attempts: 9
  },
  {
    id: 985,
    pattern: [
      ["white", "white", "white", "white", "white"],
      ["yellow", "white", "yellow", "yellow", "pink"],
      ["white", "pink", "blue", "blue", "pink"],
      ["pink", "yellow", "pink", "white", "yellow"],
      ["white", "yellow", "yellow", "yellow", "white"]
    ],
    attempts: 9
  },
  {
    id: 986,
    pattern: [
      ["yellow", "white", "pink", "white", "blue"],
      ["yellow", "pink", "pink", "white", "blue"],
      ["pink", "blue", "white", "yellow", "blue"],
      ["white", "blue", "pink", "blue", "yellow"],
      ["yellow", "blue", "blue", "pink", "yellow"]
    ],
    attempts: 7
  },
  {
    id: 83,
    pattern: [
      ["yellow", "pink", "pink", "blue", "pink"],
      ["pink", "white", "blue", "yellow", "pink"],
      ["pink", "pink", "pink", "white", "white"],
      ["yellow", "yellow", "white", "pink", "white"],
      ["yellow", "white", "blue", "blue", "pink"]
    ],
    attempts: 10
  },
  {
    id: 89,
    pattern: [
      ["pink", "blue", "white", "yellow", "pink"],
      ["yellow", "yellow", "white", "white", "pink"],
      ["yellow", "pink", "pink", "blue", "blue"],
      ["blue", "yellow", "blue", "blue", "pink"],
      ["yellow", "yellow", "pink", "yellow", "blue"]
    ],
    attempts: 10
  },
  {
    id: 107,
    pattern: [
      ["white", "yellow", "blue", "white", "blue"],
      ["blue", "yellow", "yellow", "pink", "white"],
      ["blue", "white", "pink", "yellow", "white"],
      ["yellow", "yellow", "yellow", "white", "pink"],
      ["pink", "yellow", "white", "blue", "blue"]
    ],
    attempts: 10
  },
  {
    id: 126,
    pattern: [
      ["pink", "white", "white", "pink", "blue"],
      ["white", "yellow", "blue", "blue", "yellow"],
      ["yellow", "white", "yellow", "white", "pink"],
      ["white", "yellow", "pink", "white", "white"],
      ["pink", "yellow", "blue", "white", "blue"]
    ],
    attempts: 11
  },
  {
    id: 992,
    pattern: [
      ["pink", "white", "yellow", "white", "blue"],
      ["blue", "white", "blue", "white", "pink"],
      ["yellow", "pink", "yellow", "blue", "white"],
      ["yellow", "yellow", "pink", "yellow", "white"],
      ["yellow", "blue", "pink", "white", "white"]
    ],
    attempts: 8
  },
  {
    id: 993,
    pattern: [
      ["white", "white", "pink", "pink", "yellow"],
      ["white", "yellow", "white", "white", "pink"],
      ["yellow", "blue", "yellow", "white", "pink"],
      ["white", "yellow", "blue", "blue", "pink"],
      ["yellow", "blue", "yellow", "blue", "white"]
    ],
    attempts: 7
  },
  {
    id: 994,
    pattern: [
      ["yellow", "yellow", "blue", "white", "yellow"],
      ["blue", "blue", "white", "white", "blue"],
      ["blue", "yellow", "yellow", "yellow", "white"],
      ["white", "blue", "blue", "blue", "blue"],
      ["white", "blue", "white", "pink", "blue"]      
    ],
    attempts: 8 
  },
  {
    id: 1005,
    pattern: [
      ["yellow", "blue", "blue", "white", "blue"],
      ["yellow", "white", "yellow", "yellow", "pink"],
      ["yellow", "yellow", "white", "blue", "white"],
      ["yellow", "blue", "white", "white", "yellow"],
      ["blue", "white", "yellow", "blue", "blue"]
    ],
    attempts: 9
  },
  {
    id: 1006,
    pattern: [
      ["pink", "pink", "pink", "yellow", "blue"],
      ["blue", "blue", "blue", "pink", "pink"],
      ["yellow", "yellow", "pink", "blue", "yellow"],
      ["yellow", "pink", "yellow", "blue", "blue"],
      ["white", "white", "blue", "pink", "yellow"]
    ],
    attempts: 8
  },
  {
    id: 1007,
    pattern: [
      ["yellow", "blue", "white", "pink", "white"],
      ["pink", "pink", "pink", "blue", "blue"],
      ["white", "yellow", "blue", "white", "yellow"],
      ["white", "pink", "blue", "blue", "yellow"],
      ["white", "white", "white", "pink", "yellow"]
    ],
    attempts: 9
  },
  {
    id: 1008,
    pattern: [
      ["yellow", "blue", "blue", "pink", "yellow"],
      ["white", "yellow", "white", "white", "pink"],
      ["blue", "white", "yellow", "blue", "white"],
      ["white", "yellow", "white", "pink", "white"],
      ["white", "white", "yellow", "white", "yellow"]
    ],
    attempts: 9
  },
  {
    id: 1010,
    pattern: [
      ["yellow", "white", "blue", "blue", "yellow"],
      ["blue", "blue", "white", "pink", "blue"],
      ["blue", "yellow", "blue", "blue", "yellow"],
      ["yellow", "pink", "yellow", "yellow", "blue"],
      ["pink", "yellow", "pink", "pink", "yellow"]
    ],
    attempts: 9
  },
  {
    id: 1013,
    pattern: [
      ["pink", "blue", "white", "yellow", "yellow"],
      ["blue", "yellow", "white", "yellow", "pink"],
      ["yellow", "white", "white", "pink", "blue"],
      ["blue", "blue", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "pink", "white", "white"]
    ],
    attempts: 10
  },
  {
    id: 1014,
    pattern: [
      ["yellow", "blue", "pink", "pink", "yellow"],
      ["pink", "pink", "pink", "pink", "blue"],
      ["white", "yellow", "blue", "yellow", "blue"],
      ["white", "white", "yellow", "yellow", "white"],
      ["yellow", "white", "blue", "blue", "yellow"]
    ],
    attempts: 8 
  },
  {
    id: 1015,
    pattern: [
      ["pink", "pink", "blue", "pink", "blue"],
      ["pink", "pink", "pink", "pink", "yellow"],
      ["white", "yellow", "white", "blue", "blue"],
      ["white", "blue", "pink", "blue", "pink"],
      ["yellow", "yellow", "white", "blue", "yellow"]
    ],
    attempts: 9 
  },
  {
    id: 1019,
    pattern: [
      ["white", "blue", "blue", "pink", "pink"],
      ["blue", "yellow", "yellow", "pink", "pink"],
      ["blue", "white", "pink", "white", "yellow"],
      ["white", "pink", "yellow", "white", "yellow"],
      ["white", "blue", "pink", "yellow", "blue"]
    ],
    attempts: 9
  },
  {
    id: 1020,
    pattern: [
      ["blue", "blue", "pink", "pink", "blue"],
      ["white", "white", "blue", "blue", "blue"],
      ["blue", "white", "white", "yellow", "pink"],
      ["white", "yellow", "blue", "yellow", "yellow"],
      ["blue", "blue", "pink", "white", "white"]
    ],
    attempts: 9
  },
  {
    id: 1021,
    pattern: [
      ["white", "white", "pink", "white", "white"],
      ["white", "blue", "yellow", "yellow", "blue"],
      ["white", "blue", "pink", "blue", "pink"],
      ["blue", "white", "white", "pink", "pink"],
      ["white", "yellow", "blue", "blue", "blue"]
    ],
    attempts: 9 
  },
  {
    id: 1022,
    pattern: [
      ["pink", "blue", "yellow", "blue", "blue"],
      ["blue", "blue", "pink", "blue", "yellow"],
      ["pink", "blue", "blue", "white", "blue"],
      ["pink", "pink", "yellow", "white", "blue"],
      ["pink", "blue", "blue", "yellow", "blue"]
    ],
    attempts: 8 
  },
  {
    id: 1023,
    pattern: [
      ["yellow", "yellow", "white", "pink", "yellow"],
      ["pink", "blue", "yellow", "yellow", "pink"],
      ["blue", "pink", "yellow", "white", "pink"],
      ["blue", "pink", "blue", "pink", "pink"],
      ["white", "pink", "blue", "yellow", "pink"]
    ],
    attempts: 7 
  },
  {
    id: 1024,
    pattern: [
      ["pink", "blue", "white", "white", "pink"],
      ["white", "yellow", "blue", "white", "pink"],
      ["yellow", "white", "white", "yellow", "pink"],
      ["yellow", "blue", "blue", "pink", "white"],
      ["yellow", "white", "yellow", "white", "white"]
    ],
    attempts: 9
  },
  {
    id: 1025,
    pattern: [
      ["white", "yellow", "blue", "blue", "blue"],
      ["blue", "blue", "white", "yellow", "blue"],
      ["pink", "blue", "blue", "white", "blue"],
      ["blue", "white", "yellow", "pink", "blue"],
      ["blue", "blue", "pink", "white", "pink"]
    ],
    attempts: 9
  },
  {
    id: 1026,
    pattern: [
      ["blue", "yellow", "blue", "white", "white"],
      ["white", "blue", "yellow", "white", "pink"],
      ["pink", "white", "white", "pink", "yellow"],
      ["blue", "pink", "yellow", "blue", "yellow"],
      ["pink", "blue", "blue", "pink", "blue"]
    ],
    attempts: 9
  }
  
];