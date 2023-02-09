
var cartData = [];
var keyboardCounter = 0;

function keyboardFun() {

    var keyboardPic = ` <img class="img" id="keyboard-pic" src="./pics/keyboard.jpg" alt="Card image cap">`;
    var keyboardName = document.getElementById('keyboard-name').innerText;
    var keyboardPrice = document.getElementById('keyboard-price').innerText;
    var keyboardQuantity = document.getElementById('keyboard-quantity').value;


    // console.log('keyboard pic ' + keyboardPic );
    // console.log('keyboard Name ' + keyboardName );
    // console.log('keyboard price ' + keyboardPrice );
    // console.log('keyboard quantity ' + keyboardQuantity );

    let keyboardTotalPrice = keyboardPrice * keyboardQuantity;

    if(keyboardCounter === 0) {

        var keyboardObj = {

            keyboardPic : keyboardPic,
            keyboardName : keyboardName,
            keyboardPrice :keyboardPrice,
            keyboardQuantity : keyboardQuantity,
            keyboardTotalPrice : keyboardTotalPrice
    
        };


        cartData.push(keyboardObj);

     } else  {

        cartData.forEach((value) => {
            
            value.keyboardQuantity = (~~value.keyboardQuantity) + (~~keyboardQuantity);
            value.keyboardTotalPrice +=  ((~~keyboardQuantity.value) + (~~keyboardQuantity)) * keyboardPrice;
        });

        // cartData[0].keyboardQuantity = cartData[0].keyboardQuantity + keyboardQuantity;
        // cartData[0].keyboardTotalPrice = (cartData[0].keyboardQuantity + keyboardQuantity) * keyboardPrice;
     }
      

    // console.log('keyboardCounter before' + keyboardCounter);  

   

    
    // console.log('Testing Cart Data');
    // console.log('test quantity'+cartData[0].keyboardQuantity);

    keyboardCounter += 1;

    // console.log('keyboardCounter after' + keyboardCounter);

    onLoadData(cartData);



    document.getElementById('keyboard-quantity').value = "";


}

function onLoadData(cartData) {
   
     document.getElementById("body").innerHTML=createTable(cartData);
     
 }

 function createTable(cartData) {
   
    var row = "<tr>";
    cartData.forEach((value) => {
        row += `<td>${value.keyboardPic}</td>`;
        row += `<td>${value.keyboardName}</td>`;
        row += `<td>${value.keyboardPrice}$</td>`;
        row += `<td>${value.keyboardQuantity}</td>`;
        row += `<td>${value.keyboardTotalPrice}$</td>`;
        row += `<td><button type="button"  id="display" onclick="edit(${value.id})" class="btn btn-outline-primary">Edit</button></td>`;
        row += `<td><button type="button"  id="display" onclick="deleteData(${value.id})" class="btn btn-outline-danger mr-3">Delete</button></td></tr>`;
    });
    return row;
}