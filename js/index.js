$(document).ready(function() {

    var pictureTag = $('#picture');
    var titleTag = $('#title-pro');
    var aboutTag = $('#heading-about');
    var aboutPTAG = $('#about-p');
    var fuelTag = $('#heading-fuel');
    var littleRocketTag = $('#little-rocket');
    var technologyTag = $('#heading-tec');
    var tecPTAG = $('#tec-p');
    var linkTitleTag = $('#heading-link');
    var linkTag = $('#link');


    var luvcheck = {
        picture: 'img/LuvCheckFinal.png',
        title: 'Luvcheck Voice Assistant',
        about: 'About',
        aboutP: "A voice assistant enabling the luvcheck application to be completely voice " +
            "controlled and packed with nice features like tell you the weather, track your appointments, " +
            "tell you random facts and more",
        fuel: "Consumed Coffee (months)",
        littleRocket: "<div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div> <div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div><div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div>",
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
        fuel: "Consumed Coffee (months)",
        littleRocket: "<div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div> <div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div><div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div><div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div>",
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
        fuel: "Consumed Coffee (months)",
        littleRocket: "<div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div> <div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
            "src=\"img/coffee.png\"> </div>",
        technology: "Technology",
        tecP: "Wordpress, HTML, CSS, JavaScript",
        linkTitle: 'URL',
        link: 'http://zanraconsulting.com/'
    };

    //Most Recent Project
    pictureTag.attr('src', luvcheck.picture);
    titleTag.text(luvcheck.title);
    aboutTag.text(luvcheck.about);
    aboutPTAG.text(luvcheck.aboutP);
    fuelTag.text(luvcheck.fuel);
    littleRocketTag.html(luvcheck.littleRocket);
    technologyTag.text(luvcheck.technology);
    tecPTAG.text(luvcheck.tecP);
    linkTitleTag.text(luvcheck.linkTitle);
    linkTag.attr('href', luvcheck.link);

    //Changes to the next project automatically
    var index = 1;

    $("#change").click(function(){
        if (index === 0) {
            pictureTag.attr('src', luvcheck.picture);
            titleTag.text(luvcheck.title);
            aboutTag.text(luvcheck.about);
            aboutPTAG.text(luvcheck.aboutP);
            fuelTag.text(luvcheck.fuel);
            littleRocketTag.html(luvcheck.littleRocket);
            technologyTag.text(luvcheck.technology);
            tecPTAG.text(luvcheck.tecP);
            linkTitleTag.text(luvcheck.linkTitle);
            linkTag.attr('href', luvcheck.link);
            index++;
        } else if (index === 1) {
            pictureTag.attr('src', nmfm.picture);
            titleTag.text(nmfm.title);
            aboutTag.text(nmfm.about);
            aboutPTAG.text(nmfm.aboutP);
            fuelTag.text(nmfm.fuel);
            littleRocketTag.html(nmfm.littleRocket);
            technologyTag.text(nmfm.technology);
            tecPTAG.text(nmfm.tecP);
            linkTitleTag.text(nmfm.linkTitle);
            linkTag.attr('href', nmfm.link);
            index++;
        } else if (index === 2) {
            pictureTag.attr('src', zanra.picture);
            titleTag.text(zanra.title);
            aboutTag.text(zanra.about);
            aboutPTAG.text(zanra.aboutP);
            fuelTag.text(zanra.fuel);
            littleRocketTag.html(zanra.littleRocket);
            technologyTag.text(zanra.technology);
            tecPTAG.text(zanra.tecP);
            linkTitleTag.text(zanra.linkTitle);
            linkTag.attr('href', zanra.link);
            index = 0;
        }
    });


});