### BTC Price Tracker
A sample app created to learn next.js.

Based on youtube tutorial by Traversy Media (link)[].

##### Quick and Dirty Tutorial Steps

Part 1: Setting up the website skeleton

1. >npm init -y

2. >npm install next react react-dom

3. make dir: pages

4. in dir pages:
    create file: index.js, drop your react component code in it
    
5. start server: >next

6. hit: http://localhost:3000/, the index.js contents should show there

7. in dir pages:
    create file: about.js, again, drop your component code in it

8. hit: http://localhost:3000/about, the about page contents should be there

9. that's nice, next does the routing for you, based on page js file names.

10. make dir: components, create your additional react components there

11. i added a Nav.js there for navigation

12. also, added Layout.js as a template for pages. added link to bootstrap css in it.

13. notice the "Head" component in next.js. it lets you add arbitrary tags to be rendered in the head section.

14. also, used the "Link" component fron next.js. i don't see a big deal. it's just like anchor tag in html. may be there's more to it. the next.js docs have a lot of items on it.

Part 2: Adding the price tracker

1. add a static method named "getInitialProps" to Index component. this method is an addon by next.js and is pretty cool. the only trick: it only works for components in pages dir. i banged by head in a lot of frustration as i initially added it to Prices component in components dir.

2. >npm install isomorphic-unfetch #weird name for a lib

3. add the price json fetching code to this method. as in the tutorial, i used the coindesk api.

4. pass on the props from Index to Prices and render the price data there.

