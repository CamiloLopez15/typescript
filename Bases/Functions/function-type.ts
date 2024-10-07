(() => {
    const addNumbers = (a: number, b: number): number => a + b;

    let myFunction: (x: number, y: number) => number;

    myFunction = addNumbers

    const sum = myFunction(1,3)

    console.log(sum);
})();
