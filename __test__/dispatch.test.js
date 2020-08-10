const dispatcher = require("../src/dispatch");

describe("test dispatcher", () => {

    test("test groupIDs function", () => {
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
        let dp = new dispatcher("Gene", ids);
        dp.groupIDs();
        expect(dp.grouped_ids).toHaveProperty('NCBIGene');
        expect(Object.keys(dp.grouped_ids).length).toBe(1);
        expect(dp.grouped_ids.NCBIGene.length).toBe(2);
    })
})