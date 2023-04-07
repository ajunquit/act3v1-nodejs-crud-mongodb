Steps to raise this API
1. You must have a cluster created at https://www.mongodb.com/
     - You should get the connection string. For example: mongodb+srv://ajunquit:<password>@cluster0.ojujxje.mongodb.net/?retryWrites=true&w=majority

2. Clone this repository from github.
3. Create .env file and create the following environment variable.
MONGODB_URI=mongodb+srv://ajunquit:<password>@cluster0.ojujxje.mongodb.net/?retryWrites=true&w=majority
4. Run the command:
     >> npm install
5. Run the command:
     >>npm run start
6. Go to the browser and place the private or public ip (it depends on how you configure your environment) and at the end place the listener for port 9000. For example: https://54.25.25.24:9000