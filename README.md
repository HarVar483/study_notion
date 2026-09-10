# StudyNotion Edtech Project

## Local setup

1. Copy `server/.env.example` to `server/.env` and fill in the required
   service credentials. A MongoDB connection string and JWT secret are required
   to start the API; Cloudinary, mail, and Razorpay are required only for their
   related features.
2. The frontend defaults to `http://localhost:4000/api/v1`. To use a different
   backend URL, copy `.env.example` to `.env` and set `REACT_APP_BASE_URL`.
3. Run `npm run dev` from the project root, then open
   `http://localhost:3000`.
# study_notion
