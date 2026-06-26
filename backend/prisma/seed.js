import { prisma } from '../lib/prisma.js';
import 'dotenv/config';
import bcrypt from 'bcryptjs';


async function main() {
  const username = process.env.ADMIN_USERNAME.toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const hashedPassword = await bcrypt.hash(password, 10);
  const defaultUser = await prisma.users.upsert({
    where: { username: username },
    update: {},
    create: {
      username: username,
      password: hashedPassword,
      admin: true
    },
  });

  console.log(defaultUser.id)

  const lorem = await prisma.$queryRawUnsafe(`INSERT INTO public.posts (title, content, posted_at, published, "ownerId") VALUES ('Lorem Ipsum', 'The standard Lorem Ipsum passage, used since 1966
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."', '2026-06-26 16:53:04.007', true, ${defaultUser.id})
RETURNING id, title
`
  );


  const genesis = await prisma.$queryRawUnsafe(`INSERT INTO public.posts (title, content, posted_at, published, "ownerId") VALUES ('Genesis', 'Chapter 1

[1:1] In the beginning when God created the heavens and the earth,
[1:2] the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters.
[1:3] Then God said, "Let there be light"; and there was light.
[1:4] And God saw that the light was good; and God separated the light from the darkness.
[1:5] God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.
[1:6] And God said, "Let there be a dome in the midst of the waters, and let it separate the waters from the waters."
[1:7] So God made the dome and separated the waters that were under the dome from the waters that were above the dome. And it was so.
[1:8] God called the dome Sky. And there was evening and there was morning, the second day.
[1:9] And God said, "Let the waters under the sky be gathered together into one place, and let the dry land appear." And it was so.
[1:10] God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good.
[1:11] Then God said, "Let the earth put forth vegetation: plants yielding seed, and fruit trees of every kind on earth that bear fruit with the seed in it." And it was so.
[1:12] The earth brought forth vegetation: plants yielding seed of every kind, and trees of every kind bearing fruit with the seed in it. And God saw that it was good.
[1:13] And there was evening and there was morning, the third day.
[1:14] And God said, "Let there be lights in the dome of the sky to separate the day from the night; and let them be for signs and for seasons and for days and years,
[1:15] and let them be lights in the dome of the sky to give light upon the earth." And it was so.
[1:16] God made the two great lights - the greater light to rule the day and the lesser light to rule the night - and the stars.
[1:17] God set them in the dome of the sky to give light upon the earth,
[1:18] to rule over the day and over the night, and to separate the light from the darkness. And God saw that it was good.
[1:19] And there was evening and there was morning, the fourth day.
[1:20] And God said, "Let the waters bring forth swarms of living creatures, and let birds fly above the earth across the dome of the sky."
[1:21] So God created the great sea monsters and every living creature that moves, of every kind, with which the waters swarm, and every winged bird of every kind. And God saw that it was good.
[1:22] God blessed them, saying, "Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth."
[1:23] And there was evening and there was morning, the fifth day.
[1:24] And God said, "Let the earth bring forth living creatures of every kind: cattle and creeping things and wild animals of the earth of every kind." And it was so.
[1:25] God made the wild animals of the earth of every kind, and the cattle of every kind, and everything that creeps upon the ground of every kind. And God saw that it was good.
[1:26] Then God said, "Let us make humankind in our image, according to our likeness; and let them have dominion over the fish of the sea, and over the birds of the air, and over the cattle, and over all the wild animals of the earth, and over every creeping thing that creeps upon the earth."
[1:27] So God created humankind in his image, in the image of God he created them; male and female he created them.
[1:28] God blessed them, and God said to them, "Be fruitful and multiply, and fill the earth and subdue it; and have dominion over the fish of the sea and over the birds of the air and over every living thing that moves upon the earth."
[1:29] God said, "See, I have given you every plant yielding seed that is upon the face of all the earth, and every tree with seed in its fruit; you shall have them for food.
[1:30] And to every beast of the earth, and to every bird of the air, and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food." And it was so.
[1:31] God saw everything that he had made, and indeed, it was very good. And there was evening and there was morning, the sixth day.

Chapter 2

[2:1] Thus the heavens and the earth were finished, and all their multitude.
[2:2] And on the seventh day God finished the work that he had done, and he rested on the seventh day from all the work that he had done.
[2:3] So God blessed the seventh day and hallowed it, because on it God rested from all the work that he had done in creation.
[2:4] These are the generations of the heavens and the earth when they were created. In the day that the LORD God made the earth and the heavens,
[2:5] when no plant of the field was yet in the earth and no herb of the field had yet sprung up - for the LORD God had not caused it to rain upon the earth, and there was no one to till the ground;
[2:6] but a stream would rise from the earth, and water the whole face of the ground -
[2:7] then the LORD God formed man from the dust of the ground, and breathed into his nostrils the breath of life; and the man became a living being.
[2:8] And the LORD God planted a garden in Eden, in the east; and there he put the man whom he had formed.
[2:9] Out of the ground the LORD God made to grow every tree that is pleasant to the sight and good for food, the tree of life also in the midst of the garden, and the tree of the knowledge of good and evil.
[2:10] A river flows out of Eden to water the garden, and from there it divides and becomes four branches.
[2:11] The name of the first is Pishon; it is the one that flows around the whole land of Havilah, where there is gold;
[2:12] and the gold of that land is good; bdellium and onyx stone are there.
[2:13] The name of the second river is Gihon; it is the one that flows around the whole land of Cush.
[2:14] The name of the third river is Tigris, which flows east of Assyria. And the fourth river is the Euphrates.
[2:15] The LORD God took the man and put him in the garden of Eden to till it and keep it.
[2:16] And the LORD God commanded the man, "You may freely eat of every tree of the garden;
[2:17] but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall die."
[2:18] Then the LORD God said, "It is not good that the man should be alone; I will make him a helper as his partner."
[2:19] So out of the ground the LORD God formed every animal of the field and every bird of the air, and brought them to the man to see what he would call them; and whatever the man called every living creature, that was its name.
[2:20] The man gave names to all cattle, and to the birds of the air, and to every animal of the field; but for the man there was not found a helper as his partner.
[2:21] So the LORD God caused a deep sleep to fall upon the man, and he slept; then he took one of his ribs and closed up its place with flesh.
[2:22] And the rib that the LORD God had taken from the man he made into a woman and brought her to the man.
[2:23] Then the man said, "This at last is bone of my bones and flesh of my flesh; this one shall be called Woman, for out of Man this one was taken."
[2:24] Therefore a man leaves his father and his mother and clings to his wife, and they become one flesh.
[2:25] And the man and his wife were both naked, and were not ashamed.

Chapter 3

[3:1] Now the serpent was more crafty than any other wild animal that the LORD God had made. He said to the woman, "Did God say, ''You shall not eat from any tree in the garden''?"
[3:2] The woman said to the serpent, "We may eat of the fruit of the trees in the garden;
[3:3] but God said, ''You shall not eat of the fruit of the tree that is in the middle of the garden, nor shall you touch it, or you shall die. ''"
[3:4] But the serpent said to the woman, "You will not die;
[3:5] for God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil."
[3:6] So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate; and she also gave some to her husband, who was with her, and he ate.
[3:7] Then the eyes of both were opened, and they knew that they were naked; and they sewed fig leaves together and made loincloths for themselves.
[3:8] They heard the sound of the LORD God walking in the garden at the time of the evening breeze, and the man and his wife hid themselves from the presence of the LORD God among the trees of the garden.
[3:9] But the LORD God called to the man, and said to him, "Where are you?"
[3:10] He said, "I heard the sound of you in the garden, and I was afraid, because I was naked; and I hid myself."
[3:11] He said, "Who told you that you were naked? Have you eaten from the tree of which I commanded you not to eat?"
[3:12] The man said, "The woman whom you gave to be with me, she gave me fruit from the tree, and I ate."
[3:13] Then the LORD God said to the woman, "What is this that you have done?" The woman said, "The serpent tricked me, and I ate."
[3:14] The LORD God said to the serpent, "Because you have done this, cursed are you among all animals and among all wild creatures; upon your belly you shall go, and dust you shall eat all the days of your life.
[3:15] I will put enmity between you and the woman, and between your offspring and hers; he will strike your head, and you will strike his heel."
[3:16] To the woman he said, "I will greatly increase your pangs in childbearing; in pain you shall bring forth children, yet your desire shall be for your husband, and he shall rule over you."
[3:17] And to the man he said, "Because you have listened to the voice of your wife, and have eaten of the tree about which I commanded you, ''You shall not eat of it,'' cursed is the ground because of you; in toil you shall eat of it all the days of your life;
[3:18] thorns and thistles it shall bring forth for you; and you shall eat the plants of the field.
[3:19] By the sweat of your face you shall eat bread until you return to the ground, for out of it you were taken; you are dust, and to dust you shall return."
[3:20] The man named his wife Eve, because she was the mother of all living.
[3:21] And the LORD God made garments of skins for the man and for his wife, and clothed them.
[3:22] Then the LORD God said, "See, the man has become like one of us, knowing good and evil; and now, he might reach out his hand and take also from the tree of life, and eat, and live forever"--
[3:23] therefore the LORD God sent him forth from the garden of Eden, to till the ground from which he was taken.
[3:24] He drove out the man; and at the east of the garden of Eden he placed the cherubim, and a sword flaming and turning to guard the way to the tree of life.

Chapter 4

[4:1] Now the man knew his wife Eve, and she conceived and bore Cain, saying, "I have produced a man with the help of the LORD."
[4:2] Next she bore his brother Abel. Now Abel was a keeper of sheep, and Cain a tiller of the ground.
[4:3] In the course of time Cain brought to the LORD an offering of the fruit of the ground,
[4:4] and Abel for his part brought of the firstlings of his flock, their fat portions. And the LORD had regard for Abel and his offering,
[4:5] but for Cain and his offering he had no regard. So Cain was very angry, and his countenance fell.
[4:6] The LORD said to Cain, "Why are you angry, and why has your countenance fallen?
[4:7] If you do well, will you not be accepted? And if you do not do well, sin is lurking at the door; its desire is for you, but you must master it."
[4:8] Cain said to his brother Abel, "Let us go out to the field." And when they were in the field, Cain rose up against his brother Abel, and killed him.
[4:9] Then the LORD said to Cain, "Where is your brother Abel?" He said, "I do not know; am I my brother''s keeper?"
[4:10] And the LORD said, "What have you done? Listen; your brother''s blood is crying out to me from the ground!
[4:11] And now you are cursed from the ground, which has opened its mouth to receive your brother''s blood from your hand.
[4:12] When you till the ground, it will no longer yield to you its strength; you will be a fugitive and a wanderer on the earth."
[4:13] Cain said to the LORD, "My punishment is greater than I can bear!
[4:14] Today you have driven me away from the soil, and I shall be hidden from your face; I shall be a fugitive and a wanderer on the earth, and anyone who meets me may kill me."
[4:15] Then the LORD said to him, "Not so! Whoever kills Cain will suffer a sevenfold vengeance." And the LORD put a mark on Cain, so that no one who came upon him would kill him.
[4:16] Then Cain went away from the presence of the LORD, and settled in the land of Nod, east of Eden.
[4:17] Cain knew his wife, and she conceived and bore Enoch; and he built a city, and named it Enoch after his son Enoch.
[4:18] To Enoch was born Irad; and Irad was the father of Mehujael, and Mehujael the father of Methushael, and Methushael the father of Lamech.
[4:19] Lamech took two wives; the name of the one was Adah, and the name of the other Zillah.
[4:20] Adah bore Jabal; he was the ancestor of those who live in tents and have livestock.
[4:21] His brother''s name was Jubal; he was the ancestor of all those who play the lyre and pipe.
[4:22] Zillah bore Tubal-cain, who made all kinds of bronze and iron tools. The sister of Tubal-cain was Naamah.
[4:23] Lamech said to his wives: "Adah and Zillah, hear my voice; you wives of Lamech, listen to what I say: I have killed a man for wounding me, a young man for striking me.
[4:24] If Cain is avenged sevenfold, truly Lamech seventy-sevenfold."
[4:25] Adam knew his wife again, and she bore a son and named him Seth, for she said, "God has appointed for me another child instead of Abel, because Cain killed him."
[4:26] To Seth also a son was born, and he named him Enosh. At that time people began to invoke the name of the LORD.

Chapter 5

[5:1] This is the list of the descendants of Adam. When God created humankind, he made them in the likeness of God.
[5:2] Male and female he created them, and he blessed them and named them "Humankind" when they were created.
[5:3] When Adam had lived one hundred thirty years, he became the father of a son in his likeness, according to his image, and named him Seth.
[5:4] The days of Adam after he became the father of Seth were eight hundred years; and he had other sons and daughters.
[5:5] Thus all the days that Adam lived were nine hundred thirty years; and he died.
[5:6] When Seth had lived one hundred five years, he became the father of Enosh.
[5:7] Seth lived after the birth of Enosh eight hundred seven years, and had other sons and daughters.
[5:8] Thus all the days of Seth were nine hundred twelve years; and he died.
[5:9] When Enosh had lived ninety years, he became the father of Kenan.
[5:10] Enosh lived after the birth of Kenan eight hundred fifteen years, and had other sons and daughters.
[5:11] Thus all the days of Enosh were nine hundred five years; and he died.
[5:12] When Kenan had lived seventy years, he became the father of Mahalalel.
[5:13] Kenan lived after the birth of Mahalalel eight hundred and forty years, and had other sons and daughters.
[5:14] Thus all the days of Kenan were nine hundred and ten years; and he died.
[5:15] When Mahalalel had lived sixty-five years, he became the father of Jared.
[5:16] Mahalalel lived after the birth of Jared eight hundred thirty years, and had other sons and daughters.
[5:17] Thus all the days of Mahalalel were eight hundred ninety-five years; and he died.
[5:18] When Jared had lived one hundred sixty-two years he became the father of Enoch.
[5:19] Jared lived after the birth of Enoch eight hundred years, and had other sons and daughters.
[5:20] Thus all the days of Jared were nine hundred sixty-two years; and he died.
[5:21] When Enoch had lived sixty-five years, he became the father of Methuselah.
[5:22] Enoch walked with God after the birth of Methuselah three hundred years, and had other sons and daughters.
[5:23] Thus all the days of Enoch were three hundred sixty-five years.
[5:24] Enoch walked with God; then he was no more, because God took him.
[5:25] When Methuselah had lived one hundred eighty-seven years, he became the father of Lamech.
[5:26] Methuselah lived after the birth of Lamech seven hundred eighty- two years, and had other sons and daughters.
[5:27] Thus all the days of Methuselah were nine hundred sixty-nine years; and he died.
[5:28] When Lamech had lived one hundred eighty-two years, he became the father of a son;
[5:29] he named him Noah, saying, "Out of the ground that the LORD has cursed this one shall bring us relief from our work and from the toil of our hands."
[5:30] Lamech lived after the birth of Noah five hundred ninety-five years, and had other sons and daughters.
[5:31] Thus all the days of Lamech were seven hundred seventy-seven years; and he died.
[5:32] After Noah was five hundred years old, Noah became the father of Shem, Ham, and Japheth.

Chapter 6

[6:1] When people began to multiply on the face of the ground, and daughters were born to them,
[6:2] the sons of God saw that they were fair; and they took wives for themselves of all that they chose.
[6:3] Then the LORD said, "My spirit shall not abide in mortals forever, for they are flesh; their days shall be one hundred twenty years."
[6:4] The Nephilim were on the earth in those days - and also afterward - when the sons of God went in to the daughters of humans, who bore children to them. These were the heroes that were of old, warriors of renown.
[6:5] The LORD saw that the wickedness of humankind was great in the earth, and that every inclination of the thoughts of their hearts was only evil continually.
[6:6] And the LORD was sorry that he had made humankind on the earth, and it grieved him to his heart.
[6:7] So the LORD said, "I will blot out from the earth the human beings I have created - people together with animals and creeping things and birds of the air, for I am sorry that I have made them."
[6:8] But Noah found favor in the sight of the LORD.
[6:9] These are the descendants of Noah. Noah was a righteous man, blameless in his generation; Noah walked with God.
[6:10] And Noah had three sons, Shem, Ham, and Japheth.
[6:11] Now the earth was corrupt in God''s sight, and the earth was filled with violence.
[6:12] And God saw that the earth was corrupt; for all flesh had corrupted its ways upon the earth.
[6:13] And God said to Noah, "I have determined to make an end of all flesh, for the earth is filled with violence because of them; now I am going to destroy them along with the earth.
[6:14] Make yourself an ark of cypress wood; make rooms in the ark, and cover it inside and out with pitch.
[6:15] This is how you are to make it: the length of the ark three hundred cubits, its width fifty cubits, and its height thirty cubits.
[6:16] Make a roof for the ark, and finish it to a cubit above; and put the door of the ark in its side; make it with lower, second, and third decks.
[6:17] For my part, I am going to bring a flood of waters on the earth, to destroy from under heaven all flesh in which is the breath of life; everything that is on the earth shall die.
[6:18] But I will establish my covenant with you; and you shall come into the ark, you, your sons, your wife, and your sons'' wives with you.
[6:19] And of every living thing, of all flesh, you shall bring two of every kind into the ark, to keep them alive with you; they shall be male and female.
[6:20] Of the birds according to their kinds, and of the animals according to their kinds, of every creeping thing of the ground according to its kind, two of every kind shall come in to you, to keep them alive.
[6:21] Also take with you every kind of food that is eaten, and store it up; and it shall serve as food for you and for them."
[6:22] Noah did this; he did all that God commanded him.

Chapter 7

[7:1] Then the LORD said to Noah, "Go into the ark, you and all your household, for I have seen that you alone are righteous before me in this generation.
[7:2] Take with you seven pairs of all clean animals, the male and its mate; and a pair of the animals that are not clean, the male and its mate;
[7:3] and seven pairs of the birds of the air also, male and female, to keep their kind alive on the face of all the earth.
[7:4] For in seven days I will send rain on the earth for forty days and forty nights; and every living thing that I have made I will blot out from the face of the ground."
[7:5] And Noah did all that the LORD had commanded him.
[7:6] Noah was six hundred years old when the flood of waters came on the earth.
[7:7] And Noah with his sons and his wife and his sons'' wives went into the ark to escape the waters of the flood.
[7:8] Of clean animals, and of animals that are not clean, and of birds, and of everything that creeps on the ground,
[7:9] two and two, male and female, went into the ark with Noah, as God had commanded Noah.
[7:10] And after seven days the waters of the flood came on the earth.
[7:11] In the six hundredth year of Noah''s life, in the second month, on the seventeenth day of the month, on that day all the fountains of the great deep burst forth, and the windows of the heavens were opened.
[7:12] The rain fell on the earth forty days and forty nights.
[7:13] On the very same day Noah with his sons, Shem and Ham and Japheth, and Noah''s wife and the three wives of his sons entered the ark,
[7:14] they and every wild animal of every kind, and all domestic animals of every kind, and every creeping thing that creeps on the earth, and every bird of every kind - every bird, every winged creature.
[7:15] They went into the ark with Noah, two and two of all flesh in which there was the breath of life.
[7:16] And those that entered, male and female of all flesh, went in as God had commanded him; and the LORD shut him in.
[7:17] The flood continued forty days on the earth; and the waters increased, and bore up the ark, and it rose high above the earth.
[7:18] The waters swelled and increased greatly on the earth; and the ark floated on the face of the waters.
[7:19] The waters swelled so mightily on the earth that all the high mountains under the whole heaven were covered;
[7:20] the waters swelled above the mountains, covering them fifteen cubits deep.
[7:21] And all flesh died that moved on the earth, birds, domestic animals, wild animals, all swarming creatures that swarm on the earth, and all human beings;
[7:22] everything on dry land in whose nostrils was the breath of life died.
[7:23] He blotted out every living thing that was on the face of the ground, human beings and animals and creeping things and birds of the air; they were blotted out from the earth. Only Noah was left, and those that were with him in the ark.
[7:24] And the waters swelled on the earth for one hundred fifty days.

Chapter 8

[8:1] But God remembered Noah and all the wild animals and all the domestic animals that were with him in the ark. And God made a wind blow over the earth, and the waters subsided;
[8:2] the fountains of the deep and the windows of the heavens were closed, the rain from the heavens was restrained,
[8:3] and the waters gradually receded from the earth. At the end of one hundred fifty days the waters had abated;
[8:4] and in the seventh month, on the seventeenth day of the month, the ark came to rest on the mountains of Ararat.
[8:5] The waters continued to abate until the tenth month; in the tenth month, on the first day of the month, the tops of the mountains appeared.
[8:6] At the end of forty days Noah opened the window of the ark that he had made
[8:7] and sent out the raven; and it went to and fro until the waters were dried up from the earth.
[8:8] Then he sent out the dove from him, to see if the waters had subsided from the face of the ground;
[8:9] but the dove found no place to set its foot, and it returned to him to the ark, for the waters were still on the face of the whole earth. So he put out his hand and took it and brought it into the ark with him.
[8:10] He waited another seven days, and again he sent out the dove from the ark;
[8:11] and the dove came back to him in the evening, and there in its beak was a freshly plucked olive leaf; so Noah knew that the waters had subsided from the earth.
[8:12] Then he waited another seven days, and sent out the dove; and it did not return to him any more.
[8:13] In the six hundred first year, in the first month, the first day of the month, the waters were dried up from the earth; and Noah removed the covering of the ark, and looked, and saw that the face of the ground was drying.
[8:14] In the second month, on the twenty-seventh day of the month, the earth was dry.
[8:15] Then God said to Noah,
[8:16] "Go out of the ark, you and your wife, and your sons and your sons'' wives with you.
[8:17] Bring out with you every living thing that is with you of all flesh - birds and animals and every creeping thing that creeps on the earth - so that they may abound on the earth, and be fruitful and multiply on the earth."
[8:18] So Noah went out with his sons and his wife and his sons'' wives.
[8:19] And every animal, every creeping thing, and every bird, everything that moves on the earth, went out of the ark by families.
[8:20] Then Noah built an altar to the LORD, and took of every clean animal and of every clean bird, and offered burnt offerings on the altar.
[8:21] And when the LORD smelled the pleasing odor, the LORD said in his heart, "I will never again curse the ground because of humankind, for the inclination of the human heart is evil from youth; nor will I ever again destroy every living creature as I have done.
[8:22] As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease."

Chapter 9

[9:1] God blessed Noah and his sons, and said to them, "Be fruitful and multiply, and fill the earth.
[9:2] The fear and dread of you shall rest on every animal of the earth, and on every bird of the air, on everything that creeps on the ground, and on all the fish of the sea; into your hand they are delivered.
[9:3] Every moving thing that lives shall be food for you; and just as I gave you the green plants, I give you everything.
[9:4] Only, you shall not eat flesh with its life, that is, its blood.
[9:5] For your own lifeblood I will surely require a reckoning: from every animal I will require it and from human beings, each one for the blood of another, I will require a reckoning for human life.
[9:6] Whoever sheds the blood of a human, by a human shall that person''s blood be shed; for in his own image God made humankind.
[9:7] And you, be fruitful and multiply, abound on the earth and multiply in it."
[9:8] Then God said to Noah and to his sons with him,
[9:9] "As for me, I am establishing my covenant with you and your descendants after you,
[9:10] and with every living creature that is with you, the birds, the domestic animals, and every animal of the earth with you, as many as came out of the ark.
[9:11] I establish my covenant with you, that never again shall all flesh be cut off by the waters of a flood, and never again shall there be a flood to destroy the earth."
[9:12] God said, "This is the sign of the covenant that I make between me and you and every living creature that is with you, for all future generations:
[9:13] I have set my bow in the clouds, and it shall be a sign of the covenant between me and the earth.
[9:14] When I bring clouds over the earth and the bow is seen in the clouds,
[9:15] I will remember my covenant that is between me and you and every living creature of all flesh; and the waters shall never again become a flood to destroy all flesh.
[9:16] When the bow is in the clouds, I will see it and remember the everlasting covenant between God and every living creature of all flesh that is on the earth."
[9:17] God said to Noah, "This is the sign of the covenant that I have established between me and all flesh that is on the earth."
[9:18] The sons of Noah who went out of the ark were Shem, Ham, and Japheth. Ham was the father of Canaan.
[9:19] These three were the sons of Noah; and from these the whole earth was peopled.
[9:20] Noah, a man of the soil, was the first to plant a vineyard.
[9:21] He drank some of the wine and became drunk, and he lay uncovered in his tent.
[9:22] And Ham, the father of Canaan, saw the nakedness of his father, and told his two brothers outside.
[9:23] Then Shem and Japheth took a garment, laid it on both their shoulders, and walked backward and covered the nakedness of their father; their faces were turned away, and they did not see their father''s nakedness.
[9:24] When Noah awoke from his wine and knew what his youngest son had done to him,
[9:25] he said, "Cursed be Canaan; lowest of slaves shall he be to his brothers."
[9:26] He also said, "Blessed by the LORD my God be Shem; and let Canaan be his slave.
[9:27] May God make space for Japheth, and let him live in the tents of Shem; and let Canaan be his slave."
[9:28] After the flood Noah lived three hundred fifty years.
[9:29] All the days of Noah were nine hundred fifty years; and he died.

Chapter 10

[10:1] These are the descendants of Noah''s sons, Shem, Ham, and Japheth; children were born to them after the flood.
[10:2] The descendants of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras.
[10:3] The descendants of Gomer: Ashkenaz, Riphath, and Togarmah.
[10:4] The descendants of Javan: Elishah, Tarshish, Kittim, and Rodanim.
[10:5] From these the coastland peoples spread. These are the descendants of Japheth in their lands, with their own language, by their families, in their nations.
[10:6] The descendants of Ham: Cush, Egypt, Put, and Canaan.
[10:7] The descendants of Cush: Seba, Havilah, Sabtah, Raamah, and Sabteca. The descendants of Raamah: Sheba and Dedan.
[10:8] Cush became the father of Nimrod; he was the first on earth to become a mighty warrior.
[10:9] He was a mighty hunter before the LORD; therefore it is said, "Like Nimrod a mighty hunter before the LORD."
[10:10] The beginning of his kingdom was Babel, Erech, and Accad, all of them in the land of Shinar.
[10:11] From that land he went into Assyria, and built Nineveh, Rehoboth-ir, Calah, and
[10:12] Resen between Nineveh and Calah; that is the great city.
[10:13] Egypt became the father of Ludim, Anamim, Lehabim, Naphtuhim,
[10:14] Pathrusim, Casluhim, and Caphtorim, from which the Philistines come.
[10:15] Canaan became the father of Sidon his firstborn, and Heth,
[10:16] and the Jebusites, the Amorites, the Girgashites,
[10:17] the Hivites, the Arkites, the Sinites,
[10:18] the Arvadites, the Zemarites, and the Hamathites. Afterward the families of the Canaanites spread abroad.
[10:19] And the territory of the Canaanites extended from Sidon, in the direction of Gerar, as far as Gaza, and in the direction of Sodom, Gomorrah, Admah, and Zeboiim, as far as Lasha.
[10:20] These are the descendants of Ham, by their families, their languages, their lands, and their nations.
[10:21] To Shem also, the father of all the children of Eber, the elder brother of Japheth, children were born.
[10:22] The descendants of Shem: Elam, Asshur, Arpachshad, Lud, and Aram.
[10:23] The descendants of Aram: Uz, Hul, Gether, and Mash.
[10:24] Arpachshad became the father of Shelah; and Shelah became the father of Eber.
[10:25] To Eber were born two sons: the name of the one was Peleg, for in his days the earth was divided, and his brother''s name was Joktan.
[10:26] Joktan became the father of Almodad, Sheleph, Hazarmaveth, Jerah,
[10:27] Hadoram, Uzal, Diklah,
[10:28] Obal, Abimael, Sheba,
[10:29] Ophir, Havilah, and Jobab; all these were the descendants of Joktan.
[10:30] The territory in which they lived extended from Mesha in the direction of Sephar, the hill country of the east.
[10:31] These are the descendants of Shem, by their families, their languages, their lands, and their nations.
[10:32] These are the families of Noah''s sons, according to their genealogies, in their nations; and from these the nations spread abroad on the earth after the flood.

Chapter 11

[11:1] Now the whole earth had one language and the same words.
[11:2] And as they migrated from the east, they came upon a plain in the land of Shinar and settled there.
[11:3] And they said to one another, "Come, let us make bricks, and burn them thoroughly." And they had brick for stone, and bitumen for mortar.
[11:4] Then they said, "Come, let us build ourselves a city, and a tower with its top in the heavens, and let us make a name for ourselves; otherwise we shall be scattered abroad upon the face of the whole earth."
[11:5] The LORD came down to see the city and the tower, which mortals had built.
[11:6] And the LORD said, "Look, they are one people, and they have all one language; and this is only the beginning of what they will do; nothing that they propose to do will now be impossible for them.
[11:7] Come, let us go down, and confuse their language there, so that they will not understand one another''s speech."
[11:8] So the LORD scattered them abroad from there over the face of all the earth, and they left off building the city.
[11:9] Therefore it was called Babel, because there the LORD confused the language of all the earth; and from there the LORD scattered them abroad over the face of all the earth.
[11:10] These are the descendants of Shem. When Shem was one hundred years old, he became the father of Arpachshad two years after the flood;
[11:11] and Shem lived after the birth of Arpachshad five hundred years, and had other sons and daughters.
[11:12] When Arpachshad had lived thirty-five years, he became the father of Shelah;
[11:13] and Arpachshad lived after the birth of Shelah four hundred three years, and had other sons and daughters.
[11:14] When Shelah had lived thirty years, he became the father of Eber;
[11:15] and Shelah lived after the birth of Eber four hundred three years, and had other sons and daughters.
[11:16] When Eber had lived thirty-four years, he became the father of Peleg;
[11:17] and Eber lived after the birth of Peleg four hundred thirty years, and had other sons and daughters.
[11:18] When Peleg had lived thirty years, he became the father of Reu;
[11:19] and Peleg lived after the birth of Reu two hundred nine years, and had other sons and daughters.
[11:20] When Reu had lived thirty-two years, he became the father of Serug;
[11:21] and Reu lived after the birth of Serug two hundred seven years, and had other sons and daughters.
[11:22] When Serug had lived thirty years, he became the father of Nahor;
[11:23] and Serug lived after the birth of Nahor two hundred years, and had other sons and daughters.
[11:24] When Nahor had lived twenty-nine years, he became the father of Terah;
[11:25] and Nahor lived after the birth of Terah one hundred nineteen years, and had other sons and daughters.
[11:26] When Terah had lived seventy years, he became the father of Abram, Nahor, and Haran.
[11:27] Now these are the descendants of Terah. Terah was the father of Abram, Nahor, and Haran; and Haran was the father of Lot.
[11:28] Haran died before his father Terah in the land of his birth, in Ur of the Chaldeans.
[11:29] Abram and Nahor took wives; the name of Abram''s wife was Sarai, and the name of Nahor''s wife was Milcah. She was the daughter of Haran the father of Milcah and Iscah.
[11:30] Now Sarai was barren; she had no child.
[11:31] Terah took his son Abram and his grandson Lot son of Haran, and his daughter-in-law Sarai, his son Abram''s wife, and they went out together from Ur of the Chaldeans to go into the land of Canaan; but when they came to Haran, they settled there.
[11:32] The days of Terah were two hundred five years; and Terah died in Haran.

Chapter 12

[12:1] Now the LORD said to Abram, "Go from your country and your kindred and your father''s house to the land that I will show you.
[12:2] I will make of you a great nation, and I will bless you, and make your name great, so that you will be a blessing.
[12:3] I will bless those who bless you, and the one who curses you I will curse; and in you all the families of the earth shall be blessed."
[12:4] So Abram went, as the LORD had told him; and Lot went with him. Abram was seventy-five years old when he departed from Haran.
[12:5] Abram took his wife Sarai and his brother''s son Lot, and all the possessions that they had gathered, and the persons whom they had acquired in Haran; and they set forth to go to the land of Canaan. When they had come to the land of Canaan,
[12:6] Abram passed through the land to the place at Shechem, to the oak of Moreh. At that time the Canaanites were in the land.
[12:7] Then the LORD appeared to Abram, and said, "To your offspring I will give this land." So he built there an altar to the LORD, who had appeared to him.
[12:8] From there he moved on to the hill country on the east of Bethel, and pitched his tent, with Bethel on the west and Ai on the east; and there he built an altar to the LORD and invoked the name of the LORD.
[12:9] And Abram journeyed on by stages toward the Negeb.
[12:10] Now there was a famine in the land. So Abram went down to Egypt to reside there as an alien, for the famine was severe in the land.
[12:11] When he was about to enter Egypt, he said to his wife Sarai, "I know well that you are a woman beautiful in appearance;
[12:12] and when the Egyptians see you, they will say, ''This is his wife''; then they will kill me, but they will let you live.
[12:13] Say you are my sister, so that it may go well with me because of you, and that my life may be spared on your account."
[12:14] When Abram entered Egypt the Egyptians saw that the woman was very beautiful.
[12:15] When the officials of Pharaoh saw her, they praised her to Pharaoh. And the woman was taken into Pharaoh''s house.
[12:16] And for her sake he dealt well with Abram; and he had sheep, oxen, male donkeys, male and female slaves, female donkeys, and camels.
[12:17] But the LORD afflicted Pharaoh and his house with great plagues because of Sarai, Abram''s wife.
[12:18] So Pharaoh called Abram, and said, "What is this you have done to me? Why did you not tell me that she was your wife?
[12:19] Why did you say, ''She is my sister,'' so that I took her for my wife? Now then, here is your wife, take her, and be gone."
[12:20] And Pharaoh gave his men orders concerning him; and they set him on the way, with his wife and all that he had.

Chapter 13

[13:1] So Abram went up from Egypt, he and his wife, and all that he had, and Lot with him, into the Negeb.
[13:2] Now Abram was very rich in livestock, in silver, and in gold.
[13:3] He journeyed on by stages from the Negeb as far as Bethel, to the place where his tent had been at the beginning, between Bethel and Ai,
[13:4] to the place where he had made an altar at the first; and there Abram called on the name of the LORD.
[13:5] Now Lot, who went with Abram, also had flocks and herds and tents,
[13:6] so that the land could not support both of them living together; for their possessions were so great that they could not live together,
[13:7] and there was strife between the herders of Abram''s livestock and the herders of Lot''s livestock. At that time the Canaanites and the Perizzites lived in the land.
[13:8] Then Abram said to Lot, "Let there be no strife between you and me, and between your herders and my herders; for we are kindred.
[13:9] Is not the whole land before you? Separate yourself from me. If you take the left hand, then I will go to the right; or if you take the right hand, then I will go to the left."
[13:10] Lot looked about him, and saw that the plain of the Jordan was well watered everywhere like the garden of the LORD, like the land of Egypt, in the direction of Zoar; this was before the LORD had destroyed Sodom and Gomorrah.
[13:11] So Lot chose for himself all the plain of the Jordan, and Lot journeyed eastward; thus they separated from each other.
[13:12] Abram settled in the land of Canaan, while Lot settled among the cities of the Plain and moved his tent as far as Sodom.
[13:13] Now the people of Sodom were wicked, great sinners against the LORD.
[13:14] The LORD said to Abram, after Lot had separated from him, "Raise your eyes now, and look from the place where you are, northward and southward and eastward and westward;
[13:15] for all the land that you see I will give to you and to your offspring forever.
[13:16] I will make your offspring like the dust of the earth; so that if one can count the dust of the earth, your offspring also can be counted.
[13:17] Rise up, walk through the length and the breadth of the land, for I will give it to you."
[13:18] So Abram moved his tent, and came and settled by the oaks of Mamre, which are at Hebron; and there he built an altar to the LORD.

Chapter 14

[14:1] In the days of King Amraphel of Shinar, King Arioch of Ellasar, King Chedorlaomer of Elam, and King Tidal of Goiim,
[14:2] these kings made war with King Bera of Sodom, King Birsha of Gomorrah, King Shinab of Admah, King Shemeber of Zeboiim, and the king of Bela (that is, Zoar).
[14:3] All these joined forces in the Valley of Siddim (that is, the Dead Sea).
[14:4] Twelve years they had served Chedorlaomer, but in the thirteenth year they rebelled.
[14:5] In the fourteenth year Chedorlaomer and the kings who were with him came and subdued the Rephaim in Ashteroth-karnaim, the Zuzim in Ham, the Emim in Shaveh-kiriathaim,
[14:6] and the Horites in the hill country of Seir as far as El-paran on the edge of the wilderness;
[14:7] then they turned back and came to En-mishpat (that is, Kadesh), and subdued all the country of the Amalekites, and also the Amorites who lived in Hazazon-tamar.
[14:8] Then the king of Sodom, the king of Gomorrah, the king of Admah, the king of Zeboiim, and the king of Bela (that is, Zoar) went out, and they joined battle in the Valley of Siddim
[14:9] with King Chedorlaomer of Elam, King Tidal of Goiim, King Amraphel of Shinar, and King Arioch of Ellasar, four kings against five.
[14:10] Now the Valley of Siddim was full of bitumen pits; and as the kings of Sodom and Gomorrah fled, some fell into them, and the rest fled to the hill country.
[14:11] So the enemy took all the goods of Sodom and Gomorrah, and all their provisions, and went their way;
[14:12] they also took Lot, the son of Abram''s brother, who lived in Sodom, and his goods, and departed.
[14:13] Then one who had escaped came and told Abram the Hebrew, who was living by the oaks of Mamre the Amorite, brother of Eshcol and of Aner; these were allies of Abram.
[14:14] When Abram heard that his nephew had been taken captive, he led forth his trained men, born in his house, three hundred eighteen of them, and went in pursuit as far as Dan.
[14:15] He divided his forces against them by night, he and his servants, and routed them and pursued them to Hobah, north of Damascus.
[14:16] Then he brought back all the goods, and also brought back his nephew Lot with his goods, and the women and the people.
[14:17] After his return from the defeat of Chedorlaomer and the kings who were with him, the king of Sodom went out to meet him at the Valley of Shaveh (that is, the King''s Valley).
[14:18] And King Melchizedek of Salem brought out bread and wine; he was priest of God Most High.
[14:19] He blessed him and said, "Blessed be Abram by God Most High, maker of heaven and earth;
[14:20] and blessed be God Most High, who has delivered your enemies into your hand!" And Abram gave him one tenth of everything.
[14:21] Then the king of Sodom said to Abram, "Give me the persons, but take the goods for yourself."
[14:22] But Abram said to the king of Sodom, "I have sworn to the LORD, God Most High, maker of heaven and earth,
[14:23] that I would not take a thread or a sandal-thong or anything that is yours, so that you might not say, ''I have made Abram rich.''
[14:24] I will take nothing but what the young men have eaten, and the share of the men who went with me - Aner, Eshcol, and Mamre. Let them take their share."

Chapter 15

[15:1] After these things the word of the LORD came to Abram in a vision, "Do not be afraid, Abram, I am your shield; your reward shall be very great."
[15:2] But Abram said, "O Lord GOD, what will you give me, for I continue childless, and the heir of my house is Eliezer of Damascus?"
[15:3] And Abram said, "You have given me no offspring, and so a slave born in my house is to be my heir."
[15:4] But the word of the LORD came to him, "This man shall not be your heir; no one but your very own issue shall be your heir."
[15:5] He brought him outside and said, "Look toward heaven and count the stars, if you are able to count them." Then he said to him, "So shall your descendants be."
[15:6] And he believed the LORD; and the LORD reckoned it to him as righteousness.
[15:7] Then he said to him, "I am the LORD who brought you from Ur of the Chaldeans, to give you this land to possess."
[15:8] But he said, "O Lord GOD, how am I to know that I shall possess it?"
[15:9] He said to him, "Bring me a heifer three years old, a female goat three years old, a ram three years old, a turtledove, and a young pigeon."
[15:10] He brought him all these and cut them in two, laying each half over against the other; but he did not cut the birds in two.
[15:11] And when birds of prey came down on the carcasses, Abram drove them away.
[15:12] As the sun was going down, a deep sleep fell upon Abram, and a deep and terrifying darkness descended upon him.
[15:13] Then the LORD said to Abram, "Know this for certain, that your offspring shall be aliens in a land that is not theirs, and shall be slaves there, and they shall be oppressed for four hundred years;
[15:14] but I will bring judgment on the nation that they serve, and afterward they shall come out with great possessions.
[15:15] As for yourself, you shall go to your ancestors in peace; you shall be buried in a good old age.
[15:16] And they shall come back here in the fourth generation; for the iniquity of the Amorites is not yet complete."
[15:17] When the sun had gone down and it was dark, a smoking fire pot and a flaming torch passed between these pieces.
[15:18] On that day the LORD made a covenant with Abram, saying, "To your descendants I give this land, from the river of Egypt to the great river, the river Euphrates,
[15:19] the land of the Kenites, the Kenizzites, the Kadmonites,
[15:20] the Hittites, the Perizzites, the Rephaim,
[15:21] the Amorites, the Canaanites, the Girgashites, and the Jebusites.".

Chapter 16

[16:1] Now Sarai, Abram''s wife, bore him no children. She had an Egyptian slave-girl whose name was Hagar,
[16:2] and Sarai said to Abram, "You see that the LORD has prevented me from bearing children; go in to my slave-girl; it may be that I shall obtain children by her." And Abram listened to the voice of Sarai.
[16:3] So, after Abram had lived ten years in the land of Canaan, Sarai, Abram''s wife, took Hagar the Egyptian, her slave-girl, and gave her to her husband Abram as a wife.
[16:4] He went in to Hagar, and she conceived; and when she saw that she had conceived, she looked with contempt on her mistress.
[16:5] Then Sarai said to Abram, "May the wrong done to me be on you! I gave my slave-girl to your embrace, and when she saw that she had conceived, she looked on me with contempt. May the LORD judge between you and me!"
[16:6] But Abram said to Sarai, "Your slave-girl is in your power; do to her as you please." Then Sarai dealt harshly with her, and she ran away from her.
[16:7] The angel of the LORD found her by a spring of water in the wilderness, the spring on the way to Shur.
[16:8] And he said, "Hagar, slave-girl of Sarai, where have you come from and where are you going?" She said, "I am running away from my mistress Sarai."
[16:9] The angel of the LORD said to her, "Return to your mistress, and submit to her."
[16:10] The angel of the LORD also said to her, "I will so greatly multiply your offspring that they cannot be counted for multitude."
[16:11] And the angel of the LORD said to her, "Now you have conceived and shall bear a son; you shall call him Ishmael, for the LORD has given heed to your affliction.
[16:12] He shall be a wild ass of a man, with his hand against everyone, and everyone''s hand against him; and he shall live at odds with all his kin."
[16:13] So she named the LORD who spoke to her, "You are El-roi"; for she said, "Have I really seen God and remained alive after seeing him?"
[16:14] Therefore the well was called Beer-lahai-roi; it lies between Kadesh and Bered.
[16:15] Hagar bore Abram a son; and Abram named his son, whom Hagar bore, Ishmael.
[16:16] Abram was eighty-six years old when Hagar bore him Ishmael.

Chapter 17

[17:1] When Abram was ninety-nine years old, the LORD appeared to Abram, and said to him, "I am God Almighty; walk before me, and be blameless.
[17:2] And I will make my covenant between me and you, and will make you exceedingly numerous."
[17:3] Then Abram fell on his face; and God said to him,
[17:4] "As for me, this is my covenant with you: You shall be the ancestor of a multitude of nations.
[17:5] No longer shall your name be Abram, but your name shall be Abraham; for I have made you the ancestor of a multitude of nations.
[17:6] I will make you exceedingly fruitful; and I will make nations of you, and kings shall come from you.
[17:7] I will establish my covenant between me and you, and your offspring after you throughout their generations, for an everlasting covenant, to be God to you and to your offspring after you.
[17:8] And I will give to you, and to your offspring after you, the land where you are now an alien, all the land of Canaan, for a perpetual holding; and I will be their God."
[17:9] God said to Abraham, "As for you, you shall keep my covenant, you and your offspring after you throughout their generations.
[17:10] This is my covenant, which you shall keep, between me and you and your offspring after you: Every male among you shall be circumcised.
[17:11] You shall circumcise the flesh of your foreskins, and it shall be a sign of the covenant between me and you.
[17:12] Throughout your generations every male among you shall be circumcised when he is eight days old, including the slave born in your house and the one bought with your money from any foreigner who is not of your offspring.
[17:13] Both the slave born in your house and the one bought with your money must be circumcised. So shall my covenant be in your flesh an everlasting covenant.
[17:14] Any uncircumcised male who is not circumcised in the flesh of his foreskin shall be cut off from his people; he has broken my covenant."
[17:15] God said to Abraham, "As for Sarah your wife, you shall not call her Sarai, but Sarah shall be her name.
[17:16] I will bless her, and moreover I will give you a son by her. I will bless her, and she shall give rise to nations; kings of peoples shall come from her."
[17:17] Then Abraham fell on his face and laughed, and said to himself, "Can a child be born to a man who is a hundred years old? Can Sarah, who is ninety years old, bear a child?"
[17:18] And Abraham said to God, "O that Ishmael might live in your sight!"
[17:19] God said, "No, but your wife Sarah shall bear you a son, and you shall name him Isaac. I will establish my covenant with him as an everlasting covenant for his offspring after him.
[17:20] As for Ishmael, I have heard you; I will bless him and make him fruitful and exceedingly numerous; he shall be the father of twelve princes, and I will make him a great nation.
[17:21] But my covenant I will establish with Isaac, whom Sarah shall bear to you at this season next year."
[17:22] And when he had finished talking with him, God went up from Abraham.
[17:23] Then Abraham took his son Ishmael and all the slaves born in his house or bought with his money, every male among the men of Abraham''s house, and he circumcised the flesh of their foreskins that very day, as God had said to him.
[17:24] Abraham was ninety-nine years old when he was circumcised in the flesh of his foreskin.
[17:25] And his son Ishmael was thirteen years old when he was circumcised in the flesh of his foreskin.
[17:26] That very day Abraham and his son Ishmael were circumcised;
[17:27] and all the men of his house, slaves born in the house and those bought with money from a foreigner, were circumcised with him.

Chapter 18

[18:1] The LORD appeared to Abraham by the oaks of Mamre, as he sat at the entrance of his tent in the heat of the day.
[18:2] He looked up and saw three men standing near him. When he saw them, he ran from the tent entrance to meet them, and bowed down to the ground.
[18:3] He said, "My lord, if I find favor with you, do not pass by your servant.
[18:4] Let a little water be brought, and wash your feet, and rest yourselves under the tree.
[18:5] Let me bring a little bread, that you may refresh yourselves, and after that you may pass on - since you have come to your servant." So they said, "Do as you have said."
[18:6] And Abraham hastened into the tent to Sarah, and said, "Make ready quickly three measures of choice flour, knead it, and make cakes. "
[18:7] Abraham ran to the herd, and took a calf, tender and good, and gave it to the servant, who hastened to prepare it.
[18:8] Then he took curds and milk and the calf that he had prepared, and set it before them; and he stood by them under the tree while they ate.
[18:9] They said to him, "Where is your wife Sarah?" And he said, "There, in the tent."
[18:10] Then one said, "I will surely return to you in due season, and your wife Sarah shall have a son." And Sarah was listening at the tent entrance behind him.
[18:11] Now Abraham and Sarah were old, advanced in age; it had ceased to be with Sarah after the manner of women.
[18:12] So Sarah laughed to herself, saying, "After I have grown old, and my husband is old, shall I have pleasure?"
[18:13] The LORD said to Abraham, "Why did Sarah laugh, and say, ''Shall I indeed bear a child, now that I am old?''
[18:14] Is anything too wonderful for the LORD? At the set time I will return to you, in due season, and Sarah shall have a son."
[18:15] But Sarah denied, saying, "I did not laugh"; for she was afraid. He said, "Oh yes, you did laugh."
[18:16] Then the men set out from there, and they looked toward Sodom; and Abraham went with them to set them on their way.
[18:17] The LORD said, "Shall I hide from Abraham what I am about to do,
[18:18] seeing that Abraham shall become a great and mighty nation, and all the nations of the earth shall be blessed in him?
[18:19] No, for I have chosen him, that he may charge his children and his household after him to keep the way of the LORD by doing righteousness and justice; so that the LORD may bring about for Abraham what he has promised him."
[18:20] Then the LORD said, "How great is the outcry against Sodom and Gomorrah and how very grave their sin!
[18:21] I must go down and see whether they have done altogether according to the outcry that has come to me; and if not, I will know."
[18:22] So the men turned from there, and went toward Sodom, while Abraham remained standing before the LORD.
[18:23] Then Abraham came near and said, "Will you indeed sweep away the righteous with the wicked?
[18:24] Suppose there are fifty righteous within the city; will you then sweep away the place and not forgive it for the fifty righteous who are in it?
[18:25] Far be it from you to do such a thing, to slay the righteous with the wicked, so that the righteous fare as the wicked! Far be that from you! Shall not the Judge of all the earth do what is just?"
[18:26] And the LORD said, "If I find at Sodom fifty righteous in the city, I will forgive the whole place for their sake."
[18:27] Abraham answered, "Let me take it upon myself to speak to the Lord, I who am but dust and ashes.
[18:28] Suppose five of the fifty righteous are lacking? Will you destroy the whole city for lack of five?" And he said, "I will not destroy it if I find forty-five there."
[18:29] Again he spoke to him, "Suppose forty are found there." He answered, "For the sake of forty I will not do it."
[18:30] Then he said, "Oh do not let the Lord be angry if I speak. Suppose thirty are found there." He answered, "I will not do it, if I find thirty there."
[18:31] He said, "Let me take it upon myself to speak to the Lord. Suppose twenty are found there." He answered, "For the sake of twenty I will not destroy it."
[18:32] Then he said, "Oh do not let the Lord be angry if I speak just once more. Suppose ten are found there." He answered, "For the sake of ten I will not destroy it."
[18:33] And the LORD went his way, when he had finished speaking to Abraham; and Abraham returned to his place.

Chapter 19

[19:1] The two angels came to Sodom in the evening, and Lot was sitting in the gateway of Sodom. When Lot saw them, he rose to meet them, and bowed down with his face to the ground.
[19:2] He said, "Please, my lords, turn aside to your servant''s house and spend the night, and wash your feet; then you can rise early and go on your way." They said, "No; we will spend the night in the square. "
[19:3] But he urged them strongly; so they turned aside to him and entered his house; and he made them a feast, and baked unleavened bread, and they ate.
[19:4] But before they lay down, the men of the city, the men of Sodom, both young and old, all the people to the last man, surrounded the house;
[19:5] and they called to Lot, "Where are the men who came to you tonight? Bring them out to us, so that we may know them."
[19:6] Lot went out of the door to the men, shut the door after him,
[19:7] and said, "I beg you, my brothers, do not act so wickedly.
[19:8] Look, I have two daughters who have not known a man; let me bring them out to you, and do to them as you please; only do nothing to these men, for they have come under the shelter of my roof."
[19:9] But they replied, "Stand back!" And they said, "This fellow came here as an alien, and he would play the judge! Now we will deal worse with you than with them." Then they pressed hard against the man Lot, and came near the door to break it down.
[19:10] But the men inside reached out their hands and brought Lot into the house with them, and shut the door.
[19:11] And they struck with blindness the men who were at the door of the house, both small and great, so that they were unable to find the door.
[19:12] Then the men said to Lot, "Have you anyone else here? Sons-in- law, sons, daughters, or anyone you have in the city - bring them out of the place.
[19:13] For we are about to destroy this place, because the outcry against its people has become great before the LORD, and the LORD has sent us to destroy it."
[19:14] So Lot went out and said to his sons-in-law, who were to marry his daughters, "Up, get out of this place; for the LORD is about to destroy the city." But he seemed to his sons-in-law to be jesting.
[19:15] When morning dawned, the angels urged Lot, saying, "Get up, take your wife and your two daughters who are here, or else you will be consumed in the punishment of the city."
[19:16] But he lingered; so the men seized him and his wife and his two daughters by the hand, the LORD being merciful to him, and they brought him out and left him outside the city.
[19:17] When they had brought them outside, they said, "Flee for your life; do not look back or stop anywhere in the Plain; flee to the hills, or else you will be consumed."
[19:18] And Lot said to them, "Oh, no, my lords;
[19:19] your servant has found favor with you, and you have shown me great kindness in saving my life; but I cannot flee to the hills, for fear the disaster will overtake me and I die.
[19:20] Look, that city is near enough to flee to, and it is a little one. Let me escape there - is it not a little one?- and my life will be saved!"
[19:21] He said to him, "Very well, I grant you this favor too, and will not overthrow the city of which you have spoken.
[19:22] Hurry, escape there, for I can do nothing until you arrive there." Therefore the city was called Zoar.
[19:23] The sun had risen on the earth when Lot came to Zoar.
[19:24] Then the LORD rained on Sodom and Gomorrah sulfur and fire from the LORD out of heaven;
[19:25] and he overthrew those cities, and all the Plain, and all the inhabitants of the cities, and what grew on the ground.
[19:26] But Lot''s wife, behind him, looked back, and she became a pillar of salt.
[19:27] Abraham went early in the morning to the place where he had stood before the LORD;
[19:28] and he looked down toward Sodom and Gomorrah and toward all the land of the Plain and saw the smoke of the land going up like the smoke of a furnace.
[19:29] So it was that, when God destroyed the cities of the Plain, God remembered Abraham, and sent Lot out of the midst of the overthrow, when he overthrew the cities in which Lot had settled.
[19:30] Now Lot went up out of Zoar and settled in the hills with his two daughters, for he was afraid to stay in Zoar; so he lived in a cave with his two daughters.
[19:31] And the firstborn said to the younger, "Our father is old, and there is not a man on earth to come in to us after the manner of all the world.
[19:32] Come, let us make our father drink wine, and we will lie with him, so that we may preserve offspring through our father."
[19:33] So they made their father drink wine that night; and the firstborn went in, and lay with her father; he did not know when she lay down or when she rose.
[19:34] On the next day, the firstborn said to the younger, "Look, I lay last night with my father; let us make him drink wine tonight also; then you go in and lie with him, so that we may preserve offspring through our father."
[19:35] So they made their father drink wine that night also; and the younger rose, and lay with him; and he did not know when she lay down or when she rose.
[19:36] Thus both the daughters of Lot became pregnant by their father.
[19:37] The firstborn bore a son, and named him Moab; he is the ancestor of the Moabites to this day.
[19:38] The younger also bore a son and named him Ben-ammi; he is the ancestor of the Ammonites to this day.

Chapter 20

[20:1] From there Abraham journeyed toward the region of the Negeb, and settled between Kadesh and Shur. While residing in Gerar as an alien,
[20:2] Abraham said of his wife Sarah, "She is my sister." And King Abimelech of Gerar sent and took Sarah.
[20:3] But God came to Abimelech in a dream by night, and said to him, "You are about to die because of the woman whom you have taken; for she is a married woman."
[20:4] Now Abimelech had not approached her; so he said, "Lord, will you destroy an innocent people?
[20:5] Did he not himself say to me, ''She is my sister''? And she herself said, ''He is my brother.'' I did this in the integrity of my heart and the innocence of my hands."
[20:6] Then God said to him in the dream, "Yes, I know that you did this in the integrity of your heart; furthermore it was I who kept you from sinning against me. Therefore I did not let you touch her.
[20:7] Now then, return the man''s wife; for he is a prophet, and he will pray for you and you shall live. But if you do not restore her, know that you shall surely die, you and all that are yours."
[20:8] So Abimelech rose early in the morning, and called all his servants and told them all these things; and the men were very much afraid.
[20:9] Then Abimelech called Abraham, and said to him, "What have you done to us? How have I sinned against you, that you have brought such great guilt on me and my kingdom? You have done things to me that ought not to be done."
[20:10] And Abimelech said to Abraham, "What were you thinking of, that you did this thing?"
[20:11] Abraham said, "I did it because I thought, There is no fear of God at all in this place, and they will kill me because of my wife.
[20:12] Besides, she is indeed my sister, the daughter of my father but not the daughter of my mother; and she became my wife.
[20:13] And when God caused me to wander from my father''s house, I said to her, ''This is the kindness you must do me: at every place to which we come, say of me, He is my brother.''"
[20:14] Then Abimelech took sheep and oxen, and male and female slaves, and gave them to Abraham, and restored his wife Sarah to him.
[20:15] Abimelech said, "My land is before you; settle where it pleases you."
[20:16] To Sarah he said, "Look, I have given your brother a thousand pieces of silver; it is your exoneration before all who are with you; you are completely vindicated."
[20:17] Then Abraham prayed to God; and God healed Abimelech, and also healed his wife and female slaves so that they bore children.
[20:18] For the LORD had closed fast all the wombs of the house of Abimelech because of Sarah, Abraham''s wife.

Chapter 21

[21:1] The LORD dealt with Sarah as he had said, and the LORD did for Sarah as he had promised.
[21:2] Sarah conceived and bore Abraham a son in his old age, at the time of which God had spoken to him.
[21:3] Abraham gave the name Isaac to his son whom Sarah bore him.
[21:4] And Abraham circumcised his son Isaac when he was eight days old, as God had commanded him.
[21:5] Abraham was a hundred years old when his son Isaac was born to him.
[21:6] Now Sarah said, "God has brought laughter for me; everyone who hears will laugh with me."
[21:7] And she said, "Who would ever have said to Abraham that Sarah would nurse children? Yet I have borne him a son in his old age."
[21:8] The child grew, and was weaned; and Abraham made a great feast on the day that Isaac was weaned.
[21:9] But Sarah saw the son of Hagar the Egyptian, whom she had borne to Abraham, playing with her son Isaac.
[21:10] So she said to Abraham, "Cast out this slave woman with her son; for the son of this slave woman shall not inherit along with my son Isaac."
[21:11] The matter was very distressing to Abraham on account of his son.
[21:12] But God said to Abraham, "Do not be distressed because of the boy and because of your slave woman; whatever Sarah says to you, do as she tells you, for it is through Isaac that offspring shall be named for you.
[21:13] As for the son of the slave woman, I will make a nation of him also, because he is your offspring."
[21:14] So Abraham rose early in the morning, and took bread and a skin of water, and gave it to Hagar, putting it on her shoulder, along with the child, and sent her away. And she departed, and wandered about in the wilderness of Beer-sheba.
[21:15] When the water in the skin was gone, she cast the child under one of the bushes.
[21:16] Then she went and sat down opposite him a good way off, about the distance of a bowshot; for she said, "Do not let me look on the death of the child." And as she sat opposite him, she lifted up her voice and wept.
[21:17] And God heard the voice of the boy; and the angel of God called to Hagar from heaven, and said to her, "What troubles you, Hagar? Do not be afraid; for God has heard the voice of the boy where he is.
[21:18] Come, lift up the boy and hold him fast with your hand, for I will make a great nation of him."
[21:19] Then God opened her eyes and she saw a well of water. She went, and filled the skin with water, and gave the boy a drink.
[21:20] God was with the boy, and he grew up; he lived in the wilderness, and became an expert with the bow.
[21:21] He lived in the wilderness of Paran; and his mother got a wife for him from the land of Egypt.
[21:22] At that time Abimelech, with Phicol the commander of his army, said to Abraham, "God is with you in all that you do;
[21:23] now therefore swear to me here by God that you will not deal falsely with me or with my offspring or with my posterity, but as I have dealt loyally with you, you will deal with me and with the land where you have resided as an alien."
[21:24] And Abraham said, "I swear it."
[21:25] When Abraham complained to Abimelech about a well of water that Abimelech''s servants had seized,
[21:26] Abimelech said, "I do not know who has done this; you did not tell me, and I have not heard of it until today."
[21:27] So Abraham took sheep and oxen and gave them to Abimelech, and the two men made a covenant.
[21:28] Abraham set apart seven ewe lambs of the flock.
[21:29] And Abimelech said to Abraham, "What is the meaning of these seven ewe lambs that you have set apart?"
[21:30] He said, "These seven ewe lambs you shall accept from my hand, in order that you may be a witness for me that I dug this well."
[21:31] Therefore that place was called Beer-sheba; because there both of them swore an oath.
[21:32] When they had made a covenant at Beer-sheba, Abimelech, with Phicol the commander of his army, left and returned to the land of the Philistines.
[21:33] Abraham planted a tamarisk tree in Beer-sheba, and called there on the name of the LORD, the Everlasting God.
[21:34] And Abraham resided as an alien many days in the land of the Philistines.

Chapter 22

[22:1] After these things God tested Abraham. He said to him, "Abraham!" And he said, "Here I am."
[22:2] He said, "Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains that I shall show you."
[22:3] So Abraham rose early in the morning, saddled his donkey, and took two of his young men with him, and his son Isaac; he cut the wood for the burnt offering, and set out and went to the place in the distance that God had shown him.
[22:4] On the third day Abraham looked up and saw the place far away.
[22:5] Then Abraham said to his young men, "Stay here with the donkey; the boy and I will go over there; we will worship, and then we will come back to you."
[22:6] Abraham took the wood of the burnt offering and laid it on his son Isaac, and he himself carried the fire and the knife. So the two of them walked on together.
[22:7] Isaac said to his father Abraham, "Father!" And he said, "Here I am, my son." He said, "The fire and the wood are here, but where is the lamb for a burnt offering?"
[22:8] Abraham said, "God himself will provide the lamb for a burnt offering, my son." So the two of them walked on together.
[22:9] When they came to the place that God had shown him, Abraham built an altar there and laid the wood in order. He bound his son Isaac, and laid him on the altar, on top of the wood.
[22:10] Then Abraham reached out his hand and took the knife to kill his son.
[22:11] But the angel of the LORD called to him from heaven, and said, "Abraham, Abraham!" And he said, "Here I am."
[22:12] He said, "Do not lay your hand on the boy or do anything to him; for now I know that you fear God, since you have not withheld your son, your only son, from me."
[22:13] And Abraham looked up and saw a ram, caught in a thicket by its horns. Abraham went and took the ram and offered it up as a burnt offering instead of his son.
[22:14] So Abraham called that place "The LORD will provide"; as it is said to this day, "On the mount of the LORD it shall be provided."
[22:15] The angel of the LORD called to Abraham a second time from heaven,
[22:16] and said, "By myself I have sworn, says the LORD: Because you have done this, and have not withheld your son, your only son,
[22:17] I will indeed bless you, and I will make your offspring as numerous as the stars of heaven and as the sand that is on the seashore. And your offspring shall possess the gate of their enemies,
[22:18] and by your offspring shall all the nations of the earth gain blessing for themselves, because you have obeyed my voice."
[22:19] So Abraham returned to his young men, and they arose and went together to Beer-sheba; and Abraham lived at Beer-sheba.
[22:20] Now after these things it was told Abraham, "Milcah also has borne children, to your brother Nahor:
[22:21] Uz the firstborn, Buz his brother, Kemuel the father of Aram,
[22:22] Chesed, Hazo, Pildash, Jidlaph, and Bethuel."
[22:23] Bethuel became the father of Rebekah. These eight Milcah bore to Nahor, Abraham''s brother.
[22:24] Moreover, his concubine, whose name was Reumah, bore Tebah, Gaham, Tahash, and Maacah.

Chapter 23

[23:1] Sarah lived one hundred twenty-seven years; this was the length of Sarah''s life.
[23:2] And Sarah died at Kiriath-arba (that is, Hebron) in the land of Canaan; and Abraham went in to mourn for Sarah and to weep for her.
[23:3] Abraham rose up from beside his dead, and said to the Hittites,
[23:4] "I am a stranger and an alien residing among you; give me property among you for a burying place, so that I may bury my dead out of my sight."
[23:5] The Hittites answered Abraham,
[23:6] "Hear us, my lord; you are a mighty prince among us. Bury your dead in the choicest of our burial places; none of us will withhold from you any burial ground for burying your dead."
[23:7] Abraham rose and bowed to the Hittites, the people of the land.
[23:8] He said to them, "If you are willing that I should bury my dead out of my sight, hear me, and entreat for me Ephron son of Zohar,
[23:9] so that he may give me the cave of Machpelah, which he owns; it is at the end of his field. For the full price let him give it to me in your presence as a possession for a burying place."
[23:10] Now Ephron was sitting among the Hittites; and Ephron the Hittite answered Abraham in the hearing of the Hittites, of all who went in at the gate of his city,
[23:11] "No, my lord, hear me; I give you the field, and I give you the cave that is in it; in the presence of my people I give it to you; bury your dead."
[23:12] Then Abraham bowed down before the people of the land.
[23:13] He said to Ephron in the hearing of the people of the land, "If you only will listen to me! I will give the price of the field; accept it from me, so that I may bury my dead there."
[23:14] Ephron answered Abraham,
[23:15] "My lord, listen to me; a piece of land worth four hundred shekels of silver - what is that between you and me? Bury your dead."
[23:16] Abraham agreed with Ephron; and Abraham weighed out for Ephron the silver that he had named in the hearing of the Hittites, four hundred shekels of silver, according to the weights current among the merchants.
[23:17] So the field of Ephron in Machpelah, which was to the east of Mamre, the field with the cave that was in it and all the trees that were in the field, throughout its whole area, passed
[23:18] to Abraham as a possession in the presence of the Hittites, in the presence of all who went in at the gate of his city.
[23:19] After this, Abraham buried Sarah his wife in the cave of the field of Machpelah facing Mamre (that is, Hebron) in the land of Canaan.
[23:20] The field and the cave that is in it passed from the Hittites into Abraham''s possession as a burying place.

Chapter 24

[24:1] Now Abraham was old, well advanced in years; and the LORD had blessed Abraham in all things.
[24:2] Abraham said to his servant, the oldest of his house, who had charge of all that he had, "Put your hand under my thigh
[24:3] and I will make you swear by the LORD, the God of heaven and earth, that you will not get a wife for my son from the daughters of the Canaanites, among whom I live,
[24:4] but will go to my country and to my kindred and get a wife for my son Isaac."
[24:5] The servant said to him, "Perhaps the woman may not be willing to follow me to this land; must I then take your son back to the land from which you came?"
[24:6] Abraham said to him, "See to it that you do not take my son back there.
[24:7] The LORD, the God of heaven, who took me from my father''s house and from the land of my birth, and who spoke to me and swore to me, ''To your offspring I will give this land,'' he will send his angel before you, and you shall take a wife for my son from there.
[24:8] But if the woman is not willing to follow you, then you will be free from this oath of mine; only you must not take my son back there."
[24:9] So the servant put his hand under the thigh of Abraham his master and swore to him concerning this matter.
[24:10] Then the servant took ten of his master''s camels and departed, taking all kinds of choice gifts from his master; and he set out and went to Aram-naharaim, to the city of Nahor.
[24:11] He made the camels kneel down outside the city by the well of water; it was toward evening, the time when women go out to draw water.
[24:12] And he said, "O LORD, God of my master Abraham, please grant me success today and show steadfast love to my master Abraham.
[24:13] I am standing here by the spring of water, and the daughters of the townspeople are coming out to draw water.
[24:14] Let the girl to whom I shall say, ''Please offer your jar that I may drink,'' and who shall say, ''Drink, and I will water your camels'' - let her be the one whom you have appointed for your servant Isaac. By this I shall know that you have shown steadfast love to my master."
[24:15] Before he had finished speaking, there was Rebekah, who was born to Bethuel son of Milcah, the wife of Nahor, Abraham''s brother, coming out with her water jar on her shoulder.
[24:16] The girl was very fair to look upon, a virgin, whom no man had known. She went down to the spring, filled her jar, and came up.
[24:17] Then the servant ran to meet her and said, "Please let me sip a little water from your jar."
[24:18] "Drink, my lord," she said, and quickly lowered her jar upon her hand and gave him a drink.
[24:19] When she had finished giving him a drink, she said, "I will draw for your camels also, until they have finished drinking."
[24:20] So she quickly emptied her jar into the trough and ran again to the well to draw, and she drew for all his camels.
[24:21] The man gazed at her in silence to learn whether or not the LORD had made his journey successful.
[24:22] When the camels had finished drinking, the man took a gold nose- ring weighing a half shekel, and two bracelets for her arms weighing ten gold shekels,
[24:23] and said, "Tell me whose daughter you are. Is there room in your father''s house for us to spend the night?"
[24:24] She said to him, "I am the daughter of Bethuel son of Milcah, whom she bore to Nahor."
[24:25] She added, "We have plenty of straw and fodder and a place to spend the night."
[24:26] The man bowed his head and worshiped the LORD
[24:27] and said, "Blessed be the LORD, the God of my master Abraham, who has not forsaken his steadfast love and his faithfulness toward my master. As for me, the LORD has led me on the way to the house of my master''s kin."
[24:28] Then the girl ran and told her mother''s household about these things.
[24:29] Rebekah had a brother whose name was Laban; and Laban ran out to the man, to the spring.
[24:30] As soon as he had seen the nose-ring, and the bracelets on his sister''s arms, and when he heard the words of his sister Rebekah, "Thus the man spoke to me," he went to the man; and there he was, standing by the camels at the spring.
[24:31] He said, "Come in, O blessed of the LORD. Why do you stand outside when I have prepared the house and a place for the camels?"
[24:32] So the man came into the house; and Laban unloaded the camels, and gave him straw and fodder for the camels, and water to wash his feet and the feet of the men who were with him.
[24:33] Then food was set before him to eat; but he said, "I will not eat until I have told my errand." He said, "Speak on."
[24:34] So he said, "I am Abraham''s servant.
[24:35] The LORD has greatly blessed my master, and he has become wealthy; he has given him flocks and herds, silver and gold, male and female slaves, camels and donkeys.
[24:36] And Sarah my master''s wife bore a son to my master when she was old; and he has given him all that he has.
[24:37] My master made me swear, saying, ''You shall not take a wife for my son from the daughters of the Canaanites, in whose land I live;
[24:38] but you shall go to my father''s house, to my kindred, and get a wife for my son.''
[24:39] I said to my master, ''Perhaps the woman will not follow me.''
[24:40] But he said to me, ''The LORD, before whom I walk, will send his angel with you and make your way successful. You shall get a wife for my son from my kindred, from my father''s house.
[24:41] Then you will be free from my oath, when you come to my kindred; even if they will not give her to you, you will be free from my oath.''
[24:42] "I came today to the spring, and said, ''O LORD, the God of my master Abraham, if now you will only make successful the way I am going!
[24:43] I am standing here by the spring of water; let the young woman who comes out to draw, to whom I shall say, "Please give me a little water from your jar to drink,"
[24:44] and who will say to me, "Drink, and I will draw for your camels also"- let her be the woman whom the LORD has appointed for my master''s son.''
[24:45] "Before I had finished speaking in my heart, there was Rebekah coming out with her water jar on her shoulder; and she went down to the spring, and drew. I said to her, ''Please let me drink.''
[24:46] She quickly let down her jar from her shoulder, and said, ''Drink, and I will also water your camels.'' So I drank, and she also watered the camels.
[24:47] Then I asked her, ''Whose daughter are you?'' She said, ''The daughter of Bethuel, Nahor''s son, whom Milcah bore to him.'' So I put the ring on her nose, and the bracelets on her arms.
[24:48] Then I bowed my head and worshiped the LORD, and blessed the LORD, the God of my master Abraham, who had led me by the right way to obtain the daughter of my master''s kinsman for his son.
[24:49] Now then, if you will deal loyally and truly with my master, tell me; and if not, tell me, so that I may turn either to the right hand or to the left."
[24:50] Then Laban and Bethuel answered, "The thing comes from the LORD; we cannot speak to you anything bad or good.
[24:51] Look, Rebekah is before you, take her and go, and let her be the wife of your master''s son, as the LORD has spoken."
[24:52] When Abraham''s servant heard their words, he bowed himself to the ground before the LORD.
[24:53] And the servant brought out jewelry of silver and of gold, and garments, and gave them to Rebekah; he also gave to her brother and to her mother costly ornaments.
[24:54] Then he and the men who were with him ate and drank, and they spent the night there. When they rose in the morning, he said, "Send me back to my master."
[24:55] Her brother and her mother said, "Let the girl remain with us a while, at least ten days; after that she may go."
[24:56] But he said to them, "Do not delay me, since the LORD has made my journey successful; let me go that I may go to my master."
[24:57] They said, "We will call the girl, and ask her."
[24:58] And they called Rebekah, and said to her, "Will you go with this man?" She said, "I will."
[24:59] So they sent away their sister Rebekah and her nurse along with Abraham''s servant and his men.
[24:60] And they blessed Rebekah and said to her, "May you, our sister, become thousands of myriads; may your offspring gain possession of the gates of their foes."
[24:61] Then Rebekah and her maids rose up, mounted the camels, and followed the man; thus the servant took Rebekah, and went his way.
[24:62] Now Isaac had come from Beer-lahai-roi, and was settled in the Negeb.
[24:63] Isaac went out in the evening to walk in the field; and looking up, he saw camels coming.
[24:64] And Rebekah looked up, and when she saw Isaac, she slipped quickly from the camel,
[24:65] and said to the servant, "Who is the man over there, walking in the field to meet us?" The servant said, "It is my master." So she took her veil and covered herself.
[24:66] And the servant told Isaac all the things that he had done.
[24:67] Then Isaac brought her into his mother Sarah''s tent. He took Rebekah, and she became his wife; and he loved her. So Isaac was comforted after his mother''s death.

Chapter 25

[25:1] Abraham took another wife, whose name was Keturah.
[25:2] She bore him Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah.
[25:3] Jokshan was the father of Sheba and Dedan. The sons of Dedan were Asshurim, Letushim, and Leummim.
[25:4] The sons of Midian were Ephah, Epher, Hanoch, Abida, and Eldaah. All these were the children of Keturah.
[25:5] Abraham gave all he had to Isaac.
[25:6] But to the sons of his concubines Abraham gave gifts, while he was still living, and he sent them away from his son Isaac, eastward to the east country.
[25:7] This is the length of Abraham''s life, one hundred seventy-five years.
[25:8] Abraham breathed his last and died in a good old age, an old man and full of years, and was gathered to his people.
[25:9] His sons Isaac and Ishmael buried him in the cave of Machpelah, in the field of Ephron son of Zohar the Hittite, east of Mamre,
[25:10] the field that Abraham purchased from the Hittites. There Abraham was buried, with his wife Sarah.
[25:11] After the death of Abraham God blessed his son Isaac. And Isaac settled at Beer-lahai-roi.
[25:12] These are the descendants of Ishmael, Abraham''s son, whom Hagar the Egyptian, Sarah''s slave-girl, bore to Abraham.
[25:13] These are the names of the sons of Ishmael, named in the order of their birth: Nebaioth, the firstborn of Ishmael; and Kedar, Adbeel, Mibsam,
[25:14] Mishma, Dumah, Massa,
[25:15] Hadad, Tema, Jetur, Naphish, and Kedemah.
[25:16] These are the sons of Ishmael and these are their names, by their villages and by their encampments, twelve princes according to their tribes.
[25:17] (This is the length of the life of Ishmael, one hundred thirty- seven years; he breathed his last and died, and was gathered to his people.)
[25:18] They settled from Havilah to Shur, which is opposite Egypt in the direction of Assyria; he settled down alongside of all his people.
[25:19] These are the descendants of Isaac, Abraham''s son: Abraham was the father of Isaac,
[25:20] and Isaac was forty years old when he married Rebekah, daughter of Bethuel the Aramean of Paddan-aram, sister of Laban the Aramean.
[25:21] Isaac prayed to the LORD for his wife, because she was barren; and the LORD granted his prayer, and his wife Rebekah conceived.
[25:22] The children struggled together within her; and she said, "If it is to be this way, why do I live?" So she went to inquire of the LORD.
[25:23] And the LORD said to her, "Two nations are in your womb, and two peoples born of you shall be divided; the one shall be stronger than the other, the elder shall serve the younger."
[25:24] When her time to give birth was at hand, there were twins in her womb.
[25:25] The first came out red, all his body like a hairy mantle; so they named him Esau.
[25:26] Afterward his brother came out, with his hand gripping Esau''s heel; so he was named Jacob. Isaac was sixty years old when she bore them.
[25:27] When the boys grew up, Esau was a skillful hunter, a man of the field, while Jacob was a quiet man, living in tents.
[25:28] Isaac loved Esau, because he was fond of game; but Rebekah loved Jacob.
[25:29] Once when Jacob was cooking a stew, Esau came in from the field, and he was famished.
[25:30] Esau said to Jacob, "Let me eat some of that red stuff, for I am famished!" (Therefore he was called Edom.)
[25:31] Jacob said, "First sell me your birthright."
[25:32] Esau said, "I am about to die; of what use is a birthright to me?"
[25:33] Jacob said, "Swear to me first." So he swore to him, and sold his birthright to Jacob.
[25:34] Then Jacob gave Esau bread and lentil stew, and he ate and drank, and rose and went his way. Thus Esau despised his birthright.

Chapter 26

[26:1] Now there was a famine in the land, besides the former famine that had occurred in the days of Abraham. And Isaac went to Gerar, to King Abimelech of the Philistines.
[26:2] The LORD appeared to Isaac and said, "Do not go down to Egypt; settle in the land that I shall show you.
[26:3] Reside in this land as an alien, and I will be with you, and will bless you; for to you and to your descendants I will give all these lands, and I will fulfill the oath that I swore to your father Abraham.
[26:4] I will make your offspring as numerous as the stars of heaven, and will give to your offspring all these lands; and all the nations of the earth shall gain blessing for themselves through your offspring,
[26:5] because Abraham obeyed my voice and kept my charge, my commandments, my statutes, and my laws."
[26:6] So Isaac settled in Gerar.
[26:7] When the men of the place asked him about his wife, he said, "She is my sister"; for he was afraid to say, "My wife," thinking, "or else the men of the place might kill me for the sake of Rebekah, because she is attractive in appearance."
[26:8] When Isaac had been there a long time, King Abimelech of the Philistines looked out of a window and saw him fondling his wife Rebekah.
[26:9] So Abimelech called for Isaac, and said, "So she is your wife! Why then did you say, ''She is my sister''?" Isaac said to him, "Because I thought I might die because of her."
[26:10] Abimelech said, "What is this you have done to us? One of the people might easily have lain with your wife, and you would have brought guilt upon us."
[26:11] So Abimelech warned all the people, saying, "Whoever touches this man or his wife shall be put to death."
[26:12] Isaac sowed seed in that land, and in the same year reaped a hundredfold. The LORD blessed him,
[26:13] and the man became rich; he prospered more and more until he became very wealthy.
[26:14] He had possessions of flocks and herds, and a great household, so that the Philistines envied him.
[26:15] (Now the Philistines had stopped up and filled with earth all the wells that his father''s servants had dug in the days of his father Abraham.)
[26:16] And Abimelech said to Isaac, "Go away from us; you have become too powerful for us."
[26:17] So Isaac departed from there and camped in the valley of Gerar and settled there.
[26:18] Isaac dug again the wells of water that had been dug in the days of his father Abraham; for the Philistines had stopped them up after the death of Abraham; and he gave them the names that his father had given them.
[26:19] But when Isaac''s servants dug in the valley and found there a well of spring water,
[26:20] the herders of Gerar quarreled with Isaac''s herders, saying, "The water is ours." So he called the well Esek, because they contended with him.
[26:21] Then they dug another well, and they quarreled over that one also; so he called it Sitnah.
[26:22] He moved from there and dug another well, and they did not quarrel over it; so he called it Rehoboth, saying, "Now the LORD has made room for us, and we shall be fruitful in the land."
[26:23] From there he went up to Beer-sheba.
[26:24] And that very night the LORD appeared to him and said, "I am the God of your father Abraham; do not be afraid, for I am with you and will bless you and make your offspring numerous for my servant Abraham''s sake."
[26:25] So he built an altar there, called on the name of the LORD, and pitched his tent there. And there Isaac''s servants dug a well.
[26:26] Then Abimelech went to him from Gerar, with Ahuzzath his adviser and Phicol the commander of his army.
[26:27] Isaac said to them, "Why have you come to me, seeing that you hate me and have sent me away from you?"
[26:28] They said, "We see plainly that the LORD has been with you; so we say, let there be an oath between you and us, and let us make a covenant with you
[26:29] so that you will do us no harm, just as we have not touched you and have done to you nothing but good and have sent you away in peace. You are now the blessed of the LORD."
[26:30] So he made them a feast, and they ate and drank.
[26:31] In the morning they rose early and exchanged oaths; and Isaac set them on their way, and they departed from him in peace.
[26:32] That same day Isaac''s servants came and told him about the well that they had dug, and said to him, "We have found water!"
[26:33] He called it Shibah; therefore the name of the city is Beer- sheba to this day.
[26:34] When Esau was forty years old, he married Judith daughter of Beeri the Hittite, and Basemath daughter of Elon the Hittite;
[26:35] and they made life bitter for Isaac and Rebekah.

Chapter 27

[27:1] When Isaac was old and his eyes were dim so that he could not see, he called his elder son Esau and said to him, "My son"; and he answered, "Here I am."
[27:2] He said, "See, I am old; I do not know the day of my death.
[27:3] Now then, take your weapons, your quiver and your bow, and go out to the field, and hunt game for me.
[27:4] Then prepare for me savory food, such as I like, and bring it to me to eat, so that I may bless you before I die."
[27:5] Now Rebekah was listening when Isaac spoke to his son Esau. So when Esau went to the field to hunt for game and bring it,
[27:6] Rebekah said to her son Jacob, "I heard your father say to your brother Esau,
[27:7] ''Bring me game, and prepare for me savory food to eat, that I may bless you before the LORD before I die.''
[27:8] Now therefore, my son, obey my word as I command you.
[27:9] Go to the flock, and get me two choice kids, so that I may prepare from them savory food for your father, such as he likes;
[27:10] and you shall take it to your father to eat, so that he may bless you before he dies."
[27:11] But Jacob said to his mother Rebekah, "Look, my brother Esau is a hairy man, and I am a man of smooth skin.
[27:12] Perhaps my father will feel me, and I shall seem to be mocking him, and bring a curse on myself and not a blessing."
[27:13] His mother said to him, "Let your curse be on me, my son; only obey my word, and go, get them for me."
[27:14] So he went and got them and brought them to his mother; and his mother prepared savory food, such as his father loved.
[27:15] Then Rebekah took the best garments of her elder son Esau, which were with her in the house, and put them on her younger son Jacob;
[27:16] and she put the skins of the kids on his hands and on the smooth part of his neck.
[27:17] Then she handed the savory food, and the bread that she had prepared, to her son Jacob.
[27:18] So he went in to his father, and said, "My father"; and he said, "Here I am; who are you, my son?"
[27:19] Jacob said to his father, "I am Esau your firstborn. I have done as you told me; now sit up and eat of my game, so that you may bless me."
[27:20] But Isaac said to his son, "How is it that you have found it so quickly, my son?" He answered, "Because the LORD your God granted me success."
[27:21] Then Isaac said to Jacob, "Come near, that I may feel you, my son, to know whether you are really my son Esau or not."
[27:22] So Jacob went up to his father Isaac, who felt him and said, "The voice is Jacob''s voice, but the hands are the hands of Esau."
[27:23] He did not recognize him, because his hands were hairy like his brother Esau''s hands; so he blessed him.
[27:24] He said, "Are you really my son Esau?" He answered, "I am."
[27:25] Then he said, "Bring it to me, that I may eat of my son''s game and bless you." So he brought it to him, and he ate; and he brought him wine, and he drank.
[27:26] Then his father Isaac said to him, "Come near and kiss me, my son."
[27:27] So he came near and kissed him; and he smelled the smell of his garments, and blessed him, and said, "Ah, the smell of my son is like the smell of a field that the LORD has blessed.
[27:28] May God give you of the dew of heaven, and of the fatness of the earth, and plenty of grain and wine.
[27:29] Let peoples serve you, and nations bow down to you. Be lord over your brothers, and may your mother''s sons bow down to you. Cursed be everyone who curses you, and blessed be everyone who blesses you!"
[27:30] As soon as Isaac had finished blessing Jacob, when Jacob had scarcely gone out from the presence of his father Isaac, his brother Esau came in from his hunting.
[27:31] He also prepared savory food, and brought it to his father. And he said to his father, "Let my father sit up and eat of his son''s game, so that you may bless me."
[27:32] His father Isaac said to him, "Who are you?" He answered, "I am your firstborn son, Esau."
[27:33] Then Isaac trembled violently, and said, "Who was it then that hunted game and brought it to me, and I ate it all before you came, and I have blessed him? - yes, and blessed he shall be!"
[27:34] When Esau heard his father''s words, he cried out with an exceedingly great and bitter cry, and said to his father, "Bless me, me also, father!"
[27:35] But he said, "Your brother came deceitfully, and he has taken away your blessing."
[27:36] Esau said, "Is he not rightly named Jacob? For he has supplanted me these two times. He took away my birthright; and look, now he has taken away my blessing." Then he said, "Have you not reserved a blessing for me?"
[27:37] Isaac answered Esau, "I have already made him your lord, and I have given him all his brothers as servants, and with grain and wine I have sustained him. What then can I do for you, my son?"
[27:38] Esau said to his father, "Have you only one blessing, father? Bless me, me also, father!" And Esau lifted up his voice and wept.
[27:39] Then his father Isaac answered him: "See, away from the fatness of the earth shall your home be, and away from the dew of heaven on high.
[27:40] By your sword you shall live, and you shall serve your brother; but when you break loose, you shall break his yoke from your neck."
[27:41] Now Esau hated Jacob because of the blessing with which his father had blessed him, and Esau said to himself, "The days of mourning for my father are approaching; then I will kill my brother Jacob."
[27:42] But the words of her elder son Esau were told to Rebekah; so she sent and called her younger son Jacob and said to him, "Your brother Esau is consoling himself by planning to kill you.
[27:43] Now therefore, my son, obey my voice; flee at once to my brother Laban in Haran,
[27:44] and stay with him a while, until your brother''s fury turns away - 
[27:45] until your brother''s anger against you turns away, and he forgets what you have done to him; then I will send, and bring you back from there. Why should I lose both of you in one day?"
[27:46] Then Rebekah said to Isaac, "I am weary of my life because of the Hittite women. If Jacob marries one of the Hittite women such as these, one of the women of the land, what good will my life be to me?"', '2026-06-26 17:00:58.095', true, ${defaultUser.id})
RETURNING id, title
`
  );

  const discourse =  await prisma.$queryRawUnsafe(`INSERT INTO public.posts (title, content, posted_at, published, "ownerId") VALUES ('Discourse on the Method of Rightly Conducting one’s Reason and Seeking Truth in the Sciences', 'PART I
Good sense is, of all things among men, the most equally distributed; for every one thinks himself so abundantly provided with it, that those even who are the most difficult to satisfy in everything else, do not usually desire a larger measure of this quality than they already possess. And in this it is not likely that all are mistaken the conviction is rather to be held as testifying that the power of judging aright and of distinguishing truth from error, which is properly what is called good sense or reason, is by nature equal in all men; and that the diversity of our opinions, consequently, does not arise from some being endowed with a larger share of reason than others, but solely from this, that we conduct our thoughts along different ways, and do not fix our attention on the same objects. For to be possessed of a vigorous mind is not enough; the prime requisite is rightly to apply it. The greatest minds, as they are capable of the highest excellences, are open likewise to the greatest aberrations; and those who travel very slowly may yet make far greater progress, provided they keep always to the straight road, than those who, while they run, forsake it.
For myself, I have never fancied my mind to be in any respect more perfect than those of the generality; on the contrary, I have often wished that I were equal to some others in promptitude of thought, or in clearness and distinctness of imagination, or in fullness and readiness of memory. And besides these, I know of no other qualities that contribute to the perfection of the mind; for as to the reason or sense, inasmuch as it is that alone which constitutes us men, and distinguishes us from the brutes, I am disposed to believe that it is to be found complete in each individual; and on this point to adopt the common opinion of philosophers, who say that the difference of greater and less holds only among the accidents, and not among the forms or natures of individuals of the same species.
I will not hesitate, however, to avow my belief that it has been my singular good fortune to have very early in life fallen in with certain tracks which have conducted me to considerations and maxims, of which I have formed a method that gives me the means, as I think, of gradually augmenting my knowledge, and of raising it by little and little to the highest point which the mediocrity of my talents and the brief duration of my life will permit me to reach. For I have already reaped from it such fruits that, although I have been accustomed to think lowly enough of myself, and although when I look with the eye of a philosopher at the varied courses and pursuits of mankind at large, I find scarcely one which does not appear in vain and useless, I nevertheless derive the highest satisfaction from the progress I conceive myself to have already made in the search after truth, and cannot help entertaining such expectations of the future as to believe that if, among the occupations of men as men, there is any one really excellent and important, it is that which I have chosen.
After all, it is possible I may be mistaken; and it is but a little copper and glass, perhaps, that I take for gold and diamonds. I know how very liable we are to delusion in what relates to ourselves, and also how much the judgments of our friends are to be suspected when given in our favor. But I shall endeavor in this discourse to describe the paths I have followed, and to delineate my life as in a picture, in order that each one may also be able to judge of them for himself, and that in the general opinion entertained of them, as gathered from current report, I myself may have a new help towards instruction to be added to those I have been in the habit of employing.
My present design, then, is not to teach the method which each ought to follow for the right conduct of his reason, but solely to describe the way in which I have endeavored to conduct my own. They who set themselves to give precepts must of course regard themselves as possessed of greater skill than those to whom they prescribe; and if they err in the slightest particular, they subject themselves to censure. But as this tract is put forth merely as a history, or, if you will, as a tale, in which, amid some examples worthy of imitation, there will be found, perhaps, as many more which it were advisable not to follow, I hope it will prove useful to some without being hurtful to any, and that my openness will find some favor with all.
From my childhood, I have been familiar with letters; and as I was given to believe that by their help a clear and certain knowledge of all that is useful in life might be acquired, I was ardently desirous of instruction. But as soon as I had finished the entire course of study, at the close of which it is customary to be admitted into the order of the learned, I completely changed my opinion. For I found myself involved in so many doubts and errors, that I was convinced I had advanced no farther in all my attempts at learning, than the discovery at every turn of my own ignorance. And yet I was studying in one of the most celebrated schools in Europe, in which I thought there must be learned men, if such were anywhere to be found. I had been taught all that others learned there; and not contented with the sciences actually taught us, I had, in addition, read all the books that had fallen into my hands, treating of such branches as are esteemed the most curious and rare. I knew the judgment which others had formed of me; and I did not find that I was considered inferior to my fellows, although there were among them some who were already marked out to fill the places of our instructors. And, in fine, our age appeared to me as flourishing, and as fertile in powerful minds as any preceding one. I was thus led to take the liberty of judging of all other men by myself, and of concluding that there was no science in existence that was of such a nature as I had previously been given to believe.
I still continued, however, to hold in esteem the studies of the schools. I was aware that the languages taught in them are necessary to the understanding of the writings of the ancients; that the grace of fable stirs the mind; that the memorable deeds of history elevate it; and, if read with discretion, aid in forming the judgment; that the perusal of all excellent books is, as it were, to interview with the noblest men of past ages, who have written them, and even a studied interview, in which are discovered to us only their choicest thoughts; that eloquence has incomparable force and beauty; that poesy has its ravishing graces and delights; that in the mathematics there are many refined discoveries eminently suited to gratify the inquisitive, as well as further all the arts an lessen the labour of man; that numerous highly useful precepts and exhortations to virtue are contained in treatises on morals; that theology points out the path to heaven; that philosophy affords the means of discoursing with an appearance of truth on all matters, and commands the admiration of the more simple; that jurisprudence, medicine, and the other sciences, secure for their cultivators honors and riches; and, in fine, that it is useful to bestow some attention upon all, even upon those abounding the most in superstition and error, that we may be in a position to determine their real value, and guard against being deceived.
But I believed that I had already given sufficient time to languages, and likewise to the reading of the writings of the ancients, to their histories and fables. For to hold converse with those of other ages and to travel, are almost the same thing. It is useful to know something of the manners of different nations, that we may be enabled to form a more correct judgment regarding our own, and be prevented from thinking that everything contrary to our customs is ridiculous and irrational, a conclusion usually come to by those whose experience has been limited to their own country. On the other hand, when too much time is occupied in traveling, we become strangers to our native country; and the over curious in the customs of the past are generally ignorant of those of the present. Besides, fictitious narratives lead us to imagine the possibility of many events that are impossible; and even the most faithful histories, if they do not wholly misrepresent matters, or exaggerate their importance to render the account of them more worthy of perusal, omit, at least, almost always the meanest and least striking of the attendant circumstances; hence it happens that the remainder does not represent the truth, and that such as regulate their conduct by examples drawn from this source, are apt to fall into the extravagances of the knight-errants of romance, and to entertain projects that exceed their powers.
I esteemed eloquence highly, and was in raptures with poesy; but I thought that both were gifts of nature rather than fruits of study. Those in whom the faculty of reason is predominant, and who most skillfully dispose their thoughts with a view to render them clear and intelligible, are always the best able to persuade others of the truth of what they lay down, though they should speak only in the language of Lower Brittany, and be wholly ignorant of the rules of rhetoric; and those whose minds are stored with the most agreeable fancies, and who can give expression to them with the greatest embellishment and harmony, are still the best poets, though unacquainted with the art of poetry.
I was especially delighted with the mathematics, on account of the certitude and evidence of their reasonings; but I had not as yet a precise knowledge of their true use; and thinking that they but contributed to the advancement of the mechanical arts, I was astonished that foundations, so strong and solid, should have had no loftier superstructure reared on them. On the other hand, I compared the disquisitions of the ancient moralists to very towering and magnificent palaces with no better foundation than sand and mud: they laud the virtues very highly, and exhibit them as estimable far above anything on earth; but they give us no adequate criterion of virtue, and frequently that which they designate with so fine a name is but apathy, or pride, or despair, or parricide.
I revered our theology, and aspired as much as any one to reach heaven: but being given assuredly to understand that the way is not less open to the most ignorant than to the most learned, and that the revealed truths which lead to heaven are above our comprehension, I did not presume to subject them to the impotency of my reason; and I thought that in order competently to undertake their examination, there was need of some special help from heaven, and of being more than man.
Of philosophy I will say nothing, except that when I saw that it had been cultivated for many ages by the most distinguished men, and that yet there is not a single matter within its sphere which is not still in dispute, and nothing, therefore, which is above doubt, I did not presume to anticipate that my success would be greater in it than that of others; and further, when I considered the number of conflicting opinions touching a single matter that may be upheld by learned men, while there can be but one true, I reckoned as well-nigh false all that was only probable.
As to the other sciences, inasmuch as these borrow their principles from philosophy, I judged that no solid superstructures could be reared on foundations so infirm; and neither the honor nor the gain held out by them was sufficient to determine me to their cultivation: for I was not, thank Heaven, in a condition which compelled me to make merchandise of science for the bettering of my fortune; and though I might not profess to scorn glory as a cynic, I yet made very slight account of that honor which I hoped to acquire only through fictitious titles. And, in fine, of false sciences I thought I knew the worth sufficiently to escape being deceived by the professions of an alchemist, the predictions of an astrologer, the impostures of a magician, or by the artifices and boasting of any of those who profess to know things of which they are ignorant.
For these reasons, as soon as my age permitted me to pass from under the control of my instructors, I entirely abandoned the study of letters, and resolved no longer to seek any other science than the knowledge of myself, or of the great book of the world. I spent the remainder of my youth in traveling, in visiting courts and armies, in holding intercourse with men of different dispositions and ranks, in collecting varied experience, in proving myself in the different situations into which fortune threw me, and, above all, in making such reflection on the matter of my experience as to secure my improvement. For it occurred to me that I should find much more truth in the reasonings of each individual with reference to the affairs in which he is personally interested, and the issue of which must presently punish him if he has judged amiss, than in those conducted by a man of letters in his study, regarding speculative matters that are of no practical moment, and followed by no consequences to himself, farther, perhaps, than that they foster his vanity the better the more remote they are from common sense; requiring, as they must in this case, the exercise of greater ingenuity and art to render them probable. In addition, I had always a most earnest desire to know how to distinguish the true from the false, in order that I might be able clearly to discriminate the right path in life, and proceed in it with confidence.
It is true that, while busied only in considering the manners of other men, I found here, too, scarce any ground for settled conviction, and remarked hardly less contradiction among them than in the opinions of the philosophers. So that the greatest advantage I derived from the study consisted in this, that, observing many things which, however extravagant and ridiculous to our apprehension, are yet by common consent received and approved by other great nations, I learned to entertain too decided a belief in regard to nothing of the truth of which I had been persuaded merely by example and custom; and thus I gradually extricated myself from many errors powerful enough to darken our natural intelligence, and incapacitate us in great measure from listening to reason. But after I had been occupied several years in thus studying the book of the world, and in essaying to gather some experience, I at length resolved to make myself an object of study, and to employ all the powers of my mind in choosing the paths I ought to follow, an undertaking which was accompanied with greater success than it would have been had I never quitted my country or my books.
PART II
I was then in Germany, attracted thither by the wars in that country, which have not yet been brought to a termination; and as I was returning to the army from the coronation of the emperor, the setting in of winter arrested me in a locality where, as I found no society to interest me, and was besides fortunately undisturbed by any cares or passions, I remained the whole day in seclusion, with full opportunity to occupy my attention with my own thoughts. Of these one of the very first that occurred to me was, that there is seldom so much perfection in works composed of many separate parts, upon which different hands had been employed, as in those completed by a single master. Thus it is observable that the buildings which a single architect has planned and executed, are generally more elegant and commodious than those which several have attempted to improve, by making old walls serve for purposes for which they were not originally built. Thus also, those ancient cities which, from being at first only villages, have become, in course of time, large towns, are usually but ill laid out compared with the regularity constructed towns which a professional architect has freely planned on an open plain; so that although the several buildings of the former may often equal or surpass in beauty those of the latter, yet when one observes their indiscriminate juxtaposition, there a large one and here a small, and the consequent crookedness and irregularity of the streets, one is disposed to allege that chance rather than any human will guided by reason must have led to such an arrangement. And if we consider that nevertheless there have been at all times certain officers whose duty it was to see that private buildings contributed to public ornament, the difficulty of reaching high perfection with but the materials of others to operate on, will be readily acknowledged. In the same way I fancied that those nations which, starting from a semi-barbarous state and advancing to civilization by slow degrees, have had their laws successively determined, and, as it were, forced upon them simply by experience of the hurtfulness of particular crimes and disputes, would by this process come to be possessed of less perfect institutions than those which, from the commencement of their association as communities, have followed the appointments of some wise legislator. It is thus quite certain that the constitution of the true religion, the ordinances of which are derived from God, must be incomparably superior to that of every other. And, to speak of human affairs, I believe that the pre-eminence of Sparta was due not to the goodness of each of its laws in particular, for many of these were very strange, and even opposed to good morals, but to the circumstance that, originated by a single individual, they all tended to a single end. In the same way I thought that the sciences contained in books (such of them at least as are made up of probable reasonings, without demonstrations), composed as they are of the opinions of many different individuals massed together, are farther removed from truth than the simple inferences which a man of good sense using his natural and unprejudiced judgment draws respecting the matters of his experience. And because we have all to pass through a state of infancy to manhood, and have been of necessity, for a length of time, governed by our desires and preceptors (whose dictates were frequently conflicting, while neither perhaps always counseled us for the best), I farther concluded that it is almost impossible that our judgments can be so correct or solid as they would have been, had our reason been mature from the moment of our birth, and had we always been guided by it alone.
It is true, however, that it is not customary to pull down all the houses of a town with the single design of rebuilding them differently, and thereby rendering the streets more handsome; but it often happens that a private individual takes down his own with the view of erecting it anew, and that people are even sometimes constrained to this when their houses are in danger of falling from age, or when the foundations are insecure. With this before me by way of example, I was persuaded that it would indeed be preposterous for a private individual to think of reforming a state by fundamentally changing it throughout, and overturning it in order to set it up amended; and the same I thought was true of any similar project for reforming the body of the sciences, or the order of teaching them established in the schools: but as for the opinions which up to that time I had embraced, I thought that I could not do better than resolve at once to sweep them wholly away, that I might afterwards be in a position to admit either others more correct, or even perhaps the same when they had undergone the scrutiny of reason. I firmly believed that in this way I should much better succeed in the conduct of my life, than if I built only upon old foundations, and leaned upon principles which, in my youth, I had taken upon trust. For although I recognized various difficulties in this undertaking, these were not, however, without remedy, nor once to be compared with such as attend the slightest reformation in public affairs. Large bodies, if once overthrown, are with great difficulty set up again, or even kept erect when once seriously shaken, and the fall of such is always disastrous. Then if there are any imperfections in the constitutions of states (and that many such exist the diversity of constitutions is alone sufficient to assure us), custom has without doubt materially smoothed their inconveniences, and has even managed to steer altogether clear of, or insensibly corrected a number which sagacity could not have provided against with equal effect; and, in fine, the defects are almost always more tolerable than the change necessary for their removal; in the same manner that highways which wind among mountains, by being much frequented, become gradually so smooth and commodious, that it is much better to follow them than to seek a straighter path by climbing over the tops of rocks and descending to the bottoms of precipices.
Hence it is that I cannot in any degree approve of those restless and busy meddlers who, called neither by birth nor fortune to take part in the management of public affairs, are yet always projecting reforms; and if I thought that this tract contained aught which might justify the suspicion that I was a victim of such folly, I would by no means permit its publication. I have never contemplated anything higher than the reformation of my own opinions, and basing them on a foundation wholly my own. And although my own satisfaction with my work has led me to present here a draft of it, I do not by any means therefore recommend to every one else to make a similar attempt. Those whom God has endowed with a larger measure of genius will entertain, perhaps, designs still more exalted; but for the many I am much afraid lest even the present undertaking be more than they can safely venture to imitate. The single design to strip one’s self of all past beliefs is one that ought not to be taken by every one. The majority of men is composed of two classes, for neither of which would this be at all a befitting resolution: in the first place, of those who with more than a due confidence in their own powers, are precipitate in their judgments and want the patience requisite for orderly and circumspect thinking; whence it happens, that if men of this class once take the liberty to doubt of their accustomed opinions, and quit the beaten highway, they will never be able to thread the byway that would lead them by a shorter course, and will lose themselves and continue to wander for life; in the second place, of those who, possessed of sufficient sense or modesty to determine that there are others who excel them in the power of discriminating between truth and error, and by whom they may be instructed, ought rather to content themselves with the opinions of such than trust for more correct to their own reason.
For my own part, I should doubtless have belonged to the latter class, had I received instruction from but one master, or had I never known the diversities of opinion that from time immemorial have prevailed among men of the greatest learning. But I had become aware, even so early as during my college life, that no opinion, however absurd and incredible, can be imagined, which has not been maintained by some on of the philosophers; and afterwards in the course of my travels I remarked that all those whose opinions are decidedly repugnant to ours are not in that account barbarians and savages, but on the contrary that many of these nations make an equally good, if not better, use of their reason than we do. I took into account also the very different character which a person brought up from infancy in France or Germany exhibits, from that which, with the same mind originally, this individual would have possessed had he lived always among the Chinese or with savages, and the circumstance that in dress itself the fashion which pleased us ten years ago, and which may again, perhaps, be received into favor before ten years have gone, appears to us at this moment extravagant and ridiculous. I was thus led to infer that the ground of our opinions is far more custom and example than any certain knowledge. And, finally, although such be the ground of our opinions, I remarked that a plurality of suffrages is no guarantee of truth where it is at all of difficult discovery, as in such cases it is much more likely that it will be found by one than by many. I could, however, select from the crowd no one whose opinions seemed worthy of preference, and thus I found myself constrained, as it were, to use my own reason in the conduct of my life.
But like one walking alone and in the dark, I resolved to proceed so slowly and with such circumspection, that if I did not advance far, I would at least guard against falling. I did not even choose to dismiss summarily any of the opinions that had crept into my belief without having been introduced by reason, but first of all took sufficient time carefully to satisfy myself of the general nature of the task I was setting myself, and ascertain the true method by which to arrive at the knowledge of whatever lay within the compass of my powers.
Among the branches of philosophy, I had, at an earlier period, given some attention to logic, and among those of the mathematics to geometrical analysis and algebra,--three arts or sciences which ought, as I conceived, to contribute something to my design. But, on examination, I found that, as for logic, its syllogisms and the majority of its other precepts are of avail--rather in the communication of what we already know, or even as the art of Lully, in speaking without judgment of things of which we are ignorant, than in the investigation of the unknown; and although this science contains indeed a number of correct and very excellent precepts, there are, nevertheless, so many others, and these either injurious or superfluous, mingled with the former, that it is almost quite as difficult to effect a severance of the true from the false as it is to extract a Diana or a Minerva from a rough block of marble. Then as to the analysis of the ancients and the algebra of the moderns, besides that they embrace only matters highly abstract, and, to appearance, of no use, the former is so exclusively restricted to the consideration of figures, that it can exercise the understanding only on condition of greatly fatiguing the imagination; and, in the latter, there is so complete a subjection to certain rules and formulas, that there results an art full of confusion and obscurity calculated to embarrass, instead of a science fitted to cultivate the mind. By these considerations I was induced to seek some other method which would comprise the advantages of the three and be exempt from their defects. And as a multitude of laws often only hampers justice, so that a state is best governed when, with few laws, these are rigidly administered; in like manner, instead of the great number of precepts of which logic is composed, I believed that the four following would prove perfectly sufficient for me, provided I took the firm and unwavering resolution never in a single instance to fail in observing them.
The first was never to accept anything for true which I did not clearly know to be such; that is to say, carefully to avoid precipitancy and prejudice, and to comprise nothing more in my judgement than what was presented to my mind so clearly and distinctly as to exclude all ground of doubt.
The second, to divide each of the difficulties under examination into as many parts as possible, and as might be necessary for its adequate solution.
The third, to conduct my thoughts in such order that, by commencing with objects the simplest and easiest to know, I might ascend by little and little, and, as it were, step by step, to the knowledge of the more complex; assigning in thought a certain order even to those objects which in their own nature do not stand in a relation of antecedence and sequence.
And the last, in every case to make enumerations so complete, and reviews so general, that I might be assured that nothing was omitted.
The long chains of simple and easy reasonings by means of which geometers are accustomed to reach the conclusions of their most difficult demonstrations, had led me to imagine that all things, to the knowledge of which man is competent, are mutually connected in the same way, and that there is nothing so far removed from us as to be beyond our reach, or so hidden that we cannot discover it, provided only we abstain from accepting the false for the true, and always preserve in our thoughts the order necessary for the deduction of one truth from another. And I had little difficulty in determining the objects with which it was necessary to commence, for I was already persuaded that it must be with the simplest and easiest to know, and, considering that of all those who have hitherto sought truth in the sciences, the mathematicians alone have been able to find any demonstrations, that is, any certain and evident reasons, I did not doubt but that such must have been the rule of their investigations. I resolved to commence, therefore, with the examination of the simplest objects, not anticipating, however, from this any other advantage than that to be found in accustoming my mind to the love and nourishment of truth, and to a distaste for all such reasonings as were unsound. But I had no intention on that account of attempting to master all the particular sciences commonly denominated mathematics: but observing that, however different their objects, they all agree in considering only the various relations or proportions subsisting among those objects, I thought it best for my purpose to consider these proportions in the most general form possible, without referring them to any objects in particular, except such as would most facilitate the knowledge of them, and without by any means restricting them to these, that afterwards I might thus be the better able to apply them to every other class of objects to which they are legitimately applicable. Perceiving further, that in order to understand these relations I should sometimes have to consider them one by one and sometimes only to bear them in mind, or embrace them in the aggregate, I thought that, in order the better to consider them individually, I should view them as subsisting between straight lines, than which I could find no objects more simple, or capable of being more distinctly represented to my imagination and senses; and on the other hand, that in order to retain them in the memory or embrace an aggregate of many, I should express them by certain characters the briefest possible. In this way I believed that I could borrow all that was best both in geometrical analysis and in algebra, and correct all the defects of the one by help of the other.
And, in point of fact, the accurate observance of these few precepts gave me, I take the liberty of saying, such ease in unraveling all the questions embraced in these two sciences, that in the two or three months I devoted to their examination, not only did I reach solutions of questions I had formerly deemed exceedingly difficult but even as regards questions of the solution of which I continued ignorant, I was enabled, as it appeared to me, to determine the means whereby, and the extent to which a solution was possible; results attributable to the circumstance that I commenced with the simplest and most general truths, and that thus each truth discovered was a rule available in the discovery of subsequent ones Nor in this perhaps shall I appear too vain, if it be considered that, as the truth on any particular point is one whoever apprehends the truth, knows all that on that point can be known. The child, for example, who has been instructed in the elements of arithmetic, and has made a particular addition, according to rule, may be assured that he has found, with respect to the sum of the numbers before him, and that in this instance is within the reach of human genius. Now, in conclusion, the method which teaches adherence to the true order, and an exact enumeration of all the conditions of the thing sought includes all that gives certitude to the rules of arithmetic.
But the chief ground of my satisfaction with thus method, was the assurance I had of thereby exercising my reason in all matters, if not with absolute perfection, at least with the greatest attainable by me: besides, I was conscious that by its use my mind was becoming gradually habituated to clearer and more distinct conceptions of its objects; and I hoped also, from not having restricted this method to any particular matter, to apply it to the difficulties of the other sciences, with not less success than to those of algebra. I should not, however, on this account have ventured at once on the examination of all the difficulties of the sciences which presented themselves to me, for this would have been contrary to the order prescribed in the method, but observing that the knowledge of such is dependent on principles borrowed from philosophy, in which I found nothing certain, I thought it necessary first of all to endeavor to establish its principles. And because I observed, besides, that an inquiry of this kind was of all others of the greatest moment, and one in which precipitancy and anticipation in judgment were most to be dreaded, I thought that I ought not to approach it till I had reached a more mature age (being at that time but twenty-three), and had first of all employed much of my time in preparation for the work, as well by eradicating from my mind all the erroneous opinions I had up to that moment accepted, as by amassing variety of experience to afford materials for my reasonings, and by continually exercising myself in my chosen method with a view to increased skill in its application.
PART III
And finally, as it is not enough, before commencing to rebuild the house in which we live, that it be pulled down, and materials and builders provided, or that we engage in the work ourselves, according to a plan which we have beforehand carefully drawn out, but as it is likewise necessary that we be furnished with some other house in which we may live commodiously during the operations, so that I might not remain irresolute in my actions, while my reason compelled me to suspend my judgement, and that I might not be prevented from living thenceforward in the greatest possible felicity, I formed a provisory code of morals, composed of three or four maxims, with which I am desirous to make you acquainted.
The first was to obey the laws and customs of my country, adhering firmly to the faith in which, by the grace of God, I had been educated from my childhood and regulating my conduct in every other matter according to the most moderate opinions, and the farthest removed from extremes, which should happen to be adopted in practice with general consent of the most judicious of those among whom I might be living. For as I had from that time begun to hold my own opinions for nought because I wished to subject them all to examination, I was convinced that I could not do better than follow in the meantime the opinions of the most judicious; and although there are some perhaps among the Persians and Chinese as judicious as among ourselves, expediency seemed to dictate that I should regulate my practice conformably to the opinions of those with whom I should have to live; and it appeared to me that, in order to ascertain the real opinions of such, I ought rather to take cognizance of what they practised than of what they said, not only because, in the corruption of our manners, there are few disposed to speak exactly as they believe, but also because very many are not aware of what it is that they really believe; for, as the act of mind by which a thing is believed is different from that by which we know that we believe it, the one act is often found without the other. Also, amid many opinions held in equal repute, I chose always the most moderate, as much for the reason that these are always the most convenient for practice, and probably the best (for all excess is generally vicious), as that, in the event of my falling into error, I might be at less distance from the truth than if, having chosen one of the extremes, it should turn out to be the other which I ought to have adopted. And I placed in the class of extremes especially all promises by which somewhat of our freedom is abridged; not that I disapproved of the laws which, to provide against the instability of men of feeble resolution, when what is sought to be accomplished is some good, permit engagements by vows and contracts binding the parties to persevere in it, or even, for the security of commerce, sanction similar engagements where the purpose sought to be realized is indifferent: but because I did not find anything on earth which was wholly superior to change, and because, for myself in particular, I hoped gradually to perfect my judgments, and not to suffer them to deteriorate, I would have deemed it a grave sin against good sense, if, for the reason that I approved of something at a particular time, I therefore bound myself to hold it for good at a subsequent time, when perhaps it had ceased to be so, or I had ceased to esteem it such.
My second maxim was to be as firm and resolute in my actions as I was able, and not to adhere less steadfastly to the most doubtful opinions, when once adopted, than if they had been highly certain; imitating in this the example of travelers who, when they have lost their way in a forest, ought not to wander from side to side, far less remain in one place, but proceed constantly towards the same side in as straight a line as possible, without changing their direction for slight reasons, although perhaps it might be chance alone which at first determined the selection; for in this way, if they do not exactly reach the point they desire, they will come at least in the end to some place that will probably be preferable to the middle of a forest. In the same way, since in action it frequently happens that no delay is permissible, it is very certain that, when it is not in our power to determine what is true, we ought to act according to what is most probable; and even although we should not remark a greater probability in one opinion than in another, we ought notwithstanding to choose one or the other, and afterwards consider it, in so far as it relates to practice, as no longer dubious, but manifestly true and certain, since the reason by which our choice has been determined is itself possessed of these qualities. This principle was sufficient thenceforward to rid me of all those repentings and pangs of remorse that usually disturb the consciences of such feeble and uncertain minds as, destitute of any clear and determinate principle of choice, allow themselves one day to adopt a course of action as the best, which they abandon the next, as the opposite.
My third maxim was to endeavor always to conquer myself rather than fortune, and change my desires rather than the order of the world, and in general, accustom myself to the persuasion that, except our own thoughts, there is nothing absolutely in our power; so that when we have done our best in things external to us, all wherein we fail of success is to be held, as regards us, absolutely impossible: and this single principle seemed to me sufficient to prevent me from desiring for the future anything which I could not obtain, and thus render me contented; for since our will naturally seeks those objects alone which the understanding represents as in some way possible of attainment, it is plain, that if we consider all external goods as equally beyond our power, we shall no more regret the absence of such goods as seem due to our birth, when deprived of them without any fault of ours, than our not possessing the kingdoms of China or Mexico, and thus making, so to speak, a virtue of necessity, we shall no more desire health in disease, or freedom in imprisonment, than we now do bodies incorruptible as diamonds, or the wings of birds to fly with. But I confess there is need of prolonged discipline and frequently repeated meditation to accustom the mind to view all objects in this light; and I believe that in this chiefly consisted the secret of the power of such philosophers as in former times were enabled to rise superior to the influence of fortune, and, amid suffering and poverty, enjoy a happiness which their gods might have envied. For, occupied incessantly with the consideration of the limits prescribed to their power by nature, they became so entirely convinced that nothing was at their disposal except their own thoughts, that this conviction was of itself sufficient to prevent their entertaining any desire of other objects; and over their thoughts they acquired a sway so absolute, that they had some ground on this account for esteeming themselves more rich and more powerful, more free and more happy, than other men who, whatever be the favors heaped on them by nature and fortune, if destitute of this philosophy, can never command the realization of all their desires.
In fine, to conclude this code of morals, I thought of reviewing the different occupations of men in this life, with the view of making choice of the best. And, without wishing to offer any remarks on the employments of others, I may state that it was my conviction that I could not do better than continue in that in which I was engaged, viz., in devoting my whole life to the culture of my reason, and in making the greatest progress I was able in the knowledge of truth, on the principles of the method which I had prescribed to myself. This method, from the time I had begun to apply it, had been to me the source of satisfaction so intense as to lead me to, believe that more perfect or more innocent could not be enjoyed in this life; and as by its means I daily discovered truths that appeared to me of some importance, and of which other men were generally ignorant, the gratification thence arising so occupied my mind that I was wholly indifferent to every other object. Besides, the three preceding maxims were founded singly on the design of continuing the work of self-instruction. For since God has endowed each of us with some light of reason by which to distinguish truth from error, I could not have believed that I ought for a single moment to rest satisfied with the opinions of another, unless I had resolved to exercise my own judgment in examining these whenever I should be duly qualified for the task. Nor could I have proceeded on such opinions without scruple, had I supposed that I should thereby forfeit any advantage for attaining still more accurate, should such exist. And, in fine, I could not have restrained my desires, nor remained satisfied had I not followed a path in which I thought myself certain of attaining all the knowledge to the acquisition of which I was competent, as well as the largest amount of what is truly good which I could ever hope to secure Inasmuch as we neither seek nor shun any object except in so far as our understanding represents it as good or bad, all that is necessary to right action is right judgment, and to the best action the most correct judgment, that is, to the acquisition of all the virtues with all else that is truly valuable and within our reach; and the assurance of such an acquisition cannot fail to render us contented.
Having thus provided myself with these maxims, and having placed them in reserve along with the truths of faith, which have ever occupied the first place in my belief, I came to the conclusion that I might with freedom set about ridding myself of what remained of my opinions. And, inasmuch as I hoped to be better able successfully to accomplish this work by holding intercourse with mankind, than by remaining longer shut up in the retirement where these thoughts had occurred to me, I betook me again to traveling before the winter was well ended. And, during the nine subsequent years, I did nothing but roam from one place to another, desirous of being a spectator rather than an actor in the plays exhibited on the theater of the world; and, as I made it my business in each matter to reflect particularly upon what might fairly be doubted and prove a source of error, I gradually rooted out from my mind all the errors which had hitherto crept into it. Not that in this I imitated the sceptics who doubt only that they may doubt, and seek nothing beyond uncertainty itself; for, on the contrary, my design was singly to find ground of assurance, and cast aside the loose earth and sand, that I might reach the rock or the clay. In this, as appears to me, I was successful enough; for, since I endeavored to discover the falsehood or incertitude of the propositions I examined, not by feeble conjectures, but by clear and certain reasonings, I met with nothing so doubtful as not to yield some conclusion of adequate certainty, although this were merely the inference, that the matter in question contained nothing certain. And, just as in pulling down an old house, we usually reserve the ruins to contribute towards the erection, so, in destroying such of my opinions as I judged to be Ill-founded, I made a variety of observations and acquired an amount of experience of which I availed myself in the establishment of more certain. And further, I continued to exercise myself in the method I had prescribed; for, besides taking care in general to conduct all my thoughts according to its rules, I reserved some hours from time to time which I expressly devoted to the employment of the method in the solution of mathematical difficulties, or even in the solution likewise of some questions belonging to other sciences, but which, by my having detached them from such principles of these sciences as were of inadequate certainty, were rendered almost mathematical: the truth of this will be manifest from the numerous examples contained in this volume. And thus, without in appearance living otherwise than those who, with no other occupation than that of spending their lives agreeably and innocently, study to sever pleasure from vice, and who, that they may enjoy their leisure without ennui, have recourse to such pursuits as are honorable, I was nevertheless prosecuting my design, and making greater progress in the knowledge of truth, than I might, perhaps, have made had I been engaged in the perusal of books merely, or in holding converse with men of letters.
These nine years passed away, however, before I had come to any determinate judgment respecting the difficulties which form matter of dispute among the learned, or had commenced to seek the principles of any philosophy more certain than the vulgar. And the examples of many men of the highest genius, who had, in former times, engaged in this inquiry, but, as appeared to me, without success, led me to imagine it to be a work of so much difficulty, that I would not perhaps have ventured on it so soon had I not heard it currently rumored that I had already completed the inquiry. I know not what were the grounds of this opinion; and, if my conversation contributed in any measure to its rise, this must have happened rather from my having confessed my Ignorance with greater freedom than those are accustomed to do who have studied a little, and expounded perhaps, the reasons that led me to doubt of many of those things that by others are esteemed certain, than from my having boasted of any system of philosophy. But, as I am of a disposition that makes me unwilling to be esteemed different from what I really am, I thought it necessary to endeavor by all means to render myself worthy of the reputation accorded to me; and it is now exactly eight years since this desire constrained me to remove from all those places where interruption from any of my acquaintances was possible, and betake myself to this country, in which the long duration of the war has led to the establishment of such discipline, that the armies maintained seem to be of use only in enabling the inhabitants to enjoy more securely the blessings of peace and where, in the midst of a great crowd actively engaged in business, and more careful of their own affairs than curious about those of others, I have been enabled to live without being deprived of any of the conveniences to be had in the most populous cities, and yet as solitary and as retired as in the midst of the most remote deserts.
PART IV
I am in doubt as to the propriety of making my first meditations in the place above mentioned matter of discourse; for these are so metaphysical, and so uncommon, as not, perhaps, to be acceptable to every one. And yet, that it may be determined whether the foundations that I have laid are sufficiently secure, I find myself in a measure constrained to advert to them. I had long before remarked that, in relation to practice, it is sometimes necessary to adopt, as if above doubt, opinions which we discern to be highly uncertain, as has been already said; but as I then desired to give my attention solely to the search after truth, I thought that a procedure exactly the opposite was called for, and that I ought to reject as absolutely false all opinions in regard to which I could suppose the least ground for doubt, in order to ascertain whether after that there remained aught in my belief that was wholly indubitable. Accordingly, seeing that our senses sometimes deceive us, I was willing to suppose that there existed nothing really such as they presented to us; and because some men err in reasoning, and fall into paralogisms, even on the simplest matters of geometry, I, convinced that I was as open to error as any other, rejected as false all the reasonings I had hitherto taken for demonstrations; and finally, when I considered that the very same thoughts (presentations) which we experience when awake may also be experienced when we are asleep, while there is at that time not one of them true, I supposed that all the objects (presentations) that had ever entered into my mind when awake, had in them no more truth than the illusions of my dreams. But immediately upon this I observed that, whilst I thus wished to think that all was false, it was absolutely necessary that I, who thus thought, should be somewhat; and as I observed that this truth, I think, therefore I am (COGITO ERGO SUM), was so certain and of such evidence that no ground of doubt, however extravagant, could be alleged by the sceptics capable of shaking it, I concluded that I might, without scruple, accept it as the first principle of the philosophy of which I was in search.
In the next place, I attentively examined what I was and as I observed that I could suppose that I had no body, and that there was no world nor any place in which I might be; but that I could not therefore suppose that I was not; and that, on the contrary, from the very circumstance that I thought to doubt of the truth of other things, it most clearly and certainly followed that I was; while, on the other hand, if I had only ceased to think, although all the other objects which I had ever imagined had been in reality existent, I would have had no reason to believe that I existed; I thence concluded that I was a substance whose whole essence or nature consists only in thinking, and which, that it may exist, has need of no place, nor is dependent on any material thing; so that “I,” that is to say, the mind by which I am what I am, is wholly distinct from the body, and is even more easily known than the latter, and is such, that although the latter were not, it would still continue to be all that it is.
After this I inquired in general into what is essential to the truth and certainty of a proposition; for since I had discovered one which I knew to be true, I thought that I must likewise be able to discover the ground of this certitude. And as I observed that in the words I think, therefore I am, there is nothing at all which gives me assurance of their truth beyond this, that I see very clearly that in order to think it is necessary to exist, I concluded that I might take, as a general rule, the principle, that all the things which we very clearly and distinctly conceive are true, only observing, however, that there is some difficulty in rightly determining the objects which we distinctly conceive.
In the next place, from reflecting on the circumstance that I doubted, and that consequently my being was not wholly perfect (for I clearly saw that it was a greater perfection to know than to doubt), I was led to inquire whence I had learned to think of something more perfect than myself; and I clearly recognized that I must hold this notion from some nature which in reality was more perfect. As for the thoughts of many other objects external to me, as of the sky, the earth, light, heat, and a thousand more, I was less at a loss to know whence these came; for since I remarked in them nothing which seemed to render them superior to myself, I could believe that, if these were true, they were dependencies on my own nature, in so far as it possessed a certain perfection, and, if they were false, that I held them from nothing, that is to say, that they were in me because of a certain imperfection of my nature. But this could not be the case with-the idea of a nature more perfect than myself; for to receive it from nothing was a thing manifestly impossible; and, because it is not less repugnant that the more perfect should be an effect of, and dependence on the less perfect, than that something should proceed from nothing, it was equally impossible that I could hold it from myself: accordingly, it but remained that it had been placed in me by a nature which was in reality more perfect than mine, and which even possessed within itself all the perfections of which I could form any idea; that is to say, in a single word, which was God. And to this I added that, since I knew some perfections which I did not possess, I was not the only being in existence (I will here, with your permission, freely use the terms of the schools); but, on the contrary, that there was of necessity some other more perfect Being upon whom I was dependent, and from whom I had received all that I possessed; for if I had existed alone, and independently of every other being, so as to have had from myself all the perfection, however little, which I actually possessed, I should have been able, for the same reason, to have had from myself the whole remainder of perfection, of the want of which I was conscious, and thus could of myself have become infinite, eternal, immutable, omniscient, all-powerful, and, in fine, have possessed all the perfections which I could recognize in God. For in order to know the nature of God (whose existence has been established by the preceding reasonings), as far as my own nature permitted, I had only to consider in reference to all the properties of which I found in my mind some idea, whether their possession was a mark of perfection; and I was assured that no one which indicated any imperfection was in him, and that none of the rest was awanting. Thus I perceived that doubt, inconstancy, sadness, and such like, could not be found in God, since I myself would have been happy to be free from them. Besides, I had ideas of many sensible and corporeal things; for although I might suppose that I was dreaming, and that all which I saw or imagined was false, I could not, nevertheless, deny that the ideas were in reality in my thoughts. But, because I had already very clearly recognized in myself that the intelligent nature is distinct from the corporeal, and as I observed that all composition is an evidence of dependency, and that a state of dependency is manifestly a state of imperfection, I therefore determined that it could not be a perfection in God to be compounded of these two natures and that consequently he was not so compounded; but that if there were any bodies in the world, or even any intelligences, or other natures that were not wholly perfect, their existence depended on his power in such a way that they could not subsist without him for a single moment.
I was disposed straightway to search for other truths and when I had represented to myself the object of the geometers, which I conceived to be a continuous body or a space indefinitely extended in length, breadth, and height or depth, divisible into divers parts which admit of different figures and sizes, and of being moved or transposed in all manner of ways (for all this the geometers suppose to be in the object they contemplate), I went over some of their simplest demonstrations. And, in the first place, I observed, that the great certitude which by common consent is accorded to these demonstrations, is founded solely upon this, that they are clearly conceived in accordance with the rules I have already laid down In the next place, I perceived that there was nothing at all in these demonstrations which could assure me of the existence of their object: thus, for example, supposing a triangle to be given, I distinctly perceived that its three angles were necessarily equal to two right angles, but I did not on that account perceive anything which could assure me that any triangle existed: while, on the contrary, recurring to the examination of the idea of a Perfect Being, I found that the existence of the Being was comprised in the idea in the same way that the equality of its three angles to two right angles is comprised in the idea of a triangle, or as in the idea of a sphere, the equidistance of all points on its surface from the center, or even still more clearly; and that consequently it is at least as certain that God, who is this Perfect Being, is, or exists, as any demonstration of geometry can be.
But the reason which leads many to persuade them selves that there is a difficulty in knowing this truth, and even also in knowing what their mind really is, is that they never raise their thoughts above sensible objects, and are so accustomed to consider nothing except by way of imagination, which is a mode of thinking limited to material objects, that all that is not imaginable seems to them not intelligible. The truth of this is sufficiently manifest from the single circumstance, that the philosophers of the schools accept as a maxim that there is nothing in the understanding which was not previously in the senses, in which however it is certain that the ideas of God and of the soul have never been; and it appears to me that they who make use of their imagination to comprehend these ideas do exactly the some thing as if, in order to hear sounds or smell odors, they strove to avail themselves of their eyes; unless indeed that there is this difference, that the sense of sight does not afford us an inferior assurance to those of smell or hearing; in place of which, neither our imagination nor our senses can give us assurance of anything unless our understanding intervene.
Finally, if there be still persons who are not sufficiently persuaded of the existence of God and of the soul, by the reasons I have adduced, I am desirous that they should know that all the other propositions, of the truth of which they deem themselves perhaps more assured, as that we have a body, and that there exist stars and an earth, and such like, are less certain; for, although we have a moral assurance of these things, which is so strong that there is an appearance of extravagance in doubting of their existence, yet at the same time no one, unless his intellect is impaired, can deny, when the question relates to a metaphysical certitude, that there is sufficient reason to exclude entire assurance, in the observation that when asleep we can in the same way imagine ourselves possessed of another body and that we see other stars and another earth, when there is nothing of the kind. For how do we know that the thoughts which occur in dreaming are false rather than those other which we experience when awake, since the former are often not less vivid and distinct than the latter? And though men of the highest genius study this question as long as they please, I do not believe that they will be able to give any reason which can be sufficient to remove this doubt, unless they presuppose the existence of God. For, in the first place even the principle which I have already taken as a rule, viz., that all the things which we clearly and distinctly conceive are true, is certain only because God is or exists and because he is a Perfect Being, and because all that we possess is derived from him: whence it follows that our ideas or notions, which to the extent of their clearness and distinctness are real, and proceed from God, must to that extent be true. Accordingly, whereas we not infrequently have ideas or notions in which some falsity is contained, this can only be the case with such as are to some extent confused and obscure, and in this proceed from nothing (participate of negation), that is, exist in us thus confused because we are not wholly perfect. And it is evident that it is not less repugnant that falsity or imperfection, in so far as it is imperfection, should proceed from God, than that truth or perfection should proceed from nothing. But if we did not know that all which we possess of real and true proceeds from a Perfect and Infinite Being, however clear and distinct our ideas might be, we should have no ground on that account for the assurance that they possessed the perfection of being true.
But after the knowledge of God and of the soul has rendered us certain of this rule, we can easily understand that the truth of the thoughts we experience when awake, ought not in the slightest degree to be called in question on account of the illusions of our dreams. For if it happened that an individual, even when asleep, had some very distinct idea, as, for example, if a geometer should discover some new demonstration, the circumstance of his being asleep would not militate against its truth; and as for the most ordinary error of our dreams, which consists in their representing to us various objects in the same way as our external senses, this is not prejudicial, since it leads us very properly to suspect the truth of the ideas of sense; for we are not infrequently deceived in the same manner when awake; as when persons in the jaundice see all objects yellow, or when the stars or bodies at a great distance appear to us much smaller than they are. For, in fine, whether awake or asleep, we ought never to allow ourselves to be persuaded of the truth of anything unless on the evidence of our reason. And it must be noted that I say of our reason, and not of our imagination or of our senses: thus, for example, although we very clearly see the sun, we ought not therefore to determine that it is only of the size which our sense of sight presents; and we may very distinctly imagine the head of a lion joined to the body of a goat, without being therefore shut up to the conclusion that a chimaera exists; for it is not a dictate of reason that what we thus see or imagine is in reality existent; but it plainly tells us that all our ideas or notions contain in them some truth; for otherwise it could not be that God, who is wholly perfect and veracious, should have placed them in us. And because our reasonings are never so clear or so complete during sleep as when we are awake, although sometimes the acts of our imagination are then as lively and distinct, if not more so than in our waking moments, reason further dictates that, since all our thoughts cannot be true because of our partial imperfection, those possessing truth must infallibly be found in the experience of our waking moments rather than in that of our dreams.
PART V
I would here willingly have proceeded to exhibit the whole chain of truths which I deduced from these primary but as with a view to this it would have been necessary now to treat of many questions in dispute among the earned, with whom I do not wish to be embroiled, I believe that it will be better for me to refrain from this exposition, and only mention in general what these truths are, that the more judicious may be able to determine whether a more special account of them would conduce to the public advantage. I have ever remained firm in my original resolution to suppose no other principle than that of which I have recently availed myself in demonstrating the existence of God and of the soul, and to accept as true nothing that did not appear to me more clear and certain than the demonstrations of the geometers had formerly appeared; and yet I venture to state that not only have I found means to satisfy myself in a short time on all the principal difficulties which are usually treated of in philosophy, but I have also observed certain laws established in nature by God in such a manner, and of which he has impressed on our minds such notions, that after we have reflected sufficiently upon these, we cannot doubt that they are accurately observed in all that exists or takes place in the world and farther, by considering the concatenation of these laws, it appears to me that I have discovered many truths more useful and more important than all I had before learned, or even had expected to learn.
But because I have essayed to expound the chief of these discoveries in a treatise which certain considerations prevent me from publishing, I cannot make the results known more conveniently than by here giving a summary of the contents of this treatise. It was my design to comprise in it all that, before I set myself to write it, I thought I knew of the nature of material objects. But like the painters who, finding themselves unable to represent equally well on a plain surface all the different faces of a solid body, select one of the chief, on which alone they make the light fall, and throwing the rest into the shade, allow them to appear only in so far as they can be seen while looking at the principal one; so, fearing lest I should not be able to compense in my discourse all that was in my mind, I resolved to expound singly, though at considerable length, my opinions regarding light; then to take the opportunity of adding something on the sun and the fixed stars, since light almost wholly proceeds from them; on the heavens since they transmit it; on the planets, comets, and earth, since they reflect it; and particularly on all the bodies that are upon the earth, since they are either colored, or transparent, or luminous; and finally on man, since he is the spectator of these objects. Further, to enable me to cast this variety of subjects somewhat into the shade, and to express my judgment regarding them with greater freedom, without being necessitated to adopt or refute the opinions of the learned, I resolved to leave all the people here to their disputes, and to speak only of what would happen in a new world, if God were now to create somewhere in the imaginary spaces matter sufficient to compose one, and were to agitate variously and confusedly the different parts of this matter, so that there resulted a chaos as disordered as the poets ever feigned, and after that did nothing more than lend his ordinary concurrence to nature, and allow her to act in accordance with the laws which he had established. On this supposition, I, in the first place, described this matter, and essayed to represent it in such a manner that to my mind there can be nothing clearer and more intelligible, except what has been recently said regarding God and the soul; for I even expressly supposed that it possessed none of those forms or qualities which are so debated in the schools, nor in general anything the knowledge of which is not so natural to our minds that no one can so much as imagine himself ignorant of it. Besides, I have pointed out what are the laws of nature; and, with no other principle upon which to found my reasonings except the infinite perfection of God, I endeavored to demonstrate all those about which there could be any room for doubt, and to prove that they are such, that even if God had created more worlds, there could have been none in which these laws were not observed. Thereafter, I showed how the greatest part of the matter of this chaos must, in accordance with these laws, dispose and arrange itself in such a way as to present the appearance of heavens; how in the meantime some of its parts must compose an earth and some planets and comets, and others a sun and fixed stars. And, making a digression at this stage on the subject of light, I expounded at considerable length what the nature of that light must be which is found in the sun and the stars, and how thence in an instant of time it traverses the immense spaces of the heavens, and how from the planets and comets it is reflected towards the earth. To this I likewise added much respecting the substance, the situation, the motions, and all the different qualities of these heavens and stars; so that I thought I had said enough respecting them to show that there is nothing observable in the heavens or stars of our system that must not, or at least may not appear precisely alike in those of the system which I described. I came next to speak of the earth in particular, and to show how, even though I had expressly supposed that God had given no weight to the matter of which it is composed, this should not prevent all its parts from tending exactly to its center; how with water and air on its surface, the disposition of the heavens and heavenly bodies, more especially of the moon, must cause a flow and ebb, like in all its circumstances to that observed in our seas, as also a certain current both of water and air from east to west, such as is likewise observed between the tropics; how the mountains, seas, fountains, and rivers might naturally be formed in it, and the metals produced in the mines, and the plants grow in the fields and in general, how all the bodies which are commonly denominated mixed or composite might be generated and, among other things in the discoveries alluded to inasmuch as besides the stars, I knew nothing except fire which produces light, I spared no pains to set forth all that pertains to its nature,--the manner of its production and support, and to explain how heat is sometimes found without light, and light without heat; to show how it can induce various colors upon different bodies and other diverse qualities; how it reduces some to a liquid state and hardens others; how it can consume almost all bodies, or convert them into ashes and smoke; and finally, how from these ashes, by the mere intensity of its action, it forms glass: for as this transmutation of ashes into glass appeared to me as wonderful as any other in nature, I took a special pleasure in describing it. I was not, however, disposed, from these circumstances, to conclude that this world had been created in the manner I described; for it is much more likely that God made it at the first such as it was to be. But this is certain, and an opinion commonly received among theologians, that the action by which he now sustains it is the same with that by which he originally created it; so that even although he had from the beginning given it no other form than that of chaos, provided only he had established certain laws of nature, and had lent it his concurrence to enable it to act as it is wont to do, it may be believed, without discredit to the miracle of creation, that, in this way alone, things purely material might, in course of time, have become such as we observe them at present; and their nature is much more easily conceived when they are beheld coming in this manner gradually into existence, than when they are only considered as produced at once in a finished and perfect state.
From the description of inanimate bodies and plants, I passed to animals, and particularly to man. But since I had not as yet sufficient knowledge to enable me to treat of these in the same manner as of the rest, that is to say, by deducing effects from their causes, and by showing from what elements and in what manner nature must produce them, I remained satisfied with the supposition that God formed the body of man wholly like to one of ours, as well in the external shape of the members as in the internal conformation of the organs, of the same matter with that I had described, and at first placed in it no rational soul, nor any other principle, in room of the vegetative or sensitive soul, beyond kindling in the heart one of those fires without light, such as I had already described, and which I thought was not different from the heat in hay that has been heaped together before it is dry, or that which causes fermentation in new wines before they are run clear of the fruit. For, when I examined the kind of functions which might, as consequences of this supposition, exist in this body, I found precisely all those which may exist in us independently of all power of thinking, and consequently without being in any measure owing to the soul; in other words, to that part of us which is distinct from the body, and of which it has been said above that the nature distinctively consists in thinking, functions in which the animals void of reason may be said wholly to resemble us; but among which I could not discover any of those that, as dependent on thought alone, belong to us as men, while, on the other hand, I did afterwards discover these as soon as I supposed God to have created a rational soul, and to have annexed it to this body in a particular manner which I described.
But, in order to show how I there handled this matter, I mean here to give the explication of the motion of the heart and arteries, which, as the first and most general motion observed in animals, will afford the means of readily determining what should be thought of all the rest. And that there may be less difficulty in understanding what I am about to say on this subject, I advise those who are not versed in anatomy, before they commence the perusal of these observations, to take the trouble of getting dissected in their presence the heart of some large animal possessed of lungs (for this is throughout sufficiently like the human), and to have shown to them its two ventricles or cavities: in the first place, that in the right side, with which correspond two very ample tubes, viz., the hollow vein (vena cava), which is the principal receptacle of the blood, and the trunk of the tree, as it were, of which all the other veins in the body are branches; and the arterial vein (vena arteriosa), inappropriately so denominated, since it is in truth only an artery, which, taking its rise in the heart, is divided, after passing out from it, into many branches which presently disperse themselves all over the lungs; in the second place, the cavity in the left side, with which correspond in the same manner two canals in size equal to or larger than the preceding, viz., the venous artery (arteria venosa), likewise inappropriately thus designated, because it is simply a vein which comes from the lungs, where it is divided into many branches, interlaced with those of the arterial vein, and those of the tube called the windpipe, through which the air we breathe enters; and the great artery which, issuing from the heart, sends its branches all over the body. I should wish also that such persons were carefully shown the eleven pellicles which, like so many small valves, open and shut the four orifices that are in these two cavities, viz., three at the entrance of the hollow veins where they are disposed in such a manner as by no means to prevent the blood which it contains from flowing into the right ventricle of the heart, and yet exactly to prevent its flowing out; three at the entrance to the arterial vein, which, arranged in a manner exactly the opposite of the former, readily permit the blood contained in this cavity to pass into the lungs, but hinder that contained in the lungs from returning to this cavity; and, in like manner, two others at the mouth of the venous artery, which allow the blood from the lungs to flow into the left cavity of the heart, but preclude its return; and three at the mouth of the great artery, which suffer the blood to flow from the heart, but prevent its reflux. Nor do we need to seek any other reason for the number of these pellicles beyond this that the orifice of the venous artery being of an oval shape from the nature of its situation, can be adequately closed with two, whereas the others being round are more conveniently closed with three. Besides, I wish such persons to observe that the grand artery and the arterial vein are of much harder and firmer texture than the venous artery and the hollow vein; and that the two last expand before entering the heart, and there form, as it were, two pouches denominated the auricles of the heart, which are composed of a substance similar to that of the heart itself; and that there is always more warmth in the heart than in any other part of the body--and finally, that this heat is capable of causing any drop of blood that passes into the cavities rapidly to expand and dilate, just as all liquors do when allowed to fall drop by drop into a highly heated vessel.
For, after these things, it is not necessary for me to say anything more with a view to explain the motion of the heart, except that when its cavities are not full of blood, into these the blood of necessity flows,--from the hollow vein into the right, and from the venous artery into the left; because these two vessels are always full of blood, and their orifices, which are turned towards the heart, cannot then be closed. But as soon as two drops of blood have thus passed, one into each of the cavities, these drops which cannot but be very large, because the orifices through which they pass are wide, and the vessels from which they come full of blood, are immediately rarefied, and dilated by the heat they meet with. In this way they cause the whole heart to expand, and at the same time press home and shut the five small valves that are at the entrances of the two vessels from which they flow, and thus prevent any more blood from coming down into the heart, and becoming more and more rarefied, they push open the six small valves that are in the orifices of the other two vessels, through which they pass out, causing in this way all the branches of the arterial vein and of the grand artery to expand almost simultaneously with the heart which immediately thereafter begins to contract, as do also the arteries, because the blood that has entered them has cooled, and the six small valves close, and the five of the hollow vein and of the venous artery open anew and allow a passage to other two drops of blood, which cause the heart and the arteries again to expand as before. And, because the blood which thus enters into the heart passes through these two pouches called auricles, it thence happens that their motion is the contrary of that of the heart, and that when it expands they contract. But lest those who are ignorant of the force of mathematical demonstrations and who are not accustomed to distinguish true reasons from mere verisimilitudes, should venture, without examination, to deny what has been said, I wish it to be considered that the motion which I have now explained follows as necessarily from the very arrangement of the parts, which may be observed in the heart by the eye alone, and from the heat which may be felt with the fingers, and from the nature of the blood as learned from experience, as does the motion of a clock from the power, the situation, and shape of its counterweights and wheels.
But if it be asked how it happens that the blood in the veins, flowing in this way continually into the heart, is not exhausted, and why the arteries do not become too full, since all the blood which passes through the heart flows into them, I need only mention in reply what has been written by a physician of England, who has the honor of having broken the ice on this subject, and of having been the first to teach that there are many small passages at the extremities of the arteries, through which the blood received by them from the heart passes into the small branches of the veins, whence it again returns to the heart; so that its course amounts precisely to a perpetual circulation. Of this we have abundant proof in the ordinary experience of surgeons, who, by binding the arm with a tie of moderate straitness above the part where they open the vein, cause the blood to flow more copiously than it would have done without any ligature; whereas quite the contrary would happen were they to bind it below; that is, between the hand and the opening, or were to make the ligature above the opening very tight. For it is manifest that the tie, moderately straightened, while adequate to hinder the blood already in the arm from returning towards the heart by the veins, cannot on that account prevent new blood from coming forward through the arteries, because these are situated below the veins, and their coverings, from their greater consistency, are more difficult to compress; and also that the blood which comes from the heart tends to pass through them to the hand with greater force than it does to return from the hand to the heart through the veins. And since the latter current escapes from the arm by the opening made in one of the veins, there must of necessity be certain passages below the ligature, that is, towards the extremities of the arm through which it can come thither from the arteries. This physician likewise abundantly establishes what he has advanced respecting the motion of the blood, from the existence of certain pellicles, so disposed in various places along the course of the veins, in the manner of small valves, as not to permit the blood to pass from the middle of the body towards the extremities, but only to return from the extremities to the heart; and farther, from experience which shows that all the blood which is in the body may flow out of it in a very short time through a single artery that has been cut, even although this had been closely tied in the immediate neighborhood of the heart and cut between the heart and the ligature, so as to prevent the supposition that the blood flowing out of it could come from any other quarter than the heart.
But there are many other circumstances which evince that what I have alleged is the true cause of the motion of the blood: thus, in the first place, the difference that is observed between the blood which flows from the veins, and that from the arteries, can only arise from this, that being rarefied, and, as it were, distilled by passing through the heart, it is thinner, and more vivid, and warmer immediately after leaving the heart, in other words, when in the arteries, than it was a short time before passing into either, in other words, when it was in the veins; and if attention be given, it will be found that this difference is very marked only in the neighborhood of the heart; and is not so evident in parts more remote from it. In the next place, the consistency of the coats of which the arterial vein and the great artery are composed, sufficiently shows that the blood is impelled against them with more force than against the veins. And why should the left cavity of the heart and the great artery be wider and larger than the right cavity and the arterial vein, were it not that the blood of the venous artery, having only been in the lungs after it has passed through the heart, is thinner, and rarefies more readily, and in a higher degree, than the blood which proceeds immediately from the hollow vein? And what can physicians conjecture from feeling the pulse unless they know that according as the blood changes its nature it can be rarefied by the warmth of the heart, in a higher or lower degree, and more or less quickly than before? And if it be inquired how this heat is communicated to the other members, must it not be admitted that this is effected by means of the blood, which, passing through the heart, is there heated anew, and thence diffused over all the body? Whence it happens, that if the blood be withdrawn from any part, the heat is likewise withdrawn by the same means; and although the heart were as-hot as glowing iron, it would not be capable of warming the feet and hands as at present, unless it continually sent thither new blood. We likewise perceive from this, that the true use of respiration is to bring sufficient fresh air into the lungs, to cause the blood which flows into them from the right ventricle of the heart, where it has been rarefied and, as it were, changed into vapors, to become thick, and to convert it anew into blood, before it flows into the left cavity, without which process it would be unfit for the nourishment of the fire that is there. This receives confirmation from the circumstance, that it is observed of animals destitute of lungs that they have also but one cavity in the heart, and that in children who cannot use them while in the womb, there is a hole through which the blood flows from the hollow vein into the left cavity of the heart, and a tube through which it passes from the arterial vein into the grand artery without passing through the lung. In the next place, how could digestion be carried on in the stomach unless the heart communicated heat to it through the arteries, and along with this certain of the more fluid parts of the blood, which assist in the dissolution of the food that has been taken in? Is not also the operation which converts the juice of food into blood easily comprehended, when it is considered that it is distilled by passing and repassing through the heart perhaps more than one or two hundred times in a day? And what more need be adduced to explain nutrition, and the production of the different humors of the body, beyond saying, that the force with which the blood, in being rarefied, passes from the heart towards the extremities of the arteries, causes certain of its parts to remain in the members at which they arrive, and there occupy the place of some others expelled by them; and that according to the situation, shape, or smallness of the pores with which they meet, some rather than others flow into certain parts, in the same way that some sieves are observed to act, which, by being variously perforated, serve to separate different species of grain? And, in the last place, what above all is here worthy of observation, is the generation of the animal spirits, which are like a very subtle wind, or rather a very pure and vivid flame which, continually ascending in great abundance from the heart to the brain, thence penetrates through the nerves into the muscles, and gives motion to all the members; so that to account for other parts of the blood which, as most agitated and penetrating, are the fittest to compose these spirits, proceeding towards the brain, it is not necessary to suppose any other cause, than simply, that the arteries which carry them thither proceed from the heart in the most direct lines, and that, according to the rules of mechanics which are the same with those of nature, when many objects tend at once to the same point where there is not sufficient room for all (as is the case with the parts of the blood which flow forth from the left cavity of the heart and tend towards the brain), the weaker and less agitated parts must necessarily be driven aside from that point by the stronger which alone in this way reach it I had expounded all these matters with sufficient minuteness in the treatise which I formerly thought of publishing. And after these, I had shown what must be the fabric of the nerves and muscles of the human body to give the animal spirits contained in it the power to move the members, as when we see heads shortly after they have been struck off still move and bite the earth, although no longer animated; what changes must take place in the brain to produce waking, sleep, and dreams; how light, sounds, odors, tastes, heat, and all the other qualities of external objects impress it with different ideas by means of the senses; how hunger, thirst, and the other internal affections can likewise impress upon it divers ideas; what must be understood by the common sense (sensus communis) in which these ideas are received, by the memory which retains them, by the fantasy which can change them in various ways, and out of them compose new ideas, and which, by the same means, distributing the animal spirits through the muscles, can cause the members of such a body to move in as many different ways, and in a manner as suited, whether to the objects that are presented to its senses or to its internal affections, as can take place in our own case apart from the guidance of the will. Nor will this appear at all strange to those who are acquainted with the variety of movements performed by the different automata, or moving machines fabricated by human industry, and that with help of but few pieces compared with the great multitude of bones, muscles, nerves, arteries, veins, and other parts that are found in the body of each animal. Such persons will look upon this body as a machine made by the hands of God, which is incomparably better arranged, and adequate to movements more admirable than is any machine of human invention. And here I specially stayed to show that, were there such machines exactly resembling organs and outward form an ape or any other irrational animal, we could have no means of knowing that they were in any respect of a different nature from these animals; but if there were machines bearing the image of our bodies, and capable of imitating our actions as far as it is morally possible, there would still remain two most certain tests whereby to know that they were not therefore really men. Of these the first is that they could never use words or other signs arranged in such a manner as is competent to us in order to declare our thoughts to others: for we may easily conceive a machine to be so constructed that it emits vocables, and even that it emits some correspondent to the action upon it of external objects which cause a change in its organs; for example, if touched in a particular place it may demand what we wish to say to it; if in another it may cry out that it is hurt, and such like; but not that it should arrange them variously so as appositely to reply to what is said in its presence, as men of the lowest grade of intellect can do. The second test is, that although such machines might execute many things with equal or perhaps greater perfection than any of us, they would, without doubt, fail in certain others from which it could be discovered that they did not act from knowledge, but solely from the disposition of their organs: for while reason is an universal instrument that is alike available on every occasion, these organs, on the contrary, need a particular arrangement for each particular action; whence it must be morally impossible that there should exist in any machine a diversity of organs sufficient to enable it to act in all the occurrences of life, in the way in which our reason enables us to act. Again, by means of these two tests we may likewise know the difference between men and brutes. For it is highly deserving of remark, that there are no men so dull and stupid, not even idiots, as to be incapable of joining together different words, and thereby constructing a declaration by which to make their thoughts understood; and that on the other hand, there is no other animal, however perfect or happily circumstanced, which can do the like. Nor does this inability arise from want of organs: for we observe that magpies and parrots can utter words like ourselves, and are yet unable to speak as we do, that is, so as to show that they understand what they say; in place of which men born deaf and dumb, and thus not less, but rather more than the brutes, destitute of the organs which others use in speaking, are in the habit of spontaneously inventing certain signs by which they discover their thoughts to those who, being usually in their company, have leisure to learn their language. And this proves not only that the brutes have less reason than man, but that they have none at all: for we see that very little is required to enable a person to speak; and since a certain inequality of capacity is observable among animals of the same species, as well as among men, and since some are more capable of being instructed than others, it is incredible that the most perfect ape or parrot of its species, should not in this be equal to the most stupid infant of its kind or at least to one that was crack-brained, unless the soul of brutes were of a nature wholly different from ours. And we ought not to confound speech with the natural movements which indicate the passions, and can be imitated by machines as well as manifested by animals; nor must it be thought with certain of the ancients, that the brutes speak, although we do not understand their language. For if such were the case, since they are endowed with many organs analogous to ours, they could as easily communicate their thoughts to us as to their fellows. It is also very worthy of remark, that, though there are many animals which manifest more industry than we in certain of their actions, the same animals are yet observed to show none at all in many others: so that the circumstance that they do better than we does not prove that they are endowed with mind, for it would thence follow that they possessed greater reason than any of us, and could surpass us in all things; on the contrary, it rather proves that they are destitute of reason, and that it is nature which acts in them according to the disposition of their organs: thus it is seen, that a clock composed only of wheels and weights can number the hours and measure time more exactly than we with all our skin.
I had after this described the reasonable soul, and shown that it could by no means be educed from the power of matter, as the other things of which I had spoken, but that it must be expressly created; and that it is not sufficient that it be lodged in the human body exactly like a pilot in a ship, unless perhaps to move its members, but that it is necessary for it to be joined and united more closely to the body, in order to have sensations and appetites similar to ours, and thus constitute a real man. I here entered, in conclusion, upon the subject of the soul at considerable length, because it is of the greatest moment: for after the error of those who deny the existence of God, an error which I think I have already sufficiently refuted, there is none that is more powerful in leading feeble minds astray from the straight path of virtue than the supposition that the soul of the brutes is of the same nature with our own; and consequently that after this life we have nothing to hope for or fear, more than flies and ants; in place of which, when we know how far they differ we much better comprehend the reasons which establish that the soul is of a nature wholly independent of the body, and that consequently it is not liable to die with the latter and, finally, because no other causes are observed capable of destroying it, we are naturally led thence to judge that it is immortal.', '2026-06-26 17:04:12.22', true, ${defaultUser.id})
RETURNING id, title
`);

  const apology = await prisma.$queryRawUnsafe(`INSERT INTO public.posts (title, content, posted_at, published, "ownerId") VALUES ('APOLOGY', 'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was—so persuasively did they speak; and yet they have hardly uttered a word of truth. But of the many falsehoods told by them, there was one which quite amazed me;—I mean when they said that you should be upon your guard and not allow yourselves to be deceived by the force of my eloquence. To say this, when they were certain to be detected as soon as I opened my lips and proved myself to be anything but a great speaker, did indeed appear to me most shameless—unless by the force of eloquence they mean the force of truth; for if such is their meaning, I admit that I am eloquent. But in how different a way from theirs! Well, as I was saying, they have scarcely spoken the truth at all; but from me you shall hear the whole truth: not, however, delivered after their manner in a set oration duly ornamented with words and phrases. No, by heaven! but I shall use the words and arguments which occur to me at the moment; for I am confident in the justice of my cause (Or, I am certain that I am right in taking this course.): at my time of life I ought not to be appearing before you, O men of Athens, in the character of a juvenile orator—let no one expect it of me. And I must beg of you to grant me a favour:—If I defend myself in my accustomed manner, and you hear me using the words which I have been in the habit of using in the agora, at the tables of the money-changers, or anywhere else, I would ask you not to be surprised, and not to interrupt me on this account. For I am more than seventy years of age, and appearing now for the first time in a court of law, I am quite a stranger to the language of the place; and therefore I would have you regard me as if I were really a stranger, whom you would excuse if he spoke in his native tongue, and after the fashion of his country:—Am I making an unfair request of you? Never mind the manner, which may or may not be good; but think only of the truth of my words, and give heed to that: let the speaker speak truly and the judge decide justly.
And first, I have to reply to the older charges and to my first accusers, and then I will go on to the later ones. For of old I have had many accusers, who have accused me falsely to you during many years; and I am more afraid of them than of Anytus and his associates, who are dangerous, too, in their own way. But far more dangerous are the others, who began when you were children, and took possession of your minds with their falsehoods, telling of one Socrates, a wise man, who speculated about the heaven above, and searched into the earth beneath, and made the worse appear the better cause. The disseminators of this tale are the accusers whom I dread; for their hearers are apt to fancy that such enquirers do not believe in the existence of the gods. And they are many, and their charges against me are of ancient date, and they were made by them in the days when you were more impressible than you are now—in childhood, or it may have been in youth—and the cause when heard went by default, for there was none to answer. And hardest of all, I do not know and cannot tell the names of my accusers; unless in the chance case of a Comic poet. All who from envy and malice have persuaded you—some of them having first convinced themselves—all this class of men are most difficult to deal with; for I cannot have them up here, and cross-examine them, and therefore I must simply fight with shadows in my own defence, and argue when there is no one who answers. I will ask you then to assume with me, as I was saying, that my opponents are of two kinds; one recent, the other ancient: and I hope that you will see the propriety of my answering the latter first, for these accusations you heard long before the others, and much oftener.
Well, then, I must make my defence, and endeavour to clear away in a short time, a slander which has lasted a long time. May I succeed, if to succeed be for my good and yours, or likely to avail me in my cause! The task is not an easy one; I quite understand the nature of it. And so leaving the event with God, in obedience to the law I will now make my defence.
I will begin at the beginning, and ask what is the accusation which has given rise to the slander of me, and in fact has encouraged Meletus to proof this charge against me. Well, what do the slanderers say? They shall be my prosecutors, and I will sum up their words in an affidavit: “Socrates is an evil-doer, and a curious person, who searches into things under the earth and in heaven, and he makes the worse appear the better cause; and he teaches the aforesaid doctrines to others.” Such is the nature of the accusation: it is just what you have yourselves seen in the comedy of Aristophanes (Aristoph., Clouds.), who has introduced a man whom he calls Socrates, going about and saying that he walks in air, and talking a deal of nonsense concerning matters of which I do not pretend to know either much or little—not that I mean to speak disparagingly of any one who is a student of natural philosophy. I should be very sorry if Meletus could bring so grave a charge against me. But the simple truth is, O Athenians, that I have nothing to do with physical speculations. Very many of those here present are witnesses to the truth of this, and to them I appeal. Speak then, you who have heard me, and tell your neighbours whether any of you have ever known me hold forth in few words or in many upon such matters...You hear their answer. And from what they say of this part of the charge you will be able to judge of the truth of the rest.
As little foundation is there for the report that I am a teacher, and take money; this accusation has no more truth in it than the other. Although, if a man were really able to instruct mankind, to receive money for giving instruction would, in my opinion, be an honour to him. There is Gorgias of Leontium, and Prodicus of Ceos, and Hippias of Elis, who go the round of the cities, and are able to persuade the young men to leave their own citizens by whom they might be taught for nothing, and come to them whom they not only pay, but are thankful if they may be allowed to pay them. There is at this time a Parian philosopher residing in Athens, of whom I have heard; and I came to hear of him in this way:—I came across a man who has spent a world of money on the Sophists, Callias, the son of Hipponicus, and knowing that he had sons, I asked him: “Callias,” I said, “if your two sons were foals or calves, there would be no difficulty in finding some one to put over them; we should hire a trainer of horses, or a farmer probably, who would improve and perfect them in their own proper virtue and excellence; but as they are human beings, whom are you thinking of placing over them? Is there any one who understands human and political virtue? You must have thought about the matter, for you have sons; is there any one?” “There is,” he said. “Who is he?” said I; “and of what country? and what does he charge?” “Evenus the Parian,” he replied; “he is the man, and his charge is five minæ.” Happy is Evenus, I said to myself, if he really has this wisdom, and teaches at such a moderate charge. Had I the same, I should have been very proud and conceited; but the truth is that I have no knowledge of the kind.
I dare say, Athenians, that some one among you will reply, “Yes, Socrates, but what is the origin of these accusations which are brought against you; there must have been something strange which you have been doing? All these rumours and this talk about you would never have arisen if you had been like other men: tell us, then, what is the cause of them, for we should be sorry to judge hastily of you.” Now I regard this as a fair challenge, and I will endeavour to explain to you the reason why I am called wise and have such an evil fame. Please to attend then. And although some of you may think that I am joking, I declare that I will tell you the entire truth. Men of Athens, this reputation of mine has come of a certain sort of wisdom which I possess. If you ask me what kind of wisdom, I reply, wisdom such as may perhaps be attained by man, for to that extent I am inclined to believe that I am wise; whereas the persons of whom I was speaking have a superhuman wisdom which I may fail to describe, because I have it not myself; and he who says that I have, speaks falsely, and is taking away my character. And here, O men of Athens, I must beg you not to interrupt me, even if I seem to say something extravagant. For the word which I will speak is not mine. I will refer you to a witness who is worthy of credit; that witness shall be the God of Delphi—he will tell you about my wisdom, if I have any, and of what sort it is. You must have known Chaerephon; he was early a friend of mine, and also a friend of yours, for he shared in the recent exile of the people, and returned with you. Well, Chaerephon, as you know, was very impetuous in all his doings, and he went to Delphi and boldly asked the oracle to tell him whether—as I was saying, I must beg you not to interrupt—he asked the oracle to tell him whether anyone was wiser than I was, and the Pythian prophetess answered, that there was no man wiser. Chaerephon is dead himself; but his brother, who is in court, will confirm the truth of what I am saying.
Why do I mention this? Because I am going to explain to you why I have such an evil name. When I heard the answer, I said to myself, What can the god mean? and what is the interpretation of his riddle? for I know that I have no wisdom, small or great. What then can he mean when he says that I am the wisest of men? And yet he is a god, and cannot lie; that would be against his nature. After long consideration, I thought of a method of trying the question. I reflected that if I could only find a man wiser than myself, then I might go to the god with a refutation in my hand. I should say to him, “Here is a man who is wiser than I am; but you said that I was the wisest.” Accordingly I went to one who had the reputation of wisdom, and observed him—his name I need not mention; he was a politician whom I selected for examination—and the result was as follows: When I began to talk with him, I could not help thinking that he was not really wise, although he was thought wise by many, and still wiser by himself; and thereupon I tried to explain to him that he thought himself wise, but was not really wise; and the consequence was that he hated me, and his enmity was shared by several who were present and heard me. So I left him, saying to myself, as I went away: Well, although I do not suppose that either of us knows anything really beautiful and good, I am better off than he is,—for he knows nothing, and thinks that he knows; I neither know nor think that I know. In this latter particular, then, I seem to have slightly the advantage of him. Then I went to another who had still higher pretensions to wisdom, and my conclusion was exactly the same. Whereupon I made another enemy of him, and of many others besides him.
Then I went to one man after another, being not unconscious of the enmity which I provoked, and I lamented and feared this: but necessity was laid upon me,—the word of God, I thought, ought to be considered first. And I said to myself, Go I must to all who appear to know, and find out the meaning of the oracle. And I swear to you, Athenians, by the dog I swear!—for I must tell you the truth—the result of my mission was just this: I found that the men most in repute were all but the most foolish; and that others less esteemed were really wiser and better. I will tell you the tale of my wanderings and of the “Herculean” labours, as I may call them, which I endured only to find at last the oracle irrefutable. After the politicians, I went to the poets; tragic, dithyrambic, and all sorts. And there, I said to myself, you will be instantly detected; now you will find out that you are more ignorant than they are. Accordingly, I took them some of the most elaborate passages in their own writings, and asked what was the meaning of them—thinking that they would teach me something. Will you believe me? I am almost ashamed to confess the truth, but I must say that there is hardly a person present who would not have talked better about their poetry than they did themselves. Then I knew that not by wisdom do poets write poetry, but by a sort of genius and inspiration; they are like diviners or soothsayers who also say many fine things, but do not understand the meaning of them. The poets appeared to me to be much in the same case; and I further observed that upon the strength of their poetry they believed themselves to be the wisest of men in other things in which they were not wise. So I departed, conceiving myself to be superior to them for the same reason that I was superior to the politicians.
At last I went to the artisans. I was conscious that I knew nothing at all, as I may say, and I was sure that they knew many fine things; and here I was not mistaken, for they did know many things of which I was ignorant, and in this they certainly were wiser than I was. But I observed that even the good artisans fell into the same error as the poets;—because they were good workmen they thought that they also knew all sorts of high matters, and this defect in them overshadowed their wisdom; and therefore I asked myself on behalf of the oracle, whether I would like to be as I was, neither having their knowledge nor their ignorance, or like them in both; and I made answer to myself and to the oracle that I was better off as I was.
This inquisition has led to my having many enemies of the worst and most dangerous kind, and has given occasion also to many calumnies. And I am called wise, for my hearers always imagine that I myself possess the wisdom which I find wanting in others: but the truth is, O men of Athens, that God only is wise; and by his answer he intends to show that the wisdom of men is worth little or nothing; he is not speaking of Socrates, he is only using my name by way of illustration, as if he said, He, O men, is the wisest, who, like Socrates, knows that his wisdom is in truth worth nothing. And so I go about the world, obedient to the god, and search and make enquiry into the wisdom of any one, whether citizen or stranger, who appears to be wise; and if he is not wise, then in vindication of the oracle I show him that he is not wise; and my occupation quite absorbs me, and I have no time to give either to any public matter of interest or to any concern of my own, but I am in utter poverty by reason of my devotion to the god.
There is another thing:—young men of the richer classes, who have not much to do, come about me of their own accord; they like to hear the pretenders examined, and they often imitate me, and proceed to examine others; there are plenty of persons, as they quickly discover, who think that they know something, but really know little or nothing; and then those who are examined by them instead of being angry with themselves are angry with me: This confounded Socrates, they say; this villainous misleader of youth!—and then if somebody asks them, Why, what evil does he practise or teach? they do not know, and cannot tell; but in order that they may not appear to be at a loss, they repeat the ready-made charges which are used against all philosophers about teaching things up in the clouds and under the earth, and having no gods, and making the worse appear the better cause; for they do not like to confess that their pretence of knowledge has been detected—which is the truth; and as they are numerous and ambitious and energetic, and are drawn up in battle array and have persuasive tongues, they have filled your ears with their loud and inveterate calumnies. And this is the reason why my three accusers, Meletus and Anytus and Lycon, have set upon me; Meletus, who has a quarrel with me on behalf of the poets; Anytus, on behalf of the craftsmen and politicians; Lycon, on behalf of the rhetoricians: and as I said at the beginning, I cannot expect to get rid of such a mass of calumny all in a moment. And this, O men of Athens, is the truth and the whole truth; I have concealed nothing, I have dissembled nothing. And yet, I know that my plainness of speech makes them hate me, and what is their hatred but a proof that I am speaking the truth?—Hence has arisen the prejudice against me; and this is the reason of it, as you will find out either in this or in any future enquiry.
I have said enough in my defence against the first class of my accusers; I turn to the second class. They are headed by Meletus, that good man and true lover of his country, as he calls himself. Against these, too, I must try to make a defence:—Let their affidavit be read: it contains something of this kind: It says that Socrates is a doer of evil, who corrupts the youth; and who does not believe in the gods of the state, but has other new divinities of his own. Such is the charge; and now let us examine the particular counts. He says that I am a doer of evil, and corrupt the youth; but I say, O men of Athens, that Meletus is a doer of evil, in that he pretends to be in earnest when he is only in jest, and is so eager to bring men to trial from a pretended zeal and interest about matters in which he really never had the smallest interest. And the truth of this I will endeavour to prove to you.
Come hither, Meletus, and let me ask a question of you. You think a great deal about the improvement of youth?
Yes, I do.
Tell the judges, then, who is their improver; for you must know, as you have taken the pains to discover their corrupter, and are citing and accusing me before them. Speak, then, and tell the judges who their improver is.—Observe, Meletus, that you are silent, and have nothing to say. But is not this rather disgraceful, and a very considerable proof of what I was saying, that you have no interest in the matter? Speak up, friend, and tell us who their improver is.
The laws.
But that, my good sir, is not my meaning. I want to know who the person is, who, in the first place, knows the laws.
The judges, Socrates, who are present in court.
What, do you mean to say, Meletus, that they are able to instruct and improve youth?
Certainly they are.
What, all of them, or some only and not others?
All of them.
By the goddess Here, that is good news! There are plenty of improvers, then. And what do you say of the audience,—do they improve them?
Yes, they do.
And the senators?
Yes, the senators improve them.
But perhaps the members of the assembly corrupt them?—or do they too improve them?
They improve them.
Then every Athenian improves and elevates them; all with the exception of myself; and I alone am their corrupter? Is that what you affirm?
That is what I stoutly affirm.
I am very unfortunate if you are right. But suppose I ask you a question: How about horses? Does one man do them harm and all the world good? Is not the exact opposite the truth? One man is able to do them good, or at least not many;—the trainer of horses, that is to say, does them good, and others who have to do with them rather injure them? Is not that true, Meletus, of horses, or of any other animals? Most assuredly it is; whether you and Anytus say yes or no. Happy indeed would be the condition of youth if they had one corrupter only, and all the rest of the world were their improvers. But you, Meletus, have sufficiently shown that you never had a thought about the young: your carelessness is seen in your not caring about the very things which you bring against me.
And now, Meletus, I will ask you another question—by Zeus I will: Which is better, to live among bad citizens, or among good ones? Answer, friend, I say; the question is one which may be easily answered. Do not the good do their neighbours good, and the bad do them evil?
Certainly.
And is there anyone who would rather be injured than benefited by those who live with him? Answer, my good friend, the law requires you to answer—does any one like to be injured?
Certainly not.
And when you accuse me of corrupting and deteriorating the youth, do you allege that I corrupt them intentionally or unintentionally?
Intentionally, I say.
But you have just admitted that the good do their neighbours good, and the evil do them evil. Now, is that a truth which your superior wisdom has recognized thus early in life, and am I, at my age, in such darkness and ignorance as not to know that if a man with whom I have to live is corrupted by me, I am very likely to be harmed by him; and yet I corrupt him, and intentionally, too—so you say, although neither I nor any other human being is ever likely to be convinced by you. But either I do not corrupt them, or I corrupt them unintentionally; and on either view of the case you lie. If my offence is unintentional, the law has no cognizance of unintentional offences: you ought to have taken me privately, and warned and admonished me; for if I had been better advised, I should have left off doing what I only did unintentionally—no doubt I should; but you would have nothing to say to me and refused to teach me. And now you bring me up in this court, which is a place not of instruction, but of punishment.
It will be very clear to you, Athenians, as I was saying, that Meletus has no care at all, great or small, about the matter. But still I should like to know, Meletus, in what I am affirmed to corrupt the young. I suppose you mean, as I infer from your indictment, that I teach them not to acknowledge the gods which the state acknowledges, but some other new divinities or spiritual agencies in their stead. These are the lessons by which I corrupt the youth, as you say.
Yes, that I say emphatically.
Then, by the gods, Meletus, of whom we are speaking, tell me and the court, in somewhat plainer terms, what you mean! for I do not as yet understand whether you affirm that I teach other men to acknowledge some gods, and therefore that I do believe in gods, and am not an entire atheist—this you do not lay to my charge,—but only you say that they are not the same gods which the city recognizes—the charge is that they are different gods. Or, do you mean that I am an atheist simply, and a teacher of atheism?
I mean the latter—that you are a complete atheist.
What an extraordinary statement! Why do you think so, Meletus? Do you mean that I do not believe in the godhead of the sun or moon, like other men?
I assure you, judges, that he does not: for he says that the sun is stone, and the moon earth.
Friend Meletus, you think that you are accusing Anaxagoras: and you have but a bad opinion of the judges, if you fancy them illiterate to such a degree as not to know that these doctrines are found in the books of Anaxagoras the Clazomenian, which are full of them. And so, forsooth, the youth are said to be taught them by Socrates, when there are not unfrequently exhibitions of them at the theatre (Probably in allusion to Aristophanes who caricatured, and to Euripides who borrowed the notions of Anaxagoras, as well as to other dramatic poets.) (price of admission one drachma at the most); and they might pay their money, and laugh at Socrates if he pretends to father these extraordinary views. And so, Meletus, you really think that I do not believe in any god?
I swear by Zeus that you believe absolutely in none at all.
Nobody will believe you, Meletus, and I am pretty sure that you do not believe yourself. I cannot help thinking, men of Athens, that Meletus is reckless and impudent, and that he has written this indictment in a spirit of mere wantonness and youthful bravado. Has he not compounded a riddle, thinking to try me? He said to himself:—I shall see whether the wise Socrates will discover my facetious contradiction, or whether I shall be able to deceive him and the rest of them. For he certainly does appear to me to contradict himself in the indictment as much as if he said that Socrates is guilty of not believing in the gods, and yet of believing in them—but this is not like a person who is in earnest.
I should like you, O men of Athens, to join me in examining what I conceive to be his inconsistency; and do you, Meletus, answer. And I must remind the audience of my request that they would not make a disturbance if I speak in my accustomed manner:
Did ever man, Meletus, believe in the existence of human things, and not of human beings?...I wish, men of Athens, that he would answer, and not be always trying to get up an interruption. Did ever any man believe in horsemanship, and not in horses? or in flute-playing, and not in flute-players? No, my friend; I will answer to you and to the court, as you refuse to answer for yourself. There is no man who ever did. But now please to answer the next question: Can a man believe in spiritual and divine agencies, and not in spirits or demigods?
He cannot.
How lucky I am to have extracted that answer, by the assistance of the court! But then you swear in the indictment that I teach and believe in divine or spiritual agencies (new or old, no matter for that); at any rate, I believe in spiritual agencies,—so you say and swear in the affidavit; and yet if I believe in divine beings, how can I help believing in spirits or demigods;—must I not? To be sure I must; and therefore I may assume that your silence gives consent. Now what are spirits or demigods? Are they not either gods or the sons of gods?
Certainly they are.
But this is what I call the facetious riddle invented by you: the demigods or spirits are gods, and you say first that I do not believe in gods, and then again that I do believe in gods; that is, if I believe in demigods. For if the demigods are the illegitimate sons of gods, whether by the nymphs or by any other mothers, of whom they are said to be the sons—what human being will ever believe that there are no gods if they are the sons of gods? You might as well affirm the existence of mules, and deny that of horses and asses. Such nonsense, Meletus, could only have been intended by you to make trial of me. You have put this into the indictment because you had nothing real of which to accuse me. But no one who has a particle of understanding will ever be convinced by you that the same men can believe in divine and superhuman things, and yet not believe that there are gods and demigods and heroes.
I have said enough in answer to the charge of Meletus: any elaborate defence is unnecessary, but I know only too well how many are the enmities which I have incurred, and this is what will be my destruction if I am destroyed;—not Meletus, nor yet Anytus, but the envy and detraction of the world, which has been the death of many good men, and will probably be the death of many more; there is no danger of my being the last of them.
Some one will say: And are you not ashamed, Socrates, of a course of life which is likely to bring you to an untimely end? To him I may fairly answer: There you are mistaken: a man who is good for anything ought not to calculate the chance of living or dying; he ought only to consider whether in doing anything he is doing right or wrong—acting the part of a good man or of a bad. Whereas, upon your view, the heroes who fell at Troy were not good for much, and the son of Thetis above all, who altogether despised danger in comparison with disgrace; and when he was so eager to slay Hector, his goddess mother said to him, that if he avenged his companion Patroclus, and slew Hector, he would die himself—“Fate,” she said, in these or the like words, “waits for you next after Hector;” he, receiving this warning, utterly despised danger and death, and instead of fearing them, feared rather to live in dishonour, and not to avenge his friend. “Let me die forthwith,” he replies, “and be avenged of my enemy, rather than abide here by the beaked ships, a laughing-stock and a burden of the earth.” Had Achilles any thought of death and danger? For wherever a man’s place is, whether the place which he has chosen or that in which he has been placed by a commander, there he ought to remain in the hour of danger; he should not think of death or of anything but of disgrace. And this, O men of Athens, is a true saying.
Strange, indeed, would be my conduct, O men of Athens, if I who, when I was ordered by the generals whom you chose to command me at Potidaea and Amphipolis and Delium, remained where they placed me, like any other man, facing death—if now, when, as I conceive and imagine, God orders me to fulfil the philosopher’s mission of searching into myself and other men, I were to desert my post through fear of death, or any other fear; that would indeed be strange, and I might justly be arraigned in court for denying the existence of the gods, if I disobeyed the oracle because I was afraid of death, fancying that I was wise when I was not wise. For the fear of death is indeed the pretence of wisdom, and not real wisdom, being a pretence of knowing the unknown; and no one knows whether death, which men in their fear apprehend to be the greatest evil, may not be the greatest good. Is not this ignorance of a disgraceful sort, the ignorance which is the conceit that a man knows what he does not know? And in this respect only I believe myself to differ from men in general, and may perhaps claim to be wiser than they are:—that whereas I know but little of the world below, I do not suppose that I know: but I do know that injustice and disobedience to a better, whether God or man, is evil and dishonourable, and I will never fear or avoid a possible good rather than a certain evil. And therefore if you let me go now, and are not convinced by Anytus, who said that since I had been prosecuted I must be put to death; (or if not that I ought never to have been prosecuted at all); and that if I escape now, your sons will all be utterly ruined by listening to my words—if you say to me, Socrates, this time we will not mind Anytus, and you shall be let off, but upon one condition, that you are not to enquire and speculate in this way any more, and that if you are caught doing so again you shall die;—if this was the condition on which you let me go, I should reply: Men of Athens, I honour and love you; but I shall obey God rather than you, and while I have life and strength I shall never cease from the practice and teaching of philosophy, exhorting any one whom I meet and saying to him after my manner: You, my friend,—a citizen of the great and mighty and wise city of Athens,—are you not ashamed of heaping up the greatest amount of money and honour and reputation, and caring so little about wisdom and truth and the greatest improvement of the soul, which you never regard or heed at all? And if the person with whom I am arguing, says: Yes, but I do care; then I do not leave him or let him go at once; but I proceed to interrogate and examine and cross-examine him, and if I think that he has no virtue in him, but only says that he has, I reproach him with undervaluing the greater, and overvaluing the less. And I shall repeat the same words to every one whom I meet, young and old, citizen and alien, but especially to the citizens, inasmuch as they are my brethren. For know that this is the command of God; and I believe that no greater good has ever happened in the state than my service to the God. For I do nothing but go about persuading you all, old and young alike, not to take thought for your persons or your properties, but first and chiefly to care about the greatest improvement of the soul. I tell you that virtue is not given by money, but that from virtue comes money and every other good of man, public as well as private. This is my teaching, and if this is the doctrine which corrupts the youth, I am a mischievous person. But if any one says that this is not my teaching, he is speaking an untruth. Wherefore, O men of Athens, I say to you, do as Anytus bids or not as Anytus bids, and either acquit me or not; but whichever you do, understand that I shall never alter my ways, not even if I have to die many times.
Men of Athens, do not interrupt, but hear me; there was an understanding between us that you should hear me to the end: I have something more to say, at which you may be inclined to cry out; but I believe that to hear me will be good for you, and therefore I beg that you will not cry out. I would have you know, that if you kill such an one as I am, you will injure yourselves more than you will injure me. Nothing will injure me, not Meletus nor yet Anytus—they cannot, for a bad man is not permitted to injure a better than himself. I do not deny that Anytus may, perhaps, kill him, or drive him into exile, or deprive him of civil rights; and he may imagine, and others may imagine, that he is inflicting a great injury upon him: but there I do not agree. For the evil of doing as he is doing—the evil of unjustly taking away the life of another—is greater far.
And now, Athenians, I am not going to argue for my own sake, as you may think, but for yours, that you may not sin against the God by condemning me, who am his gift to you. For if you kill me you will not easily find a successor to me, who, if I may use such a ludicrous figure of speech, am a sort of gadfly, given to the state by God; and the state is a great and noble steed who is tardy in his motions owing to his very size, and requires to be stirred into life. I am that gadfly which God has attached to the state, and all day long and in all places am always fastening upon you, arousing and persuading and reproaching you. You will not easily find another like me, and therefore I would advise you to spare me. I dare say that you may feel out of temper (like a person who is suddenly awakened from sleep), and you think that you might easily strike me dead as Anytus advises, and then you would sleep on for the remainder of your lives, unless God in his care of you sent you another gadfly. When I say that I am given to you by God, the proof of my mission is this:—if I had been like other men, I should not have neglected all my own concerns or patiently seen the neglect of them during all these years, and have been doing yours, coming to you individually like a father or elder brother, exhorting you to regard virtue; such conduct, I say, would be unlike human nature. If I had gained anything, or if my exhortations had been paid, there would have been some sense in my doing so; but now, as you will perceive, not even the impudence of my accusers dares to say that I have ever exacted or sought pay of any one; of that they have no witness. And I have a sufficient witness to the truth of what I say—my poverty.
Some one may wonder why I go about in private giving advice and busying myself with the concerns of others, but do not venture to come forward in public and advise the state. I will tell you why. You have heard me speak at sundry times and in divers places of an oracle or sign which comes to me, and is the divinity which Meletus ridicules in the indictment. This sign, which is a kind of voice, first began to come to me when I was a child; it always forbids but never commands me to do anything which I am going to do. This is what deters me from being a politician. And rightly, as I think. For I am certain, O men of Athens, that if I had engaged in politics, I should have perished long ago, and done no good either to you or to myself. And do not be offended at my telling you the truth: for the truth is, that no man who goes to war with you or any other multitude, honestly striving against the many lawless and unrighteous deeds which are done in a state, will save his life; he who will fight for the right, if he would live even for a brief space, must have a private station and not a public one.
I can give you convincing evidence of what I say, not words only, but what you value far more—actions. Let me relate to you a passage of my own life which will prove to you that I should never have yielded to injustice from any fear of death, and that “as I should have refused to yield” I must have died at once. I will tell you a tale of the courts, not very interesting perhaps, but nevertheless true. The only office of state which I ever held, O men of Athens, was that of senator: the tribe Antiochis, which is my tribe, had the presidency at the trial of the generals who had not taken up the bodies of the slain after the battle of Arginusae; and you proposed to try them in a body, contrary to law, as you all thought afterwards; but at the time I was the only one of the Prytanes who was opposed to the illegality, and I gave my vote against you; and when the orators threatened to impeach and arrest me, and you called and shouted, I made up my mind that I would run the risk, having law and justice with me, rather than take part in your injustice because I feared imprisonment and death. This happened in the days of the democracy. But when the oligarchy of the Thirty was in power, they sent for me and four others into the rotunda, and bade us bring Leon the Salaminian from Salamis, as they wanted to put him to death. This was a specimen of the sort of commands which they were always giving with the view of implicating as many as possible in their crimes; and then I showed, not in word only but in deed, that, if I may be allowed to use such an expression, I cared not a straw for death, and that my great and only care was lest I should do an unrighteous or unholy thing. For the strong arm of that oppressive power did not frighten me into doing wrong; and when we came out of the rotunda the other four went to Salamis and fetched Leon, but I went quietly home. For which I might have lost my life, had not the power of the Thirty shortly afterwards come to an end. And many will witness to my words.
Now do you really imagine that I could have survived all these years, if I had led a public life, supposing that like a good man I had always maintained the right and had made justice, as I ought, the first thing? No indeed, men of Athens, neither I nor any other man. But I have been always the same in all my actions, public as well as private, and never have I yielded any base compliance to those who are slanderously termed my disciples, or to any other. Not that I have any regular disciples. But if any one likes to come and hear me while I am pursuing my mission, whether he be young or old, he is not excluded. Nor do I converse only with those who pay; but any one, whether he be rich or poor, may ask and answer me and listen to my words; and whether he turns out to be a bad man or a good one, neither result can be justly imputed to me; for I never taught or professed to teach him anything. And if any one says that he has ever learned or heard anything from me in private which all the world has not heard, let me tell you that he is lying.
But I shall be asked, Why do people delight in continually conversing with you? I have told you already, Athenians, the whole truth about this matter: they like to hear the cross-examination of the pretenders to wisdom; there is amusement in it. Now this duty of cross-examining other men has been imposed upon me by God; and has been signified to me by oracles, visions, and in every way in which the will of divine power was ever intimated to any one. This is true, O Athenians, or, if not true, would be soon refuted. If I am or have been corrupting the youth, those of them who are now grown up and have become sensible that I gave them bad advice in the days of their youth should come forward as accusers, and take their revenge; or if they do not like to come themselves, some of their relatives, fathers, brothers, or other kinsmen, should say what evil their families have suffered at my hands. Now is their time. Many of them I see in the court. There is Crito, who is of the same age and of the same deme with myself, and there is Critobulus his son, whom I also see. Then again there is Lysanias of Sphettus, who is the father of Aeschines—he is present; and also there is Antiphon of Cephisus, who is the father of Epigenes; and there are the brothers of several who have associated with me. There is Nicostratus the son of Theosdotides, and the brother of Theodotus (now Theodotus himself is dead, and therefore he, at any rate, will not seek to stop him); and there is Paralus the son of Demodocus, who had a brother Theages; and Adeimantus the son of Ariston, whose brother Plato is present; and Aeantodorus, who is the brother of Apollodorus, whom I also see. I might mention a great many others, some of whom Meletus should have produced as witnesses in the course of his speech; and let him still produce them, if he has forgotten—I will make way for him. And let him say, if he has any testimony of the sort which he can produce. Nay, Athenians, the very opposite is the truth. For all these are ready to witness on behalf of the corrupter, of the injurer of their kindred, as Meletus and Anytus call me; not the corrupted youth only—there might have been a motive for that—but their uncorrupted elder relatives. Why should they too support me with their testimony? Why, indeed, except for the sake of truth and justice, and because they know that I am speaking the truth, and that Meletus is a liar.
Well, Athenians, this and the like of this is all the defence which I have to offer. Yet a word more. Perhaps there may be some one who is offended at me, when he calls to mind how he himself on a similar, or even a less serious occasion, prayed and entreated the judges with many tears, and how he produced his children in court, which was a moving spectacle, together with a host of relations and friends; whereas I, who am probably in danger of my life, will do none of these things. The contrast may occur to his mind, and he may be set against me, and vote in anger because he is displeased at me on this account. Now if there be such a person among you,—mind, I do not say that there is,—to him I may fairly reply: My friend, I am a man, and like other men, a creature of flesh and blood, and not “of wood or stone,” as Homer says; and I have a family, yes, and sons, O Athenians, three in number, one almost a man, and two others who are still young; and yet I will not bring any of them hither in order to petition you for an acquittal. And why not? Not from any self-assertion or want of respect for you. Whether I am or am not afraid of death is another question, of which I will not now speak. But, having regard to public opinion, I feel that such conduct would be discreditable to myself, and to you, and to the whole state. One who has reached my years, and who has a name for wisdom, ought not to demean himself. Whether this opinion of me be deserved or not, at any rate the world has decided that Socrates is in some way superior to other men. And if those among you who are said to be superior in wisdom and courage, and any other virtue, demean themselves in this way, how shameful is their conduct! I have seen men of reputation, when they have been condemned, behaving in the strangest manner: they seemed to fancy that they were going to suffer something dreadful if they died, and that they could be immortal if you only allowed them to live; and I think that such are a dishonour to the state, and that any stranger coming in would have said of them that the most eminent men of Athens, to whom the Athenians themselves give honour and command, are no better than women. And I say that these things ought not to be done by those of us who have a reputation; and if they are done, you ought not to permit them; you ought rather to show that you are far more disposed to condemn the man who gets up a doleful scene and makes the city ridiculous, than him who holds his peace.
But, setting aside the question of public opinion, there seems to be something wrong in asking a favour of a judge, and thus procuring an acquittal, instead of informing and convincing him. For his duty is, not to make a present of justice, but to give judgment; and he has sworn that he will judge according to the laws, and not according to his own good pleasure; and we ought not to encourage you, nor should you allow yourselves to be encouraged, in this habit of perjury—there can be no piety in that. Do not then require me to do what I consider dishonourable and impious and wrong, especially now, when I am being tried for impiety on the indictment of Meletus. For if, O men of Athens, by force of persuasion and entreaty I could overpower your oaths, then I should be teaching you to believe that there are no gods, and in defending should simply convict myself of the charge of not believing in them. But that is not so—far otherwise. For I do believe that there are gods, and in a sense higher than that in which any of my accusers believe in them. And to you and to God I commit my cause, to be determined by you as is best for you and me.
There are many reasons why I am not grieved, O men of Athens, at the vote of condemnation. I expected it, and am only surprised that the votes are so nearly equal; for I had thought that the majority against me would have been far larger; but now, had thirty votes gone over to the other side, I should have been acquitted. And I may say, I think, that I have escaped Meletus. I may say more; for without the assistance of Anytus and Lycon, any one may see that he would not have had a fifth part of the votes, as the law requires, in which case he would have incurred a fine of a thousand drachmae.
And so he proposes death as the penalty. And what shall I propose on my part, O men of Athens? Clearly that which is my due. And what is my due? What return shall be made to the man who has never had the wit to be idle during his whole life; but has been careless of what the many care for—wealth, and family interests, and military offices, and speaking in the assembly, and magistracies, and plots, and parties. Reflecting that I was really too honest a man to be a politician and live, I did not go where I could do no good to you or to myself; but where I could do the greatest good privately to every one of you, thither I went, and sought to persuade every man among you that he must look to himself, and seek virtue and wisdom before he looks to his private interests, and look to the state before he looks to the interests of the state; and that this should be the order which he observes in all his actions. What shall be done to such an one? Doubtless some good thing, O men of Athens, if he has his reward; and the good should be of a kind suitable to him. What would be a reward suitable to a poor man who is your benefactor, and who desires leisure that he may instruct you? There can be no reward so fitting as maintenance in the Prytaneum, O men of Athens, a reward which he deserves far more than the citizen who has won the prize at Olympia in the horse or chariot race, whether the chariots were drawn by two horses or by many. For I am in want, and he has enough; and he only gives you the appearance of happiness, and I give you the reality. And if I am to estimate the penalty fairly, I should say that maintenance in the Prytaneum is the just return.
Perhaps you think that I am braving you in what I am saying now, as in what I said before about the tears and prayers. But this is not so. I speak rather because I am convinced that I never intentionally wronged any one, although I cannot convince you—the time has been too short; if there were a law at Athens, as there is in other cities, that a capital cause should not be decided in one day, then I believe that I should have convinced you. But I cannot in a moment refute great slanders; and, as I am convinced that I never wronged another, I will assuredly not wrong myself. I will not say of myself that I deserve any evil, or propose any penalty. Why should I? because I am afraid of the penalty of death which Meletus proposes? When I do not know whether death is a good or an evil, why should I propose a penalty which would certainly be an evil? Shall I say imprisonment? And why should I live in prison, and be the slave of the magistrates of the year—of the Eleven? Or shall the penalty be a fine, and imprisonment until the fine is paid? There is the same objection. I should have to lie in prison, for money I have none, and cannot pay. And if I say exile (and this may possibly be the penalty which you will affix), I must indeed be blinded by the love of life, if I am so irrational as to expect that when you, who are my own citizens, cannot endure my discourses and words, and have found them so grievous and odious that you will have no more of them, others are likely to endure me. No indeed, men of Athens, that is not very likely. And what a life should I lead, at my age, wandering from city to city, ever changing my place of exile, and always being driven out! For I am quite sure that wherever I go, there, as here, the young men will flock to me; and if I drive them away, their elders will drive me out at their request; and if I let them come, their fathers and friends will drive me out for their sakes.
Some one will say: Yes, Socrates, but cannot you hold your tongue, and then you may go into a foreign city, and no one will interfere with you? Now I have great difficulty in making you understand my answer to this. For if I tell you that to do as you say would be a disobedience to the God, and therefore that I cannot hold my tongue, you will not believe that I am serious; and if I say again that daily to discourse about virtue, and of those other things about which you hear me examining myself and others, is the greatest good of man, and that the unexamined life is not worth living, you are still less likely to believe me. Yet I say what is true, although a thing of which it is hard for me to persuade you. Also, I have never been accustomed to think that I deserve to suffer any harm. Had I money I might have estimated the offence at what I was able to pay, and not have been much the worse. But I have none, and therefore I must ask you to proportion the fine to my means. Well, perhaps I could afford a mina, and therefore I propose that penalty: Plato, Crito, Critobulus, and Apollodorus, my friends here, bid me say thirty minæ, and they will be the sureties. Let thirty minæ be the penalty; for which sum they will be ample security to you.
Not much time will be gained, O Athenians, in return for the evil name which you will get from the detractors of the city, who will say that you killed Socrates, a wise man; for they will call me wise, even although I am not wise, when they want to reproach you. If you had waited a little while, your desire would have been fulfilled in the course of nature. For I am far advanced in years, as you may perceive, and not far from death. I am speaking now not to all of you, but only to those who have condemned me to death. And I have another thing to say to them: you think that I was convicted because I had no words of the sort which would have procured my acquittal—I mean, if I had thought fit to leave nothing undone or unsaid. Not so; the deficiency which led to my conviction was not of words—certainly not. But I had not the boldness or impudence or inclination to address you as you would have liked me to do, weeping and wailing and lamenting, and saying and doing many things which you have been accustomed to hear from others, and which, as I maintain, are unworthy of me. I thought at the time that I ought not to do anything common or mean when in danger: nor do I now repent of the style of my defence; I would rather die having spoken after my manner, than speak in your manner and live. For neither in war nor yet at law ought I or any man to use every way of escaping death. Often in battle there can be no doubt that if a man will throw away his arms, and fall on his knees before his pursuers, he may escape death; and in other dangers there are other ways of escaping death, if a man is willing to say and do anything. The difficulty, my friends, is not to avoid death, but to avoid unrighteousness; for that runs faster than death. I am old and move slowly, and the slower runner has overtaken me, and my accusers are keen and quick, and the faster runner, who is unrighteousness, has overtaken them. And now I depart hence condemned by you to suffer the penalty of death,—they too go their ways condemned by the truth to suffer the penalty of villainy and wrong; and I must abide by my award—let them abide by theirs. I suppose that these things may be regarded as fated,—and I think that they are well.
And now, O men who have condemned me, I would fain prophesy to you; for I am about to die, and in the hour of death men are gifted with prophetic power. And I prophesy to you who are my murderers, that immediately after my departure punishment far heavier than you have inflicted on me will surely await you. Me you have killed because you wanted to escape the accuser, and not to give an account of your lives. But that will not be as you suppose: far otherwise. For I say that there will be more accusers of you than there are now; accusers whom hitherto I have restrained: and as they are younger they will be more inconsiderate with you, and you will be more offended at them. If you think that by killing men you can prevent some one from censuring your evil lives, you are mistaken; that is not a way of escape which is either possible or honourable; the easiest and the noblest way is not to be disabling others, but to be improving yourselves. This is the prophecy which I utter before my departure to the judges who have condemned me.
Friends, who would have acquitted me, I would like also to talk with you about the thing which has come to pass, while the magistrates are busy, and before I go to the place at which I must die. Stay then a little, for we may as well talk with one another while there is time. You are my friends, and I should like to show you the meaning of this event which has happened to me. O my judges—for you I may truly call judges—I should like to tell you of a wonderful circumstance. Hitherto the divine faculty of which the internal oracle is the source has constantly been in the habit of opposing me even about trifles, if I was going to make a slip or error in any matter; and now as you see there has come upon me that which may be thought, and is generally believed to be, the last and worst evil. But the oracle made no sign of opposition, either when I was leaving my house in the morning, or when I was on my way to the court, or while I was speaking, at anything which I was going to say; and yet I have often been stopped in the middle of a speech, but now in nothing I either said or did touching the matter in hand has the oracle opposed me. What do I take to be the explanation of this silence? I will tell you. It is an intimation that what has happened to me is a good, and that those of us who think that death is an evil are in error. For the customary sign would surely have opposed me had I been going to evil and not to good.
Let us reflect in another way, and we shall see that there is great reason to hope that death is a good; for one of two things—either death is a state of nothingness and utter unconsciousness, or, as men say, there is a change and migration of the soul from this world to another. Now if you suppose that there is no consciousness, but a sleep like the sleep of him who is undisturbed even by dreams, death will be an unspeakable gain. For if a person were to select the night in which his sleep was undisturbed even by dreams, and were to compare with this the other days and nights of his life, and then were to tell us how many days and nights he had passed in the course of his life better and more pleasantly than this one, I think that any man, I will not say a private man, but even the great king will not find many such days or nights, when compared with the others. Now if death be of such a nature, I say that to die is gain; for eternity is then only a single night. But if death is the journey to another place, and there, as men say, all the dead abide, what good, O my friends and judges, can be greater than this? If indeed when the pilgrim arrives in the world below, he is delivered from the professors of justice in this world, and finds the true judges who are said to give judgment there, Minos and Rhadamanthus and Aeacus and Triptolemus, and other sons of God who were righteous in their own life, that pilgrimage will be worth making. What would not a man give if he might converse with Orpheus and Musaeus and Hesiod and Homer? Nay, if this be true, let me die again and again. I myself, too, shall have a wonderful interest in there meeting and conversing with Palamedes, and Ajax the son of Telamon, and any other ancient hero who has suffered death through an unjust judgment; and there will be no small pleasure, as I think, in comparing my own sufferings with theirs. Above all, I shall then be able to continue my search into true and false knowledge; as in this world, so also in the next; and I shall find out who is wise, and who pretends to be wise, and is not. What would not a man give, O judges, to be able to examine the leader of the great Trojan expedition; or Odysseus or Sisyphus, or numberless others, men and women too! What infinite delight would there be in conversing with them and asking them questions! In another world they do not put a man to death for asking questions: assuredly not. For besides being happier than we are, they will be immortal, if what is said is true.
Wherefore, O judges, be of good cheer about death, and know of a certainty, that no evil can happen to a good man, either in life or after death. He and his are not neglected by the gods; nor has my own approaching end happened by mere chance. But I see clearly that the time had arrived when it was better for me to die and be released from trouble; wherefore the oracle gave no sign. For which reason, also, I am not angry with my condemners, or with my accusers; they have done me no harm, although they did not mean to do me any good; and for this I may gently blame them.
Still I have a favour to ask of them. When my sons are grown up, I would ask you, O my friends, to punish them; and I would have you trouble them, as I have troubled you, if they seem to care about riches, or anything, more than about virtue; or if they pretend to be something when they are really nothing,—then reprove them, as I have reproved you, for not caring about that for which they ought to care, and thinking that they are something when they are really nothing. And if you do this, both I and my sons will have received justice at your hands.
The hour of departure has arrived, and we go our ways—I to die, and you to live. Which is better God only knows.', '2026-06-26 17:22:26.115', true, ${defaultUser.id})
RETURNING id, title
`
  );

  const revelations = await prisma.$queryRawUnsafe(`INSERT INTO public.posts (title, content, posted_at, published, "ownerId") VALUES ('Revelations', '1:1 The Revelation of Jesus Christ, which God gave unto him, to shew
unto his servants things which must shortly come to pass; and he sent
and signified it by his angel unto his servant John: 1:2 Who bare
record of the word of God, and of the testimony of Jesus Christ, and
of all things that he saw.

1:3 Blessed is he that readeth, and they that hear the words of this
prophecy, and keep those things which are written therein: for the
time is at hand.

1:4 John to the seven churches which are in Asia: Grace be unto you,
and peace, from him which is, and which was, and which is to come; and
from the seven Spirits which are before his throne; 1:5 And from Jesus
Christ, who is the faithful witness, and the first begotten of the
dead, and the prince of the kings of the earth. Unto him that loved
us, and washed us from our sins in his own blood, 1:6 And hath made us
kings and priests unto God and his Father; to him be glory and
dominion for ever and ever. Amen.

1:7 Behold, he cometh with clouds; and every eye shall see him, and
they also which pierced him: and all kindreds of the earth shall wail
because of him. Even so, Amen.

1:8 I am Alpha and Omega, the beginning and the ending, saith the
Lord, which is, and which was, and which is to come, the Almighty.

1:9 I John, who also am your brother, and companion in tribulation,
and in the kingdom and patience of Jesus Christ, was in the isle that
is called Patmos, for the word of God, and for the testimony of Jesus
Christ.

1:10 I was in the Spirit on the Lord''s day, and heard behind me a
great voice, as of a trumpet, 1:11 Saying, I am Alpha and Omega, the
first and the last: and, What thou seest, write in a book, and send it
unto the seven churches which are in Asia; unto Ephesus, and unto
Smyrna, and unto Pergamos, and unto Thyatira, and unto Sardis, and
unto Philadelphia, and unto Laodicea.

1:12 And I turned to see the voice that spake with me. And being
turned, I saw seven golden candlesticks; 1:13 And in the midst of the
seven candlesticks one like unto the Son of man, clothed with a
garment down to the foot, and girt about the paps with a golden
girdle.

1:14 His head and his hairs were white like wool, as white as snow;
and his eyes were as a flame of fire; 1:15 And his feet like unto fine
brass, as if they burned in a furnace; and his voice as the sound of
many waters.

1:16 And he had in his right hand seven stars: and out of his mouth
went a sharp twoedged sword: and his countenance was as the sun
shineth in his strength.

1:17 And when I saw him, I fell at his feet as dead. And he laid his
right hand upon me, saying unto me, Fear not; I am the first and the
last: 1:18 I am he that liveth, and was dead; and, behold, I am alive
for evermore, Amen; and have the keys of hell and of death.

1:19 Write the things which thou hast seen, and the things which are,
and the things which shall be hereafter; 1:20 The mystery of the seven
stars which thou sawest in my right hand, and the seven golden
candlesticks. The seven stars are the angels of the seven churches:
and the seven candlesticks which thou sawest are the seven churches.

2:1 Unto the angel of the church of Ephesus write; These things saith
he that holdeth the seven stars in his right hand, who walketh in the
midst of the seven golden candlesticks; 2:2 I know thy works, and thy
labour, and thy patience, and how thou canst not bear them which are
evil: and thou hast tried them which say they are apostles, and are
not, and hast found them liars: 2:3 And hast borne, and hast patience,
and for my name''s sake hast laboured, and hast not fainted.

2:4 Nevertheless I have somewhat against thee, because thou hast left
thy first love.

2:5 Remember therefore from whence thou art fallen, and repent, and do
the first works; or else I will come unto thee quickly, and will
remove thy candlestick out of his place, except thou repent.

2:6 But this thou hast, that thou hatest the deeds of the
Nicolaitanes, which I also hate.

2:7 He that hath an ear, let him hear what the Spirit saith unto the
churches; To him that overcometh will I give to eat of the tree of
life, which is in the midst of the paradise of God.

2:8 And unto the angel of the church in Smyrna write; These things
saith the first and the last, which was dead, and is alive; 2:9 I know
thy works, and tribulation, and poverty, (but thou art rich) and I
know the blasphemy of them which say they are Jews, and are not, but
are the synagogue of Satan.

2:10 Fear none of those things which thou shalt suffer: behold, the
devil shall cast some of you into prison, that ye may be tried; and ye
shall have tribulation ten days: be thou faithful unto death, and I
will give thee a crown of life.

2:11 He that hath an ear, let him hear what the Spirit saith unto the
churches; He that overcometh shall not be hurt of the second death.

2:12 And to the angel of the church in Pergamos write; These things
saith he which hath the sharp sword with two edges; 2:13 I know thy
works, and where thou dwellest, even where Satan''s seat is: and thou
holdest fast my name, and hast not denied my faith, even in those days
wherein Antipas was my faithful martyr, who was slain among you, where
Satan dwelleth.

2:14 But I have a few things against thee, because thou hast there
them that hold the doctrine of Balaam, who taught Balac to cast a
stumblingblock before the children of Israel, to eat things sacrificed
unto idols, and to commit fornication.

2:15 So hast thou also them that hold the doctrine of the
Nicolaitanes, which thing I hate.

2:16 Repent; or else I will come unto thee quickly, and will fight
against them with the sword of my mouth.

2:17 He that hath an ear, let him hear what the Spirit saith unto the
churches; To him that overcometh will I give to eat of the hidden
manna, and will give him a white stone, and in the stone a new name
written, which no man knoweth saving he that receiveth it.

2:18 And unto the angel of the church in Thyatira write; These things
saith the Son of God, who hath his eyes like unto a flame of fire, and
his feet are like fine brass; 2:19 I know thy works, and charity, and
service, and faith, and thy patience, and thy works; and the last to
be more than the first.

2:20 Notwithstanding I have a few things against thee, because thou
sufferest that woman Jezebel, which calleth herself a prophetess, to
teach and to seduce my servants to commit fornication, and to eat
things sacrificed unto idols.

2:21 And I gave her space to repent of her fornication; and she
repented not.

2:22 Behold, I will cast her into a bed, and them that commit adultery
with her into great tribulation, except they repent of their deeds.

2:23 And I will kill her children with death; and all the churches
shall know that I am he which searcheth the reins and hearts: and I
will give unto every one of you according to your works.

2:24 But unto you I say, and unto the rest in Thyatira, as many as
have not this doctrine, and which have not known the depths of Satan,
as they speak; I will put upon you none other burden.

2:25 But that which ye have already hold fast till I come.

2:26 And he that overcometh, and keepeth my works unto the end, to him
will I give power over the nations: 2:27 And he shall rule them with a
rod of iron; as the vessels of a potter shall they be broken to
shivers: even as I received of my Father.

2:28 And I will give him the morning star.

2:29 He that hath an ear, let him hear what the Spirit saith unto the
churches.

3:1 And unto the angel of the church in Sardis write; These things
saith he that hath the seven Spirits of God, and the seven stars; I
know thy works, that thou hast a name that thou livest, and art dead.

3:2 Be watchful, and strengthen the things which remain, that are
ready to die: for I have not found thy works perfect before God.

3:3 Remember therefore how thou hast received and heard, and hold
fast, and repent. If therefore thou shalt not watch, I will come on
thee as a thief, and thou shalt not know what hour I will come upon
thee.

3:4 Thou hast a few names even in Sardis which have not defiled their
garments; and they shall walk with me in white: for they are worthy.

3:5 He that overcometh, the same shall be clothed in white raiment;
and I will not blot out his name out of the book of life, but I will
confess his name before my Father, and before his angels.

3:6 He that hath an ear, let him hear what the Spirit saith unto the
churches.

3:7 And to the angel of the church in Philadelphia write; These things
saith he that is holy, he that is true, he that hath the key of David,
he that openeth, and no man shutteth; and shutteth, and no man
openeth; 3:8 I know thy works: behold, I have set before thee an open
door, and no man can shut it: for thou hast a little strength, and
hast kept my word, and hast not denied my name.

3:9 Behold, I will make them of the synagogue of Satan, which say they
are Jews, and are not, but do lie; behold, I will make them to come
and worship before thy feet, and to know that I have loved thee.

3:10 Because thou hast kept the word of my patience, I also will keep
thee from the hour of temptation, which shall come upon all the world,
to try them that dwell upon the earth.

3:11 Behold, I come quickly: hold that fast which thou hast, that no
man take thy crown.

3:12 Him that overcometh will I make a pillar in the temple of my God,
and he shall go no more out: and I will write upon him the name of my
God, and the name of the city of my God, which is new Jerusalem, which
cometh down out of heaven from my God: and I will write upon him my
new name.

3:13 He that hath an ear, let him hear what the Spirit saith unto the
churches.

3:14 And unto the angel of the church of the Laodiceans write; These
things saith the Amen, the faithful and true witness, the beginning of
the creation of God; 3:15 I know thy works, that thou art neither cold
nor hot: I would thou wert cold or hot.

3:16 So then because thou art lukewarm, and neither cold nor hot, I
will spue thee out of my mouth.

3:17 Because thou sayest, I am rich, and increased with goods, and
have need of nothing; and knowest not that thou art wretched, and
miserable, and poor, and blind, and naked: 3:18 I counsel thee to buy
of me gold tried in the fire, that thou mayest be rich; and white
raiment, that thou mayest be clothed, and that the shame of thy
nakedness do not appear; and anoint thine eyes with eyesalve, that
thou mayest see.

3:19 As many as I love, I rebuke and chasten: be zealous therefore,
and repent.

3:20 Behold, I stand at the door, and knock: if any man hear my voice,
and open the door, I will come in to him, and will sup with him, and
he with me.

3:21 To him that overcometh will I grant to sit with me in my throne,
even as I also overcame, and am set down with my Father in his throne.

3:22 He that hath an ear, let him hear what the Spirit saith unto the
churches.

4:1 After this I looked, and, behold, a door was opened in heaven: and
the first voice which I heard was as it were of a trumpet talking with
me; which said, Come up hither, and I will shew thee things which must
be hereafter.

4:2 And immediately I was in the spirit: and, behold, a throne was set
in heaven, and one sat on the throne.

4:3 And he that sat was to look upon like a jasper and a sardine
stone: and there was a rainbow round about the throne, in sight like
unto an emerald.

4:4 And round about the throne were four and twenty seats: and upon
the seats I saw four and twenty elders sitting, clothed in white
raiment; and they had on their heads crowns of gold.

4:5 And out of the throne proceeded lightnings and thunderings and
voices: and there were seven lamps of fire burning before the throne,
which are the seven Spirits of God.

4:6 And before the throne there was a sea of glass like unto crystal:
and in the midst of the throne, and round about the throne, were four
beasts full of eyes before and behind.

4:7 And the first beast was like a lion, and the second beast like a
calf, and the third beast had a face as a man, and the fourth beast
was like a flying eagle.

4:8 And the four beasts had each of them six wings about him; and they
were full of eyes within: and they rest not day and night, saying,
Holy, holy, holy, LORD God Almighty, which was, and is, and is to
come.

4:9 And when those beasts give glory and honour and thanks to him that
sat on the throne, who liveth for ever and ever, 4:10 The four and
twenty elders fall down before him that sat on the throne, and worship
him that liveth for ever and ever, and cast their crowns before the
throne, saying, 4:11 Thou art worthy, O Lord, to receive glory and
honour and power: for thou hast created all things, and for thy
pleasure they are and were created.

5:1 And I saw in the right hand of him that sat on the throne a book
written within and on the backside, sealed with seven seals.

5:2 And I saw a strong angel proclaiming with a loud voice, Who is
worthy to open the book, and to loose the seals thereof?  5:3 And no
man in heaven, nor in earth, neither under the earth, was able to open
the book, neither to look thereon.

5:4 And I wept much, because no man was found worthy to open and to
read the book, neither to look thereon.

5:5 And one of the elders saith unto me, Weep not: behold, the Lion of
the tribe of Juda, the Root of David, hath prevailed to open the book,
and to loose the seven seals thereof.

5:6 And I beheld, and, lo, in the midst of the throne and of the four
beasts, and in the midst of the elders, stood a Lamb as it had been
slain, having seven horns and seven eyes, which are the seven Spirits
of God sent forth into all the earth.

5:7 And he came and took the book out of the right hand of him that
sat upon the throne.

5:8 And when he had taken the book, the four beasts and four and
twenty elders fell down before the Lamb, having every one of them
harps, and golden vials full of odours, which are the prayers of
saints.

5:9 And they sung a new song, saying, Thou art worthy to take the
book, and to open the seals thereof: for thou wast slain, and hast
redeemed us to God by thy blood out of every kindred, and tongue, and
people, and nation; 5:10 And hast made us unto our God kings and
priests: and we shall reign on the earth.

5:11 And I beheld, and I heard the voice of many angels round about
the throne and the beasts and the elders: and the number of them was
ten thousand times ten thousand, and thousands of thousands; 5:12
Saying with a loud voice, Worthy is the Lamb that was slain to receive
power, and riches, and wisdom, and strength, and honour, and glory,
and blessing.

5:13 And every creature which is in heaven, and on the earth, and
under the earth, and such as are in the sea, and all that are in them,
heard I saying, Blessing, and honour, and glory, and power, be unto
him that sitteth upon the throne, and unto the Lamb for ever and ever.

5:14 And the four beasts said, Amen. And the four and twenty elders
fell down and worshipped him that liveth for ever and ever.

6:1 And I saw when the Lamb opened one of the seals, and I heard, as
it were the noise of thunder, one of the four beasts saying, Come and
see.

6:2 And I saw, and behold a white horse: and he that sat on him had a
bow; and a crown was given unto him: and he went forth conquering, and
to conquer.

6:3 And when he had opened the second seal, I heard the second beast
say, Come and see.

6:4 And there went out another horse that was red: and power was given
to him that sat thereon to take peace from the earth, and that they
should kill one another: and there was given unto him a great sword.

6:5 And when he had opened the third seal, I heard the third beast
say, Come and see. And I beheld, and lo a black horse; and he that sat
on him had a pair of balances in his hand.

6:6 And I heard a voice in the midst of the four beasts say, A measure
of wheat for a penny, and three measures of barley for a penny; and
see thou hurt not the oil and the wine.

6:7 And when he had opened the fourth seal, I heard the voice of the
fourth beast say, Come and see.

6:8 And I looked, and behold a pale horse: and his name that sat on
him was Death, and Hell followed with him. And power was given unto
them over the fourth part of the earth, to kill with sword, and with
hunger, and with death, and with the beasts of the earth.

6:9 And when he had opened the fifth seal, I saw under the altar the
souls of them that were slain for the word of God, and for the
testimony which they held: 6:10 And they cried with a loud voice,
saying, How long, O Lord, holy and true, dost thou not judge and
avenge our blood on them that dwell on the earth?  6:11 And white
robes were given unto every one of them; and it was said unto them,
that they should rest yet for a little season, until their
fellowservants also and their brethren, that should be killed as they
were, should be fulfilled.

6:12 And I beheld when he had opened the sixth seal, and, lo, there
was a great earthquake; and the sun became black as sackcloth of hair,
and the moon became as blood; 6:13 And the stars of heaven fell unto
the earth, even as a fig tree casteth her untimely figs, when she is
shaken of a mighty wind.

6:14 And the heaven departed as a scroll when it is rolled together;
and every mountain and island were moved out of their places.

6:15 And the kings of the earth, and the great men, and the rich men,
and the chief captains, and the mighty men, and every bondman, and
every free man, hid themselves in the dens and in the rocks of the
mountains; 6:16 And said to the mountains and rocks, Fall on us, and
hide us from the face of him that sitteth on the throne, and from the
wrath of the Lamb: 6:17 For the great day of his wrath is come; and
who shall be able to stand?  7:1 And after these things I saw four
angels standing on the four corners of the earth, holding the four
winds of the earth, that the wind should not blow on the earth, nor on
the sea, nor on any tree.

7:2 And I saw another angel ascending from the east, having the seal
of the living God: and he cried with a loud voice to the four angels,
to whom it was given to hurt the earth and the sea, 7:3 Saying, Hurt
not the earth, neither the sea, nor the trees, till we have sealed the
servants of our God in their foreheads.

7:4 And I heard the number of them which were sealed: and there were
sealed an hundred and forty and four thousand of all the tribes of the
children of Israel.

7:5 Of the tribe of Juda were sealed twelve thousand. Of the tribe of
Reuben were sealed twelve thousand. Of the tribe of Gad were sealed
twelve thousand.

7:6 Of the tribe of Aser were sealed twelve thousand. Of the tribe of
Nephthalim were sealed twelve thousand. Of the tribe of Manasses were
sealed twelve thousand.

7:7 Of the tribe of Simeon were sealed twelve thousand. Of the tribe
of Levi were sealed twelve thousand. Of the tribe of Issachar were
sealed twelve thousand.

7:8 Of the tribe of Zabulon were sealed twelve thousand. Of the tribe
of Joseph were sealed twelve thousand. Of the tribe of Benjamin were
sealed twelve thousand.

7:9 After this I beheld, and, lo, a great multitude, which no man
could number, of all nations, and kindreds, and people, and tongues,
stood before the throne, and before the Lamb, clothed with white
robes, and palms in their hands; 7:10 And cried with a loud voice,
saying, Salvation to our God which sitteth upon the throne, and unto
the Lamb.

7:11 And all the angels stood round about the throne, and about the
elders and the four beasts, and fell before the throne on their faces,
and worshipped God, 7:12 Saying, Amen: Blessing, and glory, and
wisdom, and thanksgiving, and honour, and power, and might, be unto
our God for ever and ever. Amen.

7:13 And one of the elders answered, saying unto me, What are these
which are arrayed in white robes? and whence came they?  7:14 And I
said unto him, Sir, thou knowest. And he said to me, These are they
which came out of great tribulation, and have washed their robes, and
made them white in the blood of the Lamb.

7:15 Therefore are they before the throne of God, and serve him day
and night in his temple: and he that sitteth on the throne shall dwell
among them.

7:16 They shall hunger no more, neither thirst any more; neither shall
the sun light on them, nor any heat.

7:17 For the Lamb which is in the midst of the throne shall feed them,
and shall lead them unto living fountains of waters: and God shall
wipe away all tears from their eyes.

8:1 And when he had opened the seventh seal, there was silence in
heaven about the space of half an hour.

8:2 And I saw the seven angels which stood before God; and to them
were given seven trumpets.

8:3 And another angel came and stood at the altar, having a golden
censer; and there was given unto him much incense, that he should
offer it with the prayers of all saints upon the golden altar which
was before the throne.

8:4 And the smoke of the incense, which came with the prayers of the
saints, ascended up before God out of the angel''s hand.

8:5 And the angel took the censer, and filled it with fire of the
altar, and cast it into the earth: and there were voices, and
thunderings, and lightnings, and an earthquake.

8:6 And the seven angels which had the seven trumpets prepared
themselves to sound.

8:7 The first angel sounded, and there followed hail and fire mingled
with blood, and they were cast upon the earth: and the third part of
trees was burnt up, and all green grass was burnt up.

8:8 And the second angel sounded, and as it were a great mountain
burning with fire was cast into the sea: and the third part of the sea
became blood; 8:9 And the third part of the creatures which were in
the sea, and had life, died; and the third part of the ships were
destroyed.

8:10 And the third angel sounded, and there fell a great star from
heaven, burning as it were a lamp, and it fell upon the third part of
the rivers, and upon the fountains of waters; 8:11 And the name of the
star is called Wormwood: and the third part of the waters became
wormwood; and many men died of the waters, because they were made
bitter.

8:12 And the fourth angel sounded, and the third part of the sun was
smitten, and the third part of the moon, and the third part of the
stars; so as the third part of them was darkened, and the day shone
not for a third part of it, and the night likewise.

8:13 And I beheld, and heard an angel flying through the midst of
heaven, saying with a loud voice, Woe, woe, woe, to the inhabiters of
the earth by reason of the other voices of the trumpet of the three
angels, which are yet to sound!  9:1 And the fifth angel sounded, and
I saw a star fall from heaven unto the earth: and to him was given the
key of the bottomless pit.

9:2 And he opened the bottomless pit; and there arose a smoke out of
the pit, as the smoke of a great furnace; and the sun and the air were
darkened by reason of the smoke of the pit.

9:3 And there came out of the smoke locusts upon the earth: and unto
them was given power, as the scorpions of the earth have power.

9:4 And it was commanded them that they should not hurt the grass of
the earth, neither any green thing, neither any tree; but only those
men which have not the seal of God in their foreheads.

9:5 And to them it was given that they should not kill them, but that
they should be tormented five months: and their torment was as the
torment of a scorpion, when he striketh a man.

9:6 And in those days shall men seek death, and shall not find it; and
shall desire to die, and death shall flee from them.

9:7 And the shapes of the locusts were like unto horses prepared unto
battle; and on their heads were as it were crowns like gold, and their
faces were as the faces of men.

9:8 And they had hair as the hair of women, and their teeth were as
the teeth of lions.

9:9 And they had breastplates, as it were breastplates of iron; and
the sound of their wings was as the sound of chariots of many horses
running to battle.

9:10 And they had tails like unto scorpions, and there were stings in
their tails: and their power was to hurt men five months.

9:11 And they had a king over them, which is the angel of the
bottomless pit, whose name in the Hebrew tongue is Abaddon, but in the
Greek tongue hath his name Apollyon.

9:12 One woe is past; and, behold, there come two woes more hereafter.

9:13 And the sixth angel sounded, and I heard a voice from the four
horns of the golden altar which is before God, 9:14 Saying to the
sixth angel which had the trumpet, Loose the four angels which are
bound in the great river Euphrates.

9:15 And the four angels were loosed, which were prepared for an hour,
and a day, and a month, and a year, for to slay the third part of men.

9:16 And the number of the army of the horsemen were two hundred
thousand thousand: and I heard the number of them.

9:17 And thus I saw the horses in the vision, and them that sat on
them, having breastplates of fire, and of jacinth, and brimstone: and
the heads of the horses were as the heads of lions; and out of their
mouths issued fire and smoke and brimstone.

9:18 By these three was the third part of men killed, by the fire, and
by the smoke, and by the brimstone, which issued out of their mouths.

9:19 For their power is in their mouth, and in their tails: for their
tails were like unto serpents, and had heads, and with them they do
hurt.

9:20 And the rest of the men which were not killed by these plagues
yet repented not of the works of their hands, that they should not
worship devils, and idols of gold, and silver, and brass, and stone,
and of wood: which neither can see, nor hear, nor walk: 9:21 Neither
repented they of their murders, nor of their sorceries, nor of their
fornication, nor of their thefts.

10:1 And I saw another mighty angel come down from heaven, clothed
with a cloud: and a rainbow was upon his head, and his face was as it
were the sun, and his feet as pillars of fire: 10:2 And he had in his
hand a little book open: and he set his right foot upon the sea, and
his left foot on the earth, 10:3 And cried with a loud voice, as when
a lion roareth: and when he had cried, seven thunders uttered their
voices.

10:4 And when the seven thunders had uttered their voices, I was about
to write: and I heard a voice from heaven saying unto me, Seal up
those things which the seven thunders uttered, and write them not.

10:5 And the angel which I saw stand upon the sea and upon the earth
lifted up his hand to heaven, 10:6 And sware by him that liveth for
ever and ever, who created heaven, and the things that therein are,
and the earth, and the things that therein are, and the sea, and the
things which are therein, that there should be time no longer: 10:7
But in the days of the voice of the seventh angel, when he shall begin
to sound, the mystery of God should be finished, as he hath declared
to his servants the prophets.

10:8 And the voice which I heard from heaven spake unto me again, and
said, Go and take the little book which is open in the hand of the
angel which standeth upon the sea and upon the earth.

10:9 And I went unto the angel, and said unto him, Give me the little
book. And he said unto me, Take it, and eat it up; and it shall make
thy belly bitter, but it shall be in thy mouth sweet as honey.

10:10 And I took the little book out of the angel''s hand, and ate it
up; and it was in my mouth sweet as honey: and as soon as I had eaten
it, my belly was bitter.

10:11 And he said unto me, Thou must prophesy again before many
peoples, and nations, and tongues, and kings.

11:1 And there was given me a reed like unto a rod: and the angel
stood, saying, Rise, and measure the temple of God, and the altar, and
them that worship therein.

11:2 But the court which is without the temple leave out, and measure
it not; for it is given unto the Gentiles: and the holy city shall
they tread under foot forty and two months.

11:3 And I will give power unto my two witnesses, and they shall
prophesy a thousand two hundred and threescore days, clothed in
sackcloth.

11:4 These are the two olive trees, and the two candlesticks standing
before the God of the earth.

11:5 And if any man will hurt them, fire proceedeth out of their
mouth, and devoureth their enemies: and if any man will hurt them, he
must in this manner be killed.

11:6 These have power to shut heaven, that it rain not in the days of
their prophecy: and have power over waters to turn them to blood, and
to smite the earth with all plagues, as often as they will.

11:7 And when they shall have finished their testimony, the beast that
ascendeth out of the bottomless pit shall make war against them, and
shall overcome them, and kill them.

11:8 And their dead bodies shall lie in the street of the great city,
which spiritually is called Sodom and Egypt, where also our Lord was
crucified.

11:9 And they of the people and kindreds and tongues and nations shall
see their dead bodies three days and an half, and shall not suffer
their dead bodies to be put in graves.

11:10 And they that dwell upon the earth shall rejoice over them, and
make merry, and shall send gifts one to another; because these two
prophets tormented them that dwelt on the earth.

11:11 And after three days and an half the spirit of life from God
entered into them, and they stood upon their feet; and great fear fell
upon them which saw them.

11:12 And they heard a great voice from heaven saying unto them, Come
up hither. And they ascended up to heaven in a cloud; and their
enemies beheld them.

11:13 And the same hour was there a great earthquake, and the tenth
part of the city fell, and in the earthquake were slain of men seven
thousand: and the remnant were affrighted, and gave glory to the God
of heaven.

11:14 The second woe is past; and, behold, the third woe cometh
quickly.

11:15 And the seventh angel sounded; and there were great voices in
heaven, saying, The kingdoms of this world are become the kingdoms of
our Lord, and of his Christ; and he shall reign for ever and ever.

11:16 And the four and twenty elders, which sat before God on their
seats, fell upon their faces, and worshipped God, 11:17 Saying, We
give thee thanks, O LORD God Almighty, which art, and wast, and art to
come; because thou hast taken to thee thy great power, and hast
reigned.

11:18 And the nations were angry, and thy wrath is come, and the time
of the dead, that they should be judged, and that thou shouldest give
reward unto thy servants the prophets, and to the saints, and them
that fear thy name, small and great; and shouldest destroy them which
destroy the earth.

11:19 And the temple of God was opened in heaven, and there was seen
in his temple the ark of his testament: and there were lightnings, and
voices, and thunderings, and an earthquake, and great hail.

12:1 And there appeared a great wonder in heaven; a woman clothed with
the sun, and the moon under her feet, and upon her head a crown of
twelve stars: 12:2 And she being with child cried, travailing in
birth, and pained to be delivered.

12:3 And there appeared another wonder in heaven; and behold a great
red dragon, having seven heads and ten horns, and seven crowns upon
his heads.

12:4 And his tail drew the third part of the stars of heaven, and did
cast them to the earth: and the dragon stood before the woman which
was ready to be delivered, for to devour her child as soon as it was
born.

12:5 And she brought forth a man child, who was to rule all nations
with a rod of iron: and her child was caught up unto God, and to his
throne.

12:6 And the woman fled into the wilderness, where she hath a place
prepared of God, that they should feed her there a thousand two
hundred and threescore days.

12:7 And there was war in heaven: Michael and his angels fought
against the dragon; and the dragon fought and his angels, 12:8 And
prevailed not; neither was their place found any more in heaven.

12:9 And the great dragon was cast out, that old serpent, called the
Devil, and Satan, which deceiveth the whole world: he was cast out
into the earth, and his angels were cast out with him.

12:10 And I heard a loud voice saying in heaven, Now is come
salvation, and strength, and the kingdom of our God, and the power of
his Christ: for the accuser of our brethren is cast down, which
accused them before our God day and night.

12:11 And they overcame him by the blood of the Lamb, and by the word
of their testimony; and they loved not their lives unto the death.

12:12 Therefore rejoice, ye heavens, and ye that dwell in them. Woe to
the inhabiters of the earth and of the sea! for the devil is come down
unto you, having great wrath, because he knoweth that he hath but a
short time.

12:13 And when the dragon saw that he was cast unto the earth, he
persecuted the woman which brought forth the man child.

12:14 And to the woman were given two wings of a great eagle, that she
might fly into the wilderness, into her place, where she is nourished
for a time, and times, and half a time, from the face of the serpent.

12:15 And the serpent cast out of his mouth water as a flood after the
woman, that he might cause her to be carried away of the flood.

12:16 And the earth helped the woman, and the earth opened her mouth,
and swallowed up the flood which the dragon cast out of his mouth.

12:17 And the dragon was wroth with the woman, and went to make war
with the remnant of her seed, which keep the commandments of God, and
have the testimony of Jesus Christ.

13:1 And I stood upon the sand of the sea, and saw a beast rise up out
of the sea, having seven heads and ten horns, and upon his horns ten
crowns, and upon his heads the name of blasphemy.

13:2 And the beast which I saw was like unto a leopard, and his feet
were as the feet of a bear, and his mouth as the mouth of a lion: and
the dragon gave him his power, and his seat, and great authority.

13:3 And I saw one of his heads as it were wounded to death; and his
deadly wound was healed: and all the world wondered after the beast.

13:4 And they worshipped the dragon which gave power unto the beast:
and they worshipped the beast, saying, Who is like unto the beast? who
is able to make war with him?  13:5 And there was given unto him a
mouth speaking great things and blasphemies; and power was given unto
him to continue forty and two months.

13:6 And he opened his mouth in blasphemy against God, to blaspheme
his name, and his tabernacle, and them that dwell in heaven.

13:7 And it was given unto him to make war with the saints, and to
overcome them: and power was given him over all kindreds, and tongues,
and nations.

13:8 And all that dwell upon the earth shall worship him, whose names
are not written in the book of life of the Lamb slain from the
foundation of the world.

13:9 If any man have an ear, let him hear.

13:10 He that leadeth into captivity shall go into captivity: he that
killeth with the sword must be killed with the sword. Here is the
patience and the faith of the saints.

13:11 And I beheld another beast coming up out of the earth; and he
had two horns like a lamb, and he spake as a dragon.

13:12 And he exerciseth all the power of the first beast before him,
and causeth the earth and them which dwell therein to worship the
first beast, whose deadly wound was healed.

13:13 And he doeth great wonders, so that he maketh fire come down
from heaven on the earth in the sight of men, 13:14 And deceiveth them
that dwell on the earth by the means of those miracles which he had
power to do in the sight of the beast; saying to them that dwell on
the earth, that they should make an image to the beast, which had the
wound by a sword, and did live.

13:15 And he had power to give life unto the image of the beast, that
the image of the beast should both speak, and cause that as many as
would not worship the image of the beast should be killed.

13:16 And he causeth all, both small and great, rich and poor, free
and bond, to receive a mark in their right hand, or in their
foreheads: 13:17 And that no man might buy or sell, save he that had
the mark, or the name of the beast, or the number of his name.

13:18 Here is wisdom. Let him that hath understanding count the number
of the beast: for it is the number of a man; and his number is Six
hundred threescore and six.

14:1 And I looked, and, lo, a Lamb stood on the mount Sion, and with
him an hundred forty and four thousand, having his Father''s name
written in their foreheads.

14:2 And I heard a voice from heaven, as the voice of many waters, and
as the voice of a great thunder: and I heard the voice of harpers
harping with their harps: 14:3 And they sung as it were a new song
before the throne, and before the four beasts, and the elders: and no
man could learn that song but the hundred and forty and four thousand,
which were redeemed from the earth.

14:4 These are they which were not defiled with women; for they are
virgins. These are they which follow the Lamb whithersoever he goeth.
These were redeemed from among men, being the firstfruits unto God and
to the Lamb.

14:5 And in their mouth was found no guile: for they are without fault
before the throne of God.

14:6 And I saw another angel fly in the midst of heaven, having the
everlasting gospel to preach unto them that dwell on the earth, and to
every nation, and kindred, and tongue, and people, 14:7 Saying with a
loud voice, Fear God, and give glory to him; for the hour of his
judgment is come: and worship him that made heaven, and earth, and the
sea, and the fountains of waters.

14:8 And there followed another angel, saying, Babylon is fallen, is
fallen, that great city, because she made all nations drink of the
wine of the wrath of her fornication.

14:9 And the third angel followed them, saying with a loud voice, If
any man worship the beast and his image, and receive his mark in his
forehead, or in his hand, 14:10 The same shall drink of the wine of
the wrath of God, which is poured out without mixture into the cup of
his indignation; and he shall be tormented with fire and brimstone in
the presence of the holy angels, and in the presence of the Lamb:
14:11 And the smoke of their torment ascendeth up for ever and ever:
and they have no rest day nor night, who worship the beast and his
image, and whosoever receiveth the mark of his name.

14:12 Here is the patience of the saints: here are they that keep the
commandments of God, and the faith of Jesus.

14:13 And I heard a voice from heaven saying unto me, Write, Blessed
are the dead which die in the Lord from henceforth: Yea, saith the
Spirit, that they may rest from their labours; and their works do
follow them.

14:14 And I looked, and behold a white cloud, and upon the cloud one
sat like unto the Son of man, having on his head a golden crown, and
in his hand a sharp sickle.

14:15 And another angel came out of the temple, crying with a loud
voice to him that sat on the cloud, Thrust in thy sickle, and reap:
for the time is come for thee to reap; for the harvest of the earth is
ripe.

14:16 And he that sat on the cloud thrust in his sickle on the earth;
and the earth was reaped.

14:17 And another angel came out of the temple which is in heaven, he
also having a sharp sickle.

14:18 And another angel came out from the altar, which had power over
fire; and cried with a loud cry to him that had the sharp sickle,
saying, Thrust in thy sharp sickle, and gather the clusters of the
vine of the earth; for her grapes are fully ripe.

14:19 And the angel thrust in his sickle into the earth, and gathered
the vine of the earth, and cast it into the great winepress of the
wrath of God.

14:20 And the winepress was trodden without the city, and blood came
out of the winepress, even unto the horse bridles, by the space of a
thousand and six hundred furlongs.

15:1 And I saw another sign in heaven, great and marvellous, seven
angels having the seven last plagues; for in them is filled up the
wrath of God.

15:2 And I saw as it were a sea of glass mingled with fire: and them
that had gotten the victory over the beast, and over his image, and
over his mark, and over the number of his name, stand on the sea of
glass, having the harps of God.

15:3 And they sing the song of Moses the servant of God, and the song
of the Lamb, saying, Great and marvellous are thy works, Lord God
Almighty; just and true are thy ways, thou King of saints.

15:4 Who shall not fear thee, O Lord, and glorify thy name? for thou
only art holy: for all nations shall come and worship before thee; for
thy judgments are made manifest.

15:5 And after that I looked, and, behold, the temple of the
tabernacle of the testimony in heaven was opened: 15:6 And the seven
angels came out of the temple, having the seven plagues, clothed in
pure and white linen, and having their breasts girded with golden
girdles.

15:7 And one of the four beasts gave unto the seven angels seven
golden vials full of the wrath of God, who liveth for ever and ever.

15:8 And the temple was filled with smoke from the glory of God, and
from his power; and no man was able to enter into the temple, till the
seven plagues of the seven angels were fulfilled.

16:1 And I heard a great voice out of the temple saying to the seven
angels, Go your ways, and pour out the vials of the wrath of God upon
the earth.

16:2 And the first went, and poured out his vial upon the earth; and
there fell a noisome and grievous sore upon the men which had the mark
of the beast, and upon them which worshipped his image.

16:3 And the second angel poured out his vial upon the sea; and it
became as the blood of a dead man: and every living soul died in the
sea.

16:4 And the third angel poured out his vial upon the rivers and
fountains of waters; and they became blood.

16:5 And I heard the angel of the waters say, Thou art righteous, O
Lord, which art, and wast, and shalt be, because thou hast judged
thus.

16:6 For they have shed the blood of saints and prophets, and thou
hast given them blood to drink; for they are worthy.

16:7 And I heard another out of the altar say, Even so, Lord God
Almighty, true and righteous are thy judgments.

16:8 And the fourth angel poured out his vial upon the sun; and power
was given unto him to scorch men with fire.

16:9 And men were scorched with great heat, and blasphemed the name of
God, which hath power over these plagues: and they repented not to
give him glory.

16:10 And the fifth angel poured out his vial upon the seat of the
beast; and his kingdom was full of darkness; and they gnawed their
tongues for pain, 16:11 And blasphemed the God of heaven because of
their pains and their sores, and repented not of their deeds.

16:12 And the sixth angel poured out his vial upon the great river
Euphrates; and the water thereof was dried up, that the way of the
kings of the east might be prepared.

16:13 And I saw three unclean spirits like frogs come out of the mouth
of the dragon, and out of the mouth of the beast, and out of the mouth
of the false prophet.

16:14 For they are the spirits of devils, working miracles, which go
forth unto the kings of the earth and of the whole world, to gather
them to the battle of that great day of God Almighty.

16:15 Behold, I come as a thief. Blessed is he that watcheth, and
keepeth his garments, lest he walk naked, and they see his shame.

16:16 And he gathered them together into a place called in the Hebrew
tongue Armageddon.

16:17 And the seventh angel poured out his vial into the air; and
there came a great voice out of the temple of heaven, from the throne,
saying, It is done.

16:18 And there were voices, and thunders, and lightnings; and there
was a great earthquake, such as was not since men were upon the earth,
so mighty an earthquake, and so great.

16:19 And the great city was divided into three parts, and the cities
of the nations fell: and great Babylon came in remembrance before God,
to give unto her the cup of the wine of the fierceness of his wrath.

16:20 And every island fled away, and the mountains were not found.

16:21 And there fell upon men a great hail out of heaven, every stone
about the weight of a talent: and men blasphemed God because of the
plague of the hail; for the plague thereof was exceeding great.

17:1 And there came one of the seven angels which had the seven vials,
and talked with me, saying unto me, Come hither; I will shew unto thee
the judgment of the great whore that sitteth upon many waters: 17:2
With whom the kings of the earth have committed fornication, and the
inhabitants of the earth have been made drunk with the wine of her
fornication.

17:3 So he carried me away in the spirit into the wilderness: and I
saw a woman sit upon a scarlet coloured beast, full of names of
blasphemy, having seven heads and ten horns.

17:4 And the woman was arrayed in purple and scarlet colour, and
decked with gold and precious stones and pearls, having a golden cup
in her hand full of abominations and filthiness of her fornication:
17:5 And upon her forehead was a name written, MYSTERY, BABYLON THE
GREAT, THE MOTHER OF HARLOTS AND ABOMINATIONS OF THE EARTH.

17:6 And I saw the woman drunken with the blood of the saints, and
with the blood of the martyrs of Jesus: and when I saw her, I wondered
with great admiration.

17:7 And the angel said unto me, Wherefore didst thou marvel? I will
tell thee the mystery of the woman, and of the beast that carrieth
her, which hath the seven heads and ten horns.

17:8 The beast that thou sawest was, and is not; and shall ascend out
of the bottomless pit, and go into perdition: and they that dwell on
the earth shall wonder, whose names were not written in the book of
life from the foundation of the world, when they behold the beast that
was, and is not, and yet is.

17:9 And here is the mind which hath wisdom. The seven heads are seven
mountains, on which the woman sitteth.

17:10 And there are seven kings: five are fallen, and one is, and the
other is not yet come; and when he cometh, he must continue a short
space.

17:11 And the beast that was, and is not, even he is the eighth, and
is of the seven, and goeth into perdition.

17:12 And the ten horns which thou sawest are ten kings, which have
received no kingdom as yet; but receive power as kings one hour with
the beast.

17:13 These have one mind, and shall give their power and strength
unto the beast.

17:14 These shall make war with the Lamb, and the Lamb shall overcome
them: for he is Lord of lords, and King of kings: and they that are
with him are called, and chosen, and faithful.

17:15 And he saith unto me, The waters which thou sawest, where the
whore sitteth, are peoples, and multitudes, and nations, and tongues.

17:16 And the ten horns which thou sawest upon the beast, these shall
hate the whore, and shall make her desolate and naked, and shall eat
her flesh, and burn her with fire.

17:17 For God hath put in their hearts to fulfil his will, and to
agree, and give their kingdom unto the beast, until the words of God
shall be fulfilled.

17:18 And the woman which thou sawest is that great city, which
reigneth over the kings of the earth.

18:1 And after these things I saw another angel come down from heaven,
having great power; and the earth was lightened with his glory.

18:2 And he cried mightily with a strong voice, saying, Babylon the
great is fallen, is fallen, and is become the habitation of devils,
and the hold of every foul spirit, and a cage of every unclean and
hateful bird.

18:3 For all nations have drunk of the wine of the wrath of her
fornication, and the kings of the earth have committed fornication
with her, and the merchants of the earth are waxed rich through the
abundance of her delicacies.

18:4 And I heard another voice from heaven, saying, Come out of her,
my people, that ye be not partakers of her sins, and that ye receive
not of her plagues.

18:5 For her sins have reached unto heaven, and God hath remembered
her iniquities.

18:6 Reward her even as she rewarded you, and double unto her double
according to her works: in the cup which she hath filled fill to her
double.

18:7 How much she hath glorified herself, and lived deliciously, so
much torment and sorrow give her: for she saith in her heart, I sit a
queen, and am no widow, and shall see no sorrow.

18:8 Therefore shall her plagues come in one day, death, and mourning,
and famine; and she shall be utterly burned with fire: for strong is
the Lord God who judgeth her.

18:9 And the kings of the earth, who have committed fornication and
lived deliciously with her, shall bewail her, and lament for her, when
they shall see the smoke of her burning, 18:10 Standing afar off for
the fear of her torment, saying, Alas, alas that great city Babylon,
that mighty city! for in one hour is thy judgment come.

18:11 And the merchants of the earth shall weep and mourn over her;
for no man buyeth their merchandise any more: 18:12 The merchandise of
gold, and silver, and precious stones, and of pearls, and fine linen,
and purple, and silk, and scarlet, and all thyine wood, and all manner
vessels of ivory, and all manner vessels of most precious wood, and of
brass, and iron, and marble, 18:13 And cinnamon, and odours, and
ointments, and frankincense, and wine, and oil, and fine flour, and
wheat, and beasts, and sheep, and horses, and chariots, and slaves,
and souls of men.

18:14 And the fruits that thy soul lusted after are departed from
thee, and all things which were dainty and goodly are departed from
thee, and thou shalt find them no more at all.

18:15 The merchants of these things, which were made rich by her,
shall stand afar off for the fear of her torment, weeping and wailing,
18:16 And saying, Alas, alas that great city, that was clothed in fine
linen, and purple, and scarlet, and decked with gold, and precious
stones, and pearls!  18:17 For in one hour so great riches is come to
nought. And every shipmaster, and all the company in ships, and
sailors, and as many as trade by sea, stood afar off, 18:18 And cried
when they saw the smoke of her burning, saying, What city is like unto
this great city!  18:19 And they cast dust on their heads, and cried,
weeping and wailing, saying, Alas, alas that great city, wherein were
made rich all that had ships in the sea by reason of her costliness!
for in one hour is she made desolate.

18:20 Rejoice over her, thou heaven, and ye holy apostles and
prophets; for God hath avenged you on her.

18:21 And a mighty angel took up a stone like a great millstone, and
cast it into the sea, saying, Thus with violence shall that great city
Babylon be thrown down, and shall be found no more at all.

18:22 And the voice of harpers, and musicians, and of pipers, and
trumpeters, shall be heard no more at all in thee; and no craftsman,
of whatsoever craft he be, shall be found any more in thee; and the
sound of a millstone shall be heard no more at all in thee; 18:23 And
the light of a candle shall shine no more at all in thee; and the
voice of the bridegroom and of the bride shall be heard no more at all
in thee: for thy merchants were the great men of the earth; for by thy
sorceries were all nations deceived.

18:24 And in her was found the blood of prophets, and of saints, and
of all that were slain upon the earth.

19:1 And after these things I heard a great voice of much people in
heaven, saying, Alleluia; Salvation, and glory, and honour, and power,
unto the Lord our God: 19:2 For true and righteous are his judgments:
for he hath judged the great whore, which did corrupt the earth with
her fornication, and hath avenged the blood of his servants at her
hand.

19:3 And again they said, Alleluia And her smoke rose up for ever and
ever.

19:4 And the four and twenty elders and the four beasts fell down and
worshipped God that sat on the throne, saying, Amen; Alleluia.

19:5 And a voice came out of the throne, saying, Praise our God, all
ye his servants, and ye that fear him, both small and great.

19:6 And I heard as it were the voice of a great multitude, and as the
voice of many waters, and as the voice of mighty thunderings, saying,
Alleluia: for the Lord God omnipotent reigneth.

19:7 Let us be glad and rejoice, and give honour to him: for the
marriage of the Lamb is come, and his wife hath made herself ready.

19:8 And to her was granted that she should be arrayed in fine linen,
clean and white: for the fine linen is the righteousness of saints.

19:9 And he saith unto me, Write, Blessed are they which are called
unto the marriage supper of the Lamb. And he saith unto me, These are
the true sayings of God.

19:10 And I fell at his feet to worship him. And he said unto me, See
thou do it not: I am thy fellowservant, and of thy brethren that have
the testimony of Jesus: worship God: for the testimony of Jesus is the
spirit of prophecy.

19:11 And I saw heaven opened, and behold a white horse; and he that
sat upon him was called Faithful and True, and in righteousness he
doth judge and make war.

19:12 His eyes were as a flame of fire, and on his head were many
crowns; and he had a name written, that no man knew, but he himself.

19:13 And he was clothed with a vesture dipped in blood: and his name
is called The Word of God.

19:14 And the armies which were in heaven followed him upon white
horses, clothed in fine linen, white and clean.

19:15 And out of his mouth goeth a sharp sword, that with it he should
smite the nations: and he shall rule them with a rod of iron: and he
treadeth the winepress of the fierceness and wrath of Almighty God.

19:16 And he hath on his vesture and on his thigh a name written, KING
OF KINGS, AND LORD OF LORDS.

19:17 And I saw an angel standing in the sun; and he cried with a loud
voice, saying to all the fowls that fly in the midst of heaven, Come
and gather yourselves together unto the supper of the great God; 19:18
That ye may eat the flesh of kings, and the flesh of captains, and the
flesh of mighty men, and the flesh of horses, and of them that sit on
them, and the flesh of all men, both free and bond, both small and
great.

19:19 And I saw the beast, and the kings of the earth, and their
armies, gathered together to make war against him that sat on the
horse, and against his army.

19:20 And the beast was taken, and with him the false prophet that
wrought miracles before him, with which he deceived them that had
received the mark of the beast, and them that worshipped his image.
These both were cast alive into a lake of fire burning with brimstone.

19:21 And the remnant were slain with the sword of him that sat upon
the horse, which sword proceeded out of his mouth: and all the fowls
were filled with their flesh.

20:1 And I saw an angel come down from heaven, having the key of the
bottomless pit and a great chain in his hand.

20:2 And he laid hold on the dragon, that old serpent, which is the
Devil, and Satan, and bound him a thousand years, 20:3 And cast him
into the bottomless pit, and shut him up, and set a seal upon him,
that he should deceive the nations no more, till the thousand years
should be fulfilled: and after that he must be loosed a little season.

20:4 And I saw thrones, and they sat upon them, and judgment was given
unto them: and I saw the souls of them that were beheaded for the
witness of Jesus, and for the word of God, and which had not
worshipped the beast, neither his image, neither had received his mark
upon their foreheads, or in their hands; and they lived and reigned
with Christ a thousand years.

20:5 But the rest of the dead lived not again until the thousand years
were finished. This is the first resurrection.

20:6 Blessed and holy is he that hath part in the first resurrection:
on such the second death hath no power, but they shall be priests of
God and of Christ, and shall reign with him a thousand years.

20:7 And when the thousand years are expired, Satan shall be loosed
out of his prison, 20:8 And shall go out to deceive the nations which
are in the four quarters of the earth, Gog, and Magog, to gather them
together to battle: the number of whom is as the sand of the sea.

20:9 And they went up on the breadth of the earth, and compassed the
camp of the saints about, and the beloved city: and fire came down
from God out of heaven, and devoured them.

20:10 And the devil that deceived them was cast into the lake of fire
and brimstone, where the beast and the false prophet are, and shall be
tormented day and night for ever and ever.

20:11 And I saw a great white throne, and him that sat on it, from
whose face the earth and the heaven fled away; and there was found no
place for them.

20:12 And I saw the dead, small and great, stand before God; and the
books were opened: and another book was opened, which is the book of
life: and the dead were judged out of those things which were written
in the books, according to their works.

20:13 And the sea gave up the dead which were in it; and death and
hell delivered up the dead which were in them: and they were judged
every man according to their works.

20:14 And death and hell were cast into the lake of fire. This is the
second death.

20:15 And whosoever was not found written in the book of life was cast
into the lake of fire.

21:1 And I saw a new heaven and a new earth: for the first heaven and
the first earth were passed away; and there was no more sea.

21:2 And I John saw the holy city, new Jerusalem, coming down from God
out of heaven, prepared as a bride adorned for her husband.

21:3 And I heard a great voice out of heaven saying, Behold, the
tabernacle of God is with men, and he will dwell with them, and they
shall be his people, and God himself shall be with them, and be their
God.

21:4 And God shall wipe away all tears from their eyes; and there
shall be no more death, neither sorrow, nor crying, neither shall
there be any more pain: for the former things are passed away.

21:5 And he that sat upon the throne said, Behold, I make all things
new.

And he said unto me, Write: for these words are true and faithful.

21:6 And he said unto me, It is done. I am Alpha and Omega, the
beginning and the end. I will give unto him that is athirst of the
fountain of the water of life freely.

21:7 He that overcometh shall inherit all things; and I will be his
God, and he shall be my son.

21:8 But the fearful, and unbelieving, and the abominable, and
murderers, and whoremongers, and sorcerers, and idolaters, and all
liars, shall have their part in the lake which burneth with fire and
brimstone: which is the second death.

21:9 And there came unto me one of the seven angels which had the
seven vials full of the seven last plagues, and talked with me,
saying, Come hither, I will shew thee the bride, the Lamb''s wife.

21:10 And he carried me away in the spirit to a great and high
mountain, and shewed me that great city, the holy Jerusalem,
descending out of heaven from God, 21:11 Having the glory of God: and
her light was like unto a stone most precious, even like a jasper
stone, clear as crystal; 21:12 And had a wall great and high, and had
twelve gates, and at the gates twelve angels, and names written
thereon, which are the names of the twelve tribes of the children of
Israel: 21:13 On the east three gates; on the north three gates; on
the south three gates; and on the west three gates.

21:14 And the wall of the city had twelve foundations, and in them the
names of the twelve apostles of the Lamb.

21:15 And he that talked with me had a golden reed to measure the
city, and the gates thereof, and the wall thereof.

21:16 And the city lieth foursquare, and the length is as large as the
breadth: and he measured the city with the reed, twelve thousand
furlongs.

The length and the breadth and the height of it are equal.

21:17 And he measured the wall thereof, an hundred and forty and four
cubits, according to the measure of a man, that is, of the angel.

21:18 And the building of the wall of it was of jasper: and the city
was pure gold, like unto clear glass.

21:19 And the foundations of the wall of the city were garnished with
all manner of precious stones. The first foundation was jasper; the
second, sapphire; the third, a chalcedony; the fourth, an emerald;
21:20 The fifth, sardonyx; the sixth, sardius; the seventh,
chrysolyte; the eighth, beryl; the ninth, a topaz; the tenth, a
chrysoprasus; the eleventh, a jacinth; the twelfth, an amethyst.

21:21 And the twelve gates were twelve pearls: every several gate was
of one pearl: and the street of the city was pure gold, as it were
transparent glass.

21:22 And I saw no temple therein: for the Lord God Almighty and the
Lamb are the temple of it.

21:23 And the city had no need of the sun, neither of the moon, to
shine in it: for the glory of God did lighten it, and the Lamb is the
light thereof.

21:24 And the nations of them which are saved shall walk in the light
of it: and the kings of the earth do bring their glory and honour into
it.

21:25 And the gates of it shall not be shut at all by day: for there
shall be no night there.

21:26 And they shall bring the glory and honour of the nations into
it.

21:27 And there shall in no wise enter into it any thing that
defileth, neither whatsoever worketh abomination, or maketh a lie: but
they which are written in the Lamb''s book of life.

22:1 And he shewed me a pure river of water of life, clear as crystal,
proceeding out of the throne of God and of the Lamb.

22:2 In the midst of the street of it, and on either side of the
river, was there the tree of life, which bare twelve manner of fruits,
and yielded her fruit every month: and the leaves of the tree were for
the healing of the nations.

22:3 And there shall be no more curse: but the throne of God and of
the Lamb shall be in it; and his servants shall serve him: 22:4 And
they shall see his face; and his name shall be in their foreheads.

22:5 And there shall be no night there; and they need no candle,
neither light of the sun; for the Lord God giveth them light: and they
shall reign for ever and ever.

22:6 And he said unto me, These sayings are faithful and true: and the
Lord God of the holy prophets sent his angel to shew unto his servants
the things which must shortly be done.

22:7 Behold, I come quickly: blessed is he that keepeth the sayings of
the prophecy of this book.

22:8 And I John saw these things, and heard them. And when I had heard
and seen, I fell down to worship before the feet of the angel which
shewed me these things.

22:9 Then saith he unto me, See thou do it not: for I am thy
fellowservant, and of thy brethren the prophets, and of them which
keep the sayings of this book: worship God.

22:10 And he saith unto me, Seal not the sayings of the prophecy of
this book: for the time is at hand.

22:11 He that is unjust, let him be unjust still: and he which is
filthy, let him be filthy still: and he that is righteous, let him be
righteous still: and he that is holy, let him be holy still.

22:12 And, behold, I come quickly; and my reward is with me, to give
every man according as his work shall be.

22:13 I am Alpha and Omega, the beginning and the end, the first and
the last.

22:14 Blessed are they that do his commandments, that they may have
right to the tree of life, and may enter in through the gates into the
city.

22:15 For without are dogs, and sorcerers, and whoremongers, and
murderers, and idolaters, and whosoever loveth and maketh a lie.

22:16 I Jesus have sent mine angel to testify unto you these things in
the churches. I am the root and the offspring of David, and the bright
and morning star.

22:17 And the Spirit and the bride say, Come. And let him that heareth
say, Come. And let him that is athirst come. And whosoever will, let
him take the water of life freely.

22:18 For I testify unto every man that heareth the words of the
prophecy of this book, If any man shall add unto these things, God
shall add unto him the plagues that are written in this book: 22:19
And if any man shall take away from the words of the book of this
prophecy, God shall take away his part out of the book of life, and
out of the holy city, and from the things which are written in this book.

22:20 He which testifieth these things saith, Surely I come quickly.
Amen.

Even so, come, Lord Jesus.

22:21 The grace of our Lord Jesus Christ be with you all. Amen.', '2026-06-26 17:26:50.837', true, ${defaultUser.id})
RETURNING id, title
`);


  console.log('Default user created:', defaultUser)
  console.log('Default posts creates:', [lorem, genesis, discourse, apology, revelations])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
