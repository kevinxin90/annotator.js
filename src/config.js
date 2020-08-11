exports.APIMETA = {
    "Gene": {
        "semantic": "Gene",
        "api_name": "mygene.info",
        "url": "https://mygene.info/v3/query",
        "id": {
            "rank": ["NCBIGene", "ENSEMBL", "HGNC", "SYMBOL", "OMIM", "UniProtKB", "UMLS", "MGI", "name"],
            "mapping": {
                "NCBIGene": ["entrezgene"],
                "name": ["name"],
                "SYMBOL": ["symbol"],
                "UMLS": ["umls.cui", "umls.protein_cui"],
                "HGNC": ["HGNC"],
                "UNIPROTKB": ["uniprot.Swiss-Prot"],
                "ENSEMBL": ["ensembl.gene"],
                "OMIM": ["OMIM"],
                "MGI": ["MGI"]
            }
        },
        "mapping": {
            "alias": {
                "fields": ["alias"],
                "nested": false
            },
            "ec": {
                "fields": ["ec"],
                "nested": false
            },
            "generif": {
                "fields": ["generif"],
                "nested": true
            },
            "genomic_position": {
                "fields": ["genomic_pos"],
                "nested": true
            },
            "biological_process": {
                "fields": ["go.BP"],
                "nested": true
            },
            "cellular_component": {
                "fields": ["go.CC"],
                "nested": true
            },
            "molecular_function": {
                "fields": ["go.MF"],
                "nested": true
            },
            "interpro": {
                "fields": ["interpro"],
                "nested": true
            },
            "ipi": {
                "fields": ["ipi"],
                "nested": false
            },
            "biocarta": {
                "fields": ["pathway.biocarta"],
                "nested": true
            },
            "kegg": {
                "fields": ["pathway.kegg"],
                "nested": true
            },
            "reactome": {
                "fields": ["pathway.reactome"],
                "nested": true
            },
            "wikipathways": {
                "fields": ["pathway.wikipathways"],
                "nested": true
            },
            "pfam": {
                "fields": ["pfam"],
                "nested": false
            },
            "summary": {
                "fields": ["summary"],
                "nested": false
            },
            "type": {
                "fields": ["type_of_gene"],
                "nested": false
            }
        }
    },
    "ChemicalSubstance": {
        "semantic": "ChemicalSubstance",
        "api_name": "mychem.info",
        "url": "https://mychem.info/v1/query",
        "id": {
            "rank": ["CHEBI", "CHEMBL.COMPOUND", "DRUGBANK", "PUBCHEM", "MESH", "INCHI", "INCHIKEY", "UNII", "KEGG", "UMLS", "name"],
            "mapping": {
                "CHEMBL.COMPOUND": ["chembl.molecule_chembl_id", "drugbank.xrefs.chembl", "drugcentral.xrefs.chembl_id"],
                "DRUGBANK": ["drugcentral.xrefs.drugbank_id", "pharmgkb.xrefs.drugbank", "chebi.xrefs.drugbank", "drugbank.id"],
                "PUBCHEM": ["pubchem.cid", "drugbank.xrefs.pubchem.cid", "drugcentral.xrefs.pubchem_cid", "pharmgkb.xrefs.pubchem.cid"],
                "CHEBI": ["chebi.id", "chembl.chebi_par_id", "drugbank.xrefs.chebi", "drugcentral.xrefs.chebi"],
                "UMLS": ["drugcentral.xrefs.umlscui", "pharmgkb.xrefs.umls", "umls.cui"],
                "MESH": ["umls.mesh", "drugcentral.xrefs.mesh_descriptor_ui", "ginas.xrefs.MESH", "pharmgkb.xrefs.mesh"],
                "UNII": ["drugcentral.xrefs.unii", "unii.unii", "aeolus.unii", "ginas.unii"],
                "INCHIKEY": ["drugbank.inchi_key", "ginas.inchikey", "unii.inchikey", "chebi.inchikey"],
                "INCHI": ["drugbank.inchi", "chebi.inchi", "chembl.inchi"],
                "KEGG": ["drugbank.xrefs.kegg.cid"],
                "name": ["chembl.pref_name", "drugbank.name", "umls.name", "ginas.preferred_name", "pharmgkb.name", "chebi.name"]
            }
        },
        "mapping": {
            "max_phase": {
                "fields": ["chembl.max_phase"],
                "nested": false
            },
            "molecular_weight": {
                "fields": ["chembl.molecule_properties.full_mwt", "drugbank.weight.average"],
                "nested": false
            },
            "AlogP": {
                "fields": ["chembl.molecule_properties.alogp"],
                "nested": false
            },
            "ATC_classification": {
                "fields": ["chembl.atc_classifications", "drugbank.xrefs.atc_codes"],
                "nested": false
            },
            "molecule_type": {
                "fields": ["chembl.molecule_type"],
                "nested": false
            },
            "targets": {
                "fields": ["drugbank.targets"],
                "nested": true
            },
            "enzymes": {
                "fields": ["drugbank.enzymes"],
                "nested": true
            },
            "transporters": {
                "fields": ["drugbank.transporters"],
                "nested": true
            },
            "formula": {
                "fields": ["drugbank.formula"],
                "nested": false
            },
            "absorption": {
                "fields": ["drugbank.pharmacology.absorption"],
                "nested": false
            },
            "indication": {
                "fields": ["drugbank.pharmacology.indication"],
                "nested": false
            },
            "metabolism": {
                "fields": ["drugbank.pharmacology.metabolism"],
                "nested": false
            },
            "pharmacodynamics": {
                "fields": ["drugbank.pharmacology.pharmacodynamics"],
                "nested": false
            },
            "protein_binding": {
                "fields": ["drugbank.pharmacology.protein_binding"],
                "nested": false
            },
            "salts": {
                "fields": ["drugbank.salts"],
                "nested": true
            },
            "synonyms": {
                "fields": ["drugbank.synonyms"],
                "nested": false
            },
            "drug-class": {
                "fields": ["drugbank.taxonomy.class"],
                "nested": false
            }
        }
    }
}

exports.MAX_CONCURRENT_QUERIES = 4;

exports.CURIE = {
    ALWAYS_PREFIXED: ["GO", "CHEBI", "HP", "MONDO", "DOID", "EFO", "UBERON", "MP", "CL", "MGI"]
}