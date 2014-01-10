![logo](https://raw2.github.com/MrSpothawk/caracol-4-chrome/master/app/images/caracol3.png)&nbsp;caracol 4 chrome - extends browser integration of the [caracol](http://caracol.cloudapp.net/) app
=================================================================================

## Table of Contents

* [Description](#description)
* [Installing](#installing)
* [The Code](#the-code)
* [Challenges](#challenges)
* [License](#license)

##<a name="description"></a>Description

Caracol's greatest feature is its ability to bubble-up content relevant to the interest of the user. This extension offers several features for the user, which extend the features of the Caracol web directly into the browser. 

This extension overrides the default new-tab behavior in Google chrome. When a user opens a new tab, they'll receive their Caracol recommendations. It also provides a handy way for them to interact with Caracol through the Icon, positioned to the right of the Omnibar.

On the first run, the extension will prompt a user to decide which bookmarks to upload to Caracol for archive.  After they submit their bookmarks, they will be provided an easy interface to their [Caracol Clippings](http://caracol.cloudapp.net/#/clippings) as well as their [Caracol Recommendations](http://caracol.cloudapp.net/#/recommendations). 

##<a name="installing"></a>Installing

Make sure to [log-in](http://caracol.cloudapp.net/#/login) in to your Caracol account. Then use git to clone the repo: 

    git clone https://github.com/MrSpothawk/caracol-4-chrome.git
    
Open your Chrome browser. Head to the settings page for [extensions](chrome://extensions/).

![enable developer mode](https://raw2.github.com/MrSpothawk/caracol-4-chrome/master/docs/developermode.png)

Make sure you've checked "Developer Mode" on the upper right corner. Then "Load unpacked extension..." and open the <code>app</code> directory in your newly cloned repo. 

![installed successfully](https://raw2.github.com/MrSpothawk/caracol-4-chrome/master/docs/installsuccess.png)

When you see the handome orange snail, you'll know you've successfully installed the extension.

##<a name="the-code"></a>The Code

Chrome will load the contents of the <code>app</code> directory according to the instructions provided in <code>manifest.json</code>. If you're unfamiliar with Chrome Extensions, you can find a good primer on the manifest at their [developer page](http://developer.chrome.com/extensions/manifest.html).

When the Icon Button is pressed Chrome will load<code>popup.html</code>. That page points to <code>scripts/main-popup.js</code>, which contains all the information about ui-routing and to the various <code>.state</code> configs and controllers necessary to provide the Popup view.

Likewise, when a new tab is opened <code>tab.html</code> &  <code>scripts/main-tab.js</code> are to blame for the html of the resulting new tab. 

The various templates supporting the Views can be found in the <code>views/*</code> directory. And you'll find <code>scripts/controllers.js</code> & <code>scripts/services.js</code> contain the DRY code. 

This extension is built with AngularJS. I also mixed in Angular-UI & Angular-Bootstrap. 

##<a name="challenges"></a>Challenges

* Since this is a browser extension, there are no files served to the user. So, I used [angular-ui](https://github.com/angular-ui/ui-router) to enable <code>$stateProvider</code> based UI routing & nested views without <code>$route</code>.
* Using Multiple Named Views enabled a lot of flexibility in the way the page was loaded, but I think there's a long way to go in terms of minimizing the code. It may be the case that there's a dynamic way to initialize state in the popup & newtab views, but I haven't found a better solution yet. 
* Chrome provides access to the <code>code.bookmarks</code> asynchronously. This made handling the views a little bit harder until I found used a [clever trick](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#note-about-using-state-within-a-template) to pass <code>$state</code> and <code>$scope</code> around the code much more easily. 
* I used the <code>ui-sref</code> directive to enable the user to choose their <code>.state</code> in the header of the popup. Here's some info about [state links](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref). 
* Mixing Angular, Angular-UI-Router, and Bootstrap for Angular turned out to complicate things a lot. In the end, it certainly turned out to be a worthwhile exercise for the flexibility it provided. 


##<a name="license"></a>License

The MIT License (MIT)

Copyright &copy; 2014 Jesse F. LaRue

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.