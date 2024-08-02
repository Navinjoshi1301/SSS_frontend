import React from 'react'

const ContactButton = ({contactText}) => {
    return (
        <div> <button className="bg-transparent border border-primary-500 border-2 text-black font-bold rounded-full px-6 py-3 text-lg hover:bg-primary-500 hover:text-white">
            {contactText}
        </button></div>
    )
}

export default ContactButton