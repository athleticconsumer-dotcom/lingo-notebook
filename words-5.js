// World & people: countries, character, roads, materials, health, weather, city, nature, animals, clothes, family, hobbies, body, feelings.
window.TOPICS.push(
{ id: "countries", icon: "🌍", name: ["Countries & nationalities","Länder & Nationalitäten","Pays & nationalités","Страны и национальности"], words: `
Germany|Deutschland|Allemagne|Германия
Switzerland|Schweiz|Suisse|Швейцария
Austria|Österreich|Autriche|Австрия
France|Frankreich|France|Франция
Russia|Russland|Russie|Россия
England|England|Angleterre|Англия
Spain|Spanien|Espagne|Испания
Italy|Italien|Italie|Италия
Turkey|Türkei|Turquie|Турция
Saudi Arabia|Saudi-Arabien|Arabie saoudite|Саудовская Аравия
Egypt|Ägypten|Égypte|Египет
Morocco|Marokko|Maroc|Марокко
Algeria|Algerien|Algérie|Алжир
Tunisia|Tunesien|Tunisie|Тунис
Syria|Syrien|Syrie|Сирия
Iraq|Irak|Irak|Ирак
Palestine|Palästina|Palestine|Палестина
Jordan|Jordanien|Jordanie|Иордания
Lebanon|Libanon|Liban|Ливан
United Arab Emirates|Vereinigte Arabische Emirate|Émirats arabes unis|ОАЭ
Iran|Iran|Iran|Иран
Pakistan|Pakistan|Pakistan|Пакистан
India|Indien|Inde|Индия
China|China|Chine|Китай
Japan|Japan|Japon|Япония
USA|USA|États-Unis|США
Canada|Kanada|Canada|Канада
Nigeria|Nigeria|Nigeria|Нигерия
Dagestan|Dagestan|Daghestan|Дагестан
Chechnya|Tschetschenien|Tchétchénie|Чечня
Europe|Europa|Europe|Европа
Africa|Afrika|Afrique|Африка
Asia|Asien|Asie|Азия
a German|ein Deutscher|un Allemand|немец
a French person|ein Franzose|un Français|француз
a Russian|ein Russe|un Russe|русский
an Arab|ein Araber|un Arabe|араб
a Turk|ein Türke|un Turc|турок
a Swiss person|ein Schweizer|un Suisse|швейцарец
nationality|Staatsangehörigkeit|nationalité|гражданство
capital city|Hauptstadt|capitale|столица
foreigner|Ausländer|étranger|иностранец
homeland|Heimat|patrie|родина`},
{ id: "character", icon: "🦁", name: ["Character","Charakter","Caractère","Характер"], words: `
character|Charakter|caractère|характер
kind|gütig|bon|добрый
generous|großzügig|généreux|щедрый
stingy|geizig|radin|жадный
honest|ehrlich|honnête|честный
brave|mutig|courageux|смелый
cowardly|feige|lâche|трусливый
patient|geduldig|patient|терпеливый
impatient|ungeduldig|impatient|нетерпеливый
confident|selbstbewusst|sûr de soi|уверенный в себе
humble|bescheiden|humble|скромный
arrogant|arrogant|arrogant|высокомерный
strict|streng|strict|строгий
reliable|zuverlässig|fiable|надёжный
curious|neugierig|curieux|любопытный
creative|kreativ|créatif|творческий
tidy|ordentlich|ordonné|аккуратный
messy|unordentlich|désordonné|неаккуратный
open-minded|offen|ouvert d'esprit|открытый
stubborn|stur|têtu|упрямый
jealous|eifersüchtig|jaloux|ревнивый
selfish|egoistisch|égoïste|эгоистичный
wise|weise|sage|мудрый
loyal|treu|fidèle|преданный
sensitive|sensibel|sensible|чувствительный
cheerful|fröhlich|joyeux|весёлый
he is a good person|er ist ein guter Mensch|c'est une bonne personne|он хороший человек
she is very kind|sie ist sehr nett|elle est très gentille|она очень добрая`},
{ id: "roads", icon: "🚦", name: ["Roads & driving","Straße & Autofahren","Route & conduite","Дорога и вождение"], words: `
traffic|Verkehr|circulation|движение
traffic jam|Stau|embouteillage|пробка
traffic light|Ampel|feu|светофор
crossroads|Kreuzung|carrefour|перекрёсток
roundabout|Kreisverkehr|rond-point|круговое движение
motorway|Autobahn|autoroute|автомагистраль
petrol station|Tankstelle|station-service|заправка
petrol|Benzin|essence|бензин
parking space|Parkplatz|place de parking|парковочное место
driving licence|Führerschein|permis de conduire|водительские права
speed|Geschwindigkeit|vitesse|скорость
fine (penalty)|Strafe|amende|штраф
tyre|Reifen|pneu|шина
wheel|Rad|roue|колесо
engine|Motor|moteur|двигатель
brake|Bremse|frein|тормоз
seatbelt|Sicherheitsgurt|ceinture de sécurité|ремень безопасности
steering wheel|Lenkrad|volant|руль
to overtake|überholen|doubler|обгонять
to fill up (petrol)|tanken|faire le plein|заправляться
to brake|bremsen|freiner|тормозить
slow down!|fahr langsamer!|ralentis !|сбавь скорость!
park here|park hier|gare-toi ici|паркуйся здесь
is there parking nearby?|gibt es hier einen Parkplatz?|il y a un parking près d'ici ?|здесь есть парковка?
motorbike|Motorrad|moto|мотоцикл
lorry|Lkw|camion|грузовик
underground|U-Bahn|métro|метро
tram|Straßenbahn|tramway|трамвай
pedestrian|Fußgänger|piéton|пешеход`},
{ id: "materials", icon: "🧱", name: ["Materials, shapes & measures","Materialien, Formen & Maße","Matériaux, formes & mesures","Материалы, формы и меры"], words: `
wood|Holz|bois|дерево (материал)
metal|Metall|métal|металл
iron|Eisen|fer|железо
gold|Gold|or|золото
silver|Silber|argent (métal)|серебро
glass (material)|Glas|verre|стекло
plastic|Plastik|plastique|пластик
leather|Leder|cuir|кожа (материал)
cotton|Baumwolle|coton|хлопок
wool|Wolle|laine|шерсть
silk|Seide|soie|шёлк
sand|Sand|sable|песок
circle|Kreis|cercle|круг
line|Linie|ligne|линия
dot|Punkt|point|точка
triangle|Dreieck|triangle|треугольник
rectangle|Rechteck|rectangle|прямоугольник
corner (angle)|Ecke|angle|угол
edge|Rand|bord|край
surface|Oberfläche|surface|поверхность
length|Länge|longueur|длина
width|Breite|largeur|ширина
height|Höhe|hauteur|высота
centimetre|Zentimeter|centimètre|сантиметр
metre|Meter|mètre|метр
kilometre|Kilometer|kilomètre|километр
litre|Liter|litre|литр
gram|Gramm|gramme|грамм
box|Kiste|boîte|коробка`},
{ id: "doctor", icon: "💊", name: ["At the doctor","Beim Arzt","Chez le médecin","У врача"], words: `
I have a cold|ich bin erkältet|je suis enrhumé|я простудился
I have a temperature|ich habe Fieber|j'ai de la fièvre|у меня температура
I have a stomach ache|ich habe Bauchschmerzen|j'ai mal au ventre|у меня болит живот
I have a sore throat|ich habe Halsschmerzen|j'ai mal à la gorge|у меня болит горло
my back hurts|mein Rücken tut weh|j'ai mal au dos|у меня болит спина
I feel dizzy|mir ist schwindelig|j'ai la tête qui tourne|у меня кружится голова
I can't sleep|ich kann nicht schlafen|je n'arrive pas à dormir|я не могу уснуть
how long have you had this?|seit wann haben Sie das?|depuis quand avez-vous ça ?|как давно у вас это?
take this twice a day|nehmen Sie das zweimal am Tag|prenez ça deux fois par jour|принимайте это два раза в день
prescription|Rezept (vom Arzt)|ordonnance|рецепт
tablet|Tablette|comprimé|таблетка
injection|Spritze|piqûre|укол
bandage|Verband|pansement|повязка
blood pressure|Blutdruck|tension|давление
health insurance|Krankenversicherung|assurance maladie|медицинская страховка
waiting room|Wartezimmer|salle d'attente|приёмная
patient (noun)|Patient|patient|пациент
operation|Operation|opération|операция
x-ray|Röntgenbild|radio|рентген
my arm is broken|mein Arm ist gebrochen|j'ai le bras cassé|у меня сломана рука
I need to see a doctor|ich muss zum Arzt|je dois voir un médecin|мне надо к врачу
get well soon!|gute Besserung!|bon rétablissement !|выздоравливай!
vitamin|Vitamin|vitamine|витамин
diet|Diät|régime|диета
nausea|Übelkeit|nausée|тошнота
allergy|Allergie|allergie|аллергия`},
{ id: "weather2", icon: "☔", name: ["Talking about the weather","Über das Wetter reden","Parler du temps","Разговор о погоде"], words: `
it's raining|es regnet|il pleut|идёт дождь
it's snowing|es schneit|il neige|идёт снег
it's sunny|die Sonne scheint|il y a du soleil|солнечно
it's windy|es ist windig|il y a du vent|ветрено
it's cloudy|es ist bewölkt|c'est nuageux|облачно
it's foggy|es ist neblig|il y a du brouillard|туманно
it's very hot today|heute ist es sehr heiß|il fait très chaud aujourd'hui|сегодня очень жарко
it's freezing|es ist eiskalt|il gèle|очень холодно
the weather is nice|das Wetter ist schön|il fait beau|хорошая погода
the weather is bad|das Wetter ist schlecht|il fait mauvais|плохая погода
what will the weather be like tomorrow?|wie wird das Wetter morgen?|quel temps fera-t-il demain ?|какая погода будет завтра?
weather forecast|Wettervorhersage|prévisions météo|прогноз погоды
temperature|Temperatur|température|температура
degrees|Grad|degrés|градусы
fog|Nebel|brouillard|туман
ice|Eis|glace|лёд
thunder|Donner|tonnerre|гром
lightning|Blitz|éclair|молния
rainbow|Regenbogen|arc-en-ciel|радуга
umbrella|Regenschirm|parapluie|зонт
humid|feucht|humide|влажный
heat|Hitze|chaleur|жара`},
{ id: "city2", icon: "🏛️", name: ["More places in town","Weitere Orte in der Stadt","Autres lieux en ville","Ещё места в городе"], words: `
town hall|Rathaus|mairie|мэрия
cinema|Kino|cinéma|кинотеатр
theatre|Theater|théâtre|театр
stadium|Stadion|stade|стадион
university|Universität|université|университет
kindergarten|Kindergarten|école maternelle|детский сад
prison|Gefängnis|prison|тюрьма
factory|Fabrik|usine|завод
tower|Turm|tour|башня
building|Gebäude|bâtiment|здание
centre|Zentrum|centre|центр
suburb|Vorort|banlieue|пригород
pavement|Gehweg|trottoir|тротуар
entrance|Eingang|entrée|вход
exit|Ausgang|sortie|выход
sign|Schild|panneau|знак
kiosk|Kiosk|kiosque|ларёк
playground|Spielplatz|aire de jeux|детская площадка
fountain|Brunnen|fontaine|фонтан
harbour|Hafen|port|порт
bookshop|Buchhandlung|librairie|книжный магазин
butcher's shop|Metzgerei|boucherie|мясная лавка`},
{ id: "nature2", icon: "🏝️", name: ["Landscape & plants","Landschaft & Pflanzen","Paysage & plantes","Ландшафт и растения"], words: `
island|Insel|île|остров
coast|Küste|côte|побережье
wave|Welle|vague|волна
valley|Tal|vallée|долина
hill|Hügel|colline|холм
field|Feld|champ|поле
plant|Pflanze|plante|растение
leaf|Blatt|feuille|лист
branch|Ast|branche|ветка
root|Wurzel|racine|корень
seed|Samen|graine|семя
palm tree|Palme|palmier|пальма
rock|Fels|rocher|скала
cave|Höhle|grotte|пещера
waterfall|Wasserfall|cascade|водопад
spring (water)|Quelle|source|родник
sunrise|Sonnenaufgang|lever du soleil|рассвет
sunset|Sonnenuntergang|coucher du soleil|закат
landscape|Landschaft|paysage|пейзаж
environment|Umwelt|environnement|окружающая среда
nature|Natur|nature|природа
oasis|Oase|oasis|оазис
dust|Staub|poussière|пыль
mud|Schlamm|boue|грязь
planet|Planet|planète|планета`},
{ id: "animals2", icon: "🦋", name: ["More animals","Weitere Tiere","Plus d'animaux","Ещё животные"], words: `
pet|Haustier|animal de compagnie|домашнее животное
puppy|Welpe|chiot|щенок
kitten|Kätzchen|chaton|котёнок
lamb (animal)|Lamm|agneau|ягнёнок
calf|Kalb|veau|телёнок
pigeon|Taube|pigeon|голубь
duck|Ente|canard|утка
owl|Eule|hibou|сова
crow|Krähe|corbeau|ворона
tiger|Tiger|tigre|тигр
deer|Hirsch|cerf|олень
gazelle|Gazelle|gazelle|газель
turtle|Schildkröte|tortue|черепаха
frog|Frosch|grenouille|лягушка
butterfly|Schmetterling|papillon|бабочка
mosquito|Mücke|moustique|комар
scorpion|Skorpion|scorpion|скорпион
whale|Wal|baleine|кит
shark|Hai|requin|акула
dolphin|Delfin|dauphin|дельфин
tail|Schwanz|queue|хвост
wing|Flügel|aile|крыло
feather|Feder|plume|перо
nest|Nest|nid|гнездо
the dog is barking|der Hund bellt|le chien aboie|собака лает`},
{ id: "clothes2", icon: "🧴", name: ["More clothes & care","Mehr Kleidung & Pflege","Plus de vêtements & soins","Ещё одежда и уход"], words: `
underwear|Unterwäsche|sous-vêtements|нижнее бельё
pyjamas|Schlafanzug|pyjama|пижама
jumper|Pullover|pull|свитер
boots|Stiefel|bottes|сапоги
sandals|Sandalen|sandales|сандалии
trainers|Turnschuhe|baskets|кроссовки
headscarf|Kopftuch|foulard|платок
suit|Anzug|costume|костюм
uniform|Uniform|uniforme|форма
button|Knopf|bouton|пуговица
zip|Reißverschluss|fermeture éclair|молния (застёжка)
sleeve|Ärmel|manche|рукав
collar|Kragen|col|воротник
necklace|Halskette|collier|ожерелье
bracelet|Armband|bracelet|браслет
perfume|Parfüm|parfum|духи
comb|Kamm|peigne|расчёска
shampoo|Shampoo|shampooing|шампунь
cream (skin)|Creme|crème|крем
haircut|Haarschnitt|coupe de cheveux|стрижка
it suits you|das steht dir|ça te va bien|тебе идёт
what size are you?|welche Größe hast du?|tu fais quelle taille ?|какой у тебя размер?
can I try it on?|kann ich das anprobieren?|je peux l'essayer ?|можно примерить?`},
{ id: "family2", icon: "🏡", name: ["Family life","Familienleben","Vie de famille","Семейная жизнь"], words: `
my older brother|mein älterer Bruder|mon grand frère|мой старший брат
my younger sister|meine jüngere Schwester|ma petite sœur|моя младшая сестра
only child|Einzelkind|enfant unique|единственный ребёнок
twins|Zwillinge|jumeaux|близнецы
relatives|Verwandte|proches|родственники
ancestors|Vorfahren|ancêtres|предки
generation|Generation|génération|поколение
to bring up (children)|erziehen|élever|воспитывать
to take care of|sich kümmern um|s'occuper de|заботиться о
we are a big family|wir sind eine große Familie|nous sommes une grande famille|у нас большая семья
I have two brothers|ich habe zwei Brüder|j'ai deux frères|у меня два брата
my parents live in …|meine Eltern wohnen in …|mes parents habitent à …|мои родители живут в …
I miss my family|ich vermisse meine Familie|ma famille me manque|я скучаю по семье
we visit our grandparents|wir besuchen unsere Großeltern|nous rendons visite à nos grands-parents|мы навещаем бабушку и дедушку
divorced|geschieden|divorcé|в разводе
single (not married)|ledig|célibataire|не женат / не замужем
widow|Witwe|veuve|вдова
fiancé|Verlobter|fiancé|жених
stepfather|Stiefvater|beau-père|отчим
stepmother|Stiefmutter|belle-mère|мачеха
son-in-law|Schwiegersohn|gendre|зять
daughter-in-law|Schwiegertochter|belle-fille|невестка
surname|Nachname|nom de famille|фамилия
first name|Vorname|prénom|имя
age|Alter|âge|возраст
adult|Erwachsener|adulte|взрослый
teenager|Jugendlicher|adolescent|подросток
old man|alter Mann|vieil homme|старик
old woman|alte Frau|vieille femme|старушка`},
{ id: "hobbies", icon: "🎯", name: ["Hobbies & arts","Hobbys & Kunst","Loisirs & arts","Хобби и искусство"], words: `
reading|Lesen|lecture|чтение
cooking (hobby)|Kochen|cuisine|кулинария
travelling|Reisen|voyages|путешествия
drawing|Zeichnen|dessin|рисование
painting|Malerei|peinture|живопись
photography|Fotografie|photographie|фотография
gardening|Gartenarbeit|jardinage|садоводство
fishing|Angeln|pêche|рыбалка
hiking|Wandern|randonnée|поход
cycling|Radfahren|vélo|езда на велосипеде
martial arts|Kampfsport|arts martiaux|боевые искусства
boxing|Boxen|boxe|бокс
wrestling|Ringen|lutte|борьба
chess|Schach|échecs|шахматы
cards (game)|Karten|cartes|карты
game|Spiel|jeu|игра
song|Lied|chanson|песня
instrument|Instrument|instrument|инструмент
poem|Gedicht|poème|стихотворение
novel|Roman|roman|роман
artist|Künstler|artiste|художник
writer|Schriftsteller|écrivain|писатель
what are your hobbies?|was sind deine Hobbys?|quels sont tes loisirs ?|какие у тебя хобби?
I like reading|ich lese gern|j'aime lire|я люблю читать
I train every day|ich trainiere jeden Tag|je m'entraîne tous les jours|я тренируюсь каждый день
referee|Schiedsrichter|arbitre|судья
goal (sport)|Tor|but|гол
score|Spielstand|score|счёт
round (fight)|Runde|round|раунд
medal|Medaille|médaille|медаль`},
{ id: "body2", icon: "🦴", name: ["More body parts","Weitere Körperteile","Plus de parties du corps","Ещё части тела"], words: `
forehead|Stirn|front|лоб
cheek|Wange|joue|щека
chin|Kinn|menton|подбородок
lip|Lippe|lèvre|губа
eyebrow|Augenbraue|sourcil|бровь
throat|Kehle|gorge|горло
elbow|Ellbogen|coude|локоть
wrist|Handgelenk|poignet|запястье
thumb|Daumen|pouce|большой палец
nail (finger)|Fingernagel|ongle|ноготь
hip|Hüfte|hanche|таз
thigh|Oberschenkel|cuisse|бедро
ankle|Knöchel|cheville|лодыжка
heel|Ferse|talon|пятка
toe|Zeh|orteil|палец ноги
brain|Gehirn|cerveau|мозг
lungs|Lunge|poumons|лёгкие
liver|Leber|foie|печень
kidney|Niere|rein|почка
joint|Gelenk|articulation|сустав
spine|Wirbelsäule|colonne vertébrale|позвоночник
tears|Tränen|larmes|слёзы
breath|Atem|souffle|дыхание`},
{ id: "feelings2", icon: "❤️", name: ["Saying how you feel","Sagen, wie es dir geht","Dire ce qu'on ressent","Как сказать о чувствах"], words: `
I'm happy for you|ich freue mich für dich|je suis content pour toi|я рад за тебя
I'm worried|ich mache mir Sorgen|je suis inquiet|я волнуюсь
I'm stressed|ich bin gestresst|je suis stressé|у меня стресс
I'm in a good mood|ich habe gute Laune|je suis de bonne humeur|у меня хорошее настроение
I'm in a bad mood|ich habe schlechte Laune|je suis de mauvaise humeur|у меня плохое настроение
I'm disappointed|ich bin enttäuscht|je suis déçu|я разочарован
I'm relieved|ich bin erleichtert|je suis soulagé|мне полегчало
I'm embarrassed|es ist mir peinlich|je suis gêné|мне неловко
I'm fed up|ich habe die Nase voll|j'en ai marre|мне надоело
I'm homesick|ich habe Heimweh|j'ai le mal du pays|я скучаю по дому
I'm in love|ich bin verliebt|je suis amoureux|я влюблён
I feel better|es geht mir besser|je me sens mieux|мне лучше
mood|Laune|humeur|настроение
stress|Stress|stress|стресс
shame|Scham|honte|стыд
jealousy|Eifersucht|jalousie|ревность
sadness|Traurigkeit|tristesse|грусть
it makes me happy|das macht mich glücklich|ça me rend heureux|это делает меня счастливым
it annoys me|das nervt mich|ça m'énerve|это меня раздражает
I can't stand it|ich halte es nicht aus|je ne le supporte pas|я этого не выношу
I'm proud of you|ich bin stolz auf dich|je suis fier de toi|я горжусь тобой
I trust you|ich vertraue dir|je te fais confiance|я тебе доверяю
I love you|ich liebe dich|je t'aime|я тебя люблю`}
);
