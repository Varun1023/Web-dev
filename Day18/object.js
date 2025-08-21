const imageSegments = [
  // Nature
  [
    "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
  ],
  // Books
  [
    "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    "https://images.pexels.com/photos/374746/pexels-photo-374746.jpeg",
    "https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg",
    "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
    "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
  ],
  // Forest
  [
    "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
    "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
    "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg",
    "https://images.pexels.com/photos/1342137/pexels-photo-1342137.jpeg",
    "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
    "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
  ],
  // Rivers
  [
    "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg",
    "https://images.pexels.com/photos/414061/pexels-photo-414061.jpeg",
    "https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg"
  ],
  // Waterfalls
  [
    "https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg",
    "https://images.pexels.com/photos/62627/niagara-cases-water-waterfall-62627.jpeg",
    "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg",
    "https://images.pexels.com/photos/1080412/pexels-photo-1080412.jpeg",
    "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg"
  ],
  // Lights
  [
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg",
    "https://images.pexels.com/photos/130154/pexels-photo-130154.jpeg",
    "https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg",
    "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    "https://images.pexels.com/photos/1796733/pexels-photo-1796733.jpeg"
  ],
  // Mountains
  [
    "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg",
    "https://images.pexels.com/photos/1279560/pexels-photo-1279560.jpeg",
    "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg",
    "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg",
    "https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg"
  ],
  // Animals
  [
    "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
    "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
    "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg",
    "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
    "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg"
  ],
  // Art
  [
    "https://images.pexels.com/photos/459799/pexels-photo-459799.jpeg",
    "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg",
    "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg",
    "https://images.pexels.com/photos/169789/pexels-photo-169789.jpeg",
    "https://images.pexels.com/photos/2911526/pexels-photo-2911526.jpeg"
  ],
  // History
  [
    "https://images.pexels.com/photos/161798/stonehenge-architecture-history-monolith-161798.jpeg",
    "https://images.pexels.com/photos/73821/train-wreck-steam-locomotive-locomotive-railway-73821.jpeg",
    "https://images.pexels.com/photos/1172018/pexels-photo-1172018.jpeg",
    "https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg",
    "https://images.pexels.com/photos/161863/edinburgh-carlton-hill-landscape-scotland-161863.jpeg"
  ],
  // Music
  [
    "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    "https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg",
    "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg",
    "https://images.pexels.com/photos/1120163/pexels-photo-1120163.jpeg"
  ],
  // Space
  [
    "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg",
    "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
    "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg",
    "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg",
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
  ],
  // Technology
  [
    "https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg",
    "https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg",
    "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg",
    "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
  ],
  // Science
  [
    "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
    "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg",
    "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg"
  ],
  // Travel
  [
    "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
    "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
    "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg",
    "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg",
    "https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg"
  ]
];
