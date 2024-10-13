(() => {
    interface Client {
        name: string;
        age: number;
        address: Address;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }


    const client1: Client = {
      name: 'Roberto',
      age: 30,
      address: {
        id: 212,
        zip: 'COP',
        city: 'Soledad',
      }
    }
})();
