docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss3/app ../..
