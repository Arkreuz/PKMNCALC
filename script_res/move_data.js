

var ZMOVES_LOOKUP = {
    'Normal':'Breakneck Blitz','Fire':'Inferno Overdrive','Water':'Hydro Vortex',
    'Electric':'Gigavolt Havoc','Grass':'Bloom Doom','Ghost':'Never-Ending Nightmare',
    'Dark':'Black Hole Eclipse','Psychic':'Shattered Psyche','Fighting':'All-Out Pummeling',
    'Steel':'Corkscrew Crash','Ice':'Subzero Slammer','Ground':'Tectonic Rage',
    'Rock':'Continental Crush','Bug':'Savage Spin-Out','Fairy':'Twinkle Tackle',
    'Flying':'Supersonic Skystrike','Dragon':'Devastating Drake','Poison':'Acid Downpour'};

var MOVES = {

    '(No Move)': {
        bp: 0,
        type: 'Normal',
        category: 'Physical'
    },
    'Acid': {
        bp: 40,
        type: 'Poison'
    },
    'Bind': {
        bp: 15,
        type: 'Normal'
    },
    'Blizzard': {
        bp: 110,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 185
    },
    'Body Slam': {
        bp: 85,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 160
    },
    'BubbleBeam': {
        bp: 65,
        type: 'Water'
    },
    'Clamp': {
        bp: 35,
        type: 'Water'
    },
    'Crabhammer': {
        bp: 100,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: false,
        zp: 180
    },
    'Dig': {
        bp: 100,
        type: 'Ground'
    },
    'Double Kick': {
        bp: 30,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true,
        zp: 100
    },
    'Double-Edge': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 190
    },
    'Drill Peck': {
        bp: 80,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Earthquake': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        isSpread: true,
        zp: 180
    },
    'Explosion': {
        bp: 250,
        type: 'Normal',
        category: 'Physical',
        isSpread: true,
        zp: 200
    },
    'Fire Blast': {
        bp: 110,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 185
    },
    'Fire Punch': {
        bp: 75,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        zp: 140
    },
    'Fire Spin': {
        bp: 15,
        type: 'Fire'
    },
    'Flamethrower': {
        bp: 90,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 175
    },
    'Fly': {
        bp: 90,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 180
    },
    'High Jump Kick': {
        bp: 130,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 195
    },
    'Hydro Pump': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        zp: 185
    },
    'Hyper Beam': {
        bp: 150,
        type: 'Normal',
        category: 'Special',
        zp: 200
    },
    'Ice Beam': {
        bp: 90,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 175
    },
    'Ice Punch': {
        bp: 75,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        zp: 140
    },
    'Mega Drain': {
        bp: 40,
        type: 'Grass'
    },
    'Night Shade': {
        bp: 100,
        type: 'Ghost',
        category: 'Special',
        zp: 100
    },
    'Pin Missile': {
        bp: 25,
        type: 'Bug',
        category: 'Physical',
        isMultiHit: true,
        zp: 140
    },
    'Psychic': {
        bp: 90,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 175
    },
    'Quick Attack': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Razor Leaf': {
        bp: 55,
        type: 'Grass',
        category: 'Special',
        alwaysCrit: false,
        zp: 100
    },
    'Rock Slide': {
        bp: 75,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 140
    },
    'Seismic Toss': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Self-Destruct': {
        bp: 200,
        type: 'Normal',
        category: 'Physical',
        isSpread: true,
        zp: 200
    },
    'Sky Attack': {
        bp: 140,
        type: 'Flying',
        category: 'Physical',
        hasSecondaryEffect: true,
        zp: 200
    },
    'Slash': {
        bp: 70,
        type: 'Normal',
        alwaysCrit: true
    },
    'Sludge': {
        bp: 65,
        type: 'Poison'
    },
    'Submission': {
        bp: 80,
        type: 'Fighting'
    },
    'Surf': {
        bp: 90,
        type: 'Water',
        category: 'Special',
        isSpread: true,
        zp: 175
    },
    'Tackle': {
        bp: 50,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Thunder': {
        bp: 110,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 185
    },
    'Thunder Punch': {
        bp: 75,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        zp: 140
    },
    'Thunderbolt': {
        bp: 90,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 175
    },
    'Twineedle': {
        bp: 25,
        type: 'Bug',
        isTwoHit: true
    },
    'Wrap': {
        bp: 15,
        type: 'Normal'
    },
    'Aeroblast': {
        bp: 100,
        type: 'Flying',
        category: 'Special',
        zp: 180
    },
    'Ancient Power': {
        bp: 60,
        type: 'Rock',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 120
    },
    'Bite': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        zp: 120
    },

    'Cross Chop': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 180
    },
    'Crunch': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        zp: 160
    },
    'Double-Edge': { bp: 120 },
    'DynamicPunch': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        zp: 180
    },
    'Extreme Speed': {
        bp: 80,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Faint Attack': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Flail': {
        bp: 1,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Flame Wheel': {
        bp: 60,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 120
    },
    'Frustration': {
        bp: 102,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Giga Drain': {
        bp: 60,
        type: 'Grass',
        category: 'Special',
        zp: 160
    },
    'Headbutt': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 140
    },
    // Hidden Power needs to have type set to normal for the Z-move lookup to work.
    // Conversion of regular move to correct type is done in getMoveEffectiveness in damage.js
    'Hidden Power Bug': {
        bp: 60,
        type: 'Bug',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Dark': {
        bp: 60,
        type: 'Dark',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Dragon': {
        bp: 60,
        type: 'Dragon',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Electric': {
        bp: 60,
        type: 'Electric',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Fighting': {
        bp: 60,
        type: 'Fighting',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Fire': {
        bp: 60,
        type: 'Fire',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Flying': {
        bp: 60,
        type: 'Flying',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Ghost': {
        bp: 60,
        type: 'Ghost',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Grass': {
        bp: 60,
        type: 'Grass',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Ground': {
        bp: 60,
        type: 'Ground',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Ice': {
        bp: 60,
        type: 'Ice',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Poison': {
        bp: 60,
        type: 'Poison',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Psychic': {
        bp: 60,
        type: 'Psychic',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Rock': {
        bp: 60,
        type: 'Rock',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Steel': {
        bp: 60,
        type: 'Steel',
        category: 'Special',
        zp: 120
    },
    'Hidden Power Water': {
        bp: 60,
        type: 'Water',
        category: 'Special',
        zp: 120
    },
    'Icy Wind': {
        bp: 55,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 100
    },
    'Iron Tail': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 180
    },
    'Mach Punch': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 100
    },
    'Megahorn': {
        bp: 120,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Pursuit': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Super Fang':{
        bp: 0,
        type: "Normal",
        category: "Physical",
        zp: 100
    },

    'Rapid Spin': {
        bp: 20,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },

    'Return': {
        bp: 102,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Reversal': {
        bp: 1,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Sacred Fire': {
        bp: 100,
        type: 'Fire',
        category: 'Physical',
        hasSecondaryEffect: true,
        zp: 180
    },

    'Shadow Ball': {
        bp: 80,
        type: 'Ghost',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        zp: 160
    },
    'Sludge Bomb': {
        bp: 90,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        zp: 175
    },
    'Solar Beam': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        zp: 190
    },
    'Steel Wing': {
        bp: 70,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 140
    },
    'Thief': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 120

    },
    'Zap Cannon': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Aerial Ace': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Air Cutter': {
        bp: 60,
        type: 'Flying',
        category: 'Special',
        isSpread: true,
        zp: 120
    },
    'Blaze Kick': {
        bp: 85,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 160
    },
    'Bonemerang': {
        bp: 50,
        type: 'Ground',
        category: 'Physical',
        isTwoHit: true,
        zp: 100
    },
    'Bounce': {
        bp: 85,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 160
    },
    'Brick Break': {
        bp: 75,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Doom Desire': {
        bp: 140,
        type: 'Steel',
        category: 'Special',
        zp: 200
    },
    'Dragon Claw': {
        bp: 80,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Eruption': {
        bp: 150,
        type: 'Fire',
        category: 'Special',
        isSpread: true,
        zp: 200
    },
    'Extrasensory': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 160
    },
    'Facade': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
         ignoresBurn: true,
         zp: 140
    },
    'Endeavor':{
        type: 'Normal',
        category: 'Physical',
        zp: 160
    },
    'Fake Out': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 100
    },
    'Focus Punch': {
        bp: 150,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 200
    },
    'Heat Wave': {
        bp: 95,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 175
    },
    'Knock Off': {
        bp: 65,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Leaf Blade': {
        bp: 90,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        zp: 175
    },
    'Low Kick': {
        bp: 1,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Luster Purge': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 140
    },
    'Meteor Mash': {
        bp: 90,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        zp: 175
    },
    'Muddy Water': {
        bp: 90,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 175
    },
    'Mud Shot': {
        bp: 55,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Overheat': {
        bp: 130,
        type: 'Fire',
        category: 'Special',
        zp: 195
    },
    'Poison Fang': {
        bp: 50,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        zp: 100
    },
    'Psycho Boost': {
        bp: 140,
        type: 'Psychic',
        category: 'Special',
        zp: 200
    },
    'Revenge': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Rock Blast': {
        bp: 25,
        type: 'Rock',
        category: 'Physical',
        isMultiHit: true,
        zp: 140
    },
    'Rock Tomb': {
        bp: 60,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        zp: 120
    },
    'Shadow Punch': {
        bp: 60,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 120
    },
    'Shock Wave': {
        bp: 60,
        type: 'Electric',
        category: 'Special',
        zp: 120
    },
    'Signal Beam': {
        bp: 75,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 140
    },
    'Sky Uppercut': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 160
    },
    'Spark': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 120
    },
    'Superpower': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Volt Tackle': {
        bp: 120,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true,
        zp: 190
    },
    'Water Pulse': {
        bp: 60,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true,
        zp: 120
    },
    'Water Spout': {
        bp: 150,
        type: 'Water',
        category: 'Special',
        isSpread: true,
        zp: 200
    },
    'Weather Ball': {
        bp: 50,
        type: 'Normal',
        category: 'Special',
        isBullet: true,
        zp: 160
    },
    'Air Slash': {
        bp: 75,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 140
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Aqua Tail': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        zp: 175
    },
    'Assurance': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Aura Sphere': {
        bp: 80,
        type: 'Fighting',
        category: 'Special',
        isBullet: true,
        isPulse: true,
        zp: 180
    },
    'Avalanche': {
        bp: 120,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Brave Bird': {
        bp: 120,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 190
    },
    'Bug Bite': {
        bp: 60,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        zp:  120
    },
    'Bug Buzz': {
        bp: 90,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        zp: 175
    },
    'Bullet Punch': {
        bp: 40,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 100
    },
    'Charge Beam': {
        bp: 50,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 190
    },
    'Chatter': {
        bp: 65,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        zp: 120
    },
    'Close Combat': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Cross Poison': {
        bp: 70,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 140
    },
    'Dark Pulse': {
        bp: 80,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true,
        zp: 160
    },
    'Discharge': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 160
    },
    'Double Hit': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true,
        zp: 140
    },
    'Draco Meteor': {
        bp: 140,
        type: 'Dragon',
        category: 'Special',
        zp: 195
    },
    'Dragon Pulse': {
        bp: 85,
        type: 'Dragon',
        category: 'Special',
        isPulse: true,
        zp: 160
    },
    'Dragon Rush': {
        bp: 100,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 180
    },
    'Drain Punch': {
        bp: 75,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 140
    },
    'Earth Power': {
        bp: 90,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 175
    },
    'Energy Ball': {
        bp: 90,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        zp: 175
    },
    'Fire Fang': {
        bp: 65,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        zp: 120
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true,
        zp: 190
    },
    'Flash Cannon': {
        bp: 80,
        type: 'Steel',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 160
    },
    'Fling': {
        bp: 1,
        type: 'Dark',
        category: 'Physical',
        zp: 100
    },
    'Focus Blast': {
        bp: 120,
        type: 'Fighting',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        zp: 190
    },
    'Force Palm': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 120
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 200
    },
    'Grass Knot': {
        bp: 1,
        type: 'Grass',
        category: 'Special',
        makesContact: true,
        zp: 160
    },
    'Gunk Shot': {
        bp: 120,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true,
        zp: 190
    },
    'Gyro Ball': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isBullet: true,
        zp: 160
    },
    'Hammer Arm': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        zp: 180
    },
    'Head Smash': {
        bp: 150,
        type: 'Rock',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 200
    },
    'Hyper Voice': {
        bp: 90,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true,
        zp: 175
    },
    'Ice Fang': {
        bp: 65,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        zp: 120
    },
    'Ice Shard': {
        bp: 40,
        type: 'Ice',
        category: 'Physical',
        zp: 100
    },
    'Iron Head': {
        bp: 80,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 160
    },
    'Judgment': {
        bp: 100,
        type: 'Normal',
        category: 'Special',
        zp: 180
    },
    'Jump Kick': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 180
    },
    'Last Resort': {
        bp: 140,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 200
    },
    'Lava Plume': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 160
    },

    'Leaf Storm': {
        bp: 130,
        type: 'Grass',
        category: 'Special',
        zp:195
    },
    'Magma Storm': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        zp: 180
    },
    'Mud Bomb': {
        bp: 65,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 120
    },
    'Natural Gift': {
        bp: 1,
        type: 'Normal',
        category: 'Physical',
        zp: 160
    },
    'Nature Power': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Night Slash': {
        bp: 70,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Outrage': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Payback': {
        bp: 50,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Pluck': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Poison Jab': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 190
    },
    'Power Gem': {
        bp: 80,
        type: 'Rock',
        category: 'Special',
        zp: 160
    },
    'Power Whip': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Psycho Cut': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical',
        zp: 140
    },
    'Punishment': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Rock Climb': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 175
    },
    'Rock Smash': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 100
    },
    'Seed Bomb': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
        isBullet: true,
        zp: 160
    },
    'Seed Flare': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 190
    },
    'Shadow Claw': {
        bp: 70,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Shadow Force': {
        bp: 120,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Shadow Sneak': {
        bp: 40,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Spacial Rend': {
        bp: 100,
        type: 'Dragon',
        category: 'Special',
        zp: 180
    },
    'Stone Edge': {
        bp: 100,
        type: 'Rock',
        category: 'Physical',
        zp: 175
    },
    'Sucker Punch': {
        bp: 70,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Swift': {
        bp: 60,
        type: 'Normal',
        category: 'Special',
        isSpread: true,
        zp: 120
    },
    'Thunder Fang': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        zp: 120
    },
    'Tri Attack': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 160
    },
    'U-turn': {
        bp: 70,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Vacuum Wave': {
        bp: 40,
        type: 'Fighting',
        category: 'Special',
        zp: 100
    },
    'Wake-Up Slap': {
        bp: 70,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Waterfall': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 160
    },
    'Wood Hammer': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 190
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Zen Headbutt': {
        bp: 80,
        type: 'Psychic',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 160
    },
    'Acid Spray': {
        bp: 40,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        zp: 100
    },
    'Acrobatics': {
        bp: 55,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 100
    },
    'Attack Order': {
        bp: 90,
        type: 'Bug',
        category: 'Physical',
        zp: 175
    },
    'Blue Flare': {
        bp: 130,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 195
    },
    'Bolt Strike': {
        bp: 130,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Bulldoze': {
        bp: 60,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 120
    },
    'Bullet Seed': {
        bp: 25,
        type: 'Grass',
        category: 'Physical',
        isMultiHit: true,
        isBullet: true,
        zp: 140
    },
    'Circle Throw': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Clear Smog': {
        bp: 50,
        type: 'Poison',
        category: 'Special',
        zp: 100
    },

    'Dragon Tail': {
        bp: 60,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },

    'Drill Run': {
        bp: 80,
        type: 'Ground',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Dual Chop': {
        bp: 40,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true,
        zp: 100
    },
    'Electro Ball': {
        bp: 1,
        type: 'Electric',
        category: 'Special',
        isBullet: true,
        zp: 160
    },
    'Feint': {
        bp: 30,
        type: 'Normal',
        category: 'Physical',
        zp: 100
    },
    'Fiery Dance': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 160
    },
    'Flame Charge': {
        bp: 50,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 100
    },
    'Foul Play': {
        bp: 95,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        zp: 175
    },
    'Freeze Shock': {
        bp: 140,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true,
        zp: 200
    },
    'Frost Breath': {
        bp: 60,
        type: 'Ice',
        category: 'Special',
        alwaysCrit: true,
        zp: 120
    },
    'Fusion Bolt': {
        bp: 100,
        type: 'Electric',
        category: 'Physical',
        zp: 180
    },
    'Fusion Flare': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        zp: 180
    },
    'Gear Grind': {
        bp: 50,
        type: 'Steel',
        category: 'Physical',
        isTwoHit: true,
        zp: 180
    },
    'Giga Drain': { bp: 75 },
    'Glaciate': {
        bp: 65,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 120
    },
    'Head Charge': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 190
    },
    'Heavy Slam': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        zp: 160
    },
    'Hex': {
        bp: 65,
        type: 'Ghost',
        category: 'Special',
        zp: 160
    },
    'Horn Leech': {
        bp: 75,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Hurricane': {
        bp: 110,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 185
    },
    'Icicle Crash': {
        bp: 85,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true,
        zp: 160
    },
    'Icicle Spear': {
        bp: 25,
        type: 'Ice',
        category: 'Physical',
        isMultiHit: true,
        zp: 140
    },
    'Incinerate': {
        bp: 60,
        type: 'Fire',
        category: 'Special',
        isSpread: true,
        zp: 120
    },
    'Inferno': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 180
    },

    'Low Sweep': {
        bp: 65,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 120
    },
    'Nature Power': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: false,
        isSpread: true
    },
    'Night Daze': {
        bp: 85,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 160
    },
    'Petal Dance': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        makesContact: true,
        zp: 190
    },
    'Psyshock': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true,
        zp: 160
    },
    'Psystrike': {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true,
        zp: 180
    },
    'Razor Shell': {
        bp: 75,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 140
    },
    'Relic Song': {
        bp: 75,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true,
        zp: 140
    },
    'Retaliate': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 140
    },
    'Sacred Sword': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        ignoresDefenseBoosts: true,
        zp: 175
    },
    'Scald': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 160
    },
    'Searing Shot': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 180
    },
    'Secret Sword': {
        bp: 85,
        type: 'Fighting',
        category: 'Special',
        dealsPhysicalDamage: true,
        zp: 160
    },
    'Sky Drop': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 120
    },
    'Sludge Wave': {
        bp: 95,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 175
    },
    'Smack Down': {
        bp: 50,
        type: 'Rock',
        category: 'Physical',
        zp: 100
    },
    'Snarl': {
        bp: 55,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true,
        zp: 100
    },
    'Stored Power': {
        bp: 20,
        type: 'Psychic',
        category: 'Special',
        zp: 160
    },
    'Storm Throw': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true,
        zp: 120
    },
    'Synchronoise': {
        bp: 120,
        type: 'Psychic',
        category: 'Special',
        isSpread: true,
        zp: 190
    },
    'Water Pledge':{
        bp: 80,
        type: 'Water',
        category: 'Special',
        zp: 160
    },
    'Fire Pledge':{
        bp: 80,
        type: 'Fire',
        category: 'Special',
        zp: 160
    },
    'Grass Pledge':{
        bp: 80,
        type: 'Grass',
        category: 'Special',
        zp: 160
    },
    'Tail Slap': {
        bp: 25,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true,
        zp: 140
    },
    'Thrash': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'V-create': {
        bp: 180,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        zp: 220
    },
    'Volt Switch': {
        bp: 70,
        type: 'Electric',
        category: 'Special',
        zp: 140
    },
    'Wild Charge': {
        bp: 90,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        zp: 175
    },

    'Arm Thrust': {
        bp: 15,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true,
        zp: 100
    },

    'Boomburst': {
        bp: 140,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true,
        zp: 200
    },


    'Dazzling Gleam': {
        bp: 80,
        type: 'Fairy',
        category: 'Special',
        isSpread: true,
        zp: 160
    },
    'Diamond Storm': {
        bp: 100,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        zp: 180
    },
    'Draco Meteor': { bp: 130 },
    'Dragon Ascent': {
        bp: 120,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        zp: 190
    },
    'Draining Kiss': {
        bp: 50,
        type: 'Fairy',
        category: 'Special',
        makesContact: true,
        zp: 100
    },
    'Flying Press': {
        bp: 80,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        zp: 170
    },
    'Freeze-Dry': {
        bp: 70,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 140
    },
    'Land\'s Wrath': {
        bp: 90,
        type: 'Ground',
        category: 'Physical',
        isSpread: true,
        zp: 185
    },
    'Light of Ruin': {
        bp: 140,
        type: 'Fairy',
        category: 'Special',
        hasRecoil: true,
        zp: 200
    },
    'Moonblast': {
        bp: 95,
        type: 'Fairy',
        category: 'Special',
        hasSecondaryEffect: true,
        zp: 175
    },
    'Nature Power': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: false
    },
    'Oblivion Wing': {
        bp: 80,
        type: 'Flying',
        category: 'Special',
        zp: 160
    },
    'Origin Pulse': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        isSpread: true,
        zp: 185
    },
    'Phantom Force': {
        bp: 90,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        zp: 175
    },
    'Play Rough': {
        bp: 90,
        type: 'Fairy',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        zp: 175
    },
    'Power-Up Punch': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        zp: 100
    },
    'Precipice Blades': {
        bp: 120,
        type: 'Ground',
        category: 'Physical',
        isSpread: 'true',
        zp: 190
    },
    'Sheer Cold': {
        bp: 0,
        type: 'Ice',
        category: 'Special',
        isSpread: 'false',
        isMLG: 'true',
        zp: 180
    },
    'Water Shuriken': {
        bp: 15,
        type: 'Water',
        category: 'Special',
        isMultiHit: true,
        zp: 100
    },
    'Aurora Beam': {
        bp: 65,
        type: 'Ice',
        category: 'Special',
        zp: 120
    },
    'Leech Life': {
        category: 'Physical',
        type: 'Bug',
        bp: 80,
        zp: 160
    },
    'Zing Zap': {
        category: 'Physical',
        type: 'Electric',
        bp: 80,
        zp: 160
    },
    'Moongeist Beam': {
        category: 'Special',
        type: 'Ghost',
        bp: 100,
        zp: 180
    },
    'Nuzzle':{
        category: 'Physical',
        type: 'Electric',
        bp: 20,
        zp: 100
    },
    'Sunsteel Strike': {
        category: 'Physical',
        type: 'Steel',
        bp: 100,
        zp: 180
    },
    'Spectral Thief': {
        category: 'Physical',
        type: 'Ghost',
        bp: 90,
        zp: 175
    },
    'Prismatic Laser': {
        category: 'Special',
        type: 'Psychic',
        bp: 160,
        zp: 200
    },
    'Liquidation': {
        category: 'Physical',
        type: 'Water',
        bp: 85,
        zp: 160
    },
    'Accelerock': {
        category: 'Physical',
        type: 'Rock',
        bp: 40,
        zp: 100
    },
    'Shadow Bone': {
        category: 'Physical',
        type: 'Ghost',
        bp: 85,
        zp: 160
    },
    'Stomping Tantrum': {
        category: 'Physical',
        type: 'Ground',
        bp: 75,
        zp: 140
    },
    'Psychic Fangs': {
        category: 'Physical',
        type: 'Psychic',
        makesContact: true,
        bp: 85,
        zp: 160,
        isBite: true
    },
    'Fleur Cannon': {
        category: 'Special',
        type: 'Fairy',
        bp: 130,
        zp: 195
    },
    'Shell Trap': {
        category: 'Special',
        type: 'Fire',
        bp: 150,
        zp: 200
    },
    'Genesis Supernova': {
        category: 'Special',
        type: 'Psychic',
        bp: 185
    },
    'Pulverizing Pancake': {
        category: 'Physical',
        type: 'Normal',
        bp: 210
    },
    'Stoked Sparksurfer': {
        category: 'Special',
        type: 'Electric',
        bp: 175
    },
    'Soul-Stealing 7-Star Strike': {
        category: 'Physical',
        type: 'Ghost',
        bp: 195
    },
    'Oceanic Operetta': {
        category: 'Special',
        type: 'Water',
        bp: 195
    },
    'Malicious Moonsault': {
        category: 'Physical',
        type: 'Dark',
        bp: 180
    },
    'Sinister Arrow Raid': {
        category: 'Physical',
        type: 'Ghost',
        bp: 180
    },
    'Brutal Swing': {
        category: 'Physical',
        type: 'Dark',
        bp: 60,
        isSpread: true,
        zp: 120
    },
    'Dragon Hammer': {
        category: 'Physical',
        type: 'Dragon',
        bp: 90,
        zp: 175
    },
    'Clanging Scales': {
        category: 'Special',
        type: 'Dragon',
        bp: 110,
        zp: 185
    },
    'Beak Blast': {
        category: 'Physical',
        type: 'Flying',
        bp: 100,
        zp: 180
    },
    'Trop Kick': {
        category: 'Physical',
        type: 'Grass',
        bp: 70,
        zp: 140
    },
    'Core Enforcer': {
        category: 'Special',
        type: 'Dragon',
        bp: 100,
        isSpread: true,
        zp: 140
    },
    'Revelation Dance':{
        category: 'Special',
        type: 'Normal',
        bp: 90,
        zp: 175
    },
    'Smart Strike':{
        category: 'Physical',
        type: 'Steel',
        bp: 70,
        zp: 140
    },
    'Multi-Attack': {
        category: 'Physical',
        type: 'Normal',
        bp: 90,
        zp: 185
    },
    'Burn Up': {
        category: 'Special',
        type: 'Fire',
        bp: 130,
        zp: 195
    },
    'Power Trip': {
        category: 'Physical',
        type: 'Dark',
        bp: 20,
        zp: 160
    },
    'Fire Lash': {
        category: 'Physical',
        type: 'Fire',
        bp: 80,
        zp: 160
    },
    'Lunge': {
        category: 'Physical',
        type: 'Bug',
        bp: 80,
        zp: 160
    },
    'Anchor Shot': {
        category: 'Physical',
        type: 'Steel',
        bp: 80,
        zp: 160
    },
    'Pollen Puff': {
        category: 'Special',
        type: 'Bug',
        bp: 90,
        zp: 175
    },
    'Throat Chop': {
        category: 'Physical',
        type: 'Dark',
        bp: 80,
        zp: 160
    },
    'Solar Blade': {
        category: 'Physical',
        type: 'Grass',
        bp: 125,
        zp: 190
    },
    'High Horsepower': {
        category: 'Physical',
        type: 'Ground',
        bp: 95,
        zp: 175
    },
    'Ice Hammer': {
        category: 'Physical',
        type: 'Ice',
        bp: 100,
        zp: 180
    },
    'First Impression': {
        category: 'Physical',
        type: 'Bug',
        bp: '90',
        zp: '175',
    },
    'Sparkling Aria': {
         category: 'Special',
         type: 'Water',
         bp: 90,
         isSpread: true,
         zp: 175
    },
    'Darkest Lariat': {
        category: 'Physical',
        type: 'Dark',
        bp: 85,
        zp:160,
        ignoresDefenseBoosts: true
    },
    'Spirit Shackle': {
        category: 'Physical',
        type: 'Ghost',
        bp: 80,
        zp: 160
    },
    'Catastropika': {
        category: 'Physical',
        type: 'Electric',
        bp: 210
    },
    'Breakneck Blitz': {
        type: 'Normal'
    },
    'Inferno Overdrive': {
        type: 'Fire'
    },
    'Subzero Slammer': {
        type: 'Ice'
    },
    'Hydro Vortex': {
        type: 'Water'
    },
    'Gigavolt Havoc': {
        type: 'Electric'
    },
    'All-Out Pummeling': {
        type: 'Fighting'
    },
    'Bloom Doom': {
        type: 'Grass'
    },
    'Shattered Psyche': {
        type: 'Psychic'
    },
    'Savage Spin-Out': {
        type: 'Bug'
    },
    'Acid Downpour': {
        type: 'Poison'
    },
    'Supersonic Skystrike': {
        type: 'Flying'
    },
    'Devastating Drake': {
        type: 'Dragon'
    },
    'Continental Crush': {
        type: 'Rock'
    },
    'Tectonic Rage': {
        type: 'Ground'
    },
    'Corkscrew Crash': {
        type: 'Steel'
    },
    'Twinkle Tackle': {
        type: 'Fairy'
    },
    'Never-Ending Nightmare': {
        type: 'Ghost'
    },
    'Black Hole Eclipse': {
        type: 'Dark'
    }
};
