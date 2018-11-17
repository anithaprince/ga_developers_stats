class Developer

  attr_reader :id, :name, :age, :state, :ga_site, :company, :technology

  # connect to postgres
if (ENV['DATABASE_URL'])
   uri = URI.parse(ENV['DATABASE_URL'])
   DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
 else
   DB = PG.connect(host:"localhost", port: 5432, dbname: 'ga_developers_stats_development')
 end

 def initialize(opts = {}, id = nil)
   @id = id.to_i
   @name = opts["name"]
   @age = opts["age"].to_i
   @state = opts["state"]
   @ga_site = opts["ga_site"]
   @company = opts["company"]
   @technology = opts["technology"]
 end

# ==================================================
#                  PREPARED STATEMENTS
# ==================================================
  DB.prepare("create_developer",
    <<-SQL
        INSERT INTO developers (name, age, state, ga_site, company, technology)
        VALUES ($1, $2, $3, $4, $5, $6 )
        RETURNING id, name, age, state, ga_site, company, technology;
    SQL
  )
  DB.prepare("delete_developer",
    "DELETE FROM developers WHERE id=$1 RETURNING id;"
  )

  DB.prepare("find_developer",
    <<-SQL
     SELECT *
      FROM developers
      WHERE developers.id=$1;
    SQL
)

  DB.prepare("update_developer",
  <<-SQL
        UPDATE developers
        SET name=$2, age=$3, state=$4, ga_site=$5, company=$6, technology=$7
        WHERE id=$1
        RETURNING id, name, age, state, ga_site, company, technology
        SQL
)

# =======================================
#                    Routes
# =======================================

# get all
def self.all
    results = DB.exec(
      <<-SQL
        SELECT * FROM developers
        ORDER BY developers.ga_site ASC;
      SQL
    )
    return results.map do |result|
      developer = Developer.new(result, result["id"])
    end
  end

  # get one by id
  def self.find(id)
    result = DB.exec_prepared("find_developer", [id]).first
    p result
    if result
      return developer = Developer.new(result, result["id"])
    else
      return { mesage: "sorry no developer found at this id: #{id}", status: 400 }
    end
  end

  # create one
  def self.create(opts={})
    results = DB.exec_prepared( "create_developer", [opts["name"],opts["age"],opts["state"],opts["ga_site"],opts["company"],opts["technology"]])
    return Developer.new(results.first, results.first["id"])
  end

  # delete one (by id)
  def self.delete(id)
    results = DB.exec_prepared("delete_developer", [id])
    p 'this is the result'
    p results
    if results.first
      return{ deleted: true }
    else
      return { message: "sorry cannot find developer at id: #{id}", status: 400 }
    end
  end

  # update one (by id)
  def self.update(id, opts={})
    results = DB.exec_prepared("update_developer",
      [
        id, opts["name"], opts["age"], opts["state"], opts["ga_site"], opts["company"], opts["technology"]
      ])
      if results.first
        return Developer.new(results.first, results.first["id"])
      else
        return{ message: "sorry cannot find developer at id: #{id}", status: 400 }
    end
  end
end
