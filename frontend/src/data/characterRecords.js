import { characterEvidence } from './characterEvidence';
import { characterDiscoveries } from './characterDiscoveries';
import { mediaCast } from './mediaCast';
import { characterCoverage } from './characterCoverage';
import { characterSourceIndex } from './characterSourceIndex';
import { applyProfileResearch, applySceneResearch } from './characterProfileResearch';
import { completeCharacterDossier } from './characterCompleteness';
// Character roster checked 2026-11-27 against Rockstar's published Main Cast and Full Cast.
// Credits confirm names and performers, not biographies. Community summaries are marked separately.
// External portraits are explicitly attributed; missing imagery uses a placeholder.
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
    "Delights Cabaret security worker; his appearance in Afternoon Delight depends on the selected approach."
  ],
  [
    "Nico — Vape & Smoke Shop",
    "nico-vape-smoke-shop",
    "Yasmani introduces this contact during Chapter 3. Nico facilitates collection of stolen goods in the game and is not established as the Hitman."
  ],
  [
    "Pedro — café waiter",
    "pedro-cafe-waiter",
    "Serves Mia and Lucia during Mami Knows Best. Mia says he is training to become a veterinarian."
  ],
  [
    "Raph",
    "raph",
    "Shayna’s partner, introduced through her optional post-prison storyline."
  ],
  [
    "Rob — exotic-car dealer",
    "rob-exotic-car-dealer",
    "Dealership contact in Company Cars, reached through Santino after Valentina arranges access."
  ],
  [
    "Rocco",
    "rocco",
    "A contact in Andrés de León’s circle whom Jason meets in Adventures in Babysitting."
  ],
  [
    "Sandy",
    "sandy",
    "Receptionist at Lucretia Law Group, introduced in Lawyer Up."
  ],
  [
    "Santiago",
    "santiago",
    "Organizes street racing in Vice City and sends invitations after an optional Chapter 3 race."
  ],
  [
    "Tommy (Tomás)",
    "tommy-tomas",
    "Jason and Lucia’s son; Lorena cares for him during Lucia’s imprisonment."
  ],
  [
    "Vanessa — Bayside tenant",
    "vanessa-bayside-tenant",
    "Former resident of the protagonists’ Bayside apartment, known through belongings and messages rather than a face-to-face meeting."
  ],
  [
    "Zach",
    "zach",
    "A Starlet Motel acquaintance who directs Lucia to Vicki during the Chapter 2 storyline."
  ],
  [
    "Andrew Node",
    "andrew-node",
    "Identified through the No Flusher investigation, which connects his address to a custom Truffade Thrax."
  ],
  [
    "Camillo",
    "camillo",
    "A Vice City online content creator."
  ],
  [
    "Dave — Circles of Hell",
    "dave-circles-of-hell",
    "The transport contact who introduces the campsite encounter near Port Gellhorn."
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
    "The final opponent in the optional Circles of Hell challenge."
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

const researchedBios = {
  "raina-koleva": [
    "Bodybuilder at Ajax Gym and member of Kordell Grant’s team. Lucia encounters her while investigating the crew.",
    "Heavy Lifting",
    "Bodybuilding / Kordell’s crew",
    [
      "kordell-grant",
      "nathan-nate-bozer",
      "francisco-cisco-delgado",
      "lucia-caminos"
    ]
  ],
  "cesar-navarro": [
    "Television network board leader, father of Petra and grandfather of Rafa. His corporate role is introduced at the opening of the network’s headquarters.",
    "Party Hard",
    "Television executive",
    [
      "petra-navarro",
      "andres-de-leon",
      "rafa-de-leon-navarro",
      "gustavo-herrera"
    ]
  ],
  "gustavo-herrera": [
    "Security employee of César Navarro, whose involvement in Rafa’s kidnapping is revealed later in the story.",
    "Party Hard",
    "Private security",
    [
      "cesar-navarro",
      "rafa-de-leon-navarro"
    ]
  ],
  "kd": [
    "Guest associated with Dre’Quan’s promotional efforts for Real Dimez. Players may choose him for a VIP table during the Club VYB event.",
    "Headliners",
    "Music-industry contact",
    [
      "drequan-priest",
      "real-dimez",
      "royce-jones"
    ]
  ],
  "omar-dawoud": [
    "Airport recruitment officer who introduces Jason to baggage-handler work after Andrea arranges the meeting.",
    "Too Much Baggage",
    "Airport recruitment",
    [
      "andrea",
      "jason-duval",
      "kordell-grant"
    ]
  ],
  "dardan": [
    "Represents Albanian creditors monitoring Giorgio Gallo and holds a grievance connected to Alexi and Burim.",
    "Starting From Zero",
    "Albanian criminal organization",
    [
      "giorgio-gallo",
      "alexi",
      "burim"
    ]
  ],
  "liz-jackson": [
    "Mixed martial arts trainer employed by Giorgio Gallo; joins the specialist team with Vinny and Kevin in Chapter 5.",
    "Bird in the Hand",
    "MMA trainer / Navy ORCAS team",
    [
      "giorgio-gallo",
      "vinny-capsik",
      "kevin-kueh"
    ]
  ],
  "kevin-kueh": [
    "Specialist in Giorgio Gallo’s Chapter 5 team with Liz and Vinny. A secondary guide calls him Kevin Crumbles, but Rockstar’s credited surname is Kueh.",
    "Bird in the Hand",
    "Navy ORCAS team",
    [
      "giorgio-gallo",
      "liz-jackson",
      "vinny-capsik"
    ]
  ],
  "the-hitman": [
    "Rockstar credits Michael Hollick as The Hitman. Gameplay reporting identifies the visitor in Chapter 5 as Niko Bellic, confronting Giorgio about a missing shipment; that identification is distinct from the formal credit.",
    "Taking Liberties",
    null,
    [
      "giorgio-gallo"
    ]
  ],
  "donatello-lambrini": [
    "Actor whose presence at a nightclub affects Andrés de León’s plans for a reserved booth.",
    "Adventures in Babysitting",
    "Actor",
    [
      "andres-de-leon"
    ]
  ],
  "senator-camila-fuentes": [
    "Politician implicated by recorded evidence that Raul considers using as leverage. Rockstar credits her as a senator; another guide calls her a governor.",
    "Close Surveillance",
    "Politician",
    [
      "raul-bautista"
    ]
  ],
  "cameron": [
    "Joins Sir Todd Bancroft and Jason on the charter trip connected to Kenton’s disappearance.",
    "Maritime Disputes",
    null,
    [
      "sir-todd-bancroft",
      "kenton-rees",
      "jason-duval"
    ]
  ],
  "kamal": [
    "Appears with Roxy at the party where Lucia is trying to reach the performer.",
    "Top Billing",
    null,
    [
      "roxy-rashad",
      "lucia-caminos"
    ]
  ],
  "tip-dollaz": [
    "DJ seen as the protagonists leave the club at the start of Fresh Evidence.",
    "Fresh Evidence",
    "DJ",
    []
  ],
  "dodo-jeff": [
    "Contact involved in transporting the rescued dodo in the final part of the Dodos Rising questline.",
    "Dodo, Rise!",
    null,
    [
      "mother-dodo-yvonne",
      "lucia-caminos"
    ]
  ],
  "big-mike": [
    "Appears as himself at the unfinished premises of a new club planned by Boobie Ike.",
    "Boobie Time",
    null,
    [
      "boobie-ike"
    ]
  ],
  "judd-beaven": [
    "Contacts Lucia through Snapmatic with a misleading acting opportunity, leading her and Cisco to Washington Beach.",
    null,
    null,
    [
      "lucia-caminos",
      "francisco-cisco-delgado"
    ]
  ],
  "royce-jones": [
    "Club promoter approached by Dre’Quan about securing a better booking for Real Dimez. Briana works as his assistant.",
    "Watch It",
    "Club promoter",
    [
      "drequan-priest",
      "real-dimez",
      "briana"
    ]
  ],
  "peggy": [
    "Key Lento resident living near Shirley Baker; becomes involved in one of Shirley’s optional errands.",
    "Steal the Scooter",
    null,
    [
      "shirley-baker",
      "jason-duval"
    ]
  ],
  "brittney": [
    "Member of Billy’s Thrillbilly crew, introduced through the optional Chapter 2 mud-club storyline.",
    "Thrillbillies",
    "Thrillbilly crew",
    [
      "billy"
    ]
  ],
  "sergeant-pete-galeki": [
    "Police sergeant who questions the protagonist during Tourist Trap. The credited spelling is Galeki, although a walkthrough uses Galecki.",
    "Tourist Trap",
    "Police sergeant",
    [
      "captain-aldo-mendez"
    ]
  ],
  "arlo": [
    "Kordell Grant associate who operates a private fighting venue and helps with the crew’s later arrangements.",
    "Team Building",
    "Fight club operator",
    [
      "kordell-grant",
      "dice"
    ]
  ],
  "bush": [
    "Works around DWNPLY’s management and security, appearing backstage during the music storyline.",
    "Top Billing",
    "Music management / security",
    [
      "dwnply"
    ]
  ],
  "gil-reynolds": [
    "Founder of Booty Bang whose property features in Safe Word.",
    "Safe Word",
    "Adult entertainment producer",
    []
  ]
};
Object.assign(researchedBios, {
  "jacki": [
    "Party guest who blocks Lucia’s access to Roxy’s room. Her dog Pluto is present in the encounter.",
    "Top Billing",
    null,
    [
      "lucia-caminos",
      "roxy-rashad"
    ]
  ],
  "stevie-j": [
    "DJ at the Real Dimez launch show and acquaintance of Dre’Quan. Other credits identify distinct broadcast appearances.",
    "Headliners",
    "DJ",
    [
      "real-dimez",
      "drequan-priest"
    ]
  ],
  "felix-the-ten": [
    "Personal assistant to Cecilia in Cellerica, who introduces Lucia to parts of the organization’s operation.",
    "Peach!",
    "Cellerica",
    [
      "cecilia-richardson-real",
      "lucia-caminos"
    ]
  ],
  "jenna-the-whisper": [
    "Cellerica customer who meets Lucia at a market during Andy’s product distribution assignments.",
    "Climbing the Cellerichain Part 2",
    "Cellerica",
    [
      "andy",
      "lucia-caminos"
    ]
  ],
  "terro": [
    "Leader of M7, who becomes involved with Mia Caminos’s real-estate business following a dispute with Viper.",
    "South Leonida Real Estate",
    "M7",
    [
      "viper",
      "mia-caminos",
      "bones"
    ]
  ],
  "bledar": [
    "Works within Giorgio’s penthouse circle and assists the departing group in Chapter 5.",
    "Protective Custody",
    null,
    [
      "giorgio-gallo"
    ]
  ],
  "janice": [
    "Wine authentication professional whose work-related access becomes relevant to Lucia during the airport heist.",
    "VCIA Takedown",
    "Wine authentication",
    [
      "lucia-caminos"
    ]
  ],
  "dodo-steve": [
    "Friend of Dodo Tyler who participates in the Watson Bay environmental protest and can be rescued during the incident.",
    "Twin Flames",
    "Dodos Rising",
    [
      "dodo-tyler",
      "lucia-caminos"
    ]
  ],
  "jaylah": [
    "Bayside Apartments resident who shares a home with Marv and can converse with the player outside the Chapter 3 apartment.",
    null,
    null,
    [
      "marv"
    ]
  ],
  "lucky": [
    "Dancer at Delights Cabaret who may join Jason onstage during Ladies’ Night, depending on the selected approach.",
    "Afternoon Delight",
    "Delights performer",
    [
      "mario",
      "jason-duval"
    ]
  ],
  "cecilia-richardson-real": [
    "Leads Cellerica and communicates through a manufactured public image. The warehouse storyline exposes the organization’s deception; the credits distinguish the real and fake roles.",
    null,
    "Cellerica",
    [
      "andy",
      "felix-the-ten",
      "cecilia-richardson-fake"
    ]
  ],
  "jalen-wang": [
    "Manager of Ajax Gym, referred to as J-Wang in gameplay reporting. Gives Jason a tour during the hard-drive investigation.",
    "Heavy Lifting",
    "Gym manager",
    [
      "jason-duval"
    ]
  ],
  "yolanda": [
    "Hamlet Correctional acquaintance with whom Lucia can discuss a crossword during the prologue.",
    "Prologue",
    null,
    [
      "lucia-caminos"
    ]
  ],
  "dook": [
    "Bodyguard for Tyrone Russo and familiar acquaintance of Dre’Quan.",
    "Dealer’s Choice",
    "Bodyguard",
    [
      "tyrone-russo",
      "drequan-priest"
    ]
  ],
  "marv": [
    "Recurring Bayside Apartments neighbor who shares a household with Jaylah and discusses local events.",
    null,
    null,
    [
      "jaylah"
    ]
  ],
  "viper": [
    "M7 member whose opposition to Mia’s property sale escalates into a conflict involving Terro.",
    "South Leonida Real Estate",
    "M7",
    [
      "terro",
      "mia-caminos",
      "lucia-caminos"
    ]
  ],
  "levi": [
    "Present in the backstage dressing room occupied by Real Dimez; no specific employment or family relationship is established.",
    "Top Billing",
    null,
    [
      "real-dimez"
    ]
  ],
  "celine": [
    "Hotel guest encountered in Chapter 4 during a disagreement with a bartender; later offers the player a drink.",
    null,
    null,
    []
  ],
  "paulo-jimenez": [
    "Security guard employed by Andrés de León who escorts Jason at the mansion and assists during the nightclub incident.",
    "Adventures in Babysitting",
    "Security guard",
    [
      "andres-de-leon",
      "jason-duval"
    ]
  ],
  "burim": [
    "Associate of Mattia who initially assists Lucia during Day Release, then becomes hostile in the later Key Lento events.",
    "Day Release",
    null,
    [
      "mattia-tauro",
      "alexi",
      "dardan",
      "lucia-caminos"
    ]
  ],
  "roscoe": [
    "Member of Tyrone Russo’s circle seen at the pickup location during the music storyline.",
    "Dealer’s Choice",
    null,
    [
      "tyrone-russo"
    ]
  ],
  "pooch": [
    "Attempts to film Real Dimez backstage before Dre’Quan intervenes.",
    "Top Billing",
    null,
    [
      "real-dimez",
      "drequan-priest"
    ]
  ],
  "monterossa": [
    "Also called Monty, leads a Pollia Negra hideout and becomes a target of Raul’s operation.",
    null,
    "Pollia Negra",
    [
      "raul-bautista",
      "andrea",
      "lucia-caminos"
    ]
  ],
  "elonzo": [
    "Initially presented as an acquaintance of Andrés, but becomes involved in the attack during the network event.",
    "Party Hard",
    null,
    [
      "andres-de-leon",
      "jason-duval"
    ]
  ],
  "andrew-from-chucks": [
    "Employee at Chuck’s gun shop who contacts Jason during preparations for Lucia’s return.",
    "Gear Up",
    "Gun-store employee",
    [
      "jason-duval"
    ]
  ],
  "ricky": [
    "Also called Ricardo; member of Billy’s Thrillbilly group who appears in the optional Chapter 2 storyline.",
    "Thrillbillies",
    "Thrillbilly crew",
    [
      "billy",
      "brittney",
      "ian"
    ]
  ],
  "little-sam": [
    "Self-credited performer who appears during the Chapter 3 meeting with Boobie Ike. A suggested real-world identity is not confirmed by the credit.",
    "Boobie Time",
    null,
    [
      "boobie-ike"
    ]
  ],
  "sir-todd-bancroft": [
    "Kenton’s rival in treasure recovery, later appearing with Cameron during the charter-business storyline.",
    "Island Dream",
    "Treasure hunter",
    [
      "kenton-rees",
      "cameron"
    ]
  ],
  "bones": [
    "Protects Terro and accompanies him during the real-estate encounter involving Mia and Lucia.",
    "South Leonida Real Estate",
    "Bodyguard / M7",
    [
      "terro",
      "mia-caminos"
    ]
  ],
  "sexyy-red": [
    "Appears as herself at the Real Dimez launch party as a VIP guest.",
    "Headliners",
    null,
    [
      "real-dimez",
      "drequan-priest"
    ]
  ],
  "briana": [
    "Assistant to Royce Jones during Dre’Quan’s booking negotiations, later receiving the recovered tapes.",
    "Watch It",
    "Promoter’s assistant",
    [
      "royce-jones",
      "drequan-priest"
    ]
  ],
  "emelda": [
    "Works in Andrés de León’s household and appears near the pool with Rafa.",
    "Adventures in Babysitting",
    "Household staff",
    [
      "andres-de-leon",
      "rafa-de-leon-navarro"
    ]
  ],
  "bailey-the-pillar": [
    "Mentors Andy in Cellerica and helps introduce Lucia to the organization.",
    "Climbing the Cellerichain",
    "Cellerica",
    [
      "andy",
      "lucia-caminos"
    ]
  ],
  "maleek-rivers": [
    "VIP guest at the Real Dimez launch event, credited to Tyreek Hill. The performer’s real-world profession is not attributed to this character.",
    "Headliners",
    null,
    [
      "real-dimez"
    ]
  ],
  "lavaughn": [
    "Associated with DWNPLY and appears during the rival performer’s disruption of the Real Dimez event.",
    "Headliners",
    null,
    [
      "dwnply",
      "real-dimez"
    ]
  ],
  "ian": [
    "Biker in Billy’s group who participates in the optional Chapter 2 robbery storyline.",
    "Twist Wrist, Smash, Grab",
    "Thrillbilly crew",
    [
      "billy",
      "ricky"
    ]
  ],
  "lorena-caminos": [
    "Lucia’s aunt and Tommy’s caregiver while Lucia is incarcerated. Later phone messages concern the child and Lucia’s financial assistance.",
    null,
    null,
    [
      "lucia-caminos",
      "tommy-tomas"
    ]
  ]
});
const researchedAppearances = {
  "marissa-tercio": "Also credited within the game’s television news cast; a particular news report or on-air job has not been established.",
  "mitico-mario": "Bad Bunny also performs the separately credited Cocoteo FM host El Martillo. Neither that role nor the Delights performer named Mario is established as Mitico Mario.",
  "zaria-ri-ri-luckett": "The Jack of Hearts Dancers collectible set includes cards under this name, including Silver and Gold variants.",
  "jimmy-de-santa": "Returning character from GTA V, with the same credited performer. His exact GTA VI scene and intervening life history remain undocumented here.",
  "monali-a": "The Jack of Hearts Dancers collectibles feature cards under this name in Bronze, Silver and Gold variants.",
  "kodak-black": "Credited as himself and separately as host of The Sniper of La Perle. GTA Base identifies an appearance in promotional imagery; a specific mission chronology is not established.",
  "priscilla-pace": "A Jack of Hearts collectible guide uses the spelling Pricilla Pace. The similar label may be a variant, but the identity match remains unresolved.",
  "jerry-turner": "The same character-performer pairing appears in the TV News section of the credits; a physical encounter is not established.",
  "lexy-campbell": "The Jack of Hearts card checklist uses Lexi Campbell. The spelling difference is retained rather than assuming a confirmed identity match."
};
const wikiAppearances = {
  "dante-fresh": "GTA6Wiki associates the rapper with the blackmail storyline in Watch It.",
  "danica-howard": "Identified by GTA6Wiki as a prosecutor encountered toward the end of the story.",
  "wax": "The cast listing also associates Wax with a guest role on the Drunk Kings podcast.",
  "bodega": "His performer, Bodega the DJ, has a separately credited music mix; this does not establish a specific story scene.",
  "dj-pretzel": "Listed as the presenter of The Vault Radio, in addition to his Full Cast credit.",
  "sasha": "Identified as a guest at Gil's pool party in Safe Word.",
  "samantha": "Identified as another guest at Gil's pool party during Safe Word.",
  "doug": "Possibly the man Brian speaks with near the Kingfishers camp in Swamped; the first-name match alone does not confirm the credited identity.",
  "parole-officer-walsh": "Possibly Lucia's supervising officer in Down to Earth; the walkthrough does not confirm the officer's name."
};
function attachResearch(item) {
  const ref = characterSourceIndex[item.id] || {};
  const bio = researchedBios[item.id];
  const wikiAppearance = wikiAppearances[item.id];
  const appearance = researchedAppearances[item.id] || wikiAppearance;
  const sources = [...(item.relatedSources || []), ...(wikiAppearance ? [{label:'GTA6Wiki — appearance context',url:'https://gta6wiki.eu/characters/all/'}] : []), ...(ref.ops ? [{label:'GTA6Ops — individual profile',url:ref.ops}] : []), ...(ref.powerpyx ? [{label:'PowerPyx — individual profile',url:ref.powerpyx}] : []), ...(ref.portrait && item.placeholderImage ? [{label:'PowerPyx — image reference',url:ref.portrait}] : [])].filter((s,i,a)=>a.findIndex(x=>x.url===s.url)===i);
  const portrait = item.placeholderImage && ref.portrait;
  const attrs = {...item.attributes};
  if(bio) {
    attrs.Evidence = 'Official cast credit; community biography';
    if(bio[1]) attrs['Documented mission'] = bio[1];
    if(bio[2]) attrs['Occupation / affiliation'] = bio[2];
  }
  if(appearance) attrs.Evidence = 'Official cast credit; documented or qualified appearance context';
  if(attrs.Evidence==='Official cast credit only' || appearance) attrs['Biography availability'] = 'Not verified in this atlas';
  attrs['Portrait availability'] = portrait ? 'Attributed external reference' : item.placeholderImage ? 'Not verified in this atlas' : 'Existing image';
  return {...item,attributes:attrs,relatedSources:sources,
    ...(bio?{description:bio[0],paragraphs:[],status:'Community reference',source:ref.ops||item.source,details:['Official cast credit; community biography'],relatedCharacterIds:[...new Set([...(item.relatedCharacterIds||[]),...bio[3]])]}:{}),
    ...(appearance?{status:'Community reference',source:ref.ops||item.source,paragraphs:[...(item.paragraphs||[]),appearance],details:['Official cast credit; appearance context distinguished from a biography']}:{}),
    ...(portrait?{image:portrait,placeholderImage:false,imageFallback:placeholder,imageSource:'PowerPyx',sharedPortrait:['jaylah','marv'].includes(item.id),imageSourceUrl:ref.powerpyx||ref.portrait}:{}),
  };
}

const additionalReviewed = [
  [
    "Alan",
    "alan",
    "A stranded driver in Key Lento seeking help to locate his wife Janet.",
    "https://gta6.university/db/characters/alan/"
  ],
  [
    "Antonia",
    "antonia",
    "An inmate encountered by Lucia in the Hamlet Correctional sleeping area.",
    "https://gta6.university/db/characters/antonia/"
  ],
  [
    "CO Wilson",
    "co-wilson",
    "Corrections officer who escorts Lucia to her counselor at Hamlet Correctional.",
    "https://gta6.university/db/characters/co-wilson/"
  ],
  [
    "Daniel Porter",
    "daniel-porter",
    "Fleeca branch manager whose name appears on office correspondence.",
    "https://gta6.university/db/characters/daniel-porter/"
  ],
  [
    "Dobbs",
    "dobbs",
    "A member of a bachelor party encountered in a shipwreck.",
    "https://gta6.university/db/characters/dobbs/"
  ],
  [
    "Janet",
    "janet",
    "Alan’s missing wife, whom he asks the player to help find.",
    "https://gta6.university/db/characters/janet/"
  ],
  [
    "Zoey",
    "zoey",
    "An inmate in Lucia’s cell block who talks about her legal representation.",
    "https://gta6.university/db/characters/zoey/"
  ],
  [
    "Rita",
    "rita",
    "A psychic in Grayson who offers readings to the protagonists.",
    "https://www.gtabase.com/gta-6/characters/rita",
    "https://www.gtabase.com/images/gta-6/characters/rita.png"
  ]
].map(([title,id,description,source,portrait])=>({...encounter([title,id,description]),source,relatedSources:[{label:'Individual community profile',url:source}],...(portrait?{image:portrait,placeholderImage:false,imageFallback:placeholder,imageSource:'GTABase',imageSourceUrl:source}:{})}));
function applyCoverage(item) {
  const review = characterCoverage[item.id] || {};
  const bio = review.bio;
  const portrait = item.placeholderImage ? review.portrait : null;
  const sources = [...(item.relatedSources||[]),...(review.sources||[]),...(portrait?[{label:portrait.source+' — image reference',url:portrait.page}]:[])].filter((s,i,a)=>a.findIndex(x=>x.url===s.url)===i);
  const attributes = {...item.attributes};
  if(bio) {
    attributes.Evidence=review.qualified?'Official cast credit; possible appearance (unconfirmed)':'Official cast credit; limited community context';
    attributes['Biography availability']=review.qualified?'Not verified in this atlas':'Partial context only';
    if(bio.mission)attributes['Documented mission']=bio.mission;
    if(bio.occupation)attributes['Occupation / affiliation']=bio.occupation;
  }
  attributes['Portrait availability']=portrait||item.imageSource?'Attributed external reference':item.placeholderImage?'Not verified in this atlas':'Existing image';
  return {...item,attributes,relatedSources:[...sources,...(bio&& !sources.some(s=>s.url===bio.source)?[{label:'Community context source',url:bio.source}]:[])],
    ...(bio?{description:bio.description,source:bio.source,status:'Community reference',details:[review.qualified?'Possible appearance only; identity match unconfirmed':'Official cast credit; limited context, not a full biography'],relatedCharacterIds:[...new Set([...(item.relatedCharacterIds||[]),...bio.relations])]}:{}),
    ...(portrait?{image:portrait.url,placeholderImage:false,imageFallback:placeholder,imageSource:portrait.source,imageSourceUrl:portrait.page}:{}),
  };
}
const mediaPrograms = item => mediaCast.filter(row=>row.existingId===item.id);
function mergeMediaCredits(item) {
  const appearances = mediaPrograms(item);
  if(!appearances.length)return item;
  return {...item,mediaCategories:[...new Set(appearances.map(x=>x.category))],
    attributes:{...item.attributes,'Media credits':appearances.map(x=>x.program+' — '+x.role+' ('+x.performer+')').join('; ')},
    relatedSources:[...(item.relatedSources||[]),{label:'Rockstar Games — official media cast',url:credits},...appearances.filter(x=>x.profileUrl).map(x=>({label:'GTA6Ops — '+x.program+' / '+x.role,url:x.profileUrl}))].filter((s,i,a)=>a.findIndex(x=>x.url===s.url)===i)};
}
function mediaRecord(row) {
  const title = ['Himself','Herself','Presenter'].includes(row.role)?row.performer:row.role;
  const portrait=row.portrait;
  return {id:row.id,title,kind:'Character',category:row.category,mediaCategories:[row.category],subtitle:row.program,tag:row.category.toUpperCase(),image:portrait?.url||placeholder,placeholderImage:!portrait,...(portrait?{imageSource:portrait.source,imageSourceUrl:portrait.page,imageFallback:placeholder}:{}),source:credits,status:'Official source',spoiler:false,
    description:row.performer+' is credited for '+row.role+' in '+row.program+', in the '+row.category.toLowerCase()+' cast. This credit establishes the role and programme, not an independent story biography. A shared performer or separate role label does not establish a separate person.',
    attributes:{Role:row.role,'Original credit':row.creditedRole||row.role,'Credited performer':row.performer,'Programme':row.program,'Media category':row.category,Evidence:'Official media cast credit','Biography availability':'Not verified in this atlas','Portrait availability':portrait?'Attributed external reference':'Not verified in this atlas'},
    relatedSources:[{label:'Rockstar Games — official cast credits',url:credits},...(row.profileUrl?[{label:'GTA6Ops — individual credit profile',url:row.profileUrl}]:[]),...(portrait?[{label:'GTA6DATA — image reference',url:portrait.page}]:[])],verifiedOn:'2026-11-27'};
}
function applyEvidence(item) {
  const evidence=characterEvidence[item.id];
  if(!evidence)return item;
  const attributes=evidence.creditOnly?{...item.attributes}:{...item.attributes,'Biography availability':evidence.qualified?'Not verified in this atlas':'Documented partial context','Evidence':evidence.qualified?'Official cast credit; possible appearance (unconfirmed)':item.attributes['Credit section']||item.id.startsWith('media-')?'Official cast credit; community gameplay context':'Community gameplay context'};
  if(evidence.mission&&!evidence.qualified)attributes['Documented mission']=evidence.mission;
  if(evidence.portrait)attributes['Portrait availability']='Attributed image reference';
  if(evidence.contextImage)attributes['Contextual image availability']=evidence.creditOnly?'Station artwork; not a portrait':'Documented scene; not an isolated portrait';
  return {...item,...(evidence.creditOnly?{}:{description:evidence.description,status:'Community reference'}),spoiler:item.spoiler||!!evidence.spoiler,attributes,
    ...(evidence.relations?{relatedCharacterIds:[...new Set([...(item.relatedCharacterIds||[]),...evidence.relations])]}:{}),
    ...(evidence.portrait?{image:evidence.portrait.url,imageSource:evidence.portrait.source,imageSourceUrl:evidence.portrait.page,imageFallback:placeholder,placeholderImage:false}:{}),
    ...(evidence.contextImage?{contextImage:evidence.contextImage,contextCaption:evidence.contextCaption,contextImageSource:evidence.contextImageSource||evidence.source}:{}),
    relatedSources:[...(item.relatedSources||[]),{label:evidence.creditOnly?'Individual media credit':'Gameplay and biography evidence',url:evidence.source},...(evidence.contextImageSource?[{label:'Contextual artwork source',url:evidence.contextImageSource}]:[]),...(evidence.portrait?[{label:'Character image source',url:evidence.portrait.page}]:[])].filter((s,i,a)=>a.findIndex(x=>x.url===s.url)===i)};
}
export const characterRecords = [
  ...main.map(row=>enrichCharacter(record(row,'Main Cast'))),
  ...full.map(row=>enrichCharacter(record(row,'Full Cast'))),
  ...additionalEncounters.map(encounter),
  ...additionalReviewed,
  ...characterDiscoveries.map(([title,id,description,source,portrait,relations,mission,role='Named gameplay appearance'])=>({...encounter([title,id,description]),source,relatedSources:[{label:'Community gameplay profile — '+new URL(source).hostname,url:source}],relatedCharacterIds:relations,attributes:{Role:role,'Credited performer':'Not verified in this atlas',Evidence:'Community gameplay or appearance reference',...(mission?{'Documented mission':mission}:{}),'Biography availability':'Partial context only'},...(portrait?{image:portrait,placeholderImage:false,imageFallback:placeholder,imageSource:new URL(source).hostname.includes('gta6data.com')?'GTA6DATA':new URL(source).hostname,imageSourceUrl:source}:{})})),
  {id:'real-dimez',title:'Real Dimez',kind:'Character',category:'Music duo',subtitle:'Bae-Luxe and Roxy Rashad',tag:'MUSIC DUO',
   image:'/images/real_dimez_01.webp',source:profiles,status:'Official source',spoiler:true,
   description:'Rap duo formed by Bae-Luxe and Roxy, signed to Only Raw Records. Their early collaboration with DWNPLY helped establish their career.',
   attributes:{Role:'Music duo',Members:'Bae-Luxe; Roxy Rashad',Label:'Only Raw Records',Evidence:'Official group profile'},
   relatedSources:[{label:'Rockstar Games — cast credits',url:credits},{label:'GTABase — character guide',url:gtabase}],verifiedOn:'2026-11-27'},
].map(attachResearch).map(applyCoverage).map(mergeMediaCredits).concat(mediaCast.filter(row=>row.id).map(mediaRecord)).map(applyEvidence).map(applyProfileResearch).map(applySceneResearch).map(completeCharacterDossier).map(item=>{
  const attributes={...item.attributes,'Biography availability':item.attributes['Biography availability']||'Documented summary; complete life history not established','Portrait availability':item.placeholderImage?'Not verified in this atlas':item.attributes['Portrait availability']||'Attributed image reference'};
  const known=Object.values(attributes).filter(value=>!/^not verified/i.test(String(value))).length;
  return {...item,attributes:{...attributes,'Dossier completeness':`${known} / ${Object.keys(attributes).length} character fields documented`},paragraphs:item.paragraphs?.length?item.paragraphs:['This dossier records the credited role and the available sourced context. No additional biography is inferred where the published sources do not provide one.'],details:item.details?.length?item.details:['Character dossier','Source context checked'],imageFallback:item.imageFallback||placeholder,relatedSources:item.relatedSources||[{label:'Rockstar Games — official cast credits',url:credits}],verifiedOn:item.verifiedOn||'2026-11-27'};
});
