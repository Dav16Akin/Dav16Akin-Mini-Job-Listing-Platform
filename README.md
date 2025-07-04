# Mini Job Listing Platform
*A simple job listing platform built with Next.js, json-server, and Tailwind CSS to display, create, and view job details.*  

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)  

[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0.4+-blue)](https://ui.shadcn.com/) 
## Key Features
 Job Listings: Browse available tech job openings with details like title, company, salary range, and location type.

Create Job Form: Easily create new job listings with robust validation using React Hook Form + Zod.

Real-Time Search: Filter jobs dynamically based on title, company, or location type.

Modern UI Components: Built with shadcn/ui for accessible and clean design.

Mock Database: Uses json-server to store and manage job data for development and testing.

Dynamic Routing: View individual job details via dynamic routes in Next.js App Router.
## Decisions made:
- Used json-server as a lightweight mock backend to simulate API calls without setting up a full database.

- Built the frontend with Next.js App Router for performance and routing simplicity.

- Created forms with React Hook Form and Zod for robust validation.

- Used shadcn/ui components for clean UI building blocks.

- Stored requirements and benefits as comma-separated strings converted to arrays for easier form input UX.


## What I would Improve:

- Implement Authentication & Authorization :

    Allow companies or recruiters to create accounts and post job listings directly, with role-based access for admins to manage posts.

- Use a Persistent Database:

    Integrate MongoDB, Supabase, or PostgreSQL for scalable, production-grade data storage instead of json-server.

- Integrate AI Features:

    Use AI to auto-generate job descriptions based on minimal inputs (title, skills, salary range).

    Implement an AI-powered resume matcher to help recruiters find the best candidates quickly.

    Add AI-based salary suggestions based on market data to guide recruiters when posting jobs.

- Enhance UI/UX:

    Improve skeleton loading states for a smoother experience.

    Add user-friendly error and empty states.

    Create profile dashboards for recruiters and applicants.

- Write Comprehensive Tests:

    Add unit tests, integration tests, and e2e tests using Jest, React Testing Library, or Cypress to ensure all features work as expected.

- Optimize Backend Performance:

    Implement server-side pagination, filtering, and sorting for efficient data retrieval with large datasets.

- Advanced Search & Filters:

    Add filtering by job type, category, salary range, location, and implement a full-text search for job descriptions.

- Email Notifications:

    Send confirmation emails to recruiters upon successful job posting and to applicants after applying.

- Application Flow:

    Build a simple application system where users can apply for jobs directly through the platform and recruiters can view applications.

- Deploy to Production:

    Host the application with Vercel or Netlify and connect it to a cloud database for real-world use.

- User Profiles & Onboarding:

    Create onboarding flows for recruiters to set up company profiles and branding for their listings.
## How to Run the Project

1. **Clone the repo**:  
   ```bash
   git clone /https://github.com/Dav16Akin/Dav16Akin-Mini-Job-Listing-Platform
   cd Dav16Akin-Mini-Job-Listing-Platform
    
2.  **Install Dependencies**:
    ```
    npm install  # or pnpm/yarn
3.   **Run json-server**:
    ```
    npx json-server --watch db.json --port 3000

4.   **Run the Next.js app**:
   ```
   npm run dev

