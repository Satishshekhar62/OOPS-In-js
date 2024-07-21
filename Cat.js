let catPrototype = {
    speak : function(){
        console.log(this.name, " is meowing!");
    },

    sleep : function ()
    {
        console.log(this.name, "is spleeping");
    }
}

let cat = Object.create(catPrototype);

cat.name = "Lucy";
cat.speak();
cat.sleep();