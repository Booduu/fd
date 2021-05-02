import React from 'react';
import styles from './Mentions.module.scss';

const mentions = [
    {
        title: 'L\'éditeur',
        content: "L’édition et la direction de la publication du site www.fulldub.fr est assurée par Fabien Romain, domiciliée 7 PLACE ANNE LAPREVOTE 21300 Chenove, dont le numéro de téléphone est 0678109383, et l'adresse e-mail full.dub.mail@gmail.com."
    },
    {
        title: 'L\'hébergeur',
        content: "L'hébergeur du site www.fulldub.fr est la Société OVH, dont le siège social est situé au 2 rue Kellermann – BP 80157 59053 ROUBAIX CEDEX 1 , avec le numéro de téléphone : "
    },
    {
        title: 'Accès au site',
        content: "Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension des services le site www.fulldub.fr ne saurait être tenu responsable."
    },
    {
        title: ' Collecte des données',
        content: "Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs."
    },
    {
        title: ' Cookies',
        content: "Aucun cookie n'est utilisé sur le site www.fulldub.fr. Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet."
    },
    {
        title: 'Propriété intellectuelle',
        content: "Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site www.fulldub.fr, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil."
    },
]

const Mentions = () => {
    return (  
        <div className={styles.container}>
            <div className={styles.mentions}>
                <h3>Mentions Légales</h3>
                {mentions.map((a, i) => (
                    <div className={styles.section}>
                        <h3>{a.title}</h3>
                        <div>{a.content}</div>
                    </div>
                ))}
           </div>
        </div>
    );
}
 
export default Mentions;