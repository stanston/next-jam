import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "./";

import thumb from "../../../../public/images/jotai.png";

export default {
  title: "Parts/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const シンプル = Template.bind({});
シンプル.args = {
  title: "タイトル",
};

export const リード文と画像 = Template.bind({});
リード文と画像.args = {
  title: "タイトル",
  text: "リード文",
  thumb: thumb,
  thumbAlt: "Jotai",
};
