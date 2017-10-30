$(function() {
  var data = JSON.stringify([
    {
      "name"   : "Dering Hall",
      "url"    : "https://deringhall.com/",
      "techs"  : "Ruby on Rails, React, PostgreSQL, Elasticsearch, Redis, Docker, Heroku",
      "duties" : "Development, Operations",
      "year"   : 2017
    },
    {
      "name"   : "IAISRR",
      "url"    : "https://iaisrr.com/",
      "techs"  : "PHP 7, Laravel 5, JS, MySQL, NGINX, Docker, AWS",
      "duties" : "Development",
      "year"   : 2016
    },
    {
      "name"   : "Hubally Ad Tech Solutions & RTB",
      "url"    : "http://hubally.com/",
      "techs"  : "Python, Flask, Angular, MySQL, Redis, Vagrant, AWS",
      "duties" : "Development, Product Discovery, Operations",
      "year"   : 2016
    },
    {
      "name"   : "Progow",
      "url"    : "https://progow.com/",
      "techs"  : "Ruby on Rails, Angular, PostgreSQL, Redis, Vagrant, Heroku",
      "duties" : "Development, Product Discovery, Operations",
      "year"   : 2015
    },
    {
      "name"   : "TotalCoin: Developer Tools",
      "url"    : "https://github.com/totalcoin",
      "techs"  : "Ruby, PHP, Magento, OsCommerce, WP eCommerce, Vagrant",
      "duties" : "Development, Product Discovery",
      "year"   : 2015
    },
    {
      "name"   : "Transcuro",
      "url"    : "https://transcuro.com/",
      "techs"  : "PHP, Laravel 4, JS, MySQL, NGINX",
      "duties" : "Development, Operations",
      "year"   : 2015
    },
    {
      "name"   : "E-planning: Android SDK",
      "url"    : "https://e-planning.net/",
      "techs"  : "Android SDK, Eclipse",
      "duties" : "Development, Product Discovery",
      "year"   : 2014
    },
    {
      "name"   : "BrandCaptcha",
      "url"    : "http://www.pontamedia.com/brandCaptcha",
      "techs"  : "PHP, Symfony2, AWS, MongoDB, MySQL, NGINX",
      "duties" : "Development, Product Discovery, Operations",
      "year"   : 2014
    },
    {
      "name"   : "Andreani",
      "url"    : "https://www.andreani.com/",
      "techs"  : ".NET ASP MVC 3, jQuery, Bootstrap",
      "duties" : "Development",
      "year"   : 2013
    },
    {
      "name"   : "MaxCDN Services",
      "url"    : "https://docs.maxcdn.com/",
      "techs"  : "PHP, Ruby, jQuery, Bootstrap, MySQL, NGINX",
      "duties" : "Development, Operations",
      "year"   : 2013
    },
    {
      "name"   : "Par8o",
      "url"    : "https://learn.par8o.com/",
      "techs"  : "Ruby, RoR 3, jQuery, Bootstrap, MySQL, Heroku",
      "duties" : "Development",
      "year"   : 2012
    },
    {
      "name"   : "Sungevity",
      "url"    : "http://www.sungevity.com/",
      "techs"  : "PHP, Cake, JS MVC, MySQL",
      "duties" : "Development",
      "year"   : 2011
    },
  ]);

  var projects = JSON.parse(data);
  var source   = $("#portfolio-item-template").html();
  var template = Handlebars.compile(source);

  for (var key in projects) {
    var context = { name: projects[key].name, url: projects[key].url, tools: projects[key].techs, duties: projects[key].duties };
    var html    = template(context);
    $('#portfolio').append(html);
  }
});