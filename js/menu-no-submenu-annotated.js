// MIT License

// Copyright (c) 2020-2022 Andrew Cooper Dozier

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// source: https://www.savetheoxygen.org/js/from-scratch-menu-annotated.js
// comment-less production copy at https://www.savetheoxygen.org/js/from-scratch-menu.js

// INSTRUCTIONS *** to change the number of menu and submenu items, just change the css height
//                  settings where marked with // INSTRUCTIONS ***
// --------
// INSTRUCTIONS *** there are, of course, things that have to be set up a certain way in HTML 
//                  and CSS for this to work correctly
//
// INSTRUCTIONS *** the affected HTML is the stuff between the <nav> *** </nav> tag, which is the first thing 
//                  in the body on every page
//
// INSTRUCTIONS *** the active CSS in this case includes the 2 @media declarations at the top of the 
//                  main CSS file (file: either https://www.savetheoxygen.org/css/combined-styles.css
//                  or https://www.savetheoxygen.org/css/syles-lb-combined.css
//                  for standard and low bandwidth pages respectively)
// INSTRUCTIONS *** And all the stuff below "/* collapsing menu */" except the 'low-bandwidth-only
//      {xxx}' and 'standard-bandwidth-only {xxx}' blocks at the end of the file.
//      Most of it is not strictly necessary for the menu/submenu to work, except for the 
//      'display: xxx;' statements, the 'position: absolute;' statement, and the @media declaration. 
//      In particular none of the .x-switch-animation rules are needed if you don't mind a switch 
//      that stays still. the 'vertical-align: top;' statement is not necessary, but it looks bad 
//      open without it.
// --------
// INSTRUCTIONS *** there are currently a maximum of 6 items in the widescreen navigation on the 
//      right side (including More and $low-bandwidth?) because if there are any more than that 
//      (with present length and style settings), the furthest right ones start to disappear past 
//      the window boundary before the menu  can change state to the narrow/collapsed form

// LAYOUT STATE VARIABLE
let layoutState = ['wide', 'none'];
// layoutState[0] - screen wider or narrower than 47.999em
// layoutState[1] - submenu & switch hidden ('none' since 'null' is a reserved word, avoid it),
//                  submenu 'open', or submenu 'closed'
// layoutState[2] - main-menu horizontal ('none' since switch is hidden when screen is wide with
//                  horizontal menu), main-menu 'open', or main-menu 'closed'

let mediaVar = window.matchMedia('screen and (max-width:47.999em)');

// listen for orientation change to close menu and submenu if open
window.addEventListener('orientationchange', closeVisible);

// set layout state array to given values when max-width passes up or down through 47.999em
// closes menu and submenu, switches from 'narrow' to 'wide'
// used in window.onload statement just below
function checkMedia() {
    if (mediaVar.matches) {
        layoutState = ['narrow', 'closed'];
    } else {
        layoutState = ['wide', 'none'];
    }
}

// on page load or reload, set page width variable, close menus if open
window.onload = checkMedia;
// close menus when closing a tab, using back or forward buttons, or clicking away to another page
// i.e. prevent menu from remaining open when you leave a page and return, I think
// closeVisible function is at bottom
window.addEventListener('visibilitychange', closeVisible);

// when window is resized and width changes from more to less than 47.999em or vice versa, 
// close menus, set again layoutState
mediaVar.addEventListener("change", (e) => {
    if (e.matches) {
                layoutState = ['narrow', 'closed'];
        closeVisible();
                document.getElementById('main-menu-list').style.display = 'none';
            console.log('1');
    } else {
                layoutState = ['wide', 'none'];
        closeVisible();
            console.log('2');
    };
});

//
//          HOWEVER, the state variable is just an array of three words and cannot change the page
//          display by itself, it also requires the other statements here and in other code blocks

// MAIN MENU SWITCH LISTENER
// list for when #main-menu-switch is clicked
// case 1 - IF the state variable IS set to (narrow screen AND main menu closed) IS TRUE, THEN,
//          --> open main menu in narrow screen, then
//          --> change the state variable
// case 2 - IF the state variable IS set to (narrow screen and main menu open) IS TRUE, THEN
//          --> close main menu in narrow screen, then
//          --> change the state variable
// default - IF (none of the above) WERE TRUE, THEN
//          --> show error message, which will never be seen until you change the code and break
//          something
//
//          HOWEVER, the state variable is just an array of three words and cannot change the page display by itself,
//          it also requires the other statements here and in other code blocks 
// main menu is always open in wide screen, and main-menu-switch is never visible in wide screen,
// so there are no cases for wide screen
//
// MAIN MENU SWITCH LISTENER
document.getElementById('main-menu-switch').addEventListener('click', function (e) {
    switch (true) {
        case (layoutState[0] === 'narrow' && layoutState[1] === 'closed'):
            // no need to display submenu-switch, because it is always visible when main-menu is
            // visible, in either horizontal or vertical
            document.getElementById('main-menu-list').style.display = "block";
// INSTRUCTIONS *** see the 4th case in SUBMENU SWITCH LISTENER for info on height="17em"
            document.getElementById('main-menu').style.height = "15.2em";
            document.getElementById('i-can-transform').classList.remove('pure-menu-horizontal');
            document.getElementById('main-menu-switch').classList.add('x-shape');
            layoutState[1] = 'open';
            console.log('7');
            break;
        case (layoutState[0] === 'narrow' && layoutState[1] === 'open'):
            // submenu and submenu switch are inside main-menu, so they disappear when main menu 
            // closes, but if main-menu closes while submenu is open, we want submenu to be already
            // closed when main menu is reopened
            document.getElementById('main-menu-list').style.display = "none";
// INSTRUCTIONS *** to change the height of the navigation bar in narrow screen with the menu 
//                  closed, simply change the height of "2.1em" here and in the third case in
//                  SUBMENU SWITCH LISTENER above and second line with the closeVisible() function
//                  below to a different height
            document.getElementById('main-menu').style.height = "2.1em";
            document.getElementById('main-menu-switch').classList.remove('x-shape');
            layoutState[1] = 'closed';
            console.log('8');
            break;
        default:
            console.log('something is wrong - from main-menu-switch listener')
    }
});

// CLOSEVISIBLE FUNCTION
// If it's open, close the submenu if in widescreen, or in narrow screen, close both the submenu
// and the main menu
// The function is used in the 2 window.addEventListener() statements and in the
// mediaVar.addEventListener() statement blocks near the top
function closeVisible() {
// INSTRUCTIONS *** the third case in SUBMENU SWITCH LISTENER and second case in MAIN MENU 
//                  SWITCH LISTENER for info on height="2.1em"
    document.getElementById('main-menu').style.height = "2.1em";
    document.getElementById('main-menu-switch').classList.remove('x-shape');
    if (!mediaVar.matches) {
        document.getElementById('main-menu-list').style.display = 'inline-block';
        document.getElementById('i-can-transform').classList.add('pure-menu-horizontal');
        // adding these 4 layoutState settings below (where before there were none) fixes the 
        // must-be-clicked-twice-after-resize-within-narrow-viewport issue. Not certain what 
        // the exact problem was in, but I noticed i was changing state w/o changing 
        // the state variable here, so these lines were *logically* required for consistency.
        // I'm kind of surprised that that was the only broken behavior without them
        layoutState[1] = 'none';
        console.log('9');
    } else {
        layoutState[1] = 'closed';
        document.getElementById('main-menu-list').style.display = 'none';
        console.log('10');
    }
}
