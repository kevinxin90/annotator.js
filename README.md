[![Build Status](https://travis-ci.com/kevinxin90/annotator.js.svg?branch=master)](https://travis-ci.com/kevinxin90/annotator.js)
<a href='https://coveralls.io/github/kevinxin90/annotator.js?branch=master'><img src='https://coveralls.io/repos/github/kevinxin90/annotator.js/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://github.com/kevinxin90/annotator.js#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>


# Welcome to @biothings-explorer/annotator 👋

A nodejs module to annotate biomedical entities in batch for BioThings Explorer

### 🏠 [Homepage](https://github.com/kevinxin90/annotator.js)

## Install

```sh
npm i @biothings-explorer/annotator
```

## Usage

- Import and Initialize

    ```javascript
    const annotate = require("@biothings-explorer/annotator")
    ```

- Annotate Gene IDs

    ```javascript
    const gene_ids = {
      "NCBIGene:4888": {
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
              ]
          }
      },
      "NCBIGene:4597": {
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
              ]
            }
        }
    }
    let res = await annotate("Gene", gene_ids);
    console.log(res);
    // {"NCBIGene:4888": {"genomic_position": ..., "generif": ..., "biological_process": ...},"NCBIGene:4597": {"genomic_position": ..., "reactome": ..., "wikipathways": ...}}
    ```

- Annotate ChemicalSubstance IDs

    ```javascript
    const chemical_ids = {
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
    let res = await annotate("ChemicalSubstance", chemical_ids);
    console.log(res);
    // {"CHEBI:133809": {"max_phase": ..., "molecular_weight": ..., "molecular_type": ...}, "CHEBI:8863": {"max_phase": ..., "enzymes": ..., "targets": ...}}
    ```

## Run tests

```sh
npm run test
```

## Author

👤 **Jiwen Xin**

* Website: http://github.com/kevinxin90
* Github: [@kevinxin90](https://github.com/kevinxin90)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kevinxin90/annotator.js/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jiwen Xin](https://github.com/kevinxin90).<br />
This project is [ISC](https://github.com/kevinxin90/annotator.js/blob/master/LICENSE) licensed.