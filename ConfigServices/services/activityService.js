import Activity
from "../models/activity.js"

export async function
createActivity(data) {

    try {

        const activity =
        new Activity(data)

        await activity.save()

        return {

            code : 200,

            message :
            "Activity Saved"
        }

    } catch(error) {

        return {

            code : 500,

            message :
            error.message
        }
    }
}

export async function
getActivities() {

    try {

        const activities =
        await Activity.find()

        return {

            code : 200,

            data : activities
        }

    } catch(error) {

        return {

            code : 500,

            message :
            error.message
        }
    }
}