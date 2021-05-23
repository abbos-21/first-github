
class Test {
    constructor(name, surname, age) {
        this.name = name;
    }

    getFullname() {
        console.log(this.name, this.surname)
    }
}

const st = new Test("IT", "Academy", "123");

st.getFullname();


//callback
console.log("Started");

const Facebook = (parol, login, callback) => {

};