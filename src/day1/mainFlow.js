// @flow

type fullName = {
    firstName: string;
    lastName: string;
};

type Person = {
    name: string | fullName;
    age: number;
};


