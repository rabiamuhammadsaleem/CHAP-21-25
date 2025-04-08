               // ----------- Chapter 21-25 String Methods ----------

        "QUESTION NO:01"
// 1.Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let fname = prompt("Enter the first name")
// let lname = prompt("Enter the last name")
// let name = fname+" "+ lname
// alert("welcome! "+name)


        "QUESTION NO:02"
// 2.Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// let favmobile = prompt("Enter your favorite mobile phone model")
// document.write("My favourite phone mobile: ",favmobile+"<br>")
// let length = favmobile.length
// document.write("Length of strings: ",length+"<br>")


        "QUESTION NO:03"
// 3.Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// let word = "Pakistani"
// document.write("String:",word+"<br>")
// let index = word.indexOf("n")
// document.write("Index of 'n': ",index+"<br>")


        "QUESTION NO:04"
// 4.Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// let word = "Hello World"
// document.write("String: ",word+"<br>")
// let index = word.lastIndexOf("l")
// document.write("Last index of 'l' is: ",index+"<br>")


        "QUESTION NO:05"
// 5.Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// let word = "Pakistani"
// document.write("String:",word+"<br>")
// let Character = word.charAt("3")
// document.write("Character at index 3: ",Character+"<br>")

 
        "QUESTION NO:06"
// 6.Repeat Q1 using string concat() method.

// let fname = prompt("Enter the first name")
// let lname = prompt("Enter the last name")
// alert("welcome! "+fname.concat(" "+lname))


        "QUESTION NO:07"
// 7.Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad"
// document.write("City: " ,city+"<br>")
// let replace = city.replace("Hyder","Islam")
// document.write("After replacement: ",replace+"<br>")


        "QUESTION NO:08"
// 8.Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together"
// document.write("message: " ,message+"<br>")
// let replace = message.replaceAll("and","&")
// document.write("After replacement: ",replace+"<br>")


        "QUESTION NO:09"
// 9.Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// let string = "472"
// document.write("Value: ",string+"<br>")
// document.write("Type: "+typeof(string)+"<br>")

// let num = Number(string)
// document.write("Value: ",num+"<br>")
// document.write("Type: "+typeof(num)+"<br>")


        "QUESTION NO:10"
// 10.Write a program that takes user input. Convert and show the input in capital letters.

// let word = prompt("Enter any word ")
// document.write("User input: ",word+"<br>")
// document.write("Upper case: ",word.toUpperCase()+"<br>")


        "QUESTION NO:11"
// 11.Write a program that takes user input. Convert and show the input in title case.

// let word = prompt("Enter any word ")
// document.write("User input: ",word+"<br>")
// document.write("Title case: ",word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()+"<br>")


        "QUESTION NO:12"
// 12.Write a program that converts the variable num to string.
// let num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let num = 35.36
// document.write("Number: ",num+"<br>")
// let str = num.toString()
// let result = str.replace(".","")
// document.write("Result: ",result+"<br>")


        "QUESTION NO:13"
// 13.Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// let userInput=prompt("Enter your name: ");
// let charCode;
// for(let i=0;i<userInput.length;i++){
//     charCode=userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }
// }


        "QUESTION NO:14"
// 14.You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am").toLowerCase()
// let found = false
// for(let i = 0;i<A.length;i++){
//     if(userInput === A[i]){
//       document.write(userInput+" is available at index "+i+" in our bakery")
//       found = true;
//       break
//     }
// }
// if(found === false){
//          document.write("We are sorry! " + userInput + " is not available in our bakery")
//     }


        "QUESTION NO:15"
// 15. Write a program to take password as an input from user. The password must qualify these requirements:

// let password = prompt("Please enter your password:");

// // a. It should contain alphabets and numbers
// if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     alert("Password must contain both alphabets and numbers.");
// } 

// b. It should not start with a number
// else if (password[0].match(/[0-9]/)) {
//     alert("Password should not start with a number.");
// } 

// c. It must at least 6 characters long
// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } 

// If the password does not meet above requirements prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// else {
//     alert("Password is valid!");
// }


        "QUESTION NO:16"
// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = "University of Karachi"
// for (let i=0;i<university.length;i++){
//     let word = university.charAt(i)+"<br>"
//     document.write(word);
// }


        "QUESTION NO:17"
// 17.Write a program to display the last character of a user input.

// let userInput = prompt("Write a word")
// document.write("User input :"+userInput+"<br>")
// let character = userInput[userInput.length-1]
// document.write("Last character of input:"+character)


        "QUESTION NO:18"
// 18.You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// let sentence = "The quick brown fox jumps over the lazy dog."
// let lower = sentence.toLowerCase()
// let word = "the"
// let count = 0
// let split = lower.split(" ")

// for(let i=0;i<split.length;i++){
//     if(split[i] === word){
//         count++
//     }
// }
// document.write("Text: ", sentence+"<br>")
// document.write("There are "+count+" occurance(s) of word 'the'"+"<br>");


                // ---------------------------End of Chap 21-25------------------------------