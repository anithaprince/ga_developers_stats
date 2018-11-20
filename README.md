# README

This README would normally document whatever steps are necessary to get the
application up and running.

 * explanations of the technologies used

  We had a bit of a struggle on coming up with an idea of what we should do and came to a conclusion of doing something that was a bit more professional. We both had many ideas of what we wanted to do and how we should do it but as the time progressed our ideas became more solid with the time as we progressed with the project. Anitha came to an idea of doing a graph looking at the time and I had an idea of having the table to alter colors from one line to the next.

 * the approach was taken

  We tried to split our work evenly but as it came on something that we couldn't accomplish we took each others work and tried to work around it before asking for help, or if we got something working we would toss it back to each other and continue to work on that.

 * unsolved problems

  Our heroku was giving an error for EditForm not found while localhost is running fine. We did not get to have a fixed table header and graph is not done, so we didn't get to do what we had expected.

We would have like to populate dynamic charts by integrating psql and react. But due to lack of time we populated charts for the 200 seed records by running following commands in bash:


select count (*) from developers;
 count
   200
(1 row)


select technology, count(technology) from developers group by technology;
  technology   | count
---------------+-------
 PHP           |    41
 NERDS Stack   |    35
 Ruby on Rails |    29
 LAMP Stack    |    25
 MEAN Stack    |    45
 MERN Stack    |    24
 MEAN          |     1
(7 rows)

SELECT
 ga_site,
 count(ga_site)
FROM
 developers
GROUP BY
 ga_site;

     ga_site     | count
-----------------+-------
 New York City   |    14
 Remote          |     1
 Phoenix         |    15
 San Francisco   |    12
 Washington D.C. |     8
 Dallas          |    13
 Austin          |     9
 Chicago         |    13
 Denver          |    15
 San Diego       |    10
 Detroit         |    17
 Los Angeles     |    16
 Seattle         |    14
 Atlanta         |    13
 Boston          |    15
 Miami           |    15
(16 rows)


 DATABASE=> select state, count(state) from developers group by state;
     state      | count
----------------+-------
 Vermont        |     2
 Nevada         |     5
 New York       |     3
 West Virginia  |     2
 South Carolina |     5
 Hawaii         |     2
 New Mexico     |     4
 Arkansas       |     6
 Missouri       |     4
 South Dakota   |     3
 Ohio           |     4
 Minnesota      |     6
 Washington     |     5
 Kentucky       |     6
 Arizona        |     3
 Maryland       |     4
 Wyoming        |     3
 New Hampshire  |     3
 North Dakota   |     5
 Nebraska       |     2
 Tennessee      |     3
 Oregon         |     1
 Idaho          |     5
 Alabama        |     5
 North Carolina |     2
 Colorado       |     4
 Mississippi    |     4
 Florida        |     4
 Delaware       |     3
 Louisiana      |     8
 New Jersey     |     3
 Connecticut    |     3
 Indiana        |     7
 Iowa           |     2
 Massachusetts  |     7
 Rhode Island   |     3
 Michigan       |     1
 Pennsylvania   |     6
 Montana        |     6
 Wisconsin      |     5
 Illinois       |     4
 Georgia        |     2
 Utah           |     2
 California     |     8
 Maine          |     6
 Kansas         |     4
 Texas          |     6
 Alaska         |     5
 Oklahoma       |     4
(49 rows)

select count (*) from developers WHERE age<=18 ;
 count 
     6
select count (*) from developers WHERE age>18 AND  age<=26 ;
 count 
    42
select count (*) from developers WHERE age>26 AND  age<=40 ;
 count 
    95
select count (*) from developers WHERE age>40 AND  age<=55 ;
 count 
    57
select count (*) from developers WHERE age>55;
 count 
     0


* Ruby version
  Struggling through ruby versions from Sumit's computer to Anitha's computer and to Herkoku's version.

  In order to solve it we had to manually change the versions through the gemfile and .ruby-version
ruby '2.3.7'
ruby '2.5.3'


* System dependencies

* Configuration

* Database creation



* Database initialization

  rails db:seed

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
https://stackoverflow.com/questions/23233414/how-to-push-seeds-rb-to-existing-rails-app-on-heroku/23233638
