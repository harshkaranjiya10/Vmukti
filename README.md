
# Vmukti Fullstack Test

### Section 1: Node.js and RESTful APIs (30 Marks)
#### Explain what middleware is in Express and provide an example of a use case.

```bash
  middleware functions are functions that have access to the req (request), res (response), and next objects. 
  Example:  Logging requests, Handling authentication
```

### Section 2: React.js (30 Marks) 
#### What are React hooks? Briefly describe the useState and useEffect hooks with examples.  
```bash
    React Hooks: is a function which allows us to use state. React Hooks provides side effects, manage state without writing a class components.
    
    useState:
        useState hook manage state. useState hook returns a array of two element. first is state value and second element is function.
            State-value is used in within that function. And using set-function we change the value of the state.
        Example: const [count, setCount] = useState(0)
        const handelButton() {
            setCount(prevCount => prevCount+1);
        }

    useEffect:
        useEffect function handles side effect of the app components.
         useEffect hook accept two parameter, callback function and dependencies (optional). 
        
        Example: Fetching data from backend or update a state when the dependencies get change.
        useEffect( () => {
            const res = axios.get("https:localhost:5000/products");
            setProducts(res);
            },[])

```

### Section 3: NoSQL Databases (20 Marks)
#### MongoDB Query Task (10 Marks) 
o Find all products with a price greater than 100. 
```bash
    Product.find({price: {$gt: 100}})
```
o Update the category of a product with a specific id to "Updated Category".
```bash
    Product.findByIdAndUpdate(
    id, 
    {category: "Updated Category"}, 
    {new: true})
```

#### Explain the difference between SQL and NoSQL databases. Provide an example of when you would prefer NoSQL over SQL.
```bash
Structure:
    SQL Databases: Relational, where data is stored in tables with predefined rows and columns.
    NoSQL Databases: Non-relational, where data is stored in formats like key-value pairs, documents, wide-columns, or graphs.

Query Language:
    SQL Databases: Use Structured Query Language (SQL) to define, manipulate, and query data.
                  Example: SELECT * FROM users WHERE id = 1;
    NoSQL Databases: Use JSON-based or similar query languages tailored to the database type.
                  Example in MongoDB: { "name": "John" }.
     
example of when to use NoSQL over SQL:
    When we wanted to create a real time updates and store more data or retrive more data from database. Then use NOSQL.
    
    Example: E-commerce app where A user shop products in real time.
              An app provides recommended products or search for relevant products.
        -NoSQL databases like MongoDB can store and quickly fetch large amounts of user
        -NoSQL allows you to store all kinds of product data without needing a fixed table structure. 
```

### Section 4: Additional Skills (20 Marks) 
#### Git Commands (5 Marks) Write the Git commands to: 
o Clone a repository.

```bash
  git clone https://github.com/<username>/<repoitory_name>
  git clone https://github.com/harshkaranjiya10/Vmukti
``` 

o Create a new branch named feature-login. 
```bash
   git branch feature-login
``` 

o Push the new branch to a remote repository. 
```bash 
     push -u origin <branch-name>
     push -u origin feature-login
```

#### Docker Basics (5 Marks) 
What is Docker, and how does it benefit developers? Provide a basic Dockerfile to containerize a Node.js application. 
```bash 
     
```

#### Debugging & CI/CD (10 Marks) 
o Explain two common debugging techniques in a fullstack application. 
```bash 
     
```
o What is a CI/CD pipeline and why is it important in software development?
```bash
  
```  
