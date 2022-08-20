import server from "./server";

server.get("/api/bikes/categories", {
  categories: [
    {
      id: 1,
      name: "Electric",
      image:
        "https://67f16a85e8.clvaw-cdnwnd.com/3cecd0521bca8dffa594f92bce31c335/200000085-0e5050e508/cd15-20200521-120518-1.png?ph=67f16a85e8",
      type: "Electric",
    },
    {
      id: 2,
      name: "Normal",
      image:
        "https://www.pelotonmagazine.com/wp-content/uploads/2020/03/Normal-Bicycles-Mahogany-Side-Profile-1024x732.jpg?width=1200",
      type: "Normal",
    },
    {
      id: 3,
      name: "Old",
      image:
        "https://www.reidbikes.com/wp-content/uploads/2021/04/BV64666REI_SAG_1.png",
      type: "Old",
    },
  ],
});
