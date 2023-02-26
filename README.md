- vue-microfrontend-architecture

Using the single-spa architecture, we connected 3 VUE applications. Two based on VUE3/TS and One VUE2

- Seting up via NPM

- Globaly install create-single-spa @npm install --global create-single-spa
- Install single spa @create-single-spa with options "single spa root config"
- After instalation Create now create-single-spa in root of "single spa root config" but this time chouse option "Single-spa aplication" and instal VUE app
- build new app @npm run build
- Run http-server on dist folder and add port @http-server . --port 8001 -cors
- Go to "single spa root config" and in index.ejs (systemjs-importmap) add new Vue aplication

  <script type="systemjs-importmap">
    {
      "imports": {
        "@single-spa/root-config": "//localhost:9000/app-root-config.js",
        "@app1/vue3-app1": "http://localhost:8001/js/app.js",
      }
    }
  </script>

- Because of hash name of files (app32532535.js) need to add vue.config.js to root of Vue aplication:
  vue.config.js

- The same proces for other Vue aplications
- afterr adding new applications set router in "single spa root config" in file "microfrontend-layout.html"

- Issue with Browser:
  After all steps above open root app in Browser, go on consola and run localStorage.setItem('devtools', true);
  After that in bottom right corner we will have {}, clicking on them we will see all data of ours apps

  CORS error --> resolving with instalation Chrome extension --> https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
  Chashing issue --> Instal Chrome extension "Clear Cache"

-Router issue - still working

- add simple user info from firebase DB so we can work with data beetwin apps

- Add websocket servers and logic for communication into vue instance
