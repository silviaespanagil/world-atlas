# React App: World Atlas
## _Tokiota exercise_

¡Hola mundo!

After I was asked to do a web app with the [Rest Countries API](https://restcountries.eu/) the first thing that came into my mind was an Atlas, an enriched atlas with not only with a map but also with the information that the  API  provides 🌍.

The app allows you to see a list of countries that can be filtered by language and continent. The home area also has a search box where the user can search 🔎 for a country or even a capital. Filters are not independent, this means that the user can apply one or more search methods for better accuracy.

After finding a country user can click on it to see further detail such as: Capital of the country, timezone, currency, population, official languages and a map that pins the country with a world perspective 🚩.  

Another possible action for the user is to create a ⭐Favorite List⭐. Each country card has a star to favorite the country and the user can access to its own list in the "Favorite" area where's also posible to erase them. 

<img src="https://user-images.githubusercontent.com/81619759/129921090-a7ecc9f3-efc8-458d-9dd5-31f165663e0d.png" alt="home view from tablet breakpoint" width="400"/> <img src="https://user-images.githubusercontent.com/81619759/129923048-e1f728d5-c4be-40e3-a936-33772be131c6.png" alt="country detail" width="400"/>

<img src="https://user-images.githubusercontent.com/81619759/129920947-7652e673-adbd-4250-bdf9-262ec59c624f.png" alt="favorites view from desktop breakpoint" width="400"/>

🚀  [World Atlas Website](https://worldatlas.netlify.app/#/)

## Some Requirements 📋

- Create a react app
- Content must be served from an API
- API content must be listed
- Each country must be clickable to show further information
- Add a search bar to search by country

## Extra features 🌟

- Add other filters such as region and language
- Show a map with the country location
- Add a favorite list
- Save favorite list in localStorage and show a star when favorited. 
- Add a backend with last searches and favorite list.

## My own extra features 🌟

- Add a reset button to clean the filters
- Add error pages to answer non existant searches or pages
- Responsive
- Semantic HTML


## Built with 🔨
- Visual Code Studio: as code editor
- SASS
- React
- Node

## Development ⌨️

As I do in all my projects I started doing a simple Kanban to manage some prioritization and a manual wireframe🖍️ to have a general idea of  how I wanted the app to look like. As I'm no designer I helped myself with some online tools  like [color-hex](https://www.color-hex.com/) to define my palettes so this way I could focus on the code. 

After doing that, the coding was pretty smooth because I had some idea of how to approach everything. First of all I created my react-app and installed SASS because I find that SASS along with BEM methodology helps me to have a cleaner CSS code because of the nesting. 

With SASS up, it was component time. I tried my best to separate all my components in a way that they do one thing, they can be repurposed and also to be easy to understand🗃️.

When developing my components I avoided to repeat code, for so I created some objects to render beyond the API, for example the Languages Filter Options.

<img src="https://user-images.githubusercontent.com/81619759/129933583-be37bc83-2df4-4822-8e79-0d15ff74ee99.png" alt="code to languages filter options" width="600"/> 


### Some things I really like 💖

🗺️**Map**🗺️

I love first times, and this is the first time I use Google Map to render a map with a dinamic location. I found that there's more than one way to show the map, the one I choosed has an open perspective that I thought fitted better the app as we are not showing small locations but countries.

🔎**Extended search**🔎

Yes, I know this is pretty small **but** sometimes our  minds works in misterious ways and someone ask us  for a country and we say a city. For this  reason I wanted the search bar to allow the user to search either a country or capital 🌎

😨**Error pages**😨

As an user sometimes is frustrating when things doesn't work as expected. For that reason I did three different components for possible errors so the user can receive accurate feedback.

- No results: With a message that calls "There is no country or capital that fits your search". In case that the're no results because the country tiped down doesn't exist. If there's  a value on the search bar the message will make reference to it. PD: Next to the filters there's a reset button to delete all the inputs values.

<img src="https://user-images.githubusercontent.com/81619759/129935850-cfc39db7-4f0b-44c9-a5be-029c2f9dd47e.png" alt="No Results view" width="400"/>

- No Favorites: To avoid that the favorite page will render empty, if the favorite array  is empty the user will find a message saying that there are  no favorites, and can add them on the main page. This  page  has a back button.

- No Exist: This is a page with missing coordinates. If the user enters or type an unexistant page, we will let him now that is  lost and invite him back with a back button.

### My challenges 🚩

As a junior there are a lot of things I do not know...yet💪! but I really love trying things. My main challenge was  the backend bonus. That sadly I was not able to pull out by myself, but I tried!

My first try was with Express, BetterSql and SQLite as I encountered some issues, I went out and tried to see some videos and mini courses to find out a way to figure out. This way I found myself working with Express, Sequelize, SQLite and Postman, with the extra challenge that Sequelize uses Typescritp and I'm not fluent with it just yet.

![image](https://user-images.githubusercontent.com/81619759/129937550-6f74d593-7d36-4896-91e7-4687a8aa7e77.png)

With this new combo things went better and I was able to make a POST, via Postman but, when I tried to GET, it just didn't worked out and I couldn't get it through so I decided to let it be with the LocalStorage and definetly will keep learning about back. 



## Run my code 🔧

Install dependencies
`npm install` 

Run it
`npm start`

## Codefactor 
[![CodeFactor](https://www.codefactor.io/repository/github/silviaespanagil/world-atlas/badge)](https://www.codefactor.io/repository/github/silviaespanagil/world-atlas)
