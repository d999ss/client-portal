# Client Portal

A comprehensive client portal for managing projects, documents, team communication, and subscriptions. Built with Next.js, Prisma, Clerk, and Stripe.

## Features

### ✅ Implemented
- **Authentication** - Clerk-based user management with role-based access
- **Multi-tenancy** - Isolated data per client company
- **Dashboard** - Overview of projects, documents, and activity
- **Projects** - Track progress, milestones, budgets, and team members
- **Documents** - File management with folders, versioning, and sharing
- **Database Schema** - Complete Prisma schema for all features
- **UI Components** - shadcn/ui component library integrated

### 🚧 To Be Implemented
- **Stripe Integration** - Subscription management and billing
- **File Storage** - Vercel Blob or S3 integration
- **Messaging System** - Direct messages between clients and team
- **Support Tickets** - Built-in ticketing system
- **Notifications** - Real-time alerts and email notifications
- **Team Directory** - Contact information and availability
- **Activity Logs** - Audit trail of all actions
- **API Routes** - Backend endpoints for data operations
- **Webhooks** - Stripe and Clerk webhooks

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Payments**: Stripe
- **File Storage**: Vercel Blob (or AWS S3)
- **Email**: Resend
- **UI**: shadcn/ui + Tailwind CSS
- **State**: Zustand
- **Forms**: React Hook Form + Zod

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Clerk account
- Stripe account
- Vercel account (for Blob storage) or AWS account (for S3)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

Create a PostgreSQL database and update your `.env.local`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/client_portal"
```

Run Prisma migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 3. Clerk Setup

1. Create a Clerk application at https://clerk.com
2. Get your API keys from the dashboard
3. Add to `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

4. Configure Clerk webhooks:
   - Endpoint: `https://your-domain.com/api/webhooks/clerk`
   - Events: `user.created`, `user.updated`, `user.deleted`

### 4. Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Create products and prices for your subscription tiers
3. Add to `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
client-portal/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── dashboard/         # Protected dashboard routes
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/ui/         # shadcn/ui components
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   └── utils.ts           # Helper functions
│   └── middleware.ts          # Clerk authentication
└── .env.local                 # Environment variables
```

## Database Schema

The Prisma schema includes:

- **Tenant** - Client companies with Stripe subscriptions
- **User** - Users with roles (CLIENT_ADMIN, CLIENT_USER, TEAM_MEMBER, etc.)
- **Project** - Projects with status, budget, timeline
- **Document** - Files with versioning, sharing, access logs
- **Message** - Direct messages between users
- **Ticket** - Support tickets with responses
- **Notification** - In-app notifications
- **Invoice** - Stripe invoice records
- **Activity** - Audit log of all actions

## Next Steps

1. Set up Clerk and Stripe accounts
2. Configure environment variables
3. Run database migrations
4. Build API routes for data operations
5. Integrate Stripe webhooks
6. Add file upload functionality
7. Implement messaging system
8. Deploy to Vercel

## License

Proprietary - All rights reserved
