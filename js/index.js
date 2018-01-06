$(document).ready(function() {

    ///Nav bar scroll Animation
    function scrollNav() {
        $('.nav a').click(function(){
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.'+theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - 160
            }, 800);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();

    ///Works
    var pictureTag = $('#picture');
    var titleTag = $('#title-pro');
    var aboutTag = $('#heading-about');
    var aboutPTAG = $('#about-p');
    var headingCoffeeTag = $('#heading-coffee');
    var coffeeTag = $('#coffee');
    var technologyTag = $('#heading-tec');
    var tecPTAG = $('#tec-p');
    var linkTitleTag = $('#heading-link');
    var linkTag = $('#link');
    var coffeeIcon = "<div class=\"col-xs-3 col-md-1\"> <img class=\"img-responsive coffee\" " +
        "src=\"img/coffee.png\"> </div>";

    //Adds and Removes the animate class
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });


    var luvcheck = {
        picture: 'img/LuvCheckFinal.png',
        title: 'Luvcheck Voice Assistant',
        about: 'About',
        aboutP: "A voice assistant enabling the luvcheck application to be completely voice " +
            "controlled and packed with nice features like tell you the weather, track your appointments, " +
            "tell you random facts and more",
        coffeeHeading: "Consumed Coffee (months)",
        coffee: coffeeIcon + coffeeIcon + coffeeIcon,
        technology: "Technology",
        tecP: "Annyang, ResponsiveVoice.JS, OpenWeather API, Wikipedia API, HTML, CSS, JavaScript, " +
            "Node.JS",
        linkTitle: 'URL',
        link: 'http://www.luvcheck.com/'
    };

    var nmfm = {
        picture: "img/nmfm.jpg",
        title: "NMFM Accounting",
        about: "About",
        aboutP: "A portfolio/blog site made for an accountant in P.R. to make her business stand out",
        coffeeHeading: "Consumed Coffee (months)",
        coffee: coffeeIcon + coffeeIcon + coffeeIcon + coffeeIcon,
        technology: "Technology",
        tecP: "Wordpress, HTML, CSS, JavaScript",
        linkTitle: 'URL',
        link: 'http://nmfm-accountant.com'
    };

    var zanra = {
        picture: "img/zanra.PNG",
        title: "Zanra Consulting",
        about: "About",
        aboutP: "A portfolio/blog site made for a freelance marketing company",
        coffeeHeading: "Consumed Coffee (months)",
        coffee: coffeeIcon + coffeeIcon,
        technology: "Technology",
        tecP: "Wordpress, HTML, CSS, JavaScript",
        linkTitle: 'URL',
        link: 'http://zanraconsulting.com/'
    };

    var defender = {
        picture: 'img/windowsdefender.png',
        title: 'Windows Defender',
        about: 'About',
        aboutP: 'An arcade bullet hell game made in GameMaker Studio where you fight viruses infesting your windows computer',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee: coffeeIcon + coffeeIcon,
        technology: "Technology",
        tecP: "GameMaker Studio, GML, Pyxel Edit",
        linkTitle: 'URL',
        link: 'https://nofile.io/f/e7enVw4Agd8/Windows+Defender.zip'
    };

    var gwynheim = {
        picture: 'img/Cactus_enemy.png',
        title: 'Gwynheim Weird Adventure',
        about: 'About',
        aboutP: 'A game made by Luis AKA Dave Davidson. I helped with the design of a few maps and enemies and it inspired me to learn programming',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee: coffeeIcon + coffeeIcon + coffeeIcon + coffeeIcon + coffeeIcon,
        technology: 'Technology',
        tecP: 'RPG Maker, Pyxel Edit',
        linkTitle: 'URL',
        link : 'http://www.mediafire.com/file/3zw228995c0i1xa/Gwynheim%27s+Weird+Adventure.rar'
    };

    var caveboy = {
        picture: 'img/caveboy.png',
        title: 'Super Cave Boy',
        about: 'About',
        aboutP: 'A game that mimics the mechanics from Spelunky',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee: coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/mCKEzWe5cBQ/Super+Cave+Boy.exe'
    };

    var blaster = {
        picture: 'img/blaster.PNG',
        title: 'Blaster Faster',
        about: 'About',
        aboutP: 'A bullet hell arcade style game where you are a space pilot protecting the earth from aliens',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee:  coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/f3QEYwzDU3X/Blaster+Faster.exe'
    };

    var lazarus = {
        picture: 'img/lazarus.PNG',
        title: 'Lazarus',
        about: 'About',
        aboutP: 'You must help Lazarus get out of the factory before the boxes squishes him',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee:  coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/fE3VC0FyjBD/lazarus.exe'
    };

    var reef = {
        picture: 'img/reef.png',
        title: 'Super Rainbow Reef',
        about: 'About',
        aboutP: 'A classic brick breaker game set in the ocean',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee:  coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/0ObaDhORfEh/Super+Rainbow+Reef.exe'
    };

    var mail = {
        picture: 'img/mail.png',
        title: 'Galactic Mail',
        about: 'About',
        aboutP: 'You are a galactic mailman and you must deliver the mail to each planet in a dangerous universe',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee:  coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/zFMfpKF5QoJ/Galactic+Mail.exe'
    };

    var clutches = {
        picture: 'img/clutches.png',
        title: 'Evil Clutches',
        about: 'About',
        aboutP: 'Your sons has been taken by evil monsters. Fight to get them back',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee:  coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/0Yx9TF5ouBo/Evil+Clutches.exe'
    };

    var asteroid = {
        picture: 'img/asteroid.png',
        title: 'Super Asteroid',
        about: 'About',
        aboutP: 'Survive the vacuum of space by avoiding asteroids',
        coffeeHeading: 'Consumed Coffee (months)',
        coffee:  coffeeIcon,
        technology: 'Technology',
        tecP: 'GameMaker Studio, GML, Pyxel Edit',
        linkTitle: 'URL',
        link: 'https://nofile.io/f/Yqs3By2k8yk/Super_Asteroids.exe'
    };

    //Holds all the projects objects
    var projects = [luvcheck, nmfm, zanra, defender, gwynheim, caveboy, blaster, lazarus, reef, mail, clutches, asteroid];

    //Most Recent Project
    pictureTag.attr('src', projects[0].picture);
    titleTag.text(projects[0].title);
    aboutTag.text(projects[0].about);
    aboutPTAG.text(projects[0].aboutP);
    headingCoffeeTag.text(projects[0].coffeeHeading);
    coffeeTag.html(projects[0].coffee);
    technologyTag.text(projects[0].technology);
    tecPTAG.text(projects[0].tecP);
    linkTitleTag.text(projects[0].linkTitle);
    linkTag.attr('href', projects[0].link);

    //Changes to the next project automatically
    var index = 1;

    $("#change").click(function(){

        pictureTag.animateCss('animated fadeIn');
        titleTag.animateCss('animated fadeIn');
        aboutTag.animateCss('animated fadeIn');
        aboutPTAG.animateCss('animated fadeIn');
        headingCoffeeTag.animateCss('animated fadeIn');
        coffeeTag.animateCss('animated fadeIn');
        technologyTag.animateCss('animated fadeIn');
        tecPTAG.animateCss('animated fadeIn');
        linkTitleTag.animateCss('animated fadeIn');
        linkTag.animateCss('animated fadeIn');

        pictureTag.attr('src', projects[index].picture);
        titleTag.text(projects[index].title);
        aboutTag.text(projects[index].about);
        aboutPTAG.text(projects[index].aboutP);
        headingCoffeeTag.text(projects[index].coffeeHeading);
        coffeeTag.html(projects[index].coffee);
        technologyTag.text(projects[index].technology);
        tecPTAG.text(projects[index].tecP);
        linkTitleTag.text(projects[index].linkTitle);
        linkTag.attr('href', projects[index].link);

        if (index === projects.length - 1) {
            index = 0;
        } else {
            index++;
        }

    });
});