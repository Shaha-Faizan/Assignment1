const person1 = {
    Name : "Faizan", Age : 22
};
const person2 = {
    Name : "Zaheer", Age : 21
};

function intoduce(){
    console.log(`Hello i am ${this.Name} and i am ${this.Age} Year old.`)
}

intoduce.call(person1);