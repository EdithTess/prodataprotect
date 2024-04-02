export class $DataAffectedCategoryModel {
    id: string;
    name: string;
    // subCategories:DataAffectedSubCategoryModel[];
}

export class DataAffectedCategoryModel {
    id: string;
    name: string;
    subCategories:DataAffectedSubCategoryModel[];
}

export class DataAffectedSubCategoryModel {
    id: string;
    value: string;
}


export const PERSONAL_DATA_AFFECTED: Array<{
    id: string; name: string; subCategories: DataAffectedSubCategoryModel[]
}> =
       [ {
            id: "1",
            name: "Identifiers",
            subCategories: [
                {
                    id: "1",
                    value: "Name"
                },
                {
                    id: "2",
                    value: "Nationality"
                },
                {
                    id: "3",
                    value: "Age"
                },
                {
                    id: "4",
                    value: "Marital Status"
                },
                {
                    id: "5",
                    value: "Postal address"
                },
                {
                    id: "6",
                    value: "E-mail address"
                },
                {
                    id: "7",
                    value: "Unique personal or online identifie"
                },
                {
                    id: "8",
                    value: "Account name"
                },
                {
                    id: "9",
                    value: "Identification number, symbol or  other  particulars  assigned to a person"
                },
                {
                    id: "10",
                    value: "Social Security numbe"
                },
                {
                    id: "11",
                    value: "Driver's license or passport number; or"
                },
                {
                    id: "12",
                    value: "Another  form  of  persistent  or probabilistic identifier that can  identify  a  particular  data subject."
                }
            ]
        },
    {
        id: "2",
        name: "Individual Commercial Information",
        subCategories: [
            {
                id: "1",
                value: "Records of personal propert"
            },
            {
                id: "2",
                value: "Purchasing habits."
            }
        ]
    },
    {
        id: "3",
        name: "Biometric Information",
        subCategories: [
            {
                id: "1",
                value: "Genetic"
            },
            {
                id: "2",
                value: "Physiological."
            },
            {
                id: "3",
                value: "Behavioural."
            },
            {
                id: "4",
                value: "Biological characteristics."
            }
        ]
    },
    {
        id: "4",
        name: "Sensory Data",
        subCategories: [
            {
                id: "1",
                value: "Audio"
            },
            {
                id: "2",
                value: "Visual."
            },
            {
                id: "3",
                value: "Olfactory."
            },
            {
                id: "4",
                value: "Biological characteristics."
            }
        ]
    },
    {
        id: "5",
        name: "Internet or similar network activity",
        subCategories: [
            {
                id: "1",
                value: "Browsing history"
            },
            {
                id: "2",
                value: "Search history"
            },
            {
                id: "3",
                value: "Olfactory."
            },
            {
                id: "4",
                value: "Interaction with a website, application or advertisement"
            }
        ]
    },
    {
        id: "6",
        name: "Geolocation data",
        subCategories: [
            {
                id: "1",
                value: "Geolocation  data  means  data  taken from a user's device or online activity (web  or  app)  which  indicates  the geographical location of that device, including GPS data."
            }
        ]
    },
    {
        id: "7",
        name: "Education information",
        subCategories: [
            {
                id: "1",
                value: "Educational level"
            },
            {
                id: "2",
                value: "Educational qualifications"
            }
        ]
    },
    {
        id: "8",
        name: "Professional or Employment related information",
        subCategories: [
            {
                id: "1",
                value: "Professional association membership detail"
            },
            {
                id: "2",
                value: "Performance evaluations"
            },
            {
                id: "3",
                value: "Disciplinary action"
            }
        ]
    },
    {
        id: "9",
        name: "Inferences drawn from other personal data to create Individual profiles",
        subCategories: [
            {
                id: "1",
                value: "Preferences"
            },
            {
                id: "2",
                value: "Characteristics"
            },
            {
                id: "3",
                value: "Psychological trends"
            },
            {
                id: "3",
                value: "Predispositions"
            },
            {
                id: "3",
                value: "Behaviour"
            },
            {
                id: "3",
                value: "Attitudes"
            },
            {
                id: "3",
                value: "Intelligence"
            },
            {
                id: "3",
                value: "Abilities"
            },
            {
                id: "3",
                value: "Aptitudes"
            }
        ]
    },
    {
        id: "10",
        name: "Special personal data",
        subCategories: [
            {
                id: "1",
                value: "Religious or philosophical beliefs"
            },
            {
                id: "2",
                value: "Political opinion"
            },
            {
                id: "3",
                value: "Sexual life"
            },
            {
                id: "3",
                value: "Predispositions"
            },
            {
                id: "3",
                value: "Financial information"
            },
            {
                id: "3",
                value: "Health status or medical records of an individual"
            }
        ]
    }

]

