const AccountHandler = require("../AccountHandler/index.js")

let ClothesBallasF = [
    { "Name": "Keine Kopfbedeckung", "ComponentId": 0, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Cap hinten", "ComponentId": 0, "Drawable": 142, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Brille", "ComponentId": 1, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Brille", "ComponentId": 1, "Drawable": 2, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Ohrringe", "ComponentId": 2, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Ohringe", "ComponentId": 2, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Uhr", "ComponentId": 6, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rolex", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Kein Zubehör", "ComponentId": 7, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gold Kette", "ComponentId": 7, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Tasche", "ComponentId": 5, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Leere tasche", "ComponentId": 5, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 0", "ComponentId": 3, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 1", "ComponentId": 3, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 2", "ComponentId": 3, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 3", "ComponentId": 3, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 4", "ComponentId": 3, "Drawable": 4, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 5", "ComponentId": 3, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 6", "ComponentId": 3, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 7", "ComponentId": 3, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 8", "ComponentId": 3, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 9", "ComponentId": 3, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 10", "ComponentId": 3, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 11", "ComponentId": 3, "Drawable": 11, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 12", "ComponentId": 3, "Drawable": 12, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 13", "ComponentId": 3, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 14", "ComponentId": 3, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 15", "ComponentId": 3, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 0", "ComponentId": 8, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 1", "ComponentId": 8, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 2", "ComponentId": 8, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 3", "ComponentId": 8, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 5", "ComponentId": 8, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 6", "ComponentId": 8, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 7", "ComponentId": 8, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 8", "ComponentId": 8, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 9", "ComponentId": 8, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 10", "ComponentId": 8, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 13", "ComponentId": 8, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 14", "ComponentId": 8, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 15", "ComponentId": 8, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans", "ComponentId": 4, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans", "ComponentId": 4, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans 2", "ComponentId": 4, "Drawable": 25, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss", "ComponentId": 4, "Drawable": 43, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sneaker", "ComponentId": 6, "Drawable": 1, "Textures": [0, 1, 2, 3], "Is_Accessories": false },
    { "Name": "Strand Schuhe", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sandalen", "ComponentId": 6, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Bafuß", "ComponentId": 6, "Drawable": 35, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Maske", "ComponentId": 1, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Clowns Maske", "ComponentId": 1, "Drawable": 95, "Textures": [0, 1, 2, 3], "Is_Accessories": false },

    //Hier beginnt der Personality Gangstuff
    { "Name": "Basic Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [0, 1, 2], "Is_Accessories": false },
    { "Name": "Lila Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [6], "Is_Accessories": false },
    { "Name": "Lila Bandana 2", "ComponentId": 1, "Drawable": 111, "Textures": [2], "Is_Accessories": false },
    { "Name": "Weisses Bandana", "ComponentId": 1, "Drawable": 111, "Textures": [15], "Is_Accessories": false },

    { "Name": "Gang Hemd offen", "ComponentId": 11, "Drawable": 120, "Textures": [16], "Is_Accessories": false },
    { "Name": "Gang Hemd zu", "ComponentId": 11, "Drawable": 121, "Textures": [16], "Is_Accessories": false },
    { "Name": "Gang Shirt", "ComponentId": 11, "Drawable": 125, "Textures": [2], "Is_Accessories": false },
    { "Name": "Pullover", "ComponentId": 11, "Drawable": 172, "Textures": [0, 1], "Is_Accessories": false },

    { "Name": "Lilane Shorts", "ComponentId": 4, "Drawable": 91, "Textures": [22], "Is_Accessories": false }
]

let ClothesGroveF = [
    { "Name": "Keine Kopfbedeckung", "ComponentId": 0, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Cap hinten", "ComponentId": 0, "Drawable": 142, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Brille", "ComponentId": 1, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Brille", "ComponentId": 1, "Drawable": 2, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Ohrringe", "ComponentId": 2, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Ohringe", "ComponentId": 2, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Uhr", "ComponentId": 6, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rolex", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Kein Zubehör", "ComponentId": 7, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gold Kette", "ComponentId": 7, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Tasche", "ComponentId": 5, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Leere tasche", "ComponentId": 5, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 0", "ComponentId": 3, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 1", "ComponentId": 3, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 2", "ComponentId": 3, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 3", "ComponentId": 3, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 4", "ComponentId": 3, "Drawable": 4, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 5", "ComponentId": 3, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 6", "ComponentId": 3, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 7", "ComponentId": 3, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 8", "ComponentId": 3, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 9", "ComponentId": 3, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 10", "ComponentId": 3, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 11", "ComponentId": 3, "Drawable": 11, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 12", "ComponentId": 3, "Drawable": 12, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 13", "ComponentId": 3, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 14", "ComponentId": 3, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 15", "ComponentId": 3, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 0", "ComponentId": 8, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 1", "ComponentId": 8, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 2", "ComponentId": 8, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 3", "ComponentId": 8, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 5", "ComponentId": 8, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 6", "ComponentId": 8, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 7", "ComponentId": 8, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 8", "ComponentId": 8, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 9", "ComponentId": 8, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 10", "ComponentId": 8, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 13", "ComponentId": 8, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 14", "ComponentId": 8, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 15", "ComponentId": 8, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans", "ComponentId": 4, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans", "ComponentId": 4, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans 2", "ComponentId": 4, "Drawable": 25, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss", "ComponentId": 4, "Drawable": 43, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sneaker", "ComponentId": 6, "Drawable": 1, "Textures": [0, 1, 2, 3], "Is_Accessories": false },
    { "Name": "Strand Schuhe", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sandalen", "ComponentId": 6, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Bafuß", "ComponentId": 6, "Drawable": 35, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Maske", "ComponentId": 1, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Clowns Maske", "ComponentId": 1, "Drawable": 95, "Textures": [0, 1, 2, 3], "Is_Accessories": false },

    //Hier beginnt der Personality Gangstuff
    { "Name": "Basic Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [0, 1, 2], "Is_Accessories": false },
    { "Name": "Grünes Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [5], "Is_Accessories": false },
    { "Name": "Grünes Bandana 2", "ComponentId": 1, "Drawable": 111, "Textures": [0], "Is_Accessories": false },
    { "Name": "Weisses Bandana", "ComponentId": 1, "Drawable": 111, "Textures": [15], "Is_Accessories": false },

    { "Name": "Gang Hemd offen", "ComponentId": 11, "Drawable": 120, "Textures": [13], "Is_Accessories": false },
    { "Name": "Gang Hemd zu", "ComponentId": 11, "Drawable": 121, "Textures": [13], "Is_Accessories": false },
    { "Name": "Gang Shirt", "ComponentId": 11, "Drawable": 125, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gang Jacke", "ComponentId": 11, "Drawable": 140, "Textures": [0], "Is_Accessories": false },

    { "Name": "Grüne Shorts", "ComponentId": 4, "Drawable": 91, "Textures": [17], "Is_Accessories": false }
]

let ClothesVagosF = [
    { "Name": "Keine Kopfbedeckung", "ComponentId": 0, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Cap hinten", "ComponentId": 0, "Drawable": 142, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Brille", "ComponentId": 1, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Brille", "ComponentId": 1, "Drawable": 2, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Ohrringe", "ComponentId": 2, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Ohringe", "ComponentId": 2, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Uhr", "ComponentId": 6, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rolex", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Kein Zubehör", "ComponentId": 7, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gold Kette", "ComponentId": 7, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Tasche", "ComponentId": 5, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Leere tasche", "ComponentId": 5, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 0", "ComponentId": 3, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 1", "ComponentId": 3, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 2", "ComponentId": 3, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 3", "ComponentId": 3, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 4", "ComponentId": 3, "Drawable": 4, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 5", "ComponentId": 3, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 6", "ComponentId": 3, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 7", "ComponentId": 3, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 8", "ComponentId": 3, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 9", "ComponentId": 3, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 10", "ComponentId": 3, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 11", "ComponentId": 3, "Drawable": 11, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 12", "ComponentId": 3, "Drawable": 12, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 13", "ComponentId": 3, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 14", "ComponentId": 3, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 15", "ComponentId": 3, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 0", "ComponentId": 8, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 1", "ComponentId": 8, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 2", "ComponentId": 8, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 3", "ComponentId": 8, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 5", "ComponentId": 8, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 6", "ComponentId": 8, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 7", "ComponentId": 8, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 8", "ComponentId": 8, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 9", "ComponentId": 8, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 10", "ComponentId": 8, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 13", "ComponentId": 8, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 14", "ComponentId": 8, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 15", "ComponentId": 8, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans", "ComponentId": 4, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans", "ComponentId": 4, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans 2", "ComponentId": 4, "Drawable": 25, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss", "ComponentId": 4, "Drawable": 43, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sneaker", "ComponentId": 6, "Drawable": 1, "Textures": [0, 1, 2, 3], "Is_Accessories": false },
    { "Name": "Strand Schuhe", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sandalen", "ComponentId": 6, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Bafuß", "ComponentId": 6, "Drawable": 35, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Maske", "ComponentId": 1, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Clowns Maske", "ComponentId": 1, "Drawable": 95, "Textures": [0, 1, 2, 3], "Is_Accessories": false },

    //Hier beginnt der Personality Gangstuff
    { "Name": "Basic Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [0, 1, 2], "Is_Accessories": false },
    { "Name": "Gelbes Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [8], "Is_Accessories": false },
    { "Name": "Weisses Bandana", "ComponentId": 1, "Drawable": 111, "Textures": [15], "Is_Accessories": false },

    { "Name": "Gang Hemd offen", "ComponentId": 11, "Drawable": 120, "Textures": [10], "Is_Accessories": false },
    { "Name": "Gang Hemd zu", "ComponentId": 11, "Drawable": 121, "Textures": [10], "Is_Accessories": false },
    { "Name": "Pullover", "ComponentId": 11, "Drawable": 79, "Textures": [0, 1], "Is_Accessories": false },
    { "Name": "Hemd", "ComponentId": 11, "Drawable": 132, "Textures": [0], "Is_Accessories": false },

    { "Name": "Gelber Shorts", "ComponentId": 4, "Drawable": 91, "Textures": [19], "Is_Accessories": false }
]

let ClothesCripsF = [
    { "Name": "Keine Kopfbedeckung", "ComponentId": 0, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Cap hinten", "ComponentId": 0, "Drawable": 142, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Brille", "ComponentId": 1, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Brille", "ComponentId": 1, "Drawable": 2, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Ohrringe", "ComponentId": 2, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Ohringe", "ComponentId": 2, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Uhr", "ComponentId": 6, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rolex", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Kein Zubehör", "ComponentId": 7, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gold Kette", "ComponentId": 7, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Tasche", "ComponentId": 5, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Leere tasche", "ComponentId": 5, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 0", "ComponentId": 3, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 1", "ComponentId": 3, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 2", "ComponentId": 3, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 3", "ComponentId": 3, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 4", "ComponentId": 3, "Drawable": 4, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 5", "ComponentId": 3, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 6", "ComponentId": 3, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 7", "ComponentId": 3, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 8", "ComponentId": 3, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 9", "ComponentId": 3, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 10", "ComponentId": 3, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 11", "ComponentId": 3, "Drawable": 11, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 12", "ComponentId": 3, "Drawable": 12, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 13", "ComponentId": 3, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 14", "ComponentId": 3, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 15", "ComponentId": 3, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 0", "ComponentId": 8, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 1", "ComponentId": 8, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 2", "ComponentId": 8, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 3", "ComponentId": 8, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 5", "ComponentId": 8, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 6", "ComponentId": 8, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 7", "ComponentId": 8, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 8", "ComponentId": 8, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 9", "ComponentId": 8, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 10", "ComponentId": 8, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 13", "ComponentId": 8, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 14", "ComponentId": 8, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 15", "ComponentId": 8, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans", "ComponentId": 4, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans", "ComponentId": 4, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans 2", "ComponentId": 4, "Drawable": 25, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss", "ComponentId": 4, "Drawable": 43, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sneaker", "ComponentId": 6, "Drawable": 1, "Textures": [0, 1, 2, 3], "Is_Accessories": false },
    { "Name": "Strand Schuhe", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sandalen", "ComponentId": 6, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Bafuß", "ComponentId": 6, "Drawable": 35, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Maske", "ComponentId": 1, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Clowns Maske", "ComponentId": 1, "Drawable": 95, "Textures": [0, 1, 2, 3], "Is_Accessories": false },

    //Hier beginnt der Personality Gangstuff
    { "Name": "Basic Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [0, 1, 2], "Is_Accessories": false },
    { "Name": "Schwarzes Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [7], "Is_Accessories": false },
    { "Name": "Blaues Bandana 2", "ComponentId": 1, "Drawable": 111, "Textures": [4], "Is_Accessories": false },
    { "Name": "Weisses Bandana", "ComponentId": 1, "Drawable": 111, "Textures": [15], "Is_Accessories": false },

    { "Name": "Gang Hemd offen", "ComponentId": 11, "Drawable": 120, "Textures": [9], "Is_Accessories": false },
    { "Name": "Gang Hemd zu", "ComponentId": 11, "Drawable": 121, "Textures": [9], "Is_Accessories": false },
    { "Name": "Gang Shirt", "ComponentId": 11, "Drawable": 126, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gang Jacke", "ComponentId": 11, "Drawable": 138, "Textures": [0], "Is_Accessories": false },

    { "Name": "Blaue Shorts", "ComponentId": 4, "Drawable": 91, "Textures": [10], "Is_Accessories": false }
]

let ClothesBloodsF = [
    { "Name": "Keine Kopfbedeckung", "ComponentId": 0, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Cap hinten", "ComponentId": 0, "Drawable": 142, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Brille", "ComponentId": 1, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Brille", "ComponentId": 1, "Drawable": 2, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Ohrringe", "ComponentId": 2, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Ohringe", "ComponentId": 2, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Uhr", "ComponentId": 6, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rolex", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Kein Zubehör", "ComponentId": 7, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gold Kette", "ComponentId": 7, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Tasche", "ComponentId": 5, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Leere tasche", "ComponentId": 5, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 0", "ComponentId": 3, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 1", "ComponentId": 3, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 2", "ComponentId": 3, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 3", "ComponentId": 3, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 4", "ComponentId": 3, "Drawable": 4, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 5", "ComponentId": 3, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 6", "ComponentId": 3, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 7", "ComponentId": 3, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 8", "ComponentId": 3, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 9", "ComponentId": 3, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 10", "ComponentId": 3, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 11", "ComponentId": 3, "Drawable": 11, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 12", "ComponentId": 3, "Drawable": 12, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 13", "ComponentId": 3, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 14", "ComponentId": 3, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 15", "ComponentId": 3, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 0", "ComponentId": 8, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 1", "ComponentId": 8, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 2", "ComponentId": 8, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 3", "ComponentId": 8, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 5", "ComponentId": 8, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 6", "ComponentId": 8, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 7", "ComponentId": 8, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 8", "ComponentId": 8, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 9", "ComponentId": 8, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 10", "ComponentId": 8, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 13", "ComponentId": 8, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 14", "ComponentId": 8, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 15", "ComponentId": 8, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans", "ComponentId": 4, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans", "ComponentId": 4, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans 2", "ComponentId": 4, "Drawable": 25, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss", "ComponentId": 4, "Drawable": 43, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sneaker", "ComponentId": 6, "Drawable": 1, "Textures": [0, 1, 2, 3], "Is_Accessories": false },
    { "Name": "Strand Schuhe", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sandalen", "ComponentId": 6, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Bafuß", "ComponentId": 6, "Drawable": 35, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Maske", "ComponentId": 1, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Clowns Maske", "ComponentId": 1, "Drawable": 95, "Textures": [0, 1, 2, 3], "Is_Accessories": false },

    //Hier beginnt der Personality Gangstuff
    { "Name": "Basic Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [0, 1, 2], "Is_Accessories": false },
    { "Name": "Rotes Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [9], "Is_Accessories": false },
    { "Name": "Rotes Bandana 2", "ComponentId": 1, "Drawable": 111, "Textures": [5], "Is_Accessories": false },
    { "Name": "Rotes Bandana 3", "ComponentId": 1, "Drawable": 111, "Textures": [12], "Is_Accessories": false },
    { "Name": "Weisses Bandana", "ComponentId": 1, "Drawable": 111, "Textures": [15], "Is_Accessories": false },

    { "Name": "Gang Hemd offen", "ComponentId": 11, "Drawable": 120, "Textures": [12], "Is_Accessories": false },
    { "Name": "Gang Hemd zu", "ComponentId": 11, "Drawable": 121, "Textures": [12], "Is_Accessories": false },
    { "Name": "Gang Shirt", "ComponentId": 11, "Drawable": 126, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gang Jacke", "ComponentId": 11, "Drawable": 138, "Textures": [1], "Is_Accessories": false },

    { "Name": "Rote Jogginghose", "ComponentId": 4, "Drawable": 61, "Textures": [4], "Is_Accessories": false }
]

let ClothesLostMCF = [
    { "Name": "Keine Kopfbedeckung", "ComponentId": 0, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Cap hinten", "ComponentId": 0, "Drawable": 142, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Brille", "ComponentId": 1, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Brille", "ComponentId": 1, "Drawable": 2, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Ohrringe", "ComponentId": 2, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rich Ohringe", "ComponentId": 2, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Keine Uhr", "ComponentId": 6, "Drawable": -1, "Textures": [0], "Is_Accessories": true },
    { "Name": "Rolex", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": true },
    { "Name": "Kein Zubehör", "ComponentId": 7, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Gold Kette", "ComponentId": 7, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Tasche", "ComponentId": 5, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Leere tasche", "ComponentId": 5, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 0", "ComponentId": 3, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 1", "ComponentId": 3, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 2", "ComponentId": 3, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 3", "ComponentId": 3, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 4", "ComponentId": 3, "Drawable": 4, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 5", "ComponentId": 3, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 6", "ComponentId": 3, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 7", "ComponentId": 3, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 8", "ComponentId": 3, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 9", "ComponentId": 3, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 10", "ComponentId": 3, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 11", "ComponentId": 3, "Drawable": 11, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 12", "ComponentId": 3, "Drawable": 12, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 13", "ComponentId": 3, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 14", "ComponentId": 3, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Körper 15", "ComponentId": 3, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 0", "ComponentId": 8, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 1", "ComponentId": 8, "Drawable": 1, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 2", "ComponentId": 8, "Drawable": 2, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 3", "ComponentId": 8, "Drawable": 3, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 5", "ComponentId": 8, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 6", "ComponentId": 8, "Drawable": 6, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 7", "ComponentId": 8, "Drawable": 7, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 8", "ComponentId": 8, "Drawable": 8, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 9", "ComponentId": 8, "Drawable": 9, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 10", "ComponentId": 8, "Drawable": 10, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 13", "ComponentId": 8, "Drawable": 13, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 14", "ComponentId": 8, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Shirt 15", "ComponentId": 8, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans", "ComponentId": 4, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans", "ComponentId": 4, "Drawable": 14, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kurze Jeans 2", "ComponentId": 4, "Drawable": 25, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss", "ComponentId": 4, "Drawable": 43, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Jeans mit verschluss 2", "ComponentId": 4, "Drawable": 44, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sneaker", "ComponentId": 6, "Drawable": 1, "Textures": [0, 1, 2, 3], "Is_Accessories": false },
    { "Name": "Strand Schuhe", "ComponentId": 6, "Drawable": 5, "Textures": [0], "Is_Accessories": false },
    { "Name": "Sandalen", "ComponentId": 6, "Drawable": 15, "Textures": [0], "Is_Accessories": false },
    { "Name": "Bafuß", "ComponentId": 6, "Drawable": 35, "Textures": [0], "Is_Accessories": false },
    { "Name": "Keine Maske", "ComponentId": 1, "Drawable": 0, "Textures": [0], "Is_Accessories": false },
    { "Name": "Clowns Maske", "ComponentId": 1, "Drawable": 95, "Textures": [0, 1, 2, 3], "Is_Accessories": false },

    //Hier beginnt der Personality Gangstuff
    { "Name": "Basic Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [0, 1, 2], "Is_Accessories": false },
    { "Name": "Bandana", "ComponentId": 1, "Drawable": 51, "Textures": [4], "Is_Accessories": false },
    { "Name": "Weisses Bandana", "ComponentId": 1, "Drawable": 111, "Textures": [15], "Is_Accessories": false },

    { "Name": "Leder Jacke", "ComponentId": 11, "Drawable": 160, "Textures": [0], "Is_Accessories": false },
    { "Name": "Kute", "ComponentId": 11, "Drawable": 156, "Textures": [0], "Is_Accessories": false },
    { "Name": "Pullover", "ComponentId": 11, "Drawable": 172, "Textures": [1], "Is_Accessories": false },
    { "Name": "T-Shirt", "ComponentId": 11, "Drawable": 212, "Textures": [4], "Is_Accessories": false },
    { "Name": "Jacke", "ComponentId": 11, "Drawable": 213, "Textures": [4], "Is_Accessories": false },
    { "Name": "Jacke 2", "ComponentId": 11, "Drawable": 214, "Textures": [4], "Is_Accessories": false },
    { "Name": "Jacke 3", "ComponentId": 11, "Drawable": 215, "Textures": [4], "Is_Accessories": false },

    { "Name": "Kurze Hose", "ComponentId": 4, "Drawable": 91, "Textures": [4], "Is_Accessories": false },
    { "Name": "Lange Hose", "ComponentId": 4, "Drawable": 90, "Textures": [4], "Is_Accessories": false }
]

function loadClothes(player)
{
    let frakid = player.getVariable("frakid");
    player.setProp(0, player.clothes[frakid].hats, player.clothes[frakid].hatstexture);
    player.setProp(1, player.clothes[frakid].glasses, player.clothes[frakid].glassestexture);
    player.setClothes(7, player.clothes[frakid].accessories, player.clothes[frakid].accessoriestexture, 0);
    player.setClothes(5, player.clothes[frakid].bags, player.clothes[frakid].bagstexture, 0);
    player.setClothes(11, player.clothes[frakid].tops, player.clothes[frakid].topstexture, 0);
    player.setClothes(4, player.clothes[frakid].legs, player.clothes[frakid].legstexture, 0);
    player.setClothes(3, player.clothes[frakid].torsos, player.clothes[frakid].torsostexture, 0);
    player.setProp(2, player.clothes[frakid].ears, player.clothes[frakid].earstexture);
    player.setClothes(1, player.clothes[frakid].masks, player.clothes[frakid].maskstexture, 0);
    player.setClothes(8, player.clothes[frakid].undershirts, player.clothes[frakid].undershirtstexture, 0);
    player.setProp(6, player.clothes[frakid].watches, player.clothes[frakid].watchestexture);
    player.setClothes(6, player.clothes[frakid].shoes, player.clothes[frakid].shoestexture, 0);

    switch (frakid) {
        case 0: //Ballas
            if (player.character[0].gender == 0)
            {
                //Weiblich
                return JSON.stringify(ClothesBallasF);
            }
            else
            {
                //Männlich
                return JSON.stringify(clohingBallasArrayM);
            }
        break;

        case 1: //Grove
        if (player.character[0].gender == 0)
        {
            //Weiblich
            return JSON.stringify(ClothesGroveF);
        }
        else
        {
            //Männlich
            return JSON.stringify(clohingGroveArrayM);
        }
    break;

    case 2: //Vagos
        if (player.character[0].gender == 0)
        {
            //Weiblich
            return JSON.stringify(ClothesVagosF);
        }
        else
        {
            //Männlich
            return JSON.stringify(clohingGroveArrayM);
        }
    break;

    case 3: //Crips
    if (player.character[0].gender == 0)
    {
        //Weiblich
        return JSON.stringify(ClothesCripsF);
    }
    else
    {
        //Männlich
        return JSON.stringify(clohingCripsArrayM);
    }
    break;

    case 4: //Bloods
    if (player.character[0].gender == 0)
    {
        //Weiblich
        return JSON.stringify(ClothesBloodsF);
    }
    else
    {
        //Männlich
        return JSON.stringify(clohingCripsArrayM);
    }
    break;

    case 5: //LostMC
    if (player.character[0].gender == 0)
    {
        //Weiblich
        return JSON.stringify(ClothesLostMCF);
    }
    else
    {
        //Männlich
        return JSON.stringify(clohingCripsArrayM);
    }
    break;

    case 6: //LCN
    if (player.character[0].gender == 0)
    {
        //Weiblich
        return JSON.stringify(ClothesLostMCF);
    }
    else
    {
        //Männlich
        return JSON.stringify(clohingCripsArrayM);
    }
    break;
    
    default:
    break;
    }
}

let savedClothesWomen = [];
let savedClothesMen = [];

savedClothesWomen.push({"frakid": 0, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 125, "topstexture": 2, "legs": 25, "legstexture": 0, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 2, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 1, "shoestexture": 0})
savedClothesWomen.push({"frakid": 1, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 125, "topstexture": 0, "legs": 25, "legstexture": 0, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 0, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 1, "shoestexture": 0})
savedClothesWomen.push({"frakid": 2, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 121, "topstexture": 15, "legs": 25, "legstexture": 0, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 51, "maskstexture": 8, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 1, "shoestexture": 0})
savedClothesWomen.push({"frakid": 3, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 121, "topstexture": 6, "legs": 25, "legstexture": 0, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 15, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 1, "shoestexture": 0})
savedClothesWomen.push({"frakid": 4, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 121, "topstexture": 12, "legs": 25, "legstexture": 0, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 5, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 1, "shoestexture": 0})
savedClothesWomen.push({"frakid": 5, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 154, "topstexture": 0, "legs": 44, "legstexture": 0, "torsos": 15, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 51, "maskstexture": 3, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 1, "shoestexture": 0})
savedClothesWomen.push({"frakid": 6, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 416, "topstexture": 0, "legs": 21, "legstexture": 0, "torsos": 42, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 18, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesWomen.push({"frakid": 7, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 98, "topstexture": 3, "legs": 23, "legstexture": 13, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 54, "maskstexture": 1, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesWomen.push({"frakid": 8, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 98, "topstexture": 2, "legs": 25, "legstexture": 0, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 94, "maskstexture": 0, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})

savedClothesMen.push({"frakid": 0, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 127, "topstexture": 13, "legs": 42, "legstexture": 2, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 51, "maskstexture": 6, "undershirts": 0, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesMen.push({"frakid": 1, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 127, "topstexture": 9, "legs": 42, "legstexture": 2, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 51, "maskstexture": 5, "undershirts": 0, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesMen.push({"frakid": 2, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 127, "topstexture": 12, "legs": 42, "legstexture": 2, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 51, "maskstexture": 8, "undershirts": 0, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesMen.push({"frakid": 3, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 127, "topstexture": 5, "legs": 42, "legstexture": 2, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 15, "undershirts": 0, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesMen.push({"frakid": 4, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 127, "topstexture": 10, "legs": 42, "legstexture": 2, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 5, "undershirts": 0, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 6, "shoestexture": 0})
savedClothesMen.push({"frakid": 5, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 210, "topstexture": 5, "legs": 86, "legstexture": 5, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 51, "maskstexture": 3, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 35, "shoestexture": 0})
savedClothesMen.push({"frakid": 6, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 50, "topstexture": 0, "legs": 28, "legstexture": 0, "torsos": 0, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 111, "maskstexture": 18, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 10, "shoestexture": 0})
savedClothesMen.push({"frakid": 7, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 72, "topstexture": 1, "legs": 28, "legstexture": 3, "torsos": 15, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 54, "maskstexture": 1, "undershirts": 27, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 10, "shoestexture": 0});
savedClothesMen.push({"frakid": 8, "hats": -1, "hatstexture": 0, "glasses": -1, "glassestexture": 0, "accessories": 0, "accessoriestexture": 0, "bags": 0, "bagstexture": 0, "tops": 107, "topstexture": 2, "legs": 28, "legstexture": 2, "torsos": 14, "torsostexture": 0, "ears": -1, "earstexture": 0, "masks": 94, "maskstexture": 0, "undershirts": 15, "undershirtstexture": 0, "watches": -1, "watchestexture": 0, "shoes": 10, "shoestexture": 0})

function saveStandardClothesWomen(player)
{
    let carr = JSON.stringify(savedClothesWomen);
    player.clothes = JSON.parse(carr);
    AccountHandler.savePlayerClothes(player.socialClub, carr);
}

function saveStandardClothesMen(player)
{
    let carr = JSON.stringify(savedClothesMen);
    player.clothes = JSON.parse(carr);
    AccountHandler.savePlayerClothes(player.socialClub, carr);
}

module.exports = { loadClothes, saveStandardClothesWomen, saveStandardClothesMen };

function updatePlayerClothes(player, selectedComponentId, selectedDrawable, selectedTexture)
{
    let frakid = player.getVariable("frakid");
    selectedComponentId = parseInt(selectedComponentId);
    selectedDrawable = parseInt(selectedDrawable);
    selectedTexture = parseInt(selectedTexture);
    switch (selectedComponentId) {
        case 1:
            player.clothes[frakid].masks = selectedDrawable;
            player.clothes[frakid].maskstexture = selectedTexture;
        break;
        case 3:
            player.clothes[frakid].torsos = selectedDrawable;
            player.clothes[frakid].torsostexture = selectedTexture;
        break;
        case 4:
            player.clothes[frakid].legs = selectedDrawable;
            player.clothes[frakid].legstexture = selectedTexture;
        break;
        case 5:
            player.clothes[frakid].bags = selectedDrawable;
            player.clothes[frakid].bagstexture = selectedTexture;
        break;
        case 6:
            player.clothes[frakid].shoes = selectedDrawable;
            player.clothes[frakid].shoestexture = selectedTexture;
        break;
        case 7:
            player.clothes[frakid].accessories = selectedDrawable;
            player.clothes[frakid].accessoriestexture = selectedTexture;
        break;
        case 8:
            player.clothes[frakid].undershirts = selectedDrawable;
            player.clothes[frakid].undershirtstexture = selectedTexture;
        break;
        case 11:
            player.clothes[frakid].tops = selectedDrawable;
            player.clothes[frakid].topstexture = selectedTexture;
        break;
    
        default:
        break;
    }
}

function updatePlayerProps(player, selectedComponentId, selectedDrawable, selectedTexture)
{
    let frakid = player.getVariable("frakid");
    selectedComponentId = parseInt(selectedComponentId);
    selectedDrawable = parseInt(selectedDrawable);
    selectedTexture = parseInt(selectedTexture);
    switch (selectedComponentId) {
        case 0:
            player.clothes[frakid].hats = selectedDrawable;
            player.clothes[frakid].hatstexture = selectedTexture;
        break;
        case 1:
            player.clothes[frakid].glasses = selectedDrawable;
            player.clothes[frakid].glassestexture = selectedTexture;
        break;
        case 2:
            player.clothes[frakid].ears = selectedDrawable;
            player.clothes[frakid].earstexture = selectedTexture;
        break;
        case 6:
            player.clothes[frakid].watches = selectedDrawable;
            player.clothes[frakid].watchestexture = selectedTexture;
        break;
    
        default:
        break;
    }
}

mp.events.add('Server:ClothingStorage:SetClothes', (player, selectedComponentId, selectedDrawable, selectedTexture, selectedIsAccessories) => {
    if (player)
    {
        try {
            selectedComponentId = parseInt(selectedComponentId);
            selectedDrawable = parseInt(selectedDrawable);
            selectedTexture = parseInt(selectedTexture);

            if (selectedIsAccessories)
            {
                player.setProp(selectedComponentId, selectedDrawable, selectedTexture);
                updatePlayerProps(player, selectedComponentId, selectedDrawable, selectedTexture);
            }
            else
            {
                player.setClothes(selectedComponentId, selectedDrawable, selectedTexture, 0);
                updatePlayerClothes(player, selectedComponentId, selectedDrawable, selectedTexture);
            }
        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('Server:ClosedClothingSelection', (player) => {
    if (player)
    {
        try {
            player.call("Client:CreateNotification", ["Server", "Du hast erfolgreich dein Outfit ausgwählt!", 4000, "success", false]);
            player.call("Client:ToggleHud", [true]);
            player.dimension = 0;
            player.call("client:callremote", ["Server:SpawnPlayerToSpawn"]);
            AccountHandler.savePlayerClothes(player.socialClub, JSON.stringify(player.clothes));
        } catch (error) {
            console.log(error)
        }
    }
});

mp.events.add('Clothes:SetUserWeste', (player, value) => {
    if (player)
    {
        try {
            if (value)
            {
                if (player.character[0].gender == 0)
                {
                    player.setClothes(9, 17, 2, 0);
                }
                else
                {
                    player.setClothes(9, 15, 2, 0);
                }
            }
            else
            {
                player.setClothes(9, 0, 0, 0);
            }
        } catch (error) {
            console.log(error)
        }
    }
});