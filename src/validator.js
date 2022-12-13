const validator = {
  // ...
  isValid: (ccNumber) =>{
    // Takes length form the credit card number
    const length = ccNumber.length;
    let count = 0;

    //If it's an even number
    if(length % 2 === 0){
      
      //*  Starts at the beginning of the number and begins doubling from the first number.
      for(let i = 0; i < length; i++)
      {
        // This converts strings into numbers  
        let currentDigit = parseInt(ccNumber[i]);
        if (i % 2 === 0) // I only want to double every other number, starts doubling with the second-to-last number. I don't want to double the last number.
        {
        // If the results it's +9  
          if ((currentDigit *= 2) > 9)
          {
            // Separate the number into component parts and then add them together.
            const trailingNumber = currentDigit % 10;
            // Converts strings into numbers 
            const firstNumber = parseInt(currentDigit / 10);
            // If currentDigit was 18 then currentDigit is now 9.
            currentDigit = firstNumber + trailingNumber;
          }
        }
        
        count += currentDigit;
      }
    }
    else {
      
      //*  Starts at the end of the number and begins doubling from the second to last number. 
      //* This allegedly fixes the case for odd-numbered length credit card numbers. i.e., amex
      for(let i = length - 1 ; i >= 0; i--)
      {
        let currentDigit = parseInt(ccNumber[i]);
        if ((i - 1) % 2 === 0) // I want to double every other number, starts doubling with the second-to-last number. 
        //*I don't want to double the last number.
        {
          if ((currentDigit *= 2) > 9)
          {
            // Separate the number into component parts and then add them together.
            const trailingNumber = currentDigit % 10;
            const firstNumber = parseInt(currentDigit / 10);
            // If currentDigit was 18 then currentDigit is now 9.
            currentDigit = firstNumber + trailingNumber;
          }
        }
        
        count += currentDigit;
      }
    }

    return (count % 10) === 0;
  },

  maskify: (input) =>{
    return input.replace(/.(?=.{4})/g, "#");
  }
};

export default validator;
