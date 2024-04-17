import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./foodlogo.png";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <div className="menu-container">
        <img
          className="menu"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <h3>Price: {costForTwo} /-</h3>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="appBody">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//App component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);

const resList = [
  {
    info: {
      id: "391816",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "Trade Centre",
      areaName: "Santacruz Bandra east",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.3,
      parentId: "22485",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/louis-burger-trade-centre-santacruz-bandra-east-mumbai-391816",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "52767",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_52767.JPG",
      locality: "Sakinaka",
      areaName: "Saki Naka",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-sakinaka-saki-naka-mumbai-52767",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "9052",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Central Plaza, Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-central-plaza-kalina-santacruz-east-mumbai-9052",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "689521",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
      locality: "Kurla",
      areaName: "Near Tabela",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.6,
      parentId: "11329",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "24-34 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-kurla-near-tabela-mumbai-689521",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750450",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId: "f3712f78feb56ca2f11ba6dcacd54521",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.5,
      parentId: "444382",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-gaurav-industrial-estate-kurla-west-mumbai-750450",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "678581",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.5,
      parentId: "22452",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "19-29 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-gaurav-industrial-estate-kurla-west-mumbai-678581",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "24463",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Near Sanagam Theatre",
      areaName: "Kurla West",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 3.4,
      parentId: "2456",
      avgRatingString: "3.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 02:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-near-sanagam-theatre-kurla-west-mumbai-24463",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "257810",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-17 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cst-road-santacruz-east-mumbai-257810",
      type: "WEBLINK",
    },
  },
];
