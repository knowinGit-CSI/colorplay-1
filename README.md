# 🎨 ColorPlay 

A beautiful showcase of 60 unique bubble components built with React and Tailwind CSS for the **KnowGit 4.0** event! This project features rounded divs with color fills and playful hover animations, perfect for creating a "Color Burst" effect. It serves as a playground for learning React component development and Git collaboration.

**Tech Stack:**
- ⚛️ React 18
- 🎨 Tailwind CSS 3
- 📦 npm
- 🔧 Create React App

## 🏃‍♂️ Quick Start

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Clone and Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KnowGit-4-0/colorplay.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd colorplay
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

The app will automatically reload if you make changes to the code! 🔄

## 🤝 How to Contribute

We welcome contributions from developers of all skill levels! Follow this step-by-step guide to contribute to ColorPlay:

### Step 1: Pick and Assign an Issue 📋

1. Browse the [Issues](https://github.com/KnowGit-4-0/colorplay/issues) tab in this repository
2. Find an issue that interests you and matches your skill level
3. Comment on the issue saying **"I'd like to work on this"** to get it assigned to you
4. Wait for the organizer to assign the issue to you before starting work

> **Note:** Only work on issues that are assigned to you to avoid conflicts!

### Step 2: Create a New Branch 🌿

1. **Make sure you're on the main branch:**
   ```bash
   git checkout main
   ```

2. **Pull the latest changes:**
   ```bash
   git pull origin main
   ```

3. **Create a new branch for your issue:**
   ```bash
   git checkout -b feature/issue-number-short-description
   ```
   
   **Example:**
   ```bash
   git checkout -b feature/15-add-gradient-bubble
   ```

### Step 3: Make Your Changes ✨

1. **Open the project in your code editor**
2. **Make the required changes** according to the issue description
3. **Test your changes locally** by running `npm start`
4. **Ensure your code follows the project structure:**
   - Bubble components go in `src/components/bubbles/`
   - Each bubble should accept a `title` prop
   - Use Tailwind CSS classes for styling (rounded-full, hover animations)
   - Follow the existing naming convention (Bubble01.js, Bubble02.js, etc.)

### Step 4: Commit Your Changes 💾

1. **Stage your changes:**
   ```bash
   git add .
   ```

2. **Commit with a clear message:**
   ```bash
   git commit -m "Add gradient bubble component for issue #15"
   ```

   **Good commit message examples:**
   - `"Add new neon glow bubble component"`
   - `"Fix hover effect on Bubble23"`
   - `"Update README with new installation steps"`

### Step 5: Push Your Branch 🚀

```bash
git push origin feature/issue-number-short-description
```

**Example:**
```bash
git push origin feature/15-add-gradient-bubble
```

### Step 6: Create a Pull Request (PR) 🔄

1. **Go to the [repository on GitHub](https://github.com/KnowGit-4-0/colorplay)**
2. **Click the "Compare & pull request" button** (it should appear after pushing)
3. **Fill out the PR template:**
   - **Title:** Clear and descriptive (e.g., "Add gradient bubble component")
   - **Description:** Explain what you changed and reference the issue number
   - **Link the issue:** Use "Closes #issue-number" in the description
4. **Click "Create pull request"**

### Step 7: Wait for Review ⏳

- **Your PR will be reviewed** by the event organizers
- **You may receive feedback** or requests for changes
- **Make any requested changes** and push them to the same branch
- **Your PR will be merged** once it meets all requirements

> **🏆 Important:** Only merged PRs are eligible for certificates!

## 💡 Tips for Contributors

### ✅ Best Practices
- **Keep commits small and focused** - one feature/fix per commit
- **Write clear commit messages** - explain what and why, not just what
- **Test your changes thoroughly** before submitting
- **Follow the existing code style** and structure
- **Read the issue description carefully** before starting work

### 🤔 Need Help?
- **Ask questions in the issue comments** if anything is unclear
- **Check existing PRs** to see examples of good contributions
- **Don't hesitate to ask** - we're here to help you learn!

### 🚫 Common Mistakes to Avoid
- Working on unassigned issues
- Making changes to the main branch directly
- Submitting PRs without testing locally
- Not following the existing code structure
- Including unrelated changes in your PR

## 📁 Project Structure

```
colorplay/
├── public/
├── src/
│   ├── components/
│   │   └── bubbles/
│   │       ├── Bubble01.js
│   │       ├── Bubble02.js
│   │       └── ... (up to Bubble60.js)
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```


## 🙏 Acknowledgments

- Thanks to all KnowGit 4.0 participants for their contributions!
- Event organized by CSI VNRVJIET

---

**Happy Contributing! 🎉**
