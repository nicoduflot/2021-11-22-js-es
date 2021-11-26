export class User{
    constructor(name){
        this.name = name;
    }
}

export class Admin extends User{
    constructor(name){
        super(name);
        this.role = 'Admin';
    }
}