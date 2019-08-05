### BTC Price Tracker
A sample app created to learn next.js.

Based on youtube tutorial by Traversy Media (link)[https://www.youtube.com/watch?v=IkOVe40Sy0U].

##### Quick Tutorial Steps

###### Part 1: Setting up the website skeleton

1. >npm init -y

2. >npm install next react react-dom

3. Make dir: pages

4. In dir pages:
    create file: index.js, drop your react component code in it.
    
5. Start server: >next

6. Hit: http://localhost:3000/, the index.js contents should show there.

7. In dir pages:
    create file: about.js, again, drop your component code in it.

8. Hit: http://localhost:3000/about, the about page contents should be there.

9. That's nice, next does the routing for you, based on page js file names.

10. Make dir: components, create your additional react components there.

11. I added a Nav.js there for navigation.

12. Also, added Layout.js as a template for pages. added link to bootstrap css in it.

13. Notice the "Head" component in next.js. it lets you add arbitrary tags to be rendered in the head section.

14. Also, used the "Link" component fron next.js. I don't see a big deal. It's just like anchor tag in html. May be there's more to it. The next.js docs have a lot of items on it.

###### Part 2: Adding the price tracker

1. Add a static method named "getInitialProps" to Index component. This method is an addon by next.js and is pretty cool. The only trick: it only works for components in pages dir. I banged by head in a lot of frustration as I initially added it to Prices component in components dir.

2. >npm install isomorphic-unfetch #weird name for a lib

3. Add the price json fetching code to this method. As in the tutorial, I used the coindesk api.

4. Pass on the props from Index to Prices and render the price data there.

