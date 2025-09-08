
#### 1) What is the difference between var, let, and const?

### Answer: The differences between var, let and const in JavaScript are reassignment, scope and hoisting. For Example:
    ### 1: Var
         a) Function-scoped- accessible anywhere within the function;         
         b) It can be reassigned and re-declared within its scope.
         c) It can be hoisted to the top of its scope and initialized with undefined.
    
    #### 2: Let 
        a) Block-scoped - can only be accessible within the block where it's declared.
        b) Value is re-assignable but can not be redeclared in the same scope.
        c) Provide ReferenceError if accessed before declaration
   
    #### 2: Const  
        a) Block-scoped - can only be accessible within the block where it's declared.
        b) Value is not re-assignable but can not be redeclared in the same scope.
        c) Must be initialized with a value at time of declaration and show Provide  ReferenceError if accessed before declaration


#### 2) What is the difference between map(), forEach(), and filter()? 

### Answer: The differences between them are below:
    ### 1) map()
         a) Transform each element in an array and create a new array. 
         b) Return a new array of the same length as the original. The original array remains unchanged.
   
    ### 1) forEach():
         a)  Iterate over each element in an array. 
         b)  Does not return a new array or any value.
   
    ### 1) filter():
         a)  Create a new array containing only the elements from the original array that pass a specified condition.
         b) Return a  new array containing a subset of the original array's elements.The original array remains unchanged.

#### 3) What are arrow functions in ES6?

### Answer: Arrow functions are a concise syntax in ES6 for writing function expressions in JavaScript. They offer a shorter way to define functions.

    ### They remove the need for the function keyword and often allow for implicit returns and omission of parentheses for single parameters.
    JavaScript

    ### Arrow functions do not have their own this context. Instead, they inherit the this value from the scope in which they are defined. 

    ### Arrow functions do not have their own arguments object.

    ### Arrow functions cannot be used with the new keyword to create new instances.
    
    ### If the function body consists of a single expression, the return keyword and curly braces can be omitted, and the expression's result will be implicitly returned.
 




#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

 