import ReactPlayer from "react-player";
import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ video, onClose }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-[1000]" />
      <div className="fixed top-[50%] h-[400px] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000] w-[90%] md:max-w-4xl md:h-[500px]">
        <button onClick={onClose}>
          <FaRegWindowClose color="red" className="h-6 w-6" />
        </button>
        <ReactPlayer height="100%" width="100%" controls url={video} />
      </div>
    </>
  );
};

export default Modal;
