import React from "react";
import AnimationRevealPage from "helpers/MyAnimationRevealPage.js";
import Hero from "components/hero/MyBackgroundAsImageWithCenteredContent.js";
import MySimpleWithSideImage from "components/faqs/MySimpleWithSideImage.js"
import Testimonial from "components/testimonials/MyTwoColumnWithImage.js";

import Footer from "components/footers/MyMiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Testimonial />
    <MySimpleWithSideImage />
    <Footer />
  </AnimationRevealPage>
);
