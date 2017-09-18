$(function() {
  var data = JSON.stringify([
    {
      "name"   : "Dering Hall",
      "url"    : "https://deringhall.com/",
      "techs"  : "Ruby on Rails, React, PostgreSQL, Redis, Heroku",
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
      "techs"  : "Python, Flask, Angular, MySQL, Redis, AWS",
      "duties" : "Development, Product Discovery, Operations",
      "year"   : 2016
    },
    {
      "name"   : "Progow",
      "url"    : "https://progow.com/",
      "techs"  : "Ruby on Rails, Angular, PostgreSQL, Redis, Heroku",
      "duties" : "Development, Product Discovery, Operations",
      "year"   : 2015
    },
    {
      "name"   : "TotalCoin: Developer Tools",
      "url"    : "https://github.com/totalcoin",
      "techs"  : "Ruby, PHP, Magento, OsCommerce, WP eCommerce",
      "duties" : "Development, Product Discovery",
      "year"   : 2015
    },
    {
      "name"   : "E-planning: Android SDK",
      "url"    : "https://e-planning.net/",
      "techs"  : "Android",
      "duties" : "Development, Product Discovery",
      "year"   : 2014
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