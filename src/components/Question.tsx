import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface QuestionProps {
	question: string
	answer: string
}

const Question = ({ question, answer }: QuestionProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div>
			<button
				className='w-full text-left flex justify-between items-center focus:outline-none hover:cursor-pointer text-black-500 [&_p]:font-bold [&_p]:text-step-2 [&_p]:leading-tight'
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='font-robotoCondensed'>{question}</p>
				<p>{isOpen ? '-' : '+'}</p>
			</button>
			{isOpen && (
				<div className='pt-2xs text-black-400 text-step-1 font-light leading-snug answers'>
					<ReactMarkdown>{answer}</ReactMarkdown>
				</div>
			)}
		</div>
	)
}

export default Question
