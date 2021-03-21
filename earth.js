var fruit={
    name:"oranges",
    price:30.00,
    quantity:2,
    fruitcost:function(price, quantity){
        total=price* quantity
        this.fruitcost=total
        }
    }
    fruit.fruitcost(30.00,2.00);
        console.log(fruit.quantity + "  " + fruit.name +  " for KES "  + total)


        //Examples of object ,function and method
        // functiom
       // var sub=function (a,b) {
       // var sub=a-b;
       // return sub
    //}
   // console.log(sub(20,10))


    //object
    var person ={
        firstName:"Veronicah",
        lastName :"Njenga",
        age:67,
    }

    console.log(firstName + " is " + person.age + "years old");


    // method
    var book={
        name="textbook",
        price=50,
        bookcost:function(){
            return this.name + " "+ this. bookcost
        }
}