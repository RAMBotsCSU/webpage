# RamBOTs Testing Repo
                   
This is the official CSU RamBOTS Webpage repository. 
Visit us at our [website](https://projects-web.engr.colostate.edu/ece-sr-design/AY22/RamBOTs).
The RamBOTS webpage is a JavaScript app using the Vue.js front end framework and Vuetify component framework.


<img src="https://user-images.githubusercontent.com/112744753/196563382-2745e707-77d6-42d5-98a0-a29530e21c9a.png" width=50% height=50%>

Important Files:
------

| File                       | Description           |
| ---------------------------|-------------|
| README                     | this file |
| public   | static assets that don't go through webpack      |
| src/assets/...    | images and other assets     |
| src/components/...    | components to split UI into independent and reusable pieces     |
| src/router/index.js    | router for page navigation in Vue applications    |
| src/views/...    | individual website pages     |
| src/App.vue    | the root component to house header/footer and current page     |
| src/main.js    | Javascript file to set up plugins and initialize root component     |
| vue.config.js    | config file for Vue CLI   |

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Necessary Frameworks/Components:
- [Vuetify 3](https://vuetifyjs.com/en/getting-started/installation/)
- [Embedded video player](https://github.com/nasa8x/v-video-embed) by nasa8x

## How to Update Existing Webpages:
- Modify the code at src/views/... 
- Use **npm run serve** to see the changes you are making on your machine
- Once complete, use **npm run build**. This will create the dist directory.
- Remote Desktop into engr.colostate.edu. Navigate to /net/projects/ece-sr-design/www/AY2X/RamBOTs
- Upload the contents of the dist directory. Wait a few minutes and the website should go live.



