'use strict';

angular.module('lyncSchoolApp').constant(
    'formStudent', {
        "properties": {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "FIRST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "LAST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "userName": {
                        "title": "USER NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid UserName",
                        "css": "half-width"
                    },
                    "primaryEmail": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "name": "email",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have enterd invalid email.",
                        "css": "half-width"
                    }
                }
            },
            "StudentDetails": {
                "header": "Student Details",
                "isSelected": false,
                "formInfo": {
                    "mobile": {
                        "title": "CONTACT NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 40,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "dob": {
                        "title": "D.O.B",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid DOB",
                        "css": "half-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },

                    "zipcode": {
                        "title": "ZIPCODE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be Number",
                        "css": "half-width"
                    },
                    "city": {
                        "title": "CITY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "state",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "COUNTRY",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    }
                }
            },
            "professionalDetails": {
                "header": "Professional Details",
                "isSelected": false,
                "formInfo": {
                    "collegeName": {
                        "title": "STUDENT COLLEGE NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be only characters.",
                        "css": "full-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "half-width"
                    },
                    "usernameOrEmail": {
                        "title": "USERNAME OR EMAIL",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": null,
                        "css": "half-width"
                    }

                }
            }

        }
    }
);
