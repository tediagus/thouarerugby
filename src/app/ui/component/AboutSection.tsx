import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/three-balls.jpg"}
          height={500}
          width={500}
          alt="three-balls"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            A propos de la future association sportive
          </h2>
          <p className="text-base lg:text-lg">
            Rejoignez notre aventure pour créer une toute nouvelle association
            de rugby ! Ensemble, nous bâtirons une communauté passionnée qui
            partage la camaraderie, l&#39;esprit sportif et le plaisir du rugby.
            Que vous soyez un joueur chevronné ou débutant, nous vous invitons à
            être partie prenante de cette aventure excitante. Venez façonner
            l&#39;avenir du rugby dans notre région en nous rejoignant dès
            aujourd&#39;hui !
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
