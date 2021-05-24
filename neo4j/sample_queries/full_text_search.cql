# Full Text Search
CALL db.index.fulltext.queryNodes("textSearch", "KIM") YIELD node, score
RETURN node.name, node.country_codes, node.countries, node.sourceID, score