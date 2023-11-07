## Coding Assignment:

- In your `existing project`
  - initialize `npm` into your repo : Open Terminal > Go to your Project Folder > npm init (command to initialize npm)
  - install `react` and `react-dom` : Open Terminal > Go to your Project Folder > npm i react react-dom ( i stands for install)
  - `remove CDN links` of `react` : Open Index.html > Remove both CDN links
  - `install parcel` : Open Terminal > Go to your Project Folder > npm i parcel
  - `ignite your app` with `parcel` > Open Terminal > Go to your Project Folder > npx parcel index.html
  - `add scripts` for `“start”` and `“build”` with `parcel commands`: Open package.json >remove "main":"App.js" and add "start": "parcel ./index.html", "build": "parcel build ./index.html"
  - add `.gitignore` file : create .gitignore at root level and add > /node_modules
  - add `browserlists` : Open package.json > "browserslist":[
    "last 2 Chrome version"
    ] (https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
  - build a production version of your code using `parcel build` : Open Terminal > Go to your Project Folder > npm run build

## References:

- [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [BrowsersList](https://browserslist.dev/)
