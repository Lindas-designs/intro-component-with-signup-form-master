# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Creating equal width flexbox items](#creating-equal-width-flexbox-items)
    - [Creating shadow only under button element](#creating-shadow-only-under-button-element)
    - [Styling button states](#styling-button-states)
    - [Creating 3D button effect](#creating-3d-button-effect)
    - [Checking email address](#checking-email-address)
    - [Checking if condition is true for multiple array elements - every method](#checking-if-condition-is-true-for-multiple-array-elements---every-method)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Lindas-designs/intro-component-with-signup-form-master)
- Live Site URL: [Add live site URL here](https://lindassignupform.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

### Creating equal width flexbox items

Using flex:1 on a flexbox item, which means that the flex item will grow to fill the available space in its flex container, sharing that space equally with other flex items that also have a value of 1.

### Creating shadow only under button element

To do this, set the spread(4th value) to the negative of blur (3rd value).

```css
.try {
  box-shadow: 0rem 1.5rem 0.5rem -1rem var(--gray-900);
  /* Value meaning (in order of appearance) -horizontal offset,vertical offset, blur, spread, color.
 */
}
```

### Styling button states

Default
Hover
Active (pressed)
Focused

1. Default state
   Full color background
   Clear,readable label

```css
.try {
  box-shadow: 0rem 1.5rem 0.5rem -1rem var(--gray-900);
  /* Adding slight shadow at the bottom for more 3D effect */
}
```

2.  Hover state
    Color darkening or lightening
    Subtle drop shadow or elevation
    Slight size change or border highlight

    I USED BOX SHADOW AROUND BUTTON ON HOVER

```css
.try:hover {
  box-shadow: 0rem 0rem 1.5rem var(--gray-900);
}
```

3.  Active (pressed) state
    Slight "inset" look (button appears pressed in)
    Deeper color tone or shadow compression
    Smaller font size

```css
.try:active {
  transform: scale(0.98);
  background-color: var(--purple-350);
  font-size: 1.3rem;
}
```

4.Focused state
High-contrast outline or glow

```css
.try:focus {
  outline: none;
  box-shadow: 0rem 0rem 0.5rem 0.5rem var(--gray-900);
}
```

### Creating 3D button effect

Adding a very thin highlight inside a button on the bottom horizont.

```css
.claim {
  box-shadow: inset 0rem -0.5rem 0.5rem var(--purple-350);
}
```

### Checking email address

To check if email address follows the format `name@host.tld` following code can be used:

```js
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function checkEmailAddress(email_address) {
  let result = pattern.test(email_address);
  return result;
  // this will return true if email address format is correct and false if not.
}
```

### Checking if condition is true for multiple array elements - every method

```js
let allValid = Array.from(inputs).every(
  (input) => !(input.value.trim().length === 0)
);
//allValid will be true only if in each array iteration result is true
```

### Continued development

Practice, practice, practice!

## Author

- Frontend Mentor - [@Lindas-designs](https://www.frontendmentor.io/profile/Lindas-designs)
