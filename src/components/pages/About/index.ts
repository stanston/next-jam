// export const About = () => {
export default function About() {
  const description = "アバウトページです。";

  const alertTest = () => {
    alert("test");
  };

  return {
    description,
    alertTest,
  };
}
