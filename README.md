# LSEG Chatbot

This is a [Next.js](https://nextjs.org/) project designed as a chatbot
application. It leverages modern tools and libraries like Redux Toolkit,
Reselect, and ShadCN UI for state management, memoization, and styling,
respectively.

## 🚀 Live Demo

The application is hosted on Vercel and can be accessed here:
**[LSEG Chatbot](https://lseg-chatbot-indol.vercel.app/?__vercel_draft=1)**

---

## 🛠️ Getting Started

To set up and run the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+ recommended)
- **npm** (or your preferred package manager)

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/ToDy95/lseg-chatbot.git
cd lseg-chatbot
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at
[http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

Here's a quick overview of the folder structure:

```
lseg-chatbot/
├── app/                  # Next.js App Router directory
│   ├── layout.tsx        # Layout for the application
│   ├── page.tsx          # Main entry page
├── public/               # Static assets
├── styles/               # Tailwind CSS styles
├── README.md             # Documentation file
├── package.json          # Project metadata and dependencies
└── tsconfig.json         # TypeScript configuration
```

## 📦 Dependencies

### Core Dependencies

- `@reduxjs/toolkit`: Simplifies state management in Redux with powerful tools
  like slices, reducers, and middleware.
- `reselect`: Provides memoized selectors for efficient state computations.
- `shadcn`: Component library for building UI elements.
- `tailwindcss`: Utility-first CSS framework for responsive and modern designs.

### Other Notable Libraries

- `@radix-ui/react-dropdown-menu`: Accessible dropdown menu components.
- `next-themes`: For implementing theme toggling.
- `react-type-animation`: For animating text typing effects.

## ✨ Features

### State Management

Powered by Redux Toolkit, making it easier to manage complex application states.

### Efficient Selectors

Uses Reselect to memoize selectors, ensuring better performance.

### Styling with ShadCN and Tailwind

- ShadCN provides pre-built accessible UI components.
- TailwindCSS enables fast and consistent styling with utility classes.

### Dark Mode Support

Utilizes next-themes for theme toggling between light and dark modes.

## 📘 Scripts

The following scripts are available for this project:

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Starts the development server.              |
| `npm run build` | Builds the application for production.      |
| `npm start`     | Runs the production-ready application.      |
| `npm run lint`  | Lints the code for style and syntax issues. |

## 🔗 Resources

### Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Reselect Documentation](https://github.com/reduxjs/reselect)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
