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
const enrichment = {
  "Captain Aldo Méndez": [
    "https://gta6ops.com/story/aldo-mendez/",
    "A senior police officer whose pursuit of the protagonists over missing evidence drives much of the conflict.",
    "Tourist Trap",
    "Law enforcement",
    [
      "jason-duval",
      "lucia-caminos",
      "deputy-sarah-fitzroy"
    ]
  ],
  "Deputy Sarah Fitzroy": [
    "https://gta6ops.com/story/sarah-fitzroy/",
    "An officer who assists Jason when the station comes under attack.",
    "Protective Custody",
    "Law enforcement",
    [
      "jason-duval",
      "captain-aldo-mendez"
    ]
  ],
  "Moses \"Mo\" Watkins": [
    "https://www.powerpyx.com/gta-6-moses-watkins-character/",
    "A Port Gellhorn mechanic and Vicki’s friend. Lucia meets him through the vehicle storyline.",
    "Moses (Take A Vehicle to Moses)",
    "Automotive",
    [
      "vicki",
      "lucia-caminos"
    ]
  ],
  "Nicole Park": [
    "https://www.powerpyx.com/gta-6-nicole-park-character/",
    "An employee of Sinfrontera National Bank with expertise in its security systems.",
    "Security Expert",
    "Bank security",
    [
      "raul-bautista"
    ]
  ],
  "Linda": [
    null,
    "Manages the Starlet Motel in Kelly County, where the protagonists recover.",
    null,
    "Hospitality",
    []
  ],
  "Vicki": [
    null,
    "A Delights performer who lives at the Starlet Motel and connects Lucia with local contacts.",
    null,
    "Nightlife",
    [
      "frankie-delight",
      "dunk",
      "moses-mo-watkins"
    ]
  ],
  "Mattia Tauro": [
    null,
    "Kat’s wealthy boyfriend, with connections to influential people in Vice City.",
    null,
    null,
    [
      "katerina-rosselli",
      "giorgio-gallo"
    ]
  ],
  "Raymond": [
    null,
    "Associated with San4San and Ernesto’s drug operation.",
    null,
    null,
    [
      "ernesto"
    ]
  ],
  "Petra Navarro": [
    null,
    "A Megamundo executive introduced through Valentina.",
    null,
    "Megamundo",
    [
      "valentina",
      "andres-de-leon"
    ]
  ],
  "Nathan \"Nate\" Bozer": [
    null,
    "An Ajax Gym bodybuilder and member of Kordell’s circle.",
    null,
    "Ajax Gym",
    [
      "kordell-grant"
    ]
  ],
  "Mandy": [
    null,
    "A tenant of Brian Heder in the Keys who takes an interest in Jason.",
    null,
    null,
    [
      "brian-heder",
      "jason-duval"
    ]
  ],
  "Kyle McKittrick": [
    null,
    "A crop-dusting pilot associated with McKittrick Farm near the Starlet Motel.",
    null,
    "Agriculture",
    []
  ],
  "Santino": [
    null,
    "Works at the Y Hotel in Ocean Beach as a concierge.",
    null,
    "Hospitality",
    []
  ],
  "Shayna": [
    null,
    "A friend Lucia met while incarcerated.",
    null,
    null,
    [
      "lucia-caminos"
    ]
  ],
  "Shirley Baker": [
    null,
    "Jason’s Key Lento neighbour, who offers optional errands.",
    null,
    null,
    [
      "jason-duval"
    ]
  ],
  "Counselor Stefanie Gates": [
    null,
    "A corrections-system employee who appears in Lucia’s early storyline.",
    null,
    "Corrections",
    [
      "lucia-caminos"
    ]
  ],
  "Valentina": [
    null,
    "Arranges an escort job involving Andrés and introduces the protagonists to Megamundo contacts.",
    null,
    null,
    [
      "andres-de-leon",
      "petra-navarro"
    ]
  ],
  "Vinny Capsik": [
    null,
    "A specialist associated with Giorgio Gallo, alongside Kevin and Liz.",
    null,
    null,
    [
      "giorgio-gallo",
      "kevin-kueh",
      "liz-jackson"
    ]
  ],
  "Wyman": [
    null,
    "A mechanic who operates Wyman’s World Auto Salvage Co.",
    null,
    "Automotive",
    []
  ],
  "Mia Caminos": [
    null,
    "Lucia’s mother, who has business interests in Vice City.",
    null,
    null,
    [
      "lucia-caminos"
    ]
  ],
  "Rafa de León Navarro": [
    null,
    "Son of Andrés and Petra, with an interest in video games.",
    null,
    null,
    [
      "andres-de-leon",
      "petra-navarro"
    ]
  ],
  "Dre'Quan Priest": [
    "https://www.gtabase.com/characters/gta-6/dre-quan-priest",
    "Runs music ventures in Vice City with Boobie and represents Real Dimez.",
    null,
    "Only Raw Records",
    [
      "boobie-ike",
      "real-dimez",
      "bae-luxe",
      "roxy-rashad"
    ]
  ]
};
const additionalEncounters = [
  [
    "Alexi",
    "alexi",
    "Connected to Dardan and Burim in the Key Lento attack."
  ],
  [
    "Charles",
    "charles",
    "Darnell’s brother, investigated in Here, Kitty Kitty."
  ],
  [
    "Dice",
    "dice",
    "An opponent in Arlo’s underground fighting venue."
  ],
  [
    "Dumpster Lawyer",
    "dumpster-lawyer",
    "A recurring street encounter involving a man who claims to practice law."
  ],
  [
    "Eddie Acosta",
    "eddie-acosta",
    "A cryptocurrency promoter encountered during Pool Day."
  ],
  [
    "Hector",
    "hector",
    "Runs the nightclub visited in Adventures in Babysitting."
  ],
  [
    "Jackson — shooting-range encounter",
    "jackson-shooting-range-encounter",
    "A stranger encountered through shooting-range challenges; not established as Officer Jackson."
  ],
  [
    "Manuel",
    "manuel",
    "A Hit ’n’ Run VC street-racing contact introduced through Dre’Quan."
  ],
  [
    "Mario",
    "mario",
    "A performer at Delights Cabaret; not established as Mitico Mario."
  ],
  [
    "Marti",
    "marti",
    "Hector’s associate in the nightclub storyline."
  ],
  [
    "Martin",
    "martin",
    "A security employee at Delights Cabaret."
  ],
  [
    "Nico — Vape & Smoke Shop",
    "nico-vape-smoke-shop",
    "A named shop contact, not established as the credited Hitman."
  ],
  [
    "Pedro — café waiter",
    "pedro-cafe-waiter",
    "A café employee in a documented gameplay encounter."
  ],
  [
    "Raph",
    "raph",
    "Named gameplay character with a documented appearance."
  ],
  [
    "Rob — exotic-car dealer",
    "rob-exotic-car-dealer",
    "An exotic vehicle dealer encountered in the story."
  ],
  [
    "Rocco",
    "rocco",
    "Named gameplay character with a documented appearance."
  ],
  [
    "Sandy",
    "sandy",
    "Named gameplay character with a documented appearance."
  ],
  [
    "Santiago",
    "santiago",
    "Named gameplay character with a documented appearance."
  ],
  [
    "Tommy (Tomás)",
    "tommy-tomas",
    "Jason and Lucia’s son; Lorena cares for him during Lucia’s imprisonment."
  ],
  [
    "Vanessa — Bayside tenant",
    "vanessa-bayside-tenant",
    "A tenant associated with Bayside."
  ],
  [
    "Zach",
    "zach",
    "Named gameplay character with a documented appearance."
  ],
  [
    "Andrew Node",
    "andrew-node",
    "Named appearance documented in the character research."
  ],
  [
    "Camillo",
    "camillo",
    "A Vice City online content creator."
  ],
  [
    "Dave — Circles of Hell",
    "dave-circles-of-hell",
    "Named appearance connected to Circles of Hell."
  ],
  [
    "José Bermúdez",
    "jose-bermudez",
    "A contact near the Friends of Freedom memorial who introduces the Russo bunker mystery."
  ],
  [
    "Mister Mangrove — Skunk Ape",
    "mister-mangrove",
    "The creature Kirk claims to be pursuing; its nature is not established by that claim."
  ],
  [
    "Phil",
    "phil",
    "A figure in the Ammu-Nation advertisement in Trailer 2."
  ],
  [
    "President Russo",
    "president-russo",
    "A named figure in the bunker investigation."
  ],
  [
    "The Pretender",
    "the-pretender",
    "Named appearance documented in the character research."
  ]
];
function enrichCharacter(item) {
  const d=enrichment[item.title];
  if(!d)return item;
  const [url,bio,firstMission,occupation,relations]=d;
  return {...item,paragraphs:[bio],attributes:{...item.attributes,...(firstMission?{'First documented mission':firstMission}:{}),...(occupation?{'Occupation / affiliation':occupation}:{}),Evidence:item.status==='Official source'?'Official profile and community research':'Official cast credit; community biography'},relatedCharacterIds:relations,relatedSources:[...(item.relatedSources||[]),{label:url?.includes('powerpyx')?'PowerPyx — individual profile':url?.includes('gtabase')?'GTABase — individual profile':url?'GTA6Ops — individual profile':'GTABase — supporting character guide',url:url||gtabase}].filter((s,i,a)=>a.findIndex(x=>x.url===s.url)===i),...(item.attributes.Evidence==='Official cast credit only'?{description:bio,paragraphs:[],status:'Community reference',source:url||gtabase,details:['Official cast credit; community biography']}: {})};
}
function encounter([title,id,description]) {
  return {id,title,kind:'Character',category:'Additional encounter',subtitle:'Documented named appearance',tag:'ADDITIONAL ENCOUNTER',image:placeholder,placeholderImage:true,source:'https://gta6ops.com/story/'+id+'/',status:'Community reference',spoiler:true,description,details:['No matching cast credit established'],attributes:{Role:'Additional encounter / named appearance','Credited performer':'Not verified in this atlas',Evidence:'Community gameplay or appearance reference'},relatedSources:[{label:'GTA6Ops — character directory',url:ops},{label:'PowerPyx — character index',url:powerpyx}],verifiedOn:'2026-11-27'};
}
export const characterRecords = [
  ...main.map(row=>enrichCharacter(record(row,'Main Cast'))),
  ...full.map(row=>enrichCharacter(record(row,'Full Cast'))),
  ...additionalEncounters.map(encounter),
  {id:'real-dimez',title:'Real Dimez',kind:'Character',category:'Music duo',subtitle:'Bae-Luxe and Roxy Rashad',tag:'MUSIC DUO',
   image:'/images/real_dimez_01.webp',source:profiles,status:'Official source',spoiler:true,
   description:'Rap duo formed by Bae-Luxe and Roxy, signed to Only Raw Records. Their early collaboration with DWNPLY helped establish their career.',
   attributes:{Role:'Music duo',Members:'Bae-Luxe; Roxy Rashad',Label:'Only Raw Records',Evidence:'Official group profile'},
   relatedSources:[{label:'Rockstar Games — cast credits',url:credits},{label:'GTABase — character guide',url:gtabase}],verifiedOn:'2026-11-27'},
];
