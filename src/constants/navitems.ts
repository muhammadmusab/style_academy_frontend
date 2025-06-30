export const navItems = [
  {
    path: null,
    text: "Men's Fashion",
    id: "men",
    showArrow:true,

    submenu: [
      {
        text: "T-shirt's",
        path: "/shop/men/t-shirts",

        id: "men-t-shirts",
        showArrow:true,
        submenu: [
          {
            text: "V Neck",
            path: "/shop/men/t-shirts/v-neck",

            id: "men-v-neck",
          },
          {
            text: "Round Neck",
            path: "/shop/men/t-shirts/round-neck",

            id: "men-round-neck",
          },
          {
            text: "Graphic Tees",
            path: "/shop/men/t-shirts/graphic-tees",

            id: "men-graphic-tees",
          },
          {
            text: "Top Rated",
            path: "/shop/men/t-shirts/top-rated",

            id: "men-t-shirts-top-rated",
          },
        ],
      },
    ],
  },
  {
    path: null,
    text: "Woman’s Fashion",
    id: "women",
    showArrow:true,

    submenu: [
      {
        text: "Unstitched Fabric",
        path: "/shop/women/unstiched-fabric",

        id: "women-unstiched-fabric",
        showArrow:true,
        submenu: [
          {
            text: "Branded Unstitched",
            path: "/shop/women/unstiched-fabric/branded",
            id: "women-unstiched-fabric-branded",
          },
          {
            text: "Sarees",
            path: "/shop/women/unstiched-fabric/sarees",
            id: "women-unstiched-fabric-sarees",
          },
        ],
      },
      {
        text: "Kurtas & Shalwar Kameez",
        path: "/shop/women/kurtas-shalwar-kameez",
        showArrow:true,
        id: "women-kurtas-shalwar-kameez",
        submenu: [
          {
            text: "Kurtis",
            path: "/shop/women/kurtas-shalwar-kameez/kurtis",
            id: "women-kurtis",
          },
          {
            text: "Shalwar Kameez",
            path: "/shop/women/kurtas-shalwar-kameez/shalwar-kameez",
            id: "women-shalwar-kameez",
          },
          {
            text: "Branded Pret",
            path: "/shop/women/kurtas-shalwar-kameez/branded-pret",
            id: "women-branded-pret",
          },
          {
            text: "Trousers & Palazzos",
            path: "/shop/women/kurtas-shalwar-kameez/trousers-palazzos",
            id: "women-trousers-palazzos",
          },
        ],
      },
      {
        text: "Shoes",
        path: "/shop/women/shoes",
        showArrow:true,
        id: "women-shoes",
        submenu: [
          {
            text: "Sandals",
            path: "/shop/women/shoes/sandals",
            id: "women-shoes-sandals",
          },
          {
            text: "Flat Shoes",
            path: "/shop/women/shoes/flat-shoes",
            id: "women-flat-shoes",
          },
          {
            text: "Heels",
            path: "/shop/women/shoes/heels",
            id: "women-heels",
          },
        ],
      },
    ],
  },
  {
    path: "/shop/electronics",
    text: "Electronics",
    id: "electronics",
    
    submenu: [],
  },
  {
    path: "/shop/home-lifestyle",
    text: "Home & Lifestyle",
    id: "home-lifestyle",

    submenu: [],
  },
  {
    path: "/shop/medicine",
    text: "Medicine",
    id: "medicine",

    submenu: [],
  },
  {
    path: "/shop/sports-and-outdoor",
    text: "Sports & Outdoor",
    id: "sports-outdoor",

    submenu: [],
  },
  {
    path: "/shop/toys",
    text: "Toys",
    id: "toys",

    submenu: [],
  },
  {
    path: "/shop/groceries",
    text: "Groceries",
    id: "groceries",

    submenu: [],
  },
  {
    path: "/shop/health-beauty",
    text: "Health & Beauty",
    id: "health-and-beauty",

    submenu: [],
  },
];
