---
title: "Advanced Prompt Engineering Techniques"
description: "Master the art of crafting effective prompts for AI coding assistants"
pubDate: 2023-09-15
category: "prompts"
level: "intermediate"
duration: "25 min"
featured: false
imageUrl: "/images/tutorials/advanced-prompts.jpg"
---

# Effective Prompt Engineering for Code Generation

Prompt engineering is the art and science of crafting inputs that help AI models generate the best possible outputs. When working with AI coding assistants, the quality of your prompts directly impacts the quality of the generated code. This guide will teach you advanced techniques for writing effective prompts for code generation.

## Understanding How AI Code Assistants Work

AI code assistants are trained on vast repositories of code and natural language. They learn patterns and relationships between:

- Code structure and syntax
- Natural language descriptions and corresponding implementations
- Common programming problems and solutions
- Coding styles and conventions

When you provide a prompt, the AI tries to predict the most likely continuation based on its training data.

## The Anatomy of an Effective Coding Prompt

### 1. Be Specific and Detailed

Compare these two prompts:

❌ **Poor prompt**: 
```
Write a sorting function
```

✅ **Better prompt**: 
```
Write a TypeScript function that sorts an array of user objects by their registration date (user.registeredAt) in descending order (newest first). The function should be generic and handle null dates by placing them at the end.
```

### 2. Provide Context

Give the AI relevant information about:

- Programming language and version
- Frameworks or libraries you're using
- Existing patterns in your codebase
- Constraints or requirements

Example:
```
I'm working on a React 18 application with TypeScript 4.9. I need a custom hook called useLocalStorage that allows storing and retrieving objects from localStorage with automatic JSON serialization. The hook should have type safety, handle errors when localStorage is not available, and return a tuple similar to useState.
```

### 3. Use Consistent Formatting

AI models respond well to consistent, well-structured prompts:

```
TASK: Create a function to validate email addresses
LANGUAGE: JavaScript
REQUIREMENTS:
- Should validate format using regex
- Must check for valid domains
- Should return true/false
- Include JSDoc comments
EXAMPLE USAGE:
const isValid = validateEmail('user@example.com'); // true
```

### 4. Specify Code Style and Conventions

Mention your preferred:

- Naming conventions (camelCase, snake_case, etc.)
- Code organization (functional vs. OOP)
- Error handling approach
- Documentation style

Example:
```
Write a Python function following PEP 8 style guidelines that reads a CSV file, processes each row, and returns a dictionary of results. Use exception handling with specific error types and include docstrings. Prefer functional programming approaches where appropriate.
```

## Advanced Prompt Techniques

### 1. Chain of Thought Prompting

Guide the AI through a step-by-step reasoning process:

```
I need to implement a caching mechanism for API requests in React. Let's think through this:
1. First, we need a way to store previous API responses
2. We need to check the cache before making a new request
3. We should implement a way to invalidate the cache after a certain time
4. We need to handle loading and error states

Based on these requirements, please implement a useApiCache hook in TypeScript.
```

### 2. Few-Shot Learning

Provide examples of input-output pairs to guide the model:

```
I need to write functions that transform data. Here are some examples:

Input: { name: "John Doe", age: 30 }
Output: { fullName: "John Doe", yearsOld: 30 }

Input: { name: "Jane Smith", age: 25, city: "New York" }
Output: { fullName: "Jane Smith", yearsOld: 25, location: "New York" }

Please write a TypeScript function that performs this transformation.
```

### 3. Iterative Refinement

Start with a basic implementation and progressively refine it:

```
First, write a basic Express.js route handler for user registration.

[AI generates code]

Now, add input validation using Joi or Zod.

[AI enhances code]

Now, add proper error handling and HTTP status codes.

[AI refines further]
```

### 4. Negative Prompting

Specify what you don't want:

```
Write a React component for a responsive navigation menu. Do not use inline styles. Do not use class components. Avoid deprecated React features.
```

## Language-Specific Prompt Templates

### JavaScript/TypeScript

```
/**
 * TASK: [Brief description]
 * 
 * @param {Type} paramName - Description
 * @returns {ReturnType} Description
 * 
 * REQUIREMENTS:
 * - Requirement 1
 * - Requirement 2
 * 
 * EXAMPLE:
 * const result = functionName(input);
 * // Expected output: [...]
 */
```

### Python

```
"""
TASK: [Brief description]

Parameters:
    param1 (type): Description
    param2 (type): Description
    
Returns:
    return_type: Description
    
Requirements:
    - Requirement 1
    - Requirement 2
    
Example:
    >>> function_name(input)
    Expected output
"""
```

## Common Pitfalls to Avoid

### 1. Overly Vague Prompts

Vague prompts lead to generic, often unusable code. Always be specific about your requirements.

### 2. Inconsistent Terminology

Using inconsistent or non-standard terminology can confuse the AI. Stick to conventional programming terms.

### 3. Ignoring Edge Cases

Explicitly mention edge cases and how you want them handled.

### 4. Not Specifying Performance Considerations

If efficiency is important, mention it in your prompt.

## Examples of Effective Prompts for Common Tasks

### 1. Creating a REST API Endpoint

```
Create an Express.js POST endpoint for user authentication with the following specifications:

- Route: /api/auth/login
- Accepts: { email: string, password: string }
- Returns JWT token on success
- Implements proper validation
- Uses async/await with try/catch
- Handles common errors (invalid credentials, server error)
- Includes rate limiting to prevent brute force attacks

Use TypeScript and follow RESTful best practices.
```

### 2. Building a UI Component

```
Create a React dropdown component with the following requirements:

- Written in TypeScript using functional components and hooks
- Props should include:
  - options: Array of { value: string, label: string }
  - selected: string (currently selected value)
  - onChange: Function to handle selection change
  - disabled: boolean (optional)
- Should be accessible (keyboard navigation, aria attributes)
- Should include styling with CSS modules
- Dropdown should close when clicking outside
- Include proper typing for all props and functions

Show both the component and an example of how to use it.
```

## Conclusion

Effective prompt engineering is a skill that develops with practice. By being specific, providing context, and using structured formats, you can dramatically improve the quality of code generated by AI assistants. Remember to always review and test AI-generated code, as even the best prompts can sometimes lead to code that needs adjustments.

## Exercise

Try rewriting the following basic prompt into a more effective one:

```
Write a function to process data from an API
```

## Additional Resources

- [Advanced Prompt Engineering Patterns](/learn/advanced-prompts)
- [Domain-Specific Prompting Techniques](/learn/domain-prompts)
- [AI Collaboration Best Practices](/learn/ai-collaboration)
```

```markdown:blog/src/content/learn/ai-code-review.md
---
title: "Using AI for Code Review and Refactoring"
description: "Learn techniques for leveraging AI to improve existing code, spot bugs, and suggest optimizations."
category: "Code Quality"
level: "intermediate"
featured: true
imageUrl: "/placeholder.svg"
duration: "25 minutes"
pubDate: 2023-12-10
---

# Using AI for Code Review and Refactoring

Code review is a critical part of the development process, helping teams maintain quality, catch bugs, and share knowledge. With the advent of AI coding assistants, developers now have powerful tools to augment traditional code review processes. This guide explores how to effectively use AI for code review and refactoring.

## Why Use AI for Code Review?

- **Efficiency**: AI can quickly analyze large codebases
- **Consistency**: AI applies the same standards across all code
- **Objectivity**: AI doesn't have personal biases or fatigue
- **Learning**: AI can explain why certain patterns are problematic
- **Accessibility**: Provides code review capabilities to solo developers

## Getting Started with AI Code Review

### 1. Setting Up Your Environment

Several tools are available for AI-assisted code review:

- **GitHub Copilot**: Can be used interactively to review and suggest improvements
- **ChatGPT/Claude**: Can analyze code snippets pasted into the chat
- **CodeGuru Reviewer**: Amazon's service for automated code reviews
- **DeepCode**: AI-powered static analysis tool
- **SonarQube with AI extensions**: Combines traditional static analysis with AI capabilities

### 2. Establishing a Review Framework

For effective AI code reviews, establish a framework that focuses on:

- **Correctness**: Does the code work as intended?
- **Style and conventions**: Does the code follow project standards?
- **Performance**: Are there efficiency concerns?
- **Security**: Does the code contain vulnerabilities?
- **Maintainability**: Will the code be easy to understand and modify?

## Effective Techniques for AI Code Review

### 1. Contextual Code Analysis

When submitting code for AI review, include:

```
REVIEW REQUEST:
CODE CONTEXT: This function processes user input from a form and sends it to an API.
LANGUAGE: JavaScript/React
SPECIFIC CONCERNS: Are there any security issues or performance bottlenecks?

[paste code here]
```

### 2. Focused Reviews

Break down large reviews into specific aspects:

```
Please review this code focusing ONLY on error handling patterns.
```

```
Now review the same code focusing ONLY on potential security vulnerabilities.
```

### 3. Comparative Analysis

Ask the AI to compare different versions or approaches:

```
Here are two implementations of the same functionality. Which is more efficient and why?

IMPLEMENTATION A:
[code]

IMPLEMENTATION B:
[code]
```

### 4. Standards Enforcement

Have the AI check for adherence to specific standards:

```
Review this TypeScript code for adherence to the following standards:
- Airbnb Style Guide
- SOLID principles
- Proper TypeScript type usage
```

## AI-Assisted Refactoring

### 1. Code Simplification

Identify and simplify overly complex code:

```
This function is too complex and hard to understand. Please refactor it to be more readable while maintaining the same functionality:

[paste complex function]
```

### 2. Pattern Application

Apply design patterns to improve code structure:

```
This code manages state in a complex way. Please refactor it to use the Observer pattern while keeping the same functionality.
```

### 3. Modernization

Update legacy code to use modern features:

```
This JavaScript code uses older patterns. Please refactor it to use modern ES6+ features like arrow functions, destructuring, async/await, and optional chaining.
```

### 4. Performance Optimization

Identify and address performance issues:

```
This function processes large arrays and is causing performance issues. Please refactor it to be more efficient:

[paste inefficient function]
```

## Example: Complete AI Code Review Workflow

Here's how a complete AI code review process might look:

### Step 1: Initial Review Request

```
I need a comprehensive code review for the following React component that handles user authentication. Please identify any issues with:

1. Security concerns
2. React best practices
3. Error handling
4. Performance optimizations
5. Accessibility

Component code:
```

```jsx
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      })
      .catch(err => {
        setError("Login failed");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
      </div>
      {error && <div style={{color: "red"}}>{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
```

### Step 2: Review Findings and Refactoring Suggestions

After the AI reviews the code, it might provide feedback like:

```
## Code Review: LoginForm Component

### Security Concerns:
- ⚠️ Storing JWT token in localStorage is vulnerable to XSS attacks
- ⚠️ No input validation before sending to the API
- ⚠️ Error message is generic and doesn't help users resolve issues

### React Best Practices:
- ⚠️ Using window.location for navigation instead of React Router
- ⚠️ No form validation
- ⚠️ Component might benefit from custom hooks to separate concerns

### Error Handling:
- ⚠️ Generic error message doesn't provide specific information
- ⚠️ Error is logged to console but not properly handled
- ⚠️ No handling for network errors vs. authentication errors

### Performance:
- ✅ Component is generally lightweight with no major performance concerns
- ℹ️ Could memoize callback functions with useCallback

### Accessibility:
- ⚠️ Missing proper form labels with htmlFor attributes
- ⚠️ No aria attributes for loading state
- ⚠️ Error message not associated with inputs via aria-describedby

### Refactoring Suggestions:

1. Use a secure authentication library or context for token management
2. Implement form validation
3. Use React Router for navigation
4. Improve error handling with specific messages
5. Enhance accessibility
6. Extract authentication logic to a custom hook
```

### Step 3: Request Specific Refactoring

After receiving the review, you can ask for specific refactoring help:

```
Thank you for the review. Could you please refactor this component to address the security and accessibility concerns you identified?
```

## Best Practices for AI Code Review

### 1. Human Oversight

Always review AI suggestions critically. AI might miss context-specific concerns or suggest changes that don't align with project goals.

### 2. Iterative Process

Use AI review as part of an iterative process:
1. Write code
2. Submit for AI review
3. Implement suggested improvements
4. Review again
5. Finalize with human review

### 3. Learn from AI Feedback

Use AI reviews as learning opportunities by asking follow-up questions:

```
Why is storing tokens in localStorage considered insecure? What alternatives do you recommend?
```

### 4. Combine with Traditional Tools

Use AI alongside traditional static analysis tools for comprehensive coverage.

## Common Pitfalls to Avoid

### 1. Over-Reliance on AI

Don't use AI as a replacement for human code review, but as an enhancement.

### 2. Ignoring Context

AI may not understand business logic or project-specific constraints.

### 3. Implementing All Suggestions

Not all AI suggestions are necessary or appropriate. Use critical thinking.

### 4. Sensitive Code Exposure

Be careful about uploading sensitive or proprietary code to external AI services.

## Conclusion

AI-assisted code review and refactoring can significantly improve code quality and development efficiency. By combining AI capabilities with human oversight and judgment, developers can create more robust, maintainable, and secure applications.

The key is to develop a balanced approach where AI handles the repetitive and mechanical aspects of code review, while human developers focus on higher-level concerns like architecture, business logic, and user experience.

## Additional Resources

- [Setting Up Automated AI Code Reviews in CI/CD](/learn/ai-code-review-cicd)
- [Custom Language Models for Project-Specific Code Reviews](/learn/custom-code-review-models)
- [Measuring Code Quality Improvements with AI](/learn/measuring-ai-code-quality)
```

These files should create a working structure for both tools and learn sections similar to how the news section is working. The content includes proper front matter that matches the schema definitions, and the dynamic route pages (.astro files) will process this content to generate pages for each item.
