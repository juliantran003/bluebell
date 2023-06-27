// IMG

import vine from "../public/img/about-vine.png";

// Imports
import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      <Image alt="vine" src={vine} width="200" className="about-vine-top" />
      <Image alt="vine" src={vine} width="200" className="about-vine-bottom" />
      <p>
        <i>Constance Bluebell Gardens</i> was founded in 2019 after the founders
        name. <br />
        Trained by her aunt from a young age, Constance decided to focus her
        business on a more traditional approach to gardening. <br /> Keeping in
        mind the respect of the practice itself as opposed to a result-only
        focus.
        <br />
        <br />
        Indeed, gardening is an art of patience, exchange and growth. Only
        through a holistic approach to the ecosystem can we hope to retrieve a
        natural and healthy relationship with nature. <br />
        <br />
        This is why our team uses hand-held, mechanical tools whenever possible
        and strives for a special approach to each individual garden instead of
        pre-made care packages.
        <br />
        <br />
        We put a high priority on communcation with the garden owners to ensure
        we can embody, and hopefully exceed their vision.
      </p>
    </section>
  );
}
