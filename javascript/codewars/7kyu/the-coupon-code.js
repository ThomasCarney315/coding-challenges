// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    const convert = date => {
      date = date.split(' ')
      date[0] === 'January' ? date[0] = 1 :
      date[0] === 'February' ? date[0] = 2 :
      date[0] === 'March' ? date[0] = 3 :
      date[0] === 'April' ? date[0] = 4 :
      date[0] === 'May' ? date[0] = 5 :
      date[0] === 'June' ? date[0] = 6 :
      date[0] === 'July' ? date[0] = 7 :
      date[0] === 'August' ? date[0] = 8 :
      date[0] === 'September' ? date[0] = 9 :
      date[0] === 'October' ? date[0] = 10 :
      date[0] === 'November' ? date[0] = 11 : date[0] = 12
      return date.map(n => Number.parseInt(n))
    }
    let date = convert(currentDate)
    let exp = convert(expirationDate)
    let code = enteredCode === correctCode 
    let good 
    
    if (date[2] < exp[2])
      good = true
    else if(date[2] > exp[2])
      good = false
    else if (date[0] < exp[0])
      good = true
    else if (date[0] > exp[0])
      good = false
    else if (date[1] <= exp[1])
      good = true
    else
      good = false
    
    return code && good
    }

    // function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //     return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
    //   }

    

