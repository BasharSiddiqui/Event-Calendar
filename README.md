# Event Calendar Application

The Event Calendar is a web application built using React and Express. It allows users to add and view events on a calendar interface. The application interacts with a MongoDB database to store and retrieve event data.

## Features

1. **Calendar Interface:** The application displays events on a calendar using the FullCalendar library. Users can switch between different views (month, week, day) and navigate through different dates.
2. **Add Event:** Users can add new events to the calendar by clicking the "Add Event" button. A modal window appears, prompting the user to enter the event details such as title, date, start time, and end time.
3. **Fetch Events:** On component mount, the application fetches events from the server using an API endpoint. The fetched events are displayed on the calendar.
4. **Store Events:** When a new event is added, it is stored in the MongoDB database. The event data is sent to the server using an API endpoint and saved in the "events" collection.

## How to Run

To run the Event Calendar application, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the bashar directory: `cd bashar`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your web browser and access the application at: `http://localhost:3000`

Additionally, you need to set up a MongoDB database and configure the server to connect to it:

1. Install MongoDB: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)
2. Create a MongoDB database and note down the connection URI.
3. Navigate to the server directory: `cd server`
4. Install the server dependencies: `npm install`
5. Open the `index.js` file and replace the `MONGODB_URI` variable with your MongoDB connection URI.
6. Start the server: `node index.js`

## Key Learning Points

1. **React Hooks:** The application utilizes React Hooks, such as useState and useEffect, to manage state and perform side effects. These hooks allow for better organization and reusability of code compared to class components.
2. **FullCalendar Library:** The application integrates the FullCalendar library to display events on the calendar. The library provides various plugins and configuration options to customize the calendar's appearance and behavior.
3. **Fetching and Posting Data:** The application demonstrates how to fetch data from the server using the Fetch API. It also shows how to send data to the server for storing events in the database.
4. **MongoDB Integration:** The backend server connects to a MongoDB database using the MongoClient library. It demonstrates how to perform CRUD operations (Create, Read) with the MongoDB collection.

## Areas Requiring Further Improvement

1. **Authentication and Authorization:** The application currently lacks user authentication and authorization. Adding user accounts and implementing authentication would enhance security and allow personalized event management.
2. **Update and Delete Events:** The application currently supports adding events but does not provide functionality to update or delete existing events. Implementing these features would make the application more comprehensive.
3. **Error Handling:** The application lacks robust error handling. It would be beneficial to implement error handling mechanisms to handle and display errors appropriately to the user.
4. **Styling and User Experience:** The current user interface is minimal and lacks styling. Enhancing the visual appeal and user experience would make the application more appealing and user-friendly.
5. **Testing:** The application does not include automated testing. Implementing unit tests and integration tests would ensure the stability and reliability of the application.

## Conclusion

In conclusion, the Event Calendar is a basic web application that allows users to add and view events on a calendar. It demonstrates the use of React, Express, and MongoDB in building a full-stack application. The application can be further improved by implementing authentication, update/delete functionality, error handling, styling, and testing.

![image](https://github.com/BasharSiddiqui/Event-Calendar/assets/105674805/e33fb079-8b68-42ff-8688-28f8fbbe4486)
