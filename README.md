# CurrencyFair Coding Challenge

The following documents the process followed during the development of the UI in line with the provided mockups and assets. To reiterate on the stipulations enforced: 

* Cannot use a UI framework
* UI should be functional on mobile devices
* Should use an SPA framework (e.g. AngularJS, VueJS, React)
* Code should be commented and easy to maintain/iterate on

## Table of Contents

* [Overview](#overview)
* [Process](#process)
  * [1. Create React App](#1-create-react-app)
  * [2. Color Palette & Assets](#2-color-palette--assets)
  * [3. Defining Components](#3-defining-components)
  * [4. Layout/Design](#4-layoutdesign)
  * [5. Instantiating Information to Components](#5-instantiating-information-to-components)

## Overview

The challenge as provided was to realise the UI presented via the mockups in accordance with the stipulations as aforementioned in which, hypothetically, they may then be passed to a back end developer to integrate.

### URL

The project is hosted via GitHub Pages. To access the UI, navigate to the following:
**URL:** https://naxes.github.io/CurrencyFair-Challenge/

### Technologies

To complete this challenege I opted to make use of the following technologies:

* [React](https://reactjs.org) - SPA Framework
* [Visual Studio Code](https://code.visualstudio.com) - IDE

I had chosen specifically to use React as this is the technology used internally.

## Process

### 1. Create React App

Created a new react project using the appropriate command line tool:
```
create-react-app CurrencyFair
```

### 2. Color Palette & Assets

Took the mockup PDF file provided into Photoshop in order to extract the color hex values of several elements for use in the project. The following are those as used:

* #adadad - Grey
* #31313b - Black
* #ffd079 - Orange
* #e0e0e0 - Light Grey
* #6dc0e6 - Light Blue
* #5ba0bf - Dark Blue

Additionally, fonts were provided. Specifically, variations of the PostGrotesk font in many formats. Notably, I opted to use WOFF (Web Open Font Format) due to it's better browser compatability when viewed comparatively to the others. In relation to the variations of the font, italicized versions were provided but are not used in the mockup, thusly those are excluded. In essence, those utilised are:

* PostGrotesk Bold
* PostGrotesk Book
* PostGrotesk Light
* PostGrotesk Medium

I segregated assets to the following location which are then imported into the main App.css file:
```
src/fonts/fonts.css
```
This file defines font sizes, colors, alignments, and general element preset classes.

### 3. Defining Components

Analysing the mockup further, I noted down the following elements as components:

#### Button

Represents the button contained in the left margin that should bring up a modal window.

#### Card

Represents the sectioned element in the right margin that encompasses numerical data and must be affixed to its current position at all times.

#### Geotag

Represents the country/currency information contained within sections in the left margin.

#### Section

Comprises of the geotag component in addition to correlating numerical data in the card component.

#### Splitter

Represents a section splitter. Used to separate the main left margin content and the footer information.

#### Steps

Represents the topmost element of the left margin illustrating a multi-step process. Focus is placed on the fact that the UI in question relates to the first step explicitly.

The general process to creating/implementing each:

* Import React
* Import Components (if required)
* Import Stylesheets (if required)
* Define & Export Component
* Implement Render

Each component is encompassed in its own folder, comprising of a JavaScript and CSS file, respectively:
```
src/components
```

### 4. Layout/Design

One of the more challenging aspects was certainly to not rely on any UI framework, even for a simple grid system, but  instead build each component from the ground-up with their own dedicated styling.

#### Flexbox Grid System

Created a set of classes in CSS using flexboxes for the purposes of site layout conjunctively with media queries for elements that should stack and or be presented differently on mobile devices: 

* .grid (container similar to a row)
* .col-xs (extra small column)
* .col-s (small column)
* .col-m (medium column)

The sizes of each column are governed by a differing flex value: 
```
src/App.css

/* Flexbox Grid */
.grid {
  display: flex;   
}

/* Flexbox Column (Extra Small) */
.col-xs {
  flex: .2;
}

/* Flexbox Column (Small) */
.col-s {
  flex: .5;
}

/* Flexbox Column (Medium) */
.col-m {
  flex: 1;
}
```
These are used in most cases with the exception of the main left and right margins that act as the containers for all of the main content. In said cases, the left section is given a flex-basis value, while the right will then take up the remaining screen space represented by the flex-grow value. I found this to be very similar to the implementation as presented in the mockups visually:
```
src/App.css

/* Left Section (Transaction Setup) */
.left-section {  
  flex-basis: 60%;                
}

/* Right Section (Sending/Receiving Details) */
.right-section {
  flex-grow: 1; 
}
```

#### Sidebar Height

An aspect of the grey sidebar was to ensure that it remains the height of the screen. This was achieved using the VH (view height) value of 100, meaning that it will be 100% the height of the given viewport.
```
src/App.css

/* Right Section (Details) */
.right-section {
  height: 100vh; 
}
```

#### Affixing the Card Component

One feature of the UI was that the right sections card encompassing a number of numerical details must remain affixed to it's position at all times, meaning if there is vertical scrollable space in the viewport, that this will remain in place. This was achieved by applying the following to the card class:
```
src/components/Card/card.css

/* Card Container */
.card {
    top: 8vh;   
    position: sticky;
}
```
The top value ensures that there is a margin gap between the card and the top of the viewport when it becomes affixed and matches the height of the navbar. In essence, scrolling the navbar just out of view will trigger the affixed state of the card component.

#### Mobile & Media Queries

Due to the nature of the grid system made with flexboxes, displaying elements encapsulated within it at all times with a CSS property of 'display: flex' meant that items would not stack given access on a mobile device. Thusly, media queries were utilised to alter the grid and other elements to display in appropriate ways. 

In some cases, this meant displaying as a block in order to achieve stacking columns. In others, such as with the 'Steps' component, remaining in flex as opposed to stacking looks and functions much better regardless of if on mobile or desktop:
```
src/App.css

/* Flexbox Grid (Desktop) */
.grid {
  display: flex;   
}

/* Flexbox Grid (Mobile) */
@media (max-width: 700px) {
  .grid {
    display: block;
  }
}
```
The resulting changes were tested as follows:

* Using the browsers responsive design mode
* On a mobile device via IP address on port 3000 (i.e. [IP]:3000)
* On both desktop and mobile via site hosting on [GitHub Pages](https://naxes.github.io/CurrencyFair-Challenge/)

### 5. Instantiating Information to Components

Initially, I had hard-coded each numerical value contained within both the section and card components. However, I thought more on the integration with the back end and chose to instead 'fake' or 'simulate' its presumed communication with an API to at least provide the basis for easier integration by using props, state, and ajax fetch.

To do this I created a dummy JSON file (details.json) with one entry that represents the numerical values presented in the UI. This is then fetched via AJAX where the URL equates to the raw JSON data located within the repo itself.

Notably, for instances where any decimal values were zero, these would not display when retrieving the data. The workaround was to make use of the toFixed() method and explicitly specify to what decimal places to display:
```
// Example of toFixed()
const sendPrice = this.props.details.sendPrice.toFixed(2)
```
In addition however, the numerical data contained in the section components in the left margin have styling that segregates the integer and fractional values whereby the latter should appear smaller. This meant I needed to make use of split() to accommodate this:
```
// Example of split()
const [sendInteger, sendFractional] = this.props.details.sendPrice.toFixed(2).split(".");
```