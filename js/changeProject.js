$(document).ready(function() {

    ///Works
    const pictureTag = $('#picture');
    const titleTag = $('#title-pro');
    const aboutTag = $('#about-p');
    const coffeeTag = $('#coffee');
    const tecTag = $('#tec-p');
    const linkTag = $('#link');
    const coffeeIcon = "<div class=\"col-xs-3 col-md-1\"> <img class=\"img-responsive coffee\" " +
        "src=\"img/coffee.png\"> </div>";

    //Adds and Removes the animate class
    $.fn.extend({
        animateCss: function (animationName) {
            const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    const athena = {
        picture: 'img/fish.jpg',
        title: 'Athena',
        about: 'An open source public API that provides information about the animals in the ocean',
        coffee: coffeeIcon + coffeeIcon,
        tec: 'Node.js, Express, JavaScript',
        link: 'https://github.com/TheGameFreak720/Athena'
    };

    const sentinel = {
        picture: 'img/sentinnel-logo-transparent.png',
        title: 'Sentinel Professional Services',
        about: 'A portfolio website for a security services company',
        coffee: coffeeIcon,
        tec: "HTML, CSS , JavaScript",
        link: 'https://thegamefreak720.github.io/sentinnel-professional-services/'
    };

    const micro = {
        picture: 'img/Medium_without word.png',
        title: 'Micro.bot',
        about: 'An open source marketing twitter bot that helps you schedule post to twitter to engage your audience',
        coffee: coffeeIcon + coffeeIcon,
        tec: "Pug, Node.js, MongoDB, jQuery, Passport.JS, CSS, JavaScript, HTML",
        link: 'https://github.com/TheGameFreak720/Micro.bot'
    };

    const techladder = {
        picture: 'img/techladder.png',
        title: 'Tech Ladder IO',
        about: 'An open source project I contributed to in hacktoberfest 2018 that helps programmers with different subjects on programming',
        coffee: coffeeIcon,
        tec: 'JavaScript',
        link: 'https://github.com/TheGameFreak720/TechLadderIO'
    };

    const gtd = {
        picture: 'img/Medium_without word.png',
        title: 'GTD',
        about: 'A website I did for a job interview',
        coffee: coffeeIcon,
        tec: 'HTML, CSS, JavaScript',
        link: 'https://thegamefreak720.github.io/gtd/'
    };

    const frontEndProject = {
        picture: 'img/lambda.jpg',
        title: 'Front End Project Week',
        about: 'A React app that is similar to trello where you can add notes, delete them, edit them and view them',
        coffee: coffeeIcon,
        tec: 'React, Axios, React Router, Styled Components',
        link: 'https://github.com/TheGameFreak720/front-end-project-week/tree/master/notes'
    };

    const indecisionApp = {
        picture: 'img/Medium_without word.png',
        title: 'Indecision App',
        about: `It's a task manager app that will randomly pick a task to do`,
        coffee: coffeeIcon,
        tec: 'React, Webpack, Babel, SASS, React Modal',
        link: 'https://github.com/TheGameFreak720/Indecision-App'
    }

    const luvcheck = {
        picture: 'img/LuvCheckFinal.png',
        title: 'Luvcheck Voice Assistant',
        about: "A voice assistant enabling the luvcheck application to be completely voice controlled and packed with nice features like tell you the weather, track your appointments, tell you random facts and more",
        coffee: coffeeIcon + coffeeIcon + coffeeIcon,
        tec: "Annyang, ResponsiveVoice.JS, OpenWeather API, Wikipedia API, HTML, CSS, JavaScript, Node.JS",
        link: 'http://www.luvcheck.com/'
    };

    const simonsGame = {
        picture: 'img/fcc.jpg',
        title: `Simon's Game`,
        about: `A simple game that copies the tabletop game of Simon's`,
        coffee: coffeeIcon,
        tec: 'HTML, CSS, JavaScript',
        link: 'https://thegamefreak720.github.io/simons-game/'
    };

    const nmfm = {
        picture: "img/nmfm.jpg",
        title: "NMFM Accounting",
        about: "A portfolio/blog site made for an accountant in P.R. to make her business stand out",
        coffee: coffeeIcon + coffeeIcon + coffeeIcon + coffeeIcon,
        tec: "Wordpress, HTML, CSS, JavaScript",
        link: 'http://nmfm-accountant.com'
    };

    const zanra = {
        picture: "img/zanra.PNG",
        title: "Zanra Consulting",
        about: "A portfolio/blog site made for a freelance marketing company",
        coffee: coffeeIcon + coffeeIcon,
        tec: "Wordpress, HTML, CSS, JavaScript",
        link: 'http://zanraconsulting.com/'
    };

    const defender = {
        picture: 'img/windowsdefender.png',
        title: 'Windows Defender',
        about: 'An arcade bullet hell game made in GameMaker Studio where you fight viruses infesting your windows computer',
        coffee: coffeeIcon + coffeeIcon,
        tec: "GameMaker Studio, GML, Pyxel Edit",
        link: 'https://drive.google.com/open?id=0BxjhDKzUql56RHRyN1gtUk4xcjg'
    };



    //Holds all the projects objects
    var projects = [
        athena, 
        sentinel, 
        micro, 
        techladder, 
        defender, 
        gtd, 
        frontEndProject, 
        indecisionApp, 
        luvcheck, 
        simonsGame,
        nmfm, 
        zanra
    ];

    //Most Recent Project
    pictureTag.attr('src', projects[0].picture);
    titleTag.text(projects[0].title);
    aboutTag.text(projects[0].about);
    coffeeTag.html(projects[0].coffee);
    tecTag.text(projects[0].tec);
    linkTag.attr('href', projects[0].link);

    //Changes to the next project automatically
    var index = 1;

    $("#change").click(function () {

        pictureTag.animateCss('animated fadeIn');
        titleTag.animateCss('animated fadeIn');
        aboutTag.animateCss('animated fadeIn');
        coffeeTag.animateCss('animated fadeIn');
        tecTag.animateCss('animated fadeIn');
        linkTag.animateCss('animated fadeIn');

        pictureTag.attr('src', projects[index].picture);
        titleTag.text(projects[index].title);
        aboutTag.text(projects[index].about);
        coffeeTag.html(projects[index].coffee);
        tecTag.text(projects[index].tec);
        linkTag.attr('href', projects[index].link);

        if (index === projects.length - 1) {
            index = 0;
        } else {
            index++;
        }

    });
});