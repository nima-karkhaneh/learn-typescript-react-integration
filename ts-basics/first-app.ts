let userName = "Nima";

userName = "James"


let userAge = 36;

let isValid = true;


type StringOrNum = string | number;

let userID: StringOrNum = "sinaaghean2"

userID = 120;


// let user: object

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number
}

let user: User

user = {
    name: "Nima",
    age: 36,
    isAdmin: true,
    id: "19adb"
}

// let hobbies:Array<string>

let hobbies: string[];

hobbies = ["Running", "Skateboarding", "Guitar"]

// hobbies = [1, 2, 3]



function add(a: number, b: number) {
    const result = a + b;
    return result;
}


type AddFn = (a: number, b: number) => number

function calculate(
    a: number,
    b: number,
    calcFn: AddFn
) {
    calcFn(a, b)
}


calculate (2, 5, add)



interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: 'abc',
  email: 'test@example.com',
};

class AuthCredentials implements Credentials {
  email!: string;
  password!: string;
  userName!: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials())



interface Admin {
    permisson: string[];
}

interface Appuser {
    username: string;
}

interface Appadmin extends Admin, Appuser {}

let admin: Appadmin = {
    permisson: [],
    username: "hghadg"
}



type Role = 'admin' | 'user' | 'editor'

let role: Role

role = 'admin';
role = 'user';
role = 'editor'

function perfromAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        // rest of the code
    }
}

let roles: Array<Role>;
roles = ['admin', 'user'];

// type DataStorage<T> = {
//     storage: T[];
//     add: (data: T) => void;
// }


// const textStorage : DataStorage<string> = {
//     storage: [],
//     add (data) {
//         this.storage.push(data)
//     }
// }

// const userStorage: DataStorage<User> = {
//     storage: [],
//     add (user) {}
// }


// Or using a class instead of custom type

class DataStorage<T> {
    storage: T[] = [];

    add (data: T) {
        this.storage.push(data);
    }
}

class AdvancedStorage<T> extends DataStorage<T> {
    remove (item: T) {
        this.storage = this.storage.filter(i => i !== item)
    }
}


