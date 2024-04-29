# The Travel Advisor App - search for restaurants, hotels and attractions anywhere in the world (iOS and Android)

<div style="display: flex;">
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/eff0b286-40c7-4f35-860c-30d702f1c242" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/c35e60f9-be5e-4f39-86f8-51f219bd4a57" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/75bb8002-f077-4af1-abd4-d081099da9e5" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/a8f170f0-22d3-440f-a101-b7102fa16896" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/ac720b2e-0304-491f-a835-4205bf7691b8" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/30dd7c0e-58b4-4ca1-8d8d-0594867a26e1" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/81f0633a-a023-4167-8459-1e17ee549e7e" style="width: 24%;" />
    <img src="https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App/assets/124283031/09ad6d87-0616-4141-9982-2965335cee43" style="width: 24%;" />
</div>

### About the Travel Advisor App
* A Search Optimisation App
* Allows users to search for restaurants, hotels and attractions worldwide
* Supports searching in any language using the [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
* Provides search results through a [Travel Advisor API](https://rapidapi.com/apidojo/api/travel-advisor)
* Runs on iOS and Android devices using Expo Go

### Built With

* [![vsc]][vsc-url]
* [![React.js]][React-url]
* [![ego]][ego-url]
* [![tapi]][tapi-url]
* [![papi]][papi-url]

### Installation

1. Get a free Travel API Key from: [Rapid API](https://rapidapi.com/apidojo/api/travel-advisor)
2. Get a Google Places API Key from: [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
3. Install Expo Go from: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US&pli=1) or [The App Store](https://apps.apple.com/us/app/expo-go/id982107779)
4. Clone the repo
   ```sh
   git clone https://github.com/N-Al-Rubaie/Travel-Advisor-Mobile-App
   ```

5. Enter your Travel API on line 25 in `index.js`
   ```js
    "X-RapidAPI-Key": "",
   ```
6. Enter your Google Places API on line 100 in `Discover.js` 
   ```js
   key: "", // Google Places API key
   ```
7. Install NPM packages
   ```sh
   npm install
   ```
8. Start the program
   ```sh
    npx expo start --go   
   ```
* Once the Expo Go App has been installed on your iOS/Android device, connect your device to the same wireless network as your computer
* On Android, use the Expo Go app to scan the QR code from your terminal to open your project 
* On iOS, use the built-in QR code scanner of the default iOS Camera app


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[vsc]: https://img.shields.io/badge/Visual%20Studio%20Code-blue
[vsc-url]: https://code.visualstudio.com/

[ego]: https://img.shields.io/badge/Expo%20Go%20-%20black
[ego-url]: https://expo.dev/

[tapi]: https://img.shields.io/badge/Travel%20Advisor%20API%20-%20blue
[tapi-url]: https://rapidapi.com/apidojo/api/travel-advisor

[papi]: https://img.shields.io/badge/Google%20Places%20API%20-%20green
[papi-url]: https://developers.google.com/maps/documentation/places/web-service


<br/>
