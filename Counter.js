function CreateCounter(){
    let count =0;  // private variable

    return {
        increment(){
            count++;
            console.log(count);
        },

        decreament(){

            count--;
            console.log(count);

        }
    }

}

let counter  = new CreateCounter();

counter.increment();
counter.decreament();

console.log(counter.count);