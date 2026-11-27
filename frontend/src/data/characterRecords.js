// Character roster checked 2026-11-27 against Rockstar's published Main Cast and Full Cast.
// Credits confirm names and performers, not biographies. Community summaries are marked separately.
// No unofficial portraits are used as substitutes for missing character imagery.
const credits = 'https://www.rockstargames.com/VI/credits';
const profiles = 'https://www.rockstargames.com/VI/only-in-leonida';
const gtabase = 'https://www.gtabase.com/gta-6/characters/';
const ops = 'https://gta6ops.com/story/characters/';
const powerpyx = 'https://www.powerpyx.com/gta-6-all-characters/';
const placeholder = '/images/character-placeholder.svg';
const main = [
  [
    "Jason Duval",
    "Dylan Rourke"
  ],
  [
    "Lucia Caminos",
    "Manni L. Perez"
  ],
  [
    "Donnie",
    "Brad Carter"
  ],
  [
    "Cal Hampton",
    "Bobby Moynihan"
  ],
  [
    "Brian Heder",
    "Stephen Root"
  ],
  [
    "Lori Heder",
    "Orlagh Cassidy"
  ],
  [
    "Kenton Rees",
    "Machel Montano"
  ],
  [
    "Andy",
    "Mallory Wu"
  ],
  [
    "Katerina Rosselli",
    "Edwina Rai"
  ],
  [
    "Mattia Tauro",
    "Massi Pregoni"
  ],
  [
    "Pilot Pete",
    "Carl Palmer"
  ],
  [
    "Captain Aldo Méndez",
    "Chris McKinney"
  ],
  [
    "Linda",
    "Lisa Emery"
  ],
  [
    "Vicki",
    "Taryn Manning"
  ],
  [
    "Dunk",
    "Brad Fleischer"
  ],
  [
    "Moses \"Mo\" Watkins",
    "Aaron Morton"
  ],
  [
    "Wyman",
    "David Stishan"
  ],
  [
    "Billy",
    "Spenser Granese"
  ],
  [
    "Bret Vogel",
    "Jariko Denman"
  ],
  [
    "Dre'Quan Priest",
    "Naiqui Macabroad"
  ],
  [
    "Bae-Luxe",
    "Hood Brat"
  ],
  [
    "Roxy Rashad",
    "Krissy Celess"
  ],
  [
    "Boobie Ike",
    "Mike Forbs"
  ],
  [
    "Tyrone Russo",
    "Taylor Novak"
  ],
  [
    "Mia Caminos",
    "Roselyn Sanchez"
  ],
  [
    "Papa Audacity",
    "Brian Furey"
  ],
  [
    "Yago Jiménez",
    "Victor Almanzar"
  ],
  [
    "Yasmani Cabrera",
    "Hiram Delgado"
  ],
  [
    "Randy Kozlov",
    "Serge Didenko"
  ],
  [
    "Benedict Halifax",
    "Ian Scott McGregor"
  ],
  [
    "Karim",
    "Rafi Silver"
  ],
  [
    "Raul Bautista",
    "Manny Perez"
  ],
  [
    "Andrea",
    "Christine Spang"
  ],
  [
    "DWNPLY",
    "Denzel Curry"
  ],
  [
    "Raymond",
    "Jaime Lincoln Smith"
  ],
  [
    "Felipe",
    "Alfredo Diaz"
  ],
  [
    "Valentina",
    "Josephine Phoenix"
  ],
  [
    "Nicole Park",
    "Sierra Katow"
  ],
  [
    "Abraham Gonzalez",
    "Nick Pupo"
  ],
  [
    "Francisco \"Cisco\" Delgado",
    "Mario D'Leon"
  ],
  [
    "Nathan \"Nate\" Bozer",
    "Brendan Sagalow"
  ],
  [
    "Raina Koleva",
    "Oksana Grishina"
  ],
  [
    "Kordell Grant",
    "Michael Jai White"
  ],
  [
    "Andrés de León",
    "J. Eddie Martinez"
  ],
  [
    "Petra Navarro",
    "Elaine Del Valle"
  ],
  [
    "César Navarro",
    "Anthony Ruiz"
  ],
  [
    "Gustavo Herrera",
    "Josue Gutierrez"
  ],
  [
    "KD",
    "Jordan J. Adams"
  ],
  [
    "Rafa de León Navarro",
    "Sebastian Montañez"
  ],
  [
    "Omar Dawoud",
    "Barzin Akhavan"
  ],
  [
    "Dardan",
    "Jake Ventimiglia"
  ],
  [
    "Giorgio Gallo",
    "Sergio Castellitto"
  ],
  [
    "Vinny Capsik",
    "Roger Wayne"
  ],
  [
    "Liz Jackson",
    "Tifané Williams"
  ],
  [
    "Kevin Kueh",
    "Abraham Lim"
  ],
  [
    "The Hitman",
    "Michael Hollick"
  ],
  [
    "Deputy Sarah Fitzroy",
    "Kelly Grago"
  ]
];
const full = [
  [
    "Donatello's Assistant",
    "Aaron Vargas"
  ],
  [
    "Danny the Night Manager",
    "Adrián Alvarado"
  ],
  [
    "Rocky Chavez",
    "Alain Uy"
  ],
  [
    "Donatello Lambrini",
    "Alex Boniello"
  ],
  [
    "Kent Andrews",
    "Alex Emanuel"
  ],
  [
    "Cassie the Pillar",
    "Alexandra Templer"
  ],
  [
    "Dodo Rosebud",
    "Alexandra Zellerbach"
  ],
  [
    "Marissa Tercio",
    "Ali Hoffmann"
  ],
  [
    "Annabelle",
    "Alix Elias"
  ],
  [
    "Officer Jackson",
    "Almeria Campbell"
  ],
  [
    "Peewees Squatter",
    "Amen Igbinosun"
  ],
  [
    "Isabella Brady",
    "Anna Eilinsfeld"
  ],
  [
    "Evelyn Andrews",
    "Anne Carney"
  ],
  [
    "Senator Camila Fuentes",
    "Annie Henk"
  ],
  [
    "Cameron",
    "Anthony Dasilva"
  ],
  [
    "Percy",
    "Anthony Robert Grasso"
  ],
  [
    "Kamal",
    "Arron Lloyd"
  ],
  [
    "Mitico Mario",
    "Bad Bunny"
  ],
  [
    "Tip Dollaz",
    "Barron B. Bass"
  ],
  [
    "Bianca Celestino",
    "Belén Cusi"
  ],
  [
    "Dodo Jeff",
    "Ben Fine"
  ],
  [
    "Sam",
    "Betsy Helmer"
  ],
  [
    "Big Mike",
    "Himself"
  ],
  [
    "Andre Ye",
    "Bobby Lee"
  ],
  [
    "Bodega",
    "Bodega the DJ"
  ],
  [
    "Cullen",
    "Brandon Zelman"
  ],
  [
    "Parole Officer Walsh",
    "Brian Dykstra"
  ],
  [
    "Judd Beaven",
    "Brian Hansbury"
  ],
  [
    "Zaria \"Ri Ri\" Luckett",
    "Brigitte Madera"
  ],
  [
    "Arnold",
    "Caesar Samayoa"
  ],
  [
    "Wax",
    "Cardo Got Wings"
  ],
  [
    "Shirley Baker",
    "Carolee Carmello"
  ],
  [
    "Royce Jones",
    "Charles S. Holt"
  ],
  [
    "Peggy",
    "Cheryl Stern"
  ],
  [
    "EJ",
    "Christian Clements"
  ],
  [
    "Nayib",
    "Christopher Tramantana"
  ],
  [
    "Megan the Pillar",
    "Cilda Shaur"
  ],
  [
    "Brittney",
    "Clarissa Thibeaux"
  ],
  [
    "Sergeant Pete Galeki",
    "Corey Sorenson"
  ],
  [
    "Arlo",
    "Dada 5000"
  ],
  [
    "Sparky",
    "Daniel Walton"
  ],
  [
    "Pineapples",
    "Danny Bolero"
  ],
  [
    "Jimmy De Santa",
    "Danny Tamberelli"
  ],
  [
    "Alvan West",
    "David Beach"
  ],
  [
    "BootyBang Director",
    "David Ebert"
  ],
  [
    "Zeek",
    "David J. Cork"
  ],
  [
    "Bush",
    "David the OH Oliver"
  ],
  [
    "Gil Reynolds",
    "Davram Stiefler"
  ],
  [
    "Jacki",
    "Devin Kessler"
  ],
  [
    "Stevie J",
    "DJ Stevie J"
  ],
  [
    "Vypertec-100",
    "Donald Chang"
  ],
  [
    "Marcel",
    "Donathan Walters"
  ],
  [
    "Ernesto",
    "Ed Trucco"
  ],
  [
    "Leif Åland",
    "Edward Akrout"
  ],
  [
    "Felix the Ten",
    "Eli Kennedy"
  ],
  [
    "Jenna the Whisper",
    "Emily Dayton Evans"
  ],
  [
    "Alicia",
    "Emily McMurtry"
  ],
  [
    "Frankie Delight",
    "Eric William Morris"
  ],
  [
    "Erjon",
    "Franco Maicas"
  ],
  [
    "Freddie",
    "Freddie Gibbs"
  ],
  [
    "Terro",
    "G.K. Umeh"
  ],
  [
    "Bledar",
    "Gabriel Furman"
  ],
  [
    "Janice",
    "Gemma Dawson"
  ],
  [
    "Officer Miguel Castro",
    "Gene Gabriel"
  ],
  [
    "Natalie the Pillar",
    "Grasie Mercedes"
  ],
  [
    "Dodo Steve",
    "Gunnar Manchester"
  ],
  [
    "Dante Fresh",
    "Haas Manning"
  ],
  [
    "Jaylah",
    "Heather Alicia Simms"
  ],
  [
    "Rhonda",
    "Holly Stevenson"
  ],
  [
    "Bert",
    "Holter Graham"
  ],
  [
    "MonaLi$a",
    "Ivana Barnes"
  ],
  [
    "Dr. Bill",
    "J. Anthony Crane"
  ],
  [
    "Dodo Jeremy",
    "Jacque Laon Horton II"
  ],
  [
    "Lucky",
    "Jake Ryan Lozano"
  ],
  [
    "Kyle McKittrick",
    "Jared Canfield"
  ],
  [
    "Jasir",
    "Jay Vigliucci"
  ],
  [
    "Cecilia Richardson (Real)",
    "Jennifer Jiles"
  ],
  [
    "Kirk",
    "Jim Burke"
  ],
  [
    "Joe Laurino",
    "Jimmy Palumbo"
  ],
  [
    "Jalen Wang",
    "John-Henry Hirozawa"
  ],
  [
    "Rolo Cristóbal",
    "Jose Febus"
  ],
  [
    "Manny Muscles",
    "Joshua Grosso"
  ],
  [
    "Yolanda",
    "Kai Heath"
  ],
  [
    "Lauren the Whisper",
    "Kelsey Lea Jones"
  ],
  [
    "Counselor Stefanie Gates",
    "Kimberly S. Fairbanks"
  ],
  [
    "Mother Dodo Yvonne",
    "Kit Flanagan"
  ],
  [
    "Kodak Black",
    "Himself"
  ],
  [
    "Danica Howard",
    "Lana Autumn Schupbach"
  ],
  [
    "Shanese",
    "Latonia Phipps"
  ],
  [
    "Cecilia Richardson (Fake)",
    "Leah Loftin"
  ],
  [
    "Mandy",
    "Lexie Shoaibi"
  ],
  [
    "Shayna",
    "Lindsey Akers"
  ],
  [
    "Chester",
    "Lucas Dixon"
  ],
  [
    "Rodney",
    "Luigi Sottile"
  ],
  [
    "Officer Gutierrez",
    "Luis Vega"
  ],
  [
    "Dook",
    "Maleek Rae"
  ],
  [
    "Marv",
    "Mandal Man"
  ],
  [
    "Viper",
    "Maria Del Mar Gonzalez"
  ],
  [
    "Levi",
    "Matt Van Orden"
  ],
  [
    "Hank",
    "Matt Walton"
  ],
  [
    "Hugo el Capitan",
    "Matthew J. Harris"
  ],
  [
    "Celine",
    "Mia Matthews"
  ],
  [
    "Kai",
    "Michael Giese"
  ],
  [
    "Abel",
    "Michael Lynche"
  ],
  [
    "Joey",
    "Michael S. King"
  ],
  [
    "Paulo Jimenez",
    "Mike Smith Rivera"
  ],
  [
    "Cerise",
    "Nichole Galicia"
  ],
  [
    "Drunk Aussie",
    "Nick Atkinson"
  ],
  [
    "Burim",
    "Nickola Shreli"
  ],
  [
    "Dodo Tyler",
    "Niguel Quinn"
  ],
  [
    "Priscilla Pace",
    "Oriana Lada"
  ],
  [
    "Dr. Merle",
    "Pat Dwyer"
  ],
  [
    "Maryam Ansari",
    "Pooya Mohseni"
  ],
  [
    "Roscoe",
    "Quaz Degraft"
  ],
  [
    "Pooch",
    "Ralph Adriel Johnson"
  ],
  [
    "Monterossa",
    "Raymond Neil Hernandez"
  ],
  [
    "Debora",
    "Riley Noland"
  ],
  [
    "Jerry Turner",
    "RJ Brown"
  ],
  [
    "Pablo",
    "Rob Raco"
  ],
  [
    "Elonzo",
    "Rodrigo Lopresti"
  ],
  [
    "Marco",
    "Roy Jackson"
  ],
  [
    "Andrew from Chuck's",
    "Ryan Lee Dunlap"
  ],
  [
    "Ricky",
    "Sage Ftacek"
  ],
  [
    "Ali",
    "Sahra Mellesse"
  ],
  [
    "Little Sam",
    "Himself"
  ],
  [
    "Santino",
    "Samuel Maria Gomez"
  ],
  [
    "DJ Pretzel",
    "Sandro Isaack"
  ],
  [
    "The Pianist",
    "Scott Storch"
  ],
  [
    "Sir Todd Bancroft",
    "Seán Mahon"
  ],
  [
    "Bones",
    "Sebastián Arroyo"
  ],
  [
    "Sexyy Red",
    "Herself"
  ],
  [
    "Briana",
    "Shannon Condon"
  ],
  [
    "Emelda",
    "Susanna Guzman"
  ],
  [
    "Bailey the Pillar",
    "Tess Marshall"
  ],
  [
    "Sasha",
    "Tianna Mendez"
  ],
  [
    "Dorean",
    "Tina Johnson"
  ],
  [
    "Doug",
    "Tommy Buck"
  ],
  [
    "Sam the Bookie",
    "Troy Hall"
  ],
  [
    "Maleek Rivers",
    "Tyreek Hill"
  ],
  [
    "Samantha",
    "Valerie Chandler"
  ],
  [
    "Lexy Campbell",
    "Viviana Cleveland"
  ],
  [
    "Lavaughn",
    "Will Cobbs"
  ],
  [
    "Ian",
    "Will Meyers"
  ],
  [
    "Lorena Caminos",
    "Yadira Correa"
  ],
  [
    "Dodo Noah",
    "Zane Pais"
  ]
];
const official = {
  "Jason Duval": [
    "Former soldier working for smugglers in the Leonida Keys. He and Lucia are the playable leads whose partnership anchors the story.",
    "jason_duval_01",
    "Protagonist"
  ],
  "Lucia Caminos": [
    "Raised with family ties to Liberty City, Lucia leaves prison determined to secure a better future. She and Jason share the central playable story.",
    "lucia_caminos_01",
    "Protagonist"
  ],
  "Cal Hampton": [
    "Jason’s friend and a colleague in Brian Heder’s operation. He prefers staying home and listening to Coast Guard communications.",
    "cal_hampton_01"
  ],
  "Brian Heder": [
    "Veteran smuggler operating through a boatyard in the Keys with his wife Lori. Jason is connected to his business.",
    "brian_heder_01"
  ],
  "Lori Heder": [
    "Brian Heder’s third wife and partner in his boatyard operation."
  ],
  "Boobie Ike": [
    "A Vice City businessman with property, a club and a recording studio. His music venture with Dre’Quan is Only Raw Records.",
    "boobie_ike_01"
  ],
  "Dre'Quan Priest": [
    "A music entrepreneur working with Boobie at Only Raw Records. He has signed Real Dimez and wants to build a foothold in Vice City’s music scene."
  ],
  "Bae-Luxe": [
    "One member of Real Dimez, a rap duo formed with her school friend Roxy. Their music career includes a collaboration with DWNPLY."
  ],
  "Roxy Rashad": [
    "The other member of Real Dimez alongside Bae-Luxe. The duo is signed to Only Raw Records."
  ],
  "DWNPLY": [
    "A local rapper who collaborated with Real Dimez on an early successful track."
  ],
  "Raul Bautista": [
    "An experienced bank robber who recruits people for ambitious, high-risk jobs.",
    "raul_bautista_01"
  ]
};
const community = {
  "Donnie": "A pilot working with Brian Heder in the Keys.",
  "Andy": "An optional encounter character who offers a series of side missions.",
  "Kenton Rees": "An optional mission contact.",
  "Bret Vogel": "Associated with hunting and the company Killtelligence.",
  "Pilot Pete": "Offers Jason a series of delivery jobs.",
  "Billy": "An optional side-mission character.",
  "Yasmani Cabrera": "A contact offering robbery jobs.",
  "Randy Kozlov": "A side-mission contact associated with vehicle acquisition.",
  "Tyrone Russo": "An optional side-mission contact.",
  "Yago Jiménez": "Associated with the street-racing scene.",
  "Papa Audacity": "Stunt performer and face of the AudaCity brand.",
  "Abraham Gonzalez": "Vice City lawyer associated with Lucretia Law Group.",
  "Andrea": "Part of Raul’s crew.",
  "Felipe": "Part of Raul’s crew.",
  "Karim": "Handles equipment for Raul’s crew.",
  "Katerina Rosselli": "A former prison acquaintance of Lucia.",
  "Francisco \"Cisco\" Delgado": "A bodybuilder associated with Kordell Grant’s crew.",
  "Kordell Grant": "A supporting character with his own crew.",
  "Giorgio Gallo": "Vice City shipping businessman associated with Mattia Tauro.",
  "Andrés de León": "A wealthy Megamundo associate.",
  "Benedict Halifax": "An antiques dealer associated with Evelyn Andrews.",
  "Dunk": "A Port Gellhorn contact associated with Vicki.",
  "Arnold": "A broker who has worked with Brian Heder.",
  "Dr. Bill": "A retired doctor associated with Dunk.",
  "Evelyn Andrews": "An antiques dealer in Capri.",
  "Ernesto": "Associated with San4San and Raymond.",
  "Frankie Delight": "Runs the Delights club in Port Gellhorn.",
  "Joey": "Works at Coastal Auto Care.",
  "Alvan West": "Associated with the Kelly County Tip Line.",
  "Kirk": "An eccentric hunter obsessed with the Skunk Ape.",
  "Dodo Noah": "An activist in Dodos Rising.",
  "Dodo Rosebud": "A marine-animal rights activist associated with Dodos Rising.",
  "Dodo Tyler": "A Dodos Rising activist who opposes fracking.",
  "Mother Dodo Yvonne": "Leader of Dodos Rising.",
  "Dr. Merle": "A researcher associated with the Node conspiracy.",
  "Freddie": "A prepper and podcaster with a fortified compound."
};
const slug = name => name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’"]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const aliases = {'Cal Hampton':'Cal',"Dre'Quan Priest":'Dre’Quan'};
const sideNames = new Set(['Andy','Billy','Kenton Rees','Pilot Pete','Randy Kozlov','Tyrone Russo','Yasmani Cabrera','Yago Jiménez','Papa Audacity','Alvan West','Kirk','Dodo Noah','Dodo Rosebud','Dodo Tyler','Mother Dodo Yvonne','Dr. Merle','Freddie']);
function record([title,performer], castSection) {
  const profile = official[title];
  const summary = community[title];
  const role = profile?.[2] || (sideNames.has(title) ? 'Optional encounter / side contact' : castSection === 'Main Cast' ? 'Main cast' : 'Full cast');
  const source = profile ? profiles : summary ? gtabase : credits;
  const sourceStatus = summary && !profile ? 'Community reference' : 'Official source';
  const photo = profile?.[1];
  const evidence = profile ? 'Official profile and cast credit' : summary ? 'Official cast credit; community biography' : 'Official cast credit only';
  const creditedRole = aliases[title] || title;
  return {
    id:slug(title),title,kind:'Character',category:role,subtitle:role,tag:role.toUpperCase(),
    image:photo ? '/images/'+photo+'.webp' : placeholder,placeholderImage:!photo,
    source,status:sourceStatus,spoiler:true,
    description:profile?.[0] || summary || 'Rockstar lists this role in its published GTA VI cast credits. A separate story biography has not been verified.',
    details:[evidence],
    attributes:{Role:role,'Credited performer':performer,'Credit section':castSection,...(creditedRole!==title?{'Credited as':creditedRole}:{}),'Evidence':evidence},
    relatedSources:[{label:'Rockstar Games — official cast credits',url:credits},...(profile?[{label:'GTABase — character guide',url:gtabase}]:[]),...(summary?[{label:'GTABase — character guide',url:gtabase},{label:'GTA6Ops — character directory',url:ops}]:[]),{label:'PowerPyx — character index',url:powerpyx}].filter((s,i,a)=>s.url!==source&&a.findIndex(x=>x.url===s.url)===i),
    verifiedOn:'2026-11-27',
  };
}
export const characterRecords = [
  ...main.map(row=>record(row,'Main Cast')),
  ...full.map(row=>record(row,'Full Cast')),
  {id:'real-dimez',title:'Real Dimez',kind:'Character',category:'Music duo',subtitle:'Bae-Luxe and Roxy Rashad',tag:'MUSIC DUO',
   image:'/images/real_dimez_01.webp',source:profiles,status:'Official source',spoiler:true,
   description:'Rap duo formed by Bae-Luxe and Roxy, signed to Only Raw Records. Their early collaboration with DWNPLY helped establish their career.',
   attributes:{Role:'Music duo',Members:'Bae-Luxe; Roxy Rashad',Label:'Only Raw Records',Evidence:'Official group profile'},
   relatedSources:[{label:'Rockstar Games — cast credits',url:credits},{label:'GTABase — character guide',url:gtabase}],verifiedOn:'2026-11-27'},
];
