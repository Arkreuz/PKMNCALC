

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
        hasSecondaryEffect: true
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
        makesContact: true
    },
    'Earthquake': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        isSpread: true
    },
    'Explosion': {
        bp: 170,
        type: 'Normal',
        category: 'Physical',
        isSpread: true
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
        category: 'Special'
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
        isPunch: true
    },
    'Mega Drain': {
        bp: 40,
        type: 'Grass'
    },
    'Night Shade': {
        bp: 100,
        type: 'Ghost',
        category: 'Special'
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
        hasSecondaryEffect: true
    },
    'Quick Attack': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
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
        isSpread: true
    },
    'Seismic Toss': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
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
        hasSecondaryEffect: true
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
    'ThunderPunch': {
        bp: 75,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
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
        category: 'Special'
    },
    'AncientPower': {
        bp: 60,
        type: 'Rock',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Bite': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },

    'Cross Chop': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
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
        isPunch: true
    },
    'Explosion': { bp: 250 },
    'ExtremeSpeed': {
        bp: 80,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Faint Attack': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Flail': {
        bp: 1,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
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
        makesContact: true
    },
    'Giga Drain': {
        bp: 60,
        type: 'Grass',
        category: 'Special'
    },
    'Headbutt': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
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
        isPunch: true
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
        makesContact: true
    },
    'Sacred Fire': {
        bp: 100,
        type: 'Fire',
        category: 'Physical',
        hasSecondaryEffect: true
    },

    'Shadow Ball': {
        bp: 80,
        type: 'Ghost',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Sludge Bomb': {
        bp: 90,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'SolarBeam': {
        bp: 120,
        type: 'Grass',
        category: 'Special'
    },
    'Steel Wing': {
        bp: 70,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
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
        makesContact: true
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
        isTwoHit: true
    },
    'Bounce': {
        bp: 85,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Brick Break': {
        bp: 75,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
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
        makesContact: true
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
        hasSecondaryEffect: true
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
        hasSecondaryEffect: true
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
        makesContact: true
    },
    'Luster Purge': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
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
        isBite: true
    },
    'Psycho Boost': {
        bp: 140,
        type: 'Psychic',
        category: 'Special'
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
        isPunch: true
    },
    'Shock Wave': {
        bp: 60,
        type: 'Electric',
        category: 'Special'
    },
    'Signal Beam': {
        bp: 75,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Sky Uppercut': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Spark': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
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
        hasRecoil: true
    },
    'Water Pulse': {
        bp: 60,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true
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
        isBullet: true
    },
    'Air Slash': {
        bp: 75,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Water',
        category: 'Physical',
        makesContact: true
    },
    'Aqua Tail': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true
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
        makesContact: true
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
        makesContact: true
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
        hasSecondaryEffect: true
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
        hasSecondaryEffect: true
    },
    'Dark Pulse': {
        bp: 80,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Discharge': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Double Hit': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Draco Meteor': {
        bp: 140,
        type: 'Dragon',
        category: 'Special'
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
        hasSecondaryEffect: true
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
        hasSecondaryEffect: true
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
        isBite: true
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Flash Cannon': {
        bp: 80,
        type: 'Steel',
        category: 'Special',
        hasSecondaryEffect: true
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
        hasSecondaryEffect: true
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
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
        hasSecondaryEffect: true
    },
    'Gyro Ball': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isBullet: true
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
        hasRecoil: true
    },
    'Hi Jump Kick': { bp: 100 },
    'Hyper Voice': {
        bp: 90,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true
    },
    'Ice Fang': {
        bp: 65,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
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
        hasSecondaryEffect: true
    },
    'Judgment': {
        bp: 100,
        type: 'Normal',
        category: 'Special'
    },
    'Jump Kick': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Last Resort': {
        bp: 130,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Lava Plume': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },

    'Leaf Storm': {
        bp: 130,
        type: 'Grass',
        category: 'Special'
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
        category: 'Physical'
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
        makesContact: true
    },
    'Outrage': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Payback': {
        bp: 50,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
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
        hasSecondaryEffect: true
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
        makesContact: true
    },
    'Rock Climb': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Rock Smash': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Seed Bomb': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
        isBullet: true
    },
    'Seed Flare': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Shadow Claw': {
        bp: 70,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Shadow Force': {
        bp: 120,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Shadow Sneak': {
        bp: 40,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
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
        category: 'Physical'
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
        isBite: true
    },
    'Tri Attack': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true
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
        hasSecondaryEffect: true
    },
    'Wood Hammer': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Zen Headbutt': {
        bp: 80,
        type: 'Psychic',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
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
        makesContact: true
    },
    'Attack Order': {
        bp: 90,
        type: 'Bug',
        category: 'Physical'
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
        isBullet: true
    },
    'Circle Throw': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Clear Smog': {
        bp: 50,
        type: 'Poison',
        category: 'Special'
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
        category: 'Physical'
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
        hasSecondaryEffect: true
    },
    'Foul Play': {
        bp: 95,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
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
        isMultiHit: true
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
    'Jump Kick': { bp: 100 },
    'Last Resort': { bp: 140 },
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
        makesContact: true
    },
    'Psyshock': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true
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
        hasSecondaryEffect: true
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
        category: 'Physical'
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
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true
    },
    'Synchronoise': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        isSpread: true
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
        makesContact: true
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
        isMultiHit: true
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
        isMLG: 'true'
    },
    'Storm Throw': { bp: 60 },
    'Synchronoise': { bp: 120 },




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
    },

    'Ice Punch':{
        zp: 140
    },
    'Thunder Punch':{
        zp: 140
    },

    'Jump Kick':{
        zp: 180
    },
    'Headbutt':{
        zp: 140
    },

    'Body Slam':{
        zp: 160
    },
    'Thrash':{
        zp: 190
    },


    'Bite':{
        zp: 120
    },






    'Hyper Beam':{
        zp: 200
    },
    'Drill Peck':{
        zp: 160
    },
    'Low Kick':{
        zp: 160
    },
    'Seismic Toss':{
        zp: 100
    },
    'Solar Beam':{
        zp: 190
    },
    'Petal Dance':{
        zp: 190
    },

    'Earthquake':{
        zp: 180
    },
    'Psychic':{
        zp: 175
    },
    'Quick Attack':{
        zp: 100
    },
    'Night Shade':{
        zp: 100
    },
    'Self-Destruct':{
        zp: 200
    },

    'Waterfall':{
        zp: 160
    },


    'Sky Attack':{
        zp: 200
    },

    'Explosion':{
        zp: 200
    },
    'Bonemerang':{
        zp: 100
    },
    'Rock Slide':{
        zp: 140
    },
    'Tri Attack':{
        zp: 160
    },
    'Super Fang':{
        type: "Normal",
        category: "Physical",
        zp: 100
    },

    'Flail':{
        zp: 160
    },
    'Aeroblast':{
        zp: 180
    },
    'Reversal':{
        zp: 160
    },
    'Mach Punch':{
        zp: 100
    },
    'Feint Attack':{
        zp: 120
    },
    'Sludge Bomb':{
        zp: 175
    },

    'Outrage':{
        zp: 190
    },
    'Giga Drain':{
        zp: 140
    },
    'Spark':{
        zp: 120
    },
    'Steel Wing':{
        zp: 140
    },

    'Frustration':{
        zp: 160
    },
    'Sacred Fire':{
        zp: 180
    },
    'Dynamic Punch':{
        zp: 180
    },






    'Cross Chop':{
        zp: 180
    },

    'Extreme Speed':{
        zp: 160
    },
    'Ancient Power':{
        zp: 120
    },
    'Shadow Ball':{
        zp: 160
    },
    'Rock Smash':{
        zp: 100
    },
    'Fake Out':{
        zp: 100
    },




    'Brick Break':{
        zp: 140
    },



    'Arm Thrust':{
        zp: 100
    },
    'Luster Purge':{
        zp: 140
    },

    'Hyper Voice':{
        zp: 175
    },
    'Poison Fang':{
        zp: 100
    },

    'Weather Ball':{
        zp: 160
    },


    'Signal Beam':{
        zp: 140
    },
    'Shadow Punch':{
        zp: 120
    },
    'Extrasensory':{
        zp: 160
    },
    'Sky Uppercut':{
        zp: 160
    },
    'Sheer Cold':{
        zp: 180
    },
    'Bullet Seed':{
        zp: 140
    },
    'Aerial Ace':{
        zp: 120
    },
    'Icicle Spear':{
        zp: 140
    },
    'Dragon Claw':{
        zp: 160
    },
    'Bounce':{
        zp: 160
    },
    'Volt Tackle':{
        zp: 190
    },


    'Shock Wave':{
        zp: 120
    },
    'Water Pulse':{
        zp: 120
    },

    'Psycho Boost':{
        zp: 200
    },


    'Gyro Ball':{
        zp: 160
    },
    'Natural Gift':{
        zp: 160
    },
    'Feint':{
        zp: 100
    },


    'Payback':{
        zp: 100
    },

    'Punishment':{
        zp: 160
    },

    'Flare Blitz':{
        zp: 190
    },
    'Force Palm':{
        zp: 120
    },

    'Poison Jab':{
        zp: 160
    },
    'Dark Pulse':{
        zp: 160
    },
    'Night Slash':{
        zp: 140
    },
    'Aqua Tail':{
        zp: 175
    },
    'Seed Bomb':{
        zp: 160
    },
    'Air Slash':{
        zp: 140
    },
    'X-Scissor':{
        zp: 160
    },


    'Dragon Rush':{
        zp: 180
    },




    'Earth Power':{
        zp: 175
    },
    'Giga Impact':{
        zp: 200
    },

    'Avalanche':{
        zp: 120
    },

    'Shadow Claw':{
        zp: 140
    },
    'Thunder Fang':{
        zp: 120
    },
    'Ice Fang':{
        zp: 120
    },
    'Fire Fang':{
        zp: 120
    },
    'Shadow Sneak':{
        zp: 100
    },


    'Zen Headbutt':{
        zp: 160
    },
    'Flash Cannon':{
        zp: 160
    },
    'Rock Climb':{
        zp: 175
    },
    'Draco Meteor':{
        zp: 195
    },
    'Discharge':{
        zp: 160
    },
    'Lava Plume':{
        zp: 160
    },


    'Cross Poison':{
        zp: 140
    },
    'Gunk Shot':{
        zp: 190
    },
    'Iron Head':{
        zp: 160
    },
    'Stone Edge':{
        zp: 180
    },


    'Judgment':{
        zp: 180
    },
    'Bug Bite':{
        zp: 120
    },
    'Charge Beam':{
        zp: 100
    },
    'Wood Hammer':{
        zp: 190
    },
    'Aqua Jet':{
        zp: 100
    },
    'Attack Order':{
        zp: 175
    },
    'Head Smash':{
        zp: 200
    },
    'Double Hit':{
        zp: 140
    },


    'Seed Flare':{
        zp: 190
    },
    'Shadow Force':{
        zp: 190
    },
    'Psyshock':{
        zp: 160
    },
    'Smack Down':{
        zp: 100
    },


    'Synchronoise':{
        zp: 190
    },

    'Flame Charge':{
        zp: 100
    },


    'Foul Play':{
        zp: 175
    },
    'Clear Smog':{
        zp: 100
    },

    'Scald':{
        zp: 160
    },

    'Sky Drop':{
        zp: 120
    },
    'Circle Throw':{
        zp: 120
    },

    'Acrobatics':{
        zp: 100
    },







};
