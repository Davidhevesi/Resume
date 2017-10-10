var bio = {
    "name": "David Hevesi",
    "role": "Web Developer",
    "contacts": {
        "email": "davidhevesi2008@gmail.com",
        "github": "davidhevesi",
        "twitter": "@davidhevesi",
        "location": "Atlanta, Ga"
    },

    "picture": "images/1.gif",
    "welcomeMessage": "I am an aspiring Web Developer looking for opportunity in the field",
    "skills": ["CSS", "HTML", "JavaScript"]

};
var work = {
    "jobs": [{
            "employer": "Valchara Designs",
            "title": "Co-Founder",
            "location": "Trilogy Park, Atlanta GA",
            "datesWorked": "Feb 2017 - Present",
            "description": "Design   and   handcraft   wooden   signs   for   home   and   wedding   decor" +
                "Create   and   maintain   social   media   content" +
                "Aid   in   accounting   and   administrative   functions."
        },
        {
            "employer": "Heavenly Wood Floors",
            "title": "Hardwood Flooring (Supervisor)",
            "location": "Lendon Lane, Lawrneceville GA",
            "datesWorked": "August 2017 - Present",
            "description": "Overseeing   the   company   employees   to   ensure   the   jobs   are   done   in   a   timely   manner" +
                "Inspecting   the   completed   jobs   to   ensure   quality   and   customer   satisfaction" +
                "Removing   old   hardwood   floors."
        },
        {
            "employer": "First Atlanta Flooring",
            "title": "Warehouse employee",
            "location": "Norcross, GA",
            "datesWorked": "August 2017 - Present",
            "description": "Overseeing   the   company   employees   to   ensure   the   jobs   are   done   in   a   timely   manner" +
                "Inspecting   the   completed   jobs   to   ensure   quality   and   customer   satisfaction" +
                "Removing   old   hardwood   floors."
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedwelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if(work.jobs.length > 0) {
    
        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();



