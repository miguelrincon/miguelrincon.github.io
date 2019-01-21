
I proudly graduated from the **Full Stack Web Developer Nanodegree by Udacity**, so I want to display my learning experience and explain how the course was structured and how it has benefited me.

[![Full Stack Web Developer Nanodegree](/img/posts/fullstack-nanodegree/certificate.png){:style="box-shadow: 0px 0px 25px grey;"}](https://confirm.udacity.com/THA2RQEN)
{:class="text-center"}

The course includes online lessons, access to the Udacity students and mentors forums and chats. The minimum requirement to graduate is to finish 3 projects which cover different aspects of Full-stack development.

The first project required me to create a brand new database and perform different high performance queries on it.

The other 2 projects required me to build and host a web application which hosts are catalog of products and allows users to edits them after signing in with their account, as well as hosting the application in a new Linux server.

All 3 projects are in my Github account as required by Udacity (see [1](https://github.com/miguelrincon/fullstack-nanodegree-logs-analysis), [2](https://github.com/miguelrincon/fullstack-nanodegree-catalog) and [3](https://github.com/miguelrincon/fullstack-nanodegree-catalog-server)).

(*Spoiler alert: If you are planning to take the Nanodegree, you might not want to have a detailed look at the code of the projects I built, you should try to build them yourself first.*)

## Project 1: Log analysis

The log analysis project required me to query more than 150,000 records and solve several questions about those records using SQL and Python to run the queries.

You can see the [output of the queries](https://github.com/miguelrincon/fullstack-nanodegree-logs-analysis/blob/master/results.txt) here:

```
Analysis will start...

Answer 1 - What are the most popular three articles of all time?:
  "Candidate is jerk, alleges rival" -- 338647 views
  "Bears love berries, alleges bear" -- 253801 views
  "Bad things gone, say good people" -- 170098 views
Answer 2 - Who are the most popular article authors of all time?:
  "Ursula La Multa" -- 507594 views
  "Rudolf von Treppenwitz" -- 423457 views
  "Anonymous Contributor" -- 170098 views
  "Markoff Chaney" -- 84557 views
Answer 3 - On which days did more than 1% of requests lead to errors?:
  "July 17, 2016" -- 2.26% errors
Answer 3 - On which days did more than 1% of requests lead to errors? (Alternative solution):
  "July 17, 2016" -- 2.26% errors

Analysis is finished.
```
In the past, I had mostly used ORMs (or other colleagues!) to write SQL queries. So this project was very useful for me to understand more deeply how lower level SQL queries are structured and get me writing them.

This project also introduced me to more advanced Python scripting (see the [SQL log analysis project in Github](https://github.com/miguelrincon/fullstack-nanodegree-logs-analysis)). The next project required full use of Python and a web framework to build a new application.

## Project 2: Catalog web application

The catalog web application uses Python 3 and PostgreSQL to create a product catalog. In the catalog, users can view and update product information that is persisted in a relational database.

The lists of products are sorted by category and contain information about a product.

The resulting project looks like this:

![Catalog Home](/img/posts/fullstack-nanodegree/catalog-home.png)

After logging in, using [Github OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/), users that login can maintain the list of products using their Github name and avatar:

![Catalog Edit](/img/posts/fullstack-nanodegree/catalog-edit.png)

The catalog app only allows me to create a new product after logging in using my Github account, loading my avatar and name from my own Github account.

![Catalog Product Updated](/img/posts/fullstack-nanodegree/catalog-screen.png)
{:style="box-shadow: 0px 0px 25px grey;"}

Finally, I can logout to visit the catalog and an anonymous user again.

![Catalog Logout](/img/posts/fullstack-nanodegree/catalog-logout.png)

The project requires makes use of several back-end technologies and concepts: **SQLAlchemy, Flask, Routing, OAuth and Sessions**. Is it [hosted in Github](https://github.com/miguelrincon/fullstack-nanodegree-catalog).

## Project 3: Catalog server configuration

The goal of the third project is to setup a Linux sever from scratch, so the installation required me to install several packages and setup so the application can be served securely.

The server is a EC2 t2.micro created in the N. Virginia data center, AWS Lightsail was not used so I could use the Free tier of EC2.

![EC2 t2.micro instance](/img/posts/fullstack-nanodegree/server-instance.png)

I setup the server with its own simple security group, to allow access on HTTP, NTP, and custom SSH port. Blocking all other incoming traffic.

![EC2 Security Groups](/img/posts/fullstack-nanodegree/server-security-groups.png)

The server I installed the needed tools, Apache2, PostgreSQL:

```
sudo apt-get update
sudo apt-get install apache2
sudo apt-get install python-pip3
sudo apt-get install postgresql
sudo apt-get upgrade
sudo apt-get autoremove
```

I configured SSH and UFW firewall to allow traffic over SSH.

```
sudo ufw status
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow <port>/tcp
sudo ufw allow www
sudo ufw allow ntp
sudo ufw enable
```

I also configured Apache to server the Python project using WSGI.

```conf
WSGIPythonPath /var/www/html/catalog/

# ...
<VirtualHost *:80>
        # ...
        WSGIScriptAlias / /var/www/html/catalog/application.wsgi
</VirtualHost>
```

You may find more details on the [Linux server setup here](https://github.com/miguelrincon/fullstack-nanodegree-catalog-server).

### Conclusions

The degree helped learn different technologies to the ones I am normally using at work. At the end of the 3 months of study, I had covered many topics, some of which I knew well, and some of which I had to learn (WSGI, for example, was not easy initially for me).

The quality of the lessons is outstanding; the content is very clear and with great video and sound quality. Some of the lessons showed their age (some older sections are written in Python 2 and some are in Python 3 and using different standards which made them confusing). There are other materials and components of the course which I have yet to use, such as their career portal, so I didn't write about it.

The project reviews are done manually by members of the Udacity team and they are very thorough. They were very helpful in checking my real progress and getting a second pair of eyes on my work.

After years building software it was refreshing to have new look and make something of my own again. I highly recommend the course to both experienced and newbies.

### Finally, a note on concepts & techs used

Some people might be interested in knowing which technologies and concepts are included in the degree:

- HTML
- Python
- JavaScript
- Git
- GitHub
- Unix shell
- Application Programming Interfaces (API)
- Relational Databases
- Python Database API
- SQL
- PostgreSQL
- HTTP
- Transmission Control Protocol (TCP)
- Servers
- CRUD
- Authentication
- RESTful API
- Vagrant
- Linux Server
- WSGI
- Apache
- Web Accessibility
- Asynchronous JavaScript
- AJAX

Some topics are covered in more depth than others, but after the degree, any student will have some working knowledge of them.