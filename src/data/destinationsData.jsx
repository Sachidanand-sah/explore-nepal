const destinationsData = [
    {
      id: 1,
      name: "Everest Base Camp",
      region: "Everest",
      type: "Trekking",
      rating: 5,
      description: "A thrilling trekking experience leading to the base of the world's highest peak.",
      image: "https://images.unsplash.com/photo-1582275410499-b09bab451a19?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      activities: ["Trekking", "Photography", "Camping"],
      popularity: 100
    },
    {
      id: 2,
      name: "Phewa Lake",
      region: "Pokhara",
      type: "Cultural",
      rating: 4.5,
      description: "A serene lake surrounded by mountains, ideal for boating and cultural exploration.",
      image: "https://holeinthedonut.com/wp-content/uploads/2018/03/Nepal-Pokhara-Wooden-boats-on-Phewa-Lake.jpg",
      activities: ["Boating", "Sightseeing", "Cultural tours"],
      popularity: 90
    },
    {
      id: 3,
      name: "Chitwan National Park",
      region: "Terai",
      type: "Adventure",
      rating: 4.8,
      description: "Explore wildlife and enjoy a safari adventure in Nepal's first national park.",
      image: "https://media.istockphoto.com/id/2030638991/photo/morning-in-chitwan-national-park.jpg?s=612x612&w=0&k=20&c=JK2I9qeVAQOr2sRQ7TYDESli2CvJrWPdoK8vvYR6AgU=",
      activities: ["Wildlife Safari", "Bird Watching", "Canoeing"],
      popularity: 85
    },
    {
      id: 4,
      name: "Annapurna Circuit",
      region: "Annapurna",
      type: "Trekking",
      rating: 4.9,
      description: "A scenic trekking route offering stunning views of the Annapurna range.",
      image: "https://media.istockphoto.com/id/458711385/photo/sherpas-and-porters-relaxing-at-annapurna-base-camp-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=WteyUplDgyJ31lLtV-h4G9xcBM3rkiZa-uEQtUlUHuQ=",
      activities: ["Trekking", "Photography", "Cultural Exploration"],
      popularity: 95
    },
    {
      id: 5,
      name: "Bhaktapur Durbar Square",
      region: "Kathmandu Valley",
      type: "Cultural",
      rating: 4.7,
      description: "A UNESCO World Heritage Site showcasing ancient architecture and culture.",
      image: "/assests/Bhakatapur Durbar.jpg",
      activities: ["Sightseeing", "Photography", "Cultural tours"],
      popularity: 88
    },
    {
      id: 6,
      name: "Langtang Valley",
      region: "Langtang",
      type: "Trekking",
      rating: 4.6,
      description: "A picturesque trekking destination known for its stunning landscapes and local culture.",
      image: "https://media.istockphoto.com/id/1146730638/photo/amazing-view-of-landruk-village-nepal.jpg?s=612x612&w=0&k=20&c=qchRXiZqZDlR63Ct1mj3G41peLkbPOHYljw3l4NntLU=",
      activities: ["Trekking", "Camping", "Photography"],
      popularity: 80
    },
    {
      id: 7,
      name: "Lumbini",
      region: "Terai",
      type: "Cultural",
      rating: 4.8,
      description: "The birthplace of Lord Buddha, a spiritual and historical site.",
      image: "https://media.istockphoto.com/id/1066912440/photo/lumbini-nepal-birthplace-of-buddha-siddhartha-gautama.jpg?s=612x612&w=0&k=20&c=92iFEPGMf8iDs9rfYXC3PMeVuMgO5GJdCZMgLvhLB38=",
      activities: ["Pilgrimage", "Sightseeing", "Meditation"],
      popularity: 89
    },
    {
      id: 8,
      name: "Rara Lake",
      region: "Mid-Western",
      type: "Adventure",
      rating: 4.7,
      description: "Nepal's largest lake, surrounded by serene wilderness and breathtaking views.",
      image: "https://media.istockphoto.com/id/1446514350/photo/beautiful-lake-with-snowy-mountains-himalaya-rara-lake-national-park-mugu-karnali-nepal-green.jpg?s=612x612&w=0&k=20&c=Sy9h6HxCkRqy59LkEfkl951uvdjRPwjeRXZ764fwbCY=",
      activities: ["Boating", "Photography", "Trekking"],
      popularity: 82
    },
    {
      id: 9,
      name: "Gosaikunda Lake",
      region: "Langtang",
      type: "Trekking",
      rating: 4.6,
      description: "A sacred alpine lake known for its natural beauty and religious significance.",
      image: "https://media.istockphoto.com/id/480374190/photo/pokhara-lake-and-and-annapurna-in-nepal.jpg?s=612x612&w=0&k=20&c=zN0stcaync_mncCdDpEK3ugP9HRYESPmLxH6yvpfiOM=",
      activities: ["Trekking", "Camping", "Pilgrimage"],
      popularity: 78
    },
    {
      id: 10,
      name: "Pashupatinath Temple",
      region: "Kathmandu",
      type: "Cultural",
      rating: 4.9,
      description: "One of the holiest Hindu temples, dedicated to Lord Shiva.",
      image: "https://media.istockphoto.com/id/1884662475/photo/pashupatinath-temple-in-kathmandu-nepal.jpg?s=612x612&w=0&k=20&c=NP09nQmSsG3i13oDW0YoDT_W_S9vZbetIC_f6SjI5Cw=",
      activities: ["Pilgrimage", "Photography", "Sightseeing"],
      popularity: 92
    }
  ];
  
  export default destinationsData;