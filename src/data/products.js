 const products = [

  {
    id: 1,
    name: 'Fresh Salmon',
    category: 'Fish',
    price: 650,
    image: 'https://static.freshtohome.com/media/catalog/product/k/o/koi-whole.jpg',
    description: 'Fresh premium salmon suitable for healthy meals.'
  },

  {
    id: 2,
    name: 'Fresh Pomfret',
    category: 'Fish',
    price: 750,
    image: 'https://static.freshtohome.com/media/catalog/product/_/9/_90a25845d.jpeg',
    description: 'Fresh pomfret with excellent taste and quality.'
  },

  {
    id: 3,
    name: 'Fresh Rohu',
    category: 'Fish',
    price: 350,
    image: 'https://static.freshtohome.com/media/catalog/product/_/9/_90a28005d_1.jpg',
    description: 'Fresh Rohu fish perfect for everyday cooking.'
  },

  {
    id: 4,
    name: 'Fresh Prawns',
    category: 'Prawns',
    price: 550,
    image: 'https://static.freshtohome.com/media/catalog/product/i/n/indian_salmon_steaks_2_1.jpeg',
    description: 'Fresh prawns selected for great taste.'
  },

  {
    id: 5,
    name: 'Salmon Fillet',
    category: 'Fish',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/s/w/sword-fish---curry-cut.jpg',
    description: 'Premium salmon fillet.'
  },

  {
    id: 6,
    name: 'Silver Pomfret',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/b/l/black_pomfret_whole_2.jpg',
    description: 'Fresh silver pomfret.'
  },

  {
    id: 7,
    name: 'Black Pomfret',
    category: 'Fish',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/m/o/motha_whole17653.jpg',
    description: 'Fresh black pomfret.'
  },

  {
    id: 8,
    name: 'Rohu Curry Cut',
    category: 'Fish',
    price: 380,
    image: 'https://static.freshtohome.com/media/catalog/product/g/r/grouper_large_3.jpg',
    description: 'Fresh Rohu curry cut.'
  },

  {
    id: 9,
    name: 'Rohu Whole',
    category: 'Fish',
    price: 340,
    image: 'https://static.freshtohome.com/media/catalog/product/i/n/indian_salmon_whole.jpg',
    description: 'Fresh whole Rohu.'
  },

  {
    id: 10,
    name: 'Indian Salmon',
    category: 'Fish',
    price: 700,
    image: 'https://static.freshtohome.com/media/catalog/product/m/a/mathi_whole_510g_special.jpg',
    description: 'Fresh Indian Salmon.'
  },

  {
    id: 11,
    name: 'King Prawns',
    category: 'Prawns',
    price: 750,
    image: 'https://static.freshtohome.com/media/catalog/product/m/a/mahi-mahi.jpg',
    description: 'Large fresh king prawns.'
  },

  {
    id: 12,
    name: 'Tiger Prawns',
    category: 'Prawns',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/a/n/anchovies_whole_large_1_.jpeg',
    description: 'Premium tiger prawns.'
  },

  {
    id: 13,
    name: 'White Prawns',
    category: 'Prawns',
    price: 600,
    image: 'https://static.freshtohome.com/media/catalog/product/e/m/emperor_eari_whole.jpg',
    description: 'Fresh white prawns.'
  },

  {
    id: 14,
    name: 'Medium Prawns',
    category: 'Prawns',
    price: 500,
    image: 'https://static.freshtohome.com/media/catalog/product/w/h/white-snapper-whole.jpg',
    description: 'Fresh medium-size prawns.'
  },

  {
    id: 15,
    name: 'Large Prawns',
    category: 'Prawns',
    price: 700,
    image: 'https://static.freshtohome.com/media/catalog/product/s/w/sword_fish.jpg',
    description: 'Fresh large prawns.'
  },

  {
    id: 16,
    name: 'Fresh Crab',
    category: 'Crabs',
    price: 700,
    image: 'https://static.freshtohome.com/media/catalog/product/s/i/silver_croaker_kora_1_.jpg',
    description: 'Fresh crab selected for quality.'
  },

  {
    id: 17,
    name: 'Blue Crab',
    category: 'Crabs',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/p/i/pink_perch_whole_1_1.jpg',
    description: 'Fresh blue crab.'
  },

  {
    id: 18,
    name: 'Mud Crab',
    category: 'Crabs',
    price: 950,
    image: 'https://static.freshtohome.com/media/catalog/product/p/i/pink_perch_whole_1.jpg',
    description: 'Premium fresh mud crab.'
  },

  {
    id: 19,
    name: 'Small Crab',
    category: 'Crabs',
    price: 550,
    image: 'https://static.freshtohome.com/media/catalog/product/r/i/ribbon_fish_whole_6.5g.jpg',
    description: 'Fresh small crab.'
  },

  {
    id: 20,
    name: 'Large Crab',
    category: 'Crabs',
    price: 1000,
    image: 'https://static.freshtohome.com/media/catalog/product/b/a/baracuda_whole_1_1.jpg',
    description: 'Large premium crab.'
  },

  {
    id: 21,
    name: 'Fresh Tuna',
    category: 'Fish',
    price: 650,
    image: 'https://static.freshtohome.com/media/catalog/product/m/a/marine_milk_fish_poomeen_large_whole.jpg',
    description: 'Fresh tuna fish.'
  },

  {
    id: 22,
    name: 'Tuna Steak',
    category: 'Fish',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/t/u/tuna_whole_3.jpg',
    description: 'Premium tuna steak.'
  },

  {
    id: 23,
    name: 'King Fish',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/s/w/sword_fish_fillets_1.jpg',
    description: 'Fresh king fish.'
  },

  {
    id: 24,
    name: 'Mackerel',
    category: 'Fish',
    price: 450,
    image: 'https://static.freshtohome.com/media/catalog/product/b/l/black_pomfret_whole.jpg',
    description: 'Fresh mackerel fish.'
  },

  {
    id: 25,
    name: 'Sardines',
    category: 'Fish',
    price: 300,
    image: 'https://static.freshtohome.com/media/catalog/product/s/i/silver_biddy_pranjil_whole.jpeg',
    description: 'Fresh sardines.'
  },

  {
    id: 26,
    name: 'Tilapia',
    category: 'Fish',
    price: 350,
    image: 'https://static.freshtohome.com/media/catalog/product/l/e/leatherjacket_whole.jpg',
    description: 'Fresh tilapia fish.'
  },

  {
    id: 27,
    name: 'Catla',
    category: 'Fish',
    price: 400,
    image: 'https://static.freshtohome.com/media/catalog/product/c/a/catfish_whole.jpg',
    description: 'Fresh Catla fish.'
  },

  {
    id: 28,
    name: 'Hilsa',
    category: 'Fish',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/s/a/sail-fish.jpg',
    description: 'Premium Hilsa fish.'
  },

  {
    id: 29,
    name: 'Sea Bass',
    category: 'Fish',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/f/a/false_pomfret.jpg',
    description: 'Fresh sea bass.'
  },

  {
    id: 30,
    name: 'Red Snapper',
    category: 'Fish',
    price: 950,
    image: 'https://static.freshtohome.com/media/catalog/product/e/e/eel_fish.jpeg',
    description: 'Fresh red snapper.'
  },

  {
    id: 31,
    name: 'Prawn Curry Cut',
    category: 'Prawns',
    price: 580,
    image: 'https://static.freshtohome.com/media/catalog/product/r/o/rock-fish-main.jpg',
    description: 'Fresh prawns ready for curry.'
  },

  {
    id: 32,
    name: 'Prawn Fry Cut',
    category: 'Prawns',
    price: 600,
    image: 'https://static.freshtohome.com/media/catalog/product/a/t/atlantic_salmon1.jpg',
    description: 'Fresh prawns for frying.'
  },

  {
    id: 33,
    name: 'Jumbo Prawns',
    category: 'Prawns',
    price: 950,
    image: 'https://static.freshtohome.com/media/catalog/product/a/n/anchovy-medium.jpg',
    description: 'Extra-large fresh prawns.'
  },

  {
    id: 34,
    name: 'Fresh Shrimp',
    category: 'Prawns',
    price: 550,
    image: 'https://static.freshtohome.com/media/catalog/product/l/a/lady_fish_kane_1__2.jpg',
    description: 'Fresh shrimp.'
  },

  {
    id: 35,
    name: 'Premium Shrimp',
    category: 'Prawns',
    price: 750,
    image: 'https://static.freshtohome.com/media/catalog/product/r/e/red-snapper_big.jpg',
    description: 'Premium quality shrimp.'
  },

  {
    id: 36,
    name: 'Crab Curry Cut',
    category: 'Crabs',
    price: 750,
    image: 'https://static.freshtohome.com/media/catalog/product/w/h/white_sardine_veloori_whole.jpg',
    description: 'Fresh crab prepared for curry.'
  },

  {
    id: 37,
    name: 'Crab Meat',
    category: 'Crabs',
    price: 950,
    image: 'https://static.freshtohome.com/media/catalog/product/s/e/seer_fish_whole.jpg',
    description: 'Fresh crab meat.'
  },

  {
    id: 38,
    name: 'Premium Blue Crab',
    category: 'Crabs',
    price: 1000,
    image: 'https://static.freshtohome.com/media/catalog/product/b/o/bombay_duck_fish_bombil-whole.jpg',
    description: 'Premium blue crab.'
  },

  {
    id: 39,
    name: 'Fresh Soft Shell Crab',
    category: 'Crabs',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/y/e/yellow_fin_tuna_whole.jpg',
    description: 'Fresh soft shell crab.'
  },

  {
    id: 40,
    name: 'Fresh Sea Crab',
    category: 'Crabs',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/s/h/shark-large-cubes_1.jpg',
    description: 'Fresh sea crab.'
  },

  {
    id: 41,
    name: 'Fresh Sardine',
    category: 'Fish',
    price: 280,
    image: 'https://static.freshtohome.com/media/catalog/product/h/o/horse_mackerel_whole_1_1.jpg',
    description: 'Fresh sardine fish.'
  },

  {
    id: 42,
    name: 'Fresh Anchovy',
    category: 'Fish',
    price: 320,
    image: 'https://static.freshtohome.com/media/catalog/product/v/a/vatta_fillet_2_1.jpeg',
    description: 'Fresh anchovy fish.'
  },

  {
    id: 43,
    name: 'Fresh Ribbon Fish',
    category: 'Fish',
    price: 500,
    image: 'https://static.freshtohome.com/media/catalog/product/c/o/cobia_tikka_cut.jpg',
    description: 'Fresh ribbon fish.'
  },

  {
    id: 44,
    name: 'Fresh Sole Fish',
    category: 'Fish',
    price: 650,
    image: 'https://static.freshtohome.com/media/catalog/product/m/a/mackeral_whole_cleaned_1__2.jpg',
    description: 'Fresh sole fish.'
  },

  {
    id: 45,
    name: 'Fresh Grouper',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/s/e/seer-steaks-large.jpg',
    description: 'Premium grouper fish.'
  },

  {
    id: 46,
    name: 'Fresh Trout',
    category: 'Fish',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/i/n/indian_salmon_currycut_.jpg',
    description: 'Fresh trout.'
  },

  {
    id: 47,
    name: 'Fresh Cod',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/p/i/pink_perch_whole_1_4.jpg',
    description: 'Fresh cod fillet.'
  },

  {
    id: 48,
    name: 'Fresh Haddock',
    category: 'Fish',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/l/e/leather_jacket_fillet_1_2.jpg',
    description: 'Fresh haddock.'
  },

  {
    id: 49,
    name: 'Fresh Snapper',
    category: 'Fish',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/s/p/spanish_steak_1_1.jpeg',
    description: 'Fresh snapper.'
  },

  {
    id: 50,
    name: 'Fresh Mahi Mahi',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/t/u/tuna_choora_choorai_curry_cut_1.jpg',
    description: 'Fresh Mahi Mahi.'
  },

  {
    id: 51,
    name: 'Premium Salmon',
    category: 'Fish',
    price: 950,
    image: 'https://static.freshtohome.com/media/catalog/product/r/e/red-snapper-whole-cleaned_3.jpg',
    description: 'Premium salmon selection.'
  },

  {
    id: 52,
    name: 'Salmon Steak',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/t/r/trevalli_large_whole.jpg',
    description: 'Fresh salmon steak.'
  },

  {
    id: 53,
    name: 'Salmon Curry Cut',
    category: 'Fish',
    price: 700,
    image: 'https://static.freshtohome.com/media/catalog/product/a/t/atlantic_salmon_steaks_2_1.jpg',
    description: 'Fresh salmon curry cut.'
  },

  {
    id: 54,
    name: 'Salmon Boneless',
    category: 'Fish',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/b/l/black_pomfret_steaks_with_skin_1_1.jpg',
    description: 'Boneless salmon.'
  },

  {
    id: 55,
    name: 'Salmon Tawa Cut',
    category: 'Fish',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/b/l/black_pomfret_currycut_with_skin_1_1.jpg',
    description: 'Salmon prepared for tawa cooking.'
  },

  {
    id: 56,
    name: 'Fresh Tiger Prawn',
    category: 'Prawns',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/s/w/sword-fish-small-fry-cut_1.jpg',
    description: 'Premium tiger prawn.'
  },

  {
    id: 57,
    name: 'Fresh White Shrimp',
    category: 'Prawns',
    price: 600,
    image: 'https://static.freshtohome.com/media/catalog/product/p/i/pink_perch_whole_1_7_1.jpg',
    description: 'Fresh white shrimp.'
  },

  {
    id: 58,
    name: 'Fresh Pink Prawns',
    category: 'Prawns',
    price: 650,
    image: 'https://static.freshtohome.com/media/catalog/product/l/a/lady_fish_whole_cleaned_2.jpg',
    description: 'Fresh pink prawns.'
  },

  {
    id: 59,
    name: 'Fresh Black Tiger Prawns',
    category: 'Prawns',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/e/l/ell_steak_1_1.jpg',
    description: 'Large black tiger prawns.'
  },

  {
    id: 60,
    name: 'Prawns Cleaned',
    category: 'Prawns',
    price: 700,
    image: 'https://static.freshtohome.com/media/catalog/product/i/n/indian_salmon_fillet.jpg',
    description: 'Cleaned fresh prawns.'
  },

  {
    id: 61,
    name: 'Fresh Crab Premium',
    category: 'Crabs',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/f/r/fresh_atlantic_salmon_fillet_large_1_1.jpg',
    description: 'Premium fresh crab.'
  },

  {
    id: 62,
    name: 'Crab Family Pack',
    category: 'Crabs',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/i/n/indian_salmon_raavas_large_steak_1_1.jpg',
    description: 'Fresh crab family pack.'
  },

  {
    id: 63,
    name: 'Blue Swimming Crab',
    category: 'Crabs',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/q/u/queen_fish_leather_skin_fish_fillet_250g_1.jpg',
    description: 'Fresh swimming crab.'
  },

  {
    id: 64,
    name: 'Mud Crab Premium',
    category: 'Crabs',
    price: 1200,
    image: 'https://static.freshtohome.com/media/catalog/product/p/e/pearl_spot_karimeen_large_whole.jpg',
    description: 'Premium mud crab.'
  },

  {
    id: 65,
    name: 'Fresh Crab Meat',
    category: 'Crabs',
    price: 1000,
    image: 'https://static.freshtohome.com/media/catalog/product/a/s/asian_sea_bass_whole_cleaned.jpg',
    description: 'Premium crab meat.'
  },

  {
    id: 66,
    name: 'Fresh Sea Bream',
    category: 'Fish',
    price: 750,
    image: 'https://static.freshtohome.com/media/catalog/product/a/l/aleppy_karimeen_medium__3.jpg',
    description: 'Fresh sea bream.'
  },

  {
    id: 67,
    name: 'Fresh Barramundi',
    category: 'Fish',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/p/a/pabda_whole_2_1_.jpg',
    description: 'Fresh barramundi.'
  },

  {
    id: 68,
    name: 'Fresh Halibut',
    category: 'Fish',
    price: 1000,
    image: 'https://static.freshtohome.com/media/catalog/product/f/r/fresh-water-anchovies---2.jpg',
    description: 'Premium halibut.'
  },

  {
    id: 69,
    name: 'Fresh Mullet',
    category: 'Fish',
    price: 550,
    image: 'https://static.freshtohome.com/media/catalog/product/h/i/hilsa-fish_02_7.jpg',
    description: 'Fresh mullet.'
  },

  {
    id: 70,
    name: 'Fresh Snapper Fillet',
    category: 'Fish',
    price: 950,
    image: 'https://static.freshtohome.com/media/catalog/product/b/h/bhetki_1.jpg',
    description: 'Fresh snapper fillet.'
  },

  {
    id: 71,
    name: 'Fresh Prawn Large',
    category: 'Prawns',
    price: 750,
    image: 'https://static.freshtohome.com/media/catalog/product/r/o/rohu_12.jpg',
    description: 'Large fresh prawns.'
  },

  {
    id: 72,
    name: 'Fresh Prawn Medium',
    category: 'Prawns',
    price: 600,
    image: 'https://static.freshtohome.com/media/catalog/product/m/a/mackerel_whole_1.jpg',
    description: 'Medium fresh prawns.'
  },

  {
    id: 73,
    name: 'Fresh Prawn Small',
    category: 'Prawns',
    price: 450,
    image: 'https://static.freshtohome.com/media/catalog/product/k/a/kanambu.jpg',
    description: 'Small fresh prawns.'
  },

  {
    id: 74,
    name: 'Prawn Boneless',
    category: 'Prawns',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/k/u/kumarakom_karimeen_large.jpg',
    description: 'Cleaned boneless prawns.'
  },

  {
    id: 75,
    name: 'Premium Jumbo Prawns',
    category: 'Prawns',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/v/a/vaaka_varal.jpg',
    description: 'Premium jumbo prawns.'
  },

  {
    id: 76,
    name: 'Fresh Pomfret Curry Cut',
    category: 'Fish',
    price: 800,
    image: 'https://static.freshtohome.com/media/catalog/product/b/a/baby_rohu_cleaned_1.jpg',
    description: 'Pomfret curry cut.'
  },

  {
    id: 77,
    name: 'Fresh Pomfret Whole',
    category: 'Fish',
    price: 780,
    image: 'https://static.freshtohome.com/media/catalog/product/r/u/rupchanda_whole_1_1_.jpg',
    description: 'Fresh whole pomfret.'
  },

  {
    id: 78,
    name: 'Pomfret Fry Cut',
    category: 'Fish',
    price: 820,
    image: 'https://static.freshtohome.com/media/catalog/product/b/a/bata_fish_whole.jpg',
    description: 'Pomfret fry cut.'
  },

  {
    id: 79,
    name: 'Premium Pomfret',
    category: 'Fish',
    price: 1000,
    image: 'https://static.freshtohome.com/media/catalog/product/i/n/indian_river_shad_whole.jpg',
    description: 'Premium pomfret.'
  },

  {
    id: 80,
    name: 'Silver Pomfret Premium',
    category: 'Fish',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/t/i/tilapia_jalebi_fish_large_whole_1.jpg',
    description: 'Premium silver pomfret.'
  },

  {
    id: 81,
    name: 'Fresh Rohu Fillet',
    category: 'Fish',
    price: 450,
    image: 'https://static.freshtohome.com/media/catalog/product/c/a/catla_bengali_cut_headless_1.jpeg',
    description: 'Fresh Rohu fillet.'
  },

  {
    id: 82,
    name: 'Rohu Fry Cut',
    category: 'Fish',
    price: 400,
    image: 'https://static.freshtohome.com/media/catalog/product/b/a/baramundi-asian-sea-bass-bengali-curry-cut_1.jpg',
    description: 'Rohu fry cut.'
  },

  {
    id: 83,
    name: 'Rohu Boneless',
    category: 'Fish',
    price: 500,
    image: 'https://static.freshtohome.com/media/catalog/product/l/o/long_whiskered_catfish_whole_cleaned_1.jpg',
    description: 'Boneless Rohu.'
  },

  {
    id: 84,
    name: 'Premium Rohu',
    category: 'Fish',
    price: 450,
    image: 'https://static.freshtohome.com/media/catalog/product/b/a/basa_tikka.jpeg',
    description: 'Premium Rohu fish.'
  },

  {
    id: 85,
    name: 'Rohu Family Pack',
    category: 'Fish',
    price: 650,
    image: 'https://static.freshtohome.com/media/catalog/product/k/o/koi_cleaned_1.jpg',
    description: 'Fresh Rohu family pack.'
  },

  {
    id: 86,
    name: 'Fresh Tuna Fillet',
    category: 'Fish',
    price: 850,
    image: 'https://static.freshtohome.com/media/catalog/product/g/r/grey-mullan-cleaned_2_1.jpg',
    description: 'Fresh tuna fillet.'
  },

  {
    id: 87,
    name: 'Tuna Curry Cut',
    category: 'Fish',
    price: 700,
    image: 'https://static.freshtohome.com/media/catalog/product/b/a/baasa_whole.jpg',
    description: 'Fresh tuna curry cut.'
  },

  {
    id: 88,
    name: 'Tuna Boneless',
    category: 'Fish',
    price: 900,
    image: 'https://static.freshtohome.com/media/catalog/product/r/o/rohu-gada-cut.jpg',
    description: 'Boneless tuna.'
  },

  {
    id: 89,
    name: 'Premium Tuna',
    category: 'Fish',
    price: 1000,
    image: 'https://static.freshtohome.com/media/catalog/product/k/o/kolkata_topse_whole_.jpg',
    description: 'Premium tuna.'
  },

  {
    id: 90,
    name: 'Tuna Steak Premium',
    category: 'Fish',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/h/i/hilsa-fish_01_2.jpg',
    description: 'Premium tuna steak.'
  },

  {
    id: 91,
    name: 'Seafood Family Pack',
    category: 'Seafood',
    price: 1200,
    image: 'https://static.freshtohome.com/media/catalog/product/s/e/seer-fish-tail-and-head.jpg',
    description: 'Mixed fresh seafood family pack.'
  },

  {
    id: 92,
    name: 'Premium Seafood Pack',
    category: 'Seafood',
    price: 1500,
    image: 'https://static.freshtohome.com/media/catalog/product/s/a/sardine-fillet.jpg',
    description: 'Premium mixed seafood.'
  },

  {
    id: 93,
    name: 'Fish & Prawns Pack',
    category: 'Seafood',
    price: 1100,
    image: 'https://static.freshtohome.com/media/catalog/product/r/o/rohu_rui_bengali_cut_headless_2.jpg',
    description: 'Fresh fish and prawns combo.'
  },

  {
    id: 94,
    name: 'Seafood Party Pack',
    category: 'Seafood',
    price: 1800,
    image: 'https://static.freshtohome.com/media/catalog/product/r/o/rohu_bengali_cut1_1.jpg',
    description: 'Seafood pack for special occasions.'
  },

  {
    id: 95,
    name: 'Premium Fish Pack',
    category: 'Seafood',
    price: 1400,
    image: 'https://static.freshtohome.com/media/catalog/product/n/u/nuna_tengra_4_1.jpg',
    description: 'Premium mixed fish pack.'
  },

  {
    id: 96,
    name: 'Fresh Seafood Combo',
    category: 'Seafood',
    price: 1300,
    image: 'https://static.freshtohome.com/media/catalog/product/k/a/katla_whole_1__1_1.jpg',
    description: 'Fresh seafood combo.'
  },

  {
    id: 97,
    name: 'Family Seafood Combo',
    category: 'Seafood',
    price: 1600,
    image: 'https://static.freshtohome.com/media/catalog/product/m/a/mathi-whole-cleaned_2_1_2.jpg',
    description: 'Family seafood combo.'
  },

  {
    id: 98,
    name: 'Weekend Seafood Pack',
    category: 'Seafood',
    price: 1450,
    image: 'https://static.freshtohome.com/media/catalog/product/a/n/anchovy-whole-cleaned_4.jpg',
    description: 'Fresh seafood weekend pack.'
  },

  {
    id: 99,
    name: 'Premium Fish Combo',
    category: 'Seafood',
    price: 1700,
    image: 'https://static.freshtohome.com/media/catalog/product/r/o/roopchand_steaks_2.jpg',
    description: 'Premium fish combination.'
  },

  {
    id: 100,
    name: 'FreshCatch Special Combo',
    category: 'Seafood',
    price: 2000,
    image: 'https://static.freshtohome.com/media/catalog/product/c/a/catla_classic_cut_1.jpg',
    description: 'FreshCatch special seafood combination.'
  }

];

export default products;