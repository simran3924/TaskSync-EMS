//localStorage.clear()

const employees = [
  {
    Id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCounts: { active: 2, newTask:1, completed: 1, failed: 1 },
    tasks: [
      { taskTitle: "Refactor API endpoints", taskDescription: "Handle code changes, optimizations, and bug fixes in the repository.", taskDate: "2026-10-22", category: "Development", active: true, completed: false, failed: false },
      { taskTitle: "Create landing page UI", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-10-29", category: "Design", active: false, completed: false, failed: true },
      { taskTitle: "Prepare monthly budget", taskDescription: "Ensure accurate books, process payments, and track organizational expenses.", taskDate: "2026-10-28", category: "Finance", active: false, completed: true, failed: false },
      { taskTitle: "Fix login bug", taskDescription: "Handle code changes, optimizations, and bug fixes in the repository.", taskDate: "2026-10-20", category: "Development", active: true, completed: false, failed: false }
    ]
  },
  {
    Id: 2,
    firstName: "Vihaan",
    email: "employee2@company.com",
    password: "password123",
    taskCounts: { active: 4, newTask:2, completed: 1, failed: 1 },
    tasks: [
      { taskTitle: "Audit financial statement", taskDescription: "Ensure accurate books, process payments, and track organizational expenses.", taskDate: "2026-10-19", category: "Finance", active: false, completed: false, failed: true },
      { taskTitle: "Wireframe dashboard", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-10-25", category: "Design", active: true, completed: false, failed: false },
      { taskTitle: "Performance review", taskDescription: "Manage team relations, hiring pipelines, and documentation.", taskDate: "2026-10-23", category: "HR", active: true, completed: false, failed: false },
      { taskTitle: "Regression testing", taskDescription: "Validate features, write tests, and ensure software stability before release.", taskDate: "2026-10-30", category: "QA", active: false, completed: true, failed: false },
      { taskTitle: "Analyze SEO traffic", taskDescription: "Execute promotional strategies, content curation, and data analytics.", taskDate: "2026-10-21", category: "Marketing", active: true, completed: false, failed: false },
      { taskTitle: "Automated UI tests", taskDescription: "Validate features, write tests, and ensure software stability before release.", taskDate: "2026-10-20", category: "QA", active: true, completed: false, failed: false }
    ]
  },
  {
    Id: 3,
    firstName: "Ananya",
    email: "employee3@company.com",
    password: "password123",
    taskCounts: { active: 4, newTask:5, completed: 4, failed: 1 },
    tasks: [
      { taskTitle: "Refactor API endpoints", taskDescription: "Handle code changes, optimizations, and bug fixes in the repository.", taskDate: "2026-11-01", category: "Development", active: false, completed: true, failed: false },
      { taskTitle: "Tax compliance check", taskDescription: "Ensure accurate books, process payments, and track organizational expenses.", taskDate: "2026-10-31", category: "Finance", active: true, completed: false, failed: false },
      { taskTitle: "Optimize workflow", taskDescription: "Keep systems running smoothly and optimize administrative tasks.", taskDate: "2026-10-27", category: "Operations", active: true, completed: false, failed: false },
      { taskTitle: "Conduct interview", taskDescription: "Manage team relations, hiring pipelines, and documentation.", taskDate: "2026-10-27", category: "HR", active: false, completed: true, failed: false },
      { taskTitle: "Load testing", taskDescription: "Validate features, write tests, and ensure software stability before release.", taskDate: "2026-11-02", category: "QA", active: false, completed: true, failed: false },
      { taskTitle: "Process invoices", taskDescription: "Ensure accurate books, process payments, and track organizational expenses.", taskDate: "2026-10-30", category: "Finance", active: true, completed: false, failed: false },
      { taskTitle: "Implement OAuth2", taskDescription: "Handle code changes, optimizations, and bug fixes in the repository.", taskDate: "2026-10-31", category: "Development", active: false, completed: true, failed: false },
      { taskTitle: "Implement OAuth2", taskDescription: "Handle code changes, optimizations, and bug fixes in the repository.", taskDate: "2026-11-01", category: "Development", active: true, completed: false, failed: false },
      { taskTitle: "Review holiday requests", taskDescription: "Manage team relations, hiring pipelines, and documentation.", taskDate: "2026-10-26", category: "HR", active: false, completed: false, failed: true }
    ]
  },
  {
    Id: 4,
    firstName: "Arjun",
    email: "employee4@company.com",
    password: "password123",
    taskCounts: { active: 3,newTask:1, completed: 2, failed: 3 },
    tasks: [
      { taskTitle: "Update style guide", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-10-24", category: "Design", active: true, completed: false, failed: false },
      { taskTitle: "Inventory check", taskDescription: "Keep systems running smoothly and optimize administrative tasks.", taskDate: "2026-10-30", category: "Operations", active: false, completed: false, failed: true },
      { taskTitle: "Server maintenance", taskDescription: "Keep systems running smoothly and optimize administrative tasks.", taskDate: "2026-10-28", category: "Operations", active: false, completed: false, failed: true },
      { taskTitle: "Wireframe dashboard", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-10-30", category: "Design", active: true, completed: false, failed: false },
      { taskTitle: "User testing feedback", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-10-25", category: "Design", active: false, completed: true, failed: false },
      { taskTitle: "Vendor coordination", taskDescription: "Keep systems running smoothly and optimize administrative tasks.", taskDate: "2026-10-22", category: "Operations", active: false, completed: false, failed: true },
      { taskTitle: "Launch email campaign", taskDescription: "Execute promotional strategies, content curation, and data analytics.", taskDate: "2026-10-22", category: "Marketing", active: true, completed: false, failed: false },
      { taskTitle: "Automated UI tests", taskDescription: "Validate features, write tests, and ensure software stability before release.", taskDate: "2026-10-25", category: "QA", active: false, completed: true, failed: false }
    ]
  },
  {
    Id: 5,
    firstName: "Diya",
    email: "employee5@company.com",
    password: "password123",
    taskCounts: { active: 0, newTask:1, completed: 2, failed: 2 },
    tasks: [
      { taskTitle: "Wireframe dashboard", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-11-02", category: "Design", active: false, completed: false, failed: true },
      { taskTitle: "Write blog post", taskDescription: "Execute promotional strategies, content curation, and data analytics.", taskDate: "2026-10-29", category: "Marketing", active: false, completed: true, failed: false },
      { taskTitle: "Team building planning", taskDescription: "Manage team relations, hiring pipelines, and documentation.", taskDate: "2026-10-21", category: "HR", active: false, completed: true, failed: false },
      { taskTitle: "Design new logo", taskDescription: "Focus on user experience, visual layouts, and design asset creation.", taskDate: "2026-10-30", category: "Design", active: false, completed: false, failed: true }
    ]
  }
];

const admin = [{ Id: 100, firstName: "Rajesh", email: "admin@company.com", password: "password123" }];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
