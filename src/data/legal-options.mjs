// Language-specific strings passed into the shared legal copy (src/data/legal.mjs).
import config from '../../site.config.mjs';

const T = {
  en: {
    updated: '30 October 2026',
    processor: 'with our website host and email provider, who process data on our behalf under contract;',
    sent: 'The enquiry form is sent to our form-handling provider, which delivers it to our inbox.',
    mailto: 'The enquiry form does not send anything itself: it opens your own email app with your enquiry filled in.',
    thirdParty: 'Fonts are served from this website’s own domain. Photos load from our image delivery provider, which does not set cookies.',
  },
  fr: {
    updated: '30 octobre 2026',
    processor: 'avec notre hébergeur et notre messagerie, qui traitent les données pour notre compte dans le cadre d’un contrat ;',
    sent: 'Le formulaire de demande est transmis à notre prestataire de formulaires, qui le remet dans notre boîte mail.',
    mailto: 'Le formulaire de demande n’envoie rien lui-même : il ouvre votre propre messagerie avec votre demande déjà remplie.',
    thirdParty: 'Les polices sont servies depuis le domaine de ce site. Les photos sont chargées depuis notre fournisseur de diffusion d’images, qui ne dépose pas de cookie.',
  },
  de: {
    updated: '30. Oktober 2026',
    processor: 'an unseren Hosting- und E-Mail-Anbieter, die Daten in unserem Auftrag auf vertraglicher Grundlage verarbeiten;',
    sent: 'Das Anfrageformular wird an unseren Formulardienst übermittelt, der es an unser Postfach weiterleitet.',
    mailto: 'Das Anfrageformular sendet selbst nichts: Es öffnet Ihr eigenes E-Mail-Programm mit Ihrer ausgefüllten Anfrage.',
    thirdParty: 'Schriften werden von der eigenen Domain dieser Website geladen. Fotos kommen von unserem Bildauslieferungsdienst, der keine Cookies setzt.',
  },
  es: {
    updated: '30 de octubre de 2026',
    processor: 'con nuestro proveedor de alojamiento web y de correo, que tratan los datos por cuenta nuestra en virtud de un contrato;',
    sent: 'El formulario de solicitud se envía a nuestro proveedor de formularios, que lo entrega en nuestro buzón.',
    mailto: 'El formulario de solicitud no envía nada por sí mismo: abre su propio programa de correo con la solicitud ya rellenada.',
    thirdParty: 'Las fuentes se sirven desde el propio dominio de este sitio. Las fotos se cargan desde nuestro proveedor de distribución de imágenes, que no instala cookies.',
  },
};

export function legalOptions(lang) {
  const t = T[lang];
  return {
    brand: config.brand.name,
    email: config.contact.email,
    address: config.contact.address,
    updated: t.updated,
    storage: [],
    processors: [t.processor],
    enquiryNote: config.enquiry.endpoint ? t.sent : t.mailto,
    thirdParty: t.thirdParty,
  };
}
