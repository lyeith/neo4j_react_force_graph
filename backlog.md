# Tickets Completed & Backlog

## Completed Tickets
### Research & Exploration
Competitor & Requirements Research
- Neo4J Explorer
- Research Papers
- Other Visualization Libraries

Exploratory Data Analysis - Jupyter Notebook \
RDF vs LPG (Neo4J) \
Initial Neo4J Research \
Evaluation of implementing elasticsearch for full text (not needed, neo4j uses lucene)

### Planning (Product Goal)
Aid Research for Investigative Journalism
- Single User, Low user count
- Useful Visualizations (Drill Down exploration is important)

Key Features
- Graph Visualization (PoC)
- Entity Filters
- Relationship Filters

### Development

#### Neo4J
Neo4J Dockerfile \
CSV schema adaptation to match Neo4J import \
Populate Neo4J on Docker load script \
Docker Build script, wait for database to be populated before creating index

#### React WebApp
Bootstrap (Basic Grid Layout) \
use-neo4j
- Basic Connectivity
- use-effect for state changes (handle filters)

react-force-graph
- Handle null records before database has returned
- Explore neo4j return format and adapt object structure to match required input
- Node and Link auto-coloring
- Basic Dressing up (node size, link width, opacity)

react
- Create Provider to handle filter states


### DevOps
Deploy neo4j on homelab docker instance \
Create lxc container for Nginx (host static site)


# Backlog
### Additional Features/Views
- Table View
- Card View
- Full Text Search
- Table Pagination

### Feature Enhancement
Graph View
- Allow segmenting graph by sub-graphs
- Explore different centralities

Feature Augmentation
- Google Maps/Street View integration
- Drill down and focus on relevant nodes (click between views)
- Basic NLP on dataset to identify trends and keywords

### Performance Augmentation
- Explore shifting some processing to client side for improved performance and reduced database load (filters)
- Caching Layer
- Neo4J Indexing

### Future Exploration
- Postgres vs Neo4J performance for Data Cube view
- Explore Neo4J Plugin Ecosystem

### DevOps
- Application Logging
- Cloud Formation Template to easily spin up and down instances
- Create formal data pipeline to ease import process
- Create API Layer to remove need to directly query Neo4J (security)