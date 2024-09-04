import  prisma  from "@/libs/prismadb";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {

    const body = await request.json()
    const {  
        gender,
        age,
        city,
        durationOfResidence,
        currentlyPlayingRugby,
        reasonsForNotPlayingRugby,
        satisfactionLevel,
        distanceWillingToTravel,
        interestInRugbyEvents,
        desiredEventTypes,
        additionalComments} = body

    const Survey = await prisma.survey.create({ data: {   
        gender,
        age,
        city,
        durationOfResidence,
        currentlyPlayingRugby,
        reasonsForNotPlayingRugby,
        satisfactionLevel,
        distanceWillingToTravel,
        interestInRugbyEvents,
        desiredEventTypes,
        additionalComments 
    }})

    return NextResponse.json(Survey)
}