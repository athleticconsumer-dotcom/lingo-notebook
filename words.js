// Word list: each entry is "English|Deutsch|Français|Русский".
// The learning language is never stored here: YOU fill in the blanks.
// To add a topic, copy a block and give it a new unique id.
window.TOPICS = [
{ id: "greetings", icon: "👋", name: ["Greetings & basics","Begrüßung & Grundlagen","Salutations & bases","Приветствия и основы"], words: `
hello|hallo|bonjour|привет
good morning|guten Morgen|bonjour (le matin)|доброе утро
good evening|guten Abend|bonsoir|добрый вечер
good night|gute Nacht|bonne nuit|спокойной ночи
goodbye|auf Wiedersehen|au revoir|до свидания
see you later|bis später|à plus tard|до встречи
how are you?|wie geht es dir?|comment ça va ?|как дела?
I'm fine, thank you|mir geht es gut, danke|ça va bien, merci|у меня всё хорошо, спасибо
and you?|und dir?|et toi ?|а у тебя?
what is your name?|wie heißt du?|comment tu t'appelles ?|как тебя зовут?
my name is …|ich heiße …|je m'appelle …|меня зовут …
nice to meet you|freut mich|enchanté(e)|приятно познакомиться
welcome|willkommen|bienvenue|добро пожаловать
please|bitte|s'il te plaît|пожалуйста
thank you|danke|merci|спасибо
thank you very much|vielen Dank|merci beaucoup|большое спасибо
you're welcome|gern geschehen|de rien|не за что
excuse me|Entschuldigung|excusez-moi|извините
sorry|es tut mir leid|désolé(e)|простите
yes|ja|oui|да
no|nein|non|нет
maybe|vielleicht|peut-être|может быть
okay|okay|d'accord|хорошо
I don't understand|ich verstehe nicht|je ne comprends pas|я не понимаю
can you repeat that?|kannst du das wiederholen?|tu peux répéter ?|можешь повторить?
slowly, please|langsam, bitte|lentement, s'il te plaît|медленнее, пожалуйста
do you speak English?|sprichst du Englisch?|tu parles anglais ?|ты говоришь по-английски?
I speak a little|ich spreche ein bisschen|je parle un peu|я немного говорю`},
{ id: "pronouns", icon: "❓", name: ["Pronouns & question words","Pronomen & Fragewörter","Pronoms & mots interrogatifs","Местоимения и вопросы"], words: `
I|ich|je|я
you (singular)|du|tu|ты
he|er|il|он
she|sie|elle|она
we|wir|nous|мы
you (plural)|ihr|vous|вы
they|sie (Plural)|ils / elles|они
my|mein|mon / ma|мой
your|dein|ton / ta|твой
his|sein|son / sa (à lui)|его
her|ihr|son / sa (à elle)|её
our|unser|notre|наш
their|ihr (Plural)|leur|их
this|dies|ce / ceci|это
that|das / jenes|cela|то
here|hier|ici|здесь
there|dort|là-bas|там
who?|wer?|qui ?|кто?
what?|was?|quoi ?|что?
where?|wo?|où ?|где?
where to?|wohin?|où (direction) ?|куда?
where from?|woher?|d'où ?|откуда?
when?|wann?|quand ?|когда?
why?|warum?|pourquoi ?|почему?
how?|wie?|comment ?|как?
how much? / how many?|wie viel?|combien ?|сколько?
which?|welcher?|quel ?|какой?`},
{ id: "numbers", icon: "🔢", name: ["Numbers","Zahlen","Nombres","Числа"], words: `
zero|null|zéro|ноль
one|eins|un|один
two|zwei|deux|два
three|drei|trois|три
four|vier|quatre|четыре
five|fünf|cinq|пять
six|sechs|six|шесть
seven|sieben|sept|семь
eight|acht|huit|восемь
nine|neun|neuf|девять
ten|zehn|dix|десять
eleven|elf|onze|одиннадцать
twelve|zwölf|douze|двенадцать
fifteen|fünfzehn|quinze|пятнадцать
twenty|zwanzig|vingt|двадцать
thirty|dreißig|trente|тридцать
forty|vierzig|quarante|сорок
fifty|fünfzig|cinquante|пятьдесят
one hundred|hundert|cent|сто
one thousand|tausend|mille|тысяча
one million|eine Million|un million|миллион
first|erste|premier|первый
second|zweite|deuxième|второй
third|dritte|troisième|третий
half|Hälfte|moitié|половина
number|Zahl|nombre|число`},
{ id: "time", icon: "🕰️", name: ["Time & days","Zeit & Wochentage","Le temps & les jours","Время и дни недели"], words: `
day|Tag|jour|день
week|Woche|semaine|неделя
month|Monat|mois|месяц
year|Jahr|année|год
today|heute|aujourd'hui|сегодня
tomorrow|morgen|demain|завтра
yesterday|gestern|hier|вчера
now|jetzt|maintenant|сейчас
later|später|plus tard|позже
morning|Morgen|matin|утро
noon|Mittag|midi|полдень
afternoon|Nachmittag|après-midi|после обеда
evening|Abend|soir|вечер
night|Nacht|nuit|ночь
hour|Stunde|heure|час
minute|Minute|minute|минута
Monday|Montag|lundi|понедельник
Tuesday|Dienstag|mardi|вторник
Wednesday|Mittwoch|mercredi|среда
Thursday|Donnerstag|jeudi|четверг
Friday|Freitag|vendredi|пятница
Saturday|Samstag|samedi|суббота
Sunday|Sonntag|dimanche|воскресенье
weekend|Wochenende|week-end|выходные
what time is it?|wie spät ist es?|quelle heure est-il ?|который час?
always|immer|toujours|всегда
never|nie|jamais|никогда
sometimes|manchmal|parfois|иногда`},
{ id: "months", icon: "📅", name: ["Months & seasons","Monate & Jahreszeiten","Mois & saisons","Месяцы и времена года"], words: `
January|Januar|janvier|январь
February|Februar|février|февраль
March|März|mars|март
April|April|avril|апрель
May|Mai|mai|май
June|Juni|juin|июнь
July|Juli|juillet|июль
August|August|août|август
September|September|septembre|сентябрь
October|Oktober|octobre|октябрь
November|November|novembre|ноябрь
December|Dezember|décembre|декабрь
spring|Frühling|printemps|весна
summer|Sommer|été|лето
autumn|Herbst|automne|осень
winter|Winter|hiver|зима
birthday|Geburtstag|anniversaire|день рождения
holiday / vacation|Urlaub / Ferien|vacances|отпуск / каникулы
date|Datum|date|дата
calendar|Kalender|calendrier|календарь
early|früh|tôt|рано
late|spät|tard|поздно`},
{ id: "family", icon: "👨‍👩‍👧", name: ["Family & people","Familie & Menschen","Famille & personnes","Семья и люди"], words: `
family|Familie|famille|семья
father|Vater|père|отец
mother|Mutter|mère|мать
parents|Eltern|parents|родители
son|Sohn|fils|сын
daughter|Tochter|fille|дочь
brother|Bruder|frère|брат
sister|Schwester|sœur|сестра
husband|Ehemann|mari|муж
wife|Ehefrau|femme (épouse)|жена
child|Kind|enfant|ребёнок
children|Kinder|enfants|дети
baby|Baby|bébé|малыш
grandfather|Großvater|grand-père|дедушка
grandmother|Großmutter|grand-mère|бабушка
grandson|Enkel|petit-fils|внук
granddaughter|Enkelin|petite-fille|внучка
uncle|Onkel|oncle|дядя
aunt|Tante|tante|тётя
cousin (male)|Cousin|cousin|двоюродный брат
cousin (female)|Cousine|cousine|двоюродная сестра
nephew|Neffe|neveu|племянник
niece|Nichte|nièce|племянница
father-in-law|Schwiegervater|beau-père|тесть / свёкор
mother-in-law|Schwiegermutter|belle-mère|тёща / свекровь
friend|Freund|ami|друг
neighbour|Nachbar|voisin|сосед
man|Mann|homme|мужчина
woman|Frau|femme|женщина
boy|Junge|garçon|мальчик
girl|Mädchen|fille|девочка
married|verheiratet|marié(e)|женат / замужем`},
{ id: "body", icon: "🫀", name: ["The body","Der Körper","Le corps","Тело"], words: `
body|Körper|corps|тело
head|Kopf|tête|голова
hair|Haare|cheveux|волосы
face|Gesicht|visage|лицо
eye|Auge|œil|глаз
ear|Ohr|oreille|ухо
nose|Nase|nez|нос
mouth|Mund|bouche|рот
tooth|Zahn|dent|зуб
tongue|Zunge|langue|язык
beard|Bart|barbe|борода
neck|Hals|cou|шея
shoulder|Schulter|épaule|плечо
arm|Arm|bras|рука
hand|Hand|main|кисть руки
finger|Finger|doigt|палец
chest|Brust|poitrine|грудь
back|Rücken|dos|спина
stomach|Bauch|ventre|живот
leg|Bein|jambe|нога
knee|Knie|genou|колено
foot|Fuß|pied|стопа
heart|Herz|cœur|сердце
skin|Haut|peau|кожа
bone|Knochen|os|кость
blood|Blut|sang|кровь`},
{ id: "health", icon: "🩺", name: ["Health & doctor","Gesundheit & Arzt","Santé & médecin","Здоровье и врач"], words: `
doctor|Arzt|médecin|врач
dentist|Zahnarzt|dentiste|стоматолог
hospital|Krankenhaus|hôpital|больница
pharmacy|Apotheke|pharmacie|аптека
medicine|Medikament|médicament|лекарство
sick|krank|malade|больной
healthy|gesund|en bonne santé|здоровый
pain|Schmerz|douleur|боль
headache|Kopfschmerzen|mal de tête|головная боль
fever|Fieber|fièvre|температура
cold (illness)|Erkältung|rhume|простуда
cough|Husten|toux|кашель
injury|Verletzung|blessure|травма
appointment|Termin|rendez-vous|приём
I feel sick|mir ist schlecht|je me sens mal|мне плохо
it hurts here|es tut hier weh|j'ai mal ici|здесь болит
help!|Hilfe!|au secours !|помогите!
emergency|Notfall|urgence|экстренный случай
ambulance|Krankenwagen|ambulance|скорая помощь
tired|müde|fatigué(e)|уставший
sleep|Schlaf|sommeil|сон
to rest|sich ausruhen|se reposer|отдыхать`},
{ id: "food", icon: "🍞", name: ["Food","Essen","La nourriture","Еда"], words: `
food|Essen|nourriture|еда
breakfast|Frühstück|petit-déjeuner|завтрак
lunch|Mittagessen|déjeuner|обед
dinner|Abendessen|dîner|ужин
bread|Brot|pain|хлеб
rice|Reis|riz|рис
meat|Fleisch|viande|мясо
lamb|Lammfleisch|agneau|баранина
chicken|Hähnchen|poulet|курица
fish|Fisch|poisson|рыба
egg|Ei|œuf|яйцо
cheese|Käse|fromage|сыр
butter|Butter|beurre|сливочное масло
salt|Salz|sel|соль
pepper|Pfeffer|poivre|перец
sugar|Zucker|sucre|сахар
honey|Honig|miel|мёд
soup|Suppe|soupe|суп
salad|Salat|salade|салат
vegetables|Gemüse|légumes|овощи
fruit|Obst|fruits|фрукты
apple|Apfel|pomme|яблоко
banana|Banane|banane|банан
orange|Orange|orange|апельсин
dates (fruit)|Datteln|dattes|финики
tomato|Tomate|tomate|помидор
potato|Kartoffel|pomme de terre|картошка
onion|Zwiebel|oignon|лук
garlic|Knoblauch|ail|чеснок
I'm hungry|ich habe Hunger|j'ai faim|я голоден
delicious|lecker|délicieux|вкусно`},
{ id: "kitchen", icon: "🍵", name: ["Drinks & kitchen","Getränke & Küche","Boissons & cuisine","Напитки и кухня"], words: `
water|Wasser|eau|вода
tea|Tee|thé|чай
coffee|Kaffee|café|кофе
milk|Milch|lait|молоко
juice|Saft|jus|сок
I'm thirsty|ich habe Durst|j'ai soif|я хочу пить
cup|Tasse|tasse|чашка
glass|Glas|verre|стакан
plate|Teller|assiette|тарелка
bowl|Schüssel|bol|миска
spoon|Löffel|cuillère|ложка
fork|Gabel|fourchette|вилка
knife|Messer|couteau|нож
pot|Topf|casserole|кастрюля
pan|Pfanne|poêle|сковорода
oven|Ofen|four|духовка
fridge|Kühlschrank|réfrigérateur|холодильник
recipe|Rezept|recette|рецепт
to cook|kochen|cuisiner|готовить
to bake|backen|cuire au four|печь
to eat|essen|manger|есть
to drink|trinken|boire|пить
hot|heiß|chaud|горячий
cold|kalt|froid|холодный
sweet|süß|sucré|сладкий
salty|salzig|salé|солёный
spicy|scharf|épicé|острый`},
{ id: "home", icon: "🏠", name: ["House & home","Haus & Wohnung","La maison","Дом и квартира"], words: `
house|Haus|maison|дом
apartment|Wohnung|appartement|квартира
room|Zimmer|pièce|комната
kitchen|Küche|cuisine|кухня
bathroom|Badezimmer|salle de bain|ванная
bedroom|Schlafzimmer|chambre|спальня
living room|Wohnzimmer|salon|гостиная
toilet|Toilette|toilettes|туалет
door|Tür|porte|дверь
window|Fenster|fenêtre|окно
wall|Wand|mur|стена
floor|Boden|sol|пол
roof|Dach|toit|крыша
stairs|Treppe|escalier|лестница
key|Schlüssel|clé|ключ
table|Tisch|table|стол
chair|Stuhl|chaise|стул
bed|Bett|lit|кровать
sofa|Sofa|canapé|диван
cupboard|Schrank|armoire|шкаф
lamp|Lampe|lampe|лампа
carpet|Teppich|tapis|ковёр
mirror|Spiegel|miroir|зеркало
shower|Dusche|douche|душ
garden|Garten|jardin|сад
rent|Miete|loyer|аренда`},
{ id: "city", icon: "🏙️", name: ["City & directions","Stadt & Wegbeschreibung","La ville & directions","Город и дорога"], words: `
city|Stadt|ville|город
village|Dorf|village|деревня
street|Straße|rue|улица
square (in town)|Platz|place|площадь
shop|Laden|magasin|магазин
market|Markt|marché|рынок
supermarket|Supermarkt|supermarché|супермаркет
bakery|Bäckerei|boulangerie|пекарня
bank|Bank|banque|банк
post office|Post|bureau de poste|почта
mosque|Moschee|mosquée|мечеть
church|Kirche|église|церковь
school|Schule|école|школа
restaurant|Restaurant|restaurant|ресторан
café|Café|café|кафе
hotel|Hotel|hôtel|гостиница
park|Park|parc|парк
bridge|Brücke|pont|мост
museum|Museum|musée|музей
library|Bibliothek|bibliothèque|библиотека
police|Polizei|police|полиция
where is …?|wo ist …?|où est … ?|где …?
left|links|à gauche|налево
right|rechts|à droite|направо
straight ahead|geradeaus|tout droit|прямо
near|nah|près|близко
far|weit|loin|далеко`},
{ id: "travel", icon: "✈️", name: ["Transport & travel","Verkehr & Reisen","Transport & voyage","Транспорт и путешествия"], words: `
car|Auto|voiture|машина
bus|Bus|bus|автобус
train|Zug|train|поезд
plane|Flugzeug|avion|самолёт
taxi|Taxi|taxi|такси
bicycle|Fahrrad|vélo|велосипед
ship|Schiff|bateau|корабль
station|Bahnhof|gare|вокзал
bus stop|Bushaltestelle|arrêt de bus|остановка
airport|Flughafen|aéroport|аэропорт
ticket|Fahrkarte|billet|билет
passport|Reisepass|passeport|паспорт
suitcase|Koffer|valise|чемодан
journey|Reise|voyage|путешествие
departure|Abfahrt|départ|отправление
arrival|Ankunft|arrivée|прибытие
road|Weg|route|дорога
map|Karte|carte|карта
driver|Fahrer|chauffeur|водитель
to travel|reisen|voyager|путешествовать
to drive|fahren|conduire|водить машину
to arrive|ankommen|arriver|приезжать
to leave|abfahren|partir|уезжать
how do I get to …?|wie komme ich zu …?|comment aller à … ?|как добраться до …?
fast|schnell|rapide|быстро
slow|langsam|lent|медленно`},
{ id: "shopping", icon: "🛍️", name: ["Shopping & money","Einkaufen & Geld","Achats & argent","Покупки и деньги"], words: `
money|Geld|argent|деньги
price|Preis|prix|цена
how much does it cost?|wie viel kostet das?|combien ça coûte ?|сколько это стоит?
expensive|teuer|cher|дорого
cheap|billig|pas cher|дёшево
to buy|kaufen|acheter|покупать
to sell|verkaufen|vendre|продавать
to pay|bezahlen|payer|платить
cash|Bargeld|espèces|наличные
card|Karte|carte|карта
receipt|Quittung|reçu|чек
change (money back)|Wechselgeld|monnaie|сдача
discount|Rabatt|réduction|скидка
bag|Tüte|sac|пакет
size|Größe|taille|размер
customer|Kunde|client|клиент
seller|Verkäufer|vendeur|продавец
open|offen|ouvert|открыто
closed|geschlossen|fermé|закрыто
gift|Geschenk|cadeau|подарок
kilo|Kilo|kilo|килограмм
I would like …|ich hätte gern …|je voudrais …|я хотел бы …
do you have …?|haben Sie …?|vous avez … ?|у вас есть …?
that's all|das ist alles|c'est tout|это всё`},
{ id: "work", icon: "💼", name: ["Work & jobs","Arbeit & Berufe","Travail & métiers","Работа и профессии"], words: `
work|Arbeit|travail|работа
job|Beruf|métier|профессия
office|Büro|bureau|офис
company|Firma|entreprise|компания
boss|Chef|patron|начальник
colleague|Kollege|collègue|коллега
meeting|Besprechung|réunion|совещание
salary|Gehalt|salaire|зарплата
contract|Vertrag|contrat|договор
project|Projekt|projet|проект
teacher|Lehrer|professeur|учитель
coach|Trainer|entraîneur|тренер
engineer|Ingenieur|ingénieur|инженер
cook|Koch|cuisinier|повар
nurse|Pfleger|infirmier|медбрат
lawyer|Anwalt|avocat|юрист
farmer|Bauer|agriculteur|фермер
student|Student|étudiant|студент
computer|Computer|ordinateur|компьютер
phone|Telefon|téléphone|телефон
email|E-Mail|e-mail|электронная почта
to work|arbeiten|travailler|работать
busy|beschäftigt|occupé|занят
free (not busy)|frei|libre|свободен
what do you do for work?|was machst du beruflich?|tu fais quoi dans la vie ?|кем ты работаешь?
I work as …|ich arbeite als …|je travaille comme …|я работаю …`},
{ id: "learning", icon: "📚", name: ["School & learning","Schule & Lernen","École & apprentissage","Учёба"], words: `
lesson|Lektion|leçon|урок
language|Sprache|langue|язык
word|Wort|mot|слово
sentence|Satz|phrase|предложение
question|Frage|question|вопрос
answer|Antwort|réponse|ответ
book|Buch|livre|книга
notebook|Heft|cahier|тетрадь
pen|Stift|stylo|ручка
pencil|Bleistift|crayon|карандаш
paper|Papier|papier|бумага
letter (alphabet)|Buchstabe|lettre|буква
dictionary|Wörterbuch|dictionnaire|словарь
homework|Hausaufgaben|devoirs|домашнее задание
exam|Prüfung|examen|экзамен
mistake|Fehler|erreur|ошибка
to learn|lernen|apprendre|учить
to teach|unterrichten|enseigner|преподавать
to read|lesen|lire|читать
to write|schreiben|écrire|писать
to understand|verstehen|comprendre|понимать
to repeat|wiederholen|répéter|повторять
to know|wissen|savoir|знать
easy|leicht|facile|лёгкий
difficult|schwer|difficile|трудный
what does … mean?|was bedeutet …?|que veut dire … ?|что значит …?
how do you say …?|wie sagt man …?|comment dit-on … ?|как сказать …?`},
{ id: "nature", icon: "🌦️", name: ["Nature & weather","Natur & Wetter","Nature & météo","Природа и погода"], words: `
weather|Wetter|météo|погода
sun|Sonne|soleil|солнце
rain|Regen|pluie|дождь
snow|Schnee|neige|снег
wind|Wind|vent|ветер
cloud|Wolke|nuage|облако
storm|Sturm|tempête|буря
it's warm|es ist warm|il fait chaud|тепло
it's cold|es ist kalt|il fait froid|холодно
sky|Himmel|ciel|небо
moon|Mond|lune|луна
star|Stern|étoile|звезда
sea|Meer|mer|море
beach|Strand|plage|пляж
river|Fluss|rivière|река
lake|See|lac|озеро
mountain|Berg|montagne|гора
desert|Wüste|désert|пустыня
forest|Wald|forêt|лес
tree|Baum|arbre|дерево
flower|Blume|fleur|цветок
grass|Gras|herbe|трава
stone|Stein|pierre|камень
earth / ground|Erde|terre|земля
fire|Feuer|feu|огонь
air|Luft|air|воздух`},
{ id: "animals", icon: "🐪", name: ["Animals","Tiere","Animaux","Животные"], words: `
animal|Tier|animal|животное
dog|Hund|chien|собака
cat|Katze|chat|кошка
horse|Pferd|cheval|лошадь
camel|Kamel|chameau|верблюд
cow|Kuh|vache|корова
sheep|Schaf|mouton|овца
goat|Ziege|chèvre|коза
hen|Huhn|poule|курица
bird|Vogel|oiseau|птица
eagle|Adler|aigle|орёл
falcon|Falke|faucon|сокол
lion|Löwe|lion|лев
wolf|Wolf|loup|волк
bear|Bär|ours|медведь
fox|Fuchs|renard|лиса
snake|Schlange|serpent|змея
mouse|Maus|souris|мышь
rabbit|Kaninchen|lapin|кролик
donkey|Esel|âne|осёл
elephant|Elefant|éléphant|слон
monkey|Affe|singe|обезьяна
bee|Biene|abeille|пчела
ant|Ameise|fourmi|муравей
fly (insect)|Fliege|mouche|муха
spider|Spinne|araignée|паук`},
{ id: "clothes", icon: "👕", name: ["Clothes","Kleidung","Vêtements","Одежда"], words: `
clothes|Kleidung|vêtements|одежда
shirt|Hemd|chemise|рубашка
T-shirt|T-Shirt|t-shirt|футболка
trousers|Hose|pantalon|брюки
dress|Kleid|robe|платье
skirt|Rock|jupe|юбка
jacket|Jacke|veste|куртка
coat|Mantel|manteau|пальто
shoes|Schuhe|chaussures|обувь
socks|Socken|chaussettes|носки
hat|Hut|chapeau|шляпа
beanie|Mütze|bonnet|шапка
scarf|Schal|écharpe|шарф
gloves|Handschuhe|gants|перчатки
belt|Gürtel|ceinture|ремень
pocket|Hosentasche|poche|карман
watch|Armbanduhr|montre|часы
ring|Ring|bague|кольцо
glasses|Brille|lunettes|очки
to wear|tragen|porter|носить
to put on|anziehen|mettre|надевать
to take off|ausziehen|enlever|снимать
new|neu|nouveau|новый
old (things)|alt|vieux|старый
too big|zu groß|trop grand|слишком большой
too small|zu klein|trop petit|слишком маленький`},
{ id: "adjectives", icon: "🎨", name: ["Colours & descriptions","Farben & Eigenschaften","Couleurs & adjectifs","Цвета и прилагательные"], words: `
colour|Farbe|couleur|цвет
red|rot|rouge|красный
blue|blau|bleu|синий
green|grün|vert|зелёный
yellow|gelb|jaune|жёлтый
black|schwarz|noir|чёрный
white|weiß|blanc|белый
brown|braun|marron|коричневый
grey|grau|gris|серый
pink|rosa|rose|розовый
big|groß|grand|большой
small|klein|petit|маленький
long|lang|long|длинный
short|kurz|court|короткий
good|gut|bon|хороший
bad|schlecht|mauvais|плохой
beautiful|schön|beau|красивый
young|jung|jeune|молодой
old (people)|alt|âgé|пожилой
strong|stark|fort|сильный
weak|schwach|faible|слабый
rich|reich|riche|богатый
poor|arm|pauvre|бедный
clean|sauber|propre|чистый
dirty|schmutzig|sale|грязный
full|voll|plein|полный
empty|leer|vide|пустой`},
{ id: "feelings", icon: "💭", name: ["Feelings","Gefühle","Sentiments","Чувства"], words: `
happy|glücklich|heureux|счастливый
sad|traurig|triste|грустный
angry|wütend|en colère|злой
nervous|nervös|nerveux|нервный
calm|ruhig|calme|спокойный
surprised|überrascht|surpris|удивлённый
proud|stolz|fier|гордый
shy|schüchtern|timide|застенчивый
lonely|einsam|seul|одинокий
grateful|dankbar|reconnaissant|благодарный
excited|begeistert|enthousiaste|взволнованный
love|Liebe|amour|любовь
joy|Freude|joie|радость
hope|Hoffnung|espoir|надежда
worry|Sorge|souci|беспокойство
patience|Geduld|patience|терпение
to love|lieben|aimer|любить
to like|mögen|aimer bien|нравиться
to hate|hassen|détester|ненавидеть
I'm afraid|ich habe Angst|j'ai peur|я боюсь
I'm bored|mir ist langweilig|je m'ennuie|мне скучно
I'm glad|ich freue mich|je suis content(e)|я рад
I miss you|ich vermisse dich|tu me manques|я скучаю по тебе
don't worry|mach dir keine Sorgen|ne t'inquiète pas|не волнуйся
it doesn't matter|macht nichts|ce n'est pas grave|ничего страшного`},
{ id: "verbs", icon: "⚡", name: ["Common verbs","Wichtige Verben","Verbes courants","Частые глаголы"], words: `
to be|sein|être|быть
to have|haben|avoir|иметь
to go|gehen|aller|идти
to come|kommen|venir|приходить
to do / to make|machen|faire|делать
to say|sagen|dire|сказать
to speak|sprechen|parler|говорить
to see|sehen|voir|видеть
to hear|hören|entendre|слышать
to look|schauen|regarder|смотреть
to give|geben|donner|давать
to take|nehmen|prendre|брать
to want|wollen|vouloir|хотеть
can / to be able to|können|pouvoir|мочь
must / to have to|müssen|devoir|быть должным
to open|öffnen|ouvrir|открывать
to close|schließen|fermer|закрывать
to sit|sitzen|être assis|сидеть
to stand|stehen|être debout|стоять
to sleep|schlafen|dormir|спать
to wake up|aufwachen|se réveiller|просыпаться
to wash|waschen|laver|мыть
to wait|warten|attendre|ждать
to search|suchen|chercher|искать
to find|finden|trouver|находить
to help|helfen|aider|помогать
to start|anfangen|commencer|начинать
to finish|beenden|finir|заканчивать
to live|leben / wohnen|vivre / habiter|жить
to think|denken|penser|думать
to call (phone)|anrufen|appeler|звонить
to run|laufen|courir|бегать
to play|spielen|jouer|играть
to bring|bringen|apporter|приносить
to forget|vergessen|oublier|забывать
to remember|sich erinnern|se souvenir|помнить`},
{ id: "sport", icon: "🏋️", name: ["Sport & free time","Sport & Freizeit","Sport & loisirs","Спорт и досуг"], words: `
sport|Sport|sport|спорт
training|Training|entraînement|тренировка
gym|Fitnessstudio|salle de sport|спортзал
football|Fußball|football|футбол
swimming|Schwimmen|natation|плавание
running|Laufen|course à pied|бег
fight|Kampf|combat|бой
competition|Wettkampf|compétition|соревнование
champion|Meister|champion|чемпион
team|Mannschaft|équipe|команда
match|Spiel|match|матч
strength|Kraft|force|сила
muscle|Muskel|muscle|мышца
weight|Gewicht|poids|вес
to win|gewinnen|gagner|побеждать
to lose|verlieren|perdre|проигрывать
to swim|schwimmen|nager|плавать
free time|Freizeit|temps libre|свободное время
hobby|Hobby|loisir|хобби
music|Musik|musique|музыка
film|Film|film|фильм
photo|Foto|photo|фото
to go for a walk|spazieren gehen|se promener|гулять
celebration|Feier|fête|праздник
guest|Gast|invité|гость
let's go!|los geht's!|allons-y !|поехали!`},
{ id: "phrases", icon: "💬", name: ["Everyday phrases","Alltagssätze","Phrases du quotidien","Фразы на каждый день"], words: `
I don't know|ich weiß nicht|je ne sais pas|я не знаю
I know|ich weiß|je sais|я знаю
I want …|ich will …|je veux …|я хочу …
I need …|ich brauche …|j'ai besoin de …|мне нужно …
I have …|ich habe …|j'ai …|у меня есть …
I don't have …|ich habe kein …|je n'ai pas de …|у меня нет …
I like it|das gefällt mir|ça me plaît|мне нравится
I don't like it|das gefällt mir nicht|ça ne me plaît pas|мне не нравится
where do you live?|wo wohnst du?|tu habites où ?|где ты живёшь?
I live in …|ich wohne in …|j'habite à …|я живу в …
where are you from?|woher kommst du?|tu viens d'où ?|откуда ты?
I am from …|ich komme aus …|je viens de …|я из …
how old are you?|wie alt bist du?|tu as quel âge ?|сколько тебе лет?
I am … years old|ich bin … Jahre alt|j'ai … ans|мне … лет
wait a moment|warte kurz|attends un moment|подожди минутку
come here|komm her|viens ici|иди сюда
of course|natürlich|bien sûr|конечно
no problem|kein Problem|pas de problème|без проблем
really?|wirklich?|vraiment ?|правда?
I agree|einverstanden|je suis d'accord|я согласен
good luck|viel Glück|bonne chance|удачи
congratulations|herzlichen Glückwunsch|félicitations|поздравляю
enjoy your meal|guten Appetit|bon appétit|приятного аппетита
have a nice day|schönen Tag noch|bonne journée|хорошего дня
call me|ruf mich an|appelle-moi|позвони мне
I'm coming|ich komme|j'arrive|иду
I'm late|ich bin spät dran|je suis en retard|я опаздываю
it's important|es ist wichtig|c'est important|это важно`}
];
