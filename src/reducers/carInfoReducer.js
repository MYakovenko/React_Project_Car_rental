const carsInfo = [
    {
      id: 0,
      title: "Mercedes-Benz AMG GT Roadster",
      ref: "https://car-images.bauersecure.com/pagefiles/33196/bmercamg-001.jpg",
      engine: "4.0L V8 Bi-Turbo",
      price: "70 USD",
      overview: "The Mercedes-AMG Roadster is the most intense way to drive a sports car. You can feel the fascinating genes from the AMG GT even more palpably. Sport car enthusiasts experience emotions, which are often lost in day-to-day life. The AMG Roadster embodies the perfect symbiosis between the typical AMG Driving Performance, and unlimited top-down driving pleasure."
    },
    {
      id: 1,
      title: "Nissan GT-R Premium",
      ref: "http://silverdice.us/wp-content/uploads/2017/07/2017-nissan-gt-r-first-drive-sixkpazm-jpg.jpg",
      engine: "3.8-liter twin-turbo V6 565 HP",
      price: "65 USD",
      overview: "There’s not another car on the planet just like this. Refined or no, raining or not, and on a world-famous racing track or just taking the long way to the office one morning, the 2017 GT-R is just as scary, satisfying, and surreal as it ever was as long as you’re willing to push it there. Just be careful of the biting fish."
    },
    {
      id: 2,
      title: "Maserati GranTurismo MC Coupe",
      ref: "http://gtspirit.com/wp-content/uploads/2018/04/Maserati-GranTurismo-MC-15.jpg",
      engine: "4.7L V8 545 HP",
      price: "100 USD",
      overview: "The fastest and most focused production car built by Maserati since the MC12 supercar. The MC Stradale is a GranTurismo S that’s benefited from the attention of the Maserati Corse in-house motorsport department. It’s lighter, more performance-minded and more powerful than the standard car: a GranTurismo ‘GT3’, or the closest thing to it."
    }
];

const initialValue = {
    carList: carsInfo,
    item: {
        id: Math.random()
            .toString()
            .substr(2, 100),
        title: "",
        ref: "",
        engine: "",
        price: "",
        overview: ""
    }
};

export default (state = initialValue, action) => {
    switch (action.type) {

        default:
			return state; 
    }
}
