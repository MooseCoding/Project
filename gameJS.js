var action;
var item;
var counter = 0;
var whatYouDid;
var ToWhat;
var gameEnded = false;

function checkInputs() {
    if(gameEnded == false) {
    action = document.getElementById("do").value;
    item = document.getElementById("to").value;

    document.getElementById("do").value = "";
    document.getElementById("to").value = "";

    document.getElementById("x").innerHTML = action;
    document.getElementById("y").innerHTML = item;

    if (counter == 10) {
        counter = 0;
    }
    checkMove();
    }
    else {
        document.getElementById(1).innerHTML = "I bet you tried to drink the gun. You tried to drink the gun.";
    }

  
}

function checkMove() {
    counter++;
    if (action == 1) {
        if (item == 1) {
            document.getElementById(counter).innerHTML = "You take the water";
        }

        if (item == 2) {
            document.getElementById(counter).innerHTML = "Curley grabs his pistol hits you with it, you get arrested and taken to jail for life for trying to kidnap someone.";
        }

        if (item == 3) {
            document.getElementById(counter).innerHTML = "George and Crooks run at you with guns and shoot at you, they aren't the best shots in the West though, you get arrested and taken to jail for life for trying to kidnap someone.";
        }

        if (item == 4) {
            document.getElementById(counter).innerHTML = "George screams for help and Slim grabs a rifle and with the aim of a sharpshooter gets you right in the knee and you bleed out on the ranch under the morning sun";
        }

        if (item == 5) {
            document.getElementById(counter).innerHTML = "The boss crushes you as you try to take him. You die.";
        }

        if (item == 6) {
            document.getElementById(counter).innerHTML = "You grab an apple for later that day.";
        }

        if (item == 7) {
            document.getElementById(counter).innerHTML = "Carlson grabs his Luger and not hesitating shoots you and also manages to shoot off his own foot. You see Carlson die and are taken to the surgeon and then the jail.";
        }

        if (item == 8) {
            document.getElementById(counter).innerHTML = "You grab Crooks and he manages to find his shotgun as you attempt to take him and you book it to the irrigation ditch.";
        }

        if (item == 9) {
            document.getElementById(counter).innerHTML = "Slim punches you and then proceeds to take you to the sheriff himself.";
        }

        if (item == 10) {
            document.getElementById(counter).innerHTML = "Curley's wife screams bloody murder and Curley shoots you in the chest with a rifle killing you instantly.";
        }

        if (item == 11) {
            document.getElementById(counter).innerHTML = "You grab some hay for the horses or yourself if you need to eat later that day.";
        }

        if (item == 12) {
            document.getElementById(counter).innerHTML = "You won't take a city or download one for that matter.";
        }

        if (item == 13) {
            document.getElementById(counter).innerHTML = "You won't take a city or download one for that matter.";
        }

        if (item == 14) {
            document.getElementById(counter).innerHTML = "You won't take a bar with benefits or download one for that matter.";
        }

        if (item == 15) {
            document.getElementById(counter).innerHTML = "You manage to grab Carlson's Luger. You then put it back realizing that if Carlson notices that it is missing, you will probably die.";
        }
    }

    if (action == 2) {
        if (item == 1) {
            document.getElementById(counter).innerHTML = "You drink the water";
        }

        if (item == 2) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 3) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 4) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 5) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 6) {
            document.getElementById(counter).innerHTML = "You can't drink food, that's called common sense, use it or lose it.";
        }

        if (item == 7) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 8) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 9) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 10) {
            document.getElementById(counter).innerHTML = "You can't drink a person, that's called common sense, use it or lose it.";
        }

        if (item == 11) {
            document.getElementById(counter).innerHTML = "You can't drink hay, that's called common sense, use it or lose it.";
        }

        if (item == 12) {
            document.getElementById(counter).innerHTML = "You can't drink a city, that's called common sense, use it or lose it.";
        }

        if (item == 13) {
            document.getElementById(counter).innerHTML = "You can't drink a city, that's called common sense, use it or lose it.";
        }

        if (item == 14) {
            document.getElementById(counter).innerHTML = "You can't drink a bar with benefits, that's called common sense, use it or lose it";
        }

        if (item == 15) {
            document.getElementById(counter).innerHTML = "You really wanted to drink a gun, yeah no thats punishable by me just stopping this game. Believe me if I could I would.";
            gameEnded == true;
        }
    }

    if (action == 3) {
        if (item == 1) {
            document.getElementById(counter).innerHTML = "You look for water but since you are in a dusty ranch area, you find nothing.";
        }

        if (item == 2) {
            document.getElementById(counter).innerHTML = "You look for Curley and he sees you and walks away";
        }

        if (item == 3) {
            document.getElementById(counter).innerHTML = "You look for Candy and you find him sitting in a chair outside the bunkhouse.";
        }

        if (item == 4) {
            document.getElementById(counter).innerHTML = "You look for George and he sees you and walks away";
        }

        if (item == 5) {
            document.getElementById(counter).innerHTML = "The boss is in his chair, he can't get up, so you don't need to look for him.";
        }

        if (item == 6) {
            document.getElementById(counter).innerHTML = "You look out onto the fields for food and see a cow";
        }

        if (item == 7) {
            document.getElementById(counter).innerHTML = "Carlson is in the bunkhouse polishing his Luger.";
        }

        if (item == 8) {
            document.getElementById(counter).innerHTML = "You look for Crooks and find him in the barn";
        }

        if (item == 9) {
            document.getElementById(counter).innerHTML = "You look for Slim and he sees you and walks away";
        }

        if (item == 10) {
            document.getElementById(counter).innerHTML = "You look for Curley's wife and find her making dinner and she screams to get out of her kitchen.";
        }

        if (item == 11) {
            document.getElementById(counter).innerHTML = "You look for some hay and you find a tumbleweed, kinda sucks but it's my job to do something when you enter in 3 , 11 so idc";
        }

        if (item == 12) {
            document.getElementById(counter).innerHTML = "You look for the town of Weed. I would reckon it's about a hundred miles away from where it was last time. Get to walking across the pacific.";
        }

        if (item == 13) {
            document.getElementById(counter).innerHTML = "You look for the town of Soledad and meet a guide. He reckons it's about a hundred miles away from where it was last time. Get to walking across the pacific.";
        }

        if (item == 14) {
            document.getElementById(counter).innerHTML = "You look for a bar with benefits, you follow the long line of men to it. Congrats you found it!";
        }

        if (item == 15) {
            document.getElementById(counter).innerHTML = "It is in Carlson's footlocker";
        }
    }
}

