$(document).ready(function () {
    $("#bar").click(function() { 
        $(".side-bar").toggle();
        
    });
});


// JS for food images

// caesar

function Image1(){
    var Caesar = document.querySelector("#Caesar");
    var myCaesar = Caesar.getAttribute("src");
     
    if(myCaesar === "images/caesar1.jpg")
    {
        Caesar.setAttribute("src", "images/caesar2.jpg");
    }
    
         
     else if(myCaesar === "images/caesar2.jpg")
    {
        Caesar.setAttribute("src", "images/caesar.jpg");
    }
    
         
    else
    {
        Caesar.setAttribute("src", "images/caesar1.jpg");
    }
}

// soup


function Image2(){
    var Soup = document.querySelector("#Soup");
    var mySoup = Soup.getAttribute("src");
     
    if(mySoup === "images/soup.jpg")
    {
        Soup.setAttribute("src", "images/soup1.jpeg");
    }
    
         
     else if(mySoup === "images/soup1.jpeg")
    {
        Soup.setAttribute("src", "images/soup2.jpg");
    }
    
         
    else
    {
        Soup.setAttribute("src", "images/soup.jpg");
    }
}

// tomato 

function Image3(){
    var Tomato = document.querySelector("#tomato");
    var myTomato = Tomato.getAttribute("src");
     
    if(myTomato === "images/tomato 2.jpg")
    {
        Tomato.setAttribute("src", "images/tomato.jpg");
    }
    
         
     else if(myTomato === "images/tomato.jpg")
    {
        Tomato.setAttribute("src", "images/tomato1.jpg");
    }
    
         
    else
    {
        Tomato.setAttribute("src", "images/tomato 2.jpg");
    }
}

//Spring rolls

function Image4(){
    var Rolls = document.querySelector("#rolls");
    var myRolls = Rolls.getAttribute("src");
     
    if(myRolls === "images/rolls.jpg")
    {
        Rolls.setAttribute("src", "images/rolls1.jpg");
    }
    
         
     else if(myRolls === "images/rolls1.jpg")
    {
        Rolls.setAttribute("src", "images/rolls2.jpg");
    }
    
         
    else
    {
        Rolls.setAttribute("src", "images/rolls.jpg");
    }
}

// DRINKS 

function Myimage1(){
    var Water = document.querySelector("#water");
    var myWater = Water.getAttribute("src");
     
    if(myWater === "images/water1.jpg")
    {
        Water.setAttribute("src", "images/water2.jpg");
    }
    
         
    else
    {
        Water.setAttribute("src", "images/water1.jpg");
    }
}


function Myimage2(){
    var Pepsi = document.querySelector("#pepsi");
    var myPepsi = Pepsi.getAttribute("src");
     
    if(myPepsi === "images/pepsi1.jpg")
    {
        Pepsi.setAttribute("src", "images/pepsi2.jpg");
    }
    
   else
   {
          Pepsi.setAttribute("src", "images/pepsi1.jpg");
   }
}



function Myimage3(){
    var Cola = document.querySelector("#cola");
    var myCola = Cola.getAttribute("src");
     
    if(myCola === "images/cola1.jpg")
    {
        Cola.setAttribute("src", "images/cola2.jpg");
    }
    
   else if(myCola === "images/cola2.jpg")
   {
          Cola.setAttribute("src", "images/cola3.jpg");
   }


   else if(myCola === "images/cola3.jpg")
   {
        Cola.setAttribute("src", "images/cola4.jpg");
   }

   
   else if(myCola === "images/cola4.jpg")
   {
        Cola.setAttribute("src", "images/cola5.jpg");
   }
   
   
   else if(myCola === "images/cola5.jpg")
   {
        Cola.setAttribute("src", "images/fanta1.jpg");
   }

   
   else if(myCola === "images/fanta1.jpg")
   {
        Cola.setAttribute("src", "images/fanta2.jpg");
   }

   
   else if(myCola === "images/fanta2.jpg")
   {
        Cola.setAttribute("src", "images/fanta3.jpg");
   }

   else
   {
    Cola.setAttribute("src", "images/cola1.jpg");
   }
}




function Myimage4(){
    var Coffee = document.querySelector("#coffee");
    var myCoffee = Coffee.getAttribute("src");
     
    if(myCoffee === "images/coffee1.jpg")
    {
        Coffee.setAttribute("src", "images/coffee2.jpg");
    }
    
   else if (myCoffee === "images/coffee2.jpg")
   {
          Coffee.setAttribute("src", "images/coffee3.jpg");
   }
       
   else if (myCoffee === "images/coffee3.jpg")
   {
          Coffee.setAttribute("src", "images/coffee4.jpg");
   }
       
   else if (myCoffee === "images/coffee4.jpg")
   {
          Coffee.setAttribute("src", "images/coffee5.jpg");
   }

   else 
   {
    Coffee.setAttribute("src", "images/coffee1.jpg");
   }
}



// filter........................

$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#my-search .col").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });























