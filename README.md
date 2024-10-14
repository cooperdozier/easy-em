# Easy Em minimal website framework with responsive JavaScript menu/submenu system

[Live Preview of Easy Em](https://cooperdozier.github.io/easy-em/) 

Many small businesses, individuals, students, and hobbyists can get by just fine with a very simple website as long as they can have a variable number of pages, simplicity, cross-device/screen-size functionality and speed, and a contact form. This is written to be comprehensible and adjustable, even for relative novices at web design. It is also lightning fast since there's no complicated engines or backend stuff underneath and works on any screen, even flip phones. For the contact form you can use the services of FormSpree.io (recommended by Dreamhost when they deprecated Unix formmail support which I never understood how to work anyway) or many other similar providers. If you need to make online sales / take payments for services that is out of the scope of this project<sup>1</sup> 

Make sure you try narrowing and widening the window if you're on a desktop or laptop and viewing in both portrait and landscape on a smartphone or tablet. Some smartphones will not display the widescreen format even in landscape.

To add and remove menu items that will be visible but without extra space in all states, just change 3 JavaScript height values (instructions and annotations in [main/js/from-scratch-menu-annotated.js](https://github.com/cooperdozier/easy-em/blob/main/js/from-scratch-menu-annotated.js) and add/remove the code for the new menu entries in the HTML files. 

Also included are a set of Facebook Open Graph and Twitter meta tags, the best I've been able to puzzle out the currently used syntax, and limited to those that seemed like they might be applicable to any web page.

It optionally integrates with the full set of Pure CSS framework rules, if you just comment out my 'purecss-stripped.css' and uncomment the CDN stylesheet links in the HTML. Also, the CDN links are for Pure 3.0.0 while mine were taken from Pure 2.0.3. Not sure if there are any significant differences in the ones I included yet.

**For Novices:**
***If you have never used GitHub before, the way to get the code/files and make Easy Em go is: click the green Code button, click Download Zip, extract it on your computer, and double click either HTML file, they will open from your hard disk into a web browser. Any text editor or programmer's text editor can be used for modifications and writing web page content. Microsoft's Visual Studio Code<sup>2</sup> is free and very popular.***

I built this for my site, [SaveTheOxygen.org](savetheoxygen.org) which is about Ocean Hypoxia and Climate Change, after I couldn't find a way to adapt the horizontal to vertical menu from the example at [https://purecss.io/layouts/tucked-menu-vertical/](https://purecss.io/layouts/tucked-menu-vertical/) that I had been using, such that it allows for menu items exceeding the window's horizontal width.

<sup>1</sup>: Shopify offers a Starter plan starting at $5 a month if you can work within it's very limited constraints. You can set up a very simple shop page or embed 'buy buttons' in any type of web page (including vanilla HTML/CSS/JS like Easy Em), or take point of sale payments in person (not sure how that works). Scroll down the 'plans' page to find where it's hidden, because the 'basic' plan at $29 a month is too high for someone experimenting not sure if they'll even be able to make sales. I believe you can set up print-on-demand products with printify in the Starter plan as well....
<sup>2<sup>: Visual Studio Code is proprietary but open-source-adjacent --> Taken from Wikipedia in 2024:<br>
"Visual Studio Code is proprietary software released under the "Microsoft Software License",[5] but based on the MIT licensed program named "Visual Studio Code — Open Source" (also known as "Code — OSS"), also created by Microsoft and available through GitHub."
