/* eslint-disable react/no-unescaped-entities */

const ContactUs = () => {
    return (
        <div  name='contact' className='w-full   flex justify-center p-6 items-center mt-6'>
        <form method='POST' action="https://getform.io/f/aaebf962-c164-40c5-aedc-04986d792780" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className=' text-3xl py-4'>We're ready to discuss a project with you</p>
            </div>
            <input className='border-black border-2 p-2 rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 border-black border-2 rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='border-black border-2 p-2 rounded-lg'  name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 rounded-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    );
};

export default ContactUs;