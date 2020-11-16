# Cake Shop Manager Service 🍰
This REST service allows to get, insert, update and delete 'Cakes', who are represented by the following schema:

```
Cake {
    name : string
    price : float,
    flavors : string[]
}
```
## Requirements ⚙️
You need to have installed on your machine the following:
- NodeJS
- MongoDB
- Postman (optional)
## Running the app 🚀
Clone the repo:
```
 git clone https://github.com/andresSaldanaAguilar/cake-shop-manager.git
```
Go inside the application folder and install the dependencies:
```
 npm install
```
Now we can run the application at http://127.0.0.1:3000 , this will also automatically by default connect to the database **mongodb://localhost:27017/Cake-Shop**
```
 npm start
```
To connect to a different MongoDB database, provide your connection string like in this example:
```
npm start connectionStr=mongodb://localhost:27017/Cake-Shop 
```
## Usage 🔨
There is a Postman collection you can import inside this project on [/Postman Collections](https://github.com/andresSaldanaAguilar/cake-shop-manager/tree/master/Postman%20Collections) where you can test all the capabilities of this service.