
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberofpeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    
    bill = Number(billInput.value)
    
   const tippercentage = Number(tipInput.value)/100


    const tipAmount = bill * tippercentage

    const total = bill + tipAmount;
  
   
      perPersonTotal = total / numberofpeople
  
  perPersonTotalDiv.innerText =`$${perPersonTotal.toFixed(2)}` 
  }
  

  const increasePeople = () => {
    
        numberofpeople += 1
    
    numberOfPeopleDiv.innerText = numberofpeople  
  
   
      calculateBill()
  }
  
 
  const decreasePeople = () => {
   
         if( numberofpeople <= 1  ){
            throw("Hey! You cannot have less than 1 person!")

            return
         }
    
 
    numberofpeople -= 1
  
   
    numberOfPeopleDiv.innerText = numberofpeople 
  
    
    calculateBill()
  }