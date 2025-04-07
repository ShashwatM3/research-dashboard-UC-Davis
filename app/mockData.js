const mockProfessors = [
  {
      id: "1",
      name: "Shashwat M",
      title: "Associate Professor of Entrepreneurship",
      email: "shashwatgmalol@gmail.com",
      department: "Statistics",
      major: "Statistics",
      researchInterests: ["Statistics", "AI", "Covariance Estimation", "Graphical models"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      education: [
        { institution: "Harvard", degree: "PhD Statistics", years: "2018-2022" },
        { institution: "MIT", degree: "BS Mathematics", years: "2014-2018" }
      ],
      latestResearch: [
        "Statistical Methods in AI: A Comprehensive Study",
        "Covariance Estimation in High Dimensions",
        "Applications of Graph Theory in Social Networks"
      ]
    },
    {
      id: "2",
      name: "Harshil G",
      title: "Associate Professor of Statistics",
      email: "harshilgor06@gmail.com",
      department: "Statistics",
      major: "Statistics",
      researchInterests: ["Covariance", "Statistics", "High dimensional inference"],
      bio: "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      education: [
        { institution: "Stanford", degree: "PhD Statistics", years: "2016-2020" },
        { institution: "UC Berkeley", degree: "MS Data Science", years: "2014-2016" }
      ],
      latestResearch: [
        "Advances in Statistical Learning Theory",
        "Robust Methods for High-Dimensional Data",
        "Statistical Inference in Complex Systems"
      ]
    },
    {
      id: "3",
      name: "Joe Lawrence",
      title: "Professor of Computer Science",
      email: "uncle@ucdavis.edu",
      department: "Computer Science",
      major: "Computer Science",
      researchInterests: ["AI", "Machine Learning", "Neural Networks"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      education: [
        { institution: "Harvard", degree: "PhD HCI", years: "2024-28" },
        { institution: "VIT", degree: "BA Design", years: "1919-22" }
      ],
      latestResearch: [
        "Sticky Inflation: Monetary Policy when Debt Drags Inflation Expectations",
        "Uncle research dawg what??",
        "Mother research"
      ]
    },
    {
      id: "4",
      name: "Nicolas C",
      title: "Professor of Economics",
      email: "Nicolas@ucdavis.edu",
      department: "Economics",
      major: "Economics",
      researchInterests: ["Economics", "Monetary Policy", "Inflation"],
      bio: "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      education: [
        { institution: "Princeton", degree: "PhD Economics", years: "2010-2014" },
        { institution: "LSE", degree: "MSc Economics", years: "2008-2010" }
      ],
      latestResearch: [
        "Inflation Targeting in Developing Economies",
        "Monetary Policy and Financial Stability",
        "Economic Growth in Post-Pandemic Era"
      ]
    },
    {
      id: "5",
      name: "Sophia Chen",
      title: "Assistant Professor of Neuroscience",
      email: "schen@ucdavis.edu",
      department: "Neuroscience",
      major: "Neuroscience",
      researchInterests: ["Neuroscience", "Brain Imaging", "Cognitive Development"],
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      education: [
        { institution: "Johns Hopkins", degree: "PhD Neuroscience", years: "2015-2020" },
        { institution: "UCLA", degree: "BS Psychobiology", years: "2011-2015" }
      ],
      latestResearch: [
        "Neural Correlates of Decision Making",
        "Development of Executive Functions in Children",
        "Brain Plasticity in Learning Environments"
      ]
    },
    {
      id: "6",
      name: "Marcus Johnson",
      title: "Professor of Data Science",
      email: "mjohnson@ucdavis.edu",
      department: "Computer Science",
      major: "Data Science",
      researchInterests: ["Data Science", "AI", "Big Data Analytics"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      education: [
        { institution: "Carnegie Mellon", degree: "PhD Computer Science", years: "2012-2017" },
        { institution: "Georgia Tech", degree: "MS Computer Science", years: "2010-2012" }
      ],
      latestResearch: [
        "Scalable Machine Learning for Large Datasets",
        "Ethical Considerations in AI Deployment",
        "Data Visualization Techniques for Complex Information"
      ]
    },
    {
      id: "7",
      name: "John B Rundle",
      title: "Professor, Physics",
      email: "jbrundle@ucdavis.edu",
      department: "Physics",
      major: "Physics",
      researchInterests: ["Geophysical and Space Science"],
      bio: "Professor specializing in geophysical and space science research at UC Davis Physics department.",
      education: [
        { institution: "UC Berkeley", degree: "PhD Physics", years: "1985-1989" },
        { institution: "CalTech", degree: "BS Physics", years: "1981-1985" }
      ],
      latestResearch: [
        "Earth's Magnetic Field Variations",
        "Space Weather Prediction Models",
        "Geophysical Dynamics Simulation"
      ]
    },
    {
      id: "8",
      name: "Cameron S Carter",
      title: "Adjunct Professor, MED:Psychiatry & Behav Sci",
      email: "cscarter@ucdavis.edu",
      department: "Psychiatry",
      major: "Psychiatry",
      researchInterests: ["Neuroscience"],
      bio: "Adjunct professor focusing on neuroscience research in the psychiatry department.",
      education: [
        { institution: "Harvard Medical School", degree: "MD", years: "1992-1996" },
        { institution: "Duke University", degree: "BS Biology", years: "1988-1992" }
      ],
      latestResearch: [
        "Neural Correlates of Cognitive Control",
        "Behavioral Changes in Psychiatric Disorders",
        "Neuroplasticity in Treatment Response"
      ]
    },
    {
      id: "9",
      name: "John H Morrison",
      title: "Professor, MED:Neurology Director, MED:Neurology",
      email: "jhmorrison@ucdavis.edu",
      department: "Neurology",
      major: "Neurology",
      researchInterests: ["Neuroscience"],
      bio: "Professor and director in the neurology department specializing in neuroscience research.",
      education: [
        { institution: "Columbia University", degree: "PhD Neuroscience", years: "1989-1994" },
        { institution: "Yale University", degree: "BS Biological Sciences", years: "1985-1989" }
      ],
      latestResearch: [
        "Age-related Cognitive Decline Mechanisms",
        "Neural Connectivity in Neurological Disorders",
        "Therapeutic Approaches for Neurodegenerative Diseases"
      ]
    },
    {
      id: "10",
      name: "Ranganath, Charan",
      title: "Professor, Ctr for Neurosci, Ctr for Neurosci",
      email: "cranganath@ucdavis.edu",
      department: "Neuroscience",
      major: "Neuroscience",
      researchInterests: ["Neuroscience"],
      bio: "Professor at the Center for Neuroscience conducting research on memory and cognition.",
      education: [
        { institution: "Northwestern University", degree: "PhD Cognitive Neuroscience", years: "1995-2000" },
        { institution: "University of Illinois", degree: "MS Psychology", years: "1993-1995" }
      ],
      latestResearch: [
        "Memory Formation Processes in the Human Brain",
        "Neural Substrates of Episodic Memory",
        "Cognitive Maps and Spatial Navigation"
      ]
    },
    {
      id: "11",
      name: "Luck, Steven",
      title: "Professor, Ctr for Mind & Brain",
      email: "sjluck@ucdavis.edu",
      department: "Center for Mind & Brain",
      major: "Neuroscience",
      researchInterests: ["Neuroscience"],
      bio: "Professor at the Center for Mind & Brain investigating attention and perception mechanisms.",
      education: [
        { institution: "UC San Diego", degree: "PhD Cognitive Science", years: "1990-1995" },
        { institution: "Reed College", degree: "BA Psychology", years: "1986-1990" }
      ],
      latestResearch: [
        "Visual Attention Mechanisms",
        "Electrophysiological Markers of Cognitive Processing",
        "Working Memory Constraints and Capacity"
      ]
    },
    {
      id: "12",
      name: "Pleasure, David",
      title: "Professor, MED: Neurology",
      email: "dpleasure@ucdavis.edu",
      department: "Neurology",
      major: "Neurology",
      researchInterests: ["Neuroscience"],
      bio: "Professor in Neurology department focused on developmental neuroscience and neurological disorders.",
      education: [
        { institution: "Johns Hopkins", degree: "MD", years: "1978-1982" },
        { institution: "Stanford University", degree: "BS Biochemistry", years: "1974-1978" }
      ],
      latestResearch: [
        "Developmental Mechanisms in Neurological Disorders",
        "Myelin Development and Repair",
        "Therapeutic Approaches for Multiple Sclerosis"
      ]
    },
    {
      id: "13",
      name: "Mangun, George",
      title: "Professor, Ctr for Mind & Brain",
      email: "grmangun@ucdavis.edu",
      department: "Center for Mind & Brain",
      major: "Neuroscience",
      researchInterests: ["Neuroscience"],
      bio: "Professor at the Center for Mind & Brain studying cognitive neuroscience and attention networks.",
      education: [
        { institution: "University of California, San Diego", degree: "PhD Neuroscience", years: "1984-1989" },
        { institution: "University of Oregon", degree: "BS Psychology", years: "1980-1984" }
      ],
      latestResearch: [
        "Attention Networks in the Human Brain",
        "Neural Mechanisms of Selective Information Processing",
        "Integration of Cognitive and Sensory Systems"
      ]
    },
    {
      id: "14",
      name: "Usrey, William",
      title: "Professor, Ctr for Neurosci",
      email: "wmusrey@ucdavis.edu",
      department: "Center for Neuroscience",
      major: "Neuroscience",
      researchInterests: ["Neuroscience"],
      bio: "Professor at the Center for Neuroscience investigating visual system circuits and function.",
      education: [
        { institution: "Duke University", degree: "PhD Neurobiology", years: "1992-1997" },
        { institution: "University of Virginia", degree: "BS Biology", years: "1988-1992" }
      ],
      latestResearch: [
        "Neural Circuits in the Visual System",
        "Thalamocortical Communication",
        "Visual Perception Mechanisms"
      ]
    },
    {
      id: "15",
      name: "Fox, Andrew",
      title: "Associate Professor, PSYCHOLOGY",
      email: "dfox@ucdavis.edu",
      department: "Psychology",
      major: "Psychology",
      researchInterests: ["Neuroscience"],
      bio: "Associate Professor in Psychology department researching cognitive neuroscience and psychological processes.",
      education: [
        { institution: "University of Michigan", degree: "PhD Psychology", years: "2006-2011" },
        { institution: "University of California, Berkeley", degree: "BA Psychology", years: "2002-2006" }
      ],
      latestResearch: [
        "Neural Correlates of Emotion Regulation",
        "Psychological Adaptation to Stress",
        "Individual Differences in Cognitive Control"
      ]
    },
    {
      id: "16",
      name: "O'reilly, Randall",
      title: "Professor, Psychology",
      email: "oreilly@ucdavis.edu",
      department: "Psychology",
      major: "Psychology",
      researchInterests: ["Neuroscience"],
      bio: "Professor in Psychology department specializing in computational cognitive neuroscience.",
      education: [
        { institution: "Carnegie Mellon University", degree: "PhD Computer Science", years: "1992-1996" },
        { institution: "Harvard University", degree: "BA Cognitive Science", years: "1988-1992" }
      ],
      latestResearch: [
        "Computational Models of Cognition",
        "Neural Network Simulations of Learning",
        "Cognitive Architecture and Brain Function"
      ]
    },
    {
      id: "17",
      name: "Bales, Karen",
      title: "Professor, Psychology. ACT/INTERIM DIRECTOR, California National Primate Research Center (CNPRC)",
      email: "klbales@ucdavis.edu",
      department: "Psychology",
      major: "Psychology",
      researchInterests: ["Neuroscience"],
      bio: "Professor in Psychology and Acting Director of the California National Primate Research Center conducting research on social behavior and neuroscience.",
      education: [
        { institution: "University of Maryland", degree: "PhD Biological Psychology", years: "1991-1996" },
        { institution: "Purdue University", degree: "BS Biology", years: "1987-1991" }
      ],
      latestResearch: [
        "Social Bonding Neurobiology",
        "Hormonal Influences on Behavior",
        "Development of Social Cognition in Primates"
      ]
    },
    {
      id: "18",
      name: "Bauman, Melissa",
      title: "Professor, PHYSIOLOGY AND MEMBRANE BIOLOGY",
      email: "mdbauman@ucdavis.edu",
      department: "Physiology and Membrane Biology",
      major: "Physiology",
      researchInterests: ["Neuroscience"],
      bio: "Professor in Physiology and Membrane Biology department studying neurophysiological mechanisms.",
      education: [
        { institution: "UC Davis", degree: "PhD Neuroscience", years: "2000-2005" },
        { institution: "Cornell University", degree: "BS Biology", years: "1996-2000" }
      ],
      latestResearch: [
        "Membrane Physiology in Neuronal Function",
        "Ion Channel Dynamics in Neural Signaling",
        "Cellular Mechanisms of Neurodevelopmental Disorders"
      ]
    },
    {
      id: "19",
      name: "Peter C Wainwright",
      title: "Professor, Evolution & Ecol, CBS Professor, Center For Population Biology",
      email: "pcwainwright@ucdavis.edu",
      department: "Evolution & Ecology",
      major: "Biology",
      researchInterests: ["Biology", "Evolution", "Ecology", "Population Biology"],
      bio: "Professor specializing in evolutionary biology and ecology with a focus on population biology at UC Davis.",
      education: [
        { institution: "University of Chicago", degree: "PhD Evolutionary Biology", years: "1988-1992" },
        { institution: "Duke University", degree: "BS Biology", years: "1984-1988" }
      ],
      latestResearch: [
        "Evolutionary Mechanisms in Population Dynamics",
        "Ecological Adaptation in Changing Environments",
        "Population Genetics and Conservation Biology"
      ]
    },
    {
      id: "20",
      name: "Mark E Winey",
      title: "Dean, Biological Sciences: College of",
      email: "mwiney@ucdavis.edu",
      department: "Biological Sciences",
      major: "Biology",
      researchInterests: ["Biology", "Cell Biology", "Biological Sciences Administration"],
      bio: "Dean of the College of Biological Sciences at UC Davis, overseeing academic programs and research initiatives.",
      education: [
        { institution: "Stanford University", degree: "PhD Molecular Biology", years: "1987-1991" },
        { institution: "Syracuse University", degree: "BS Biology", years: "1983-1987" }
      ],
      latestResearch: [
        "Academic Leadership in Biological Sciences",
        "Molecular Mechanisms of Cell Division",
        "Educational Innovation in Biology"
      ]
    },
    {
      id: "21",
      name: "Krishna V Subbarao",
      title: "Distinguished Professor, Plant Pathology",
      email: "kvsubbarao@ucdavis.edu",
      department: "Plant Pathology",
      major: "Biology",
      researchInterests: ["Biology", "Plant Pathology", "Disease Resistance"],
      bio: "Distinguished Professor in Plant Pathology focusing on plant disease mechanisms and resistance strategies.",
      education: [
        { institution: "UC Berkeley", degree: "PhD Plant Pathology", years: "1989-1993" },
        { institution: "University of Agricultural Sciences, India", degree: "MS Plant Sciences", years: "1984-1986" }
      ],
      latestResearch: [
        "Molecular Basis of Plant Disease Resistance",
        "Fungal Pathogen Evolution and Adaptation",
        "Sustainable Disease Management Strategies"
      ]
    },
    {
      id: "22",
      name: "Bruce Hammock",
      title: "Professor, Entomology and Nematology Professor, M.I.N.D. Institute",
      email: "bdhammock@ucdavis.edu",
      department: "Entomology and Nematology",
      major: "Biology",
      researchInterests: ["Biology", "Entomology", "Nematology", "Neuroscience"],
      bio: "Professor with joint appointments in Entomology, Nematology, and the M.I.N.D. Institute, researching insect biology and neuroscience applications.",
      education: [
        { institution: "UC Berkeley", degree: "PhD Entomology", years: "1971-1975" },
        { institution: "Louisiana State University", degree: "BS Entomology", years: "1967-1971" }
      ],
      latestResearch: [
        "Insect Biochemistry and Molecular Biology",
        "Neurological Applications of Entomological Research",
        "Pesticide Alternatives and Environmental Health"
      ]
    },
    {
      id: "23",
      name: "Jonathan A Eisen",
      title: "Professor, Genome Center Professor, Evolution & Ecol, CBS Professor, Microbio & Immun Professor, Center For",
      email: "jaeisen@ucdavis.edu",
      department: "Genome Center",
      major: "Biology",
      researchInterests: ["Biology", "Genomics", "Evolution", "Microbiology", "Immunology"],
      bio: "Professor with multiple appointments across genomics, evolution, ecology, microbiology, and immunology departments.",
      education: [
        { institution: "Harvard University", degree: "PhD Evolutionary Biology", years: "1994-1998" },
        { institution: "Harvard University", degree: "BS Biology", years: "1990-1994" }
      ],
      latestResearch: [
        "Microbial Genomics and Evolution",
        "Computational Methods in Evolutionary Biology",
        "Microbiome Dynamics in Health and Disease"
      ]
    },
    {
      id: "24",
      name: "Blake Meyers",
      title: "Professor, UC DAVIS GENOME CENTER",
      email: "bcmeyers@ucdavis.edu",
      department: "UC Davis Genome Center",
      major: "Biology",
      researchInterests: ["Biology", "Genomics", "Bioinformatics"],
      bio: "Professor at the UC Davis Genome Center specializing in genomics and computational biology.",
      education: [
        { institution: "Cornell University", degree: "PhD Plant Molecular Biology", years: "1995-1999" },
        { institution: "University of Chicago", degree: "BS Molecular Biology", years: "1991-1995" }
      ],
      latestResearch: [
        "Functional Genomics in Model Organisms",
        "Next-Generation Sequencing Applications",
        "Computational Analysis of Biological Data"
      ]
    },
    {
      id: "25",
      name: "Siobhan Mary Brady",
      title: "Associate Professor, Plant Biology, CBS",
      email: "sbrady@ucdavis.edu",
      department: "Plant Biology",
      major: "Biology",
      researchInterests: ["Biology", "Plant Biology", "Plant Development"],
      bio: "Associate Professor in Plant Biology at the College of Biological Sciences, studying plant development and genetics.",
      education: [
        { institution: "University of Toronto", degree: "PhD Plant Biology", years: "2002-2007" },
        { institution: "McGill University", degree: "BS Plant Sciences", years: "1998-2002" }
      ],
      latestResearch: [
        "Gene Regulatory Networks in Plant Development",
        "Root System Architecture and Function",
        "Plant Responses to Environmental Stresses"
      ]
    },
    {
      id: "26",
      name: "Richard K Valicenti",
      title: "Prof/Chair, Radiation Oncology",
      email: "rkvalicenti@ucdavis.edu",
      department: "Radiation Oncology",
      major: "Biology",
      researchInterests: ["Biology", "Radiation Oncology", "Cancer Treatment"],
      bio: "Professor and Chair of Radiation Oncology department, focusing on cancer treatment and radiation therapy.",
      education: [
        { institution: "Harvard Medical School", degree: "MD", years: "1988-1992" },
        { institution: "Johns Hopkins University", degree: "BS Biological Sciences", years: "1984-1988" }
      ],
      latestResearch: [
        "Precision Radiation Therapy Techniques",
        "Clinical Outcomes in Oncology Treatments",
        "Radiation Biology and Tissue Response"
      ]
    },
    {
      id: "27",
      name: "Megan E Daly",
      title: "Professor, Radiation Oncology",
      email: "medaly@ucdavis.edu",
      department: "Radiation Oncology",
      major: "Biology",
      researchInterests: ["Biology", "Radiation Oncology", "Cancer Biology"],
      bio: "Professor in Radiation Oncology department researching cancer treatment methodologies and radiation effects on biological systems.",
      education: [
        { institution: "University of Pennsylvania", degree: "MD", years: "1999-2003" },
        { institution: "Stanford University", degree: "BS Biology", years: "1995-1999" }
      ],
      latestResearch: [
        "Radiation Response in Cancer Cells",
        "Novel Therapeutic Approaches in Oncology",
        "Biomarkers for Treatment Response"
      ]
    },
    {
      id: "28",
      name: "Daniel J Kliebenstein",
      title: "Associate Professor, Plant Sciences",
      email: "kliebenstein@ucdavis.edu",
      department: "Plant Sciences",
      major: "Biology",
      researchInterests: ["Biology", "Plant Sciences", "Plant Genetics"],
      bio: "Associate Professor in Plant Sciences studying plant genetics, metabolism, and environmental interactions.",
      education: [
        { institution: "Cornell University", degree: "PhD Plant Biology", years: "1996-2000" },
        { institution: "University of Minnesota", degree: "BS Plant Science", years: "1992-1996" }
      ],
      latestResearch: [
        "Plant Secondary Metabolism Regulation",
        "Genetic Basis of Environmental Adaptation",
        "Plant-Pathogen Interactions at the Molecular Level"
      ]
    }
  ]

export default mockProfessors;