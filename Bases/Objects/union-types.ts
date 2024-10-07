(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustomVariable: (string | number | Hero) = "Camilo";
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
      name: "Camilo",
      age: 18,
      powers: ["Volar"],
    };
    console.log(typeof myCustomVariable);

})();
