import { useState } from "react"


import bugImgUrl from "../../assets/Bug.svg"
import ideiaImgUrl from "../../assets/Idea.svg"
import thoughtImgUrl from "../../assets/Thought.svg"

import FeedbackTypeStep from "./Steps/FeedbackTypeStep"
import FeedbackContentStep from "./Steps/FeedbackContentStep"

export const feebackTypes = {
    BUG: {
        title:"Problema",
        image:{
            source:bugImgUrl,
            alt:'Imagem de um inseto',
        }
    },
    IDEIA: {
        title: "Ideia",
        image:{
            source:ideiaImgUrl,
            alt:'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: "Outro",
        image:{
            source:thoughtImgUrl,
            alt:'Imagem de um balão de pensamento',
        }
    },
}

export type FeebackType = keyof typeof feebackTypes

export default function (){


    const [feebackType, setFeebackType] = useState<FeebackType | null>(null)
    const [feebackSent, setFeebackSent] = useState(false)

    function handleRestartFeedback() {
        setFeebackType(null)
    }


    return (

        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >

        
            {!feebackType ?(  
            
                <FeedbackTypeStep onFeedbackTypeChanged={setFeebackType} /> 
            
            ):( 
            
                <FeedbackContentStep onFeedbacksent={feebackSent} feebackType={feebackType} onFeedbackRestartRequested={handleRestartFeedback} />
            
            )}
           
            
            <footer className="text-xs text-neutral-400" > 
                Feito pelo Elves Vieira
            </footer>

        </div>
        
    )
}