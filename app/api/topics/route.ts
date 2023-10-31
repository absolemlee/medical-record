import { NextResponse } from "next/server"
import connectDB from '@/lib/mongodb'
import Doctor from "@/models/doctor"

export async function POST(req) {
  const {firstName} = await req.json()
  await connectDB()
  await Doctor.create({firstName})
  console.log('first name', firstName)

  return NextResponse.json({msg: ['hi from contact route']}, {status: 201})
}