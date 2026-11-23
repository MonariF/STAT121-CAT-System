/**
 * KISII UNIVERSITY — STAT 121 CAT
 * Lecturer: Dr. Fred Monari
 *
 * SETUP:
 * 1. Create a new project at https://script.google.com
 * 2. Paste this complete file into Code.gs.
 * 3. Add an HTML file named Index and paste Index.html.
 * 4. Save, then Deploy > New deployment > Web app.
 * 5. Execute as: Me. Choose access appropriate for your students.
 * The script creates its own Google Sheet automatically on first use.
 */

const APP_CONFIG = {
  TITLE: "KISII UNIVERSITY",
  LECTURER: "DR. FRED MONARI",
  COURSE: "STAT 121 CAT",
  QUESTIONS_PER_ATTEMPT: 60,
  OPEN_AT: "2026-10-31T00:00:00+03:00",
  CLOSE_AT: "2026-11-04T23:59:00+03:00",
  ONE_ATTEMPT_PER_REGISTRATION: true,
  RESULTS_SHEET_NAME: "STAT121_CAT_RESULTS"
};

// The 100-question bank is embedded here so no separate import step is required.
const QUESTION_BANK = [{"question":"What is Java?","options":["A spreadsheet application","A high-level programming language","A database table","An operating system","A web browser"],"answer":"A high-level programming language","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-001","marks":1},{"question":"Which component executes Java bytecode?","options":["JDK installer","Java Virtual Machine (JVM)","Text editor","Scanner class","HTML parser"],"answer":"Java Virtual Machine (JVM)","seconds":30,"category":"Java fundamentals","coding":false,"id":"STAT121-002","marks":1},{"question":"What does JVM help make Java?","options":["Platform independent","Only usable on Windows","A markup language","Unable to compile","A database"],"answer":"Platform independent","seconds":30,"category":"Java fundamentals","coding":false,"id":"STAT121-003","marks":1},{"question":"Which command compiles a Java source file?","options":["java","javac","compile.java","jvm","runjav"],"answer":"javac","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-004","marks":1},{"question":"Which file extension is used for Java source code?","options":[".class",".html",".java",".exe",".txt"],"answer":".java","seconds":10,"category":"Java fundamentals","coding":false,"id":"STAT121-005","marks":1},{"question":"Which method is the usual entry point of a Java application?","options":["start()","run()","main()","init()","execute()"],"answer":"main()","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-006","marks":1},{"question":"Which line prints text and then moves to a new line?","options":["System.in.read()","System.out.print()","System.out.println()","Console.next()","print.line()"],"answer":"System.out.println()","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-007","marks":1},{"question":"What is the purpose of a semicolon in Java?","options":["Starts a class","Ends most statements","Declares a package","Opens a loop","Creates an object"],"answer":"Ends most statements","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-008","marks":1},{"question":"Which is a valid declaration of an integer variable?","options":["int age = 20;","integer age = 20;","age int = 20;","int = age 20;","number age := 20;"],"answer":"int age = 20;","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-009","marks":1},{"question":"Which data type stores a decimal number such as 3.14?","options":["boolean","char","int","double","String"],"answer":"double","seconds":10,"category":"Java fundamentals","coding":false,"id":"STAT121-010","marks":1},{"question":"Which data type stores true or false?","options":["boolean","char","String","double","int"],"answer":"boolean","seconds":10,"category":"Java fundamentals","coding":false,"id":"STAT121-011","marks":1},{"question":"Which declaration stores a single character?","options":["String grade = 'A';","char grade = 'A';","int grade = 'A';","boolean grade = 'A';","double grade = 'A';"],"answer":"char grade = 'A';","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-012","marks":1},{"question":"Which declaration correctly stores text?","options":["String name = \"Amina\";","char name = \"Amina\";","text name = Amina;","String name = 'Amina';","int name = \"Amina\";"],"answer":"String name = \"Amina\";","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-013","marks":1},{"question":"Which operator assigns a value to a variable?","options":["==","!=","=","<=","&&"],"answer":"=","seconds":10,"category":"Java fundamentals","coding":false,"id":"STAT121-014","marks":1},{"question":"Which operator tests equality between primitive values?","options":["=","==","++","%","!"],"answer":"==","seconds":10,"category":"Java fundamentals","coding":false,"id":"STAT121-015","marks":1},{"question":"What is the result of 7 % 2 in Java?","options":["0","1","2","3","3.5"],"answer":"1","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-016","marks":1},{"question":"What is the value of 5 + 3 * 2?","options":["16","13","11","10","30"],"answer":"11","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-017","marks":1},{"question":"What does ++ do to a numeric variable?","options":["Decreases it by two","Increases it by one","Multiplies it by zero","Converts it to text","Compares it"],"answer":"Increases it by one","seconds":10,"category":"Java fundamentals","coding":false,"id":"STAT121-018","marks":1},{"question":"Which Scanner method reads an integer?","options":["nextLine()","nextInt()","nextDoubleLine()","readIntLine()","getInteger()"],"answer":"nextInt()","seconds":20,"category":"Java fundamentals","coding":false,"id":"STAT121-019","marks":1},{"question":"What is the difference between next() and nextLine()?","options":["Both always read one character","next() reads a word; nextLine() reads a whole line","nextLine() reads only integers","next() reads the whole file","There is no difference"],"answer":"next() reads a word; nextLine() reads a whole line","seconds":30,"category":"Java fundamentals","coding":false,"id":"STAT121-020","marks":1},{"question":"What is the value of 10 / 3 when both operands are integers?","options":["3.3333","3","4","0","10"],"answer":"3","seconds":30,"category":"Expressions and data types","coding":false,"id":"STAT121-021","marks":1},{"question":"What happens with integer division by zero?","options":["Returns 0","Returns Infinity","Throws ArithmeticException","Returns false","Compiles to a String"],"answer":"Throws ArithmeticException","seconds":30,"category":"Expressions and data types","coding":false,"id":"STAT121-022","marks":1},{"question":"Which class provides methods such as sqrt() and pow()?","options":["Scanner","System","Math","String","Arrays"],"answer":"Math","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-023","marks":1},{"question":"What does Math.sqrt(81) return?","options":["9.0","8.0","81.0","40.5","18.0"],"answer":"9.0","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-024","marks":1},{"question":"What does Math.pow(2, 3) calculate?","options":["2 + 3","2 × 3","2 raised to the power 3","3 raised to the power 2","2 divided by 3"],"answer":"2 raised to the power 3","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-025","marks":1},{"question":"Which String method returns the number of characters?","options":["size()","count()","length()","characters()","capacity()"],"answer":"length()","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-026","marks":1},{"question":"Which String method converts text to uppercase?","options":["upper()","toUpperCase()","capitalizeAll()","makeUpper()","uppercaseText()"],"answer":"toUpperCase()","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-027","marks":1},{"question":"What does substring() do?","options":["Deletes a string","Extracts part of a string","Converts a string to an integer automatically","Counts words only","Sorts an array"],"answer":"Extracts part of a string","seconds":30,"category":"Expressions and data types","coding":false,"id":"STAT121-028","marks":1},{"question":"What is a wrapper class used for?","options":["To wrap source code in comments","To represent primitive values as objects","To repeat loops","To compile Java","To create arrays only"],"answer":"To represent primitive values as objects","seconds":30,"category":"Expressions and data types","coding":false,"id":"STAT121-029","marks":1},{"question":"What is autoboxing?","options":["Converting an object to a primitive automatically","Converting a primitive to its wrapper object automatically","Converting Java to bytecode","Closing a Scanner","Changing a String to uppercase"],"answer":"Converting a primitive to its wrapper object automatically","seconds":30,"category":"Expressions and data types","coding":false,"id":"STAT121-030","marks":1},{"question":"Which is a valid Java identifier?","options":["2score","student-name","studentScore","class","total score"],"answer":"studentScore","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-031","marks":1},{"question":"Which value is the default for an int array element?","options":["null","false","0","1","-1"],"answer":"0","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-032","marks":1},{"question":"Which value is the default for a boolean array element?","options":["true","false","0","null","' ' "],"answer":"false","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-033","marks":1},{"question":"Which value is the default for a reference such as a String array element?","options":["0","false","null","empty string always","space"],"answer":"null","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-034","marks":1},{"question":"What does System.out.print() do?","options":["Prints and always adds a new line","Prints without automatically adding a new line","Reads keyboard input","Compiles a class","Ends the program"],"answer":"Prints without automatically adding a new line","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-035","marks":1},{"question":"What is the purpose of import java.util.Scanner;?","options":["To import a tool for reading input","To create a loop","To declare the main method","To print a line","To define an array"],"answer":"To import a tool for reading input","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-036","marks":1},{"question":"Which expression checks whether n is even?","options":["n / 2 == 0","n % 2 == 0","n % 2 == 1","n == 2","n + 2 == 0"],"answer":"n % 2 == 0","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-037","marks":1},{"question":"What is the result of 4 > 7?","options":["true","false","4","7","Compilation always fails"],"answer":"false","seconds":10,"category":"Expressions and data types","coding":false,"id":"STAT121-038","marks":1},{"question":"Which logical operator means AND in Java?","options":["||","&&","!","==","%"],"answer":"&&","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-039","marks":1},{"question":"Which logical operator means OR in Java?","options":["&&","||","!","=","++"],"answer":"||","seconds":20,"category":"Expressions and data types","coding":false,"id":"STAT121-040","marks":1},{"question":"An if statement executes its block when its condition is…","options":["false","true","null only","an integer only","a String"],"answer":"true","seconds":10,"category":"Conditional statements","coding":false,"id":"STAT121-041","marks":1},{"question":"What type of expression is normally used as an if condition in Java?","options":["Boolean expression","String expression only","Array expression only","Class declaration","Import statement"],"answer":"Boolean expression","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-042","marks":1},{"question":"In an if-else statement, which block runs when the condition is false?","options":["if block","else block","both always","neither ever","main block only"],"answer":"else block","seconds":10,"category":"Conditional statements","coding":false,"id":"STAT121-043","marks":1},{"question":"What does an if-else-if ladder do?","options":["Repeats a block indefinitely","Checks conditions in order until one is true","Creates an array","Declares a class","Reads input"],"answer":"Checks conditions in order until one is true","seconds":30,"category":"Conditional statements","coding":false,"id":"STAT121-044","marks":1},{"question":"In a grade ladder, why should the highest threshold usually be checked first?","options":["To make the program compile faster always","To prevent a lower threshold catching higher marks first","Because Java sorts conditions","Because if requires descending numbers","It is compulsory syntax"],"answer":"To prevent a lower threshold catching higher marks first","seconds":30,"category":"Conditional statements","coding":false,"id":"STAT121-045","marks":1},{"question":"If marks=85 and the first condition is marks >= 80, which branch is selected?","options":["marks >= 50","marks >= 60","marks >= 70","marks >= 80","else"],"answer":"marks >= 80","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-046","marks":1},{"question":"Which structure is often convenient for several fixed values of one expression?","options":["switch","Scanner","StringBuilder","while only","array index"],"answer":"switch","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-047","marks":1},{"question":"What is the purpose of default in a switch statement?","options":["Runs only for case 1","Runs when no case matches","Repeats all cases","Ends the class","Declares a variable"],"answer":"Runs when no case matches","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-048","marks":1},{"question":"What is the usual purpose of break after a switch case?","options":["To restart the switch","To exit the switch and avoid falling through","To declare a new case","To compare strings","To skip compilation"],"answer":"To exit the switch and avoid falling through","seconds":30,"category":"Conditional statements","coding":false,"id":"STAT121-049","marks":1},{"question":"What may happen if break is omitted in a traditional switch case?","options":["The program always stops","Execution may fall through to later cases","The variable becomes null","The class is renamed","The switch becomes a loop"],"answer":"Execution may fall through to later cases","seconds":30,"category":"Conditional statements","coding":false,"id":"STAT121-050","marks":1},{"question":"A switch on day=3 has case 3 printing Wednesday and then break. What is printed?","options":["Monday","Tuesday","Wednesday","Thursday","Invalid day"],"answer":"Wednesday","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-051","marks":1},{"question":"Which condition checks that x is positive?","options":["x < 0","x == 0","x > 0","x <= 0","x != 0 only"],"answer":"x > 0","seconds":10,"category":"Conditional statements","coding":false,"id":"STAT121-052","marks":1},{"question":"Which condition correctly identifies zero?","options":["x > 0","x < 0","x == 0","x = 0","x % 2 == 0"],"answer":"x == 0","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-053","marks":1},{"question":"Which operator means 'not equal to'?","options":["=","==","!=","<=",">="],"answer":"!=","seconds":10,"category":"Conditional statements","coding":false,"id":"STAT121-054","marks":1},{"question":"What is the result of (5 > 2) && (3 < 1)?","options":["true","false","5","2","Compilation error"],"answer":"false","seconds":30,"category":"Conditional statements","coding":false,"id":"STAT121-055","marks":1},{"question":"What is the result of !(4 == 4)?","options":["true","false","4","0","null"],"answer":"false","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-056","marks":1},{"question":"Which is a valid switch default label?","options":["otherwise:","else:","default:","fallback:","case default:"],"answer":"default:","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-057","marks":1},{"question":"Which statement is best for choosing one of four menu actions based on an integer choice?","options":["switch(choice)","String.length()","for-each only","new int[4] only","System.in.println()"],"answer":"switch(choice)","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-058","marks":1},{"question":"What should a program ideally do for an invalid menu selection?","options":["Assume it is valid","Handle it with default or another validation branch","Delete the source file","Ignore all future input","Convert it to a class"],"answer":"Handle it with default or another validation branch","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-059","marks":1},{"question":"In Java, does = mean the same thing as ==?","options":["Yes, always","No; = assigns and == compares","Only inside loops","Only for Strings","Only for arrays"],"answer":"No; = assigns and == compares","seconds":20,"category":"Conditional statements","coding":false,"id":"STAT121-060","marks":1},{"question":"Which loop checks its condition before executing its body?","options":["do-while","while","Both always after","switch","for-each only"],"answer":"while","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-061","marks":1},{"question":"Which loop is guaranteed to execute its body at least once?","options":["while","for","do-while","if","switch"],"answer":"do-while","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-062","marks":1},{"question":"Which loop header is most suitable for counting from 1 to 10?","options":["for (int i=1; i<=10; i++)","for (int i=1; i<0; i++)","while(false)","if(i=10)","switch(i)"],"answer":"for (int i=1; i<=10; i++)","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-063","marks":1},{"question":"In a for loop, what does initialization normally do?","options":["Sets the starting loop variable","Stops the JVM","Prints output","Creates a class","Closes input"],"answer":"Sets the starting loop variable","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-064","marks":1},{"question":"In a for loop, what does the condition determine?","options":["Whether another iteration should run","The file name","The data type of the class","Whether Java is installed","The array's data type"],"answer":"Whether another iteration should run","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-065","marks":1},{"question":"In a for loop, what does i++ usually do?","options":["Decreases i","Increases i by one","Sets i to zero","Compares i with a String","Exits the loop"],"answer":"Increases i by one","seconds":10,"category":"Loops and control flow","coding":false,"id":"STAT121-066","marks":1},{"question":"How many times does for(int i=1; i<=5; i++) execute its body?","options":["4","5","6","1","0"],"answer":"5","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-067","marks":1},{"question":"What values are printed by a loop that starts count=1 and runs while count<=3, printing count then incrementing it?","options":["0, 1, 2","1, 2, 3","1, 2, 3, 4","2, 3, 4","3 only"],"answer":"1, 2, 3","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-068","marks":1},{"question":"What is an infinite loop?","options":["A loop that never executes","A loop whose stopping condition is never reached","A loop with an array","A loop that runs once","A loop inside a method only"],"answer":"A loop whose stopping condition is never reached","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-069","marks":1},{"question":"Why should a loop variable or condition change appropriately?","options":["To guarantee the program can terminate when intended","To make all variables Strings","To avoid using braces","To remove the main method","To compile to HTML"],"answer":"To guarantee the program can terminate when intended","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-070","marks":1},{"question":"What does break do inside a loop?","options":["Skips one print only but keeps looping always","Exits the loop immediately","Restarts the loop","Increments every variable","Creates a nested loop"],"answer":"Exits the loop immediately","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-071","marks":1},{"question":"A while loop has condition false initially. How many times does its body run?","options":["0","1","2","Until the user enters a number","Infinite times"],"answer":"0","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-072","marks":1},{"question":"A do { print; } while(false); statement prints how many times?","options":["0","1","2","Infinite times","It cannot compile"],"answer":"1","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-073","marks":1},{"question":"What is the output of for(int i=0; i<3; i++) System.out.print(i);?","options":["123","012","0123","321","000"],"answer":"012","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-074","marks":1},{"question":"Which loop is generally convenient when the number of iterations is known?","options":["for loop","do-while only","switch","if","break"],"answer":"for loop","seconds":20,"category":"Loops and control flow","coding":false,"id":"STAT121-075","marks":1},{"question":"Which loop is suitable for repeatedly asking for a positive number until valid input is entered?","options":["do-while","switch only","if only","for-each","class declaration"],"answer":"do-while","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-076","marks":1},{"question":"A loop prints numbers 1 to 5 and increments count each time. What prevents it from running forever?","options":["The print statement","count eventually makes count<=5 false","The class name","The semicolon","The JVM name"],"answer":"count eventually makes count<=5 false","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-077","marks":1},{"question":"What is an off-by-one error?","options":["Using the wrong class name only","A loop iterating one time too many or too few","Forgetting to import Scanner","Using a String","A syntax color issue"],"answer":"A loop iterating one time too many or too few","seconds":30,"category":"Loops and control flow","coding":false,"id":"STAT121-078","marks":1},{"question":"What is an array in Java?","options":["A fixed-size collection of values of one data type","A condition","A method return type only","A compiler","A loop counter"],"answer":"A fixed-size collection of values of one data type","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-079","marks":1},{"question":"What is the index of the first element in a Java array?","options":["-1","0","1","2","Depends on the values"],"answer":"0","seconds":10,"category":"Arrays","coding":false,"id":"STAT121-080","marks":1},{"question":"For int[] a = {10,20,30,40}, what is a[2]?","options":["10","20","30","40","2"],"answer":"30","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-081","marks":1},{"question":"For int[] a = {10,20,30,40}, what is the last valid index?","options":["0","2","3","4","40"],"answer":"3","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-082","marks":1},{"question":"What does array.length return?","options":["The last element value","The number of elements","The last valid index","The sum of elements","The data type"],"answer":"The number of elements","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-083","marks":1},{"question":"Which declaration creates an integer array of five elements?","options":["int numbers = new int[5];","int[] numbers = new int[5];","array int numbers(5);","int[5] numbers;","new numbers int[5];"],"answer":"int[] numbers = new int[5];","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-084","marks":1},{"question":"What is the size of String[] names = {\"Ali\", \"Bea\", \"Chen\"};?","options":["0","2","3","4","Unknown at runtime always"],"answer":"3","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-085","marks":1},{"question":"Which expression accesses the third element of array scores?","options":["scores[0]","scores[1]","scores[2]","scores[3]","scores.length"],"answer":"scores[2]","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-086","marks":1},{"question":"What exception can result from accessing an invalid array index?","options":["ArithmeticException","ArrayIndexOutOfBoundsException","ScannerException","LoopException","StringLengthException"],"answer":"ArrayIndexOutOfBoundsException","seconds":30,"category":"Arrays","coding":false,"id":"STAT121-087","marks":1},{"question":"For int[] x = new int[5], which is a valid index?","options":["5","-1","4","6","5.0"],"answer":"4","seconds":20,"category":"Arrays","coding":false,"id":"STAT121-088","marks":1},{"question":"Which loop header visits every array index safely for a nonempty array?","options":["for(int i=0; i<array.length; i++)","for(int i=1; i<=array.length; i++)","for(int i=0; i<=array.length; i++)","for(int i=array.length; i>array.length; i++)","while(false)"],"answer":"for(int i=0; i<array.length; i++)","seconds":30,"category":"Arrays","coding":false,"id":"STAT121-089","marks":1},{"question":"What is the purpose of a for-each loop over an array?","options":["Read/process each element in order without explicitly using an index","Always sort the array","Change the array size","Access invalid indices","Create new elements automatically"],"answer":"Read/process each element in order without explicitly using an index","seconds":30,"category":"Arrays","coding":false,"id":"STAT121-090","marks":1},{"question":"Which is a valid for-each loop for int[] nums?","options":["for(int n : nums) { }","foreach(nums as n)","for(nums : int n)","for(int n = nums)","while(int n : nums)"],"answer":"for(int n : nums) { }","seconds":30,"category":"Arrays","coding":false,"id":"STAT121-091","marks":1},{"question":"If scores are {85,90,78,92,88}, what is their sum?","options":["423","433","443","453","463"],"answer":"433","seconds":30,"category":"Arrays","coding":false,"id":"STAT121-092","marks":1},{"question":"In object-oriented programming, what is a class?","options":["A blueprint describing objects and their members","A single array index","A loop condition","A compiler error","A numeric operator"],"answer":"A blueprint describing objects and their members","seconds":30,"category":"Object-oriented programming","coding":false,"id":"STAT121-093","marks":1},{"question":"What is an object?","options":["An instance of a class","A Java keyword that ends loops","A source file extension","A primitive operator","A Scanner method"],"answer":"An instance of a class","seconds":30,"category":"Object-oriented programming","coding":false,"id":"STAT121-094","marks":1},{"question":"What is the main purpose of a constructor?","options":["Initialize a newly created object","Print every array automatically","End the JVM","Replace all methods","Declare an import"],"answer":"Initialize a newly created object","seconds":30,"category":"Object-oriented programming","coding":false,"id":"STAT121-095","marks":1},{"question":"What does the this keyword commonly refer to?","options":["The current object","The parent folder","The next array element","The JVM","The main method only"],"answer":"The current object","seconds":30,"category":"Object-oriented programming","coding":false,"id":"STAT121-096","marks":1},{"question":"What is encapsulation?","options":["Bundling data and methods and controlling access to an object's state","Repeating a loop","Sorting an array","Converting bytecode to source","Using five answer options"],"answer":"Bundling data and methods and controlling access to an object's state","seconds":30,"category":"Object-oriented programming","coding":false,"id":"STAT121-097","marks":1},{"question":"Which online tool can you use to write and run the Java program described here? Write a Java program that reads an integer and prints whether it is even or odd. Use Scanner and the remainder operator.","options":["JDoodle online Java compiler","Microsoft Paint","A presentation editor","A CSS-only editor","A spreadsheet chart tool"],"answer":"JDoodle online Java compiler","seconds":60,"category":"Programming practice","coding":false,"id":"STAT121-098","marks":1},{"question":"Which online tool can you use to write and run the Java program described here? Write a Java program that uses a for loop to calculate the sum of integers from 1 to n, where n is entered by the user.","options":["JDoodle online Java compiler","Microsoft Paint","A presentation editor","A CSS-only editor","A spreadsheet chart tool"],"answer":"JDoodle online Java compiler","seconds":60,"category":"Programming practice","coding":false,"id":"STAT121-099","marks":1},{"question":"Which online tool can you use to write and run the Java program described here? Given an integer array, write Java code that finds and prints its largest element using a loop.","options":["JDoodle online Java compiler","Microsoft Paint","A presentation editor","A CSS-only editor","A spreadsheet chart tool"],"answer":"JDoodle online Java compiler","seconds":60,"category":"Programming practice","coding":false,"id":"STAT121-100","marks":1}];

function doGet() {
  ensureResultsSheet_();
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle(APP_CONFIG.TITLE + " — " + APP_CONFIG.COURSE)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getAppConfig() {
  return {
    title: APP_CONFIG.TITLE,
    lecturer: APP_CONFIG.LECTURER,
    course: APP_CONFIG.COURSE,
    questionCount: APP_CONFIG.QUESTIONS_PER_ATTEMPT,
    openAt: APP_CONFIG.OPEN_AT,
    closeAt: APP_CONFIG.CLOSE_AT
  };
}

/** Called from the student page. Creates the spreadsheet if it does not exist. */
function ensureResultsSheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty("STAT121_RESULTS_SPREADSHEET_ID");
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); }
    catch (err) { id = ""; }
  }
  if (!id) {
    ss = SpreadsheetApp.create("Kisii University — STAT 121 CAT Results");
    id = ss.getId();
    props.setProperty("STAT121_RESULTS_SPREADSHEET_ID", id);
  }
  let sh = ss.getSheetByName(APP_CONFIG.RESULTS_SHEET_NAME);
  if (!sh) sh = ss.insertSheet(APP_CONFIG.RESULTS_SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow([
      "Submitted At", "Full Name", "Registration Number", "Phone Number",
      "Course Code", "Attempt ID", "Score / 60", "Percentage",
      "Started At", "Finished At", "Timed-out Questions", "Answers JSON"
    ]);
    sh.setFrozenRows(1);
  }
  const defaultSheet = ss.getSheetByName("Sheet1");
  if (defaultSheet && defaultSheet.getLastRow() === 0 && ss.getSheets().length > 1) {
    ss.deleteSheet(defaultSheet);
  }
  return { spreadsheetId: id, url: ss.getUrl(), sheet: sh };
}

function getResultsSheetUrl() {
  // ensureResultsSheet_ returns an object containing the spreadsheet URL.
  const results = ensureResultsSheet_();
  const url = results.url;

  Logger.log("CAT RESULTS SPREADSHEET: " + url);

  return url;
}
function startCAT(student) {
  validateStudent_(student);
  const now = new Date();
  if (APP_CONFIG.OPEN_AT && now < new Date(APP_CONFIG.OPEN_AT)) {
    throw new Error("The CAT has not opened yet.");
  }
  if (APP_CONFIG.CLOSE_AT && now > new Date(APP_CONFIG.CLOSE_AT)) {
    throw new Error("The CAT deadline has passed.");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const results = ensureResultsSheet_();
    const reg = student.regNo.trim().toUpperCase();
    if (APP_CONFIG.ONE_ATTEMPT_PER_REGISTRATION && alreadySubmitted_(results.sheet, reg)) {
      throw new Error("A submission is already recorded for this registration number. Only one attempt is allowed.");
    }

    const selected = shuffle_(QUESTION_BANK.slice()).slice(0, APP_CONFIG.QUESTIONS_PER_ATTEMPT);
    const attemptId = Utilities.getUuid();
    const questions = selected.map(q => ({
      id: q.id,
      question: q.question,
      options: shuffle_(q.options.slice()),
      seconds: Math.max(10, Math.min(60, Number(q.seconds) || 30)),
      category: q.category || ""
    }));

    const attempt = {
      attemptId: attemptId,
      student: {
        fullName: student.fullName.trim(),
        regNo: student.regNo.trim(),
        phone: student.phone.trim(),
        courseCode: (student.courseCode || APP_CONFIG.COURSE).trim()
      },
      startedAt: now.toISOString(),
      questions: questions
    };
    // Correct answers are held server-side only. Store selected IDs/order for scoring.
    const answerKey = selected.map(q => ({id:q.id, answer:q.answer}));
    CacheService.getScriptCache().put("attempt:" + attemptId, JSON.stringify({
      student: attempt.student,
      startedAt: attempt.startedAt,
      answerKey: answerKey,
      order: selected.map(q => q.id)
    }), 21600);

    return attempt;
  } finally {
    lock.releaseLock();
  }
}

/**
 * Called once per question when the student answers OR the timer expires.
 * The server records the first submitted response for that question only.
 * A blank response is a zero; previous questions cannot be reopened in the UI.
 */
function recordAnswer(attemptId, questionId, selectedOption, timedOut) {
  const cache = CacheService.getScriptCache();
  const attemptKey = "attempt:" + attemptId;
  const rawAttempt = cache.get(attemptKey);
  if (!rawAttempt) throw new Error("This attempt has expired. Contact the lecturer.");
  const attempt = JSON.parse(rawAttempt);
  const index = attempt.order.indexOf(questionId);
  if (index < 0) throw new Error("Invalid question for this attempt.");

  const responseKey = "responses:" + attemptId;
  const rawResponses = cache.get(responseKey);
  const responses = rawResponses ? JSON.parse(rawResponses) : {};
  if (Object.prototype.hasOwnProperty.call(responses, questionId)) {
    return {accepted:false, message:"This question has already been recorded."};
  }
  const keyItem = attempt.answerKey.find(x => x.id === questionId);
  const chosen = timedOut ? "" : String(selectedOption || "");
  const correct = chosen !== "" && keyItem && chosen === keyItem.answer;
  responses[questionId] = {
    answer: chosen,
    correct: !!correct,
    timedOut: !!timedOut,
    recordedAt: new Date().toISOString()
  };
  cache.put(responseKey, JSON.stringify(responses), 21600);
  cache.put(attemptKey, JSON.stringify(attempt), 21600);
  return {accepted:true, correct:!!correct};
}

function finishCAT(attemptId, timedOut) {
  const cache = CacheService.getScriptCache();
  const attemptKey = "attempt:" + attemptId;
  const rawAttempt = cache.get(attemptKey);
  if (!rawAttempt) throw new Error("This attempt has expired or has already been submitted.");
  const attempt = JSON.parse(rawAttempt);
  const responseKey = "responses:" + attemptId;
  const rawResponses = cache.get(responseKey);
  const responses = rawResponses ? JSON.parse(rawResponses) : {};

  // Any question not recorded by the browser is treated as unanswered and receives zero.
  let score = 0, timedOutCount = 0;
  attempt.order.forEach(id => {
    const r = responses[id];
    if (r && r.correct) score += 1;
    if (!r || r.timedOut || !r.answer) timedOutCount += 1;
  });

  const results = ensureResultsSheet_();
  const now = new Date();
  const answerDetails = {};
  attempt.order.forEach(id => {
    const r = responses[id] || {answer:"", correct:false, timedOut:true};
    answerDetails[id] = r;
  });

  results.sheet.appendRow([
    now, attempt.student.fullName, attempt.student.regNo, attempt.student.phone,
    attempt.student.courseCode, attemptId, score, Math.round(score / 60 * 10000) / 100,
    new Date(attempt.startedAt), now, timedOutCount, JSON.stringify(answerDetails)
  ]);
  cache.remove(attemptKey);
  cache.remove(responseKey);
  return {
    score: score,
    total: 60,
    percentage: Math.round(score / 60 * 10000) / 100,
    timedOutCount: timedOutCount,
    message: "Your CAT has been submitted successfully."
  };
}

function validateStudent_(s) {
  if (!s || !s.fullName || !s.regNo || !s.phone) {
    throw new Error("Enter your full name, registration number, and phone number.");
  }
  if (String(s.fullName).length > 150 || String(s.regNo).length > 80 || String(s.phone).length > 40) {
    throw new Error("One or more student details are too long.");
  }
}

function alreadySubmitted_(sheet, reg) {
  if (!sheet || sheet.getLastRow() < 2) return false;
  const regs = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getDisplayValues();
  return regs.some(row => String(row[0]).trim().toUpperCase() === reg);
}

function shuffle_(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}