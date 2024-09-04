import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


 const handler =  async (req: { method: string; body: { question: any; answer: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id?: string; q1?: string; a1?: string; q2?: string; a2?: string; q3?: string; a3?: string; q4?: string; a4?: string; q5?: string; a5?: string; error?: string; }): void; new(): any; }; }; })=> {
    if(req.method ==='POST'){
        const { question, answer} = req.body

        try {
            const newSurvey = await prisma.survey.create({
                data: {
                    question, 
                    answer
                },
            });
            res.status(200).json(newSurvey);
        }catch(error){
            res.status(500).json({error: 'Failed to save response'});

        }
    }else {
        res.status(405).json({error: "Method not allowerd"})
    }
}


export default handler