import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://www.quiksilver.com/cdn/shop/articles/how-to-wash-a-hat_750x.jpg?v=1742233159",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu_zWnXn7hssSWHXjRzEhKeRkcLguL1K4iA&s",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://v2brand.it/cdn/shop/collections/IMG_COLLECTION.jpg?v=1739525037",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://thumbs.dreamstime.com/b/blond-woman-against-autumn-nature-landscape-36634739.jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://www.gazman.com.au/cdn/shop/articles/BestWinterJackets_Blog_Winter_FeatureTile_1016x711_751ce837-eb2d-4f0b-9096-8741517400be.jpg?v=1719462605",
    },
  ];

  return (
    <Directory categories={categories} />
  );
}

export default App;
