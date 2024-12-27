import prisma from "@/lib/prisma"

export async function POST(request){

    const {idThis, username, email, type, comment} = await request.json()
    const data = {idThis : Number(idThis), username, email, type, comment}

    const createComment = await prisma.comment.create({data})
    if(!createComment){
        return Response.json({status: 400, isCreated: false })
    }
    else{
        return Response.json({status: 200, isCreated: true })
    }
}