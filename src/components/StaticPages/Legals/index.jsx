import React from 'react';
import MediaQuery from 'react-responsive';

import logo from '../../../assets/img/logo.png';
import illustrationSmall from '../../../assets/img/home_illustration_420.png';
import illustrationMedium from '../../../assets/img/home_illustration_768.png';

const Legals = () => (
  <div className="relative flex flex-col items-center w-full h-full gap-5">
    <MediaQuery maxWidth={767}>
      <img src={illustrationSmall} srcSet={`${illustrationSmall} 420w, ${illustrationMedium} 768w`} className="fixed left-0 bottom-0 z-[-1] w-full opacity-20" alt="" />
    </MediaQuery>
    <img src={logo} alt="logo du site edibles" className="w-2/3 pt-6" />
    <p className="text-3xl font-bold text-custom-green-3">Mentions Légales</p>
    <p className="px-2 text-center text-custom-darkgrey font-ediblesBodyTitle text-xl text-shadow-m">
      Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
    </p>
    <div className="text-custom-darkgrey m-3 text-xl leading-9">

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Éditeur du Site :</h2>
        <div className="px-2">
          <p>
            TEAM EDIBLES Numéro de SIRET : de_7355608
          </p>
          <p>
            Responsable éditorial : Edibles Team
          </p>
          <p>
            3 Rue du Devs, 00001 DeRêves
          </p>
          <p>
            Téléphone : 09 72 21 25 07 08 09 56 27
          </p>
          <p>
            Email : edibles@edibles.com
          </p>
          <p>
            Site Web : edibles.surge.sh
          </p>
        </div>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Hébergement :</h2>
        <div className="px-2">
          <p>
            Hébergeur : Surge.sh
          </p>
          <p>
            Somewhere in the world , I guess , maybe.
          </p>
          <p>
            Site Web : surge.sh
          </p>
        </div>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Développement :</h2>
        <div className="px-2">
          <p>
            TEAM EDIBLES
          </p>
          <p>
            Adresse : 3 Rue du Devs, 00001 DeRêves
          </p>
          <p>
            Site Web : edibles.surge.sh
          </p>
        </div>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Conditions d’utilisation :</h2>
        <div className="px-2">
          <p>
            Ce site (www.anthedesign.fr) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.

            Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…

            L’agence web Edibles met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.

            Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de Edibles , et signaler toutes modifications du site qu’il jugerait utile. Edibles n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
          </p>
          <h3><strong>Cookies :</strong></h3>
          <p>
            Le site edibles.surge.sh peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.

            Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
          </p>
          <h3><strong>Liens hypertextes :</strong></h3>
          <p>
            Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. TEAM EDIBLES ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.

            Edibles ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.

            Les utilisateurs, les abonnés et les visiteurs des sites internet  ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de TEAM EDIBLES.

            Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de TEAM EDIBLES, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.

            La TEAM EDIBLES se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
          </p>
        </div>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Services fournis :</h2>
        <div className="px-2">
          <p>
            L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site edibles.surge.sh .

            TEAM EDIBLES s’efforce de fournir sur le site edibles.surge.sh des informations aussi précises que possible. Les renseignements figurant sur le site edibles.surge.sh ne sont pas exhaustifs et les photos non contractuelles.

            Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site edibles.surge.sh sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
          </p>
          <h3><strong>Limitation contractuelles sur les données :</strong></h3>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions.

            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par courriel, à l’adresse contact@edibles.com, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).

            Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.

            De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.

            Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de TEAM EDIBLES.
          </p>
        </div>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Propriété intellectuelle :</h2>
        <div className="px-2">
          <p>
            Tout le contenu du présent site www.anthedesign.fr, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.

            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de TEAM EDIBLES. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.
          </p>
          <h3><strong>Déclaration à la CNIL :</strong></h3>
          <p>
            Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site a fait l’objet d’une déclaration 1656629 auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr).
          </p>
        </div>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Litiges :</h2>
        <p className="px-2">
          Les présentes conditions du site edibles.surge.sh sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
        </p>
      </section>

      <section className="my-4">
        <h2 className="text-2xl font-bold text-custom-green-3">Données personnelles :</h2>
        <p className="px-2">
          De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet edibles.surge.sh.

          Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de téléphone. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ».

          Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information.

          Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès.

          De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
        </p>
      </section>
    </div>
  </div>
);

export default Legals;
