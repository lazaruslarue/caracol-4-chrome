![logo](https://raw2.github.com/MrSpothawk/caracol-4-chrome/master/app/images/caracol3.png)&nbsp;caracol 4 chrome - extends browser integration of the [caracol](http://caracol.cloudapp.net/) app
=================================================================================

## Table of Contents

* [Description](#description)
* [Deployment / Development](#deployment-development)
* [The Stack](#the-stack)
* [Challenges](#challenges)
* [License](#license)

##<a name="description"></a>Description

Caracol's greatest feature is its ability to bubble-up content relevant to the interest of the user. This extension offers several features for the user, which extend the features of the Caracol web directly into the browser. 

This extension overrides the default new-tab behavior in Google chrome. When a user opens a new tab, they'll receive their Caracol recommendations. 

On the first run, the extension will prompt a user to decide which bookmarks to upload to Caracol for archive.  After they submit their bookmarks, they will be provided an easy interface to their [Caracol Clippings](http://caracol.cloudapp.net/#/clippings) as well as their [Caracol Recommendations](http://caracol.cloudapp.net/#/recommendations). 

##<a name="deployment-development"></a>Deployment / Development

Make sure to [log-in](http://caracol.cloudapp.net/#/login) in to your Caracol account. Then use git to clone the repo: 

    git clone https://github.com/MrSpothawk/caracol-4-chrome.git
    
Open your Chrome browser. Head to the settings page for [extensions](chrome://extensions/).

![enable developer mode](https://raw2.github.com/MrSpothawk/caracol-4-chrome/master/docs/developermode.png)

Make sure you've checked "Developer Mode" on the upper right corner. Then "Load unpacked extension..." and open the <code>app</code> directory in your newly cloned repo. 

![installed successfully](https://raw2.github.com/MrSpothawk/caracol-4-chrome/master/docs/installsuccess.png)

When you see the handome orange snail, you'll know you've successfully installed the extension.

##<a name="the-stack"></a>The Stack

##<a name="challenges"></a>Challenges

##<a name="license"></a>License

