// mockFamilyData.js
export const mockFamilyData = {
  familyTree: {
    members: {
      "noel-musoni-0001": {
        id: "noel-musoni-0001",
        firstName: "Noel",
        lastName: "Musoni",
        gender: "male",
        birthDate: "1940-05-15",
        deathDate: "2023-11-20",
        birthPlace: "Harare, Zimbabwe",
        occupation: "Lead Camera Man",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "priscilla-musoni-0002",
            marriageDate: "1979-08-20",
            divorceDate: null
          }
        ],
        children: ["lynn-musoni-0003", "tafadzwa-musoni-0004", "farai-musoni-0005"]
      },
      "priscilla-musoni-0002": {
        id: "priscilla-musoni-0002",
        firstName: "Priscilla",
        lastName: "Musoni",
        gender: "female",
        birthDate: "1947-11-30",
        deathDate: null,
        birthPlace: "Harare, Zimbabwe",
        occupation: "Sales Exec",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "noel-musoni-0001",
            marriageDate: "1979-08-20",
            divorceDate: null
          }
        ],
        children: ["lynn-musoni-0003", "tafadzwa-musoni-0004", "farai-musoni-0005"]
      },
      "lynn-musoni-0003": {
        id: "lynn-musoni-0003",
        firstName: "Lynn",
        lastName: "Musoni",
        gender: "female",
        birthDate: "1983-12-20",
        deathDate: null,
        birthPlace: "Harare, Zimbabwe",
        occupation: "Head of Marketing",
        parents: {
          father: "noel-musoni-0001",
          mother: "priscilla-musoni-0002"
        },
        spouses: [
          {
            id: "simon-acquaah-0006",
            marriageDate: "2011-08-20",
            divorceDate: null
          }
        ],
        children: ["kuda-musoni-0007", "kirsti-acquaah-0008", "kieran-acquaah-0009"]
      },
      "simon-acquaah-0006": {
        id: "simon-acquaah-0006",
        firstName: "Simon",
        lastName: "Acquaah",
        gender: "male",
        birthDate: "1979-12-19",
        deathDate: null,
        birthPlace: "Accra, Ghana",
        occupation: "Head of Finance",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "lynn-musoni-0003",
            marriageDate: "2011-08-20",
            divorceDate: null
          }
        ],
        children: ["kuda-musoni-0007", "kirsti-acquaah-0008", "kieran-acquaah-0009"]
      },
      "kuda-musoni-0007": {
        id: "kuda-musoni-0007",
        firstName: "Kuda",
        lastName: "Musoni",
        gender: "male",
        birthDate: "2002-07-08",
        deathDate: null,
        birthPlace: "Luton, England",
        occupation: "CEO",
        parents: {
          father: "simon-acquaah-0006",
          mother: "lynn-musoni-0003"
        },
        spouses: [],
        children: []
      },
      "kirsti-acquaah-0008": {
        id: "kirsti-acquaah-0008",
        firstName: "Kirsti",
        lastName: "Acquaah",
        gender: "female",
        birthDate: "2010-11-18",
        deathDate: null,
        birthPlace: "Milton Keynes, England",
        occupation: "Head of Creative",
        parents: {
          father: "simon-acquaah-0006",
          mother: "lynn-musoni-0003"
        },
        spouses: [],
        children: []
      },
      "kieran-acquaah-0009": {
        id: "kieran-acquaah-0009",
        firstName: "Kieran",
        lastName: "Acquaah",
        gender: "male",
        birthDate: "2015-06-23",
        deathDate: null,
        birthPlace: "Stoke-on-Trent, England",
        occupation: "Intern",
        parents: {
          father: "simon-acquaah-0006",
          mother: "lynn-musoni-0003"
        },
        spouses: [],
        children: []
      },
      "tafadzwa-musoni-0004": {
        id: "tafadzwa-musoni-0004",
        firstName: "Tafadzwa",
        lastName: "Musoni",
        gender: "male",
        birthDate: "1983-12-20",
        deathDate: null,
        birthPlace: "Harare, Zimbabwe",
        occupation: "Head of Agriculture",
        parents: {
          father: "noel-musoni-0001",
          mother: "priscilla-musoni-0002"
        },
        spouses: [],
        children: []
      },
      "farai-musoni-0005": {
        id: "farai-musoni-0005",
        firstName: "Farai",
        lastName: "Musoni",
        gender: "male",
        birthDate: "1983-12-20",
        deathDate: null,
        birthPlace: "Harare, Zimbabwe",
        occupation: "Sales Lead Exec",
        parents: {
          father: "noel-musoni-0001",
          mother: "priscilla-musoni-0002"
        },
        spouses: [],
        children: []
      },
    },
    metadata: {
      lastUpdated: "2025-02-15",
      createdBy: "Family Historian",
      familyName: "Musoni-Acquaah Family Tree",
      description: "A comprehensive family tree showing the connections between the Musoni, Acquaah families",
      privacy: "private",
      version: "2.0",
      notes: "Includes multiple marriages, cross-cultural relationships, and four generations of family history"
    }
  }
};