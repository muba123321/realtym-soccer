# RealTymSoccer
RealTymSoccer is a web application that allows users to view available soccer leagues and fixtures. Built with React, Redux, and Axios, this app fetches data from a football API. Due to the limitations of the free API tier, we are only able to fetch a limited amount of data and currently rely on static fixture data.

## Features
- View Soccer Leagues: Browse available soccer leagues.
- Fixtures Data: Display static fixture data (due to API limitations).
- Dynamic Navigation: Navigate between the home page and fixtures page.
- State Management: Redux is used for managing application state.
- Responsive Design: The UI is responsive and adapts to different screen sizes.

## Tech Stack
- Frontend Framework: React
- State Management: Redux Toolkit
- API Requests: Axios
- Routing: React Router
- Build Tool: Vite
- Styling: CSS

## API Limitations
The application uses a free-tier API to fetch soccer-related data, which comes with certain limitations:
- Limited Data: The free API tier restricts the amount of data we can retrieve.
- Static Fixtures: We are unable to dynamically fetch fixture data based on the selected league due to API constraints. Instead, static fixture data is used for demonstration purposes.
  
## Getting Started
Follow these steps to run the project locally.

1. Clone the Repository

### Copy code
- git clone https://github.com/muba123321/realtym-soccer.git
- cd realtym-soccer
2. Install Dependencies (npm i)
- Ensure you have Node.js installed. Install the project dependencies by running:

### Copy code
- npm install
  
3. Environment Variables
- Create a .env file in the root of the project to store your API token.


### Copy code
- .env
- VITE_API_TOKEN=your-api-token-here
This API token is required to fetch soccer data from the sportsmonks football API. Make sure to replace your-api-token-here with your actual token.

4. Run the Application
- Start the development server:

### Copy code
- npm run dev
- Open your browser and navigate to http://localhost:3000 to view the application.



## Known Issues and Limitations
- API Limitations: The free API tier restricts data access. Full fixture details and live updates are only available with a paid subscription.
- Static Fixtures: Since dynamic fixture data is not accessible, we are currently using static data to demonstrate the fixture functionality.
## Future Improvements
- Dynamic Fixtures: Once the API limitations are lifted or a paid plan is acquired, we plan to implement dynamic fixture fetching based on the selected league.
- Live Scores: In the future, real-time match data and live scores could be integrated.
- Enhanced Design: Additional improvements in UI/UX design, including advanced animations and better responsiveness, are also planned.
##Contributing
- Contributions are welcome! If you'd like to contribute:

### Fork the repository.
- Create a new branch (git checkout -b feature/AmazingFeature).
- Commit your changes (git commit -m 'Add some AmazingFeature').
- Push to the branch (git push origin feature/AmazingFeature).
- Open a pull request.
