# Quick Start Guide - Shepower Nexus Hub

Get the application running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Step 2: Setup Environment (1 minute)

Create `server/.env` file:

```bash
cd ../server
```

Copy this into `server/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/werp-portal
JWT_SECRET=my-super-secret-jwt-key-for-development-only
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
PORT=5000
```

**Using MongoDB Atlas?** Replace MONGODB_URI with your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/werp-portal
```

## Step 3: Seed Database (30 seconds)

```bash
# From server directory
node seed.js
```

You should see:
```
MongoDB Connected for seeding
✓ Admin user created
✓ Created lesson: Introduction to Digital Entrepreneurship
✓ Created lesson: Mobile Marketing Essentials
...
✅ Seeding completed successfully!

Login credentials:
Email: admin@werp.local
Password: Admin123!
```

## Step 4: Start Servers (1 minute)

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

Wait for: `Server running on port 5000 in development mode`

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

Wait for: `Local: http://localhost:5173/`

## Step 5: Test the App!

1. Open http://localhost:5173
2. Click "Sign Up" and create an account
3. Navigate to "Courses"
4. Click "Digital Skills for Micro-Entrepreneurs"
5. Open a lesson and watch the video
6. Click "Mark as Complete"

## Login Credentials

**Admin Account:**
- Email: `admin@werp.local`
- Password: `Admin123!`

**Your Account:**
- Use the credentials you created during registration

## Troubleshooting

### MongoDB Connection Error
- **Local MongoDB:** Make sure MongoDB is running (`mongod`)
- **Atlas:** Check your connection string and IP whitelist

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: Change port in `client/vite.config.js`

### Module Not Found
- Run `npm install` in both server and client directories
- Delete `node_modules` and reinstall if issues persist

### Seed Script Fails
- Check MongoDB connection
- Ensure database is accessible
- Run `node seed.js` again (it's idempotent)

### Can't Login
- Check browser console for errors
- Verify server is running on port 5000
- Check cookies are enabled in browser

## What's Next?

- Explore all 5 lessons in the course
- Check out the "Coming Soon" courses
- Review the code structure
- Read the full README.md for deployment info
- Check TEST_PLAN.md for comprehensive testing

## Quick Commands Reference

```bash
# Start backend dev server
cd server && npm run dev

# Start frontend dev server
cd client && npm run dev

# Reseed database
cd server && node seed.js

# Build for production
cd client && npm run build
```

## Need Help?

- Check README.md for detailed documentation
- Review TEST_PLAN.md for testing scenarios
- Check CHANGELOG.md for feature list
- Open an issue if you find bugs

Happy coding! 🚀
