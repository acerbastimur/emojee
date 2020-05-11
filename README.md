# emojee
This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes.

## demo
<img width="1000" alt="emojee" src="https://user-images.githubusercontent.com/33218120/81264442-11de9180-904a-11ea-8916-859ef940e4be.png">
## Installing and Running the App

- `git clone https://github.com/acerbastimur/emojee.git`
- `cd emojee`
- `npm install`
- `npm start`
- Open http://localhost:4000 in your browser

## Implemented Features

- Header with logo
- Welcome message and the first ad at the top
- Products are displayed in a grid. 
- The user has an option to sort the products in ascending order. Can sort by "size", "price" or "id".
 - Each product has:
  - a "size" field, which is the font-size (in pixels).
  - a "price" field, in cents. Formatted as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates are displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date is displayed.
- The product grid automatically load more items as you scroll down.
- An animated "loading..." message is shown while the user waits for the data to load.
- To improve the user's experience, the app always pre-emptively fetch the next batch of results when user is getting closer to end of the document.
- When the user reaches the end and there are no more products to display, the message "~ end of catalogue ~" is shown.
