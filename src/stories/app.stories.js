// import { linkTo } from '@storybook/addon-links';

import App from "../App.jsx";

export default {
  title: "App",
};

export const toStorybook = () => ({
  components: { App },

  template: "<App />",
});

toStorybook.story = {
  name: "app",
};
