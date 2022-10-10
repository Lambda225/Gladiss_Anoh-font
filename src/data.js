export const livres= [
    {
        id:1,
        titre:"Titre1",
        description:"",
        lienAchat:""
    },
    {
        id:2,
        titre:"Titre2",
        description:"",
        lienAchat:""
    },
    {
        id:3,
        titre:"Titre3",
        description:"",
        lienAchat:""
    },
    {
        id:4,
        titre:"Titre4",
        description:"",
        lienAchat:""
    },
    {
        id:5,
        titre:"Titre5",
        description:"",
        lienAchat:""
    },
    {
        id:6,
        titre:"Titre6",
        description:"",
        lienAchat:""
    },
    {
        id:6,
        titre:"Titre6",
        description:"",
        lienAchat:""
    },
    {
        id:7,
        titre:"Titre7",
        description:"",
        lienAchat:""
    },
    {
        id:8,
        titre:"Titre8",
        description:"",
        lienAchat:""
    },
];

export const article = [
    {
        id:1,
        titre:"Article1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit?",
        idcategorie:1,
    },
    {
        id:2,
        titre:"Titre2",
        description:"",
        idcategorie:1,
    },
    {
        id:3,
        titre:"Titre3",
        description:"",
        idcategorie:1,
    },
    {
        id:4,
        titre:"Titre4",
        description:"",
        idcategorie:2
    },
    {
        id:5,
        titre:"Titre5",
        description:"",
        idcategorie:2
    },
    {
        id:6,
        titre:"Titre6",
        description:"",
        idcategorie:2
    },
    {
        id:7,
        titre:"Titre7",
        description:"",
        idcategorie:3
    },
    {
        id:8,
        titre:"Titre8",
        description:"",
        idcategorie:3
    },
    {
        id:9,
        titre:"Titre9",
        description:"",
        idcategorie:3
    },
]

export const catarticle =[
    {
        id:1,
        titre:"Titre 1",
        description:"",
        photo:""
    },
    {
        id:2,
        titre:"Titre 2",
        description:"",
        photo:""
    },
    {
        id:3,
        titre:"Titre 3",
        description:"",
        photo:""
    },
] 

export const evenement =[
    {
        id:1,
        titre:"Comment reussir ça vie",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
        date:'2022-05-15'
    },
]
export const billet = [
    {
        id:1,
        idevenement:1,
        iduser:2,
    }
]

export const podcasts = [
    {
        id:1,
        titre:'Titre 1',
        Iframcont:"",
        idcategorie:1,
    },
    {
        id:2,
        titre:'Titre 2',
        Iframcont:"",
        idcategorie:2,
    },
    {
        id:3,
        titre:'Titre 3',
        Iframcont:"",
        idcategorie:3,
    },
    {
        id:4,
        titre:'Titre 4',
        Iframcont:"",
        idcategorie:1,
    },
    {
        id:5,
        titre:'Titre 5',
        Iframcont:"",
        idcategorie:2,
    },
    {
        id:6,
        titre:'Titre 6',
        Iframcont:"",
        idcategorie:3,
    }
]
export const catpodcast =[
    {
        id:1,
        titre:"Titre 1",
        description:"",
        lienspotify:"",
        photo:"",
    },
    {
        id:2,
        titre:"Titre 2",
        description:"",
        lienspotify:"",
        photo:""
    },
    {
        id:3,
        titre:"Titre 3",
        description:"",
        lienspotify:"",
        photo:""
    },
] 
export const avis =[
    {
        id:1,
        continue:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
        iduser:3,
        masquer:false,
    },
    {
        id:2,
        continue:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
        iduser:1,
        masquer:false,
    },
    {
        id:3,
        continue:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
        iduser:2,
        masquer:false,
    },
    {
        id:4,
        continue:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
        iduser:2,
        masquer:true,
    },
]
export const users =[
    {
        id:1,
        nom:"Kouame",
        prenom:"Antonio",
        profession:"Etudiant",
        photo:"",
        datenais:"2000-05-15",
    },
    {
        id:2,
        nom:"Dago",
        prenom:"Mimi",
        profession:"Marrain",
        photo:"",
        datenais:"2002-08-10",
    },
    {
        id:3,
        nom:"Kouakou",
        prenom:"Bétyca",
        profession:"Marrain",
        photo:"",
        datenais:"2002-08-10",
    }
]

export const questions = [
    {
        id:1,
        contenu:"C'est quoi le développement personnel ?",
        idreponse:1,
    },
    {
        id:2,
        contenu:'Lorem ipsum dolor sit amet consectetur ?',
        idreponse:1,
    },
    {
        id:3,
        contenu:'Lorem ipsum dolor sit amet consectetur ?',
        idreponse:2,
    },
    {
        id:4,
        contenu:'Lorem ipsum dolor sit amet consectetur ?',
        idreponse:1,
    },
]

export const reponses = [
    {
        id:1,
        contenu:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
    },
    {
        id:2,
        contenu:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit laboriosam libero recusandae corrupti? Consequuntur minima quo obcaecati soluta fugit",
    }
]