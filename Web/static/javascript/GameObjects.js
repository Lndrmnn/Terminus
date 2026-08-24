/**
* Objects used to build levels
*/

/**
* ROOMS
* Players can cd between rooms
*
* API: Room(roomname, introtext, img){
*/

//HOME
var Home = new Room("Home",
    "Estás en la comodidad de tu propio hogar.",
    "loc_farm.gif");
Home.addItem(new Item("WelcomeLetter", "¡Bienvenido a Terminus! Si eres nuevo en el juego, aquí tienes algunos consejos: \n\n" +
		"• Mira a tu alrededor con el comando \"ls\". \n" +
		"• Muévete a una nueva ubicación con el comando \"cd UBICACION\" \n" +
		"• Puedes retroceder con el comando \"cd ..\". \n" +
		"• Interactúa con cosas y personajes con el comando \"less OBJETO\" (o \"cat OBJETO\") \n\n" +
        "• Si olvidas dónde estás, escribe \"pwd\" \n\n" + 
		"Adelante, explora. Esperamos que disfrutes lo que encuentres. Escribe ls como tu primer comando.\n"));

//WESTERN FOREST
var WesternForest = new Room("WesternForest",
    "Te adentras en lo profundo del bosque. \
Con el tiempo, el sendero conduce a un claro con un edificio grande e impresionante. Un cartel \
dice: Academia de Lanzamiento de Hechizos: La Escuela de Élite de Magia.",
    "loc_forest.gif");
WesternForest.addItem(new Item("Sign",
    "Academia de Lanzamiento de Hechizos: La Escuela de Élite de Magia \
¡Solo por hoy: Lecciones introductorias gratis! ¡Novatos bienvenidos!",
    "loc_forest.gif"));
WesternForest.addItem(new Item("BackSign",
    "Si alguna vez deseas regresar directamente a Home, solo escribe 'cd ~' o simplemente 'cd' \
y volverás a Home. Aunque regresar hasta aquí podría ser más difícil.",
    "loc_forest.gif"));

//SPELL CASTING ACADEMY
var SpellCastingAcademy = new Room("SpellCastingAcademy", 
    "Los pasillos están llenos del ajetreo \
y bullicio de los estudiantes de la academia que van y vienen de sus clases. El interior de la \
academia es tan impresionante como el exterior, con techos altos y arcos góticos, \
parece aún más grande por dentro.", 
    "loc_academy.gif");
var HurryingStudent = new Item("HurryingStudent", 
    "Hablas con un estudiante que va con prisa. \
El estudiante choca contigo y cae al suelo. \
Se levanta rápidamente \
y se disculpa contigo, preguntando si estás bien. Eres más resistente de lo que pareces y \
estás ileso. «¡Lo siento tanto! Tenía tanta prisa que no te vi... \
Oye, no te había visto por aquí antes. Eres nuevo por aquí, ¿verdad?» el \
estudiante te guiña un ojo, «No te preocupes, hay montones de novatos hoy, \
¿por qué no pruebas a revisar una de las lecciones introductorias gratuitas? Te mostraría a dónde \
ir, pero tengo que correr a clase. Solo dirígete a la sala de Lessons y alguien \
te ayudará. ¡Nos vemos!» El estudiante pasa corriendo a tu lado. Notas que \
es bastante agradable y probablemente de tu misma edad. Por desgracia, \
desaparece tras una esquina antes de que puedas preguntarle su nombre.", 
    "item_student.gif")
SpellCastingAcademy.addItem(HurryingStudent);

//PRACTICE ROOM
var PracticeRoom = new Room("PracticeRoom", 
    "La sala está llena de muñecos de entrenamiento \
para que los estudiantes practiquen sus nuevos hechizos.",
    "loc_practiceroom.gif");
PracticeRoom.addItem(new Item("Instructions", 
    "Bienvenido a la Practice Room. Aquí \
encontrarás muñecos de entrenamiento para probar tus nuevos hechizos. ¡Adelante, pruébalo! \
Si aún no conoces ningún hechizo, regresa y revisa algunas Lessons.", 
    "item_manuscript.gif"));
PracticeRoom.addItem(new Item("PracticeDummy1", "Es un muñeco de entrenamiento", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy2", "Es un muñeco de entrenamiento", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy3", "Es un muñeco de entrenamiento", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy4", "Es un muñeco de entrenamiento", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy5", "Es un muñeco de entrenamiento", "item_dummy.gif"));
PracticeRoom.addCommand("mv");

//BOX
var Box = new Room("Box", "Esta caja es demasiado pequeña para que quepas dentro.", "item_box.gif");
Box.removeCommand("cd");
Box.addCmdText("cd", "Eres demasiado pequeño para caber en la caja.");

//NORTHERN MEADOW
var NorthernMeadow = new Room("NorthernMeadow", 
    "Este es un hermoso prado verde. Un pony regordete pero majestuoso se pasea felizmente.",
    "loc_meadow.gif");
NorthernMeadow.addItem(new Item("Pony", 
    "Te acercas al pony e intentas montarlo. \
El pony colabora y paseas en círculos durante un rato. Luego se cansa \
de llevarte como carga y te desmonta. Después mira hacia el este, como \
sugiriendo que te dirijas en esa dirección.", 
    "item_fatpony.gif"));

//EASTERN MOUNTAINS
var EasternMountains = new Room("EasternMountains", 
    "Viajas por un sendero de montaña que con el tiempo te conduce a la entrada de una cueva. \
Sentado justo afuera de esta cueva hay un anciano.", 
    "loc_mountains.gif");
EasternMountains.addItem(new Item("OldMan", 
    "Hablas con el anciano. Te saluda \
cálidamente como si fueran viejos amigos. Te sientes a gusto con él. \n\
«¡Hola, aventurero! ¡Muy buenos días! Pareces un explorador joven y lleno de energía. \
Si eres lo suficientemente valiente, tu destino te espera dentro de esta cueva. Ese \
destino se manifestará como un portal. Entra en este portal y comienza el siguiente \
capítulo de tu vida.»\n\
El anciano ve la sorpresa en tu rostro y te dedica una sonrisa \
reconfortante: «No soy más que un anciano frágil y no puedo acompañarte a través de \
esta cueva, pero lo que sí puedo ofrecerte son unos sencillos hechizos que te ayudarán \
en tu camino. Solo lee mis viejos manuscritos y prueba esos hechizos.»", 
	"item_mysteryman.gif"));
EasternMountains.addItem(new Item("OldManuscripts", 
    "Si alguna vez olvidas un hechizo, solo usa \
\"help\" y aparecerá una lista de los hechizos disponibles. Si necesitas detalles sobre cómo \
usar un hechizo específico, usa 'man' seguido del comando del hechizo. Por ejemplo, \
si te interesan los detalles sobre cómo usar el hechizo \"mv\", usarías: \
man mv",
    "item_manuscript.gif"));

//LESSONS
var Lessons = new Room("Lessons", 
    "Entras al aula de Lessons listo y entusiasmado. \
Es mucho más tranquila que los pasillos principales de la academia. Al frente del aula, un distinguido \
profesor está de pie junto a una pizarra.", 
    "loc_classroom.gif");
Lessons.addItem(new Item("Professor", 
    "«¡Ah, un nuevo estudiante! Bienvenido a tu primera lección de magia de terminal. En esta clase, \
aprenderás los fundamentos del lanzamiento de hechizos. Recuerda que la precisión es clave: un solo \
carácter fuera de lugar puede hacer que un hechizo falle o produzca resultados inesperados. \
Presta mucha atención a tus instrucciones y siempre consulta el manual cuando tengas dudas. \
¡Adelante, prueba tus hechizos!»", 
    "item_professor.gif"));
Lessons.addItem(new Item("Sign", 
    "Reglas del Aula:\n1. Mantén la concentración en todo momento.\n2. Lee cuidadosamente las descripciones de los objetos.\n3. Practica tus comandos con regularidad.", 
    "item_sign.gif"));

//CAVE
var Cave = new Room("Cave", 
    "Es una cueva típica: oscura y húmeda. \
El suelo rocoso y las paredes de piedra resuenan con el goteo constante de agua. \
Hacia el norte, un pasillo oscuro se adentra aún más en las profundidades.", 
    "loc_cave.gif");

//DARK CORRIDOR
var DarkCorridor = new Room("DarkCorridor", 
    "Viajas a través del pasillo oscuro y encuentras una pequeña y húmeda sala.", 
    "loc_corridor.gif");

//STAIRCASE
var Staircase = new Room("Staircase", 
    "La escalera rocosa te conduce a un callejón sin salida y un cartel que indica que hay obras en construcción.", 
    "loc_stair.gif");
Staircase.addItem(new Item("Sign", "ZONA EN CONSTRUCCIÓN / UNDER CONSTRUCTION", "item_sign.gif"));

//DANK ROOM
var DankRoom = new Room("DankRoom", 
    "Es una habitación húmeda y con olor a moho. Una roca redonda se encuentra al lado derecho de la habitación. \
Al lado izquierdo, notas un pequeño agujero en la pared.",
    "loc_darkroom.gif");
var Boulder = new Item("Boulder", 
    "Una roca redonda y bastante pesada que parece bloquear algo importante. \
¿Quizás moverla fuera de tu camino usando el hechizo mv?",
    "item_boulder.gif")
DankRoom.addItem(Boulder);
DankRoom.addCommand("mv");

//SMALL HOLE
var SmallHole = new Room("SmallHole", 
    "No hay nada emocionante en el pequeño agujero y está bastante sucio. \
No hay ninguna razón real para entrar al agujero.",
    "none.gif");
SmallHole.addCmdText("cd", 
    "No hay nada emocionante en el pequeño agujero y está bastante sucio. Sugiero salir de aquí.");
//add event handler to the "addItem" method of SmallHole to cause the rest of the level to be connected
DankRoom.ev.addListener("mvBoulder", function(){
	// link_rooms(DankRoom, Tunnel);
    state.applyState("mvBoulder");
});

//TUNNEL
var Tunnel = new Room("Tunnel", 
    "Está bastante húmedo aquí adentro. \
Notas un pequeño movimiento peludo en el rabillo del ojo. \
Probablemente sea una rata. Una rata muy grande. O tal vez una mangosta. \
Al final del túnel encuentras una cámara de piedra.",
    "loc_tunnel.gif");
Tunnel.addItem(new Item("Rat", 
    "Tras una inspección más detallada, determinas que la presencia \
peluda es en efecto una rata... del tamaño de un perro pequeño. Te muerde. \
Estás muy disgustado.",
    "item_rat.gif"));

//STONE CHAMBER
var StoneChamber = new Room("StoneChamber", 
    "Toda la sala brilla con una tenue luz verde. \
La fuente de esta luz es un portal ubicado en el centro de la habitación. \
Este es obviamente el portal del cual habló el anciano.", 
    "loc_portalroom.gif");

//PORTAL (to bring you to the next level
var Portal = new Room("Portal", 
    "Has sido transportado a través del espacio y el tiempo...", 
    "item_portal.gif");
//---------------END LEVEL 1-----------------


//---------------LEVEL 2---------------------
//TOWN SQUARE
var TownSquare = new Room("TownSquare", 
    "Estás en una plaza soleada y espaciosa. \
Hay un pedestal en el centro de la rotonda de adoquines, pero no hay ninguna estatua sobre él. \
La arquitectura es encantadora, pero todos aquí parecen nerviosos por alguna razón.",
    "loc_square.gif");
TownSquare.addItem(new Item("RandomCitizen1", 
    "«Disculpe», comienzas a decir. El hombre se gira, sorprendido. \
«¡Oh, hola! Bienvenido a Terminus. Tendrás que disculparme, pero todos estamos un poco \
nerviosos últimamente, con el Mago Oscuro (Dark Wizard) extendiendo su corrupción por toda la \
costa. ¡Deberías tener mucho cuidado!»",
    "item_citizen1.gif"));
TownSquare.addItem(new Item("RandomCitizen2", 
    "El hombre levanta la vista de su periódico cuando nota que lo estás mirando. \
«¿Has leído esto?», exclama, agitando la última edición de «La Última Palabra» frente a tu cara. \
«¡Dice aquí que la corrupción del mago se ha extendido hasta Oston al sur, y New Console \
es completamente irrecuperable! Son tiempos peligrosos», murmura, sacudiendo la cabeza y volviendo a su lectura.",
    "item_citizen2.gif"));
TownSquare.addItem(new Item("DistraughtLady", 
    "La mujer está sollozando desconsoladamente con el rostro entre sus manos. \
«Mi niña», llora, «¡secuestraron a mi pequeña! Sé que ese mago tuvo \
algo que ver con esto.»",
    "item_lady.gif"));

//MARKETPLACE
var Marketplace = new Room("Marketplace", 
    "Comerciantes y sus mercancías llenan las calles.",
    "loc_market.gif");
var Vendor = new Item("Vendor", 
    "«'Ola qué tal.» El comerciante te sonríe con una mueca peculiar, \
revelando una dentadura llena de dientes de oro. «¿Y bien? ¿Qué estás buscando?»",
    "item_merchant.gif");
Vendor.addCmdText("rm", 
    "«¡Ja! Ese hechizo no funciona en todo, ¿sabes? Puede que haya olvidado \
mencionarlo antes de vendértelo...»");
Marketplace.addItem(Vendor);

var RmSpell = new Item("rmSpell", 
    "«Ah, sí, el hechizo rm», reflexiona el comerciante. «Simplemente di \"rm\" seguido del nombre de un objeto o persona, \
y desaparecerá de este plano... para siempre. ¿Tienes las agallas para usarlo, me pregunto?»",
    "item_manuscript.gif");
Marketplace.addItem(RmSpell);

var MkdirSpell = new Item("mkdirSpell",
    "«Convierte los sueños en realidad. Solo di \"mkdir\" seguido de cualquier nombre que desees, y podrás crear un nuevo lugar que \
nunca antes existió allí. Aunque es un poco caprichoso...», murmura el comerciante.",
    "item_manuscript.gif");
Marketplace.addItem(MkdirSpell);

//LIBRARY
var Library = new Room("Library", 
    "La Biblioteca está tenuemente iluminada y huele a pergamino viejo y moho. \
Aún así, es cálida y la suave alfombra verde la hace parecer bastante acogedora.",
    "loc_library.gif");
Library.addItem(new Item("TotallyRadSpellbook",
    "Las leyendas hablan de una gran palabra de poder que permite a quien la pronuncie ejecutar \
cualquier acción sobre cualquier objeto. \"Sudo\", como la llamaban los antiguos, confiere un dominio absoluto sobre los elementos. \
Desafortunadamente, o quizás por fortuna, la contraseña mística se ha perdido \
en las arenas del tiempo.",
    "item_radspellbook.gif"));
Library.addItem(new Item("PaperbackRomance", 
    "Abres la novela de bolsillo en una página al azar. \
«¡Oh, Horacio, no temas mi amor! ¡Yo te salvaré!», exclamó Antonia mientras \
blandía su espada y apuñalaba con destreza al dragón. Horacio, atónito de no haber tenido una muerte ardiente, \
se desplomó en el suelo sollozando y... — Cierras el \
libro, desinteresado, y lo colocas de vuelta en la estantería.",
    "item_romancenovel.gif"));
Library.addItem(new Item("HistoryOfTerminus", 
    "Parece un libro fascinante, pero es demasiado largo y la letra es minúscula. \
Aquí hay un extracto:\n \
DarkWizard', '...viejos relatos cuentan sobre un DarkWizard que fragmentará la tierra...\n \
...solo el creador del mundo puede detener el virus del DarkWizard de...\n\
...que el poder de \"sudo\" puede ser la única debilidad del DarkWizard...\n",
    "item_historybook.gif"));
Library.addItem(new Item("NostalgiaForHome", 
    "Si alguna vez sientes nostalgia por Home, solo escribe 'cd ~' y regresarás allí. \
Pero recuerda que será más difícil volver.",
    "item_historybook.gif"));

//BACK ROOM
var BackRoom = new Room("BackRoom", 
    "Encuentras una misteriosa trastienda secreta. Hay un bibliotecario \
trabajando intensamente junto a una criatura extraña y pequeña.",
    "loc_backroom.gif");
BackRoom.addItem(new Item("Grep", 
    "Una criatura pequeña y leal de color verde que responde al nombre de Grep. Emite un suave «Greeepp» y parece lista para ayudarte a buscar cualquier palabra o frase en textos extensos.",
    "grep.gif"));
BackRoom.addItem(new Item("PracticeBook", 
    "Sally picked a peck\nOf seashelled peppers.\nA seashore of pickled pickles\n\
did Peter and Sally pick."));
var Librarian = new Item("Librarian", 
    "«¿Mm? Ah, hola. Disculpa el desorden, pero estoy muy ocupado \
investigando sobre el mago oscuro. ¿Me harías un favor? Busca todas las \
referencias a DarkWizard en HistoryOfTerminus. Mi asistente Grep \
puede ayudarte.» \
Grep te mira fijamente. «Greeepp.» «Para buscar en el contenido de un libro, solo escribe \
\"grep FRASE OBJETO\", donde FRASE es la palabra que deseas buscar, \
y OBJETO es el nombre del libro que deseas consultar. Pruébalo con el PracticeBook aquí \
- a ver si puedes encontrar la línea con la palabra 'peppers'.»",
    "item_librarian.gif");
BackRoom.addItem(Librarian);
BackRoom.addCommand("grep");

//ROCKY PATH
var RockyPath = new Room("RockyPath",
    "El sendero invadido por la maleza se dirige hacia los campos abiertos.",
    "loc_rockypath.gif");
var LargeBoulder = new Item("LargeBoulder", "Hay una enorme roca bloqueando tu camino. Es demasiado grande para moverla con las manos.", "item_boulder.gif");
LargeBoulder.addCmdText("rm", "La roca desaparece con un chasquido mágico.");
RockyPath.addItem(LargeBoulder);
RockyPath.addCommand("rm");
LargeBoulder.addValidCmd("rm");
RockyPath.ev.addListener("rmLargeBoulder", function(){
    state.applyState("rmLargeBoulder");
});

//ARTISAN'S SHOP
var ArtisanShop = new Room("ArtisanShop", 
    "Las paredes del taller están cubiertas de relojes, \
todos ligeramente desfasados entre sí. En el banco de trabajo, una mujer con unas gafas enormes \
empuña un soplete con un entusiasmo aterrador.",
    "loc_artisanshop.gif");
var StrangeTrinket = new Item("StrangeTrinket", "Parece una especie de cristal mágico. Es muy hermoso y emite un suave brillo.", "item_trinket.gif");
StrangeTrinket.addCmdText("rm", 
    "¿Acaso tu madre no te enseñó que es de mala educación borrar las pertenencias de otros de su plano de existencia?");
StrangeTrinket.addCmdText("mv", 
    "¡No puedes llevarte eso, no es tuyo!");
ArtisanShop.addItem(StrangeTrinket);
var ClockworkDragon = new Item("ClockworkDragon",
    "Un dragón mecánico del tamaño de un perro pequeño juguetea por la habitación. \
Creerías que es real si no fuera por la llave de cuerda en su espalda.",
    "item_clockdragon.gif");
ClockworkDragon.addCmdText("rm",  
    "¿Acaso tu madre no te enseñó que es de mala educación borrar las pertenencias de otros de su plano de existencia?");
ClockworkDragon.addCmdText("mv", 
    "¡No puedes llevarte eso, no es tuyo!");
ArtisanShop.addItem(ClockworkDragon);
var Artisan = new Item("Artisan", 
    "La artesana se sube las gafas protectoras y te mira con \
sorpresa. «¿Eres el nuevo asistente? ¡Llegas tarde! ...  \
\n\
¿Dices que no eres mi asistente? \
Bueno, eso no significa que no puedas ser útil. ¡Necesito algunos engranajes rápidamente! \
\n\
... \
\n\
¿Ni siquiera sabes cómo fabricar cosas? Hmph. Vaya asistente. Solo \
di \"touch OBJETO\", ¿entendido? Donde OBJETO es el nombre de lo que quieres crear. \
¡Ahora hazme un Gear! Y luego vuelve.»",
    "item_artisan.gif");
ArtisanShop.addItem(Artisan);
ArtisanShop.addCommand("touch");
ArtisanShop.ev.addListener("touchGear", function(){
    state.applyState("touchGear");
});
ArtisanShop.ev.addListener("FiveGearsCopied", function(){
    state.applyState("FiveGearsCopied");
});

//FARM
var Farm = new Room("Farm",
    "Alguna vez hubo una granja aquí, pero ahora los campos están quemados y marchitos.",
    "loc_farm.gif");
var EarOfCorn = new Item("EarOfCorn",
    "La mazorca de maíz luce triste y marchita.",
    "item_corn.gif");
EarOfCorn.addCmdText("rm",
    "¿Por qué destruirías la única comida de un hombre hambriento?");
Farm.addItem(EarOfCorn);
var Farmer = new Item("Farmer", 
    "«¡Arruinado! ¡Estoy arruinado! Mira estos cultivos... ¡casi no queda \
nada! Los esbirros del mago estuvieron aquí la semana pasada... destruyeron todo. ¿Cómo \
alimentaré a mis 3 hijos con solo una mazorca de maíz? ¡Me vendría muy bien AnotherEarOfCorn!»",
    "item_farmer.gif");
Farm.addItem(Farmer);
Farm.addCommand("cp");
Farm.ev.addListener("CornCopied", function(){
    state.applyState("CornCopied");
});

//CLEARING
var Clearing = new Room("Clearing", 
    "Hay un pequeño claro de hierba aquí, con un hombre sentado sobre una \
piedra, llorando. Detrás de él hay una pila de escombros.",
    "loc_clearing.gif");
var CryingMan = new Item("CryingMan", 
    "«¡Tú! ¡Eres un usuario de magia! Me doy cuenta, tienes esa mirada. \
¿Vienes a terminar el trabajo? Bueno, adelante, haz lo peor que puedas, no queda nada más que \
puedas quitarme. No desde que los demás de ustedes estuvieron aquí hace unos días.» \
\n\n\
«¿Qué pasó? ¿Te ATREVES a preguntar? Sabes perfectamente bien lo que pasó. \
¡Tus amigos, los esbirros del mago, destruyeron mi casa y secuestraron a mi pobre \
hija! Mi esposa incluso fue a la ciudad a buscar ayuda, ¡y no he \
sabido de ella desde entonces!» \
\n\n\
«¿Mm? Bueno, supongo que es verdad que no te pareces a uno de los esbirros del mago. Aún así, \
no confío en la gente mágica. Si realmente eres quien dices ser, ¡demuestra tus \
buenas intenciones construyéndome una nueva House!»",
    "item_man.gif");
Clearing.addItem(CryingMan);
Clearing.removeCommand("cd");
Clearing.addCmdText("cd", "No puedes cruzar el puente hasta que hayas reemplazado el Plank faltante.");
Clearing.addCommand("mkdir");
Clearing.ev.addListener("HouseMade", function(){
    state.applyState("HouseMade");    
});

//BROKEN BRIDGE
var BrokenBridge = new Room("BrokenBridge",
    "Un puente de madera crujiente se extiende a través de un abismo. Pero le falta un \
Plank, y la brecha es demasiado ancha para saltar.",
    "loc_bridge.gif");
BrokenBridge.addCommand("touch");
BrokenBridge.ev.addListener("touchPlank", function(){
    state.applyState("touchPlank");
});
		
//OMINOUS-LOOKING PATH
var OminousLookingPath = new Room("OminousLookingPath", 
    "El sendero conduce hacia una cueva oscura. Es un camino de adoquines común, pero por \
alguna razón te llena de una sensación de pavor.",
    "loc_path.gif");
var ThornyBrambles = new Item("ThornyBrambles", 
    "Esta maraña de zarzas está cubierta de espinas de aspecto amenazante. No \
puedes rodearla y definitivamente no vas a atravesarla a pie. Y sin embargo, algo \
te dice que realmente quieres pasar.",
    "item_brambles.gif");
ThornyBrambles.addCmdText("mv",
    "No puedes tocarlas porque están cubiertas de espinas afiladas. ¡Ay!");
ThornyBrambles.addCmdText("rm", 
    "Pronuncias las palabras del hechizo Remove y las zarzas brillan con un \
azul intenso. Tras chisporrotear un instante, desaparecen en una nube de humo.");
ThornyBrambles.addValidCmd("rm");
OminousLookingPath.addItem(ThornyBrambles);
OminousLookingPath.addCommand("rm");
OminousLookingPath.ev.addListener("rmBrambles", function(){
    state.applyState("rmBrambles");
});

//SLIDE
var Slide = new Room("Slide", "El tobogán es largo. Al final, alcanzas a ver los KernelFiles.");
Slide.removeCommand("cd");
Slide.addCmdText("cd", "Primero tienes que superar al UglyTroll.");

//KERNEL FILES
var KernelFiles = new Room("KernelFiles", "Los KernelFiles contienen el secreto de sudo (no, no es \
pseudo). Será mejor que leas las Instructions.")
var Certificate = new Item("Certificate", "Debes leer el Certificate con la contraseña de sudo.");
Certificate.addCmdText("sudo", "Password:");
Certificate.addCmdText("IHTFP", "Has ingresado correctamente la contraseña. Ahora estás en Paradise. \
El juego ha finalizado. Puedes salir del juego escribiendo \"exit\" o simplemente cerrando la ventana.");
KernelFiles.addItem(Certificate);
var Instructions = new Item("Instructions", "Veo que has aprendido a hacer uso de tu amigo grep. \
Si no lo has hecho, sería prudente que regresaras a la Library para investigar un poco. \
Porque aquí, necesitarás usarlo para que te ayude. Esta es tu misión: \n\
Hay una gran cantidad de archivos en la sala MoreKernelFiles y uno de ellos contiene la contraseña de sudo. Esta \
contraseña es sumamente poderosa y te permite hacer absolutamente cualquier cosa en el mundo. \
Te permite lanzar un hechizo sobre cualquier objeto que esté protegido de cualquier manera. Sabes que la contraseña \
está contenida en uno de estos objetos .txt. Sabes que aparece \
en una línea que contiene la palabra: 'password='. Deberías encontrarla con la ayuda de grep. \
Luego necesitarás usar el hechizo sudo para encontrar Paradise. Para hacer esto, simplemente \
escribe 'sudo' antes del comando que deseas ejecutar, como por ejemplo: \
'sudo less Certificate'. Luego se te pedirá la contraseña de sudo. \
Escribe la contraseña y el hechizo que sigue a sudo se ejecutará. Si abres \
el Certificate en Paradise con sudo, ¡habrás encontrado verdaderamente el Paraíso!");
KernelFiles.addItem(Instructions);

//MORE KERNEL FILES
var MoreKernelFiles = new Room("MoreKernelFiles", "¡Hay muchísimos archivos aquí!");

var L_txt = new Item("L_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var M_txt = new Item("M_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
// var N_txt = new Item("N_txt", "INSERT SOME LONG TEXT");
// var O_txt = new Item("O_txt", "INSERT SOME LONG TEXT");
// var P_txt = new Item("P_txt", "INSERT SOME LONG TEXT");
var Q_txt = new Item("Q_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var R_txt = new Item("R_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var S_txt = new Item("S_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var T_txt = new Item("T_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var U_txt = new Item("U_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find password=IHTFP another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var V_txt = new Item("V_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var W_txt = new Item("W_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
// var X_txt = new Item("X_txt", "INSERT SOME LONG TEXT");
// var Y_txt = new Item("Y_txt", "INSERT SOME LONG TEXT");
// var Z_txt = new Item("Z_txt", "INSERT SOME LONG TEXT");
// var AA_txt = new Item("AA_txt", "INSERT SOME LONG TEXT");
// var BB_txt = new Item("BB_txt", "INSERT SOME LONG TEXT");
// var CC_txt = new Item("CC_txt", "INSERT SOME LONG TEXT");
// var DD_txt = new Item("DD_txt", "INSERT SOME LONG TEXT");
// var EE_txt = new Item("EE_txt", "INSERT SOME LONG TEXT");
// var FF_txt = new Item("FF_txt", "INSERT SOME LONG TEXT");
var MoreKernelFiles = new Room("MoreKernelFiles", "There are so many files here!");
MoreKernelFiles.addItem(L_txt);
MoreKernelFiles.addItem(M_txt);
// MoreKernelFiles.addItem(N_txt);
// MoreKernelFiles.addItem(O_txt);
// MoreKernelFiles.addItem(P_txt);
MoreKernelFiles.addItem(Q_txt);
MoreKernelFiles.addItem(R_txt);
MoreKernelFiles.addItem(S_txt);
MoreKernelFiles.addItem(T_txt);
MoreKernelFiles.addItem(U_txt);
MoreKernelFiles.addItem(V_txt);
MoreKernelFiles.addItem(W_txt);
// MoreKernelFiles.addItem(X_txt);
// MoreKernelFiles.addItem(Y_txt);
// MoreKernelFiles.addItem(Z_txt);
// MoreKernelFiles.addItem(AA_txt);
// MoreKernelFiles.addItem(BB_txt);
// MoreKernelFiles.addItem(CC_txt);
// MoreKernelFiles.addItem(DD_txt);
// MoreKernelFiles.addItem(EE_txt);
// MoreKernelFiles.addItem(FF_txt);
KernelFiles.addItem(Instructions);
KernelFiles.addCommand("sudo");
KernelFiles.addCmdText("sudo", "Password:");
MoreKernelFiles.addCommand("grep");
KernelFiles.ev.addListener("tryEnterSudo", function(){
    KernelFiles.addCommand("IHTFP");
    KernelFiles.addCmdText("IHTFP", "You have correctly entered the password. You are now in Paradise. \
Take a look around, and congratulations.");
});
KernelFiles.ev.addListener("sudoComplete", function(){
    state.applyState("sudoComplete");
});



//PARADISE (end game screen)
var Paradise = new Room("Paradise", "¡Has encontrado verdaderamente el Paraíso con la contraseña de sudo! \
¡Felicitaciones! Has completado el juego Terminus y has dominado los hechizos fundamentales de la terminal.", "loc_theend.gif");
Paradise.addCmdText("ls", "Realmente no hay nada más que necesites hacer aquí en Paradise. ¡Eres un maestro de la terminal!");

//CAVE OF DISGRUNTLED TROLLS
var CaveOfDisgruntledTrolls = new Room("CaveOfDisgruntledTrolls", 
    "La cueva es oscura y huele a... ¿pies? Ah, claro, probablemente sea por los trols.",
    "loc_cave.gif");
var UglyTroll = new Item("UglyTroll", 
    "Un troll enorme, feo y de aspecto gruñón bloquea el acceso al tobogán. Te gruñe amenazadoramente.",
    "item_troll1.gif");
UglyTroll.addValidCmd("mv");
UglyTroll.addValidCmd("rm");
UglyTroll.addCmdText("mv",
    "El troll parece brevemente sorprendido y luego se aparta. En su mayoría es inofensivo una vez que lo mueves.");
UglyTroll.addCmdText("rm",
    "El troll parece brevemente sorprendido, luego se desvanece con un desagradable sonido viscoso.");
CaveOfDisgruntledTrolls.addItem(UglyTroll);

var UglierTroll = new Item("UglierTroll",
    "Este troll es aún más feo que el primero. Parece estar muy molesto por tu presencia.",
    "item_troll2.gif");
UglierTroll.addCmdText("cp", "¡Se están multiplicando!");
UglierTroll.addValidCmd("rm");
UglierTroll.addCmdText("rm",
    "El troll parece brevemente sorprendido, luego se desvanece con un desagradable sonido viscoso.");
CaveOfDisgruntledTrolls.addItem(UglierTroll);

var HideousTroll = new Item("AbsolutelyHideousTroll", 
    "Probablemente no quieras mirar a este sujeto. Ups, demasiado tarde.",
    "item_supertroll.gif");
HideousTroll.addCmdText("rm", 
    "El troll eructa espectacularmente y jurarías que sonríe con sorna. \
No te librarás de él tan fácilmente, no sin la 'sudo password'. No es \
'pseudo', es 'sudo'. La encontrarás en KernelFiles. Pero primero tienes que \
pasar al UglyTroll para llegar al Slide.");
HideousTroll.addCmdText("mv", 
    "Si lo sacas de la cueva, aterrorizará a todo el campo. Además, probablemente te comerá.");
CaveOfDisgruntledTrolls.addItem(HideousTroll);
CaveOfDisgruntledTrolls.addCommand("rm");
CaveOfDisgruntledTrolls.addCommand("mv");
CaveOfDisgruntledTrolls.addCommand("cp");
CaveOfDisgruntledTrolls.ev.addListener("openSlide", function(){
    state.applyState("openSlide");
});

//CAGE
var Cage = new Room("Cage", 
    "Hay un niño o niña con aspecto asustado dentro de la jaula.",
    "item_cage.gif");
var KidnappedChild = new Item("KidnappedChild",
    "Sabes que no está bien juzgar, pero no puedes evitar pensar que es una criatura de aspecto bastante cómico.",
    "item_cagedboy.gif");
Cage.removeCommand("cd");
Cage.addCmdText("cd", "No puedes escurrirte entre los barrotes. Además, ¿te has vuelto loco? \
    ¿Por qué querrías meterte en una jaula?");
KidnappedChild.addCmdText("mv", 
    "La pequeña mira a su alrededor, aturdida, sorprendida de encontrarse fuera de la jaula. \
Le sonríes y le hablas con voz suave: 'Probablemente deberías ir a casa, \
muchachito. Alguien te está esperando allí.' \
'¡Soy una niña!', responde con picardía. Luego pasa corriendo a tu lado, sale de la cueva y \
corre por el sendero hacia su hogar.");
Cage.addItem(KidnappedChild);

//Athena cluster
var AthenaCluster = new Room("AthenaCluster", "Nadie pasará sin la combinación. \
Tienes una oportunidad para ingresar la combinación. Ingresa la contraseña:",
"loc_cluster.gif");
var Workstation = new Item("Workstation", "La Workstation cuenta con recursos que puedes usar para \
acceder a archivos en un locker conjunto de Athena. Añade nuevas habitaciones (cuando están en tu Home las \
llamamos casilleros o lockers) a tu Home, y puedes \
añadirlas a tu colección de lockers si tienes permiso. Si sabes qué deseas añadir \
a tu Home (el nombre del casillero que quieres), solo escribe 'add NOMBRELOCKER' (ej. 'add MagicLocker'). Te \
otorga hechizos adicionales (si los aprendes), y te brinda más habitaciones para explorar.",
"item_workstation.gif")
AthenaCluster.addItem(Workstation);
AthenaCluster.removeCommand("ls");
AthenaCluster.addCmdText("ls", "Debes ingresar la combinación del Athena cluster primero.");
AthenaCluster.removeCommand("cd");
AthenaCluster.addCmdText("cd", "Nadie pasará sin la combinación. \
Tienes una oportunidad para ingresar la combinación. Ingresa la contraseña:")
AthenaCluster.ev.addListener("AthenaClusterExited", function(){
    AthenaCluster.removeCommand("cd");
});
AthenaCluster.addCommand("tellme");
AthenaCluster.addCommand("add");
var add_locker_func = function(){
    state.applyState("addMagicLocker");
};
AthenaCluster.ev.addListener("addMagicLocker", add_locker_func);

//MIT
var MIT = new Room("MIT", "¡Has llegado en alfombra mágica al MIT!", "loc_MIT.gif");
var AdmissionLetter = new Item("AdmissionLetter", "¡Felicitaciones por ingresar al MIT! \
Aquí aprenderás hechizos especiales que solo puedes usar en el MIT. ¡Disfrútalo!", "item_manuscript.gif")
MIT.addItem(AdmissionLetter);
MIT.ev.addListener("tryEnterAthenaCluster", function(){
    MIT.addCommand("terminus");
    MIT.addCmdText("terminus", "Has ingresado correctamente la combinación del clúster. Entrando a AthenaCluster.");
    AthenaCluster.removeCommand("ls");
    AthenaCluster.addCmdText("ls", "Debes ingresar la combinación del Athena cluster primero.");
});
MIT.ev.addListener("AthenaComboEntered", function(){
    state.applyState("AthenaComboEntered");
});
MIT.addCommand("tellme");
MIT.addCommand("add");
MIT.ev.addListener("addMagicLocker", add_locker_func);

//StataCenter
var StataCenter = new Room("StataCenter",
"El centro de investigación en ciencias de la computación e inteligencia artificial del MIT. Mucha \
magia sucede aquí, incluyendo TAs, estudiantes de posgrado, etc.",
"loc_stata.gif");
var WaryEyeOfGradStudent = new Item("WaryEyeOfGradStudent", "Si lo deseas, puedes añadir \
un nuevo MagicLocker fuera de tu Home. En este MagicLocker puedes encontrar algunas herramientas que \
serán útiles en tu tiempo en el MIT (y más allá). Allí puedes encontrar portales a \
otros lugares, escribir notas y guardar varios objetos que recolectes en \
tus viajes en el MagicLocker. Pero primero necesitas ir al AthenaCluster y \
aprender cómo.",
"item_grad.gif");
StataCenter.addItem(WaryEyeOfGradStudent);
var HelpfulTA = new Item("HelpfulTA", "Ah, bienvenido a la maravillosa tierra de Stata. \
Hay una habitación aquí para la cual necesitarás la combinación. Todo lo que tienes que hacer es preguntar:\n \
'tellme combo'.",
"item_TA.gif");
StataCenter.addItem(HelpfulTA);
StataCenter.addCommand("tellme");
StataCenter.addCommand("add");
StataCenter.ev.addListener("addMagicLocker", add_locker_func);

//Magic locker
var MagicLocker = new Room("MagicLocker", "Esto contiene objetos y hechizos que se pueden usar \
en cualquier parte del mundo después de añadir el casillero. Más novedades próximamente.", "item_locker.gif");
var MoreComing = new Item("MoreComing", "El MagicLocker contiene objetos que se pueden \
usar (y hechizos que se pueden usar) en cualquier otra parte del juego una vez que añades \
el casillero. El MIT realiza actualizaciones con frecuencia, ¡así que vuelve a revisar \
pronto!", "item_comingsoon.gif");
MagicLocker.addItem(MoreComing);

/**
* LINKS BETWEEN ROOMS
* Fulfill parent/child relationships between rooms
*
* API: link(parentRoom, childRoom) 
*/
function link_rooms(parentRoom, childRoom){if (!(childRoom in parentRoom.children)){parentRoom.addChild(childRoom);}if (!(parentRoom in childRoom.parents)){childRoom.addParent(parentRoom);}};


// LEVEL 1 LINKS
link_rooms(Home, WesternForest);
link_rooms(WesternForest, SpellCastingAcademy);
link_rooms(SpellCastingAcademy, PracticeRoom);
link_rooms(PracticeRoom, Box);
link_rooms(Home, NorthernMeadow);
link_rooms(NorthernMeadow, EasternMountains);
link_rooms(SpellCastingAcademy, Lessons);
link_rooms(EasternMountains, Cave);
link_rooms(Cave, DarkCorridor);
link_rooms(Cave, Staircase);
link_rooms(DarkCorridor, DankRoom);
link_rooms(DankRoom, SmallHole);
link_rooms(Tunnel, StoneChamber);
link_rooms(StoneChamber, Portal);

//level 1 -> level 2
link_rooms(Portal, TownSquare);

//LEVEL 2 LINKS
link_rooms(TownSquare, Marketplace);
link_rooms(TownSquare, Library);
link_rooms(TownSquare, RockyPath);
link_rooms(TownSquare, ArtisanShop);
link_rooms(TownSquare, BrokenBridge);
//link(library, backRoom); 
// link_rooms(RockyPath, Farm);
link_rooms(BrokenBridge, Clearing);
link_rooms(Clearing, OminousLookingPath);
// link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
link_rooms(CaveOfDisgruntledTrolls, Cage);
link_rooms(Slide, KernelFiles);
link_rooms(CaveOfDisgruntledTrolls, Slide);
link_rooms(KernelFiles, MoreKernelFiles);

//MIT level links
link_rooms(Home, MIT);
link_rooms(MIT, StataCenter);
link_rooms(MIT, AthenaCluster);
