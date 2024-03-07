<div align="center"><h1><b>Air BnB Clone</b><br> (Using React js)</h1>
## https://airbnb-clone-dev.netlify.app/

<img alt="preview" src="https://static.toiimg.com/thumb/msid-98366567,width-1280,height-720,resizemode-4/98366567.jpg" width="65%"></div>

## 
<h1>Checkout the full documentation : :   @ 👇👇 </h1>
https://drive.google.com/file/d/1QvTfOfxDdVIzh8sfGfBo7xIZCXG3Loqm/view?usp=sharing



## Introduction
The Airbnb Clone project serves as a practice exercise for implementing a frontend application with React.js while utilizing the Material-UI library for building intuitive and visually appealing user interfaces. By recreating the Airbnb experience, developers can gain insights into modern web development techniques, including responsive design, state management, and integration with external APIs.

## Getting Started

Instructions to use this project :

This project is configured in vscode and is a simple implementation

  * Clone this repository.
  * Clone the Starter Code => It consists of the custom hooks , redux , themes amd other assests like images icons etc
  * Do not forget to add node modules by "npm i legacy--peer-dep" command
  * use npm run dev to run the file
  * if you have map box api access token then simply replace the const MAP_BOX_API="with your key"
    otherwise i have used a iframe by deafault to show map.
    
Cheers !

PS : Contributing back to this project will be appreciated.

## Features

* Map Functionality: The project includes a dynamic map feature that allows users to visually explore listings and locations directly on the map interface.

* Filters for Map View: Users can apply various filters, such as price range, amenities, and property type, to refine their search results directly on the map view.

* Card View for Listings: Alongside the map view, the project offers a card view layout for listings, providing users with additional details and images in a visually appealing format.

* Categories Section: Users can navigate through different categories of listings, such as homes, apartments, and experiences, using the categories section for easy browsing.

* Search API Integration: The project integrates with a search API to fetch relevant listings based on user queries, ensuring accurate and up-to-date search results.

* Number of Guests Selection: Users can specify the number of guests for their stay, enabling the system to filter listings based on accommodation capacity and availability.

* Calendar Date Picker: The project incorporates a calendar date picker feature, allowing users to select their desired check-in and check-out dates conveniently.

## Deployment
https://airbnb-clone-dev.netlify.app/

## Challenges and Solutions :
1.0 Challenge: In the stack component, the children were not being properly aligned due to styling issues. This resulted in inconsistent layout and appearance.
1.0 Solution: To address this issue, a grid component was created with both container and item properties. This allowed for proper alignment and styling of the children elements within the stack component, ensuring a consistent and visually pleasing layout.

2.0 Challenge:
The Airbnb clone frontend project encountered issues due to the requirement for a valid Mapbox access token. Without it, Mapbox-GL services couldn't render maps, leading to a deficient user interface.
2.0 Solution: To resolve this, the project implemented prompts for a valid Mapbox access token and themes, ensuring seamless integration of Mapbox features and enhancing user customization options.  (caution=>mapboxapi is currently unaccessable)

3.0 Challenge: In the guest selection component, when clicking on the plus button to increase the count for one guest type (e.g., pets), the counts for all guest types (e.g., adults, children, boomers) were increasing simultaneously. This behavior is unintended and leads to incorrect guest count adjustments.
3.0 Solution: To resolve this issue, ensure that the event handler for incrementing the count of a specific guest type only affects that particular guest type's count state. Verify that the event handler function handleGuestChange correctly updates the state for the targeted guest type based on the button clicked (plus or minus) and only modifies the count for that specific guest type. Double-check the implementation to confirm that the correct state property is being updated within the function.

More Detailed are Present in the doc @ 👇👇
https://drive.google.com/file/d/1QvTfOfxDdVIzh8sfGfBo7xIZCXG3Loqm/view?usp=sharing


## Built With

  * [Material UI] (https://v4.mui.com/) - For Styling
  * React Js
  * Redux
  * JavaScript
  * HTML
  * CSS


## Conclusion and Further Work

### Conclusion
In conclusion, this project represents the frontend implementation of an Airbnb clone, leveraging the extensive capabilities of Material-UI. Throughout the development process, the Material-UI documentation served as a valuable resource, providing guidance and reference for creating visually appealing and interactive user interfaces. 😊

### Further Work
•	Feel free to fork this repo and integrate backend with it with any techstack you like , be in express js , java or python


## Author 

**Dev Madaan**


