# 🚀 DevStack - Interactive Tech Stack Builder

DevStack is a modern, responsive web application that helps developers discover, compare, and assemble customized technology stacks for their software projects with real-time feedback and dynamic stack management.

---

## 🛠️ Technologies Used

- **React 19** - Component-based user interface library
- **Vite** - Lightning-fast build tool and frontend development server
- **Tailwind CSS v4** - Modern utility-first styling system with custom CSS variables
- **DaisyUI v5** - UI component library for smooth accordions and layouts
- **React Toastify** - Real-time toast notifications for user interactions

---

## ✨ Key Features

1. **Interactive Tech Catalog & Stack Customization**
   - Browse curated technologies with difficulty, ratings, category tags, and status badges. Add them to your stack with instant feedback, button state transitions, and duplicate prevention.
2. **Dynamic "Your Stack" Sidebar & Management**
   - Real-time stack tracker showing selected technology count, individual 1-click removal, empty state placeholders, and a bulk "Remove All" option.
3. **Interactive DaisyUI FAQ & Responsive Navigation**
   - Built-in accordion-style FAQ section with collapse animations and responsive mobile hamburger drawer.

---

## 💡 React Core Concepts (Questions & Answers)

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension that allows developers to write HTML directly inside js files. It is used in React because it makes UI components easier to read, write, and visualize alongside their corresponding logic.

### 2. What is the difference between props and state?
**Answer:** 
- **Props:** This is the data that comes from parent component to child component. Props are readonly and child cannot change them directly.
- **State:** This is the component's own data that can change over time. When state changes, React automatically re-render the component to update UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` is a React hook that helps us create and manage dynamic data in functional components. Whenever we update the state value, the component re-renders. 
In this project, I used `useState` in:
- `ExploreTechnologies.jsx` for storing the technologies list, keeping track of selected items in the stack (`selectedStack`), and loading state.
- `Navbar.jsx` to toggle the mobile hamburger menu open and close (`mobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` hook is used for handling side effects like fetching data from API or file, setting timers, or interacting with browser. I used it with empty dependency array `[]` so that when the page first load, it will fetch the `technologies.json` data once and save it into state.

### 5. Why does every item in a `.map()` list need a unique key prop?
**Answer:** When we render list using `.map()`, React needs unique `key` prop to track each element properly. It helps React to know exactly which item is added, removed or modified so it only updates that specific item in the DOM instead of re-rendering whole list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means showing different UI or elements based on some condition (like if-else or ternary operator).
In `YourStack.jsx`, I used it to show empty message when no item is added, or show the stack list when user adds technology:
```jsx
{count === 0 ? (
  <div className="border border-dashed border-gray-200 rounded-xl py-10 px-4 text-center">
    <p className="text-sm font-medium text-gray-400">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {/* List of selected items */}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** 
- **Parent to Child:** Parent passes data directly using custom attributes called **props** (e.g. `<TechCard tech={tech} />`).
- **Child to Parent:** Parent passes a function as a prop to child, and when something happens (like button click), child call that function with arguments to pass data back up to parent (e.g. `onAddToStack(tech)`).


