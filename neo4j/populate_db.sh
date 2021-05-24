#!/bin/sh

NEO4J_HOME=/var/lib/neo4j
URI="https://offshoreleaks-data.icij.org/offshoreleaks/csv/"
DATA_FILE="csv_paradise_papers.2018-02-14.zip"
DATA_DIR="/csv"

mkdir $DATA_DIR
cd $DATA_DIR

wget "$URI$DATA_FILE"
unzip -o "$DATA_FILE"

for i in ${DATA_DIR}/*.csv
do
    echo "Adding ID to node_id property in file: $i"
    sed -i -e '1,1 s/"node_id"/"node_id:ID"/g' $i
done

echo "Renaming Relationship Headers..."
sed -i -e '1,1 s/"START_ID","TYPE","END_ID"/"node_id:START_ID","rel_type:TYPE","node_id:END_ID"/' ${DATA_DIR}/paradise_papers.edges.csv

echo "Importing CSVs into Neo4J..."
$NEO4J_HOME/bin/neo4j-admin import \
  --nodes:Address ${DATA_DIR}/paradise_papers.nodes.address.csv \
  --nodes:Entity ${DATA_DIR}/paradise_papers.nodes.entity.csv \
  --nodes:Other ${DATA_DIR}/paradise_papers.nodes.intermediary.csv \
  --nodes:Intermediary ${DATA_DIR}/paradise_papers.nodes.other.csv \
  --nodes:Officer ${DATA_DIR}/paradise_papers.nodes.officer.csv \
  --relationships ${DATA_DIR}/paradise_papers.edges.csv \
  --multiline-fields=true
