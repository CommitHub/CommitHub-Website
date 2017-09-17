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
        coffee: "<div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
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
        coffeeHeading: "Consumed Coffee (months)",
        coffee: "<div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
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
        coffeeHeading: "Consumed Coffee (months)",
        coffee: "<div class=\"col-sm-2\"> <img class=\"img-responsive coffee\" " +
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
    headingCoffeeTag.text(luvcheck.coffeeHeading);
    coffeeTag.html(luvcheck.coffee);
    technologyTag.text(luvcheck.technology);
    tecPTAG.text(luvcheck.tecP);
    linkTitleTag.text(luvcheck.linkTitle);
    linkTag.attr('href', luvcheck.link);

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

        if (index === 0) {
            pictureTag.attr('src', luvcheck.picture);
            titleTag.text(luvcheck.title);
            aboutTag.text(luvcheck.about);
            aboutPTAG.text(luvcheck.aboutP);
            headingCoffeeTag.text(luvcheck.coffeeHeading);
            coffeeTag.html(luvcheck.coffee);
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
            headingCoffeeTag.text(nmfm.coffeeHeading);
            coffeeTag.html(nmfm.coffee);
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
            headingCoffeeTag.text(zanra.coffeeHeading);
            coffeeTag.html(zanra.coffee);
            technologyTag.text(zanra.technology);
            tecPTAG.text(zanra.tecP);
            linkTitleTag.text(zanra.linkTitle);
            linkTag.attr('href', zanra.link);
            index = 0;
        }
    });
});