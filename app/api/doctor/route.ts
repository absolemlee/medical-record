import dbConnect from "@/lib/mongodb"
import Doctor from "@/models/Doctor"
import { NextResponse } from "next/server"

export async function POST (request) {
  const {name, species} = await request.json()
  await dbConnect()
  await Doctor.create({name, species})
  return NextResponse.json({msg: 'provider created'}, {status: 201})
}