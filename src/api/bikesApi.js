import server from "./server";

const bikes = [
  {
    id: 1,
    name: "Mountain",
    image:
      "https://67f16a85e8.clvaw-cdnwnd.com/3cecd0521bca8dffa594f92bce31c335/200000085-0e5050e508/cd15-20200521-120518-1.png?ph=67f16a85e8",
    category: 1,
  },
  {
    id: 2,
    name: "Road",
    image:
      "https://www.metuobike.com/data/watermark/20220607/629ef3b8be0d3382_.jpg",
    category: 1,
  },
  {
    id: 3,
    name: "Touring",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1640037935-schwinn-coston-1640037789.png",
    category: 1,
  },
  {
    id: 4,
    name: "Road",
    image:
      "https://www.pelotonmagazine.com/wp-content/uploads/2020/03/Normal-Bicycles-Mahogany-Side-Profile-1024x732.jpg?width=1200",
    category: 2,
  },
  {
    id: 5,
    name: "Mountain",
    image:
      "https://dartmoor-bikes.com/sites/dartmoor/files/styles/family_slide/public/2022-01/2022_Dartmoor_bikes_family_players_0.jpg?itok=ASLU0dlt",
    category: 2,
  },
  {
    id: 6,
    name: "Touring",
    image: "https://m.media-amazon.com/images/I/51sLPkeMO3L._SL500_.jpg",
    category: 2,
  },
  {
    id: 7,
    name: "Vintage",
    image:
      "https://www.reidbikes.com/wp-content/uploads/2021/04/BV64666REI_SAG_1.png",
    category: 3,
  },
  {
    id: 8,
    name: "Touring vintage",
    image:
      "https://shopware.accell.cloud/thumbnail/02/bd/36/1607962653/Willow-bronze-Image-1_640x640.jpg",
    category: 3,
  },
  {
    id: 9,
    name: "Road vintage",
    image: "https://www.reidbikes.com/wp-content/uploads/2021/04/11-4.png",
    category: 3,
  },
];

server.get("/api/bikesByCategory/:categoryId", (_, request) => {
  return bikes.filter(
    (bike) => bike.category === parseInt(request.params.categoryId)
  );
});

server.get("/api/bikeById/:bikyId", (_, request) => {
  return bikes.find((bike) => bike.id === parseInt(request.params.bikyId));
});
