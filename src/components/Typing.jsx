import React from 'react'
import { useState, useEffect } from 'react'

function Typing(props) {

    const [sentence, setSentence] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0); // index of array
    const [stringIndex, setStringIndex] = useState(0); // index of character in string


    const typingObj = {
        text: props.text,
        typingSpeed: 100,
        deletingSpeed: 50,
        duration: 2000,
    }

    const text = typingObj.text
    const typingSpeed = typingObj.typingSpeed;
    const deletingSpeed = typingObj.deletingSpeed;

    const handleTyping = () => {
        if(isDeleting){
            if(sentence.length === 0){
                setIndex((prevIndex) => (prevIndex + 1)%(text.length));
                setStringIndex(0);
                setIsDeleting(false);
            }
            else{
                setSentence((prevSentence) => (prevSentence.slice(0,-1)));
            }
        }
        else{
            if(sentence.length === text[index].length){
                setIsDeleting(true);
            }
            else{
                setSentence((prevSentence) => prevSentence + (text[index][stringIndex]));
                setStringIndex((prevStringIndex) => prevStringIndex + 1 );
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(
            handleTyping, 
            isDeleting?deletingSpeed : typingSpeed
        )

        return () => clearInterval(interval);
    }, [sentence, index, stringIndex, isDeleting])

    

    return (
    <div className='h-12'>
            <h2 className='font-mono text-3xl font text-purple-700'>
                {sentence}
            </h2>
    </div>
    )
}

export default Typing