import Footer from "./Elements/Footer";
import Intro from "./Elements/Intro";
import MiddleSection from "./Elements/MiddleSection";
import Section from "./Elements/Section";

const App = () => {
  return (
    <main>
      <Intro />
      <Section
        h1="Designed for the future"
        h21="Introducing an extensible editor"
        p1="Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creative content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog."
        h22="Robust content management"
        p2="Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you're
          in full control."
        img="illustration-editor-desktop.svg"
        mImg="illustration-editor-mobile.svg"
        direction="right"
      />
      <MiddleSection />
      <Section
        h1=""
        h21="Free, open, simple"
        p1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        h22="Powerful tooling"
        p2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        img="illustration-laptop-desktop.svg"
        mImg="illustration-laptop-mobile.svg"
        direction="left"
      />
      <Footer />
    </main>
  );
};

export default App;
