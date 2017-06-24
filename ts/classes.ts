class Person {
    name: string;
    age: number;
    address: IAddress[];  
    service : CalcualtorService;;
    constructor(private _service : CalcualtorService) {
            this._service.addNumber(2,3);
            //this.service.
    }
    getName(): string {
        return this.name;
    }


}

interface IAddress {
    addressLine1: string;
    addressLine2: string;
    PinCode: number;
}


class CalcualtorService {
    addNumber(a: number, b: number) {
        return a + b;
    }


}
