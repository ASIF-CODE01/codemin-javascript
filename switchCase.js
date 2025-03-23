
   function monthOfYear(month){

    switch (month) {
        case 1:
            console.log(`${month}-january`); 
            break;
            case 2:
                console.log(`${month}-feb`); 
                break;
                case 3:
                    console.log(`${month}-march`); 
       break;
       case 4:
        console.log(`${month}-april`); 
        break;
        case 5:
            console.log(`${month}-june`); 
            break;
            case 6:
                console.log(`${month}-july`); 
                break;
                case 7:
                    console.log(`${month}-aug`); 
                    break;
                    case 8:
                        console.log(`${month}-sep`); 
                        break;
                        case 9:
                            console.log(`${month}-oct`); 
                            break;

        default:
            console.log(`invalid data ${month}`);
            break;
    }

   }
   monthOfYear(1);
   monthOfYear(2);
   monthOfYear(9);
   monthOfYear(100);
   
