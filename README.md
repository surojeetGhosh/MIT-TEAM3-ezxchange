# MIT-TEAM3-ezxchange
 Northern Trust Hackathon
Project Report
Currency Exchange Rate Analyser 
Done by : Team Number - 3
Amit Pile		 - amitpile2002@gmail.com
Hrishabh Tiwari 	- tiwarihd17@gmail.com
Surojeet Ghosh 	- surojeetghosh89@gmail.com
Saanya Tyagi 		- saanya.tyagi01@gmail.com
Vatsal Borad 		- boradvatsal83@gmail.com

Introduction
A dashboard, which will allow users to analyze the exchange rates between two currencies over a period of time. Users  have the option to select weekly, monthly, quarterly, and yearly charts. The dashboard also display the date on which the rate was at its peak and the date on which it was at its lowest. There are various other features like currency convertor where the user can get the value of some amount in one currency in the required currency with the current exchange rate. The user can also see the current exchange rate for a particular base currency all over the world in more than 50 currencies. The dashboard gives a very cohesive environment for the users wanting the latest currency exchange trends or just simple exchange information.

Tech Stack used : 
1. React.Js
2. Firebase
3. Tailwind
4. Apex-charts
5. Luxon (for date conversions in javascript)
6. Axios (For data fetching)

Prerequisites
Node should be installed on your system if not use the command :
npm install npm@latest -g , run the command in your cmd.
An IDE for the code execution.

Environment set-up
1. Clone the repository
2. Command : git clone https://github.com/your_username_/Project-Name.git
3. Get your own free Api key at https://apilayer.com/ - fixer-api for currency rates. This obtained key can be used for the calculator and base conversion table.
4. For setting up the react js node modules in the system the user needs to install npm packages : 
5. Terminal Command :  npm install
6. Once the packages are installed , you can start the react application with the command : npm start
7. If any error is thrown try installing libraries like axios , tailwind , luxon , the dependencies are already installed but if any error try uninstalling and reinstall the libraries.


Functionalities 
1. Visualization of the data in graphical line form.
2. Filtering of the data  - Yearly , monthly , weekly and daily.
3. Gives the minimum and maximum value of the rate for that filter
4. Currency conversion calculator .
5. Service/Component which will provide FX rates for all currencies considering a base currency. For instance, USD as a base currency and value of all other currencies in terms of USD for a given date.
6. UI screen to display all currencies along with the short code, description, and current exchange rate

Implementation 
1. 13 Excel sheets given as a data set were first converted into csv files then those csv were converted into json files and finally the object dataset - json files were uploaded to our database. Here we are using firebase a the real-time database for the fetching , modularising , storing and automation of the datasets.
2. Firebase is real-time database from where the data can be fetched in the form of objects by creating our own apis for the firebase get function.
3. That api generated from firebase for the datasets is then further used in frontend to fetch the data.
4. For the visualization of the data we have used apex-charts line graph. Here the graph takes a lot of attributes like name , x-axis , y-axis can be plotted with the help of apex-charts library.
5. The data is dynamically fetched from the database and then with the help of axios , useeffects the data is stored in an array for the further visualization. 
6. The graph also provides filters like currency exchange rate growth in an year , monthly , weekly and daily and quarterly for that particular year.
7. This filtering logic is done with the help of various routines and array sorting conditions , conditional rendering to achieve the data for every week , every month and every year separately.
8. The frontend is done in react js and styling is done with the help of tailwind library.
9. The currency convertor on the dashboard is made with the help of react and tailwind for the frontend and the currency conversion is based on the live currency value fetched directly from the free api - https://apilayer.com/ - fixer-api . The currency convertor dynamically gives the value in any two currency form selected. This api is fetched with the help of axios and async is used for the further processing and storing of the data in an array state which is dynamically changing.
10. The component which provide Fx exchange rate values for one base currency also used the same api source to fetch the data in real-time and is displayed in the form of a list for a particular base currency.
11. We generated the free api key from apilayer.com and used it for the currency rate data which was fetched in the form of object key pair value.
12. The minimum and maximum for daily data is was possible by sorting in all the points and finding the lowest and highest point in the data set .


Modules in the Project 
1. The project consists of a main file app.js and a root file index.js
2. There are various components like chart where the graph is made , routines where the logic is build for the dynamic fetching of the graph
3. In the src folder has all the code of the project
4. Components folder consists of single components used in the project like calculator , table , graph and every component in modular.

Test Cases
Api Endpoints : 

Currency conversion endpoint, which can be used to convert any amount from one currency to another. In order to convert currencies, please use the API's convert endpoint, append the from and to parameters and set them to your preferred base and target currency codes.
 
Parameters
amount (required)
The amount to be converted.
Location: Query, Data Type: string
from (required)
The three-letter currency code of the currency you would like to convert from.
Location: Query, Data Type: string
to (required)
The three-letter currency code of the currency you would like to convert to.
Location: Query, Data Type: string
date (optional)
Specify a date (format YYYY-MM-DD) to use historical rates for this conversion.
Location: Query, Data Type: string
Dataset Api :
The api is generated by firebase to fetch the real time data .The get request is received by the firebase endpoint.


Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

Contact
Northern Trust 
Project Link:  https://github.com/surojeetGhosh/MIT-TEAM3-ezxchange
Demo Link :  https://exchange-rates-visualization.netlify.app/

Attached below are the project report and dataset zip file
[Nothern trust Hackethon Report.pdf](https://github.com/surojeetGhosh/MIT-TEAM3-ezxchange/files/9683602/Nothern.trust.Hackethon.Report.pdf)
[Currency_Conversion_Test_Data.zip](https://github.com/surojeetGhosh/MIT-TEAM3-ezxchange/files/9683603/Currency_Conversion_Test_Data.zip)



