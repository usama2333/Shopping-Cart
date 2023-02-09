
var cartData = [];
var keyboardData = [];
var speakerData = [];

var keyboardCounter = 0;
var speakerCounter = 0;

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



        // console.log('This is test keyboard data ');
        // keyboardData.forEach((value) => {
        //     console.log(value);
        // })


        // console.log("This is test keyboard data " + keyboardData[0].keyboardName);
        // cartData.forEach((value) => {
            
        //    
        // });

        onLoadData(cartData);
        
     }
      
    //  console.log("This is keybboard data " +keyboardData);
 

    keyboardCounter += 1;



    



    document.getElementById('keyboard-quantity').value = "";


}


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

            if(value.keyboardName === 'Portable speakers') {
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

        // cartData.forEach((value) => {
            
        //     value.keyboardQuantity = (~~value.keyboardQuantity) + (~~keyboardQuantity);
        //     value.keyboardTotalPrice +=  ((~~keyboardQuantity.value) + (~~keyboardQuantity)) * keyboardPrice;
        // });

        
     }
      

 

    speakerCounter += 1;



    



    document.getElementById('speaker-quantity').value = "";


}


// function speakerFun() {

//     var speakerPic = ` <img class="img" id="speaker-pic" src="./pics/speaker.jpg" alt="Card image cap">`;
//     var speakerName = document.getElementById('speaker-name').innerText;
//     var speakerPrice = document.getElementById('speaker-price').innerText;
//     var speakerQuantity = document.getElementById('speaker-quantity').value;


//     console.log('keyboard pic ' + speakerPic );
//     console.log('keyboard Name ' + speakerName );
//     console.log('keyboard price ' + speakerPrice );
//     console.log('keyboard quantity ' + speakerQuantity );

//     let speakerTotalPrice = speakerPrice * speakerQuantity;

//     if(speakerCounter === 0) {

//         var speakerObj = {

//             speakerPic : speakerPic,
//             speakerName : speakerName,
//             speakerPrice :speakerPrice,
//             speakerQuantity : speakerQuantity,
//             speakerTotalPrice : speakerTotalPrice
    
//         };

//         console.log('Test obj '+speakerObj.speakerName);

//         cartData.push(speakerObj);
//         console.log('Test cartData' +cartData[0].speakerQuantity);

//      } else  {

//         cartData.forEach((value) => {
            
//             value.speakerQuantity = (~~value.speakerQuantity) + (~~speakerQuantity);
//             value.speakerTotalPrice +=  ((~~speakerQuantity.value) + (~~speakerQuantity)) * speakerPrice;
//         });

        
//      }
      

 

//      speakerCounter += 1;

     


//     onLoadData(cartData);



//     document.getElementById('speaker-quantity').value = "";


// }



// 






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
        // row += `<td><button type="button"  id="display" onclick="edit(${value.id})" class="btn btn-outline-primary">Edit</button></td>`;
        row += `<td><button type="button"  id="display" onclick="deleteData()" class="btn btn-outline-danger mr-3">Delete</button></td></tr>`;
    });
    return row;
}

// function deleteData()  {
//     cartData.pop();
// }