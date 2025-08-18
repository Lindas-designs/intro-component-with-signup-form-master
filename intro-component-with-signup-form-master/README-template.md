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
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

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

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
