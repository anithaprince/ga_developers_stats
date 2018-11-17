class Developer

  attr_reader :id, :name, :age, :state, :ga_site, :company, :technology
  # connect to postgres
  DB = PG.connect({
  :host => "localhost",
  :port => 5432,
  :dbname => "ga_developers_stats_development"
  })

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
