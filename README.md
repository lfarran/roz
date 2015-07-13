# roz
Raised On Zenith band website built using AngularJS, Gulp, Bower, and Boostrap-Sass

Install Instructions
 =======
 
   1. Install the NodeJS JavaScript runtime (https://nodejs.org/) to utilize the npm command-line utility to aid in package dependency installation. 

   Windows installation location: C:/Program Files/nodejs/node_modules. 
   Mac installation location: /usr/local/lib/node_modules

   2. Confirm NodeJS / npm installation.  From the terminal, do "npm --version" and then "node --version".
   3. Verify Git is installed on your machine.  From the terminal, do "git --version". If Git is not installed, install it from http://git-scm.com/downloads
   4. Install Bower.  From the terminal, do "npm install –g bower". Note, step #1 needs to be completed successfully for this to work.
   5. Verify Ruby is installed on your machine.  From the terminal, do ruby --version.  If Rub is not installed, install it from https://www.ruby-lang.org/en/downloads/ 
   5. Install Compass: http://compass-style.org/install/ 
   6. Install Gulp: http://gulpjs.com/
   7. Clone project from: https://github.com/lfarran/roz.git
   8. Run "npm install".  This might require sudo for Mac (i.e. "sudo npm install").  This installs the required npm dependency packages in the project's 'node_modules' directory.
   9. Run "bower install".  This installs required 3rd party code dependency packages in the project's 'bower_components' directory. 

 Gulp build Instructions
 =======

	* "gulp build" - Minifies images, fonts, HTML, CSS, and JavaScript into the dist/ folder.  The contents of the dist folder are what's pushed to the hosting server once a release is ready.
   	* "gulp dev" - Runs gulp build task and runs a local browser server on port 8889.  During devepment, open http://localhost:8889 to view your changes.
   	* "gulp clean" - Deletes dist/ folder