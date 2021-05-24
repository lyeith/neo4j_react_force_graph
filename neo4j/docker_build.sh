docker build . --tag paradise_neo
docker run --rm -d --user="$(id -u)":"$(id -g)" -p7474:7474 -p7687:7687 --name neo paradise_neo

echo Waiting for Neo4J to be ready...
while ! curl --output /dev/null --silent --head --fail http://localhost:7474; do
  sleep 1 && echo -n .;
done

echo Creating Neo4J index
cat ./create_index.cql | docker exec neo cypher-shell -u neo4j -p SasBXziwPE57

echo Done