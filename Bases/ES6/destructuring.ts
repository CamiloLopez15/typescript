(() => {
    type Avengers = {
        nick: string;
        iroman: string;
        vision: string;
        activo: boolean;
        power: number;
    };

    const avengers: Avengers = {
        nick: "Samuel L. Jackson",
        iroman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        power: 1500,
    };

    // const { power, iroman } = avengers;

    const printAvenger = ({ iroman, ...resto }: Avengers): void => {
        console.log(iroman, resto);
    };

    printAvenger(avengers);

    const avengersArr: [string, boolean, number] = [
        "Cap. América",
        true,
        123.12,
    ];

    const [capitan, , number] = avengersArr;
    console.log({ capitan, number });
})();
