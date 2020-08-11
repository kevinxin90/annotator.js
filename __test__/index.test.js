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
})