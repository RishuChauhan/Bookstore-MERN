import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Introduction</p>
        <p className='my-2'>
          Superman first appeared in Action Comics #1 in June 1938. He was so popular that he got his own comic book in summer 1939. This was the first comic book for any superhero. 
Superman's origin story is one of the most well-known in comic book history. It goes like this: 
Superman's birth: Superman is born Kal-El on the planet Krypton.
Krypton's destruction: Scientists Jor-El and Lara learn that Krypton is about to be destroyed. Jor-El builds a spacecraft to send Kal-El to Earth.
Kal-El's journey: Jor-El places Kal-El in the spacecraft and launches it. The ship lands in the American countryside near Smallville.
Kal-El's discovery: Martha and Jonathan Kent, a couple from Smallville, find Kal-El.
Superman has superhuman strength, can jump great distances, and has many other powers. These powers come from his alien origins. 
Some say that the New 52 is a good place to start reading Superman. The New 52 was a reboot of the DC universe. 

        </p>
      </div>
    </div>
  );
};

export default BookModal;