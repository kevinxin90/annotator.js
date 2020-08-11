const annotate = require("../src/index");

describe("test main function", () => {

    test("test with gene ids", async () => {
        const ids = {
            "NCBIGene:4888": {
                "id": {
                    "label": "neuropeptide Y receptor Y6 (pseudogene)",
                    "identifier": "NCBIGene:4888"
                },
                "db_ids": {
                    "NCBIGene": [
                        "4888"
                    ],
                    "HGNC": [
                        "7959"
                    ],
                    "SYMBOL": [
                        "NPY6R"
                    ],
                    "UMLS": [
                        "C1417819"
                    ],
                    "name": [
                        "neuropeptide Y receptor Y6 (pseudogene)"
                    ]
                },
                "type": "Gene",
                "curies": [
                    "NCBIGene:4888",
                    "HGNC:7959",
                    "SYMBOL:NPY6R",
                    "UMLS:C1417819"
                ]
            },
            "NCBIGene:4597": {
                "id": {
                    "label": "mevalonate diphosphate decarboxylase",
                    "identifier": "NCBIGene:4597"
                },
                "db_ids": {
                    "NCBIGene": [
                        "4597"
                    ],
                    "ENSEMBL": [
                        "ENSG00000167508"
                    ],
                    "HGNC": [
                        "7529"
                    ],
                    "SYMBOL": [
                        "MVD"
                    ],
                    "UMLS": [
                        "C1417507"
                    ],
                    "name": [
                        "mevalonate diphosphate decarboxylase"
                    ]
                },
                "type": "Gene",
                "curies": [
                    "NCBIGene:4597",
                    "ENSEMBL:ENSG00000167508",
                    "HGNC:7529",
                    "SYMBOL:MVD",
                    "UMLS:C1417507"
                ]
            }
        };
        let res = await annotate("Gene", ids);
        expect(res).toHaveProperty('NCBIGene:4888');
        expect(Object.keys(res).length).toBe(2);
        expect(res["NCBIGene:4888"]).toHaveProperty("alias")
    })

    test("test with chemical ids", async () => {
        const ids = {
            "CHEBI:8863": {
                "id": {
                    "label": "RILUZOLE",
                    "identifier": "CHEBI:8863"
                },
                "db_ids": {
                    "CHEBI": [
                        "CHEBI:8863"
                    ],
                    "CHEMBL.COMPOUND": [
                        "CHEMBL744"
                    ]
                }
            },
            "CHEBI:133809": {
                "id": {
                    "label": "ANISINDIONE",
                    "identifier": "CHEBI:133809"
                },
                "db_ids": {
                    "CHEBI": [
                        "CHEBI:133809"
                    ],
                    "CHEMBL.COMPOUND": [
                        "CHEMBL712"
                    ]
                }
            }
        };
        let res = await annotate("ChemicalSubstance", ids);
        expect(res).toHaveProperty('CHEBI:133809');
        expect(Object.keys(res).length).toBe(2);
        expect(res["CHEBI:133809"]).toHaveProperty("max_phase")
    })
})