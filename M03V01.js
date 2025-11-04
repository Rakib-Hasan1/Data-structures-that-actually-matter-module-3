//? Stateless vs Stateful (Javascript functions are stateless and objects is stateful)



// ?stateless example
// const counter = (amount) => {
//     let count = 0;
//     count = count + amount;

//     return count;
// };


// console.log(counter(3));
// console.log(counter(2));



//? stateful example
const counter = {
    count: 0,
    add(amount) {
        this.count = this.count + amount;
    },
    print() {
        console.log(this.count);
    },
};

counter.add(3);
counter.add(2);

counter.print();

