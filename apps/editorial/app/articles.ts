import type { ArticleRecord } from "./types";

export const articles: ArticleRecord[] = [
  {
    slug: "the-hour-before-opening",
    title: "The hour before the reading room opens",
    standfirst:
      "On Binder Street a volunteer set turns a former ticket office into a public table. The work happens before the first reader arrives.",
    topic: "places",
    authorId: "mira-ellison",
    publishedOn: "2 September 2026",
    leadImageId: "edt-st01",
    leadAlt:
      "Empty chairs and shelves in a neighborhood reading room shortly before opening",
    leadCaption:
      "The Binder Street room at 07:40. Illustration for this fictional journal, not a photograph of a real place.",
    relatedSlugs: ["three-windows-cinder-lane", "night-librarian"],
    isLead: true,
    selectedOnHome: "lead",
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "The key sticks. Lena Cho, who keeps the morning set, learned to lift the door a centimetre before turning it. Inside, the room still holds last night’s air: paper, lemon soap, and the faint metal of the radiator that never quite cools. She props the door with a brick wrapped in cloth so it will not slam when the first regular arrives. The brick used to be a doorstop in the ticket office that occupied this shell. Someone painted a timetable on the plaster and never fully sanded it away. You can still read the 18:12 to Harbour if you stand in the right light.",
      },
      {
        type: "heading",
        id: "a-room-that-used-to-sell-tickets",
        title: "A room that used to sell tickets",
      },
      {
        type: "paragraph",
        id: "ticket-office",
        text: "Common Hours invented Binder Street. In this issue it stands for any small civic room that survived by changing jobs. The ticket window is now a returns desk. The bench where people once waited for a delayed train is the only place two strangers can sit without facing a screen. Lena does not call it a library. The council already has one, six streets over, with a security gate and a printer that jams. This room has no gate. It has a kettle, a donations tin that is emptied every Sunday, and a rule written on a card: stay as long as you are reading, writing, or waiting for someone who is.",
      },
      {
        type: "paragraph",
        id: "opening-sequence",
        text: "Opening is a sequence, not a mood. Lights, then blinds, then the table wiped toward the door so crumbs travel out instead of into the shelves. The newspapers are not newspapers. They are printouts of public notices that Lena collects from the community board: a lost cat, a choir rehearsal, a note about the market hall soup. She clips them to a string with wooden pegs. Readers treat the string as seriously as the books. People come for the notices and stay for the table.",
      },
      {
        type: "image",
        id: "detail-shelf",
        imageId: "edt-detail01",
        alt: "A close view of a wooden shelf edge and a cloth-wrapped brick used as a doorstop",
        caption:
          "The cloth-wrapped brick that holds the door. A demo illustration, not documentary evidence.",
      },
      {
        type: "heading",
        id: "what-the-hour-is-for",
        title: "What the hour is for",
      },
      {
        type: "paragraph",
        id: "hour-purpose",
        text: "The hour before opening is not decoration. It is when the room decides what kind of public it will be that day. If the table is left from yesterday’s meeting, the first reader will sit at the edge and feel like a guest. If the chairs face the window, people talk. If they face the wall, they do not. Lena tried both for a month and kept a tally on the inside of a cupboard. Talk won on Tuesdays, silence on Thursdays. She now rotates the chairs without announcing a policy. Regulars notice anyway. One man asked if the room had joined a religion. She told him it had joined the weather.",
      },
      {
        type: "paragraph",
        id: "volunteers",
        text: "There are four morning volunteers. None of them is paid. Two teach nearby. One prints posters for shops that still want paper. Lena used to manage a cinema box office until the chain closed the last two-screen house on the ring road. She keeps the same opening voice: not cheerful, not grim, just clear enough that a stranger knows the rules without being lectured. She will tell you where the toilets are before you ask. She will not tell you what to read.",
      },
      {
        type: "heading",
        id: "a-public-that-fits-in-a-ticket-office",
        title: "A public that fits in a ticket office",
      },
      {
        type: "paragraph",
        id: "scale",
        text: "Twenty-two chairs is the limit. More than that and the kettle queue crosses the returns desk. Lena does not expand. Expansion, in her telling, is how a room becomes a service and then a complaint form. The point of Binder Street is that you can see every person from the door. If someone needs a quieter corner, they take the window seat and the rest of the room understands without a sign. If a group arrives with a projector, she sends them to the market hall. The reading room is not a venue. It is a table with witnesses.",
      },
      {
        type: "paragraph",
        id: "sound",
        text: "Sound is the other inventory. The kettle clicks twice before it boils. The radiator ticks in a rhythm Lena uses as a timer for wiping the far table. A bus outside takes the corner too fast and the window answers. She does not play music. A room that must hold readers cannot also hold a host’s taste. If someone arrives with headphones, that is their affair. If someone arrives with a speaker, they are asked to keep it in a bag. The rule is written on the same card as the stay-as-long sentence, in smaller type, because it is the rule people test.",
      },
      {
        type: "paragraph",
        id: "close",
        text: "At eight the first reader is usually the same woman with a folded transit map used as a bookmark. She nods at the brick, which is her way of saying the door is right. Lena writes the date on a slip and puts it in a tin, not because anyone audits the hours, but because the tin is how the volunteers prove to themselves that the room happened. Common Hours is a fictional journal, and Binder Street is a fictional street, but the argument is ordinary: a public room is made in the hour before it claims to be open. The rest of the day is only evidence.",
      },
    ],
  },
  {
    slug: "bench-on-the-towpath",
    title: "A bench that keeps the towpath",
    standfirst:
      "A rebuilt riverside bench is used as a timetable, a lunch table, and a place to wait without buying anything.",
    topic: "places",
    authorId: "mira-ellison",
    publishedOn: "4 September 2026",
    leadImageId: "edt-st02",
    leadAlt:
      "A wooden bench beside a river path with bicycle marks in the packed ground",
    leadCaption:
      "The rebuilt bench on the invented Fen Reach towpath. Demo illustration only.",
    relatedSlugs: ["the-hour-before-opening", "the-last-light-walk"],
    isLead: false,
    selectedOnHome: "more",
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "The old bench split in the freeze. Someone dragged the halves down to the waterline and left them as if the river might take a vote. In spring a joiner from the yard behind the dye works rebuilt it from a single plank that had been a warehouse shelf. He kept the iron legs. He did not add an inscription. The only mark is a dark oval where flasks sit every weekday at noon.",
      },
      {
        type: "heading",
        id: "who-uses-a-bench-without-a-plaque",
        title: "Who uses a bench without a plaque",
      },
      {
        type: "paragraph",
        id: "users",
        text: "A towpath bench is not a monument. It is a piece of street furniture that has to survive bikes, wet dogs, and people who eat standing up because sitting feels like a claim. The joiner, who asked to be called only Hari in this fictional account, watched for a week before he cut the plank. He wanted the seat high enough that older knees could rise, and low enough that a child could plant both feet. He measured with a folding rule and a neighbour who agreed to sit still.",
      },
      {
        type: "paragraph",
        id: "lunch",
        text: "At lunch the bench becomes a timetable. Warehouse staff arrive first, then the walking group that starts at the lock, then two students who treat the river as a corridor between lectures they are not attending. Nobody books it. If the plank is wet, people stand behind it and talk over the backrest, which is how you know the bench is still doing civic work: it organises bodies even when it cannot hold them.",
      },
      {
        type: "heading",
        id: "keeping-is-a-job",
        title: "Keeping is a job",
      },
      {
        type: "paragraph",
        id: "keeping",
        text: "Keeping, here, means sanding the grain when it raises, sweeping glass, and telling the council that a bin five metres away would stop the foxes. Hari does the sanding. A woman who runs the bait shop does the glass. The bin has not arrived. The foxes have. The bench remains because enough people treat it as theirs without needing their names on it. That is the whole story, and it is enough.",
      },
      {
        type: "paragraph",
        id: "evening",
        text: "In the evening the last-light walk uses the bench as a checkpoint even when nobody sits. Walkers tap the iron as they pass, the way some people tap a lock rail. Hari pretends not to like this and has started leaving the grain a little less polished at the end of the plank, a texture that reads as welcome. A bench that keeps a towpath is not a sculpture. It is a piece of wood that still has a job after the joiner goes home.",
      },
    ],
  },
  {
    slug: "three-windows-cinder-lane",
    title: "Three windows on Cinder Lane",
    standfirst:
      "A terrace with mismatched glass shows how a street keeps time when the shops below change faster than the rooms above.",
    topic: "places",
    authorId: "mira-ellison",
    publishedOn: "6 September 2026",
    leadImageId: "edt-st03",
    leadAlt:
      "Three stacked windows on a narrow street facade with different curtains",
    leadCaption:
      "Cinder Lane as imagined for this issue. Not a record of an address.",
    relatedSlugs: ["the-hour-before-opening", "keys-left-on-the-counter"],
    isLead: false,
    selectedOnHome: false,
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "Cinder Lane is one block long in this telling. Ground floors have been a baker, a locksmith, a phone repair stall, and a shop that sold nothing but packing tape. The three windows above have outlasted all of them. The first is a sash that sticks. The second is a modern pane that still has the fitter’s sticker in a corner. The third is frosted because someone wanted a bathroom to face the street and then regretted the privacy math.",
      },
      {
        type: "heading",
        id: "the-street-as-a-clock",
        title: "The street as a clock",
      },
      {
        type: "paragraph",
        id: "clock",
        text: "If you stand at the corner at 07:10, the sash goes up a hand’s width and a kettle steam appears. At 08:00 the stickered pane stays shut and a lamp clicks on, which means the night shift is home. The frosted window tells you less, which is the point of frosting. Together they keep a better clock than the bus display, which froze on 14:00 last winter and was never repaired.",
      },
      {
        type: "paragraph",
        id: "shops",
        text: "The packing-tape shop lasted nine months. People still mention it because it was honest about what the street needed: boxes, not another coffee. The locksmith lasted longer. He knew every window’s temperament. He told me, in this invented interview, that glass fails in the order of how often a room is opened in anger. I wrote that down because it sounded like a theory of cities and then like a joke. Both can be true on a lane this short. He also said a sash that sticks is a better lock than a stickered pane, which is why the first window still belongs to someone who wakes early.",
      },
      {
        type: "heading",
        id: "looking-without-taking",
        title: "Looking without taking",
      },
      {
        type: "paragraph",
        id: "looking",
        text: "Editorial looking is a risk. A window is not consent. This piece stays on the glass and the timetable of light. No names of residents, no interior inventories, no claim that Cinder Lane exists beyond this sample. What remains is a method: if you want to understand a street, count how the openings behave when nobody is performing for a camera.",
      },
      {
        type: "paragraph",
        id: "ground",
        text: "At street level the packing-tape years left a hook in the fascia where a hanging sign used to swing. Nothing hangs there now. The hook is still useful as a landmark: meet me under the empty hook. A city that keeps its unused hardware is easier to narrate than one that replaces every surface with the same panel. Cinder Lane, as we wrote it, keeps the hook.",
      },
    ],
  },
  {
    slug: "the-last-compositor",
    title: "The last compositor on Binder Street",
    standfirst:
      "Jonah Voss spends a day with a printer who still sets type by hand for shop cards, funeral notices, and one stubborn literary magazine.",
    topic: "people",
    authorId: "jonah-voss",
    publishedOn: "3 September 2026",
    leadImageId: "edt-st04",
    leadAlt: "Wooden type cases and a hand press in a small print workshop",
    leadCaption:
      "The workshop as illustrated for this fictional profile. Not a real print shop.",
    relatedSlugs: ["choir-after-the-shutters", "the-hour-before-opening"],
    isLead: true,
    selectedOnHome: "secondary",
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "Nia Pell keeps her hair clipped back with a bulldog clip from the paper drawer. She will not be photographed with ink on her hands as if ink were a personality. Ink is a material. It goes on the disk, then the rollers, then the type, then the card, then the drying rack, then sometimes the cuff. She wipes the cuff without commentary. The workshop is a ground-floor room behind a shutter that still says KEYS CUT from a previous tenant. She left the ghost sign. People find her by it.",
      },
      {
        type: "heading",
        id: "what-she-will-print",
        title: "What she will print",
      },
      {
        type: "paragraph",
        id: "jobs",
        text: "She prints what still needs to be held. Shop cards that must survive a pocket. Funeral notices that a family wants to hand over rather than text. A quarterly pamphlet for a poetry group that refuses a website on principle and also because none of them wants to be the administrator. She will not print wedding stationery with fake crests. She will not print political leaflets that pretend to be neighbourhood news. She has a typed list of refusals on the wall, which saves argument and makes the room feel like a newsroom that chose a smaller beat.",
      },
      {
        type: "paragraph",
        id: "speed",
        text: "Hand setting is slow in the way cooking from a whole bird is slow. You cannot hide a missing letter. You cannot undo a crooked line without distributing the type and starting again. Nia likes that the mistake is physical. Digital work, she says, hides the cost in a menu. Here the cost is time you can point at. A regular who runs the bait shop waits while she finds a spare ampersand. He does not check a phone. The waiting is part of the job he bought.",
      },
      {
        type: "image",
        id: "type-case",
        imageId: "edt-detail02",
        alt: "A shallow wooden case of metal letters beside a composing stick",
        caption:
          "A case of type in the invented workshop. Caption names an illustration, not an archive object.",
      },
      {
        type: "heading",
        id: "the-magazine-that-refuses-to-die",
        title: "The magazine that refuses to die",
      },
      {
        type: "paragraph",
        id: "magazine",
        text: "The literary magazine is called Harbour Thread in this fiction. It has eighty subscribers and an editor who pays in cash and apples. Nia prints two hundred copies because the editor still believes in leaving piles in places that are not bookshops: the reading room, the night desk at the civic library, the stool by the soup pot. The poems are uneven. The object is not. Thick paper, a sewn spine, a cover that does not try to look like a lifestyle brand. When I asked why she subsidises it with shop-card profits, she said the street should have one thing that is not trying to sell the street back to itself.",
      },
      {
        type: "paragraph",
        id: "apprentice",
        text: "There is no apprentice. Young printers she meets at a night class want Risograph and a studio with a sofa. She does not blame them. A hand press is a body job. Shoulders, wrists, the decision to stop before the impression crushes the type. She is fifty-two in this profile and has already taught herself to switch the heavy lifting to a rolling table. The last compositor is not a eulogy. It is a job description that got narrower until it became visible again. On Fridays she prints the reading-room notices for Lena, who pays in coins from the donations tin and a jar of lemon soap. Nia accepts both. Soap is useful. Coin is honest.",
      },
      {
        type: "paragraph",
        id: "proof",
        text: "Proofing happens on cheap offcuts. She reads backwards, which still catches a missing letter faster than a screen. I tried it and missed three. She did not make a lesson of it. She just reset the line. The humility of the craft is not mystical. It is the knowledge that the card will be in someone’s pocket tomorrow, and a crooked shop name is a kind of disrespect. When the impression is right, she does not smile for an audience. She stacks.",
      },
      {
        type: "heading",
        id: "ink-as-ordinary-work",
        title: "Ink as ordinary work",
      },
      {
        type: "paragraph",
        id: "body",
        text: "Watching her distribute type is like watching someone pack a bag they have packed for twenty years. The hand knows the compartments. The eye still checks. She talks while she works if you have earned the talk by not reaching for the case. I asked whether the last compositor title bothered her. She said last is a journalist’s word. There is a night class. There is a person who emails from another city about buying the press. Last is a mood. The job is today’s cards.",
      },
      {
        type: "paragraph",
        id: "ordinary",
        text: "By four the drying rack is full of bait-shop hours and a stack of notices for Tuesday soup. Nia washes rollers in a tray that used to be a photographic bath. The water goes grey, then she changes it, then she locks the shutter that still says KEYS CUT. If you only saw the sign you would think the street had failed to update. If you saw the rack you would know it had simply kept a craft that still has customers. Common Hours is not arguing for a revival. It is recording a person who already stayed.",
      },
    ],
  },
  {
    slug: "choir-after-the-shutters",
    title: "A choir that meets after the shutters",
    standfirst:
      "Once a week a hardware shop becomes a rehearsal room. The stock stays. The voices move around it.",
    topic: "people",
    authorId: "jonah-voss",
    publishedOn: "8 September 2026",
    leadImageId: "edt-st05",
    leadAlt: "People standing between hardware aisles in a shop after closing",
    leadCaption:
      "Rehearsal as imagined in a closed hardware shop. Fictional scene, demo image.",
    relatedSlugs: ["the-last-compositor", "tuesday-soup-at-the-market-hall"],
    isLead: false,
    selectedOnHome: "more",
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "The choir is not a brand. It does not have matching scarves. It has twelve people, a pitch pipe, and permission to stay after Tomas shutters the hardware shop on Wednesdays. Paint tins become percussion only once, and then never again, because the lids were not designed for art. Now they sing between aisles of hinges. The acoustics are surprisingly kind. Metal softens a room if there is enough of it.",
      },
      {
        type: "heading",
        id: "why-a-shop",
        title: "Why a shop",
      },
      {
        type: "paragraph",
        id: "why",
        text: "Church halls want insurance forms. Community centres want a deposit. Tomas wants the building to earn its heat after 18:00. He stays to count stock and pretends not to conduct with a pencil. The soprano section stands by the rope. Basses take the back wall near the nails, which has become a joke they are tired of and also will not retire. A tenor brings a thermos and pours for anyone who arrives from a late shift.",
      },
      {
        type: "paragraph",
        id: "repertoire",
        text: "They sing what the group can carry without a pianist: hymns someone still knows, a sea song that is really a work song, and a new piece written by a member who drives night buses. The night-bus piece has a rest where the driver used to wait at a terminus. People who have never driven a bus still feel the rest. That is the closest the choir comes to a manifesto. If a member misses three weeks, nobody sends a reminder. They leave a gap in the aisle. The gap is how the group remembers.",
      },
      {
        type: "heading",
        id: "after-the-last-note",
        title: "After the last note",
      },
      {
        type: "paragraph",
        id: "after",
        text: "They stack no chairs because the chairs are for customers. They leave the shop as a shop. On the street the shutters look like an ending. Inside, for ninety minutes, they were a room that could hold a chord. Tomas locks up and puts the pitch pipe in the drawer with the spare blades. Nobody films it. This account is the only record, and it is invented on purpose.",
      },
      {
        type: "paragraph",
        id: "outside",
        text: "Outside, a neighbour who does not sing still times her dishwashing to the rehearsal because the muffled chords mean the street is not finished with the day. That is a kind of membership too, unpaid and unlisted. The choir would be embarrassed by the sentence. They are not a soundtrack. They are twelve people who found a room that would have them after the shutters.",
      },
    ],
  },
  {
    slug: "night-librarian",
    title: "The night librarian",
    standfirst:
      "After nine the civic library is a different workplace. Samir Cole keeps the desk for readers who cannot come in daylight.",
    topic: "people",
    authorId: "jonah-voss",
    publishedOn: "9 September 2026",
    leadImageId: "edt-st06",
    leadAlt:
      "A library service desk at night with a single lamp and empty chairs",
    leadCaption:
      "A night desk imagined for this profile. Not an image of a municipal library.",
    relatedSlugs: ["the-hour-before-opening", "the-last-compositor"],
    isLead: false,
    selectedOnHome: false,
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "Samir Cole’s shift starts when the children’s boards have been stacked and the automatic doors have been set to one-way. The civic library in this story keeps Thursday nights open until eleven because a councillor once spent a year on rotating shifts and remembered the problem. Funding is always about to end. The night still happens. Samir prints the hold slips himself because the daytime queue is too long to leave them overnight.",
      },
      {
        type: "heading",
        id: "who-comes-after-nine",
        title: "Who comes after nine",
      },
      {
        type: "paragraph",
        id: "after-nine",
        text: "Cleaners from the hospital. Kitchen staff whose last sitting ends at ten. A teenager who uses the catalogue as a quiet place to sit with a parent who works the late pharmacy. Samir does not ask why you are here at 21:40. He asks whether you found the item. If you did not, he walks the stacks. The night is not romantic. The carpet is the same carpet. The difference is that nobody is performing busyness. The printers hum because they always hum. He has stopped hearing them except when they stop.",
      },
      {
        type: "paragraph",
        id: "rules",
        text: "Food stays outside. Sleeping is allowed only if you remain in a chair and can be woken for closing. Samir has woken people kindly and also firmly. He keeps a written log of incidents because memory is a bad witness at 22:00. Most nights the log is empty. Empty is the goal. When it is not empty, the note is factual: time, what happened, who was told. He does not write novels in the margin.",
      },
      {
        type: "heading",
        id: "a-desk-is-not-a-vocation-poster",
        title: "A desk is not a vocation poster",
      },
      {
        type: "paragraph",
        id: "desk",
        text: "Profiles like this one tend to turn night workers into symbols. Samir asked that we not. He is a librarian. He checks in books, resets passwords, and knows which radiator bangs. When the branch loses late hours, he will apply for days. Until then he keeps a public desk for people whose daylight is already sold. That is the job, stated without glow.",
      },
      {
        type: "paragraph",
        id: "holds",
        text: "The hold shelf at 22:30 looks like a still life: a plumbing manual, two novels, a language workbook with a cracked spine. Samir aligns them so names show. Alignment is not fussiness. It is how a tired reader finds a reservation without a performance of gratitude. He will tell you the printer is out of toner before you ask. He will not tell you what he is reading.",
      },
    ],
  },
  {
    slug: "tuesday-soup-at-the-market-hall",
    title: "Tuesday soup at the market hall",
    standfirst:
      "A weekly pot in a civic market is not a restaurant. It is a ritual with a ladle, a list, and a closing time that does not move.",
    topic: "rituals",
    authorId: "adele-park",
    publishedOn: "1 September 2026",
    leadImageId: "edt-st07",
    leadAlt: "A large pot and stacked bowls at the edge of a market hall aisle",
    leadCaption:
      "Tuesday soup as staged for this fictional issue. Not a photograph of a charity kitchen.",
    relatedSlugs: ["keys-left-on-the-counter", "choir-after-the-shutters"],
    isLead: true,
    selectedOnHome: "secondary",
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "The pot goes on at nine. Ruth Meng will not start later because later means the bones do not give and the hall fills with people who think soup is a pop-up. It is not a pop-up. It is a Tuesday. Traders know to leave a clear metre at the east end of aisle two. The metre is marked with tape that has been replaced so many times it has become a colour rather than a line. Bowls live in a crate that used to hold oranges. The ladle is the only object anyone is precious about. It has a bent lip that pours without dripping on the table ledger.",
      },
      {
        type: "heading",
        id: "how-a-ritual-avoids-becoming-a-brand",
        title: "How a ritual avoids becoming a brand",
      },
      {
        type: "paragraph",
        id: "brand",
        text: "There is no logo. There was a hand-painted sign for one winter and then it felt like advertising, so Ruth took it down. Information lives on the notice string at the reading room and on a card taped to the hall door: Tuesday, noon to two, two pounds or what you have, no second bowl until the line has gone through once. The prices in this sample are illustrative. Nobody is invoiced. The tin is counted in front of whoever is still wiping tables. Transparency, here, is a physical act.",
      },
      {
        type: "paragraph",
        id: "pot",
        text: "The pot itself is a borrowed catering pan from the school across the service road. The school wants it back every Thursday for a meal that is not our subject. Ruth’s stock is onions, barley when she can get it, and whatever the stallholders would otherwise throw: carrot shoulders, herb stems, a ham bone from the butcher who still closes for lunch. She can cook without meat. Tuesdays after a holiday weekend are often beans. People complain in the way families complain, which is to say they still eat. Salt is the only argument she will have in public. Too little and the line tells her. Too much and the line tells her. She tastes from a cup, not from the ladle, because the ladle is for serving and she will not make a theatre of the cook.",
      },
      {
        type: "image",
        id: "ladle",
        imageId: "edt-detail03",
        alt: "A metal ladle resting on a wooden crate beside stacked enamel bowls",
        caption:
          "The bent-lip ladle. An illustration for the story, not an artefact with a museum credit.",
      },
      {
        type: "heading",
        id: "the-line-is-the-room",
        title: "The line is the room",
      },
      {
        type: "paragraph",
        id: "line",
        text: "By 11:40 the line is the architecture. It bends around a flower stall that smells of wet paper and around a man who sells batteries from a suitcase. Regulars leave a gap for the battery man because he was there first. Newcomers have to be taught the gap with a look. Ruth does not speechify. She serves. If someone is unsteady, a volunteer walks the bowl to the bench along the cold wall. The bench is not comfortable. It is enough. Comfort, she says, is how a ritual starts charging extra for the feeling of being good. A child who wants to help is given spoons to dry, not a speech about charity. The spoons go back in the crate. The child learns the weight of the work without being turned into a mascot.",
      },
      {
        type: "paragraph",
        id: "weather",
        text: "Weather changes the line more than publicity ever could. Rain brings people earlier. Heat thins it and then concentrates it at half past twelve, when the hall is shade. Ruth keeps the same two-hour window anyway. Extending would teach the district that persistence is a way to extract more. She would rather be found reliable than abundant. Traders who finish early sometimes eat standing, then go back to packing. The soup is not their break in a brochure sense. It is food that happens to be in the building they already pay rent to stand in.",
      },
      {
        type: "paragraph",
        id: "names",
        text: "Names are handled carefully. Ruth knows many of them and writes none on a public board. A first name is enough for the ladle. If a person wants to be unknown, they can be unknown. The ledger on the table is a tally of bowls, not identities. Journalists who want a tearful origin story are sent to wipe tables. The origin is that people were hungry on Tuesdays and a hall already had a tap.",
      },
      {
        type: "paragraph",
        id: "close",
        text: "At two the ladle goes into a jug of water and the tape metre becomes an aisle again. Leftover soup is portioned into the orange crate’s remaining tubs and walked to the night library desk and to Lena at Binder Street. Nothing is posted as a success metric. The measure is whether the pot emptied without anyone being hurried off the bench. Adele Park, who wrote this, stood in the line twice and served once. Serving is slower than reporting. That is why the piece is a ritual story rather than a food review. There is nothing to rate. There is a Tuesday that keeps arriving, whether or not a journal is watching.",
      },
    ],
  },
  {
    slug: "the-last-light-walk",
    title: "The last light walk",
    standfirst:
      "A neighbourhood group walks the same loop at dusk until the clocks change, then argues, then starts again from the lock.",
    topic: "rituals",
    authorId: "adele-park",
    publishedOn: "10 September 2026",
    leadImageId: "edt-st08",
    leadAlt: "A path at dusk with long shadows and a group of walkers ahead",
    leadCaption:
      "Dusk on the invented Fen Reach loop. Demo illustration for the walk.",
    relatedSlugs: ["bench-on-the-towpath", "tuesday-soup-at-the-market-hall"],
    isLead: false,
    selectedOnHome: "more",
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "They meet at the lock because the lock has a rail you can lean on while you wait. No app. A time: 19:10, or 18:10 after the clocks go back, which is when the arguments begin. Some people want to keep 19:10 in the dark. Some want to see their feet. The compromise is a head torch in a shared bag and a rule that the walk still happens in rain but not in ice.",
      },
      {
        type: "heading",
        id: "a-loop-is-a-promise",
        title: "A loop is a promise",
      },
      {
        type: "paragraph",
        id: "loop",
        text: "The loop is forty minutes if nobody stops, fifty if someone names a bird incorrectly and has to be corrected with kindness. They pass Hari’s bench, the back of the dye works, and the service road where the soup pan travels on Thursdays. Walking the same ground is how the group notices change: a new fence, a missing cat poster, a light that has died over the cut. They do not file reports. They mention things in the chat that exists only because one member insisted. Half the members refuse to open it.",
      },
      {
        type: "paragraph",
        id: "pace",
        text: "Pace is political in a small way. Too fast and the walk becomes sport. Too slow and it becomes a tour. The front walker is rotated. The back walker is always someone willing to be last with a person who needs to talk. Talking is allowed. Phones are for torch, not for documenting the dusk as content. This journal is already doing that work, and even here the image is a stub.",
      },
      {
        type: "heading",
        id: "when-the-light-goes",
        title: "When the light goes",
      },
      {
        type: "paragraph",
        id: "dark",
        text: "After the clocks change the loop feels shorter and the lock looks like industrial furniture. People still come. The ritual is not the sunset. The ritual is showing up for a route that does not care whether you had a good day. At the end they tap the rail, which started as a joke and is now the closing. Then they scatter toward buses and kitchens. No group photograph. The walk is the record.",
      },
      {
        type: "paragraph",
        id: "return",
        text: "A new walker is told two things: stay with a partner after the dye works, and do not treat the river as a backdrop for a speech. The group has lost people to both darkness and oratory. What remains is a modest loop that still ends at the same rail. Adele walks it when she is in the district. She does not lead. Leading would turn the last light into a tour of her own sentences.",
      },
    ],
  },
  {
    slug: "keys-left-on-the-counter",
    title: "Keys left on the counter",
    standfirst:
      "A hardware shop holds spare keys for neighbours who still live as if a street can be trusted with metal.",
    topic: "rituals",
    authorId: "adele-park",
    publishedOn: "11 September 2026",
    leadImageId: "edt-st09",
    leadAlt: "A shallow dish of labelled keys on a worn shop counter",
    leadCaption:
      "Spare keys in a dish, staged for this fictional ritual. Not a real key register.",
    relatedSlugs: ["choir-after-the-shutters", "three-windows-cinder-lane"],
    isLead: false,
    selectedOnHome: false,
    blocks: [
      {
        type: "paragraph",
        id: "lead",
        text: "Tomas keeps a dish behind the till. The labels are first names and building numbers, not street addresses written in full. If you are locked out, you need to know the dish exists, and you need Tomas to recognise you or the person who left the key. It is a terrible security model and a good neighbour model. He knows that. He still does it.",
      },
      {
        type: "heading",
        id: "trust-as-a-shop-practice",
        title: "Trust as a shop practice",
      },
      {
        type: "paragraph",
        id: "trust",
        text: "The ritual is small. Someone drops a key on the way to work. Someone else collects it after a hospital night. Tomas never hands a key to a stranger with a convincing story. He will walk you to the door if he is unsure, which has happened twice in ten years of this fiction. Both times the unsure feeling was correct. He does not tell those stories as entertainment. He will tell you where the extra bulbs are. That is the kind of trust he prefers to advertise.",
      },
      {
        type: "paragraph",
        id: "choir-link",
        text: "On Wednesdays the dish is covered with a cloth before the choir arrives, not because singers steal, but because a ritual should not become a spectacle for guests. The keys are not a community-theatre prop. They are metal that opens rooms. Covering the dish is how the shop keeps two uses from contaminating each other. Tomas tells new choristers the cloth is for dust. The old ones know better and do not lift it.",
      },
      {
        type: "heading",
        id: "what-the-dish-refuses",
        title: "What the dish refuses",
      },
      {
        type: "paragraph",
        id: "refuses",
        text: "Tomas refuses a camera, a signup sheet, and any write-up that would make the dish famous. This article exists only because Common Hours is a closed demo and the street is invented. In a real city he would have said no. The lesson still holds: some civic habits survive by staying slightly underground, held in a dish, named by first names, closed with the shutter.",
      },
      {
        type: "paragraph",
        id: "evening-count",
        text: "At closing he counts the keys against a private list in a notebook that never leaves the drawer. Missing one means a walk. He has done the walk. He would rather do it than install a locker with a code that someone will write on a beam. The dish is analog on purpose. Analog, in this shop, is not nostalgia. It is a way of keeping the number of keys small enough to remember.",
      },
    ],
  },
];
