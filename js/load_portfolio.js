$(function() {
  const data = JSON.stringify([
    {
      "name": "Tapercito | Delivery y Take Away without extra costs",
      "url": "https://tapercito.com/",
      "techs": "Ruby on Rails, TypeScript, React, GraphQL, Next.js",
      "duties": "Development, Operations",
      "year": 2021
    },
    {
      "name": "Evens | Best Treatment for Acid Reflux Relief",
      "url": "https://evens.com/",
      "techs": "Ruby on Rails, TypeScript, React, GraphQL, Cypress, Jasmine, Enzyme",
      "duties": "Development",
      "year": 2019
    },
    {
      "name": "Cove | Keep migraines at bay",
      "url": "https://www.withcove.com/",
      "techs": "Ruby on Rails, TypeScript, React, GraphQL, Cypress, PostgreSQL, Docker, Terraform, AWS",
      "duties": "Development, Operations",
      "year": 2018
    },
    {
      "name": "Keeps | Hair Loss Treatment for Men",
      "url": "https://www.keeps.com/",
      "techs": "Ruby on Rails, TypeScript, React, GraphQL, Cypress, PostgreSQL, Docker, Terraform, AWS",
      "duties": "Development, Operations",
      "year": 2018
    },
    {
      "name": "HealthCheck - Active Monitoring",
      "url": "https://github.com/instedd/active-monitoring",
      "techs": "Elixir, Phoenix, React, Redux, Docker, Material Design, Webpack",
      "duties": "Development",
      "year": 2018
    },
    {
      "name": "Hubstaff",
      "url": "https://hubstaff.com/",
      "techs": "Ruby on Rails, JS, PostgreSQL, Elasticsearch, Heroku",
      "duties": "Development",
      "year": 2017
    },
    {
      "name": "Dering Hall",
      "url": "https://deringhall.com/",
      "techs": "Ruby on Rails, React, PostgreSQL, Elasticsearch, Redis, Docker, Heroku, AWS",
      "duties": "Development, Operations",
      "year": 2017
    },
    {
      "name": "IAISRR",
      "url": "https://iaisrr.com/",
      "techs": "PHP 7, Laravel 5, JS, MySQL, NGINX, Docker, AWS",
      "duties": "Development",
      "year": 2016
    },
    {
      "name": "Hubally Ad Tech Solutions & RTB",
      "url": "http://hubally.com/",
      "techs": "Python, Flask, Angular, MySQL, Redis, Vagrant, AWS",
      "duties": "Development, Product Discovery, Operations",
      "year": 2016
    },
    {
      "name": "Progow",
      "url": "https://progow.com/",
      "techs": "Ruby on Rails, Angular, PostgreSQL, Redis, Vagrant, Heroku",
      "duties": "Development, Product Discovery, Operations",
      "year": 2015
    },
    {
      "name": "TotalCoin: Developer Tools",
      "url": "https://github.com/totalcoin",
      "techs": "Ruby, PHP, Magento, OsCommerce, WP eCommerce, Vagrant",
      "duties": "Development, Product Discovery",
      "year": 2015
    },
    {
      "name": "Transcuro",
      "url": "https://transcuro.com/",
      "techs": "PHP, Laravel 4, JS, MySQL, NGINX",
      "duties": "Development, Operations",
      "year": 2015
    },
    {
      "name": "E-planning: Android SDK",
      "url": "https://e-planning.net/",
      "techs": "Android SDK, Eclipse",
      "duties": "Development, Product Discovery",
      "year": 2014
    },
    {
      "name": "BrandCaptcha",
      "url": "http://www.pontamedia.com/brandCaptcha",
      "techs": "PHP, Symfony, AWS, MongoDB, MySQL, NGINX",
      "duties": "Development, Product Discovery, Operations",
      "year": 2014
    },
    {
      "name": "Andreani",
      "url": "https://www.andreani.com/",
      "techs": "ASP.NET MVC, jQuery, Bootstrap",
      "duties": "Development",
      "year": 2013
    },
    {
      "name": "MaxCDN Services",
      "url": "https://docs.maxcdn.com/",
      "techs": "PHP, Ruby, jQuery, Bootstrap, MySQL, NGINX",
      "duties": "Development, Operations",
      "year": 2013
    },
    {
      "name": "Par8o",
      "url": "https://learn.par8o.com/",
      "techs": "Ruby on Rails, jQuery, Bootstrap, MySQL, Heroku",
      "duties": "Development",
      "year": 2012
    },
    {
      "name": "Sungevity",
      "url": "http://www.sungevity.com/",
      "techs": "PHP, Cake, JS MVC, MySQL",
      "duties": "Development",
      "year": 2011
    },
  ])

  const projects = JSON.parse(data)
  const source = $("#portfolio-item-template").html()
  const template = Handlebars.compile(source)

  projects.forEach(project => {
    const html = template({
      name: project.name,
      url: project.url,
      tools: project.techs,
      duties: project.duties
    })
    $('#portfolio-items').append(html)
  })
})
