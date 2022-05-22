
import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react";
import { FeebackType, feebackTypes } from ".."
import ScreenShootButton from "./ScreenShootButton";

interface FeedbackContentStepProps {
    feebackType: FeebackType;
    onFeedbackRestartRequested: () => void;
}

export default function ({ feebackType, onFeedbackRestartRequested }: FeedbackContentStepProps,  ){

    const feebackTypeInfo = feebackTypes [feebackType]

    const [screenshot, setscreenshot] = useState<String|null>(null)
    const [comment, setcomment] = useState('')

    function handleSubmitFeedback(event: FormEvent){

        event.preventDefault()

    }

    return (
       <>
       
       <header>

            <button onClick={onFeedbackRestartRequested} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" >
                <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>

           <span className="text-xl leading-6 flex items-center gap-2" >
               <img src ={feebackTypeInfo.image.source} alt={feebackTypeInfo.image.alt} className="w-6 h-6" />
                {feebackTypeInfo.title}
           </span>
       </header>

      <form className="my-4 w-full" >

        <textarea onChange={event => setcomment(event.target.value)} className="min-w-[304px] w-full min-h-[122px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1  resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder="Conte com detalhes o que está acontecendo..." />

        <footer className="flex gap-2 mt-2 " >

            

            <ScreenShootButton screenshot={screenshot} onScreenshotTook={setscreenshot} />

            <button disabled={comment.length === 0} onClick={handleSubmitFeedback} type="submit" className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-start text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500" >

                Enviar feeback

            </button>

        </footer>

      </form>
       
       </>
    )
    
}