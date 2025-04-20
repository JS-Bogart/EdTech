# EdTech Videos

## Intro

EdTech is an educational website where users can watch videos and learn about a variety of topics, share their thoughts, and contribute by uploading their own videos!

## Getting Started

First, clone and run the development server:

```bash
   git clone https://github.com/JS-Bogart/EdTech.git
   nvm use 18.20.4
   npm install
   npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- **Homepage**: This landing page also serves up a list of videos to watch, so users can jump right into learning! The **CONTRIBUTE** button in the header allows users to add educational videos of their own.

- **Videos[videoId]**: Users are redirected to these dynamic pages upon selecting a video. Here they can watch videos as well as read and add comments to engage with contributers and other users.

## Site Features

- **Video Browsing**: Scroll and browse through our catalogue of educational videos on a variety of topics.
- **Video Uploading**: Users can contribute to the site by adding educational videos of their own! Simply click the **CONTRIBUTE** button, and enter the video name, description, and url.
- **Comments**: Users can read comments from other users, or and their own by clicking the **Add a comment** button at the top of the comments section.
- **Custom Video Player**: Our customized video player allows users to play, pause, skip around, mute or adjust the volume, change the playback speed, and enter fullscreen.

## Technologies

This site uses the following technologies and services:

- **Next.js**: [Next.js](https://nextjs.org/) is a React framework for building full-stack web applications.
- **Typescript**: [Typescript](https://www.typescriptlang.org/) adds additional syntax to JavaScript to support a tighter integration with your editor.
- **GSAP**: [GSAP](https://gsap.com/) allows you to effortlessly animate anything JS can touch.
- **styled-components**: [styled-components](https://styled-components.com/) utilizes tagged template literals and the power of CSS to write actual CSS code to style your components.
- **react-player**: [react-player](https://www.npmjs.com/package/react-player) is a React component for playing videos from a variety of URLs.
- **Fontsource**: [Fontsource](https://fontsource.org/) is a collection of open-source fonts that are packaged into individual NPM packages for self-hosting in your web applications.
