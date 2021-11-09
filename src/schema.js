const templates = {
  data: [
    {
      name: "professional",
      previewUrl: "www.image.com/file.jpg",
    },
  ],
};

const users = {
  data: [
    {
      googleID: "get from firebase",
      userData: "",
      saved: ["template1", "template2"],
      profileData: {
        name: {
          fname: "",
          lname: "",
        },
        contact: {
          phone: "",
          email: "",
        },
        links: {
          linkedin: "",
          instagram: "",
          twitter: "",
          facebook: "",
          github: "",
          website: "",
          youtube: "",
        },
        location: {
          city: "",
          country: "",
        },
        summary: "",

        education: [
          {
            startDate: "19",
            endDate: "23",
            currentYear: "3",
            institutionName: "TUD",
            course: "CS",
            score: "3",
            details: {
              modules: "Math",
              extra: "No",
            },
          },
        ],
        skills: [
          {
            title: "",
            list: ["", "", ""],
          },
        ],
        work: [
          {
            startDate: "",
            endDate: "",
            jobTitle: "",
            company: "",
            description: "",
          },
        ],
        experience: [
          {
            startDate: "",
            endDate: "",
            title: "",
            org: "",
            type: "",
            description: "",
          },
        ],
        achievements: [
          {
            type: "",
            org: "",
            date: "",
            desc: "",
          },
        ],
      },
    },
  ],
};
