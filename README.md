# Paradise Papers Neo4J Visualization

A quick and dirty visualization of the Paradise Papers relationships using Neo4J and react-force-graph

![screenshot](https://raw.githubusercontent.com/lyeith/neo4j_react_force_graph/master/blob/screenshot.png)

## Dataset

ICIJ Open Dataset - Offshore Leaks

[Paradise Papers](https://offshoreleaks-data.icij.org/offshoreleaks/csv/csv_paradise_papers.2018-02-14.zip)

## Prerequisites

Docker \
[Offical Documentation](https://docs.docker.com/engine/install/)

NodeJS \
[Official Documentation](https://www.npmjs.com/get-npm)

## Configuration

Neo4J Access Control

- /src/conf/db.js \
  URI, Port, Username, Password
- /neo4j/Dockerfile \
  ENV NEO4J_AUTH=username/password

## Neo4J Deployment

#### On Docker Server
```shell
cd neo4j 
/bin/bash docker_build.sh
```
## React App Deployment

### Building ReactApp Static Assets
```shell
npx npm-force-resolutions 
npm install 
npm run build
```
Assets will be available in ./build for hosting as a static site \
Common dev-related npm scripts are also available

# Misc
Exploratory Data analysis nodebook available in /eda