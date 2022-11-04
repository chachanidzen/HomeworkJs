
//1.
let user = {
 firstname: "giorgi",
 lastname: "smith",
 age:25,
 studentstatus: "active"
}

console.log(user.studentstatus);

//2.

let students= ['nino', 'mariam', 'natia', 'lela', 'giorgi', 'mamuka', 'tina'];

for (let i = 0; i < students.length; i++){
console.log(students[i]);
}


let n=0;

while( n < students.length)
{
    console.log(students[n]);
    n++;


}


//3

let numbers = [2, 5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for( let num =0; num<numbers.length; num++){
    if(numbers[num]>5){
        console.log(numbers[num]);
        }
}


//4
// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:
// hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


let student = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}


if(student.age<18 & student.studentstatus=='active'){
    
    console.log('Hello');
    
}

else if(student.name== 'levan'){
    console.log('Hello levan');
}
else if(student.studentstatus=='active' || student.age < 25){
    console.log('hello world');
}

else{
    console.log('error');
}



//5
//მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
let positive;
for(let arrays of array){
    
    for(positive of arrays){
       // console.log(positive);
    

    if(positive>0){
        let count = positive++;
        console.log(count);
    }
}
}





//6
// 1.ამოიღეთ მარტო ლუწი რიცხვები

// 2.ამოიღეთ კენტი რიცხვები

let array1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
let array1num;
//1 
for (array1num   of array1){
    if (array1num %2 == 0){
        console.log(array1num);
    }
}

//2 
for(array1num of array1){
    if(array1num %2 == 1){
        console.log(array1num);
    }
}


//7 შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს   მხოლოდ დადებითი რიცხვების ჯამს: 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum(...numbers1){
        let numSum =0;
    for(let numitem of numbers1){
        if(numitem > 0){
            numSum+=numitem;
        }
    }
    return numSum;
}

 let positiveNumbersSum= sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
 console.log(positiveNumbersSum);




//8 ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
let users = {

    firstname: 'giorgi',

    lastname: 'saakadze',
  
    age: 32,
  
    isloggedin: true
  
  }
   
  function fullname(data){
    if(users.isloggedin==true){
        return users.firstname+' '+users.lastname;
    }
    else if(users.isloggedin== false){
        
        return false;
    }
  }

let names= fullname(users);
console.log(names);
  
      
  
  



//9 შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური

function parameter(...numberarray){
    let maxnum= 0;
  for(let maxnumber of numberarray){
  
    if(maxnumber>maxnum){
        maxnum=maxnumber;
    }
}
    return maxnum;
  }


let max=parameter(56, 89, 63, 8, 5, 78);
console.log(max);





//10მოცემულია მასივი, გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10-ზე

let array2 = [1,2,4,10,34,5,7,87]
for(let array2num of array2){
    if(array2num<10 & array2num>0)
    {
        console.log(array2num);
    }
}



//11 მოცემულია მასივი, ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი

let numbersarray =[1,2,3,4,5,6,7,8,9,10]

for(let k of numbersarray){
    if(k == 5){
        break;
        
    }
    console.log(k);
    
}






