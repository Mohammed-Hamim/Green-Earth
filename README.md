
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

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

 