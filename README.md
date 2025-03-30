# Mr. Chef - Recipe Web Application (<a href="https://sanket-mrchef.netlify.app/" target="__blank">**View**</a>)
Mr.Chef, a web application that brings you a wide variety of delicious recipes to explore and try in your kitchen. This README.md file serves as a guide to understanding Mr.Chef and its features.

# Features
### Recipe Collection
- Mr.Chef provides an extensive collection of recipes from various ingredient, categories and countries. From appetizers to desserts, you can find recipes for all occasions and preferences.

### Recipe Search
- Easily search for recipes by category and country preferences. Find the perfect recipe that suits your taste and requirements.

### Recipe Details
- Each recipe page includes detailed instructions, ingredients list, cooking time, serving size information. Get all the information you need to prepare the dish successfully.

### Recipe Sharing
- Share your favorite recipes with others through social media or by generating a unique URL. Spread the joy of cooking with friends and family.

# Technologies Used
### Front-end
` HTML, CSS, JavaScript, React.js `
### Back-end
<a href="https://www.themealdb.com/api.php" target="__blank">`TheMealDB-API`</a>
### User Interface
` Bootstrap `

# Setup and Installation
### To set up Mr.Chef locally, follow these steps:

1. Clone the repository
   ```sh
   git clone https://github.com/sanket-164/Mr.Chef.git
   ```
2. Navigate into the project directory
   ```sh
   cd Mr.Chef
   ```
3. Install the required dependencies
   ```sh
   npm install
   ```
4. Run the application using
   ```sh
   npm start
   ```
5. Access the application in your browser
   ```sh
   http://localhost:3000
   ```

# Running with Docker
### To pull and run the Docker image, follow these steps:

1. Pull the Docker image
   ```sh
   docker pull sanket164/mrchef
   ```

2. Run the Docker container
   ```sh
   docker run -d -p 3000:3000 --name mrchef sanket164/mrchef
   ```
   - `-d` runs the container in detached mode.
   - `-p 3000:3000` maps the container's port 3000 to your local machine.
   - `--name mrchef` assigns a name to the container.

3. Open your browser and visit
   ```
   http://localhost:3000
   ```

4. To stop the container
   ```sh
   docker stop mrchef
   ```
   
5. To remove the container
   ```sh
   docker rm mrchef
   ```

# Contributing
- Contributions to Mr.Chef are welcome! If you find any issues or have suggestions for improvement, please open an issue on the GitHub repository.

# Themes
- ## Light Theme
<img src="/src/Images/LightTheme.png">

- ## Dark Theme
<img src="/src/Images/DarkTheme.png">

# Happy cooking with Mr.Chef!
