import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try{
        const student= await prisma.student.findMany();

        return NextResponse.json(student);
    }
    catch(err){
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}

export async function POST(req: NextRequest) {
    try{
        const body= await req.json();

        const student= await prisma.student.create({
            data: {
                student_name: body.student_name,
                email: body.email,
                enrollment_no: body.enrollment_no
            }
        });

        return NextResponse.json(student);

    }
    catch(err){
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}