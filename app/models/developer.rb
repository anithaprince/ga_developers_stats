class Developer

  attr_reader :id, :name, :age, :state, :ga_site, :company, :technology

  # connect to postgres
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'ga_developers_stats_development')
  end


  DB.prepare("create_developers",
    <<-SQL
        INSERT INTO developers (name, age, state, ga_site, company, technology)
        VALUES ($1, $2, $3, $4, $5, $6 )
        RETURNING id, name, age, state, ga_site, company, technology;
    SQL
  )
  # create one
    def self.create(opts={})
        results = DB.exec_prepared( "create_developers", [opts["name"],opts["age"],opts["state"],opts["ga_site"],opts["company"],opts["technology"]]
        )
        return Developer.new()
    end

end
