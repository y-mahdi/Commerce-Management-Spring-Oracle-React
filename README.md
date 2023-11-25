


# Commerce Management System

This project is a Commerce Management System developed using React.js and Spring Boot. It aims to help individuals efficiently manage their businesses by handling products, client base, and invoices.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/commerce-management-system.git
   ```

2. Navigate to the Spring Boot project directory:

   ```bash
   cd commerce-management-system/backend
   ```

3. Build and run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

   If you are on Windows, use:

   ```bash
   mvnw.cmd spring-boot:run
   ```

   This will start the Spring Boot server.

4. Open a new terminal and navigate to the React.js project directory:

   ```bash
   cd ../frontend
   ```

5. Install the required npm packages:

   ```bash
   npm install
   ```

6. Start the React.js application:

   ```bash
   npm start
   ```

   This will launch the development server for the React.js frontend.

7. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Commerce Management System.

## Additional Configuration

- The Spring Boot application uses an embedded H2 database by default. You can configure the database settings in `application.properties` if needed.

- Update the API endpoint in the React.js application if the Spring Boot server is running on a different port or host.

## Contributing

If you'd like to contribute to this project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
