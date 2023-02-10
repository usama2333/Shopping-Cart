
var cartData = [];
var keyboardData = [];
var speakerData = [];
var handfreeData = [];
var mouseData = [];
var deleteDataArray = [];

var keyboardCounter = 0;
var speakerCounter = 0;
var handfreeCounter = 0;
var mouseCounter = 0;
var totalBill = 0;


function contact() {
    alert('Our team is contact you soon ......')
}

function about() {
    alert('This is a shopping cart app in which you can select items you want and the items list and total bill is generated');
}

function keyboardFun() {

    var keyboardPic = ` <img class="img" id="keyboard-pic" src="./pics/keyboard.jpg" alt="Card image cap">`;
    var keyboardName = document.getElementById('keyboard-name').innerText;
    var keyboardPrice = document.getElementById('keyboard-price').innerText;
    var keyboardQuantity = document.getElementById('keyboard-quantity').value;


    console.log('keyboard pic ' + keyboardPic );
    console.log('keyboard Name ' + keyboardName );
    console.log('keyboard price ' + keyboardPrice );
    console.log('keyboard quantity ' + keyboardQuantity );

    let keyboardTotalPrice = keyboardPrice * keyboardQuantity;

     totalBill +=  keyboardTotalPrice;

    if(keyboardCounter === 0) {

        var keyboardObj = {

            keyboardPic : keyboardPic,
            keyboardName : keyboardName,
            keyboardPrice :keyboardPrice,
            keyboardQuantity : keyboardQuantity,
            keyboardTotalPrice : keyboardTotalPrice
    
        };

        

        cartData.push(keyboardObj);
        // console.log('This is test first data ' + cartData[0].keyboardName);

        onLoadData(cartData);

     } else  {

        keyboardData = cartData.filter((value) => {

            if(value.keyboardName === 'Multimedia KeyBoard') {
                value.keyboardQuantity = (~~value.keyboardQuantity) + (~~keyboardQuantity);
                value.keyboardTotalPrice +=  ((~~keyboardQuantity.value) + (~~keyboardQuantity)) * keyboardPrice;
                return value;
            }
        });



        // console.log(typeof keyboardData);
        console.log('This is cart Array');
        console.log(cartData[0]);

        console.log('This is keyboard Array');
        console.log(keyboardData[0]);


        onLoadData(cartData);
        
     }
      
    //  console.log("This is keybboard data " +keyboardData);
 

    keyboardCounter += 1;


    document.getElementById('keyboard-quantity').value = "";


}

// Speaker function

function speakerFun() {

    var keyboardPic = ` <img class="img" id="speaker-pic" src="./pics/speakers.jpg" alt="Card image cap">`;
    var keyboardName = document.getElementById('speaker-name').innerText;
    var keyboardPrice = document.getElementById('speaker-price').innerText;
    var keyboardQuantity = document.getElementById('speaker-quantity').value;


    // console.log('keyboard pic ' + keyboardPic );
    // console.log('keyboard Name ' + keyboardName );
    // console.log('keyboard price ' + keyboardPrice );
    // console.log('keyboard quantity ' + keyboardQuantity );

    let keyboardTotalPrice = keyboardPrice * keyboardQuantity;
    totalBill += keyboardTotalPrice;

    if(speakerCounter === 0) {

        var speakerObj = {

            keyboardPic : keyboardPic,
            keyboardName : keyboardName,
            keyboardPrice :keyboardPrice,
            keyboardQuantity : keyboardQuantity,
            keyboardTotalPrice : keyboardTotalPrice
    
        };


        cartData.push(speakerObj);

        onLoadData(cartData);

     } else  {


        speakerData = cartData.filter((value) => {

            if(value.keyboardName === 'Portable Speakers') {
                value.keyboardQuantity = (~~value.keyboardQuantity) + (~~keyboardQuantity);
                value.keyboardTotalPrice +=  ((~~keyboardQuantity.value) + (~~keyboardQuantity)) * keyboardPrice;
                return value;
            }
        });


        console.log('This is test speaker data ');
        speakerData.forEach((value) => {
            console.log(value);
        })
        

        onLoadData(cartData);
  
     }
      

    speakerCounter += 1;


    document.getElementById('speaker-quantity').value = "";


}



function earphoneFun() {

    var keyboardPic = ` <img class="img" id="handfree-pic" src="./pics/handfree.jpg" alt="Card image cap">`;
    var keyboardName = document.getElementById('handfree-name').innerText;
    var keyboardPrice = document.getElementById('handfree-price').innerText;
    var keyboardQuantity = document.getElementById('handfree-quantity').value;


    // console.log('keyboard pic ' + keyboardPic );
    // console.log('keyboard Name ' + keyboardName );
    // console.log('keyboard price ' + keyboardPrice );
    // console.log('keyboard quantity ' + keyboardQuantity );

    let keyboardTotalPrice = keyboardPrice * keyboardQuantity;
    totalBill += keyboardTotalPrice;

    if(handfreeCounter === 0) {

        var handfreeObj = {

            keyboardPic : keyboardPic,
            keyboardName : keyboardName,
            keyboardPrice :keyboardPrice,
            keyboardQuantity : keyboardQuantity,
            keyboardTotalPrice : keyboardTotalPrice
    
        };


        cartData.push(handfreeObj);

        onLoadData(cartData);

     } else  {


        handfreeData = cartData.filter((value) => {

            if(value.keyboardName === 'Lightening Earphones') {
                value.keyboardQuantity = (~~value.keyboardQuantity) + (~~keyboardQuantity);
                value.keyboardTotalPrice +=  ((~~keyboardQuantity.value) + (~~keyboardQuantity)) * keyboardPrice;
                return value;
            }
        });


        onLoadData(cartData);
  
     }
      

     handfreeCounter += 1;


    document.getElementById('handfree-quantity').value = "";


}



function mouseFun() {

    var keyboardPic = ` <img class="img" id="mouse-pic" src="./pics/mouse.jpg" alt="Card image cap">`;
    var keyboardName = document.getElementById('mouse-name').innerText;
    var keyboardPrice = document.getElementById('mouse-price').innerText;
    var keyboardQuantity = document.getElementById('mouse-quantity').value;


    // console.log('keyboard pic ' + keyboardPic );
    // console.log('keyboard Name ' + keyboardName );
    // console.log('keyboard price ' + keyboardPrice );
    // console.log('keyboard quantity ' + keyboardQuantity );

    let keyboardTotalPrice = keyboardPrice * keyboardQuantity;
    totalBill += keyboardTotalPrice;

    if(mouseCounter === 0) {

        var mouseObj = {

            keyboardPic : keyboardPic,
            keyboardName : keyboardName,
            keyboardPrice :keyboardPrice,
            keyboardQuantity : keyboardQuantity,
            keyboardTotalPrice : keyboardTotalPrice
    
        };


        cartData.push(mouseObj);

        onLoadData(cartData);

     } else  {


        mouseData = cartData.filter((value) => {

            if(value.keyboardName === 'BlueTooth Mouse') {
                value.keyboardQuantity = (~~value.keyboardQuantity) + (~~keyboardQuantity);
                value.keyboardTotalPrice +=  ((~~keyboardQuantity.value) + (~~keyboardQuantity)) * keyboardPrice;
                return value;
            }
        });


        onLoadData(cartData);
  
     }
      

     mouseCounter += 1;


    document.getElementById('mouse-quantity').value = "";


}



function onLoadData(cartData) {
   
     document.getElementById("body").innerHTML=createTable(cartData);
     
 }


 function deleteData(id) {
    console.log('Delete data function is called');
    console.log('The deleting product is '+ id);

   for(let i = 0 ; i< cartData.length ; i++)  {

      if(cartData[i].keyboardPrice == id) {

      totalBill -= cartData[i].keyboardTotalPrice;

        cartData.splice(i,1);
      }
   }

   onLoadData(cartData);

};


 function createTable(cartData) {
   
    var row = "<tr>";
    cartData.forEach((value) => {
        row += `<td>${value.keyboardPic}</td>`;
        row += `<td>${value.keyboardName}</td>`;
        row += `<td>${value.keyboardPrice}$</td>`;
        row += `<td>${value.keyboardQuantity} X</td>`;
        row += `<td>${value.keyboardTotalPrice}$</td>`;
        // row += `<td><button type="button"  id="display" onclick="edit(${value.id})" class="btn btn-outline-primary">Edit</button></td>`;
        row += `<td><button type="button"  id="display" onclick="deleteData(${value.keyboardPrice})" class="btn btn-outline-danger mr-3">Delete</button></td></tr>`;
    });
    document.getElementById('totalBill').innerHTML =`Total bill is ${totalBill}$` ;
    return row;

    

}

