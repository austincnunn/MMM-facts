Module.register("facts",{

	// edit these
	defaults: {
		updateInterval: 30,		// how long a fact stays up in seconds
		fadeSpeed: 2,			// fade out of text in seconds
		category: 'tips',		// pick a category below, or use 'random'
		facts: { 
			art: [
				"Vincent Van Gogh painted The Starry Night during his stay at a psychiatric facility.",
				"Research has shown practicing art correlates with higher achievement in reading and maths.",
			],
			food: [
				"Honey does not spoil, due to low moisture content.",
				"Strawberries are not berries, but bananas and avocados are.",
				"Cucumbers are 95% water.",
				"Rotten eggs float.",
			],
			health: [
				"On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.",
				"The average person spends more time on the toilet than they do exercising.",
				"Your height differs depending on the time of day.",
				"Hyponatremia occurs when you overdose on water.",
			],
			history: [
				"Pepsi, once became the 6th largest military in the world after the Soviets exchanged 17 submarines, one frigate, one cruiser, and one destroyer for three billion dollars worth of Pepsi.",
				"The shortest war fought between Britain and Zanzibar, lasted 38 minutes and ended with a British victory.",
				"Nobody knows who invented the fire hydrant because the patent was lost in a fire.",
				"Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
			],
			language: [
				"A single strand of Spaghetti is called a “Spaghetto”.",
				"The flashes of colored light you see when you rub your eyes are called “phosphenes”.",
				"To leave a party without telling anyone is called a “French Exit”. In French, it is called “partir à l’anglaise” - to leave like the English.",
			],
			nature: [
				"Armadillos are bulletproof.",
				"It's illegal to own just one guinea pig in Switzerland because they get lonely.",
			],
			nerd: [
				"A million seconds is 12 days. A billion seconds is 31 years.",
				"Every 60 seconds in Africa, a minute passes.",
				"There are 80 thousand vigintillion ways to arrange a pack of cards. So, if you shuffle a pack of cards yourself, you will almost certainly have a deck never seen before in the history of the universe.",
			],
			space: [
				"There are more trees on Earth than stars in the Milky Way.",
				"Uranus used to be named George.",
				"A teaspoon of a neutron star weighs over a trillion kilograms.",
				"One light-year is about 9 trillion kilometers (6 trillion miles).",
			],
			tips: [	
				"The new telephone number for emergency services is 0118 999 881 999 119 725....... 3. It's so easy to remember.",
				"Remember to always put any new fire over by the rest of the fire.",
				
				"There are more trees on Earth than stars in the Milky Way.",
				"Uranus used to be named George.",
				"A teaspoon of a neutron star weighs over a trillion kilograms.",
				"One light-year is about 9 trillion kilometers (6 trillion miles).",
				"A million seconds is 12 days. A billion seconds is 31 years.",
				"Every 60 seconds in Africa, a minute passes.",
				"There are 80 thousand vigintillion ways to arrange a pack of cards. So, if you shuffle a pack of cards yourself, you will almost certainly have a deck never seen before in the history of the universe.",
				"Armadillos are bulletproof.",
				"It's illegal to own just one guinea pig in Switzerland because they get lonely.",
				"A single strand of Spaghetti is called a “Spaghetto”.",
				"The flashes of colored light you see when you rub your eyes are called “phosphenes”.",
				"To leave a party without telling anyone is called a “French Exit”. In French, it is called “partir à l’anglaise” - to leave like the English.",
				"Pepsi once became the 6th largest military in the world after the Soviets exchanged 17 submarines, one frigate, one cruiser, and one destroyer for three billion dollars worth of Pepsi.",
				"The shortest war fought between Britain and Zanzibar, lasted 38 minutes and ended with a British victory.",
				"Nobody knows who invented the fire hydrant because the patent was lost in a fire.",
				"Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
				"On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.",
				"The average person spends more time on the toilet than they do exercising.",
				"Your height differs depending on the time of day.",
				"Hyponatremia occurs when you overdose on water.",
				"Honey does not spoil, due to low moisture content.",
				"Strawberries are not berries, but bananas and avocados are.",
				"Cucumbers are 95% water.",
				"Rotten eggs float.",
				"Vincent Van Gogh painted The Starry Night during his stay at a psychiatric facility.",
				"Research has shown practicing art correlates with higher achievement in reading and maths.",
				"Money can be exchanged for goods or services.",
				"Honest people are bad liars.",
				"It is important to know when to stop arguing with people, and simply let them be wrong.",
				"Be amused. There are few things in life to take seriously.",
				"If someone insults you during a meeting, pretend you didn't hear them and politely ask them to repeat themself. They will look unprofessional no matter how they respond.",
				"Rubber bands will last much longer when they are refrigerated.",
				"There are 293 ways to make change for a dollar.",
				"The Grand Theft Auto franchise has lawsuits that total over $1 billion.",
				"All clocks in Pulp Fiction are set to 4:20.",
				"The eye of an ostrich is bigger than its brain.",
				"A dime has 118 ridges on its edge.",
				"On average, a secretary will use its left hand for 56% of what they type on a keyboard.",
				"The largest pair of eyes in the world belongs to the giant squid.",
				"The Pokemon Rhydon was the first to ever be created.",
				"Super Mario Land was the most popular game on the Game Boy during its release.",
				"The dot over the small letter 'i' is called a tittle.",
				"Japan has 23 vending machines per person.",
				"Soccer balls were once used for playing basketball.",
				"A candle’s flame is hot and blue in zero gravity.",
				"Putting sugar on a cut will make it heal faster.",
				"X-rays can’t detect real diamonds.",
				"There are 7 different types of twins.",
				"The national flag of Libya was formerly just the color green.",
				"The plastic tips of shoelaces are called aglets.",
				"Sign language has tongue twisters.",
				"Penguins fly underwater.",
				"Minnie the Mouse’s first name is not Minnie - it's Minerva.",
				"Rudolph the Reindeer is female.",
				"A jiffy is a proper unit of time - it is exactly 1/100th of a second.",
				"April 11, 1954, was recorded as the most boring day in the world.",
				"Tiramisu translates to ‘take me to heaven’ in Italian.",
				"Buttermilk does not contain any butter.",
				"Brunch was invented as a way of curing hangovers.",
				"Hitler’s nephew betrayed him.",
				"The continental plates move at the same rate that fingernails grow.",
				"Sailors working for the Royal Navy need special permission to grow their beards.",
				"Mary and James are the most popular names around the world.",
				"Children are born less frequently on Saturdays.",
				"75 burgers are sold in McDonald’s every second.",
				"You can’t hum while holding your nose.",
				"You are more likely to have a weird or scary dream when sleeping on your stomach.",
				"Your eyeballs do not grow or change their size as you age.",
				"Blue-eyed people have higher alcohol tolerance.",
				"Pubic hair lives for about 3 weeks long.",
				"Male bees can only mate once.",
				"Smelling green apples help with weight loss.",
				"A snail has 2,500 teeth.",
				"Pigeons can't fart.",
				"Space partly smells like diesel fuel and barbeque.",
				"One strand of hair can hold up to 3 ounces of weight.",
				"Children’s book author, Roald Dahl, was a spy.",
				"NASCAR drivers lose weight while racing.",
				"Cap'n Crunch's full name is Horatio Magellan Crunch.",
				"Crocodiles are one of the planet’s oldest living creatures.",
				"3 Musketeer chocolate bars used to have 3 flavors.",
				"The bones of the human body can multiply in density.",
				"Your funny bone is a nerve.",
				"A french pig was executed for killing a child.",
				"Pineapples are named after pinecones.",
				"Scotland has over 400 words to refer to snow.",
				"There are more than 200 flavors of Kit Kat in Japan.",
				"New Zealand was once auctioned on eBay.",
				"There is a city in Oregon called Boring.",
				"Leeches were used to predict the weather.",
				"The ‘?!’ punctuation mark has a name - ‘interrobang’.",
				"A man in Florida once threw a live alligator through a drive-thru window.",
				"Great Britain once had a number where you can report rogue traffic cones.",
				"The largest recorded snowflake is 15 inches wide.",
				"McDonald’s once had bubblegum flavored broccoli.",
				"American Airlines saved money by getting rid of olives from their meals.",
				"‘OMG’ was first used in a letter to Winston Churchill in 1917.",
				"Sailors consider black cats good luck.",
				"A janitor invented the flaming hot Cheetos.",
				"Melting glaciers make fizzy noises.",
				"Flipping a shark will render it temporarily immobile.",
				"The largest living organism is an aspen grove - the grove is made up of 47,000 identical quaking aspen trees that cover over 106 acres.",
				"Kummerspeck is German for the weight gained during emotional eating.",
				"David Bowie helped topple the Berlin wall.",
				"Tap water in Manhattan is not Kosher - very small crustaceans have been found in the tap water.",
				"A park ranger, Roy Sullivan, was once hit by lightning 7 times.",
				"The fedora was originally a hat made for women.",
				"The most successful predator is a wild dog.",
				"Around 30,000 rubber ducks were lost at sea in 1992.",
				"Charles Darwin’s pet turtle outlived him by 124 years.",
				"Losing weight alters brain activity.",
				"The odds of getting a royal flush is 1 in 649,740.",
				"Driving south from Detroit will lead to Canada.",
				"More people speak English as their second language than those who use it as their mother tongue.",
				"Triskaidekaphobia is the fear of the number 13.",
				"A single dollar bill costs 5 cents to make.",
				"Snakes can predict earthquakes.",
				"The only English word that ends with ‘mt’ is Dreamt.",
				"The opposite sides of dice will always equal 7.",
				"About 7% of American adults believe chocolate milk comes from brown cows - and not all of them are children.",
				"Cats can't taste sweet flavors.",
				"Your fingernails on your dominant hand grow faster.",
				"Billy goats urinate on their heads to become more attractive to lady goats.",
				"A man once set a record by putting on over 260 t-shirts.",
				"123456 is the planet Druidia's airlock password - it is also the most common computer password.",
				"The chicken is the closest relative to the T-Rex.",
				"Two-thirds of millennials go to sleep naked.",
				"More monopoly money is printed annually rather than actual currency.",
				"Ravens are always aware when someone is watching them.",
				"The average male will become bored after 26 minutes of shopping.",
				"Up to 20% of power outages in the U.S are due to squirrels.",
				"The Antarctic glaciers are made up of 3% penguin urine.",
				"Stephen Hawking held a reception for time travelers in 2009 - sadly, no one attended the event.",
				"A jockey from 1923 managed to finish a race after dying.",
				"The largest prime number has 17,425,170 digits.",
				"A Polish doctor once faked a typhus outbreak to keep the Nazi’s away.",
				"Shakira was rejected from her elementary choir group.",
				"A BBC radio announcer once stated that they did not have any news.",
				"Known as 'Brown Friday', the day after Thanksgiving is the busiest day for plumbers.",
				"The average horse outputs approximately 15 horsepower.",
				"The map size in GTA V is twice the actual size of Manhattan.",
				"Multiplying 1089 by 9 will give you the same numbers in reverse.",
				"The flashes of light when you rub your eyes are called phosphenes.",
				"Fire is hot.",
				"Opossums don't play dead - they pass out from fear.",
				"It is illegal to hunt camels in Arizona without a permit.",
				"Your belly button grows hair.",
				"A silence takes about 4 seconds before it is considered awkward.",
				"Swearing can relieve pain.",
				"PELUTHO (n.)- A South American ball game. The balls are whacked against a brick wall with a stout wooden bat until the prisoner confesses.",
				"ABOYNE (vb.) - To beat an expert at a game of skill by playing so appallingly that none of his clever tactics or strategies are of any use to him.",
				"YARMOUTH (vb.) - To shout at foreigners in the belief that the louder you speak, the better they'll understand you.",
				"YESNABY (n.) - A 'yes, maybe' which means 'no'.",
				"WRABNESS (n.) - The feeling after having tried to dry oneself with a damp towel.",
				"WOKING (participial vb.) - Standing in the kitchen wondering what you came in here for.",
				"WIMBLEDON (n.) - That last drop which, no matter how much you shake it, always goes down your trouser leg.",
				"WETWANG (n.) - A moist penis.",
				"TULSA (n.) - A slurp of beer which has accidentally gone down your shirt collar.",
				"TOLOB (n.) - A crease or fold in your bedsheet, the removal of which involves getting out of bed an largely remaking it.",
				"TIMBLE (vb.) - (Of small nasty children.) To fail over very gently, look around to see who's about, and then yell blue murder.",
				"TINCLETON (n.) - A man who amuses himself in the bathroom by flushing the toilet mid-pee and then seeing if he can finish before the flush does.",
				"THRUPP (vb.) - To hold a ruler on one end on a desk and make the other end go bbddbbddbbrrbrrrrddrr.",
				"SKIBBEREEN (n.) - The noise made by a sunburned thigh leaving a plastic chair.",
				"SILLOTH (n.) - Something that was sticky, and is now furry, found on the carpet under the sofa.",
				"SIMPRIM (n.) - The little movement of false modesty by which a girl with a cavernous visible cleavage pulls her skirt down over her knees.",
				"SHOEBURYNESS (abs.n.) - The vague uncomfortable feeling you get when sitting on a seat which is still warm from somebody else's bottom.",
				"SCRONKEY (n.) - Something that hits the window as a result of a violent sneeze.",
				"RAMSGATE (n.) - All institutional buildings must, by law, contain at least twenty remsgates. These are doors which open the opposite way to the one you expect.",
				"SCOSTHROP (vb.) - To make vague opening or cutting movements with the hands when wandering about looking for a tin opener, scissors, etc. in the hope that this will help in some way.",
				"PODE HOLE (n.) - A hole drilled in chipboard lavatory walls for any one of a number of purposes.",
				"MINCHINHAMPTON (n.) - The expression on a man's face when he has just zipped up his trousers without due care and attention.",
				"LUSBY (n.) - The fold of flesh pushing forward over the top of a bra which is too small for the lady inside it.",
				"HOBBS CROSS (n.) - The awkward leaping manoeuvre a girl has to go throught in bed in order to make him sleep on the wet patch.",
				"GWEEK (n.) - A coat hanger recycled as a car aerial.",
				"FRATING GREEN (adj.) - The shade of green which is supposed to make you feel comfortable in hospitals, industrious in schools and uneasy in police stations.",
				"FRING (n.) - The noise made by light bulb which has just shone its last.",
				"FIUNARY (n.) - The safe place you put something and then forget where it was.",
				"FARRANCASSIDY (n.) - A long and ultimately unsuccessful attempt to undo someone's bra.",
				"DUDOO (n.) - The most deformed potato in any given collection of potatoes.",
				"DULEEK (n.) - Sudden realisation, as you lie in bed waiting for the alarm to go off, that it should have gone off an hour ago.",
				"DUNGENESS (n.) - The  uneasy feeling that the plastic handles of the overloaded supermarket carrier bag you are carrying are getting steadily longer.",
				"DUNTISH (adj.) - Mentally incapacitated by severe hangover.",
				"ELY (n.) - "The first, tiniest inkling you get that something, somewhere, has gone teribly wrong.",
				"FARNHAM (n.) - The feeling you get about four o'clock in the afternoon when you haven't got enough done.",
				"CRANLEIGH (n.) - A mood of irrational irritation with everyone and everything.",
				"CROMARTY (n.) - The brittle sludge which clings to the top of ketchup bottles",
				"CLUN (n.) - A leg which has gone to sleep and has to be hauled around after you.",
				"CLUNES (pl.n.) - People who just won't go.",
				"BRISBANE - A perfectly resonable explanation (Such as the one offered by a person with a gurgling cough which has nothing to do with the fact that they smoke fifty cigarettes a day.)",
				"BRUMBY - The fake antique plastic seal on a pretentious whisky bottle.",
				"CLIXBY (adj.) - Politely rude. Bliskly vague. Firmly uninformative.",
				"CLUN (n.) - A leg which has gone to sleep and has to be hauled around after you.",
				"CLUNES (pl.n.) - People who just won't go.",
				"BOTLEY - The prominent stain on a man's trouser crotch seen on his return from the lavatory. A botley proper is caused by an accident with the push taps, and should not be confused with any stain caused by insufficient waggling of the willy.",
				"ABERYSTWYTH (n.) - A nostalgic yearning which is in itself more pleasant than the thing being yearned for.",
				"ABOYNE (vb.) - To beat an expert at a game of skill by playing so appallingly that none of his clever tactics or strategies are of any use to him.",
				"AFFCOT (n.) - The sort of fart you hope people will talk after.",
				"AMERSHAM (n.) - The sneeze which tickles but never comes.",
				"AMLWCH (n.) - A gas station sandwich which has been kept soft by being regulary washed and resealed in clingfilm.",
				"BABWORTH - Something which justifies having a really good cry.",
				"BAUGHURST - That kind of large fierce ugly woman who owns a small fierce ugly dog.",
				"BILBSTER - A pimple so hideous and enormous that you have to cover it with a bandage and pretend you've cut yourself.",
				"BOSCASTLE - A huge pyramid of tin cans placed just inside the entrance to a supermarket.",
			]
		},
	},


	// executes on start 
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastFactIndex = -1;

		// update timer
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed * 1000);
		}, this.config.updateInterval * 1000);
	},

	// generate fact
	randomIndex: function(facts) {
		if (facts.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * facts.length);
		};

		var factIndex = generate();

		while (factIndex === this.lastFactIndex) {
			factIndex = generate();
		}

		this.lastFactIndex = factIndex;

		return factIndex;
	},

	// create an array of facts
	factArray: function() {
		if (this.config.category == 'random') {
			return this.config.facts[Object.keys(this.config.facts)[Math.floor(Math.random() * Object.keys(this.config.facts).length)]];
		} else {
			return this.config.facts[this.config.category];
		}
	},

  	// return a fact from array of facts
	randomFact: function() {
		var facts = this.factArray();
		var index = this.randomIndex(facts);
		return facts[index];
	},

	// override getDom to display fact
	getDom: function() {
		var factText = this.randomFact();

		var text = factText;

		var wrapper = document.createElement("div");

		var fact = document.createElement("div");
		fact.className = "bright medium light";
		fact.style.textAlign = 'center';
		fact.style.margin = '0 auto';
		fact.style.maxWidth = '80%';
		fact.innerHTML = text;

		wrapper.appendChild(fact);

		return wrapper;
	}

});
