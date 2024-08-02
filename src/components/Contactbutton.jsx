import React from 'react'

const ContactButton = ({contactText}) => {
    return (
        <div> <button className="bg-transparent  border-cyan-400 border-2 text-black font-bold rounded-full px-6 py-3 text-lg  hover:text-white hover:bg-cyan-400">
            {contactText}
        </button></div>
    )
}

export default ContactButton