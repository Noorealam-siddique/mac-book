// Extra memory part-------------


document.getElementById("memory-fst").addEventListener('click', function(){
    const extramemoryCost = document.getElementById('ext-memory-cost');
    const Mcost = extramemoryCost.innerText;
    extramemoryCost.innerText = 0;
    getTotal()
})

document.getElementById("memory-last").addEventListener('click', function(){
     const extramemoryCost = document.getElementById('ext-memory-cost');
    const Mcost = extramemoryCost.innerText;
    const extmemoryCostnumber =parseInt(Mcost);
    extramemoryCost.innerText = 180;
    getTotal()
})


// storage part------------------------------------------------


document.getElementById("storage-fst").addEventListener('click', function(){
    const extramemoryCost = document.getElementById('ext-storage-cost');
    const Mcost = extramemoryCost.innerText;
    extramemoryCost.innerText = 0;
    getTotal()
})

document.getElementById("storage-secound").addEventListener('click', function(){
    const extramemoryCost = document.getElementById('ext-storage-cost');
    const Mcost = extramemoryCost.innerText;
    extramemoryCost.innerText = 100;
    getTotal()
})

document.getElementById("storage-third").addEventListener('click', function(){
    const extramemoryCost = document.getElementById('ext-storage-cost');
    const Mcost = extramemoryCost.innerText;
    const extmemoryCostnumber =parseInt(Mcost);
    extramemoryCost.innerText = 180;
    getTotal()
})



// delivery cost part


document.getElementById("delivery-fst").addEventListener('click', function(){
    const extramemoryCost = document.getElementById('ext-delivery-cost');
    const Mcost = extramemoryCost.innerText;
    extramemoryCost.innerText = 0;
    getTotal()
})

document.getElementById("delivery-last").addEventListener('click', function(){
    const extramemoryCost = document.getElementById('ext-delivery-cost');
    const Mcost = extramemoryCost.innerText;
    extramemoryCost.innerText = 20;
    getTotal()
})


// Total cost part---


function getTotal(){
    const bestPrice = document.getElementById('best-price');
    const extraMemory = document.getElementById('ext-memory-cost');
    const extraStorageCost = document.getElementById('ext-storage-cost');
    const extraDeliveryCost = document.getElementById('ext-delivery-cost');
    console.log(bestPrice);

    // parseFloat
    const bestPriceNumber = parseFloat(bestPrice.innerText);
     const extraMemoryNumber = parseFloat( extraMemory.innerText);
    const extraStorageCostNumber = parseFloat( extraStorageCost.innerText);
    const extraDeliveryCostNumber = parseFloat( extraDeliveryCost.innerText);
   
    const totalCost = document.getElementById('ext-total');
    const sum = extraDeliveryCostNumber + bestPriceNumber + extraMemoryNumber + extraStorageCostNumber;
    totalCost.innerText= sum;    
    
    const promocodeTotal = document.getElementById("after-promo-code-total");
    promocodeTotal.innerText = sum;
}


                                //-------------------
                                //-------- bonus part
                                // ------------------
                            
 document.getElementById("promo-id").addEventListener("click", function(){
    // promo code and last sum
    const bestPrice = document.getElementById('best-price');
    const extraMemory = document.getElementById('ext-memory-cost');
    const extraStorageCost = document.getElementById('ext-storage-cost');
    const extraDeliveryCost = document.getElementById('ext-delivery-cost');

    // parseFloat
    const bestPriceNumber = parseFloat(bestPrice.innerText);
     const extraMemoryNumber = parseFloat( extraMemory.innerText);
    const extraStorageCostNumber = parseFloat( extraStorageCost.innerText);
    const extraDeliveryCostNumber = parseFloat( extraDeliveryCost.innerText);
   
    const totalCost = document.getElementById('ext-total');
    const sum = extraDeliveryCostNumber + bestPriceNumber + extraMemoryNumber + extraStorageCostNumber;
    totalCost.innerText= sum;   


     const promocodeTotal = document.getElementById("after-promo-code-total");
     const inputPromo = document.getElementById('promo-apply-input');
     const inputPromoValue = inputPromo.value;
     if(inputPromoValue == 'stevekaku'){
        promocodeTotal.innerText =  sum - (sum/100*20)
    }
    inputPromo.value ="";
 })