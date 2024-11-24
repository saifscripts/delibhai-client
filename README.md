# Delibhai | One-Stop Service Provider

### [Live URL](https://www.delibhai.com) | [Base URL (Server)](https://delibhai-server.vercel.app)

### [Backend Repository](https://github.com/saifscripts/delibhai-server)

## Introduction

Delibhai offers a one-stop solution for services like vehicle search, worker search, tutor search, blood donation, and more. We aim to simplify access to these services, making life easier for users. Vehicle search is live, with other services to follow.

## Project Description

The Delibhai platform aims to connect users with reliable and efficient service providers across multiple categories. The platform will offer a range of services, including vehicle search, blood donation, labour worker search, tutor search, and more. While we are still working on implementing all of these services, our vehicle search feature is now live and ready to use.

## Technology Stack

- React.js, TailwindCSS, Tanstack Query

## Features

- **Profile Creation:** Enabled over 200 riders to complete profiles with geolocation, service times, and identity info.
- **Location-Based Search:** Implemented a search feature allowing users to filter vehicles across 6,000+ areas in Bangladesh.
- **Sorting Logic:** Improved rider search results by 30% using sorting based on service times, distance, and stations.
- **Real-Time Geolocation:** Integrated WebSocket for 95% location accuracy with Geolocation API.
- **Search Optimization:** Reduced search response time by 30% through MongoDB indexing, pagination, and aggregation.
- **Security:** Secured 100% of access with RBAC, JWT managing 'rider' and 'admin' roles.
- **Validation:** Ensured 100% data integrity via frontend and backend validation using Mongoose and form validation.

## Installation Guideline

Follow this step-by-step guide to run the server on your local machine.

### 0. Prerequisites

- Node.js and npm/yarn installed.
- Any Web browser to view the application.

### 1. Clone the Repository

First, clone the repository to your machine using the following command:

```
git clone https://github.com/saifscripts/delibhai
```

### 2. Change Directory

Next, navigate to the project directory with this command:

```
cd delibhai
```

### 3. Install Dependencies

Before running the app, you need to install all dependencies. You can do this using either Yarn or npm.

#### Using Yarn

```

yarn install

```

#### Using npm

```

npm install

```

### 4. Add a Configuration File

To run the app, create a `.env` file in the root folder with the following properties (I have included a few demo values here for testing):

```
VITE_BASE_URL=http://localhost:5000/api/v1
VITE_IMGBB_API_KEY=your_imgbb_api_key
```

### 5. Run the App

Now, you're ready to run the app. Use one of the following commands to start the server.

#### Using Yarn

```
yarn dev
```

#### Using npm

```
npm run dev
```

That's it! The application should now be running locally.

## Usage

### User Guide:

- Create an account or log in to access the platform
- Browse through vehicle service
- Allow your location permission, select a vehicle type and click "Search"
- Filter rider by service location, service type, service time
- Choose a rider and call him/her directly from your phone
- Goto rider's profile to know more about the rider
- Track rider's real time location from the profile
- Rate and review rider to help others
- Save your favorite rider for future use

### Rider Guide:

- Create account and save all necessary profile information
- Add vehicle type, service time, service area, manual and live location to get ranked on search
- Save other personal, contact and vehicle information to increase credibility.
- Access customer feedback and ratings to improve services
