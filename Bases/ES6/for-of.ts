(() => {
    type Avenger = {
        name: string;
        weapon: string;
    };

    const iroman: Avenger = {
        name: "Iron man",
        weapon: "Armorsuit",
    };

    const capAmerican: Avenger = {
        name: "Capitán América",
        weapon: "Shield",
    };

    const thor: Avenger = {
        name: "Thor",
        weapon: "Hammer",
    };

    const avengers: Avenger[] = [iroman, capAmerican, thor];

    for (const avenger of avengers) {
        console.log({ avenger });
    }
})();
