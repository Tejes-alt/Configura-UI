import express from "express"

import * as activityService
from "../services/activityService.js"

const router = express.Router()

router.post(
    "/create",
    async(req,res)=>{

    const response =
    await activityService
    .createActivity(req.body)

    res.json(response)
})

router.get(
    "/all",
    async(req,res)=>{

    const response =
    await activityService
    .getActivities()

    res.json(response)
})

export default router