function GameState(){
	//game starts at home unless loaded from cookie
	this.currentRoom = Home; 
	this.params = {};
};

//this function reads from a cookie if one exists
GameState.prototype.getCurrentRoom = function() {
	//by default the new room is just the current room
	var newRoomToSet=this.currentRoom;

	//if there is a cookie, the newRoomToSet is read from the cookie
	var cookieval=this.readCookie();
	if (cookieval){
		//parse the cookie. right now it is only the current room name
		var cookieargs = cookieval.split("=");
		var room_name_to_set = cookieargs.splice(0, 1);
		var cookie_params = cookieargs;
		for (var i = 0; i < cookie_params.length; i++){
			var param_pair = cookie_params[i].split(":");
			this.params[param_pair[0]] = param_pair[1];
			this.applyState(param_pair[0], true);
		}
		newRoomToSet=window[room_name_to_set];
	}

	//call setCurrentRoom to reset the expiration date on the cookie
	this.setCurrentRoom(newRoomToSet);
	return this.currentRoom;
};

GameState.prototype.setCurrentRoom = function(newRoom){
	this.currentRoom=newRoom;

	//when you call this function, set the cookie in the browser
	var date = new Date();
	//by default, cookies active for a week
	date.setTime(date.getTime()+(7*24*60*60*1000));
	document.cookie = "terminuscookie="+this.getState()+"; expires="+date.toGMTString()+"; path=/";
};

GameState.prototype.getState = function(){
	//for anything in the state, if it is not written in the cookie explicitly, it's value is 0
	var param_string = "";
	for (var key in this.params){
		if (this.params.hasOwnProperty(key)){
			param_string += key + ":" + this.params[key] + "=";
		}
	}
	return this.currentRoom.toString() + "=" + param_string;
};

GameState.prototype.update = function(name_prop, val){
	this.params[name_prop] = val;
};

GameState.prototype.readCookie = function(){
	var nameCookie = "terminuscookie";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameCookie) == 0) 
			return c.substring(nameCookie.length + 1,c.length);
	}
	return null;
};

GameState.prototype.applyState = function(param_name, replay){
	var re = (typeof replay === 'undefined') ? false : replay;
	state.update(param_name, "1");
	switch(param_name){
		case "mvBoulder": 
			link_rooms(DankRoom, Tunnel);
			SmallHole.addItem(Boulder);
			if (re) DankRoom.removeItem("Boulder");
			break;
		case "pullLever":
			link_rooms(Library, BackRoom);
    		break;
    	case "rmLargeBoulder":
    		link_rooms(RockyPath, Farm);
    		if (re) RockyPath.removeItem("LargeBoulder");
    		break;
    	case "touchGear":
    		Artisan.addCmdText("less", "Bueno, eso es encantador, gracias, ¡pero no puedes esperar que haga nada con solo un engranaje! ¿No puedes copiarlo?\n...\n*suspiro* Veo que vas a necesitar mucho entrenamiento. Solo di \"cp [OBJETO] [NUEVOOBJETO]\". [OBJETO] es el nombre del objeto que deseas copiar, y [NUEVOOBJETO] es el nuevo nombre de la copia, ¿entendido? ¡Y luego, puf! Tendrás un objeto nuevo y reluciente. Necesito cinco engranajes más, ¡así que será mejor que empieces! Llámales gear1, gear2, gear3, gear4 y gear5, por favor.");
    		ArtisanShop.addCommand("cp");
    		if (re) ArtisanShop.addItem(new Item("Gear", "This is a Gear / Este es un Gear","item_gear.gif"));
    		else ArtisanShop.getItemFromName("Gear").changePicName("item_gear.gif");
    		break;
    	case "FiveGearsCopied":
    		Artisan.addCmdText("less", "Ja, ¿ya terminaste? Supongo que aprendes rápido. Bueno, gracias por tu ayuda.");
    		if (re){
	    		ArtisanShop.addItem(new Item("gear1", "This is a Gear / Este es un Gear","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear2", "This is a Gear / Este es un Gear","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear3", "This is a Gear / Este es un Gear","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear4", "This is a Gear / Este es un Gear","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear5", "This is a Gear / Este es un Gear","item_gear.gif"));
    		}
    		break;
    	case "CornCopied":
    	    Farmer.addCmdText("less", "¡Es un milagro! Gracias, amigo. Que el Administrador te bendiga.");
    	    if (re) Farm.addItem(new Item("AnotherEarOfCorn", "This is AnotherEarOfCorn / Este es AnotherEarOfCorn"));
    	    break;
    	case "HouseMade":
    		if (re) Clearing.addChild(new Room("House", "This is a House / Esta es una House"));
    		Clearing.getChildFromName("House").addCmdText("cd", "Estás entrando a la House que construiste.");
  	 		Clearing.getChildFromName("House").addCmdText("ls", "Construiste esta casa para el hombre. ¡Qué considerado de tu parte!");
  		  	Clearing.removeCmdText("cd");
    		Clearing.changeIntroText("Hay un pequeño claro de hierba aquí, con un hombre sentado sobre una piedra, llorando. Detrás de él hay una pila de escombros y una pequeña casa blanca.");
    		CryingMan.addCmdText("less", "¡Gracias por construirme la House! ¿Por qué sigo llorando? Estas son lágrimas de alegría. ¿Acaso un hombre no puede expresar abiertamente sus emociones?");
    		break;
    	case "touchPlank":
    		Clearing.addCommand("cd");
    		Clearing.removeCmdText("cd");
    		BrokenBridge.removeCmdText("cd");
    		BrokenBridge.changeIntroText("Un puente de cuerdas crujiente se extiende a través del abismo.");
    		if (re) BrokenBridge.addItem(new Item("Plank","This is a Plank / Este es un Plank.","item_plank.gif"));
    		else BrokenBridge.getItemFromName("Plank").changePicName("item_plank.gif");
    		break;
    	case "rmBrambles":
    		link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
    		if (re) OminousLookingPath.removeItem("ThornyBrambles");
    		break;
    	case "sudoComplete":
    		KernelFiles.removeCommand("IHTFP");
    		KernelFiles.removeCmdText("IHTFP");
    		link_rooms(KernelFiles, Paradise);
    		enterRoom(Paradise);
    		break;
    	case "openSlide":
    		Slide.addCommand("cd");
    		Slide.addCmdText("cd", "Es solo un Slide. Sigue adelante. Ya casi estás en KernelFiles.");
    		if (re) CaveOfDisgruntledTrolls.removeItem("UglyTroll");
    		break;
    	case "AthenaComboEntered":
    		AthenaCluster.addCommand("ls");
    		AthenaCluster.removeCmdText("ls");
		    AthenaCluster.addCommand("cd");
		    enterRoom(AthenaCluster);
		    MIT.removeCommand("terminus");
		    MIT.removeCmdText("terminus");
		    break;
		case "addMagicLocker": 
			link_rooms(Home, MagicLocker);
			break;
		default: 
			break;
	};
};
