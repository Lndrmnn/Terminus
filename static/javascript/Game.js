/*
 * Copyright (C) 2026 José Cifuentes Lindermann.
 * Este programa es software libre; puede redistribuirlo y/o modificarlo bajo los términos de la Licencia Pública General de GNU versión 2 publicada por la Free Software Foundation.
 */

var state = new GameState();
//read cookie if one exists
var current_room = state.getCurrentRoom();
// var current_room = KernelFiles;
var man_pages = {
"cd": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" +
"(Choose Destination / Elegir Destino) Usa \"cd\" para moverte por el mundo.\n" +
"Entrada del comando: cd UBICACION\n" +
"Recuérdaloooo...", 

"mv": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" + 
"(MoVe / Mover). \nUsa \"mv\" para mover un objeto a una nueva ubicación.\n" +
"Entrada del comando: mv OBJETO NUEVAUBICACION\n" + 
"Recuérdaloooo...",

"ls": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" + 
"(Look at your Surroundings / Mirar a tu Alrededor). \nUsa \"ls\" para ver lo que hay en una ubicación determinada.\n" +
"Ya sea tu ubicación actual o (rara vez) para asomarte a otra ubicación y ver lo que contiene.\n" + 
"Entrada del comando:\n" + 
"ls              (para tu ubicación actual)\n" + 
"-O-\n" + 
"ls UBICACION    (para ubicaciones a las que no puedes hacer \"cd\")\n" + 
"Recuérdaloooo...", 

"less": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" +
"(Look at, Examine, or Speak / Mirar, Examinar o Hablar). \nUsa \"less\" (o \"cat\") para examinar lo que hay o hablar con personajes y objetos en una ubicación.\n" + 
"Entrada del comando: less OBJETO\n" +
"Recuérdaloooo...", 

"man": "¡Maldición, yo soy el anciano (old man)! No puedes intentar obtener más información sobre mí. Aquí están todos los comandos que puedes consultar con man: cd, ls, rm, mv, exit, help, man, touch, grep, pwd.", 

"help": "Escribe \"man COMANDO\" si olvidas cómo usar un hechizo o comando.", 

"exit": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" + 
"(exit / salir)\n" + 
"Usa \"exit\" para salir del juego permanentemente.\n" + 
"Entrada del comando:\n" + 
"exit\n" + 
"Recuérdaloooo...", 

"cp": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" +
"(CoPy / Copiar)\n" + 
"Usa \"cp\" para duplicar un objeto.\n" + 
"Entrada del comando:\n" + 
"cp OBJETO NUEVONOMBRE\n" +
"Recuérdaloooo...", 

"pwd": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" + 
"(Print Where i Do stuff / Imprimir dónde estoy)\n" +
"Para recordarte en qué lugar te encuentras actualmente.\n" + 
"Entrada del comando:\n" + 
"pwd\n" + 
"Recuérdaloooo...",

"grep": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" +
"(grep)\n" + 
"Usa \"grep\" para ordenar a tu esbirro que busque texto por ti dentro de libros o pergaminos.\n" + 
"Entrada del comando:\n" + 
"grep PALABRA_A_BUSCAR OBJETO_DONDE_BUSCAR\n" +
"Recuérdaloooo...",

"touch": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" +
"(Touch / Toque) Te otorga el toque del artesano para crear nuevos objetos en el mundo.\n" +
"Usa \"touch\" para crear nuevos objetos en el mundo.\n" +
"Entrada del comando:\n" + 
"touch OBJETO\n" + 
"Recuérdaloooo...", 

"tellme": "La voz del anciano resuena en tu cabeza como si viniera de una gran distancia:\n" +
"(tellme combo) Te dice la combinación secreta para las salas AthenaCluster en el MIT.\n" +
"Entrada del comando:\n" +
"tellme combo\n" +
"Recuérdaloooo..."
};

$(document).ready(function() {
    $('#term').terminal(function(input, term) {
        var split = input.split(" ");
        var command = split[0].toString();
        var args = split.splice(1,split.length);
        var exec = true;
        if( current_room.commands.indexOf(command) > -1 ){ //Could use current_room.hasOwnProperty(command)
            var prev_room_to_test = current_room;
            if (args.length > 0 && args[0].indexOf("/") > 0){
                var rooms_in_order = args[0].split("/");
                var cur_room_to_test = current_room;
                for (var i = 0; i < rooms_in_order.length; i++){
                    prev_room_to_test = cur_room_to_test;
                    var room_to_cd = rooms_in_order[i];
                    if (i > 0 && rooms_in_order[i-1] === "~"){
                        cur_room_to_test = Home.can_cd(room_to_cd)
                    } else if (room_to_cd === "~"){
                        cur_room_to_test = Home;
                    } else {
                        cur_room_to_test = cur_room_to_test.can_cd(room_to_cd);
                    }
                    if ((command === "cd" || command === "ls") && cur_room_to_test === false){
                        term.echo("That is not reachable from here. / Ese lugar no es accesible desde aquí.");
                        exec = false;
                    }
                }
                args[0] = cur_room_to_test.room_name;
            }
            if (exec){
                var text_to_display = prev_room_to_test[command](args);
                if (text_to_display){
                    term.echo(text_to_display);
                }
                if (command in current_room.cmd_text){
                    term.echo(current_room.cmd_text[command]);
                }
            }
        }
        else{
            term.echo("Command '"+command+"' not found in room '"+current_room.room_name+"' / Comando '"+command+"' no encontrado en la sala '"+current_room.room_name+"'");
        }
    }, { history: true,                     // Keep user's history of commands
        prompt: '>',                        // Text that prefixes terminal entries
        name: 'terminus_terminal',          // Name of terminal
                                            // Signiture to include at top of terminal
        greetings:"¡Bienvenido a Terminus! / Welcome! Si eres nuevo en el juego, aquí tienes algunos consejos:\n\n" +
		"• Mira a tu alrededor con el comando \"ls\".\n" +
		"• Muévete a una nueva ubicación con el comando \"cd UBICACION\"\n" +
		"• Puedes retroceder con el comando \"cd ..\".\n" +
		"• Interactúa o habla con personajes y objetos con el comando \"less OBJETO\" (o \"cat OBJETO\").\n\n" +
        "• Si olvidas dónde estás, escribe \"pwd\"\n\n" + 
		"Adelante, explora y aprende los hechizos de la terminal. Escribe \"ls\" como tu primer comando.\n",
        exit: false,                        // Disable 'exit' command
        clear: true,                       // Disable 'clear' command
        });
    
    // Clear history on page reload
    $("#term").terminal().history().clear();
    //Give term focus (Fixes weird initial draw issue)
    $("#term").click();
    //Tab Completion FOR LAST ARGUMENT
    $(window).keyup(function(event){
        if(event.keyCode == 9){
            var command = $("#term").terminal().get_command().replace(/\s+$/,"");
            var split_command = command.split(" ");
            var first_arg = split_command[0]
            var last_arg = split_command.pop();
            //Start in a room, try to move through path, and if we get to the end
            // check whether a room/item could complete our trip
            
            //Get starting room
            var search_room;
            if(last_arg.substring(0,1) == "~"){
                search_room = jQuery.extend(true, {}, Home);
            }
            else{
                search_room = jQuery.extend(true, {}, current_room);
            }
            //Iterate through each room
            var path_rooms = last_arg.split("/");
            var new_room;
            var incomplete_room;
            var substring_matches = [];
            for (room_num=0;room_num<path_rooms.length;room_num++)
            {
                new_room = search_room.can_cd(path_rooms[room_num]);
                if(new_room){
                    search_room = new_room;
                }
                else{
                    //We've made it to the final room,
                    // so we should look for things to complete our journey
                    if(room_num == path_rooms.length-1){
                        //IF cd, ls, cp, mv, less
                        //Compare to this room's children
                        if(first_arg == "cd" ||
                            first_arg == "ls" ||
                            first_arg == "mv")
                        {
                            for(child_num = 0; child_num<search_room.children.length; child_num++){
                                if(search_room.children[child_num].room_name.match("^"+path_rooms[room_num])){
                                    substring_matches.push(search_room.children[child_num].room_name);
                                }
                            }
                        }
                        //IF cp, mv, less, grep, touch
                        //Compare to this room's items
                        if(first_arg == "cp" ||
                            first_arg == "mv" ||
                            first_arg == "less" ||
                            first_arg == "grep" ||
                            first_arg == "touch" ||
                            first_arg == "rm" ||
                            first_arg == "sudo")
                        {
                            for(item_num = 0; item_num<search_room.items.length; item_num++){
                                if(search_room.items[item_num].itemname.match("^"+path_rooms[room_num])){
                                    substring_matches.push(search_room.items[item_num].itemname);
                                }
                            }
                        }
                        
                        //If one match exists
                        if(substring_matches.length == 1){
                            path_rooms.pop();
                            path_rooms.push(substring_matches[0]);
                            split_command.push(path_rooms.join("/"))
                            $("#term").terminal().set_command(split_command.join(" "));
                        }
                        //If multiple matches exist
                        else if(substring_matches.length > 1){
                            //Search for longest common substring (taken from: http://stackoverflow.com/questions/1837555/ajax-autocomplete-or-autosuggest-with-tab-completion-autofill-similar-to-shell/1897480#1897480)
                            var lCSindex = 0
                            var i, ch, memo
                            do {
                                memo = null
                                for (i=0; i < substring_matches.length; i++) {
                                    ch = substring_matches[i].charAt(lCSindex)
                                    if (!ch) break
                                    if (!memo) memo = ch
                                    else if (ch != memo) break
                                }
                            } while (i == substring_matches.length && ++lCSindex)

                            var longestCommonSubstring = substring_matches[0].slice(0, lCSindex)
                            //If there is a common substring...
                            if(longestCommonSubstring != ""){
                                //If it already matches the last snippit, then show the options
                                if(path_rooms[room_num] == longestCommonSubstring){
                                    split_command.push(last_arg)                                                    //Join final argument to split_command
                                    $("#term").terminal().echo(">"+split_command.join(" ").replace(/\s+$/,""));     //Print what the user entered
                                    $("#term").terminal().echo(substring_matches.join(" "));                        //Print the matches
                                    $("#term").terminal().set_command(split_command.join(" ").replace(/\s+$/,""));  //Set the text to what the user entered
                                }
                                //Otherwise, fill in the longest common substring
                                else{
                                    path_rooms.pop();                           //Pop final snippit
                                    path_rooms.push(longestCommonSubstring);    //Push longest common substring
                                    split_command.push(path_rooms.join("/"))    //Join room paths
                                    $("#term").terminal().set_command(split_command.join(" ")); //Set the terminal text to this auto-completion
                                }
                            }
                            //Otherwise, there is no common substring.  Show all of the options.
                            else{
                                split_command.push(last_arg)                                                    //Join final argument to split_command
                                $("#term").terminal().echo(">"+split_command.join(" ").replace(/\s+$/,""));     //Print what the user entered
                                $("#term").terminal().echo(substring_matches.join(" "));                        //Print the matches
                                $("#term").terminal().set_command(split_command.join(" ").replace(/\s+$/,""));  //Set the text to what the user entered
                            }
                        }
                        //If no match exists
                        else{
                            //DO NOTHING (except remove TAB)
                            $("#term").terminal().set_command(command.replace(/\s+$/,""));
                        }
                    }
                    else{
                        //DO NOTHING (except remove TAB)
                        $("#term").terminal().set_command(command.replace(/\s+$/,""));
                    }
                }
            }
        }
    });
});
