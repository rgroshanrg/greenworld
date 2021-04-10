// const mongoose = require('mongoose');
// const keys = require('./config/keys');

// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const Plant = require('./utils/models/plant-model');
//     console.log('Done');
//     const connectionParams={
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true 
//     }
//     mongoose.connect(keys.MONGO.URI,connectionParams).then( () => {
//         console.log('Connected to database ')
//     }).then(a => {

//         new Plant({
//             name : "AEONIUM ARBOREUM (TREE HOUSELEEK)",
//             imageLink : '/images/1.jpg',
//             isSucculents : true,
        
//             about : "Aeonium arboreum grows as a less branched subshrub and reaches stature heights of up to 2 metres. The more or less upright or ascending, smooth, not net-like patterned stem axes have a diameter of 1 to 3 centimetres. The plant is endemic to the western Canary Islands of Tenerife, La Palma, El Hierro, La Gomera and Gran Canaria.",
//             sunlight : "Aeoniums can be grown outdoors in zones 9 to 11 and, although they will tolerate partial shade, need at least six hours of full sun a day to develop their leaf colors. Indoors in pots Aeoniums need bright sunlight and moisture and do best in shallow containers.",
//             watering : "Water whenever it feels dry 1 inch below the surface, adding water until it trickles from the drainage holes at the base. Reduce watering to once a month during the winter for both pot- and garden-grown aeoniums.",
//             pottingMix : "They need normal succulent potting mix but unlike other succulents, which prefer dry soil, Aeoniums prefer soil that is moist but not wet. They can produce roots along their stems, which you may notice if the plant gets pot bound or the stems fall and touch the soil. Make sure these roots do not dry out."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "AEONIUM ‘MARDI GRAS",
//             imageLink : '/images/2.jpg',
//             isSucculents : true,
        
//             about : "Festive, Aeonium 'Mardi Gras' is a compact evergreen succulent forming showy rosettes of lemon yellow and emerald green variegation combined with pink to rich burgundy, especially when grown in bright light or when temperatures are cooler. It produces offsets from the outer ring of the main rosette.",
//             sunlight : "Aeoniums can be grown outdoors in zones 9 to 11 and, although they will tolerate partial shade, need at least six hours of full sun a day to develop their leaf colors. Indoors in pots Aeoniums need bright sunlight and moisture and do best in shallow containers.",
//             watering : "Place the pot in bright indirect light and water it lightly once each week. Once the plant has developed strong roots, allow the top 2 inches of soil to dry out before watering.",
//             pottingMix : "Soil. A sandy loam or regular potting mix amended with perlite is better than a mix specifically for succulents and cacti since Aeoniums need some moisture. If grown in garden beds with dense soil, it may be necessary to amend with peat moss to improve soil porosity."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "ECHEVERIA BLACK PRINCE",
//             imageLink : '/images/3.jpg',
//             isSucculents : true,
        
//             about : "Echeveria 'Black Prince' is an evergreen succulent forming striking rosettes, 3 in. across (7 cm), packed with fleshy, pointed, nearly black leaves which surround a glowing green center. In the fall and winter, it sends up leafy stems topped with remarkable clusters of bright scarlet-red flowers.",
//             sunlight : "Like they're used to in their native growing grounds, Echeveria like full sun. However, try to avoid these two things: drastic sunlight changes and summer afternoon full sun. Dramatic changes in lighting can stress plants out. ... Your plants will stretch if they don't have enough sunlight",
//             watering : "Limiting water, Never let water remain in the rosette of this plant. It can cause rot or fungal disease. Actually, with this echeveria and other succulents, it is best to water at the soil level, keeping the leaves fairly dry. Count on watering once every week to ten days; however, small variables such as pot size and plant size may influence this schedule. It's best to simply check your soil every few days and water when it is nearly completely dry.",
//             pottingMix : "The best mixing ratio of the three ingredients is two parts sand, two parts gardening soil(compost), and one-part perlite or pumice. Translating this to cups makes it 3 cups of sand, 3 cups of soil, and 1.5 cups of perlite or pumice."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "ECHEVERIA ELEGANS",
//             imageLink : '/images/4.jpg',
//             isSucculents : true,
        
//             about : "Echeveria elegans, the Mexican snow ball, Mexican gem or white Mexican rose is a species of flowering plant in the family Crassulaceae, native to semi-desert habitats in Mexico.",
//             sunlight : "Like they're used to in their native growing grounds, Echeveria like full sun. However, try to avoid these two things: drastic sunlight changes and summer afternoon full sun. Dramatic changes in lighting can stress plants out. ... Intense afternoon sun can, in some regions be too strong and the leaves will sunburn.",
//             watering : "Like all succulent Echeverias, do not overwater. Allow firecracker plants to dry out completely. Keep a close eye on it and give it a deep watering when the soil is almost dry. Be sure to water the soil and don't get water on the rosette itself.",
//             pottingMix : "Echeverias thrive in a well-drained soil. Although described as tender, they are pretty tough. They can tolerate cold but can't cope with wet and cold, so plants should be moved to a frost-free place over winter. A south-facing, sandy, slightly acidic soil is ideal."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "ALOE VERA",
//             imageLink : '/images/5.jpg',
//             isSucculents : true,
        
//             about : "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.",
//             sunlight : "In general, aloe vera plants need plenty of sunlight, minimal regular watering and warm temperatures. Light: Aloe vera plants need to be housed in a bright location with some direct sun in winter months. ... Water: Aloe vera plants are drought resistant, so they can survive with minimal watering.",
//             watering : "The winter the moisture will not dry up overly quickly so water sparingly – once every week if not a fortnight. Whereas in the summer you can freely water more heavily, however, make sure to allow the soil to dry between sessions.",
//             pottingMix : "Like cacti, succulents do best in dry conditions. When growing aloe vera plants, plant them in a cactus potting soil mix or a regular potting soil that has been amended with additional perlite or building sand. Also, make sure that the pot has plenty of drainage holes. Aloe vera plants cannot tolerate standing water."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "CRASSULA CAPITELLA (RED PAGODA)",
//             imageLink : '/images/6.jpg',
//             isSucculents : true,
        
//             about : "Crassula capitella, is a perennial succulent plant native to southern Africa.",
//             sunlight : "Crassula Red Pagoda will put on its fiery show of red hue if it gets bright sunlight in the morning for four hours or more, though they will thrive in less light also. Direct sunlight at noon in extreme weather for prolonged hours can cause leaves to turn brown.",
//             watering : "Red Pagoda gets its deepest, most vibrant color in winter in a bright location. Plants located in sun develop hues that are rich and jewel-like. The plant has low water needs but it is best to follow a regular schedule of watering in the first year to force a vigorous root",
//             pottingMix : "Soil. Fertile, sharply drained soil. The best mixing ratio of the three ingredients is two parts sand, two parts gardening soil(compost), and one-part perlite or pumice. Translating this to cups makes it 3 cups of sand, 3 cups of soil, and 1.5 cups of perlite or pumice."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "CRASSULA OVATA (JADE PLANT)",
//             imageLink : '/images/7.jpg',
//             isSucculents : true,
        
//             about : "Crassula ovata, commonly known as jade plant, lucky plant, money plant or money tree, is a succulent plant with small pink or white flowers that is native to the KwaZulu-Natal and Eastern Cape provinces of South Africa, and Mozambique; it is common as a houseplant worldwide.",
//             sunlight : "Jade plants need at least 4 hours of direct sunlight each day. Young plants should be kept in bright, indirect sunlight; large, well-established jade plants can handle more direct sunlight. Kitchens and offices with a south-facing window are typically great spots with just enough light, as are western-facing windows.",
//             watering : "Jade plants are succulents (they hold water in their leaves), so they don't do well when sitting in constantly moist soil, so let the top 1 to 2 inches of soil dry out between waterings. Indoors, this will probably mean watering once every 2 to 3 weeks—but be sure to check regularly!",
//             pottingMix : "The only major soil requirement that jade plants have is that the soil must drain rapidly. The jade plant, native to South Africa, has adapted to thrive in rocky, sandy soils with low fertility. Jade plants do have a tendency to become top-heavy and their shallow roots make them prone to tipping over."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "ECHEVERIA BLUE WAVES",
//             imageLink : '/images/8.jpg',
//             isSucculents : true,
        
//             about : "'Blue Waves' is a small succulent with frilly-edged leaves that are blue-green at the center of the rosette and pink on the edges. ... These tender succulents, which are in the Crassulaceae family, are drought tolerant but not frost hardy. All echeveria are evergreen with flowers appearing in the spring, summer, and fall.",
//             sunlight : "All echeveria are evergreen with flowers appearing in the spring, summer, and fall. Plant them in a location that receives at least 3-4 hours of direct sunlight. They do well in part shade to full sun in coastal areas but should be protected from the full midday sun in the hotter inland areas.",
//             watering : "Generally speaking, count on watering once every week to ten days; however, small variables such as pot size and plant size may influence this schedule. It's best to simply check your soil every few days and water when it is nearly completely dry.",
//             pottingMix : "Echeverias thrive in a well-drained soil. Although described as tender, they are pretty tough. They can tolerate cold but can't cope with wet and cold, so plants should be moved to a frost-free place over winter. A south-facing, sandy, slightly acidic soil is ideal."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "ECHEVERIA LILACINA",
//             imageLink : '/images/9.jpg',
//             isSucculents : true,
        
//             about : "Echeveria lilacina, common name ghost echeveria or Mexican hens and chicks, is a species of succulent plants in the genus Echeveria belonging to the family Crassulaceae.",
//             sunlight : "Like they're used to in their native growing grounds, Echeveria like full sun. However, try to avoid these two things: drastic sunlight changes and summer afternoon full sun. Dramatic changes in lighting can stress plants out. ... Your plants will stretch if they don't have enough sunlight.",
//             watering : "Take care to water from below, and only water when the soil is nearly dry. It's recommended to avoid getting water in the leaves, and never allow water to sit on the rosette. During the spring and summer months, fertilize Echeveria lilacina using a water-soluble liquid fertilizer with a low to medium nitrogen content.",
//             pottingMix : "Echeverias thrive in a well-drained soil. Although described as tender, they are pretty tough. They can tolerate cold but can't cope with wet and cold, so plants should be moved to a frost-free place over winter. A south-facing, sandy, slightly acidic soil is ideal."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "ECHEVERIA SETOSA",
//             imageLink : '/images/10.jpg',
//             isSucculents : true,
        
//             about : "Echeveria setosa, the Mexican fire cracker, is a species of flowering plant in the family Crassulaceae, native to semi-desert areas of Mexico and common throughout Puebla.",
//             sunlight : "When keeping them as houseplants avoid setting your plant in full afternoon sunlight. In some environments, harsh afternoon sun may be too strong and cause leaves to burn. Burned Setosa leaves do not heal. ... Echeveria that do not get enough sunlight will stretch.",
//             watering : "Like all succulent Echeverias, do not overwater. Allow firecracker plants to dry out completely. Keep a close eye on it and give it a deep watering when the soil is almost dry. Be sure to water the soil and don't get water on the rosette itself.",
//             pottingMix : "Echeverias thrive in a well-drained soil. Although described as tender, they are pretty tough. They can tolerate cold but can't cope with wet and cold, so plants should be moved to a frost-free place over winter. A south-facing, sandy, slightly acidic soil is ideal."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "HAWORTHIOPSIS COARCTATA",
//             imageLink : '/images/11.jpg',
//             isSucculents : true,
        
//             about : "Haworthiopsis coarctata, formerly Haworthia coarctata, is a species of flowering succulent plant from the Eastern Cape Province, South Africa and naturalized in Mexico. It is one of the species of Haworthiopsis that is commonly cultivated as an ornamental.",
//             sunlight : "Although some Haworthia species can be found in full, bright sun, many live in more protected spots and therefore are adapted to thrive in partial shade (though few look their best without at least some direct sun or bright light).",
//             watering : "Water every 2-3 weeks in direct light, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
//             pottingMix : "All Haworthias do not like their roots to remain wet for prolonged periods, so their potting soil should be well-drained. Use a commercial succulent potting mix or make your own. Hardiness: Haworthias like warmer temperatures in the summer but cool in the winter. However, they do not like being too cold."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "HAWORTHIA FASCIATA (ZEBRA CACTUS)",
//             imageLink : '/images/12.jpg',
//             isSucculents : true,
        
//             about : "Haworthiopsis fasciata, formerly Haworthia fasciata, is a species of succulent plant from the Eastern Cape Province, South Africa. The species is rare in cultivation. The plants are generally small, less than 10 cm (4 in) high. The triangular shaped leaves are green with narrow white crested strips on the outside. At the end of the leaf is a non acute spine. The summer flowers appear in October and November, on the end of an inflorescence.",
//             sunlight : "It does best partial sun. Plant in an area of your garden that gets 4-6 hours of sunlight in the morning. If given more sunlight it will turn a deep red color showing it is stressed. Too much sun will cause it to turn white and dry up.",
//             watering : "Moderate Watering Once a week or so in Summer and once every two weeks in Winter. Feeding Try to fertilise once every three months when it's growing.",
//             pottingMix : "The best mixing ratio of the three ingredients is two parts sand, two parts gardening soil(compost), and one-part perlite or pumice. Translating this to cups makes it 3 cups of sand, 3 cups of soil, and 1.5 cups of perlite or pumice."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "HAWORTHIA LIMFOLIA",
//             imageLink : '/images/13.jpg',
//             isSucculents : true,
        
//             about : "Haworthiopsis limifolia, formerly Haworthia limifolia, is a species of flowering plant in the genus Haworthiopsis, native to southern Africa and first described in 1910.",
//             sunlight : "Although some Haworthia species can be found in full, bright sun, many live in more protected spots and therefore are adapted to thrive in partial shade (though few look their best without at least some direct sun or bright light).",
//             watering : "Water every 2-3 weeks in direct light, allowing soil to dry out between waterings.",
//             pottingMix : "All Haworthias do not like their roots to remain wet for prolonged periods, so their potting soil should be well-drained. Use a commercial succulent potting mix or make your own. Hardiness: Haworthias like warmer temperatures in the summer but cool in the winter. However, they do not like being too cold."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "HAWORTHIA TRUNCATA",
//             imageLink : '/images/14.jpg',
//             isSucculents : true,
        
//             about : "Haworthia truncata, locally known as horse's teeth, is a species of succulent plant in the genus Haworthia. It is found in the Little Karoo region, in the far east of the Western Cape Province, South Africa.",
//             sunlight : "Haworthias will survive on less light than many other succulents, however, in order to produce their colorful foliage, they need some sun. Keep a careful eye on them to make sure they don't get sunburned. Some species can't tolerate full sun and may need to have less light.",
//             watering : "No more difficult to raise than Aloe vera, grow Haworthia truncata in well-drained soil or cactus compost, on a light, airy windowsill, ideally out of direct sunlight. Water sparingly in summer, allowing the compost to fully dry out between watering. Reduce watering to every other month in winter. Water every 2-3 weeks in direct light, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
//             pottingMix : "All Haworthias do not like their roots to remain wet for prolonged periods, so their potting soil should be well-drained. Use a commercial succulent potting mix or make your own. Hardiness: Haworthias like warmer temperatures in the summer but cool in the winter. However, they do not like being too cold."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "HAWORTHIA TRUNCATA",
//             imageLink : '/images/15.jpg',
//             isSucculents : true,
        
//             about : "Haworthia truncata, locally known as horse's teeth, is a species of succulent plant in the genus Haworthia. It is found in the Little Karoo region, in the far east of the Western Cape Province, South Africa.",
//             sunlight : "Haworthias will survive on less light than many other succulents, however, in order to produce their colorful foliage, they need some sun. Keep a careful eye on them to make sure they don't get sunburned. Some species can't tolerate full sun and may need to have less light.",
//             watering : "No more difficult to raise than Aloe vera, grow Haworthia truncata in well-drained soil or cactus compost, on a light, airy windowsill, ideally out of direct sunlight. Water sparingly in summer, allowing the compost to fully dry out between watering. Reduce watering to every other month in winter. Water every 2-3 weeks in direct light, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
//             pottingMix : "All Haworthias do not like their roots to remain wet for prolonged periods, so their potting soil should be well-drained. Use a commercial succulent potting mix or make your own. Hardiness: Haworthias like warmer temperatures in the summer but cool in the winter. However, they do not like being too cold."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "MOTHER OF MILLIONS",
//             imageLink : '/images/16.jpg',
//             isSucculents : true,
        
//             about : "Kalanchoe daigremontiana, formerly known as Bryophyllum daigremontianum and commonly called mother of millions, alligator plant, or Mexican hat plant is a succulent plant native to Madagascar. Like other members of Bryophyllum, it can propagate vegetatively from plantlets that develop on its leaf margins.",
//             sunlight : "Light & Temperature. You'll find that your mother of Millions plant prefers a minimum of 6 hours of light per day, although in hot climates indirect sunlight is best.",
//             watering : "Mother of Thousands plants are sensitive to water, so using well-draining soil is a must.",
//             pottingMix : "Like most succulents, mother of millions is drought tolerant. Make sure to plant it in a pot with a drainage hole and use potting mix suitable for cacti. Soak the soil thoroughly in when watering, then make sure to let the topsoil dry out completely before watering again."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "MOTHER OF THOUSANDS",
//             imageLink : '/images/17.jpg',
//             isSucculents : true,
        
//             about : "Kalanchoe daigremontiana, formerly known as Bryophyllum daigremontianum and commonly called mother of thousands, alligator plant, or Mexican hat plant is a succulent plant native to Madagascar. Like other members of Bryophyllum, it can propagate vegetatively from plantlets that develop on its leaf margins.",
//             sunlight : "Light & Temperature. You'll find that your mother of thousands plant prefers a minimum of 6 hours of light per day, although in hot climates indirect sunlight is best.",
//             watering : "Mother of Thousands plants are sensitive to water, so using well-draining soil is a must.",
//             pottingMix : "Like most succulents, mother of thousands is drought tolerant. Make sure to plant it in a pot with a drainage hole and use potting mix suitable for cacti. Soak the soil thoroughly in when watering, then make sure to let the topsoil dry out completely before watering again."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "SHORT LEAVED ALOE",
//             imageLink : '/images/18.jpg',
//             isSucculents : true,
        
//             about : "Aloe brevifolia, the short-leaved aloe, is a species of flowering plant in the family Asphodelaceae. It is a tiny, compact, blue-green evergreen succulent perennial, that is native to the Western Cape, South Africa.",
//             sunlight : "Aloe brevifolia “Short-leaved Aloe” is not cold hardy, so if you live in a zone that gets colder than 20° F (-6.7° C), it's best to plant this succulent in a container that can be brought indoors. It does well in full to partial sun. Plant in an area of your garden that gets 6 hours of sunlight a day.",
//             watering : "'Short-leaved Aloe' tends to need a bit less water than other succulents. It's best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.",
//             pottingMix : "Like cacti, succulents do best in dry conditions. When growing aloe vera plants, plant them in a cactus potting soil mix or a regular potting soil that has been amended with additional perlite or building sand. Also, make sure that the pot has plenty of drainage holes. Aloe vera plants cannot tolerate standing water."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "SEDUM MORGANIANUM (BURRO’S TAIL)",
//             imageLink : '/images/19.jpg',
//             isSucculents : true,
        
//             about : "Sedum morganianum, the donkey tail or burro's tail, is a species of flowering plant in the family Crassulaceae, native to southern Mexico and Honduras. It is a succulent perennial producing trailing stems up to 60 cm long, with fleshy blue-green leaves and terminal pink to red flowers in summer.",
//             sunlight : "Burro's tail loves to bask in the partial sun or bright shade. This captivating succulent love bright light of four hours. Keep in mind that it the scorching sun will burn it; make sure to give it morning sunlight for better growth.",
//             watering : "Burro's tail is drought tolerant (those pillow leaves retain water). Don't water it more than once a month. (Soak the soil thoroughly, then make sure to let the topsoil dry out completely before watering again.) For a container plant, choose a pot with a drainage hole and use potting mix suitable for cacti.",
//             pottingMix : "The best mixing ratio of the three ingredients is two parts sand, two parts gardening soil(compost), and one-part perlite or pumice. Translating this to cups makes it 3 cups of sand, 3 cups of soil, and 1.5 cups of perlite or pumice."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "STRING-OF-BEADS",
//             imageLink : '/images/20.jpg',
//             isSucculents : true,
        
//             about : "Curio rowleyanus, syn. Senecio rowleyanus, is a flowering plant in the daisy family Asteraceae. It is a creeping, perennial, succulent vine native to the drier parts of southwest Africa. In its natural environment its stems trail on the ground, rooting where they touch and forming dense mats.",
//             sunlight : "String of Pearls plant like bright indirect light, if they're outdoor they like shaded area with some morning direct light or bright indirect light, if they're indoor they like to be near the window with strong natural light. They don't like direct sunlight, they will get burnt easily.",
//             watering : "Water. String of beads are very sensitive to overwatering, so make sure that you give them just enough water. Recommended amount is once every two weeks. One tip to make sure you don't overwater your plant is to check if the soil is half an inch (1.2cm) dry before the next water.",
//             pottingMix : "Like most succulents, string of pearls is drought tolerant. Make sure to plant it in a pot with a drainage hole and use potting mix suitable for cacti. Soak the soil thoroughly in when watering, then make sure to let the topsoil dry out completely before watering again."
//         }).save().then(a => {}).catch(err => {console.log(err);});
        
        
//         new Plant({
//             name : "STRING-OF-PEARLS",
//             imageLink : '/images/21.jpg',
//             isSucculents : true,
        
//             about : "Curio rowleyanus, syn. Senecio rowleyanus, is a flowering plant in the daisy family Asteraceae. It is a creeping, perennial, succulent vine native to the drier parts of southwest Africa. In its natural environment its stems trail on the ground, rooting where they touch and forming dense mats.",
//             sunlight : "String of Pearls plant like bright indirect light, if they're outdoor they like shaded area with some morning direct light or bright indirect light, if they're indoor they like to be near the window with strong natural light. They don't like direct sunlight, they will get burnt easily.",
//             watering : "Water. String of Pearls are very sensitive to overwatering, so make sure that you give them just enough water. Recommended amount is once every two weeks. One tip to make sure you don't overwater your plant is to check if the soil is half an inch (1.2cm) dry before the next water.",
//             pottingMix : "Like most succulents, string of pearls is drought tolerant. Make sure to plant it in a pot with a drainage hole and use potting mix suitable for cacti. Soak the soil thoroughly in when watering, then make sure to let the topsoil dry out completely before watering again."
//         }).save().then(a  => {}).catch(err => {console.log(err);});


//         new Plant({
//             name : "BULBOPHYLLUM MEDUSAE",
//             imageLink : '/images/22.jpg',
//             isOrchids : true,
        
//             about : "Bulbophyllum medusae, commonly known as the Medusa orchid, is a species of epiphytic orchid with a creeping rhizome and a single leaf about 100 mm long emerging from the top of each pseudobulb.",
//             care : "Most species come from humid rain forests. Humidity should be kept at 60% , which can be difficult to do outside of the greenhouse. Water frequently, as both mounted (at least daily) and potted plants (several times a week) will thrive under wetter conditions than most orchids."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BULBOPHYLLUM UMBELLATUM",
//             imageLink : '/images/23.jpg',
//             isOrchids : true,
        
//             about : "Bulbophyllum umbellatum is a species of orchid. It is native to tropical parts of South East Asia.",
//             care : "Most species come from humid rain forests. Humidity should be kept at 60% , which can be difficult to do outside of the greenhouse. Water frequently, as both mounted (at least daily) and potted plants (several times a week) will thrive under wetter conditions than most orchids."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DENDROBIUM CUMULATUM",
//             imageLink : '/images/24.jpg',
//             isOrchids : true,
        
//             about : "Dendrobium is a genus of mostly epiphytic and lithophytic orchids in the family Orchidaceae. Orchids in this genus have roots that creep over the surface of trees or rocks, rarely having their roots in soil.",
//             care : "Plant requires warm temperatures and medium amounts of light. Keep plant moist and fertilize during growth season. Plant will go dormant and drop leaves during winter. During dormancy keep plant dry and withhold water until new shoots appear. Grow in a well drain mix of sphagnum moss or medium fir bark."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DENDROBIUM CRUMENATUM",
//             imageLink : '/images/25.jpg',
//             isOrchids : true,
        
//             about : "Dendrobium crumenatum, commonly called pigeon orchid is an epiphytic orchid in the family Orchidaceae and is native to Asia, Southeast Asia, New Guinea and Christmas Island. It has two rows on leaves along its pseudobulb and relatively large but short-lived, strongly scented white flowers.",
//             care : "Feed weakly (1/4 strength) weekly works well for dendrobiums. Once a month use clear water to flush any accumulated salts from the potting mix. Use a shallow tray of pebbles filled with water to increase humidity around your plants. Be sure the pot does not sit in water as this will rot the roots."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DENDROBIUM TAURINUM",
//             imageLink : '/images/26.jpg',
//             isOrchids : true,
        
//             about : "Dendrobium taurinum, the bull orchid, is a species of flowering plant in the family Orchidaceae. It is found in the Philippines and in the Indonesian Province of Maluku. The size of the flower ranges from 5 to 6.5 cm.",
//             care : "Feed weakly (1/4 strength) weekly works well for dendrobiums. Once a month use clear water to flush any accumulated salts from the potting mix. Use a shallow tray of pebbles filled with water to increase humidity around your plants. Be sure the pot does not sit in water as this will rot the roots."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DENDROBIUM CUMULATUM",
//             imageLink : '/images/27.jpg',
//             isOrchids : true,
        
//             about : "Dendrobium transparens - Translucent Dendrobium. A rare species found in India, Nepal and Burma as a medium to large sized, cool to warm growing epiphyte with slender, basally swollen, erect to pendulous stems. The stems carry 5 to 7, deciduous, linear-lanceolate, recurved, acute leaves.",
//             care : "Feed weakly (1/4 strength) weekly works well for dendrobiums. Once a month use clear water to flush any accumulated salts from the potting mix. Use a shallow tray of pebbles filled with water to increase humidity around your plants. Be sure the pot does not sit in water as this will rot the roots."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "MAXILLARIA TENUIFOLIA",
//             imageLink : '/images/28.jpg',
//             isOrchids : true,
        
//             about : "Maxillaria tenuifolia, the delicate-leafed maxillaria or coconut pie orchid, is a species of orchid ranging from Mexico to Nicaragua and possibly Costa Rica. These plants are easy to grow if kept moist and given good air movement in a high-light windowsill of any orientation but North.",
//             care : "Bright indirect light needed. Temperature intermediate, between 50F and 75F during winter Several degrees higher during summer. Humidity 50 percent and above. Watering Every two-three weeks during the dry season Several times a week during the rainy season."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PHALAENOPSIS CORNINGIANA",
//             imageLink : '/images/29.jpg',
//             isOrchids : true,
        
//             about : "Phalaenopsis corningiana flowers give off a very intense and pleasant spicy scent. Just one developed flower fills the entire room with the smell of the plant. After flowering, the flower shoots should not be cut, the clover blooms on the same shoots for several seasons in a row.",
//             care : "Phalaenopsis orchids are plants which needs a soil base. The soil should be 3 parts fir bark, 1 part perlite and 1 part chopped sphagnum moss. The watering for the plant is as usual, water until the roots turn green. Watering should be done carefully only to the roots not to the plant, the leaves form a crown so if water retains int the crown then the plant will rot. Phalaenopsis orchids don’t like sun they like a humid and damp environment."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PHALAENOPSIS DELICIOSA",
//             imageLink : '/images/30.jpg',
//             isOrchids : true,
        
//             about : "Phalaenopsis deliciosa is a species of orchid occurring from the Indian subcontinent to Malesia. It is native to riverine forests and grows almost near the rivers and streams at an altitude 600m and below. Plant: Plants is an epiphyte forming clumps at the base. It has a short stem with 3-6 long wavy leaves with undulated margin. Apex of the leaf is slightly unequal.",
//             care : "Phalaenopsis orchids are plants which needs a soil base. The soil should be 3 parts fir bark, 1 part perlite and 1 part chopped sphagnum moss. The watering for the plant is as usual, water until the roots turn green. Watering should be done carefully only to the roots not to the plant, the leaves form a crown so if water retains int the crown then the plant will rot. Phalaenopsis orchids don’t like sun they like a humid and damp environment."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PAPHIOPEDILUM DELENATII",
//             imageLink : '/images/31.jpg',
//             isOrchids : true,
        
//             about : "Paphiopedilum delenatii, described in 1924, is named after Delanat, a French orchid enthusiast of the 1900s. It was first discovered in 1913 when it was brought to France by returning soldiers, and was believed to be extinct and was not rediscovered in the wild until 1993.",
//             care : "Paphs need more frequent watering than some other orchids because they have no pseudobulbs to store water. Bark retains less water so will require more frequent watering - every five days is usually sufficient. If your plant is potted in moss, water when the top feels dry."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PAPHIOPEDILIM EXUL",
//             imageLink : '/images/32.jpg',
//             isOrchids : true,
        
//             about : "Paphiopedilum exul is a species of orchid endemic to peninsular Thailand. This orchid is found growing in humus-filled crevices, and is not difficult to grow or flower. Its greenish yellow flowers appear from February to May.",
//             care : "Paphs need more frequent watering than some other orchids because they have no pseudobulbs to store water. Bark retains less water so will require more frequent watering - every five days is usually sufficient. If your plant is potted in moss, water when the top feels dry."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PHALAENOPSIS HONGLIN ROSE",
//             imageLink : '/images/33.jpg',
//             isOrchids : true,
        
//             about : "Phalaenopsis Honglin Rose is a beautiful hybrid with amazing deep purple flowers, Waxy rounded flowers with a tendency to produce long cascading spikes. Phalaenopsis orchids can be grown as indoor plants as long as they get a sufficient amount of light & air circulation.",
//             care : "Phalaenopsis orchids are plants which needs a soil base. The soil should be 3 parts fir bark, 1 part perlite and 1 part chopped sphagnum moss. The watering for the plant is as usual, water until the roots turn green. Watering should be done carefully only to the roots not to the plant, the leaves form a crown so if water retains int the crown then the plant will rot. Phalaenopsis orchids don’t like sun they like a humid and damp environment."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PHALAENOPSIS TINNY HONEY",
//             imageLink : '/images/34.jpg',
//             isOrchids : true,
        
//             about : "Phalaenopsis Tinny Honey produces lovely soft pink flowers with white gradients, lovely large flowers. Can have cascading flowers as the plant grows older. Phalaenopsis orchids can be grown as indoor plants as long as they get sufficient amount of light & air circulation.",
//             care : "Phalaenopsis orchids are plants which needs a soil base. The soil should be 3 parts fir bark, 1 part perlite and 1 part chopped sphagnum moss. The watering for the plant is as usual, water until the roots turn green. Watering should be done carefully only to the roots not to the plant, the leaves form a crown so if water retains int the crown then the plant will rot. Phalaenopsis orchids don’t like sun they like a humid and damp environment."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "RHYNCHOSTYLIS GIGANTIA",
//             imageLink : '/images/35.jpg',
//             isOrchids : true,
        
//             about : "Rhynchostylis gigantea is a species of orchid. This species was first described in 1896 by John Lindley and occurs in Myanmar, Thailand, Malaysia, Laos, Cambodia, Vietnam, Hainan China, Borneo, Bangladesh, Northeast India and the Philippines. Rhynchostylis differs from Vanda by the one-lobed lip.",
//             care : "The culture regimen fits within that of your other orchids; fertilize once a week during warm months and every other week in winter. You will need to adapt watering practice based upon potting. These orchids appreciate frequent watering but do not like to stay wet. Rhynchostylis gigantea blooms in January-February."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "RHYNCHOSTYLIS RETUSA",
//             imageLink : '/images/36.jpg',
//             isOrchids : true,
        
//             about : "Rhynchostylis retusa is an orchid, belonging to the Vanda alliance. The inflorescence is a pendant raceme, consisting of more than 100 pink-spotted white flowers.",
//             care : "Rhynchostylis orchids grow in shaded areas so they do not tolerate much direct sunlight unlike Vanda. In fact, they require bright indirect sunlight (something more than for Phalaenopsis but without a direct sun in midday). they are warm to hot growing orchids and don't tolerate cool temperatures."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "SEIDENFADENIA MITRATA",
//             imageLink : '/images/37.jpg',
//             isOrchids : true,
        
//             about : "Seidenfadenia is a genus of flowering plants from the orchid family, Orchidaceae. Seidenfadenia and another orchid genus, Gunnarella, are named for Danish botanist Gunnar Seidenfaden. At present, there is only one known species, Seidenfadenia mitrata, native to Thailand and to Myanmar.",
//             care : "Bright conditions are best - grow with vandas. Provide ample air movement to prevent leaf drop. Maintain even moisture and high humidity throughout the year, although drier conditions may be tolerated during cool winter months."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "VANDA JAKKRIT GOLD",
//             imageLink : '/images/38.jpg',
//             isOrchids : true,
        
//             about : "Vanda Jakkit Gold x Charles Goodfellow is a hybrid of the two. Vanda Jakkit gold has flowers ranging from gradients of Green to Cream colour. The Vanda Charles Good fellow is bright yellow in color. This hybrid produces lovely fresh greenish yellow large rounded flowers.",
//             care : "Vanda orchids are orchids with ariel roots which are not supposed to be put in ant kind of soil mix. The roots have to be watered twice every day, and has to be watered until all the roots turn green. Vanda orchids love sunlight so sun is not a problem. Fertilizing the plant has to be done once in a month."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "VANDA KULTANA GOLD",
//             imageLink : '/images/39.jpg',
//             isOrchids : true,
        
//             about : "Spectacular golden blooms with intricate red patterns. The flowers are up to 10cm across and open on upright stems in groups of five to eight. In ideal conditions, you can expect numerous, abundant spikes in a year with colours so bright you may need shades! Vanda Orchids hail from S.E.",
//             care : "Vanda orchids are orchids with ariel roots which are not supposed to be put in ant kind of soil mix. The roots have to be watered twice every day, and has to be watered until all the roots turn green. Vanda orchids love sunlight so sun is not a problem. Fertilizing the plant has to be done once in a month."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "VANDA MIRACLE RED",
//             imageLink : '/images/40.jpg',
//             isOrchids : true,
        
//             about : "This beautiful Red Vanda Orchid Roberts delight is one of the most attractive, and tantalizing luscious colors of red spotted white, this monopodial orchid have an exquisite immense sizes of flowers about 5 inches a sizes of my palm so huge.",
//             care : "Vanda orchids are orchids with ariel roots which are not supposed to be put in ant kind of soil mix. The roots have to be watered twice every day, and has to be watered until all the roots turn green. Vanda orchids love sunlight so sun is not a problem. Fertilizing the plant has to be done once in a month."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "VANDA PACHARA DELIGHT",
//             imageLink : '/images/41.jpg',
//             isOrchids : true,
        
//             about : "A popular first for new growers interested in trying their hand at Vandas. Pachara Delight tends to bloom twice (and sometimes thrice!) a year and its striking color certainly stands out in the landscaping. Plants Available: In spike/bud/bloom as blooming season and stock permit.",
//             care : "Vanda orchids are orchids with ariel roots which are not supposed to be put in ant kind of soil mix. The roots have to be watered twice every day, and has to be watered until all the roots turn green. Vanda orchids love sunlight so sun is not a problem. Fertilizing the plant has to be done once in a month."
//         }).save().then(a => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BASIL",
//             imageLink : '/images/42.jpg',
//             isVegetable : true,
        
//             about : "Basil, also called great basil, is a culinary herb of the family Lamiaceae. Basil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide.",
//             sunlight : "Choose a location with plenty of sunlight. Basil thrives in warm temperatures and full morning sun. If you live in an area with scorching midday sun, try to give your basil light shade during the hottest time of day.",
//             watering : "Water regularly – basil likes to stay moist and requires approximately 1 inch of water every week. Water deeply at least once a week to keep roots growing deep and the soil moist. Basil growing in containers will need more frequent watering.",
//             pottingMix : "You really can grow basil in almost anything. ... Basil is prone to fungus, so keeping airflow between plants is important. Make sure your pot has plenty of drainage and that you use high-quality potting soil. Basil doesn't like to be too wet, so you want to keep your soil moist, not soggy."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BEANS",
//             imageLink : '/images/43.jpg',
//             isVegetable : true,
        
//             about : "Phaseolus vulgaris, also known as the common bean and French bean, is a herbaceous annual plant grown worldwide for its edible dry seeds or unripe fruit. The main categories of common beans, on the basis of use, are dry beans, snap beans and shell beans.",
//             sunlight : "Bean plants need to be in an area that receives full sunlight, which means eight to 10 hours of sunlight daily. Planting beans in an area that receives six to seven hours of full sunlight daily can reduce the plants' expected yield. Beans do not need sunlight to germinate, but they need warmth.",
//             watering : "Water. Green beans need 1 inch of water per week. Use a drip irrigation system for supplemental watering to avoid splashing soil onto the leaves, which can lead to soil-borne disease. To determine if the plants need water, stick your index finger about 1 inch into the soil near the base of the plant.",
//             pottingMix : "All beans prefer a sunny spot in well-drained soil that was improved with compost or well-rotted manure the autumn before sowing. A clever technique to boost growth is to create a compost trench. Dig out a trench about a foot (30cm) deep where your beans are to grow."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BRINJAL",
//             imageLink : '/images/44.jpg',
//             isVegetable : true,
        
//             about : "Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition.",
//             sunlight : "The brinjal plant requires lots of sun to thrive. The seeds need to be planted 1cm deep and spaced about 15 cm from each other. Water regularly and the seeds generally germinate within 2-3 weeks.",
//             watering : "Make sure that you are watering your brinjal plant on a daily basis. In climates which are hot and dry, your brinjal plant will need to be watered several times in a day. Touch the surface of the soil and feel the soil by making use of your fingers and water the soil if it is dry.",
//             pottingMix : "Eggplant prefers well-drained, fertile, sandy loam soils with a pH between 5.5 and 7.2. Remove all weeds and till the soil to loosen it to a depth of 6 to 10 inches. The higher the organic matter content of the soil the better, so incorporate a 3- to 4-inch layer of compost if possible."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BEET ROOT",
//             imageLink : '/images/45.jpg',
//             isVegetable : true,
        
//             about : "The beetroot is the taproot portion of a beet plant, usually known in Canada and the USA as beets while the vegetable is referred to as beetroot in British English, and also known as the table beet, garden beet, red beet, dinner beet or golden beet.",
//             sunlight : "Beetroot prefer a position in full sun. They will grow in light shade, but avoid areas that get no direct sun at all. Improve the soil by digging in well-rotted compost - avoid manures and other fresh soil improvers as they can lead to bolting (going to seed early) or the roots not developing correctly.",
//             watering : "Beetroot shouldn't need any additional watering unless the soil looks like it will dry out completely. In hot climates you may find that shade cloth is necessary to prevent bolting in summer. When the seedlings are about 2.5cm (1in) high, thin out to leave one every 10cm (4in). During dry spells, water every 10–14 days.",
//             pottingMix : "Beets do best in sandy soil in the spring and heavier soil in the fall because sandy soil warms faster than heavier clay soil. They do not grow well in tight clay. In poorly drained areas, make ridges 4 to 6 inches tall to allow water to drain"
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "CAPSICUM",
//             imageLink : '/images/46.jpg',
//             isVegetable : true,
        
//             about : "Capsicum annuum is a species of the plant genus Capsicum native to southern North America and northern South America. This species is the most common and extensively cultivated of the five domesticated capsicums.",
//             sunlight : "Sunlight: partial sun/shade – around 3-4 hours of morning/evening sunlight with some afternoon shade. Water: moderately- when the top-inch of the soil feels dry. Sowing season: during cooler periods as Capsicum is both heat and frost tender.",
//             watering : "Ensure that you water your plant every once or twice a week. They say if you feed your plants well, they will feed you well too. Capsicum plants use nutrients from the soil as they grow, so replenishing the nutrients with organic fertilizers ensures that your plants grow to their full potential.",
//             pottingMix : "When planting your pepper plant into the container, use organic, rich potting soil; don't use regular garden soil. Regular garden soil can compact and harm the roots while potting soil will stay aerated, giving the roots room to grow well. As mentioned, a pepper plant will need to get nearly all of its water from you."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "CHILLI",
//             imageLink : '/images/47.jpg',
//             isVegetable : true,
        
//             about : "Chilli is the fruit of plants from the genus Capsicum, and members of the Solanaceae family. There are many varieties of chilli plants, some of which are the hottest peppers known. They can be herbaceous or shrub-like but are branching with green-brown stems and simple oval leaves.",
//             sunlight : "Chilli plants love heat. They are closely related to capsicums/bell peppers and also related to tomatoes (they are in the same family, the solanaceae), but chillies prefer their growing conditions a lot hotter. Chilli seeds need 20°C/68°F to germinate, and it should be 30°C/86°F or more for the fruit to ripen.",
//             watering : "Chilli plants enjoy a good watering followed by a period without water – until the compost is almost dry. Select a compost with good drainage to help keep air in the soil and try to avoid the pot standing in water.",
//             pottingMix : "You should supply chillies grown in coconut soil with fertilizer."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "CORIANDER",
//             imageLink : '/images/48.jpg',
//             isVegetable : true,
        
//             about : "Coriander is an annual herb in the family Apiaceae. It is also known as Chinese parsley, dhania or cilantro. All parts of the plant are edible, but the fresh leaves and the dried seeds are the parts most traditionally used in cooking.",
//             sunlight : "Coriander prefers cool weather similar to spinach and lettuce alike. It can be grown in partial sun as the herb does not demand full soon. Avoid transplanting or repotting the germinated seeds and prefer starting from the seeds straight. This will help you avoid bolting.",
//             watering : "Water the plants in dry periods. Be sure to not over-water the plant to avoid root rot. Good soil drainage is essential to ensure healthy root health as coriander has deep taproots. You can choose to buy organic manure at AllThatGrows.",
//             pottingMix : "Well drained silt or loamy soils are suited for cultivation. For rainfed cultivation soil should be clay in nature and the pH should be 6 – 8. Coriander performs well at a temperature range of 20 – 25 °C."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "CARROT",
//             imageLink : '/images/49.jpg',
//             isVegetable : true,
        
//             about : "The carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.",
//             sunlight : "Sunlight requirement: Carrot plants need 6-8 hours of direct sunlight every day to form proper carrot roots.",
//             watering : "Like most vegetables, growing carrots need a minimum of 1 inch of water every week. If they cannot get an adequate supply from rainfall, you will need to water the soil. When you water your carrots, make sure to soak the soil completely. If you only wet the soil's surface, the roots will not grow as deeply.",
//             pottingMix : "Carrots like consistency: They grow best with no wide swings in temperature or moisture. They grow straightest and smoothest in deep, loose, fertile sandy loams and peat soils, with good water-retention capacity to keep moisture levels even."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "CUCUMBER",
//             imageLink : '/images/50.jpg',
//             isVegetable : true,
        
//             about : "Cucumber is a widely-cultivated creeping vine plant in the Cucurbitaceae gourd family that bears cucumiform fruits, which are used as vegetables. There are three main varieties of cucumber—slicing, pickling, and burpless/seedless—within which several cultivars have been created.",
//             sunlight : "Cucumbers will grow best when planted in full sun. Cucumber plants that do not get enough sunlight are more likely to have a poor fruit set and produce an overall lower yield. Therefore, it is best to plant them in areas that get at least 8 hours of direct sunlight each day.",
//             watering : "The main care requirement for cucumbers is water—consistent watering! They need at least one inch of water per week (or more, if temperatures are sky-high). Put your finger in the soil and when it is dry past the first joint of your finger, it is time to water. Inconsistent watering leads to bitter-tasting fruit.",
//             pottingMix : "Cucumbers require fertile soil. Mix in compost and/or aged manure before planting to a depth of 2 inches and work into the soil 6 to 8 inches deep. Make sure that soil is moist and well-drained, not soggy and compacted. Soil should be neutral or slightly acidic with a pH of around 6.5 to 7.0."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DRUM STICK",
//             imageLink : '/images/51.jpg',
//             isVegetable : true,
        
//             about : "Moringa oleifera is a fast-growing, drought-resistant tree of the family Moringaceae, native to the Indian subcontinent. Common names include moringa, drumstick tree, horseradish tree, and ben oil tree or benzolive tree.",
//             sunlight : "The drumstick tree is a sun loving plant so place it in a spot that gets at least 6 hours of sunshine.",
//             watering : "Irrigation supply for Drumstick Plants: ... This crop is quite hardy and during dry season requires irrigation once in two weeks and for commercial cultivation, drip irrigation can be adopted with a daily application rate of 12 to 16 liters of water per tree during summer and half this rate during other seasons.",
//             pottingMix : "Choose an area with light and sandy soil, not heavy with clay or waterlogged. Dig holes one foot (30 centimeters) square and one foot deep. Back-fill the holes with loose soil. Compost or manure will help the tree grow better, even though Moringa trees can grow in poor soils."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "GARLIC",
//             imageLink : '/images/52.jpg',
//             isVegetable : true,
        
//             about : "Garlic is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, Welsh onion and Chinese onion. It is native to Central Asia and northeastern Iran and has long been a common seasoning worldwide, with a history of several thousand years of human consumption and use.",
//             sunlight : "Garlic is grown from cloves rather than seeds and is planted in fall, allowed to over winter, and harvested in summer. Garlic grown in partial shade will produce smaller cloves, but they will be just as flavorful. ... Sunlight Requirements: Full sun to partial shade. Harvest: Harvest garlic at any stage for fresh eating.",
//             watering : "In average soils, garlic needs about 16 inches of total water during a growing season, or about 1/2-inch-to-1-inch of water per week, with more water during warm weather and rapid growth, and less water during cold weather, as cloves are first sprouting, and for 2-4 weeks before harvest.",
//             pottingMix : "Garlic should be planted in a fertile, well-drained soil. A raised bed works very well. Remove stones from the top 6 inches of soil. Work several inches of compost or well-rotted manure into the bed, along with 10-10-10 fertilizer."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "LEMON",
//             imageLink : '/images/53.jpg',
//             isVegetable : true,
        
//             about : "The lemon, Citrus limon, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
//             sunlight : "Keep your newly potted plant in semi shade and not full sun, so that it gets adjusted to its new home. Once you see new leaves cropping up, time to move it to full sun, where the plant gets at least 5 hours of good sunlight. South-facing is the most optimum position for the plant.",
//             watering : "A newly potted plant needs to be watered well every alternate day – deep watering is essential so that the root ball gets the necessary hydration. Once the plant is somewhat established, watering can be tapered to twice a week and then once a week or so.",
//             pottingMix : "A regular potting mix is equal parts garden soil, cocopeat and compost. For lemon, instead of 1 part garden soil, I dilute the garden soil with 50% sand for faster draining and lighter soil. You can buy sand from any garden / construction store."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "LADY'S FINGER",
//             imageLink : '/images/54.jpg',
//             isVegetable : true,
        
//             about : "Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It is valued for its edible green seed pods. The geographical origin of okra is disputed, with supporters of West African, Ethiopian, and South Asian origins.",
//             sunlight : "Sunlight – Six hours of incessant sunlight per day is necessary to grow ladies finger. If the day gets really hot, don't worry, your okra plant will definitely enjoy it. Spacing – Ladies finger plants grow in bushes so it is very important to space them well.",
//             watering : "Lady's finger require good amount of water to thrive. Keep the soil moist constantly. Check the moisture in the soil regularly, the plant needs more water during the flowering till the fruiting period. Using watering spray to water the plants.",
//             pottingMix : "Lady's finger thrive well in loam, well-drained soil. Using soilless commercial potting mix rich in organic matter is highly recommended. The pH levels of the soil should be 6.5 to 7.0."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "MINT",
//             imageLink : '/images/55.jpg',
//             isVegetable : true,
        
//             about : "Mentha is a genus of plants in the family Lamiaceae. The exact distinction between species is unclear; it is estimated that 13 to 24 species exist. Hybridization occurs naturally where some species range overlap. Many hybrids and cultivars are known.",
//             sunlight : "Location. Although these plants can do fine in full sun, they grow best in partial sunlight and need around 3-4 hours of direct sunlight to show good growth. So, you can easily grow them in your garden, balconies, and even indoors by placing them in a sunny spot near your window.",
//             watering : "Mint plants need about 1 to 2 inches of water every week, depending on the conditions. This includes both rain and your supplemental watering. Mint plants like water, but they cannot withstand soggy soil and wet feet, so monitoring the soil and using it as a guide on when to water is the best option.",
//             pottingMix : "The soils with pH ranging between 6.0 -7.0 are good for its growth. The commercial potting mix is the best choice for growing it in containers. You can prepare your potting soil by mixing equal parts of garden soil, fine sand, cow dung manure, and coco peat."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "ONION",
//             imageLink : '/images/56.jpg',
//             isVegetable : true,
        
//             about : "The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion. Until 2010, the shallot was classified as a separate species.",
//             sunlight : "Onions need full sun. Select a location where your onions won't be shaded by other plants. Onions need well-drained, loose and nitrogen-rich soil.",
//             watering : "The onion crop requires 350 to 550 mm of water throughout the growth cycle. It is recommended to give frequent, light irrigations which are timed when about 25 percent of available water in the top 30 cm of soil is depleted.",
//             pottingMix : "Onions will grow in almost any soil from sandy loams to heavy clay. The soil should be firm. If your soil is heavy then you can introduce some organic compost or manure into the soil to help its moisture retaining properties. Onions prefer a slightly acidic soil - PH 5.5-6.5 is a good PH for growing onions."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "OREGANO",
//             imageLink : '/images/57.jpg',
//             isVegetable : true,
        
//             about : "Oregano is a flowering plant in the mint family. It is native to temperate Western and Southwestern Eurasia and the Mediterranean region. Oregano is a perennial herb, growing from 20–80 cm tall, with opposite leaves 1–4 cm long. The flowers are purple, 3–4 mm long, produced in erect spikes.",
//             sunlight : "Oregano prefers a sunny spot; however, in zone 7 and farther south, it benefits from a little afternoon shade. Set plants in well-drained soil with a pH between 6.5 and 7.0.",
//             watering : "Oregano doesn't need quite as much water as most herbs. As the amount of watering depends on many variables, just water when the soil feels dry to the touch. Remember that it's better to water thoroughly and less often.",
//             pottingMix : "Oregano grows best in full sun and well-drained soil. It will also grow in rocky soil, though. Native to the Mediterranean and Europe, oregano can thrive in areas with tough growing conditions. If you have swampy or heavy soil, plant oregano in a container or raised bed."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "POTATO",
//             imageLink : '/images/58.jpg',
//             isVegetable : true,
        
//             about : "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae. Wild potato species, originating in modern-day Peru, can be found throughout the Americas, from Canada to southern Chile.",
//             sunlight : "Potatoes always do best in full sun. They are aggressively rooting plants, and we find that they will produce the best crop when planted in a light, loose, well-drained soil. Potatoes prefer a slightly acid soil with a PH of 5.0 to 7.0.",
//             watering : "Potatoes need different amounts of water at different times in order to produce to the best of their ability. Generally, potatoes need between 1-2 inches of water per week; this could be provided by rain events or you to make up the difference.",
//             pottingMix : "Like garden-grown potatoes, container-grown potatoes need a rich, well-drained loamy, soil. A mix of potting soil and compost with added sand (about 20% of the total) serves potatoes well. Add a handful of well-balanced organic fertilizer as you're making your soil-compost mix."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "RADISH",
//             imageLink : '/images/59.jpg',
//             isVegetable : true,
        
//             about : "The radish is an edible root vegetable of the family Brassicaceae that was domesticated in Asia prior to Roman times. Radishes are grown and consumed throughout the world, being mostly eaten raw as a crunchy salad vegetable with a pungent flavor.",
//             sunlight : "Radishes require at least 6 hours of full sun per day, but they are tolerant of some shade. As a cool weather crop, a shady area could allow you to grow radishes longer into the growing season than you might otherwise be able to, as soil temperatures will be slightly lower.",
//             watering : "Make sure they receive enough rainfall or deep watering. Drought stress can cause the roots to develop poor flavor and a tough texture. If the planting does not get one inch of rain each week, soak the soil thoroughly at least once a week. If your soil is sandy, it is important to water more often than once a week.",
//             pottingMix : "Potting Soil - Radishes really aren't too picky when it comes to potting soil either, but they will do best in soil that drains well and is high in organic matter. A well composted organic potting soil will do great. Sunlight - Growing radishes need a good amount of sunlight to sustain fast growth and root production."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "SPINACH",
//             imageLink : '/images/60.jpg',
//             isVegetable : true,
        
//             about : "Spinach is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh, or after storage using preservation techniques by canning, freezing, or dehydration.",
//             sunlight : "Sunlight - Sun to partial shade. Water - Since spinach grows best in cold weather, avoid over-watering. Pests and Diseases - Diseases such as Downy Mildew, Anthracnose, Cladosporium Leaf spot, Stemphylium leaf spot, Damping-off, Root Rot, and pests like Cutworms, Flea Beetles, Slugs or Snails, Aphids, Leaf Miners.",
//             watering : "You have to ensure that the soil remains moist. Do not overwater them. It is advisable to water early in the morning so that the plants can absorb the water throughout the day. Keep an eye on the growth of your plants.",
//             pottingMix : "Use quality potting mix that is high in organic matter. The ideal texture is crumbly and loamy. Avoid soil that clogs drainage—well-draining soil is crucial for optimizing the growth of spinach in containers."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "TOMATO",
//             imageLink : '/images/61.jpg',
//             isVegetable : true,
        
//             about : "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.",
//             sunlight : "“Six to eight hours of sun is all a tomato plant needs,” says tomato expert Scott Daigre. “Shade accordingly.” Tomatoes thrive in full sun. But can soaring temperatures be too much of a good thing for sun-loving plants during record heat?",
//             watering : "Garden tomatoes typically require 1-2 inches of water a week. Tomato plants grown in containers need more water than garden tomatoes. Soil in containers heats up faster which leads to more water evaporation. ... If soil feels dry about 1 inch below the surface, it's time to water again.",
//             pottingMix : "25% Garden soil or topsoil from your backyard.25% Perlite (prevents soil from compacting over time) 25% Coco coir / Sphagnum peat moss (helps retain moisture for a longer period of time)25% Compost / Decomposed cow manure or organic matter such as leaves, vegetable scraps, etc."
//         }).save().then(a  => {}).catch(err => {console.log(err);});




//         new Plant({
//             name : "AFRICAN VIOLET",
//             imageLink : '/images/62.jpg',
//             isFlowring : true,
        
//             about : "Species and cultivars are commonly called African violets (although they are not closely related to true violets) or saintpaulias. They are commonly used as indoor houseplants, but can also be kept as outdoor plants in certain climates. Several of the species and subspecies of the section are endangered, and many more are threatened, as their native cloud forest habitats are cleared for agriculture. The conservation status of Streptocarpus ionanthus has been classed as near-threatened.",
//             sunlight : "African violets need indirect sunlight, direct can burn the leaves. Choose a north- or east- facing window for best results. Keep plants away from cold glass and rotate the pot once a week so all leaves receive light. Extend daylight by placing African violets under a grow light during winter months.",
//             watering : "'How often to water African violets?' is perhaps the most pondered African violet dilemma. The best guide is to feel the top of the soil: if it is dry to the touch, then it is time to water. African violets should be allowed to dry out between each watering for best results. Overwatering can kill a plant.",
//             pottingMix : "Below are three common African Violet Potting Mix recipes: Two cups Peat Moss +one cup Vermiculite + one cup Perlite (50:25:25 ratio) One cup Peat moss + one cup Vermiculite or Perlite (50: 50 ratio) One cup AV potting mix + one cup peat moss + one cup vermiculite /perlite."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "ANTHORIUM",
//             imageLink : '/images/63.jpg',
//             isFlowring : true,
        
//             about : "Use a well-draining, all-purpose potting soil. Repotting annually in the spring is good for the peace lily, as the plant will appreciate the refreshed soil. Eventually, the peace lily may grow too large for its pot, at which point it can be divided.",
//             sunlight : "Anthuriums need medium to bright light to bloom, but they will survive and grow (but not flower) in low light conditions. Choose a spot near a sunny window, but not in harsh direct sunlight (early morning or late afternoon sun is generally OK). Water: Keep the soil just barely moist but not soggy.",
//             watering : "Keep your anthurium plant away from heat ducts, ventilator grills and drafts. Water & Humidity – This houseplant requires low to medium amounts of water. Let the soil dry out in between watering. If you live in a hot area, water about once every 2 to 3 days; if you live in a rainy area, then water as necessary.",
//             pottingMix : "Try to use a potting soil similar to the plant's current potting mix. Anthurium requires a very light, loose medium with a pH around 6.5. If in doubt, use a mixture such as two parts orchid mix, one part peat and one part perlite, or equal parts peat, pine bark and perlite."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BEGONIA",
//             imageLink : '/images/64.jpg',
//             isFlowring : true,
        
//             about : "Begonia is a genus of perennial flowering plants in the family Begoniaceae. The genus contains more than 1,800 different plant species. The Begonias are native to moist subtropical and tropical climates. Some species are commonly grown indoors as ornamental houseplants in cooler climates.",
//             sunlight : "Most begonias grow best in part shade (4 to 6 hours of direct morning sun a day), or filtered sun (as through trees). Most will tolerate full shade (no direct or filtered sun), but won't be as dense and usually have fewer flowers. A few grow in full sun. They prefer moist, but not soggy, soils.",
//             watering : "The main rule of thumb for watering begonias is to not let the soil dry out completely. Stick your finger into the soil, and if it dry to your first knuckle, it's time to water. Avoid overwatering, which will cause the foliage to turn yellow and eventually drop",
//             pottingMix : "In the garden, they require free- draining soil improved with compost. Heavy clay soil that becomes waterlogged is unsuited, as it can cause root and stem rot. In pots, use a light free- draining potting mix containing coco coir, perlite or vermiculite (African violet mix works well)."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "BOUGAINVILLEA",
//             imageLink : '/images/65.jpg',
//             isFlowring : true,
        
//             about : "Bougainvillea is a genus of thorny ornamental vines, bushes, and trees belonging to the four o' clock family, Nyctaginaceae. It is native to eastern South America, found from Brazil, west to Peru, and south to southern Argentina.",
//             sunlight : "They need at least six to eight hours of sunlight a day to produce their colours. * For best results, be sure to leave your bougainvillaea in a pot while planting it. Put a few slits in the side and the bottom of the pot, being careful not to slash too deeply into the rootball.",
//             watering : "It prefers a good, deep watering every 3-4 weeks rather than frequent shallow waterings. When establishing (in the 1st couple of years), be sure to give your bougainvillea regular water. It's subject to a few types of root rots so don't over-water. The soil should be well-drained which will help prevent rot.",
//             pottingMix : "Dig a hole as deep as the bougainvillea plant's root ball. Add a high-phosphate fertilizer to the hole to promote root growth and help the flowers bloom. Lift the bougainvillea plant from its container and tickle the roots, then wet the root ball into the hole. Lightly pat the soil around the base of the plant."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "CHRYSANTHEMUM",
//             imageLink : '/images/66.jpg',
//             isFlowring : true,
        
//             about : "Chrysanthemum sometimes called mums or chrysanths are flowering plants of the genus Chrysanthemum in the family Asteraceae. They are native to East Asia and northeastern Europe. Most species originate from East Asia and the center of diversity is in China. Countless horticultural varieties and cultivars exist.",
//             sunlight : "Plant Chrysanthemum in a location that receives approximately 5-6 hours of sunlight daily. Since these beauties are susceptible to mildew, keep the plants dry with proper water drainage, air circulation, and see to it that you allow the morning sun to dry the dew on the leaves and stems.",
//             watering : "Early in the season mums should be watered like your lawn, about one inch a week. As the plants increase in size and summer brings warmer temperatures, your watering should increase proportionately. By flowering time in September and October, watering three times a week would not be too much.",
//             pottingMix : "Most garden mums grow to 2 to 3 feet in size and require at least a 12-inch container for the best support. Rich potting soil with good drainage is essential. To encourage root growth, water container mums from the bottom of the container. Add a water-soluble fertilizer on a weekly basis."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DAFFODILS",
//             imageLink : '/images/67.jpg',
//             isFlowring : true,
        
//             about : "Narcissus is a genus of predominantly spring flowering perennial plants of the amaryllis family, Amaryllidaceae. Various common names including daffodil, narcissus and jonquil are used to describe all or some members of the genus. The flowers are generally white and yellow (also orange or pink in garden varieties), with either uniform or contrasting coloured tepals and corona.",
//             sunlight : "Plant daffodils in a sunny spot, one that gets at least 6 hours of bright sun each day. If planted in partial shade, the plants will still produce green leaves, but they won't bloom. Like most bulbs, daffodils prefer well-drained soil; otherwise they are prone to rotting. ",
//             watering : "Water daffodils thoroughly at the time of planting then once a week for the next 3 weeks. (This is a crucial time to water, as the plants are growing their first roots.) After the first few weeks, leave the plants alone until they begin to grow in the spring.",
//             pottingMix : "Daffodil plants prefer a neutral to slightly acidic soil pH of 6.0 to 7.0. They thrive in rich, moist soil but, as with most bulbs, they require excellent drainage or they will rot. Since daffodils can survive for years, you will want to find a spot to plant them where will not sit in waterlogged soil."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "DAHLIA",
//             imageLink : '/images/68.jpg',
//             isFlowring : true,
        
//             about : "Dahlia is a genus of bushy, tuberous, herbaceous perennial plants native to Mexico and Central America. A member of the Compositae (also called Asteraceae) family of dicotyledonous plants, its garden relatives thus include the sunflower, daisy, chrysanthemum, and zinnia. There are 42 species of dahlia, with hybrids commonly grown as garden plants.",
//             sunlight : "Most dahlias will be best in full sun. But some varieties will be better in the shade than others. 'Some of the wild species dahlias evolved as forest edge plants,' explains Steven. 'They would only have had a few hours of direct sunlight a day.",
//             watering : "Watering and fertilizing Young dahlia plants do not need a lot of water; in fact, excessive water can lead to rotting of the plant. For larger plants, a good rule of thumb is to water if the rainfall is less than one inch in seven days. Pots require more regular watering.",
//             pottingMix : "Dahlias thrive in rich, well-drained soil. The pH level of your soil should be 6.5-7.0, slightly acidic. If you have a heavier (clay) soil, add in sand, peat moss, or aged manure to lighten and loosen the soil texture for better drainage."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "EDELWEISS",
//             imageLink : '/images/69.jpg',
//             isFlowring : true,
        
//             about : "Leontopodium nivale, commonly called edelweiss is a mountain flower belonging to the daisy or sunflower family Asteraceae. The plant prefers rocky limestone places at about 1,800–3,000 metres (5,900–9,800 ft) altitude.",
//             sunlight : "Edelweiss plants are not fussy little herbs. The need full sun and are hardy down to zone 4 in the USDA plant hardiness rating. You can purchase mature plants or start seed inside at least six weeks before the date of the last frost.",
//             watering : "One of the factors that is not important to the care of edelweiss is water. In its native range, edelweiss is exposed to scouring winds and freezing temperatures. It is often in arid conditions and doesn’t tolerate soggy soils. Once the plant is established, it rarely needs water and additional moisture should be suspended entirely in winter.",
//             pottingMix : "The most important consideration for growing edelweiss plants is the soil. They need superior drainage and a pH that is slightly alkaline to medium acidity. For container plants, make a mixture of equal parts peat moss, sand and compost. In-ground plants need a similar mixture, which you can work into the existing soil."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "FRANGIPANI",
//             imageLink : '/images/70.jpg',
//             isFlowring : true,
        
//             about : "Frangipani is a fragrant flowering tree, also known as plumeria. The oil of the colorful flower, also known as the Hawaiian Lei flower, has been used in perfumery since the 16th century, usually as a top or heart note. The flowers from a frangipani tree are either white, yellow, pink, or multi-color.",
//             sunlight : "Plumerias prefer bright sunlight and moderate humidity for optimum growth and require at least 6 to 7 hours of direct sun every day. No special care is required in the peak summer also. They grow well in light soils having good drainage but struggle in clay soils, where it is hard for water to drain away.",
//             watering : "Plumerias require profuse watering but the top soil shall be dried out before the next watering. On the onset of winter the frequency of watering shall be reduced and totally stopped after all the leaves are shed in the deciduous varieties and resumed in the spring as new growth begins.",
//             pottingMix : "When growing plumeria plants in pots, use a coarse, well-draining potting mix—cactus mix or perlite and sand should be fine."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "HIBISCUS",
//             imageLink : '/images/71.jpg',
//             isFlowring : true,
        
//             about : "Hibiscus is a genus of flowering plants in the mallow family, Malvaceae. The genus is quite large, comprising several hundred species that are native to warm temperate, subtropical and tropical regions throughout the world.",
//             sunlight : "Hardy Hibiscus does best in full sun. They will grow in partial shade, but growth and flowering will suffer. If you live in areas with very hot summers, during the hottest part of the day, Hibiscus may need shade. Hibiscus should be planted along, or in the back of perennial flower beds.",
//             watering : "What you need to keep in mind while watering your hibiscus are the weather and the flowering cycle. In the flowering stage, the hibiscus requires more water. During summers as well, it needs a fair bit of watering but not too much so as to drown the plant.",
//             pottingMix : "Use pots with at least 4 drainage holes at the bottom. Hibiscus thrives in any soil but it should be well-drained. ... Remove the trunk of the plant gently by its roots, by dislodging the soil from the sides of the container."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "HYACINTH",
//             imageLink : '/images/72.jpg',
//             isFlowring : true,
        
//             about : "Hyacinthus is a small genus of bulbous, spring-blooming perennials. They are fragrant flowering plants in the family Asparagaceae, subfamily Scilloideae and are commonly called hyacinths.",
//             sunlight : "As with all spring bulbs, hyacinths sprout, bloom, and start to fade into dormancy before deciduous trees fully leaf out, so you don't have to worry about too much shade from nearby trees.",
//             watering : "Water your Hyacinth every two to three days. During the winter, you will probably water less frequently whereas, in the summer, you will water more often. Don't let the soil dry out completely but, at the same time, take care not to over water your plant either. Too much water is no good for the roots.",
//             pottingMix : "Modern hyacinths are some of the easiest-to-grow spring bulbs—they can be planted in the ground or pots, or grown in water in a bulb vase, no soil required."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "JASMINE",
//             imageLink : '/images/73.jpg',
//             isFlowring : true,
        
//             about : "Jasmine . It contains around 200 species native to tropical and warm temperate regions of Eurasia and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers. A number of unrelated plants contain the word 'jasmine' in their common names.",
//             sunlight : "They like to grow in bright sunlight. For indoors, make sure it is planted near window location to receive sunlight for 6 hours a day. The plant thrives and reaches to a particular height (say 4-6 feet) you can start fertilizing jasmine.",
//             watering : "Adequate moisture in the soil is necessary for proper growth and flowering in jasmines. Plants are irrigated by flooding once a week in the summer months. After flowering, no irrigation is normally required till after the next pruning and manuring.",
//             pottingMix : "Jasmines need fertile, well-drained soil in sun or partial shade. ... They can be grown in containers or in the ground. Plant winter jasmine in sun or partial shade. This tough shrub is fully hardy."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "KALANCHOE",
//             imageLink : '/images/74.jpg',
//             isFlowring : true,
        
//             about : "Kalanchoe (Kalanchoe spp.), one of the prettier flowering succulent houseplants, is hardy outdoors in USDA plant hardiness zones 10 to 12. When grown indoors, they provide months of colorful blooms if properly tended.",
//             sunlight : "Kalanchoes prefer to receive natural sunlight that is relatively bright; however, it will not typically do well in direct sunlight. This is because too much sunlight will cause the leaves to burn, especially the afternoon sun.",
//             watering : "The best rule of thumb for watering a kalanchoe is to stick your finger in the soil every few days. When the top 2 inches of soil is dry (all the way dry, not just sort of dry), it's time to water. Indoors, this will probably mean you'll only need to water every 2 or 3 weeks, but be sure to check regularly.",
//             pottingMix : "Kalanchoes are succulents that grow best in a well-drained and well- aerated potting soil, such 60% peat moss and 40% perlite. Cut back tall growth and old flower stems. Keep well watered in a sunny, warm window. After danger of frost, move outdoors to a bright, lightly shaded spot for the summer."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "LOTUS",
//             imageLink : '/images/75.jpg',
//             isFlowring : true,
        
//             about : "Lotus plants are adapted to grow in the flood plains of slow-moving rivers and delta areas. Stands of lotus drop hundreds of thousands of seeds every year to the bottom of the pond. While some sprout immediately, and most are eaten by wildlife, the remaining seeds can remain dormant for an extensive period of time as the pond silts in and dries out.",
//             sunlight : "Lotus plants thrive in full sun, requiring at least 5 to 6 hours of direct sunlight per day. If your pond is partially shaded, you may want to prune or remove surrounding foliage that blocks out the sun.",
//             watering : "A lotus does not need a pond to grow. All that is necessary is a no holes container and a few inches of water above the soil. The smaller varieties need only a couple of inches above the soil, whereas the larger varieties that can grow to 5' tall, will need 8-10 of water above the soil.",
//             pottingMix : "Choose Soil Now fill the pot with 2 parts clay and 1 part sandy soil. Add a layer of potting mix soil about 6 inches above it. Press the seeds gently into the top of the soil about 2 inches. After placing the seedlings in a pot cover it with a fertile soil."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "MARIGOLD",
//             imageLink : '/images/76.jpg',
//             isFlowring : true,
        
//             about : "Tagetes is a genus of annual or perennial, mostly herbaceous plants in the sunflower family Asteraceae. They are among several groups of plants known in English as marigolds. The genus Tagetes was described by Carl Linnaeus in 1753.",
//             sunlight : "Once planted, marigolds grow rapidly with no fuss. Most thrive in full sun, taking hot, sunny exposures in stride. Marigolds can even handle the reflected heat and light of paved surfaces as long as they get regular moisture. However, marigolds will tolerate up to 20% shade if there is bright light the rest of the day.",
//             watering : "Marigolds do not need regular watering but require so during the dry spells. Be careful not to sprinkle water on the flowers of tall varieties, otherwise they become water-logged and soft.",
//             pottingMix : "Any type of marigold can be grown in containers, but keep in mind that some types, such as African marigolds, can reach heights of up to 3 feet (1 m.) and may be too large for standard containers. ... Signet marigolds are another good choice for potted marigold plants."
//         }).save().then(a  => {}).catch(err => {console.log(err);});new Plant({
//             name : "PEACE LILY",
//             imageLink : '/images/77.jpg',
//             isFlowring : true,
        
//             about : "A long-time favorite of those with a green-thumb and even those without, Spathiphyllum, commonly known as the peace lily, is an adaptable and low-maintenance houseplant. Peace lilies are not true lilies (Lilium spp.) at all, but rather a member of the Araceae family.",
//             sunlight : "Unlike many houseplants that we inevitably end up killing, peace lilies like growing indoors. They don't need direct sun, preferring bright, indirect light from a nearby window. They'll grow just fine across the room from a window but won't bloom well in such low light and may also become leggy.",
//             watering : "The plant will droop a bit when thirsty, telling you when it needs a drink. If you pay attention to when it usually starts to sag, you can plan to water one day before it generally happens. Watering about once a week and spritzing leaves with water throughout the summer will help keep your peace lily hydrated.",
//             pottingMix : "Use a well-draining, all-purpose potting soil. Repotting annually in the spring is good for the peace lily, as the plant will appreciate the refreshed soil. Eventually, the peace lily may grow too large for its pot, at which point it can be divided."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//         new Plant({
//             name : "PEONY",
//             imageLink : '/images/78.jpg',
//             isFlowring : true,
        
//             about : "The peony or paeony is a flowering plant in the genus Paeonia, the only genus in the family Paeoniaceae. Peonies are native to Asia, Europe and Western North America. Scientists differ on the number of species that can be distinguished, ranging from 25 to 40, although the current consensus is 33 known species.",
//             sunlight : "Peonies like full sun, and though they can manage with half a day, they bloom best in a sunny spot that gets 6 to 8 hours of sunlight each day. Provide shelter from strong winds, as peonies' large blooms can make them top heavy.",
//             watering : "Peonies are drought tolerant for short periods after establishment but best growth and healthier roots stem from consistent watering. On average, plants need 1 inch (2.5 cm.) of water per week.",
//             pottingMix : "Peonies are very adaptable, but ideally, they like a well-drained, slightly acidic soil (6.5 to 7.0 pH). If you are planting in heavy, clay soil, amending with compost or a soil mix labeled for azaleas and rhododendrons will make it easier for your peony plant to settle in."
//         }).save().then(a  => {}).catch(err => {console.log(err);});
//         new Plant({
//             name : "PETUNIA",
//             imageLink : '/images/79.jpg',
//             isFlowring : true,
        
//             about : "Often grown as annuals, petunias are one of the most popular flowers because of their long flowering period. As with most annuals, they get leggy by midsummer, so you’ll want to prune the shoots back to about half their length. See how to plant and take care of your petunias to keep them blooming.",
//             sunlight : "This petunia and verbena mix is planted in full sun to maximize flowering. Petunias need at least 5 or 6 hours of good sunlight; they'll perform even better when located in full sun all day. The more shade they receive, the fewer flowers they'll produce.",
//             watering : "Petunias are tolerant of heat so you don't have to water them regularly. A thorough watering once a week should be sufficient (unless there are prolonged periods of drought in your area).Petunias are tolerant of heat so you don't have to water them regularly. A thorough watering once a week should be sufficient (unless there are prolonged periods of drought in your area).",
//             pottingMix : "Petunia container care is very easy. Soil in containers is prone to heating up and drying out much faster than soil in the garden, but petunias are particularly hot and dry hardy. ... Place your containers where they will receive full sun – six hours per day is good but eight is preferable for the fullest possible blooms."
//         }).save().then(a  => {}).catch(err => {console.log(err);});
//         new Plant({
//             name : "ROSE",
//             imageLink : '/images/80.jpg',
//             isFlowring : true,
        
//             about : "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.",
//             sunlight : "Roses love an open sunny space with no overhanging branches of trees. However, in the hot climate of summer, partial shade is helpful.",
//             watering : "Established roses – water once a week. As your rose starts blooming, take note if your flowers are wilting. This will happen in extreme heat but is a reliable sign that your roses need more water. Newly planted roses – water every other day.",
//             pottingMix : "Create a potting soil mixture consisting of one-third quality commercial potting soil, one-third garden compost, and one-third composted manure. Add a cup of perlite to enhance drainage. Add 1 cup of bonemeal to the soil mixture. If you wish, you can also add fishmeal or blood meal for added nutrients."
//         }).save().then(a  => {}).catch(err => {console.log(err);});
//         new Plant({
//             name : "WATER LILY",
//             imageLink : '/images/81.jpg',
//             isFlowring : true,
        
//             about : "Water lilies (Nymphaea) and lotus (Nelumbo) are jewels of the aquatic world. Symbolic in both ancient and modern times, they are celebrated for their beauty and immortalized in art and religion. Many of them are easy to grow and reward the gardener with fragrant and sumptuous blossoms from June until October.",
//             sunlight : "Most water lilies typically need a minimum of six hours of direct sunlight in order to produce beautiful blooms. Fortunately, there are a few hardy varieties that will bloom their hearts out with as little as three hours of sunlight per day.",
//             watering : "During active growth, water freely—especially if rainfall is less than 1 inch per week. Keep lilies mulched so that their roots are cool. The mulch should feel moist, but not wet.",
//             pottingMix : "Loam or a clay-loam soil is best for potting up your water lilies. And don't over complicate it: for most of us it means digging some soil from our gardens vs. reaching for a bag of potting soil."
//         }).save().then(a  => {}).catch(err => {console.log(err);});

//     }).catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })
