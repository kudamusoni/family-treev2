// mockFamilyData.js
export const mockFamilyData = {
  familyTree: {
    members: {
      "robert-anderson": {
        id: "robert-anderson",
        firstName: "Robert",
        lastName: "Anderson",
        gender: "male",
        birthDate: "1940-05-15",
        deathDate: "2015-03-22",
        birthPlace: "Chicago, IL",
        occupation: "Architect",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "margaret-wilson",
            marriageDate: "1965-08-20",
            divorceDate: null
          }
        ],
        children: ["james-anderson", "sarah-anderson"]
      },
      "margaret-wilson": {
        id: "margaret-wilson",
        firstName: "Margaret",
        lastName: "Wilson",
        gender: "female",
        birthDate: "1942-11-30",
        deathDate: null,
        birthPlace: "Boston, MA",
        occupation: "Teacher",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "robert-anderson",
            marriageDate: "1965-08-20",
            divorceDate: null
          }
        ],
        children: ["james-anderson", "sarah-anderson"]
      },
      "james-anderson": {
        id: "james-anderson",
        firstName: "James",
        lastName: "Anderson",
        gender: "male",
        birthDate: "1968-03-12",
        deathDate: null,
        birthPlace: "New York, NY",
        occupation: "Software Engineer",
        parents: {
          father: "robert-anderson",
          mother: "margaret-wilson"
        },
        spouses: [
          {
            id: "emily-chen",
            marriageDate: "1995-06-15",
            divorceDate: null
          }
        ],
        children: ["michael-anderson", "sophia-anderson"]
      },
      "emily-chen": {
        id: "emily-chen",
        firstName: "Emily",
        lastName: "Chen",
        gender: "female",
        birthDate: "1970-09-25",
        deathDate: null,
        birthPlace: "San Francisco, CA",
        occupation: "Doctor",
        parents: {
          father: "wei-chen",
          mother: "mei-liu"
        },
        spouses: [
          {
            id: "james-anderson",
            marriageDate: "1995-06-15",
            divorceDate: null
          }
        ],
        children: ["michael-anderson", "sophia-anderson"]
      },
      "wei-chen": {
        id: "wei-chen",
        firstName: "Wei",
        lastName: "Chen",
        gender: "male",
        birthDate: "1945-02-18",
        deathDate: "2018-11-03",
        birthPlace: "Shanghai, China",
        occupation: "Professor",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "mei-liu",
            marriageDate: "1968-09-10",
            divorceDate: null
          }
        ],
        children: ["emily-chen", "david-chen"]
      },
      "mei-liu": {
        id: "mei-liu",
        firstName: "Mei",
        lastName: "Liu",
        gender: "female",
        birthDate: "1947-07-22",
        deathDate: null,
        birthPlace: "Beijing, China",
        occupation: "Artist",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "wei-chen",
            marriageDate: "1968-09-10",
            divorceDate: null
          }
        ],
        children: ["emily-chen", "david-chen"]
      },
      "david-chen": {
        id: "david-chen",
        firstName: "David",
        lastName: "Chen",
        gender: "male",
        birthDate: "1973-12-05",
        deathDate: null,
        birthPlace: "San Francisco, CA",
        occupation: "Business Consultant",
        parents: {
          father: "wei-chen",
          mother: "mei-liu"
        },
        spouses: [
          {
            id: "sophia-rodriguez",
            marriageDate: "2000-04-28",
            divorceDate: null
          }
        ],
        children: ["lucas-chen", "olivia-chen"]
      },
      "sophia-rodriguez": {
        id: "sophia-rodriguez",
        firstName: "Sophia",
        lastName: "Rodriguez",
        gender: "female",
        birthDate: "1975-08-15",
        deathDate: null,
        birthPlace: "Los Angeles, CA",
        occupation: "Marketing Director",
        parents: {
          father: "carlos-rodriguez",
          mother: "isabella-martinez"
        },
        spouses: [
          {
            id: "david-chen",
            marriageDate: "2000-04-28",
            divorceDate: null
          }
        ],
        children: ["lucas-chen", "olivia-chen"]
      },
      "carlos-rodriguez": {
        id: "carlos-rodriguez",
        firstName: "Carlos",
        lastName: "Rodriguez",
        gender: "male",
        birthDate: "1950-06-12",
        deathDate: null,
        birthPlace: "Mexico City, Mexico",
        occupation: "Restaurant Owner",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "isabella-martinez",
            marriageDate: "1972-11-30",
            divorceDate: null
          }
        ],
        children: ["sophia-rodriguez", "miguel-rodriguez"]
      },
      "isabella-martinez": {
        id: "isabella-martinez",
        firstName: "Isabella",
        lastName: "Martinez",
        gender: "female",
        birthDate: "1952-09-03",
        deathDate: null,
        birthPlace: "Barcelona, Spain",
        occupation: "Chef",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "carlos-rodriguez",
            marriageDate: "1972-11-30",
            divorceDate: null
          }
        ],
        children: ["sophia-rodriguez", "miguel-rodriguez"]
      },
      "miguel-rodriguez": {
        id: "miguel-rodriguez",
        firstName: "Miguel",
        lastName: "Rodriguez",
        gender: "male",
        birthDate: "1978-03-25",
        deathDate: null,
        birthPlace: "Los Angeles, CA",
        occupation: "Music Producer",
        parents: {
          father: "carlos-rodriguez",
          mother: "isabella-martinez"
        },
        spouses: [],
        children: []
      },
      "sarah-anderson": {
        id: "sarah-anderson",
        firstName: "Sarah",
        lastName: "Anderson",
        gender: "female",
        birthDate: "1970-07-18",
        deathDate: null,
        birthPlace: "New York, NY",
        occupation: "Lawyer",
        parents: {
          father: "robert-anderson",
          mother: "margaret-wilson"
        },
        spouses: [
          {
            id: "david-taylor",
            marriageDate: "1998-09-30",
            divorceDate: "2010-05-15"
          },
          {
            id: "michael-brown",
            marriageDate: "2012-08-22",
            divorceDate: null
          }
        ],
        children: ["emma-taylor", "noah-brown"]
      },
      "david-taylor": {
        id: "david-taylor",
        firstName: "David",
        lastName: "Taylor",
        gender: "male",
        birthDate: "1969-04-08",
        deathDate: null,
        birthPlace: "Seattle, WA",
        occupation: "Marketing Director",
        parents: {
          father: "william-taylor",
          mother: "elizabeth-johnson"
        },
        spouses: [
          {
            id: "sarah-anderson",
            marriageDate: "1998-09-30",
            divorceDate: "2010-05-15"
          },
          {
            id: "jennifer-white",
            marriageDate: "2013-06-14",
            divorceDate: null
          }
        ],
        children: ["emma-taylor", "lily-taylor"]
      },
      "michael-brown": {
        id: "michael-brown",
        firstName: "Michael",
        lastName: "Brown",
        gender: "male",
        birthDate: "1971-11-12",
        deathDate: null,
        birthPlace: "Portland, OR",
        occupation: "University Professor",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "sarah-anderson",
            marriageDate: "2012-08-22",
            divorceDate: null
          }
        ],
        children: ["noah-brown"]
      },
      "jennifer-white": {
        id: "jennifer-white",
        firstName: "Jennifer",
        lastName: "White",
        gender: "female",
        birthDate: "1975-02-28",
        deathDate: null,
        birthPlace: "Chicago, IL",
        occupation: "Journalist",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "david-taylor",
            marriageDate: "2013-06-14",
            divorceDate: null
          }
        ],
        children: ["lily-taylor"]
      },
      "william-taylor": {
        id: "william-taylor",
        firstName: "William",
        lastName: "Taylor",
        gender: "male",
        birthDate: "1942-08-30",
        deathDate: "2020-12-15",
        birthPlace: "Boston, MA",
        occupation: "Judge",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "elizabeth-johnson",
            marriageDate: "1965-04-12",
            divorceDate: null
          }
        ],
        children: ["david-taylor", "susan-taylor"]
      },
      "elizabeth-johnson": {
        id: "elizabeth-johnson",
        firstName: "Elizabeth",
        lastName: "Johnson",
        gender: "female",
        birthDate: "1944-05-17",
        deathDate: null,
        birthPlace: "Philadelphia, PA",
        occupation: "Librarian",
        parents: {
          father: null,
          mother: null
        },
        spouses: [
          {
            id: "william-taylor",
            marriageDate: "1965-04-12",
            divorceDate: null
          }
        ],
        children: ["david-taylor", "susan-taylor"]
      },
      "susan-taylor": {
        id: "susan-taylor",
        firstName: "Susan",
        lastName: "Taylor",
        gender: "female",
        birthDate: "1972-01-25",
        deathDate: null,
        birthPlace: "Seattle, WA",
        occupation: "Psychologist",
        parents: {
          father: "william-taylor",
          mother: "elizabeth-johnson"
        },
        spouses: [],
        children: []
      },
      "michael-anderson": {
        id: "michael-anderson",
        firstName: "Michael",
        lastName: "Anderson",
        gender: "male",
        birthDate: "1998-11-03",
        deathDate: null,
        birthPlace: "Chicago, IL",
        occupation: "Software Developer",
        parents: {
          father: "james-anderson",
          mother: "emily-chen"
        },
        spouses: [],
        children: []
      },
      "sophia-anderson": {
        id: "sophia-anderson",
        firstName: "Sophia",
        lastName: "Anderson",
        gender: "female",
        birthDate: "2000-05-22",
        deathDate: null,
        birthPlace: "Chicago, IL",
        occupation: "Medical Student",
        parents: {
          father: "james-anderson",
          mother: "emily-chen"
        },
        spouses: [],
        children: []
      },
      "emma-taylor": {
        id: "emma-taylor",
        firstName: "Emma",
        lastName: "Taylor",
        gender: "female",
        birthDate: "2002-12-15",
        deathDate: null,
        birthPlace: "Seattle, WA",
        occupation: "College Student",
        parents: {
          father: "david-taylor",
          mother: "sarah-anderson"
        },
        spouses: [],
        children: []
      },
      "lily-taylor": {
        id: "lily-taylor",
        firstName: "Lily",
        lastName: "Taylor",
        gender: "female",
        birthDate: "2015-03-30",
        deathDate: null,
        birthPlace: "Seattle, WA",
        occupation: "Student",
        parents: {
          father: "david-taylor",
          mother: "jennifer-white"
        },
        spouses: [],
        children: []
      },
      "noah-brown": {
        id: "noah-brown",
        firstName: "Noah",
        lastName: "Brown",
        gender: "male",
        birthDate: "2014-09-08",
        deathDate: null,
        birthPlace: "Portland, OR",
        occupation: "Student",
        parents: {
          father: "michael-brown",
          mother: "sarah-anderson"
        },
        spouses: [],
        children: []
      },
      "lucas-chen": {
        id: "lucas-chen",
        firstName: "Lucas",
        lastName: "Chen",
        gender: "male",
        birthDate: "2003-07-12",
        deathDate: null,
        birthPlace: "San Francisco, CA",
        occupation: "High School Student",
        parents: {
          father: "david-chen",
          mother: "sophia-rodriguez"
        },
        spouses: [],
        children: []
      },
      "olivia-chen": {
        id: "olivia-chen",
        firstName: "Olivia",
        lastName: "Chen",
        gender: "female",
        birthDate: "2005-10-25",
        deathDate: null,
        birthPlace: "San Francisco, CA",
        occupation: "High School Student",
        parents: {
          father: "david-chen",
          mother: "sophia-rodriguez"
        },
        spouses: [],
        children: []
      }
    },
    metadata: {
      lastUpdated: "2025-02-15",
      createdBy: "Family Historian",
      familyName: "Anderson-Chen Family Tree",
      description: "A comprehensive family tree showing the connections between the Anderson, Chen, Taylor, and Rodriguez families",
      privacy: "private",
      version: "2.0",
      notes: "Includes multiple marriages, cross-cultural relationships, and four generations of family history"
    }
  }
};